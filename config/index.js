module.exports = {
  test: {
    gearboxDomain: 'http://backstage-test.yc345.tv:3003/api',
    // gearboxDomain: 'http://127.0.0.1:3003/api',
    // microServer: '/',
    microServer:'http://10.8.200.17:8080/',
    // http://127.0.0.1:9528
    clientId: 'microServiceKey-dev',
    clientSecret: 'microService-gearbox-dev'
  },
  development: {
    gearboxDomain: 'http://backstage-test.yc345.tv:3003/api',
    microServer: 'https://micro-app-test.yangcong345.com/operate-admin',
    clientId: 'microServiceKey-dev',
    clientSecret: 'microService-gearbox-dev'
  },
  stage: {
    gearboxDomain: 'https://shadow-stage.yangcong345.com/api',
    microServer: 'https://micro-app-stage.yangcong345.com/operate-admin',
    clientId: 'microServiceKey-pro',
    clientSecret: 'microService-gearbox-pro'
  },
  production: {
    gearboxDomain: 'https://shadow.yangcong345.com/api',
    microServer: 'https://micro-app.yangcong345.com/operate-admin',
    clientId: 'microServiceKey-pro',
    clientSecret: 'microService-gearbox-pro'
  }
}

