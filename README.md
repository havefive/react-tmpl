# react-tmpl
React Template project with reactjs,antd,Material-UI,and next.js
## Modules:

#### 1. Router:next.js
#### 2. UI:ant-design,Material-UI
#### 3. Server-render:next.js

## Steps:

#### 1.Init project
```
npm init 
```
#### 2. Install Modules
```
npm install next antd Material-UI --save
```
#### 3. Add Pages
```
mkdir pages
touch index.js:

import React from 'react'

export default () => (
  <div>Welcome to next.js!</div>
)
```
### 4. Add Cli
```
vi package.json
add:

"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
  
```
### 4.Start Develop
```
npm run dev
```
### 5.Build product
```
npm run build
```
### 7.Review product
```
npm run start
```





