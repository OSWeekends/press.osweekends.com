module.exports = {
  title: 'OSWeekends Press',
  description: 'La información oficial de OSW',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: 'OSWeekends/press.osweekends',
    editLinks: true,
    editLinkText: 'Editar en GitHub',
    nextLinks: true,
    prevLinks: true,
    lastUpdated: 'Última actualización  ', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' }
    ],
    smoothScroll: true,
    searchPlaceholder: 'Buscar...',
    // TODO
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }
  }

}
