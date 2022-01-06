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
https://dlist.dev/api/profile/:ID
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
- experiences (profile experiences percentages object)
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
- certificates (profile certificates objects array)
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
		"Early User",
		"Premium",
		"Theme Creator",
		"Blogger"
	],
	"bio": "» 15 Years Old (12/28/2005) Prodigy Experienced Full-Stack Developer <a:famous:712067395572727889>, [Check Out My Website](https://itariq.dev)\n» Founder Of [Dev List](https://dlist.dev), [Ticks](https://ticksbot.com), [Giveaways](https://giveawaysb.cc), [Filer](https://filer.cloud), [Bio](https://bioid.id), [Discord Info](https://discordinfo.me), [MySQL Database](https://mysql-db.cloud), [Clear Chat](https://clearchat.xyz), @707333425685856316",
	"bots": [
		"698405560726323210",
		"668116464351576085",
		"744424113661149195",
		"697846463459491932",
		"707333425685856316",
		"801334225667358740",
		"606026008109514762",
		"785730029941555200"
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
		"support@dlist.dev",
		"support@ticksbot.com"
	],
	"favorites": [
		"596004175662546957",
		"697846463459491932",
		"698405560726323210",
		"826707445790670910",
		"806534903021436928",
		"606026008109514762",
		"707333425685856316",
		"668116464351576085",
		"785730029941555200",
		"801334264167530526",
		"801332715676106752"
	],
	"experiences": {
		"Apache": 100,
		"Bootstrap": 100,
		"C#": 37,
		"CSS": 98,
		"CloudFlare": 97,
		"Composer": 98,
		"Discord.js": 100,
		"Docusaurus": 97,
		"Express.js": 100,
		"Git": 98,
		"HTML": 92,
		"JavaScript": 99,
		"Markdown": 100,
		"MongoDB": 89,
		"MySQL": 100,
		"NPM": 100,
		"Next.js": 90,
		"Nginx": 98,
		"Node.js": 100,
		"Notepad++": 100,
		"PHP": 96,
		"PM2": 82,
		"PayPal API": 97,
		"React": 87,
		"SQL": 99,
		"Ubuntu": 94,
		"Vue.js": 78,
		"WebSocket": 100,
		"XML": 85,
		"Yarn": 95,
		"jQuery": 99,
		"jsDelivr": 84,
		"Twitter API": 80,
		"Twitch API": 50,
		"Youtube API": 50,
		"Eris": 40
	},
	"npm_packages": [
		"devlist",
		"git-releases",
		"mysql-database",
		"bioid.id",
		"clear-chat"
	],
	"pip_packages": [],
	"servers": [
		"cKf5Dhp",
		"EsPfMBT",
		"GGSzYVB",
		"A8kBVdHkVa",
		"qgVtMwDuqQ"
	],
	"websites": [
		"https://itariq.dev",
		"https://bioid.id",
		"https://developertools.app",
		"https://ticksbot.com",
		"https://dlist.dev",
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
		"https://docs.dlist.dev"
	],
	"widgets": {
		"twitter": "xitariqx",
		"twitch": "tariqdev",
		"discord": "702837181726851118",
		"github": "1TGDev",
		"youtube": "dQw4w9WgXcQ",
		"profile": "https://dlist.dev/api/profile/300530315351425024/widget.png"
	},
	"slug": "tariq",
	"vanity_url": "https://dlist.me/tariq",
	"theme": null,
	"tags": [
		"Full-Stack",
		"Websites",
		"Apps",
		"API",
		"Security",
		"UI/UX"
	],
	"views": 1813,
	"xp": {
		"bug_hunter": 100
	},
	"blog": [
		{
			"title": "<:devlist:881602212810350592> Dev List **v4**",
			"content": "<:experiences:899264672602132541> Development Experiences is now supported\n<:mentions:890408745463582721> New mentions suggester, available in all mentions-supported features\n<:blogger:901317563152216136> New **Blogger** badge\n`-` You can get this badge if your profile and blog is active & have at least 15 posts\n`-` There is a possibility of removing the badge from you incase you aren't active anymore in your blog\n`-` To apply for the badge after reaching the requirements: [Blogger Badge](/badges/blogger)\n<:certificates:901346824856698890> **Certificates** is now available\n`-` You will be able to upload your own certificates or documents, whether it is a image or a PDF file & they will appear in your profile in the Certificates page section\n<:URLShortener:792646005219917854> You can get a **Vanity URL** for free now without a premium subscription!\nAlso vanity url domain has been changed from `devlist.vip` to `devlist.me`\nThe old url will still be working but its deprecated and we won't update it anymore, also there is a possibility that it will be disabled in the next few months\nEnjoy with the short vanity URLs, and don't forget to put it in your status / about me sections :thonks:\n<:themecreator:877066857088172072> We've added --text key color for themes, which means you can modify the main website's text color (to support light themes)\nIt will be further developed in the feature to support advanced text color customization",
			"images": [
				"/cdn/blog/1634976406072.png",
				"/cdn/blog/1634976406077.png",
				"/cdn/blog/1634976406079.png",
				"/cdn/blog/1634976406083.png"
			],
			"createdAt": 1634976406084,
			"editedAt": 1641437245759
		},
		{
			"title": "Dev List now supports mentions!",
			"content": "Dev List now supports mentions in:\n`-` Blog Posts including (Title + Content)\n`-` Projects including (Name + Description + FAQ)\n`-` Profile Bio\n`-` Comments\n`-` Certificates Names\nThanks to me @300530315351425024 lol",
			"images": [],
			"createdAt": 1632360968237,
			"editedAt": 1634975558966
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
			"images": [],
			"editedAt": 1629741929021,
			"createdAt": 1629741929021
		},
		{
			"title": "i need money",
			"content": "buy premium `NOW` i need money <:catlol:765906545111334922>\n[Buy here now fast quick](/premium)",
			"images": [],
			"editedAt": 1641437276092,
			"createdAt": 1629387488458
		},
		{
			"title": "first post on devlist <:devlist:876121148990062642>",
			"content": "first <:catlol:765906545111334922>",
			"images": [],
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
				"668116464351576085"
			],
			"tags": [
				"Dashboard",
				"Moderation",
				"Slash Command",
				"Discord Bot"
			],
			"links": {
				"twitter": "TicksBot",
				"github": "1TGDev",
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
			"editedAt": 1635653561589,
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
				"697846463459491932"
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
				"website": "https://dlist.dev",
				"discord": "EsPfMBT",
				"bot": "697846463459491932",
				"email": "support@dlist.dev"
			},
			"faq": [
				{
					"question": "Where can i read faq",
					"answer": "[Read FAQ](/faq)"
				}
			],
			"createdAt": 1630762602560,
			"publishedAt": 1631361476072,
			"editedAt": 1641437314578
		},
		{
			"name": "Filer",
			"description": "Upload multiple and large files with no limits from the first device and download the file on your second device using file code, no login required",
			"images": [
				"/cdn/projects/1631362544443.png"
			],
			"contributors": [],
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
			"faq": [],
			"publishedAt": 1636422570790,
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
				"785730029941555200"
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
			"faq": [],
			"publishedAt": 1636422569542,
			"editedAt": 1635655700803,
			"createdAt": 1633172298368
		},
		{
			"name": "Discord Info",
			"description": "The most modern discord info website that supports most features including user info, server info, invite info & template info",
			"images": [
				"/cdn/projects/1636290219216.png"
			],
			"contributors": [
				"801332715676106752"
			],
			"tags": [
				"Discord",
				"Info",
				"Servers",
				"Templates"
			],
			"links": {
				"twitter": "xitariqx",
				"github": "1TGDev",
				"website": "https://discordinfo.me",
				"discord": "cKf5Dhp",
				"bot": "801332715676106752",
				"email": null
			},
			"faq": [],
			"publishedAt": 1636422564432,
			"editedAt": 1636290733062,
			"createdAt": 1636290219220
		},
		{
			"name": "Clear Chat",
			"description": "A clear chat history online saver for discord bots to save cleared messages online",
			"images": [
				"/cdn/projects/1636290715482.png"
			],
			"contributors": [
				"801334264167530526"
			],
			"tags": [
				"Chat",
				"Messages",
				"Discord",
				"History"
			],
			"links": {
				"twitter": "xitariqx",
				"github": "1TGDev",
				"website": "https://clearchat.xyz",
				"discord": "cKf5Dhp",
				"bot": "801334264167530526",
				"email": null
			},
			"faq": [],
			"publishedAt": 1636422547785,
			"editedAt": 1636290715497,
			"createdAt": 1636290715497
		}
	],
	"certificates": [
		{
			"name": "<:certificates:901346824856698890> Testing certificates",
			"files": [
				"/cdn/certificates/1634972014389.png"
			],
			"createdAt": 1634972014409
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
			"faq": [],
			"createdAt": 1630760929751,
			"editedAt": 1630760943895,
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
			"faq": [],
			"createdAt": 1630813993152,
			"publishedAt": 1631363285102,
			"creator": "596227913209217024"
		}
	],
	"total_comments": 39,
	"comments": [
		{
			"content": "فجرو التعليق لايكات",
			"author": "300530315351425024",
			"createdAt": 1616906801446,
			"pinned": true,
			"likes": [
				"300530315351425024",
				"596227913209217024",
				"839919247866331218",
				"613744633045843989",
				"780037364558987286",
				"565885939155730452",
				"376088642046918660",
				"852709584870047764",
				"323930938125844480",
				"828264950211280917",
				"801332715676106752",
				"801334264167530526",
				"785730029941555200",
				"668116464351576085",
				"707333425685856316",
				"606026008109514762",
				"596004175662546957",
				"152222004609548288",
				"815207835813675009",
				"667753369858736148",
				"830425465210011669",
				"743082063758098444",
				"770232626908626964",
				"485134005105197071",
				"635933198035058700",
				"306656522438443009",
				"382549097783230464",
				"779034600415428608",
				"776359293276258315",
				"772546533203247115",
				"715622996018200639"
			],
			"editedAt": 1637315596280
		},
		{
			"content": "الي يحب الله و الرسول و امه  ابوه و اخته و اخوه يحط لايك و يحطني فيفوريت لحسابي",
			"author": "323930938125844480",
			"createdAt": 1616606721013,
			"pinned": true,
			"likes": [
				"300530315351425024",
				"613744633045843989",
				"592313167229616163",
				"852709584870047764",
				"323930938125844480",
				"485134005105197071",
				"510970297814614016",
				"600031207782350858",
				"715622996018200639"
			]
		},
		{
			"content": "ياخي تطورات رهيبة\r\nبصراحة\r\nشي احترافي يفتخر فيه ",
			"author": "294795706059849730",
			"createdAt": 1616300889364,
			"pinned": true,
			"likes": [
				"613744633045843989",
				"624921075347881994",
				"715622996018200639"
			]
		},
		{
			"content": "علي الطلاج انت اسطورة",
			"author": "715622996018200639",
			"pinned": false,
			"likes": [],
			"replies": [],
			"editedAt": 1640723657280,
			"createdAt": 1640723657280
		},
		{
			"content": "عيد ميلاد سعيد",
			"author": "772546533203247115",
			"pinned": false,
			"likes": [
				"715622996018200639"
			],
			"replies": [],
			"editedAt": 1640719564262,
			"createdAt": 1640719564262
		},
		{
			"content": "طارق قامد <a:famous:712067395572727889>",
			"author": "845021005897400361",
			"pinned": false,
			"likes": [],
			"replies": [],
			"editedAt": 1637428153039,
			"createdAt": 1637428153039
		},
		{
			"content": "اخيس مبرمج في العالم",
			"author": "445630664671232000",
			"pinned": false,
			"likes": [
				"445630664671232000",
				"596227913209217024",
				"535827036774596628",
				"294795706059849730",
				"382549097783230464"
			],
			"replies": [],
			"editedAt": 1636971674788,
			"createdAt": 1636971674788
		},
		{
			"content": "Renklerde, şekillerde ve fikirlerde iyi tat <3",
			"author": "152222004609548288",
			"createdAt": 1636294251904,
			"pinned": false
		},
		{
			"content": "علي الطلاج انت راجل جامد 😂",
			"author": "772546533203247115",
			"createdAt": 1636245524856,
			"pinned": false,
			"likes": []
		},
		{
			"content": "@698405560726323210 test",
			"author": "613744633045843989",
			"createdAt": 1636229774197,
			"pinned": false,
			"likes": [
				"613744633045843989",
				"827988994074869801"
			]
		},
		{
			"content": "صباح القشطة علا بروفايل طاروق شو هيدا يخرب بيتا",
			"author": "852847605272412210",
			"createdAt": 1635509940297,
			"pinned": false
		},
		{
			"content": "الي يحب الله يعطيني لايك",
			"author": "859872890442219550",
			"createdAt": 1635348635458,
			"pinned": false
		},
		{
			"content": "من افضل المبرمجين في الشرق الاوسط",
			"author": "845021005897400361",
			"createdAt": 1635255733357,
			"pinned": false
		},
		{
			"content": "IDGAF",
			"author": "815207835813675009",
			"createdAt": 1635003936222,
			"pinned": false
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
			"pinned": false,
			"likes": [
				"535827036774596628"
			]
		},
		{
			"content": "(:",
			"author": "376088642046918660",
			"createdAt": 1619055300952,
			"pinned": false,
			"likes": [
				"376088642046918660"
			]
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
			"todo_list": false,
			"connections": true,
			"comments": true,
			"favorites": true
		},
		"notifications": {
			"todo_list_task_add": false,
			"new_comment": true,
			"comment_pinned": true,
			"comment_liked": true,
			"bio": true,
			"tags": true,
			"experiences": true,
			"widgets": true,
			"vanity_url": true,
			"theme": true,
			"websites": true,
			"bots": true,
			"servers": true,
			"emails": true,
			"npm_packages": true,
			"pip_packages": true,
			"banner": true,
			"suggestion_submit": true,
			"theme_submit": true,
			"new_blog_post": true,
			"new_project": true,
			"certificate_add": true,
			"new_todo_list": true
		},
		"options": {
			"anonymous_live_views": true,
			"hire": true
		}
	},
	"banner": "/cdn/banners/1638674860461.png",
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