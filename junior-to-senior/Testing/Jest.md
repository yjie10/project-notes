


mkdir test;
npm init;
touch script.js;

// for development purpose only, don't need it as a dependency
npm install --save-dev jest; 

// will look for tests (keyword test, spec, etc. )
npm test; 

- functions should be pure.
- dependency injection: make a function reusable in other places. 
- tests can be grouped. 