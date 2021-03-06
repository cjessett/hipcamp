## Getting Started
Install dependencies
```
yarn install
```

Build for production
```
yarn build
```

Start the app

```
yarn start
```

## Components

#### ```FeaturesList```
  - Takes a list of features and renders a `Feature` component for each.
  
#### ```Feature```
  - Takes feature properties and renders them. If there are subfeatures it renders a nested `FeaturesList`. For nested sub-feature titles, it adds a `level` prop that is used to calculate the font size.

### Requirements

- [x] Using JavaScript (React preferred), CSS (Sass preferred) and the initial
template file campground.html, please reveal the top level camp features as a `<ul>` list, based on the sample JSON structure defined in camp_features.js
(let’s assume this JSON structure is what an API could return).

- [x] Indicate whether or not each feature is present at the campground. 

- [x] Clicking on a feature should reveal its sub-features, if they're present or
not, and so on.

- [x] The presence or absence of each feature may be indicated with an icon, a different color, or both. Feel free to make it look great!

- [x] Each `<li>` element should be a bubble that's clickable in case there are sub-features to reveal. Sub-features should be displayed in a nested `<ul>` list.

- [x] Adding or removing features from camp_features.js should automatically update the
DOM when the page is reloaded.

- [x] Clear, concise, "production-ready" code will be appreciated.