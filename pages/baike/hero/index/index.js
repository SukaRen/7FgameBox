// pages/baike/hero/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    herolist21: [],
    herolist22: [],
    herolist23: [],
    herolist31: [],
    herolist32: [],
    herolist33: [],
    herolist11: [],
    herolist12: [],
    herolist13: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;    
    wx.request({
      url: 'https://api.7fgame.com:8801/?g=qx1&op=HeroListBasic',
      success: res => {  
        that.setData({
          herolist21: res.data.filter(function (item) {
            return item.hForces == 2 && item.hType == 1;
          }),
          herolist22: res.data.filter(function (item) {
            return item.hForces == 2 && item.hType == 2;
          }),
          herolist23: res.data.filter(function (item) {
            return item.hForces == 2 && item.hType == 3;
          }),
          herolist31: res.data.filter(function (item) {
            return item.hForces == 3 && item.hType == 1;
          }),
          herolist32: res.data.filter(function (item) {
            return item.hForces == 3 && item.hType == 2;
          }),
          herolist33: res.data.filter(function (item) {
            return item.hForces == 3 && item.hType == 3;
          }),
          herolist11: res.data.filter(function (item) {
            return item.hForces == 1 && item.hType == 1;
          }),
          herolist12: res.data.filter(function (item) {
            return item.hForces == 1 && item.hType == 2;
          }),
          herolist13: res.data.filter(function (item) {
            return item.hForces == 1 && item.hType == 3;
          })
        })
        wx.getSystemInfo({
          success: function (res) {
            that.setData({
              winWidth: res.windowWidth,
              winHeight: res.windowHeight
            });
          }
        });
      }
    }) 
  },
  bindChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
  },
  swichNav: function (e) {
    var id = e.currentTarget.dataset.current;  
    if (this.data.currentTab === id) {
      return false;
    } else {
      this.setData({
        currentTab: id
      })
    }
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
  
  }
})