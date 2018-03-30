const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Path = require('path-parser');
const _ = require('lodash');
const { URL } = require('url');

const Survey = mongoose.model('survey');

module.exports = app => {
    app.get('/api/surveys/:surveyID/:choice', (req, res) => {
        const { surveyID, choice } = req.params;
        res.send({ surveyID, choice });
    });

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({}, 'title yes no dateSent lastReplied');
        res.send(surveys);

    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const {
            title,
            subject,
            emailBody,
            recipients
        } = req.body;

        const survey = new Survey({
            title,
            subject,
            body: emailBody,
            recipients: recipients.split(',').map(email => ({
                email: email.trim()
            })),
            _user: req.user.id,
            dateSent: Date.now()
        });


        //send mail here
        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            console.log(err);
        }
    });

    app.post('/api/surveys/webhooks', async (req, res) => {
        const path = new Path('/api/surveys/:surveyID/:choice');

        const events = _.chain(req.body)
            .map(({ email, url }) => {
                const urlMatch = path.test(new URL(url).pathname);
                if (urlMatch) {
                    return {
                        email,
                        surveyID: urlMatch.surveyID,
                        choice: urlMatch.choice
                    }
                }
            })
            .compact()
            .uniqBy('email', 'surveyID')
            .each(({ surveyID, email, choice }) => {
                Survey.updateOne({
                    _id: surveyID,
                    recipients: { $elemMatch: { email: email, replied: false } }
                }, {
                    $inc: {
                        [choice]: 1 },
                    $set: { 'recipients.$.replied': true },
                    lastReplied: new Date()
                }).exec();
            }).
            value();
        res.send({});
    });
};
