import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Shop',
      href: getPermalink('/download'),
    },
    {
      text: 'Budget',
      href: getPermalink('/download#selector'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Support',
      href: 'mailto:hello@builders.bybrooklyn.dev',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Shop',
      links: [
        { text: 'Builds', href: getPermalink('/download') },
        { text: 'Budget selector', href: getPermalink('/download#selector') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Team', href: getPermalink('/about/#team') },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Support', href: 'mailto:hello@builders.bybrooklyn.dev' },
        { text: 'Quotes', href: 'mailto:hello@builders.bybrooklyn.dev' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ],
  socialLinks: [
    { arialabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/bybrooklyn' },
    { arialabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com' },
    {
      arialabel: 'Email',
      icon: 'tabler:mail-opened',
      href: 'mailto:hello@builders.bybrooklyn.dev',
    },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-xs bg-[url(~/assets/images/logo.svg)]"></span>
    Built by <a class="text-[color:var(--color-primary)] dark:text-white font-bold decoration-slate-400 decoration-dotted underline" href="https://builders.bybrooklyn.dev/"> Builders</a> · All rights reserved.
  `,
};
