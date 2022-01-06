const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dev List',
  tagline: 'Official Devevelopers List API Documentation',
  url: 'https://docs.dlist.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://dlist.dev/img/favicon.png',
  organizationName: '1TGDev', // Usually your GitHub org/user name.
  projectName: 'devlist', // Usually your repo name.
  themeConfig: {
	colorMode: {
	  defaultMode: 'dark',
	},
    navbar: {
      title: 'Dev List',
      logo: {
        alt: 'Logo',
        src: 'https://dlist.dev/img/favicon.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'get-started',
          position: 'left',
          label: 'SDK',
        },
        {to: '/api/get-started', label: 'API', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
		{
          href: 'https://dlist.dev',
          label: 'Website',
          position: 'right',
        },
		{
          href: 'https://npmjs.com/devlist',
          label: 'NPM',
          position: 'right',
        },
        {
          href: 'https://github.com/1TGDev/devlist',
          label: 'GitHub',
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
              label: 'SDK',
              to: '/docs/get-started',
            },
			{
              label: 'API',
              to: '/api/get-started',
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
              href: 'https://dlist.dev/discord',
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
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebars.js'),
		editUrl: 'https://github.com/1TGDev/devlist-docs/tree/master',
      },
    ],
	[
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        redirects: [
          {
            from: ['/docs'],
            to: '/docs/get-started',
          },
		  {
            from: ['/api', '/docs/api'],
            to: '/api/get-started',
          },
        ],
      },
    ],
  ],
};
