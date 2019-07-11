# pluralsight-js-dev-env
Javascript development environment from Pluralsight course with Cory House

**Excellent** pluralsight course outlining why a starter kit is required, and how to set one up.

Some highlights for me with this course are;

- Mocking data via faker, json-schema-faker and json-server. Centralising HTTP calls (Module 10 - HTTP Calls)
- Continuous Integration with Travis CI and AppVoyer (Module 9 - Testing and Continuous Integration)
- Testing, Linting, Editor configs and and the integration of it all as part of your dev environment
- Bundling and production builds with webpack (Module 12 - minifying, cache busting, compression, bundle splitting)

To run the "example app"
> npm start 

Look at the scripts in package.json to get an understanding of how that starts multiple tasks in parallel as well as kicking off the mock API

To run the production build
> npm run build

This doesn't start the mock API, but the output shows the process of minifying, hashing and splitting that occurs.

I currently have 'stats' set to 'verbose' in `webpack.config.prod.js` so that I could debug certain issues. Also differs here from Cory's course in that I call webpack directly from the npm script as with all the updates, babel-node and the js script weren't working out for me.   
