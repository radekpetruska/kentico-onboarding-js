# kentico-onboarding-js
Simple step-by-step task for Kentico Academy to learn the basics of JS, React, Redux.

This project will consist of two tasks. In first one we will implement simple list of editable items using ReactJS only. In the second part we will try to refactor our code to use ImmutableJS and ReduxJS. 

The requirements for the resulting project are captured in `assignment.git`. Note that we will aim to make the solution generic enough so that more items can be in 'edit' mode at once.

## Forking the project and submitting pull requests
You won't be added as a contributor to this repository. You have to fork it obtain your own copy to which you will commit your changes. Then, once you feel like you finish the task, you can submit a pull request to this repo. If you are not familiar with GitHub forking and pull requests, I suggest reading this article before you proceed any further: https://gun.io/blog/how-to-github-fork-branch-and-pull-request/.

### Fork step-by-step
1. Go to https://github.com/Suzii/kentico-onboarding-js.
2. Click **Fork**. This will create your own copy of the repository in your GitHub accout.
3. In git bash:
 - `git clone http://github.com/your-login/kentico-onboarding-js` -- will init a local repo tracking your forked origin
 - `git remote add --track master upstream git://github.com/suzii/kentico-onboarding-js` -- adds the original repository you forked from as a remote named 'upstream' so that you can receive updates by merging from it
 - `git fetch upstream` -- receive latest code
 - `git merge upstream/master` -- merge it to your own master
 - you now have the latest upstream code in your local master branch
 - `git checkout -b <your-name>-develop` -- creates and checkouts new branch named `<your-name>-develop` where you should commit your code and later submit pull requests with this branch

### Development
Now you have everything git-related set-up and you can start developing... 
Commit with reasonable commit messages, you can squash your commits as well. Feel free to create new branches when developing and merge them to `<your-name>-develop` when you want to submit a pull request.

## How to run the project 
**tl;dr**
```
npm install
npm start
> localhost:3000/
```

The project was created with [react-create-app](https://github.com/facebookincubator/create-react-app) boilerplate. 
You should use WebStorm IDE to get familiar with it. Prerequisites for running this project are node v6+ and npm v3+. (If you followed the Draft onboarding on Kentico wiki pages, you should be ready to go.)

## Task 1
According to `assignment.gif` implement all the required functionality (keep in mind we want to be able to edit multiple list items at once). Store some pseudo-random identifier (id) for each item (use some util function for its generation, e.g: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript)
All the boilerplate is already there so you can dive into coding straight away. Feel free to use bootstrap css classes. Get familiar with project structure. The entry file is `index.js`. Page layout can be found in `App.jsx`. It renders `List.jsx` in its body, where you are supposed to implement the rest of the functionality. 

## Task 2
Install [ImmutableJS](http://facebook.github.io/immutable-js) to your project: `npm install --save immutable`.
Refactor your application so that all the state (except for reasonable exceptions e.g. current text of input field in `CreateItem` component) is stored in top level component (e.g. `List.jsx`) and all the complex objects in state are represented as `Immutable.Map` (key values are item IDs).

## Task 3
Install [ReduxJS](http://redux.js.org/) and [react-redux](http://redux.js.org/docs/basics/UsageWithReact.html) to your project: 
```
npm install --save redux
npm install --save react-redux
```
Refactor the application to use ReduxJS. 
 - Create instance of Redux store.
  - Move all the state of top level component (`List.jsx`) to Redux store (state in Redux is described by reducers; use reducer composition).
 - Implement reducers that react to dispatched actions and change the state accordingly.
 - Wrap the App.jsx in `<Provider>` component so that all nested components can access global store (via `connect()` function).
 - Refactor `List.jsx` so that it receives the app state from Redux store as its props and passes it down to its child components. (connect + mapStateToProps)
 - Child components should dispatch actions that describe changes of the application. (connect + mapDispatchtoProps)
  
**IMPORTANT:** preserve Immutability!

## Coding style
Please follow this rules while developing: 
 - JavaScript file names are `lowerCamelCase`
 - one React component per file, name is `UpperCamelCase`, and has `.jsx` extension
 - use `'single quotes'` instead of `"double quotes"`
