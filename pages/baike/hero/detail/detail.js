Page({
  data: {
    sk:1,
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    info: {},
    lskInfo1: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;    
    var hid = options.id;
    wx.request({
      url: 'https://api.7fgame.com:8801/?g=qx1&op=GetHeroInfo&heroid=' + hid,
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        this.setData({
          info: res.data,
          lskInfo1: JSON.parse(res.data.hinfo.lskInfo1.replace('\n',''))         
        })
        wx.setNavigationBarTitle({
          title: this.data.info.hinfo.hName
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  selectsk: function (e) {
    this.setData({
      sk: e.currentTarget.id
    });
  },
  bindChange: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
  },
  swichNav: function(e) {
    var id = e.currentTarget.dataset.current;
    var that = this;

    if (this.data.currentTab === id) {
      return false;
    } else {
      that.setData({
        currentTab: id
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})