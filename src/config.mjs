import defaultImage from './assets/images/logo.svg';

const CONFIG = {
  name: 'Builders',

  origin: 'https://builders.bybrooklyn.dev/',
  basePathname: '/',
  trailingSlash: false,

  title: 'Builders — Custom PCs Built to Perform',
  description:
    'Builders designs and assembles custom PCs for gaming, creator, and workstation needs with curated parts, clean cable work, and Stripe-secured checkout.',
  defaultImage: defaultImage,

  defaultTheme: 'dark', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
};

export const SITE = { ...CONFIG };
