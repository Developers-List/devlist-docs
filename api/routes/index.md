---
sidebar_position: 1
---

# Index

Index Route

### Table Of Index Route

- [Route](#route)
- [Method](#method)
- [Parameters](#parameters)
- [Returned Data](#returned-data)

### Route
```js
https://devlist.dev/api
```

### Method
:::tip Request Method
GET
:::

### Parameters
- No parameters for this route

### Returned Data
Returns Website Status Object
- success (boolean of the request success status)
- message (the returned message from the API)
- ram (ram the website is using in MB)
- database (database ping in ms)
- uptime (the website uptime in ms)
```js
{
    "success": true,
    "message": "API is running, read docs at https://docs.devlist.dev",
    "ram": 50.4,
    "database": 6,
    "uptime": 136893060.05961898
}
```