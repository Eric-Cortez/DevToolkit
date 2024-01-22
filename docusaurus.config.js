// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// Define this so it can be easily modified in scripts (to host elsewhere)
const baseUrl = "/DevToolkit/";


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevToolkit',
  tagline: 'Bit by Bit: Crafting a Living Developer\'s Toolkit',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ericcortez.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Eric-Cortez', // Usually your GitHub org/user name.
  projectName: 'DevToolkit', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: `${baseUrl}img/docusaurus-social-card.jpg`,
      navbar: {
        title: 'DevToolkit',
        logo: {
          alt: 'DevToolkit',
          src: `${baseUrl}img/logo.svg`,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'webDevSidebar',
            position: 'left',
            label: 'Web Development',
          },
          { to: `${baseUrl}about`,label: 'About', position: 'left' }, 
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Eric-Cortez/DevToolkit',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Web Development',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/Eric-Cortez/DevToolkit',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/eric-cortez-0101/',
              },
              {
                label: 'Relit',
                href: 'https://replit.com/@EricCortez5',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DevToolkit, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
