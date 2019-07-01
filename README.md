# 微信小程序示例

> 一个微信小程序（应用号）开发示例（豆瓣电影）

[![License][license-image]][license-url]
[![Code Style][style-image]][style-url]

## 项目预览

![豆瓣电影演示](https://user-images.githubusercontent.com/6166576/58858164-82ae5880-86d9-11e9-9691-d775a9f5d500.gif)

很多朋友给我发消息说希望可以真机体验一下，所以前段时间我抽空把这个小程序发布了，大家可以通过微信扫码体验：

![DoubanFilm](https://user-images.githubusercontent.com/6166576/36627844-fc2a74ce-1983-11e8-98b3-25efff7e1d2b.jpg)

源码我放在了：https://github.com/zce/weapp-douban

## 使用说明

### 相关演示

- [视频演示如何运行当前项目](https://www.bilibili.com/video/av54540404)
- [豆瓣电影小程序真机测试](https://www.bilibili.com/video/av54540404/?p=2)

### 将项目克隆到本地

用到了`GIT`环境，没有环境的话可以直接下载项目源代码到盆地

```shell
# 定位到任意目录
$ cd path/to/root

# 克隆仓库到指定的文件夹
$ git clone https://github.com/zce/weapp-douban.git [project-name] -b master --depth 1

# 进入指定的文件夹
$ cd [project-name]
```

通过`微信Web开放者工具`打开项目根目录，预览~

- 打开`微信Web开放者工具`，选择`添加项目`，填写或选择相应信息
   + AppID：点击右下角`无AppID`（个人用户可以申请）
  - 项目名称：随便填写，因为不涉及到部署，所以无所谓
  - 项目目录：选择项目根目录
  - 点击`添加项目`
- 注意在微信公众平台后台添加域名白名单设置或者关闭开发阶段对请求域名安全的校验
  - https://api.map.baidu.com
  - https://douban-api.uieee.com


## 有想法？

Welcome PR / Issue / WeChat！

### 交流群

微信群垃圾广告和无意义的分享链接太多，最近狠下心清理了~
改用 QQ 群，单独审核，禁止广告，我的目的很简单，就是留出一个干净的环境，让志同道合的一起玩，谢谢大家

![IT BETTER群二维码](https://user-images.githubusercontent.com/6166576/39342428-99c27a22-4a0a-11e8-8cc1-fa10f2dafe23.png)

### 我的微信

如果你不喜欢热闹，或者加不进去，可以告诉我（注意我不收红包！有问题直接留言就行，只求描述到我能看懂！我尽快回复）

<img src="https://img.zce.me/qrcode/wechat.jpg" alt="我的微信：WEDN-NET" width="300">

## 许可

[MIT](LICENSE) &copy; [汪磊](https://zce.me)


[license-image]: https://img.shields.io/github/license/zce/weapp-douban.svg
[license-url]: https://github.com/zce/weapp-douban/blob/master/LICENSE
[style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[style-url]: http://standardjs.com

