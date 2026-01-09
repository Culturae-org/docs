import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Culturae Docs',
  description: 'Open Source Knowledge Platform Documentation',

  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],

  ignoreDeadLinks: [
    /^http:\/\/localhost/,
  ],

  appearance: 'dark',

  locales: {
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Cultpedia', link: '/en/cultpedia/' },
          { text: 'Main Site', link: 'https://www.culturae.me' }
        ],
        sidebar: [
          {
            text: 'Culturae',
            items: [
              { text: 'Introduction', link: '/en/intro' },
            ]
          },
          {
            text: 'Cultpedia',
            items: [
              { text: 'Overview', link: '/en/cultpedia/' },
              { text: 'Getting Started', link: '/en/cultpedia/getting-started' },
              { text: 'Data Format', link: '/en/cultpedia/format' },
              { text: 'CLI Tool', link: '/en/cultpedia/cli' },
              { text: 'Contributing', link: '/en/cultpedia/contributing' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Culturae-org' }
        ]
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Cultpedia', link: '/fr/cultpedia/' },
          { text: 'Site Principal', link: 'https://www.culturae.me' }
        ],
        sidebar: [
          {
            text: "Culturae",
            items: [
              { text: 'Introduction', link: '/fr/intro' },
            ]
          },
          {
            text: 'Cultpedia',
            items: [
              { text: 'Aperçu', link: '/fr/cultpedia/' },
              { text: 'Premiers Pas', link: '/fr/cultpedia/getting-started' },
              { text: 'Format des Données', link: '/fr/cultpedia/format' },
              { text: 'Outil CLI', link: '/fr/cultpedia/cli' },
              { text: 'Contribuer', link: '/fr/cultpedia/contributing' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Culturae-org' }
        ],
        outline: {
          label: 'Sur cette page'
        },
        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante'
        },
        darkModeSwitchLabel: 'Apparence',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Retour en haut',
        lastUpdatedText: 'Dernière mise à jour'
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Cultpedia', link: '/es/cultpedia/' },
          { text: 'Sitio Principal', link: 'https://www.culturae.me' }
        ],
        sidebar: [
          {
            text: 'Culturae',
            items: [
              { text: 'Introducción', link: '/es/intro' },
            ]
          },
          {
            text: 'Cultpedia',
            items: [
              { text: 'Resumen', link: '/es/cultpedia/' },
              { text: 'Primeros Pasos', link: '/es/cultpedia/getting-started' },
              { text: 'Formato de Datos', link: '/es/cultpedia/format' },
              { text: 'Herramienta CLI', link: '/es/cultpedia/cli' },
              { text: 'Contribuir', link: '/es/cultpedia/contributing' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Culturae-org' }
        ]
      }
    }
  },

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Culturae',

    editLink: {
      pattern: 'https://github.com/Culturae-org/website/edit/main/docs/:path'
    },

    footer: {
      message: 'Released under CC-BY-SA 4.0 License.',
      copyright: 'Copyright © 2025 Culturae Organization'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    theme: {
      dark: 'github-dark',
      light: 'github-light'
    }
  }
})
