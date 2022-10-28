export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'rrsartpl/sanity-angular-tailwindcss-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '635c23cabe39492afa1bc094',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-szix5kxf',
                  apiId: 'a63b9301-97de-4ab5-865b-e779faef73c4'
                },
                {
                  buildHookId: '635c23cac6090b2a92805992',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-qm744kgy',
                  apiId: '38f62b7f-718f-4558-a359-d3f6d38faff4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rrsartpl/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-qm744kgy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
