# 410DSL

## Requirements
npm
latest node

### Required npm Packages
-express
-ejs
-esm

## How to Import/Export
since node doesn't support the es6 import/export statements,
we use esm to enable them.

### Exporting a class
`export default ClassName { ... }`

### Importing a class 
`import ClassName from "./public/subfolder/...etc/fileName.js";`

### Importing/Exporting Individual Functions
`export {functionName, anotherFunction, howeverManyYouWant}`

`import {functionName} from "./public/etc/fileName.js"`

# Running The App
We need to have esm for the imports to work so we call it in terminal like:
`node -r esm index.js`