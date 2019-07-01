// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '私人影剧院',
    userInfo: {
      wechat: 'WEDN-NET',
      nickName: '关注 "sirenyingjuyuan" 公众号,长按复制',
      content:'  回复想看的电影名，即可获得资源链接，立即观看',
      avatarUrl: '../../images/gongzinghao.jpg'
    }
  },
  /**
     * 长按复制
     */
  copy: function (e) {
    var that = this;
    console.log(e);
    wx.setClipboardData({
      data: 'sirenyingjuyuan',
      success: function (res) {
        // wx.showToast({
        //   title: '复制成功',
        // });
      }
    });
  },
  // getUserInfo () {
  //   app.wechat.getUserInfo()
  //     .then(res => this.setData({ userInfo: res.userInfo }))
  // },

  /**
   * 生命周期函数--监听页面加载           
   */
  onLoad () {
    app.wechat.login()
      .then(res => {
        if (res.code) {
          console.log('登录成功！' + res.code)
        } else {
          console.error('获取用户登录态失败！' + res.errMsg)
        }
      })
  }
})
