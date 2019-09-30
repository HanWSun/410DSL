# 410DSL
This project's goal is to creat a Domain Specific Language to design Blogs/Media Timelines

## Requirements
- npm
- Node version 10.15.0

### Required npm Packages
- express
- ejs
- esm

## How to Import/Export
Since Node doesn't support the es6 import/export statements,
we use the esm module to enable them.

### Exporting a class
`export default ClassName { ... }`

### Importing a class 
`import ClassName from "./public/subfolder/...etc/fileName.js";`

#### Instantiating a class
`let class = new ClassName(whatever params the constructor needs)`

### Importing/Exporting Individual Functions/Variables
`export {functionName, anotherFunction, howeverManyYouWant}`

`import {functionName} from "./public/etc/fileName.js"`

# Running The App
We need to have esm for the imports to work so we call it in terminal like:
`node -r esm index.js`