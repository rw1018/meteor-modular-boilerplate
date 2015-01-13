# meteor-modular-boilerplate
A simple boilerplate for modular Meteor apps.

File Structure
* Public
* Packages



```

//Add new features inside separate packages: 
meteor create --package app-featurename

//Add dependencies to package.js: 
api.use('templating');

//Then add the package to the project:
meteor add app-featurename

```
