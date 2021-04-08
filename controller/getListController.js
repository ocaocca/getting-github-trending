const axios = require('axios')

module.exports = {
  getList: async (req, res) => {
    await axios.get('https://api.github.com/search/repositories?q=created:%3E2021-03-01&sort=stars&order=desc?per_page=100')
      .then(result => {
        const getLanguage = []
        const list = []
        result.data.items.forEach(item => {
          getLanguage.push(item.language)
        })
        const languages = [...new Set(getLanguage)]
        languages.forEach(lang => {
          const repos = []
          result.data.items.forEach(item => {
            if (item.language === lang) repos.push(item.html_url)
          })
          list.push({
            languages: lang,
            repositories: repos
          })
        }); res.send(list)
      })
  }
}
