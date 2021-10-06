---
sidebar_position: 2
---

# Profile

Profile Route

### Table Of Profile Route

- [Route](#route)
- [Method](#method)
- [Parameters](#parameters)
- [Returned Data](#returned-data)

### Route
```js
https://devlist.dev/api/profile/:ID
```

### Method
:::tip Request Method
GET
:::

### Parameters
- :ID (User ID)

### Returned Data
Returns Profile Object
- ID (profile ID)
- badges (profile badges names array)
- bio (profile biography string)
- bots (profile linked bots IDs array)
- connections (profile linked connections objects array)
- emails (profile emails array)
- favorites (profile favorited profiles IDs array)
- languages (profile languages percentages object)
- npm_packages (profile NPM Packages names array)
- pip_packages (profile PIP Packages names array)
- servers (profile linked servers invites codes array)
- websites (profile websites URLs array)
- widgets (profile widgets object)
- slug (profile vip slug)
- vaniy_url (profile vanity URL)
- theme (profile set theme name)
- tags (profile tags array)
- views (profile total views count)
- xp (profile xp object - contains bug hunter xp)
- blog (profile blog posts objects array)
- projects (profile projects objects array)
- contributed_projects (profile contributed projects objects array)
- total_comments (profile total comments count)
- comments (profile comments array)
- configuration (profile configuration settings)
- banner (profile banner image link)
- user (the profile owner user object)
```js
{
    "ID": "300530315351425024",
    "badges": [
        "Dev List Founder",
        "Staff",
        "Verified",
        "Early",
        "Premium",
        "Theme Creator"
    ],
    "bio": "Prodigy Experienced Full-Stack Developer <a:famous:712067395572727889>\n[Developers List](/) Owner, [Check Out My Website](https://itariq.dev)",
    "bots": [
        "698405560726323210",
        "668116464351576085",
        "744424113661149195",
        "697846463459491932",
        "707333425685856316",
        "801334225667358740",
        "606026008109514762"
    ],
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
        "697846463459491932",
        "668116464351576085",
        "698405560726323210",
        "826707445790670910",
        "806534903021436928",
        "606026008109514762",
        "707333425685856316"
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
    "npm_packages": [
        "devlist",
        "git-releases",
        "mysql-database",
        "bioid.id",
        "clear-chat"
    ],
    "pip_packages": [
        
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
    "vanity_url": "https://devlist.vip/tariq",
    "theme": null,
    "tags": [
        "Full-Stack",
        "Websites",
        "Apps"
    ],
    "views": 602,
    "xp": {
        "bug_hunter": 100
    },
    "blog": [
        {
            "title": "Dev List now supports mentions!",
            "content": "Dev List now supports mentions in:\n`-` Blog Posts including (Title + Content)\n`-` Projects including (Name + Description + FAQ)\n`-` Profile Bio\n`-` Comments\nThanks to me @300530315351425024 lol",
            "images": [
                
            ],
            "createdAt": 1632360968237
        },
        {
            "title": "Blog Posts Images <:catlol:765906545111334922>",
            "content": "Blogs posts now supports images or multiple images <:devlist:876121148990062642> <:catlol:765906545111334922>",
            "images": [
                "/cdn/blog/1629780356587.png"
            ],
            "editedAt": 1630754139960,
            "createdAt": 1629780356587
        },
        {
            "title": "100 Developer on the platform",
            "content": "We just hit 100 Developer Profile on the [website](/) <:catlol:765906545111334922> <:devlist:876121148990062642>",
            "images": [
                
            ],
            "editedAt": 1629741929021,
            "createdAt": 1629741929021
        },
        {
            "title": "i need money",
            "content": "buy premium `NOW` i need money <:catlol:765906545111334922>\n[Buy here now fast quick](https://devlist.dev/premium)",
            "images": [
                
            ],
            "editedAt": 1629387488458,
            "createdAt": 1629387488458
        },
        {
            "title": "first post on devlist <:devlist:876121148990062642>",
            "content": "first <:catlol:765906545111334922>",
            "images": [
                
            ],
            "editedAt": 1629386207122,
            "createdAt": 1629386207122
        }
    ],
    "projects": [
        {
            "name": "Ticks",
            "description": "A discord Bot that supports many features such as: Suggestions System, Embeds, Statistics and Auto Role with an easy & stylish to use dashboard (For Completely 100% Free)",
            "images": [
                "/cdn/projects/1630756468090.png",
                "/cdn/projects/1630756468091.png"
            ],
            "contributors": [
                
            ],
            "tags": [
                "Dashboard",
                "Moderation",
                "Slash Command",
                "Discord Bot"
            ],
            "links": {
                "twitter": "TicksBot",
                "github": null,
                "website": "https://ticksbot.com",
                "discord": "GGSzYVB",
                "bot": "668116464351576085",
                "email": "support@ticksbot.com"
            },
            "faq": [
                {
                    "question": "I got blacklisted for no reason, can it be removed",
                    "answer": "Incase you are sure that your blacklist is a false blacklist, you can contact our support"
                },
                {
                    "question": "Is bot prefix changeable",
                    "answer": "Ticks uses built-in discord feature which is called slash command, which means in all guilds the bot uses the same prefix which is slash (/)"
                }
            ],
            "createdAt": 1630756468092,
            "editedAt": 1630759926509,
            "publishedAt": 1632646165020
        },
        {
            "name": "Developers List",
            "description": "[Profiles](/profiles) for developers to link their projects, create teams & improve their skills and show others their creativity",
            "images": [
                "/cdn/projects/1630762602506.png",
                "/cdn/projects/1630762602558.png"
            ],
            "contributors": [
                
            ],
            "tags": [
                "List",
                "Profiles",
                "Developers",
                "Development"
            ],
            "links": {
                "twitter": "DevelopersList",
                "github": "1TGDev",
                "website": "https://devlist.dev",
                "discord": "EsPfMBT",
                "bot": "697846463459491932",
                "email": "support@devlist.dev"
            },
            "faq": [
                {
                    "question": "Where can i read faq",
                    "answer": "[Read FAQ](/faq)"
                }
            ],
            "createdAt": 1630762602560,
            "publishedAt": 1631361476072
        },
        {
            "name": "Filer",
            "description": "Upload multiple and large files with no limits from the first device and download the file on your second device using file code, no login required",
            "images": [
                "/cdn/projects/1631362544443.png"
            ],
            "contributors": [
                
            ],
            "tags": [
                "Files",
                "Upload",
                "Cloud",
                "Transfer"
            ],
            "links": {
                "twitter": "xitariqx",
                "github": "1TGDev",
                "website": "https://filer.cloud",
                "discord": null,
                "bot": null,
                "email": null
            },
            "faq": [
                
            ],
            "publishedAt": 1632965826335,
            "editedAt": 1632360497014,
            "createdAt": 1631362544448
        },
        {
            "name": "MySQL Database",
            "description": "Easily modify your MySQL database data with easy functions",
            "images": [
                "/cdn/projects/1633172298333.png"
            ],
            "contributors": [
                
            ],
            "tags": [
                "MySQL",
                "Database",
                "Data",
                "Store"
            ],
            "links": {
                "twitter": "xitariqx",
                "github": "1TGDev/mysql-database",
                "website": "https://mysql-db.cloud",
                "discord": "qgVtMwDuqQ",
                "bot": null,
                "email": null
            },
            "faq": [
                
            ],
            "publishedAt": null,
            "editedAt": 1633172298368,
            "createdAt": 1633172298368
        }
    ],
    "contributed_projects": [
        {
            "name": "Giveawaysbot",
            "description": "Create Your Giveaways Now\nFast & Easy\nStart creating giveaways using our bot or from our dashboard\nwithout facing any problems. Design your giveaways\nwith the way you like.",
            "images": [
                "/cdn/projects/1630761732858.png",
                "/cdn/projects/1630761722060.png"
            ],
            "contributors": [
                "300530315351425024",
                "431150885549113344",
                "323930938125844480"
            ],
            "tags": [
                "Leveling",
                "Web Dashboard",
                "Utility",
                "Logging"
            ],
            "links": {
                "twitter": "GiveawaysBD",
                "github": null,
                "website": "https://giveawaysb.cc/",
                "discord": "QcGUyEg",
                "bot": "606026008109514762",
                "email": null
            },
            "faq": [
                
            ],
            "createdAt": 1630760929751,
            "editedAt": 1630760943895,
            "publishedAt": 1631442410139,
            "creator": "445630664671232000"
        },
        {
            "name": "ProBot Tax",
            "description": "Calculate ProBot tax easy from our website or using our bot",
            "images": [
                "/cdn/projects/1630813993133.png"
            ],
            "contributors": [
                "300530315351425024",
                "323930938125844480"
            ],
            "tags": [
                "bot",
                "tax",
                "website",
                "probot"
            ],
            "links": {
                "twitter": "Fnr_8",
                "github": "probot-tax",
                "website": "https://pbtax.xyz/",
                "discord": null,
                "bot": "847273457519689801",
                "email": "contact@pbtax.xyz"
            },
            "faq": [
                
            ],
            "createdAt": 1630813993152,
            "publishedAt": 1631363285102,
            "creator": "596227913209217024"
        }
    ],
    "total_comments": 28,
    "comments": [
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
            "content": "@xCuzSkillz#9889 i will kill you🌚",
            "author": "832746559401623574",
            "createdAt": 1632573962401,
            "pinned": false
        },
        {
            "content": "شُجاع ، صنديد ، فارِس ، شَهم ، مِقدام ، كفوّ ، مطنُوخ ، كريمَ ، فهِيم ، قويّ ، عَنيد ، سمْح ، نشمِي ، شيخ ، عطيبُ المَضاريب ، دعار، بَطل , أًشوَسُ , أَسَد, مِقْدَام, قوي ، رجل ، كفو ، صقر ، بطل ، ذيبان ، نسر ، جلاد، مطنوخ ، ذيب, فَتَّاك, بَتار , مقدام ‏، ‏السنافي ، المطنوخ،",
            "author": "455468827262844930",
            "createdAt": 1629517258153,
            "pinned": false
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
            "new_project": true,
            "new_blog_post": true,
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
            "pip_packages": true,
            "suggestion_submit": true,
            "theme_submit": true
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