---
sidebarDepth: 3
---


视频播放支持, Powered by DPlayer!

# vuepress-plugin-dplayer <GitHubLink repo="vuepress/vuepress-plugin-dplayer"/>

`vuepress-plugin-dplayer` 是一个用于注册 markdown 容器的 VuePress 插件。

## 用法

### 全局安装

```bash
npm install -g vuepress-plugin-container
# 或者
yarn global add vuepress-plugin-container
```

### 局部安装

```bash
npm install vuepress-plugin-container
# 或者
yarn add vuepress-plugin-container
```

%%% video
autoplay: false
theme: '#FADFA3'
loop: true
lang: zh-cn
screenshot: true
hotkey: true
preload: auto
volume: 0.7
mutex: true
video:
  url: https://xn.tn/?/%E8%A7%86%E9%A2%91%E6%B5%8B%E8%AF%95/test.mp4 # 如何处理本地文件
  pic:  https://camo.githubusercontent.com/0ade48acd75de2208c39e3c499f84c2fbfce47ba/687474703a2f2f692e696d6775722e636f6d2f323037636833362e6a7067
  type: auto
danmaku: 
  id: '9E2E3368B56CDBB4'
  api: https://api.prprpr.me/dplayer/ # 好像挂了
  token: tokendemo
  maximum: 1000,
  addition:
    - https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142
  user: DIYgod
  bottom: '15%'
  unlimited: true
%%%
