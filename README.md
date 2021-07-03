# Introduction
This event management platform allows a registered user to 
- Create an event
- Update event details
- Join an event
- Follow/unfollow an event
- Receive personalised news feed based on other account's activities
- Join an event's chat

## Tools used
- CRUD Operations and Routing in __React__
- State management using __Redux__
- Forms for event creation and users registration using __Formik__
- Integration with __Google Map__ in the Event Detail page
- Asynchronous operation to handle data from the cloud using __Redux Thunk__
- Data persistency in __Firebase__ or __AWS S3__ (TBD)
## Current progress
The basic CRUD operations in React are demonstrated in the feature-redux branch. The data has not yet been persisted in the database but stored in memory.

![Preview](https://github.com/sutingchen/revents/blob/feature-redux/public/preview.jpg)




# Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

