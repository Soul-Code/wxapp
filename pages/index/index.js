//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎来到权益中心',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickMe: function(){
    console.log(this);
    
    this.setData({
      motto:"你点了我一下"
      }
    );
    wx.login({
      success: function (res) {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'http://106.14.11.222:8080/wxapp/login',
            data: {
              code: res.code
            },
            success: function(req){
              console.log('login_successful')
              console.log(req);
            }
          })
          console.log(res);
        } 
        else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });






    // wx.request({
    //   url: "http://106.14.11.222/answering/",
    //   method: "GET",
    //   data: ,
    //   success: function(res){

    //     console.log('请求成功');
    //     console.log(res);

    //     // this.setData({
    //     //   motto: "success"
    //     // })
    //   },
    //   fail: function (res) {
    //     console.log('请求失败');
    //     console.log(res);

    //     // this.setData({
    //     //   motto: "fail"
    //     // });
    //   }
    // })



    }
})