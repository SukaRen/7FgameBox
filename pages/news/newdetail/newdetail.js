var WxParse = require('../../../wxParse/wxParse.js');
Page({
  data: {
    
  },
  onLoad: function (options) {
    var that = this;
    var newid = options.id;
    wx.request({
      url: 'https://cmsapi.7fgame.com/NewsService/Service/News.ashx?op=QueryNewsById&NewsId='+newid,
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        console.log(res.data.News_Content);
        var article = res.data.News_Content;
        WxParse.wxParse('article', 'html', article, that, 5);
      }
    })
  }
})