# BasicCI
This project contains code I wrote while following [Learn Continuous Integration with Bitbucket Pipelines](https://www.atlassian.com/continuous-delivery/tutorials/continuous-integration-tutorial) tutorial by Atlassian.
This tutorial outlines how to build a CI pipeline using BitBucket, but this project uses GitHub to do the same thing.

### Description
The __BasicCI__ project is written using `Node` and uses `Express` to create a simple Node web server that displays 
"Hello World!" in the browser. To run the app use the command:
```
npm start
```

For unit testing we use the test framework [Mocha](https://mochajs.org/) and a library called [supertest](https://www.npmjs.com/package/supertest) 
to help manage HTTP requests in our tests. The project contains one simple functional test.\
To run the test manually use the command:
```
npm test
```
A continuous integration (CI) workflow was added to the repository that builds and tests the code using [GitHub actions](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs-or-python).
This resulted in a `node.js.yml` file being added to the code that runs the functional test whenever any code is pushed 
to the master branch.


