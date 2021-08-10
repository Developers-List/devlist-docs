---
sidebar_position: 2
---

# Exists

Exists Method

### Table Of Exists Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- id (User ID)
```js
exists(id)
```

### Example Usage
```js
await devlist_api.exists("300530315351425024");
// -> returns boolean if the profile exists or not
```

### Returned Data
Returns boolean
```js
true
```