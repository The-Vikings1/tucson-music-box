import { NextApiRequest, NextApiResponse } from 'next';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const amount = req.body.amount;

    try {
      const params = {
        submit_type: 'donate',
        payment_method_types: ['card'],
        line_items: [
          {
            name: 'Custom amount donation',
            amount,
            currency: 'usd',
            quantity: 1,
          },
        ],
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/fail`,
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error';
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
