module.exports = {
  title: 'Jasper',
  tagline: 'Modern React Component Library from COMPFEST',
  url: 'https://jasper.compfest.id',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'COMPFEST',
  projectName: 'jasper',
  themeConfig: {
    navbar: {
      title: 'Jasper',
      logo: {
        alt: 'Jasper Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/COMPFEST/jasper',
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
              label: 'Installation',
              to: 'docs/installation',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/COMPFEST/jasper',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} COMPFEST.`,
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
            'https://github.com/COMPFEST/jasper/edit/master/docusaurus/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/COMPFEST/jasper/edit/master/docusaurus/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
