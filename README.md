# react-tmpl

React Template project with reactjs,antd,Material-UI,and next.js

一个可以快速进行基于react项目开发的模版工程，特点是：服务端渲染，无需配置路由，可以快速开发出中后台产品。

## Modules:

#### 1. Router: next.js(react-router)
#### 2. UI: ant-design or Material-UI
#### 3. Server-render: next.js

## Steps:

#### 1.Init project
```
npm init 
```
#### 2. Install modules
```
npm install next antd Material-UI --save
```
#### 3. Add pages
```
mkdir pages
touch index.js:

import React from 'react'

export default () => (
  <div>Welcome to next.js!</div>
)
```
#### 4. Add cli
```
vi package.json
add:

"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
}
```
#### 5.Start development
```
npm run dev
```
#### 6.Build product
```
npm run build
```
#### 7.Review product
```
npm run start
```





