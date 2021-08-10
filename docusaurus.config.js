const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dev List',
  tagline: 'Official Devevelopers List API Documentation',
  url: 'https://docs.devlist.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://devlist.dev/img/favicon.png',
  organizationName: '1TGDev', // Usually your GitHub org/user name.
  projectName: 'devlist', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Dev List',
      logo: {
        alt: 'Logo',
        src: 'https://devlist.dev/img/favicon.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'get-started',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/1TGDev/devlist',
          label: 'GitHub',
          position: 'right',
        },
		{
          href: 'https://npmjs.com/devlist',
          label: 'NPM',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Get Started',
              to: '/docs/get-started',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/1TGDev/devlist',
            },
            {
              label: 'NPM',
              href: 'https://npmjs.com/devlist',
            },
            {
              label: 'Discord',
              href: 'https://devlist.dev/discord',
            },
          ],
        },
        {
          title: 'Other',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Author',
              to: 'https://itariq.dev',
            },
          ],
        },
      ],
      copyright: `© Copyright © ${new Date().getFullYear()} All Rights Reserved, <a href="https://itariq.dev" target="_blank">TARIQ</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/1TGDev/devlist-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/1TGDev/devlist-docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
