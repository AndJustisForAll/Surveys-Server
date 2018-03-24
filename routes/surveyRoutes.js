const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('survey');

module.exports = app => {
    app.get('/api/surveys/feedback', (req, res) => {
        res.send('Thank you for your feedback');
    });

    app.get('/api/surveys', requireLogin, async(req,res) => {
        const surveys = await Survey.find();
        res.send(surveys); 

    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const {
            title,
            subject,
            body,
            recipients
        } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
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

    app.post('/api/surveys/webhooks', (req, res) => {
        console.log(req.body);
        res.send({});
    });
};