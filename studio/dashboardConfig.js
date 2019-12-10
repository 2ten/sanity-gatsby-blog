export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5def197f95c2d172b2d0d723',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kz3eqags',
                  apiId: '7f7bee54-8506-4415-a94b-538751f9511d'
                },
                {
                  buildHookId: '5def197feebfc568c5d0475f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-623r2ppn',
                  apiId: '090c4325-65c0-45c8-a62b-4d75eef130d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/2ten/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-623r2ppn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
