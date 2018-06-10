// pages/login.js
const app = getApp();
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
  showErr: function(str) {

    this.setData({
      errMsg: str
    });
    this.showTopTips();
  },



  // judge: function () {
  // this.showTopTips();
  // },
  formSubmit: function (e) {
    var that = this;
    if(e.detail.value.stdid.length<8){
      that.showErr('学号输入有误，请重新输入');
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
        url: app.globalData.url + '/wxapp/bund',
        header: header,
        data: that.data.stdinfo,
        success: function (req) {
          if (req.data.bunded){
            console.log(req)
            console.log('绑定成功,准备跳转到详情页');
            wx.switchTab({
              url: '../detail/detail',
              fail: function () {
                console.info("跳转到帖子页失败")
              }
            })
          }
          else{
            that.showErr('学号或密码错误');
          }
        },
        fail:function(){
          that.showErr('服务器请求失败');
          console.log('请求失败')
        }
      })


    }
  },

});