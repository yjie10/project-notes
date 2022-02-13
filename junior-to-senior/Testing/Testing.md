
## Type of Tests
- tests in general can be grouped into 3 main categories: 
  > Unit Tests
    · most common, easier to write, important to have in application. 
    · as the name suggests, tests individual functions/classes. 
  > Integration Tests
    · testing how different pieces of code work together. 
    · e.g. if db works with the Express app for requesting some data from db. 
    · e.g. how a function works with another function, how the connection works and testing them. 
  > Automation Tests
    · UI test, testing real life scenarios, on browsers. 
    · human, or program

## Testing Libraries
- tools to run tests, 

1. need a testing library (_scaffolding_) something to write like a function/method, and top 3 libraries would be:
   - Jasmine
   - Jest
   - Mocha
2. need an _assertion library_, provides functions that are assertion functions; to test the variables
   contain the expected values, top 3 libraries: 
   - Jasmine 
   - Jest
   - Chai
3. _test runner_, something that allows us to run the test, can run in different environment
   - Jasmine
   - Jest
   - Mocha
   - Karma.js (in browser)
4. _mocks, stubs, spies_, spies provide info for functions (how many times they were called,
   and by what cases and by who),
   stubs: replaces selected functions with a function to ensure the expected behavior happens. 
   mocks: faking a function/behavior to test different processes (good for integration tests)
   - Jasmine
   - Jest
   - Sinon.js (can be used to fake a server during test)
5. _code coverage_, % the statements, branch, functions, lines that are covered with test. report of where are missing tests
   - Jest
   - istanbul

- a lot of those libraries are BDD (behavorial driven development)
- create-react-app uses Jest (created by Facebook)
- Jest comes with everything. Mocha is a bit harder to setup but more flexible. 
- Will cover Snapshot testing (comes with Jest), Enzyme (by Airbnb, help write test better for react components)

## Final Note on Testing
- App.test.js.
- test are meant for development (never ship into production).