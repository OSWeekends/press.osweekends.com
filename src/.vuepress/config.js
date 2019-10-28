module.exports = {
  title: 'OSW Press',
  description: 'La información oficial de OSW',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: 'OSWeekends/press.osweekends.com',
    editLinks: true,
    editLinkText: 'Editar en GitHub',
    nextLinks: true,
    prevLinks: true,
    lastUpdated: 'Última actualización', // string | boolean
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Acerca de', link: '/about/' }
    ],
    smoothScroll: true,
    searchPlaceholder: 'Buscar...'
  },
  plugins: [
    '@vuepress/back-to-top',
    [ '@vuepress/google-analytics', { 'ga': 'UA-150935641-1' } ],
    [
      '@vuepress/last-updated',
      {
        transformer: ( timestamp, lang ) => {
          const moment = require( 'moment' )
          moment.locale( 'es' )
          return moment( timestamp ).fromNow()
        }
      }
    ]
  ]
}
