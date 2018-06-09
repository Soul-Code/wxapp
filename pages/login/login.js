// pages/login.js
Page({
  data: {
    showTopTips: false,
    stdinfo:[]
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



  judge: function () {
  this.showTopTips();
  },
  formSubmit: function (e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      stdinfo: e.detail.value
    })

    wx.request({
      url: 'http://106.14.11.222:8080/wxapp/login',
      data: {
        code: that.data.stdinfo
      },
      success: function (req) {
        console.log('传送成功');
        console.log(that.data.stdinfo);
      }
    })
  },
    
});