require('dotenv').config();
const stripe = require('stripe')(
  'sk_test_51MDFeaFkq2VeAKuGhgV63XPUXM9jLkKgTaUYMavrkvnDZ8diAcYyREJHTzHwSXvzVZRM2QK3pTU7Wa6zaleUb6Ea00aUkVZMIs'
); /*(`${import.meta.env.VITE_STRIPE_SECRET_KEY}`)*/

export async function handler(event) {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
}
