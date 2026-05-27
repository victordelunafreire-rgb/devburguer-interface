import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51TaftuITLbkqEUnzKkHHrLISd27EvrjLzP8fYakspKIRw38feFMc41mKMPnd9veXs26G2SOeeWJu37VRZ2nTYuuO00SvDBRiQJ',
);

export default stripePromise;
