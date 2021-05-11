# Front End Assessment

Getting Started:

Clone or fork this repository to get the starting template for the assessment. Ensure all needed npm packages are installed before getting started.

## Overview and Objectives

*** note ***
This assessment should not take more than 2 hours to complete. Please do not spend more time than that on this assessment. If you are unable to complete within the time frame, that is fine. We will assess the code based on what is completed.
<br>
You will be consuming the Recipe Puppy API (http://www.recipepuppy.com/about/api/) to show some items in a list.

- user should be able to search using some sort of text input, to get results based on their text
  - until the first search is conducted, there should not be recipes displaying
  - searches should be based only on the `?q` parameter in the API docs. No other query parameters are needed
  - Example query would be to (http://www.recipepuppy.com/api/?q=pizza)
- results should be displayed in card like component
  - if no results, notify user in some way
- test coverage for added components are a plus

We are looking to evaluate your front-end dev skills in React, JavaScript, HTML and CSS.

*** Feel free to add any technologies you want to this project i.e. SASS, TypeScript, etc. ***

## What we are looking for
- Approaches to pulling data from the API
- Approach to rendering the results and different states
- Well-crafted HTML
- Re-usable CSS and JavaScript
- Approach to using libraries/utilities as an assistive tool
- Responsiveness(smartphone portrait/320px and up)
*** note ***
This assessment is not expected to be fully designed and custom styled. You can use any css frameworks of your choice such as bootstrap or material design.

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

