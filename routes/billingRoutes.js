const keys = require('./../config/keys');
const Stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const paymentSource = req.body.id;

        const charge = await Stripe.charges.create({
            amount: 500,
            currency: 'usd',
            source: paymentSource,
            description: 'TEST'
        });

        req.user.credits += 5;
        const user = await req.user.save();

        res.json(user);
    });
};
