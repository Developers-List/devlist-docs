---
sidebar_position: 1
---

# Profile

Profile Method

### Table Of Profile Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- id (User ID)
- option (Get single property from profile object)
```js
profile(id, option)
```

### Example Usage
```js
await devlist_api.profile("300530315351425024");
// -> returns profile object

await devlist_api.profile("300530315351425024", 'bio');
// -> returns profile bio
```

### Returned Data
Returns profile object
```js
{
	"ID": "300530315351425024",
	"badges": [
		"Staff",
		"Bug",
		"Verified",
		"Partner",
		"Early",
		"Suggester",
		"Premium"
	],
	"bio": "Prodigy Experienced Full-Stack Developer <a:famous:712067395572727889>\n[Check Out My Website](https://itariq.dev)",
	"bots": [
		"698405560726323210",
		"668116464351576085",
		"744424113661149195",
		"697846463459491932",
		"707333425685856316",
		"801334225667358740",
		"606026008109514762"
	],
	"bug_hunter": 100,
	"connections": [
		{
			"type": "github",
			"id": "62197541",
			"name": "1TGDev"
		},
		{
			"type": "spotify",
			"id": "31hrb56dxdhabld7pjojn2uqgy7i",
			"name": "TARIQ"
		},
		{
			"type": "twitch",
			"id": "409940498",
			"name": "tariqdev"
		},
		{
			"type": "twitter",
			"id": "2532489000",
			"name": "xitariqx"
		},
		{
			"type": "youtube",
			"id": "UCuV3weqJD3TQu0bSisaeSRw",
			"name": "TARIQ"
		}
	],
	"emails": [
		"contact@itariq.dev",
		"tariq@bioid.id",
		"support@developertools.app",
		"support@bioid.id",
		"support@devlist.dev",
		"support@ticksbot.com"
	],
	"favorites": [
		"596004175662546957",
		"697846463459491932"
	],
	"languages": {
		"HTML": 99,
		"CSS": 95,
		"JavaScript": 98,
		"PHP": 88,
		"SQL": 70,
		"C#": 25,
		"XML": 24,
		"Java": 7
	},
	"npm_packages": [
		"devlist",
		"clear-chat",
		"bioid.id",
		"mysql-database",
		"git-releases"
	],
	"pip_packages": [
		"devlist"
	],
	"servers": [
		"cKf5Dhp",
		"EsPfMBT",
		"GGSzYVB",
		"A8kBVdHkVa"
	],
	"websites": [
		"https://itariq.dev",
		"https://bioid.id",
		"https://developertools.app",
		"https://ticksbot.com",
		"https://devlist.dev",
		"https://dicehost.xyz",
		"https://websitegen.xyz",
		"https://discordgen.xyz",
		"https://inviter.vip",
		"https://tqlibrary.xyz",
		"https://itqi.xyz",
		"https://webhooksend.xyz",
		"https://to-dolist.itariq.dev",
		"https://editor.itariq.dev",
		"https://typing.itariq.dev",
		"https://passwordgen.itariq.dev",
		"https://games.itariq.dev",
		"https://taxcal.itariq.dev",
		"https://memesgen.xyz",
		"https://discorduser.xyz",
		"https://emojis.itariq.dev",
		"https://clearchat.xyz",
		"https://searcher.itariq.dev",
		"https://discordinfo.me"
	],
	"widgets": {
		"twitter": "xitariqx",
		"twitch": "tariqdev",
		"discord": "702837181726851118",
		"github": "1TGDev"
	},
	"slug": "tariq",
	"theme": null,
	"tags": [
		"Full-Stack",
		"Websites",
		"Apps"
	],
	"views": 165,
	"total_comments": 1,
	"comments": [
		{
			"content": "this is a pinned comment :)",
			"author": "300530315351425024",
			"createdAt": 1616906801446,
			"pinned": true
		}
	],
	"configuration": {
		"notifications": {
			"new_comment": true,
			"widgets": true,
			"premium_features": true,
			"comment_pinned": true,
			"bio": true,
			"tags": true,
			"languages": true,
			"theme": true,
			"websites": true,
			"bots": true,
			"servers": true,
			"emails": true,
			"npm_packages": true,
			"pip_packages": true
		},
		"options": {
			"hire": true
		},
		"privacy": {
			"connections": true,
			"comments": true,
			"favorites": true
		}
	},
	"banner": "https://cdn.discordapp.com/banners/300530315351425024/a_4310fdccbd4fe2b9287e19fc900897cb?size=4096"
}
```