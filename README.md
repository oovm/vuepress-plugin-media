# VuTeX

```bash
yarn install && yarn start
```

| Plugin           | Remark                            |
| ---------------- | --------------------------------- |
| medialink-tracer | Find the real url of the media    |
| vuepress-aplayer | Support playing music on Vuepress |
| vuepress-dplayer | Support playing video on Vuepress |

## Audio Example

%%% audio
name: The Party We Have Never Seen
url: https://cdn.moefe.org/music/mp3/thepartywehaveneverseen.mp3
cover: https://p1.music.126.net/IwclpJu4gaqhSZrKunEFWg==/3297435379408525.jpg?param=300y300
lrc: https://cdn.moefe.org/music/lrc/thepartywehaveneverseen.lrc
%%%

## Video Example

%%% video
video:
  url: https://xn.tn/?/%E8%A7%86%E9%A2%91%E6%B5%8B%E8%AF%95/test.mp4
  pic:  https://camo.githubusercontent.com/0ade48acd75de2208c39e3c499f84c2fbfce47ba/687474703a2f2f692e696d6775722e636f6d2f323037636833362e6a7067
  type: auto
danmaku: 
  id: '9E2E3368B56CDBB4'
  api: https://api.prprpr.me/dplayer/
  token: tokendemo
  maximum: 1000,
  addition:
    - https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142
  user: DIYgod
  bottom: '15%'
  unlimited: true
%%%