export default [
  {
    path: '/settings',
    name: '用户管理',
    icon: 'dashboard',
    locale: 'menu.dashboard',
    authority: [
      'admin',
      'user'
    ],
    children: [
      {
        path: '/settings/roleSetting',
        name: '角色权限设置',
        exact: true,
        locale: 'menu.dashboard.analysis'
      },
      {
        path: '/dashboard/monitor',
        name: 'Monitor',
        exact: true,
        locale: 'menu.dashboard.monitor'
      },
      {
        path: '/dashboard/workplace',
        name: 'Workplace',
        exact: true,
        locale: 'menu.dashboard.workplace'
      }
    ]
  },
  {
    path: '/form',
    icon: 'form',
    name: 'Form',
    locale: 'menu.form',
    authority: [
      'admin',
      'user'
    ],
    children: [
      {
        path: '/form/basic-form',
        name: 'Basic Form',
        exact: true,
        locale: 'menu.form.basicform'
      },
      {
        path: '/form/step-form',
        name: 'Step Form',
        hideChildrenInMenu: true,
        locale: 'menu.form.stepform',
        children: [
          {
            path: '/form/step-form/info',
            name: 'Step Form(write transfer information)',
            exact: true,
            locale: 'menu.form.stepform.info'
          },
          {
            path: '/form/step-form/confirm',
            name: 'Step Form(confirm transfer information)',
            exact: true,
            locale: 'menu.form.stepform.confirm'
          },
          {
            path: '/form/step-form/result',
            name: 'Step Form(finished)',
            exact: true,
            locale: 'menu.form.stepform.result'
          }
        ]
      },
      {
        path: '/form/advanced-form',
        name: 'Advanced Form',
        authority: [
          'admin',
          'user'
        ],
        exact: true,
        locale: 'menu.form.advancedform'
      }
    ]
  },
  {
    path: '/list',
    icon: 'table',
    name: 'List',
    locale: 'menu.list',
    authority: [
      'admin',
      'user'
    ],
    children: [
      {
        path: '/list/table-list',
        name: 'Search Table',
        exact: true,
        locale: 'menu.list.searchtable'
      },
      {
        path: '/list/basic-list',
        name: 'Basic List',
        exact: true,
        locale: 'menu.list.basiclist'
      },
      {
        path: '/list/card-list',
        name: 'Card List',
        exact: true,
        locale: 'menu.list.cardlist'
      },
      {
        path: '/list/search',
        name: 'Search List',
        locale: 'menu.list.searchlist',
        children: [
          {
            path: '/list/search/articles',
            name: 'Search List(articles)',
            exact: true,
            locale: 'menu.list.searchlist.articles'
          },
          {
            path: '/list/search/projects',
            name: 'Search List(projects)',
            exact: true,
            locale: 'menu.list.searchlist.projects'
          },
          {
            path: '/list/search/applications',
            name: 'Search List(applications)',
            exact: true,
            locale: 'menu.list.searchlist.applications'
          }
        ]
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'profile',
    locale: 'menu.profile',
    authority: [
      'admin',
      'user'
    ],
    children: [
      {
        path: '/profile/basic',
        name: 'Basic Profile',
        exact: true,
        locale: 'menu.profile.basic'
      },
      {
        path: '/profile/advanced',
        name: 'Advanced Profile',
        authority: [
          'admin'
        ],
        exact: true,
        locale: 'menu.profile.advanced'
      }
    ]
  },
  {
    name: 'Result',
    icon: 'check-circle-o',
    path: '/result',
    locale: 'menu.result',
    authority: [
      'admin',
      'user'
    ],
    children: [
      {
        path: '/result/success',
        name: 'Success',
        exact: true,
        locale: 'menu.result.success'
      },
      {
        path: '/result/fail',
        name: 'Fail',
        exact: true,
        locale: 'menu.result.fail'
      }
    ]
  },
  {
    name: 'Exception',
    icon: 'warning',
    path: '/exception',
    locale: 'menu.exception',
    authority: [
      'admin',
      'user'
    ],
    children: [
      {
        path: '/exception/403',
        name: '403',
        exact: true,
        locale: 'menu.exception.not-permission'
      },
      {
        path: '/exception/404',
        name: '404',
        exact: true,
        locale: 'menu.exception.not-find'
      },
      {
        path: '/exception/500',
        name: '500',
        exact: true,
        locale: 'menu.exception.server-error'
      }
    ]
  },
  {
    name: 'Account',
    icon: 'user',
    path: '/account',
    locale: 'menu.account',
    authority: [
      'admin',
      'user'
    ],
    children: [
      {
        path: '/account/center',
        name: 'Account Center',
        locale: 'menu.account.center',
        children: []
      },
      {
        path: '/account/settings',
        name: 'Account Settings',
        locale: 'menu.account.settings',
        children: []
      }
    ]
  }
];
