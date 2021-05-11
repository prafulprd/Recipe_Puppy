Getting Started:

Clone or fork this repository to get the starting template for the assessment. Ensure all needed npm packages are installed before getting started.

## Overview and Objectives

*** note ***
<br>
You will be consuming the Recipe Puppy API (http://www.recipepuppy.com/about/api/) to show some items in a list.

- user should be able to search using some sort of text input, to get results based on their text
  - until the first search is conducted, there should not be recipes displaying
  - searches should be based only on the `?q` parameter in the API docs. No other query parameters are needed
  - Example query would be to (http://www.recipepuppy.com/api/?q=pizza)
- results should be displayed in card like component
  - if no results, notify user in some way

# Cors issues
- if you run into any cors issues, don't worry about it. just download this chrome extension and use it to resolve them. https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US
#### `yarn start`

This will start the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

