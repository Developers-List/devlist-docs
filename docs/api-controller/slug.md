---
sidebar_position: 3
---

# Slug

Slug Method

### Table Of Slug Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- vanity_url (Vanity URL or slug)
```js
slug(vanity_url)
```

### Example Usage
```js
await devlist_api.slug("tariq");
// -> returns the user ID of the user who owns the slug
```

### Returned Data
Returns User ID
```js
300530315351425024
```