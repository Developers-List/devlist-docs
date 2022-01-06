---
sidebar_position: 4
---

# Widget

Widget Method

### Table Of Widget Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- id (User ID)
```js
widget(id)
```

### Example Usage
```js
await dlist_api.widget("300530315351425024");
// -> returns the widget object
```

### Returned Data
Returns Widget Object
```js
{
	link: 'https://dlist.dev/api/profile/300530315351425024/widget.png',
	buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 04 00 00 00 01 f4 08 06 00 00 00 a3 26 5f 2b 00 00 00 06 62 4b 47 44 00 ff 00 ff 00 ff a0 bd a7 ... 79582 more bytes>
}
```