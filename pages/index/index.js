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
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          iv:res.iv,
          encryptedData:res.encryptedData,
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
            iv: res.iv,
            encryptedData: res.encryptedData,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickMe: function(){
    let that = this
    this.setData({
      motto:"你点了我一下"
      }
    );
    wx.login({
      success: function (res) {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: app.globalData.url+ '/wxapp/login',
            data: {
              code: res.code,
              encryptedData: that.data.encryptedData,
              iv: that.data.iv,
            },
            success: function(req){
              console.log('连接服务器成功')
              console.log(req);
              app.globalData.openid = req.data.openid;
              wx.setStorageSync('cookieKey', req.header['Set-Cookie']);

              if (!req.data.exists) {
                console.log("将要跳转到登陆页")
                wx.navigateTo({
                  url: '../login/login',
                })
              }
              else {
                console.log("将要跳转到帖子页")
                wx.switchTab({
                  url: '../detail/detail',
                  fail: function () {
                    console.info("跳转到帖子页失败")
                  }
                })
              }

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
