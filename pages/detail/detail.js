// pages/detail/detail.js
const app = getApp();
Page({
  data: {
    feed: [

      {
        "question_id": 1,
        "answer_id": 3,
        "feed_source_id": 23,
        "feed_source_name": "Rebecca",
        "feed_source_txt": "赞了回答1",
        "feed_source_img": "../../images/icon1.jpeg",
        "question": "选择 Kindle 而不是纸质书的原因是什么？",
        "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "question_id": 2,
        "answer_id": 25,
        "feed_source_id": 24,
        "feed_source_name": "Alex",
        "feed_source_txt": "回答了问题2",
        "feed_source_img": "../../images/icon8.jpg",
        "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
        "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "question_id": 3,
        "answer_id": 61,
        "feed_source_id": 25,
        "feed_source_name": "George",
        "feed_source_txt": "赞了回答3",
        "feed_source_img": "../../images/icon9.jpeg",
        "question": "气象铁塔的辐射大吗？",
        "answer_ctnt": "我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "question_id": 4,
        "answer_id": 3,
        "feed_source_id": 23,
        "feed_source_name": "Rebecca",
        "feed_source_txt": "赞了回答4",
        "feed_source_img": "../../images/icon1.jpeg",
        "question": "选择 Kindle 而不是纸质书的原因是什么？",
        "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "question_id": 5,
        "answer_id": 25,
        "feed_source_id": 24,
        "feed_source_name": "Alex",
        "feed_source_txt": "回答了问题5",
        "feed_source_img": "../../images/icon8.jpg",
        "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
        "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "question_id": 6,
        "answer_id": 61,
        "feed_source_id": 25,
        "feed_source_name": "George",
        "feed_source_txt": "赞了回答6",
        "feed_source_img": "../../images/icon9.jpeg",
        "question": "气象铁塔的辐射大吗？",
        "answer_ctnt": "我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "question_id": 7,
        "answer_id": 3,
        "feed_source_id": 23,
        "feed_source_name": "Rebecca",
        "feed_source_txt": "赞了回答7",
        "feed_source_img": "../../images/icon1.jpeg",
        "question": "选择 Kindle 而不是纸质书的原因是什么？",
        "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "question_id": 8,
        "answer_id": 25,
        "feed_source_id": 24,
        "feed_source_name": "Alex",
        "feed_source_txt": "回答了问题8",
        "feed_source_img": "../../images/icon8.jpg",
        "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
        "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
        "good_num": "112",
        "comment_num": "18"
      }







    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let cookie = wx.getStorageSync('cookieKey');
    let header = {};
    if(cookie){
      header.Cookie = cookie;
    }
    wx.request({
      url: app.globalData.url + '/wxapp/get_list',
      header:header,
      data: {
        'openid': app.globalData.openid, 
        'nickName': app.globalData.userInfo.nickName
      },
      success: function(req){
        console.log(req);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('已经拉到底下了');
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  upper: function (){
    console.log('已经拉到顶了');
  },
  lower: function (){
    console.log('已经拉到底下了');
  },
   
  bindItemTap: function () {
    wx.navigateTo({
      url: '../inside/inside'
    })
  },


 
})