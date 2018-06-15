<<<<<<< HEAD
// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
=======
const app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    newsType:1,
    selsectState: [1, 0, 0, 0, 0],
    sliderList: [
      { selected: true, imageSource: 'http://att.gamefy.cn/files/201711/151004622315187.jpg' },
      { selected: false, imageSource: 'http://pic2.52pk.com/files/171127/5613886_154655_1_lit.jpg' },
      { selected: false, imageSource: 'http://pic2.52pk.com/files/171127/5613886_154655_2_lit.jpg' },
      { selected: false, imageSource: 'http://pic2.52pk.com/files/171127/5613886_154656_3_lit.jpg' },
    ],
    dress: ''
  },
  //事件处理函数
  onNewsTap: function (event) {
    var newid = event.currentTarget.dataset.newid;
    wx.navigateTo({
      url: "../news/newdetail/newdetail?id="+newid
    })
  },
  onLoad: function () {
    //获取资讯列表
    this.getNewsList();

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
  clickXinwen: function () {
    this.setData({
      newsType: 1,
      selsectState: [1, 0, 0, 0, 0]
    })
    this.getNewsList();
  },
  clickGonggao: function () {
    this.setData({
      newsType: 2,
      selsectState: [0, 1, 0, 0, 0]
    })
    this.getNewsList();
  },
  clickSaishi: function () {
    this.setData({
      newsType: 3,
      selsectState: [0, 0, 1, 0, 0]
    })
    this.getNewsList();
  },
  clickHuodong: function () {
    this.setData({
      newsType: 4,
      selsectState: [0, 0, 0, 1, 0]
    })
    this.getNewsList();
  },
  clickGonglue: function () {
    this.setData({
      newsType: 5,
      selsectState: [0, 0, 0, 0, 1]
    })
    this.getNewsList();
  },
  //获取资讯列表
  getNewsList: function(e){
    wx.request({
      url: 'https://cmsapi.7fgame.com/NewsService/Service/News.ashx?op=NewsListTopN&itemIds=102&CategoryIds=' + this.data.newsType+'&TopN=20',
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        this.setData({
          newslist: res.data
        })
      }
    })
  },
  //轮播图绑定change事件，修改图标的属性是否被选中
  switchTab: function (e) {
    var sliderList = this.data.sliderList;
    var i, item;
    for (i = 0; item = sliderList[i]; ++i) {
      item.selected = e.detail.current == i;
    }
    this.setData({
      sliderList: sliderList
    });
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
>>>>>>> bd333a9b154397acea5f1923d15549fb011de4b9
  }
})