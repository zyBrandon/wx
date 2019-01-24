var API_URL = 'https://movie.house-map.cn/v1/movies?page=1&size=20'
var index_num = 1;
var size = 20;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:{}
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
    index_num -= 1
    if(index_num<1){
      index_num = 1
    }
    var that = this;
    wx.showToast({
      title: '加载中',
      duration: 10000
    });
    API_URL = 'https://movie.house-map.cn/v1/movies?page=' + index_num + '&size=20'
    wx.request({
      url: API_URL,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.hideToast();
        var data = res.data;
        that.setData({
          movies: res.data.data
        })
        console.log(res.data)
      }
    })
    
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showToast({
      title: '加载中',
      duration:10000
    });

    wx.request({
      url: API_URL,
      data:{},
      header:{
        'Content-Type': 'application/json'
      },
      success:function(res){
        wx.hideToast();
        var data = res.data;
        that.setData({
          movies:res.data.data
        })
        console.log(res.data)
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    index_num += 1
    var that = this;
    wx.showToast({
      title: '加载中',
      duration: 10000
    });
    var sum_size = index_num * size
    API_URL = 'https://movie.house-map.cn/v1/movies?page=' + index_num + '&size=' + sum_size
    wx.request({
      url: API_URL,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.hideToast();
        var data = res.data;
        that.setData({
          movies: res.data.data
        })
        console.log(res.data)
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})