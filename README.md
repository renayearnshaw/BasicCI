# BasicCI
This project contains code I wrote while following [Learn Continuous Integration with Bitbucket Pipelines](https://www.atlassian.com/continuous-delivery/tutorials/continuous-integration-tutorial) tutorial by Atlassian.

### Description
The __BasicCI__ project is written using `Node 10` and uses `Express` to create a simple Node web server that displays 
"Hello World!" in the browser. To run the app use the command:
```
npm start
```

For unit testing we use the test framework [Mocha](https://mochajs.org/) and a library called [supertest](https://www.npmjs.com/package/supertest) 
to help manage HTTP requests in our tests. To run the tests use the command:
```
npm test
```
