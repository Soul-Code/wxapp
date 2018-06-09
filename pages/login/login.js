// pages/login.js
Page({
  data: {
    showTopTips: false,
    stdinfo:[],
    errMsg:'用户不存在或者密码错误'
  },

  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);//显示接口
  },



  // judge: function () {
  // this.showTopTips();
  // },
  formSubmit: function (e) {
    var that = this;
    if(e.detail.value.stdid.length<8){
      that.setData({
        errMsg: '学号输入有误，请重新输入'
      });
      this.showTopTips();
    }
    else{
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      this.setData({
        stdinfo: e.detail.value
      })
      let app = getApp();
      let cookie = wx.getStorageSync('cookieKey');
      let header = {};
      if (cookie) {
        header.Cookie = cookie;
      }
      wx.request({
        url: 'http://106.14.11.222:8080/wxapp/bund',
        header: header,
        data: that.data.stdinfo,
        success: function (req) {
          console.log('传送成功');
          wx.switchTab({
            url: '../detail/detail',
            fail: function () {
              console.info("跳转到帖子页失败")
            }
          })
        }
      })


    }
  },

});