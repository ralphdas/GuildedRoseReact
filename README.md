# Gildedrose Refactor React App

## Introduction

This assignment consisted out of doing the Gildedrose Refactor in TypeScript and creating a React application using:

- Styled Components
- React Context API
- React Hooks API

Before I started I made a simple TODO list to keep track of my progress and for reference.

- [x] Clone repo
- [x] Setup initial tests (TDD style)
- [x] Restructure code
- [x] Create React project
- [x] Create components
- [x] Implement context
- [x] Implement styled components
- [x] Write these Docs

## Findings/ Remarks

While working on this project I came across some findings/ conclusions which I will outline per development phase

### Test Driven Development

For the refactoring of the Gildedrose code I decided to first write all requirements in Jest unit tests and keep those running (--watch) on the 'legacy' code. I started by first swapping and clearing out code to improve readability. This resulted in my first refactored version. I commented this version out and it's still present in the code base in the file ` src/gilded-rose/gilded-rose.ts`. From this version I created my final version by splitting the code up into different functions per Item Type. I felt this could possibily be enhanced even futher by splitting the files up in to different specialiced classes but I would leave that for a team discussion. Also things like dependecy injection came to mind to facilitate future Item type additions. There where a couple of things I could not refactor due to the requirments/ compatibility with the legacy code.

- The update quality call manipulates the state of the GildedRose container class. In an ideal world I would refactor it to be completly stateless and create a function called `getItemsAtDate(Date)` or `getItemsAtDay(Number)`. Could be wrapped in an Adapter Classes to make it compatible but this would be a team question again.
- Item types are identified by the very specific name field. Not by an item type property. This is a recipe for disaster.
- I kept the Item Class as is to facilitate keeping the API consistent. Normally I like to name classes and more predictable and descriptive of it's function or use. So more `ProductItem` and `ProductItemCollection`. I also don't like encapsulating classes with non descriptive names like 'Gildedrose' but more `Store` or `GildedroseStore`

### React

I last touched React in 2017. So I had a bit of a refresh/ learning. I used the Create React App Project to quiclky get going. I really like the functional approach and prefer it from the older more verbose class based one. I really liked working with styled components to setup a simple CSS design not having to worry about things like BEM and SCSS. Also keeping the code together in the components seems like a nice touch. Since I had some learning curve I did not manage to pack a lot of functionality into the demo. Just a `updateQuality` button which uses a Hook to run the `UpdateWuality` function. I used the Context API to transport the GildedRose Items to List class.

## Usage Instructions

To start the project simply clone the project and install the dependencies with

```
npm install
```

or using Yarn

```
yarn
```

the run `npm run start ` or `yarn start` to locally start the project. After starting the project the default browser should automatically appear pointing to `http://localhost:3000/`

To kick of the Gildedrose test suite run:

```
npm run test
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
