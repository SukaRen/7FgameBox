// pages/baike/item/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemType: 0,
    shopType: 0,
    arrayType: ['全部类型', '法术', '物理', '生存', '补给生存', '移动', '防御', '其他'],
    arrayShop: ['全部商店', '玉石', '百宝', '武器', '防具', '饰品', '神兵', '神秘', '客栈', '利器'],
    alllist: {},
    datalist: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://api.7fgame.com:8801/?g=qx1&op=ItemListBasic',
      success: res => {
        this.setData({
          alllist: res.data,
          datalist: res.data
        })
      }
    })
  },
  binditemTypePickerChange: function(e) {
    this.setData({
      itemType: e.detail.value
    })
    this.filldata();
  },
  bindShopTypePickerChange: function(e) {
    this.setData({
      shopType: e.detail.value
    })
    this.filldata();
  },
  filldata: function() {
    var itype = this.data.itemType;
    var stype = this.data.shopType;
    var ilist = this.data.arrayType
    var slist = this.data.arrayShop;
    var list = this.data.alllist;
    if (itype != 0) {
      list = list.filter(function(item) {
        return item.iTypeStr == ilist[itype];
      })
    }
    if (stype != 0) {
      list = list.filter(function(item) {
        return item.iShopStr == slist[stype];
      })
    }
    this.setData({
      datalist: list
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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