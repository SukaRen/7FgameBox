// pages/baike/hero/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heroForce:2,
    radioItems: [
      { name: '蜀国', value: '2', checked: 'true' },
      { name: '魏国', value: '1' },
      { name: '中立', value: '3' }
    ],
    alllist:[],
    herolist1: [],
    herolist2: [],
    herolist3: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.7fgame.com:8801/?g=qx1&op=HeroListBasic',
      success: res => {  
        this.setData({
          alllist: res.data,
          herolist1: res.data.filter(function (item) {
            return item.hForces == 2 && item.hType == 1;
          }),
          herolist2: res.data.filter(function (item) {
            return item.hForces == 2 && item.hType == 2;
          }),
          herolist3: res.data.filter(function (item) {
            return item.hForces == 2 && item.hType == 3;
          })
        })
      }
    }) 
  },
  radioChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
        this.data.heroForce = this.data.radioItems[i].value;   
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed);   
    this.filldata();
  },
  filldata:function(){
    var heroForce = this.data.heroForce;
    var list = this.data.alllist
    this.setData({    
      herolist1: list.filter(function (item) {
        return item.hForces == heroForce && item.hType == 1;
      }),
      herolist2: list.filter(function (item) {
        return item.hForces == heroForce && item.hType == 2;
      }),
      herolist3: list.filter(function (item) {
        return item.hForces == heroForce && item.hType == 3;
      })
    })
    console.log(this.data.herolist1)
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