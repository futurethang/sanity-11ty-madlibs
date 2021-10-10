const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: '72y367xu',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})

