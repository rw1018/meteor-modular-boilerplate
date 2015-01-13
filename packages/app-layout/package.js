Package.describe({
  name: 'app-layout',
  summary: ' Main layout of your app. ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('templating','client')


  api.addFiles('views/index.html');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('app-layout');
  api.addFiles('app-layout-tests.js');
});
