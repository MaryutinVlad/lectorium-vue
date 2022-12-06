const initialData = {
  loggedIn: true,
  info: {
    title: 'Info',
    access: 'info',
    items: ['about', 'test'],
    isShown: false
  },
  confirm: {
    title: 'Log out',
    access: 'confirm',
    description: 'Please confirm logout action. Validation data will be removed on confirmation.',
    isShown: false
  }
  ,
  settings: {
    title: 'Settings',
    access: 'settings',
    isShown: false,
    items: [
      {
        title: 'Color mode',
        switch: true
      },
      {
        title: 'Allow notifications',
        switch: true
      },
      {
        title: 'Enable Cookies',
        switch: true
      },
      {
        title: 'Text size',
        switch: false,
        type: 'number'
      }
    ],
    lowerSection: {
      title: 'Edit front page content',
      type: 'model',
      items: [
        'New lessons', 'Free content', 'Top lessons'
      ]
    }
  },
  userSettings: {
    title: 'User settings',
    access: 'userSettings',
    isShown: false,
    items: [
      {
        title: 'Change nickname',
        switch: false,
        type: 'button',
        color: '#4CB36F'
      },
      {
        title: 'Change email',
        switch: false,
        type: 'button',
        color: '#4CB36F'
      },
      {
        title: 'Change profile info',
        switch: false,
        type: 'button',
        color: '#85BBBB'
      },
      {
        title: 'Set private info',
        switch: false,
        type: 'button',
        color: '#85BBBB'
      }
    ],
    lowerSection: {
      title: 'Preferences',
      type: 'list',
      items: [
        '#planning', '#security', '#healthcare'
      ]
    }
  }
}

export default initialData