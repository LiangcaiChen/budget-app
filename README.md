## Table of Contents

- [Run the code](#run-the-code)
- [Testing](#testing)

## Run the code
- `npm install`
- `npm start`

## Testing

To run test: `npm test`

All tests library that I have used:
- `npm install --save-dev jest` for actoins and reducers
-  `npm install --save react-test-renderer` for snapshot testing

Shallow rendering is great for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate correctly. 
- `npm i --save-dev enzyme enzyme-adapter-react-16`
- `npm install --save-dev enzyme-to-json` 

To show coverage: `npm test -- --coverage`