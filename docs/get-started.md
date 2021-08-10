---
sidebar_position: 1
---

# Getting Started

Official Dev List library for interacting with the Dev List API

<br/>

<center>

[<img src="https://devlist.dev/img/meta.png" alt="Logo" title="Dev List" width="100%" />](https://www.npmjs.com/package/devlist)

<br/>

[![](https://nodei.co/npm/devlist.png)](https://www.npmjs.com/package/devlist) 

[![NPM version](https://img.shields.io/npm/v/devlist.svg?maxAge=3600)](https://www.npmjs.com/package/devlist) [![NPM downloads](https://img.shields.io/npm/dt/devlist.svg?maxAge=3600)](https://www.npmjs.com/package/devlist)

[Dev List](https://www.npmjs.com/package/devlist)
</center>

### Table Of Getting Started Contents

- [About](#about)
- [Installation](#installation)
- [Example Usage](#example-usage)

### About 

- NPM package that gets information about devlist profile and other info from the Dev List API
- Useful for websites & bots where users can input any profile id/slug
- Supports the Promise-API, you will be able to use .then, .catch, etc...
- & more...

### Installation

``
npm i devlist
``

### Example Usage 

```js
const devlist = require('devlist');
const devlist_api = new devlist.API_Controller();

async function getUserData(){
	let user = await devlist_api.profile('300530315351425024');
	console.log(user);
	let slug = await devlist_api.slug('tariq');
	console.log(slug);
}
getUserData(); // calling the function
```