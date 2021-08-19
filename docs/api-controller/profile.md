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
- property (Get single property from profile object)
```js
profile(id, property)
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
    "badges": Array[7][
        "Staff",
        "Bug",
        "Verified",
        "Early",
        "Suggester",
        "Premium",
        "Theme Creator"
    ],
    "bio": "Prodigy Experienced Full-Stack Developer <a:famous:712067395572727889>\n[Check Out My Website](https://itariq.dev)",
    "bots": Array[7][
        "698405560726323210",
        "668116464351576085",
        "744424113661149195",
        "697846463459491932",
        "707333425685856316",
        "801334225667358740",
        "606026008109514762"
    ],
    "connections": Array[5][
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
    "emails": Array[6][
        "contact@itariq.dev",
        "tariq@bioid.id",
        "support@developertools.app",
        "support@bioid.id",
        "support@devlist.dev",
        "support@ticksbot.com"
    ],
    "favorites": Array[2][
        "596004175662546957",
        "697846463459491932"
    ],
    "languages": {
        "HTML": 100,
        "CSS": 100,
        "Java": 38,
        "JavaScript": 100,
        "C#": 38,
        "PHP": 95,
        "XML": 38,
        "SQL": 72
    },
    "npm_packages": Array[5][
        "devlist",
        "clear-chat",
        "bioid.id",
        "mysql-database",
        "git-releases"
    ],
    "pip_packages": Array[0][
        
    ],
    "servers": Array[4][
        "cKf5Dhp",
        "EsPfMBT",
        "GGSzYVB",
        "A8kBVdHkVa"
    ],
    "websites": Array[27][
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
        "https://discordinfo.me",
        "https://filer.cloud",
        "https://mysql-db.cloud",
        "https://docs.devlist.dev"
    ],
    "widgets": {
        "twitter": "xitariqx",
        "twitch": "tariqdev",
        "discord": "702837181726851118",
        "github": "1TGDev",
		"profile": "https://devlist.dev/api/profile/300530315351425024/widget.png"
    },
    "slug": "tariq",
    "theme": null,
    "tags": Array[3][
        "Full-Stack",
        "Websites",
        "Apps"
    ],
    "views": 165,
    "xp": {
        "bug_hunter": 100,
        "suggester": 0
    },
    "total_comments": 26,
    "comments": Array[26][
        {
            "content": "this is a pinned comment :)",
            "author": "300530315351425024",
            "createdAt": 1616906801446,
            "pinned": true
        },
        {
            "content": "الي يحب الله و الرسول و امه  ابوه و اخته و اخوه يحط لايك و يحطني فيفوريت لحسابي",
            "author": "323930938125844480",
            "createdAt": 1616606721013,
            "pinned": true
        },
        {
            "content": "ياخي تطورات رهيبة\r\nبصراحة\r\nشي احترافي يفتخر فيه ",
            "author": "294795706059849730",
            "createdAt": 1616300889364,
            "pinned": true
        },
        {
            "content": "الي ما يحطلي فيفورت في حسابي بلحقه بألنعال <:catlol:767680378726383637>",
            "author": "743809739703451749",
            "createdAt": 1629102179427,
            "pinned": false
        },
        {
            "content": "Cursed Profile and Coursed Developer <:catlol:767680378726383637>",
            "author": "743809739703451749",
            "createdAt": 1628595871525,
            "pinned": false
        },
        {
            "content": "حمار حفظة الله و رعاه",
            "author": "233602326034776064",
            "createdAt": 1628065262829,
            "pinned": false
        },
        {
            "content": ":)",
            "author": "555858683460976681",
            "createdAt": 1627556539583,
            "pinned": false
        },
        {
            "content": "من غشنا ليس منا اعطوني فيفوريت",
            "author": "431150885549113344",
            "createdAt": 1622296354317,
            "pinned": false
        },
        {
            "content": "يلي يحب الله ورسوله يحط لايك ويسوي تعليق على حقي البروفايل",
            "author": "431150885549113344",
            "createdAt": 1622296317282,
            "pinned": false
        },
        {
            "content": "Sheeeeeeeeeeeeesh bro 🥵🥵🥵🥵🥵🥵",
            "author": "535827036774596628",
            "createdAt": 1621265465024,
            "pinned": false
        },
        {
            "content": "(:",
            "author": "376088642046918660",
            "createdAt": 1619055300952,
            "pinned": false
        },
        {
            "content": "سو لي تعليقات يا جماعة",
            "author": "596227913209217024",
            "createdAt": 1617159404781,
            "pinned": false
        },
        {
            "content": "Best Developer In Middle East <:catlol:767680378726383637>",
            "author": "667753369858736148",
            "createdAt": 1617046124307,
            "pinned": false
        },
        {
            "content": "اذا لم تضعني فيفورت فعلم ان الشيطان منعك",
            "author": "323930938125844480",
            "createdAt": 1616606937498,
            "pinned": false
        },
        {
            "content": "الي يحب الله يحط لايك",
            "author": "323930938125844480",
            "createdAt": 1616606358948,
            "pinned": false
        },
        {
            "content": "ذا مطعم يباني فاخر <:catlol:767680378726383637>",
            "author": "478543553530953728",
            "createdAt": 1616336319463,
            "pinned": false
        },
        {
            "content": "best trash in the world",
            "author": "547110525083975700",
            "createdAt": 1616326850626,
            "pinned": false
        },
        {
            "content": "TARIQ ",
            "author": "555858683460976681",
            "createdAt": 1616325475675,
            "pinned": false
        },
        {
            "content": "هل اكون سبب مئه مستغفر <:emoji_193:819258235490926686><:emoji_191:819258168189124648> ؟؟",
            "author": "535827036774596628",
            "createdAt": 1616325332165,
            "pinned": false
        },
        {
            "content": "ايسلام اليكم",
            "author": "547110525083975700",
            "createdAt": 1616319954603,
            "pinned": false
        },
        {
            "content": "زبال",
            "author": "233602326034776064",
            "createdAt": 1616310555681,
            "pinned": false
        },
        {
            "content": "اسطورة من يومك, ترا انا مب طارق",
            "author": "697846463459491932",
            "createdAt": 1616303245637,
            "pinned": false
        },
        {
            "content": "Best developer in the world 😉 <:catlol:767680378726383637>",
            "author": "294795706059849730",
            "createdAt": 1616301148352,
            "pinned": false
        },
        {
            "content": "نصاب انا الي معطيه الفكرة",
            "author": "445630664671232000",
            "createdAt": 1616300924186,
            "pinned": false
        },
        {
            "content": "كيف بس و انا اضبكم بالحركات <:catlol:767680378726383637>",
            "author": "300530315351425024",
            "createdAt": 1616300117997,
            "pinned": false
        },
        {
            "content": "<:catlol:767680378726383637> اهلا اخواني اخواتي",
            "author": "445630664671232000",
            "createdAt": 1616300067914,
            "pinned": false
        }
    ],
    "configuration": {
        "privacy": {
            "connections": true,
            "comments": true,
            "favorites": true
        },
        "notifications": {
            "new_comment": true,
            "comment_pinned": true,
            "bio": true,
            "tags": true,
            "languages": true,
            "widgets": true,
            "premium_features": true,
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
        }
    },
    "banner": "https://cdn.discordapp.com/banners/300530315351425024/a_4310fdccbd4fe2b9287e19fc900897cb?size=4096",
    "user": {
        "id": "300530315351425024",
        "system": null,
        "locale": null,
        "flags": 131328,
        "username": "TARIQ",
        "bot": false,
        "discriminator": "0001",
        "avatar": "a_db8d544f667396a47a9c37da6ddbd695",
        "lastMessageChannelID": null,
        "createdTimestamp": 1491722410763,
        "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/1.png",
        "tag": "TARIQ#0001",
        "avatarURL": "https://cdn.discordapp.com/avatars/300530315351425024/a_db8d544f667396a47a9c37da6ddbd695.webp",
        "displayAvatarURL": "https://cdn.discordapp.com/avatars/300530315351425024/a_db8d544f667396a47a9c37da6ddbd695.webp"
    }
}
```