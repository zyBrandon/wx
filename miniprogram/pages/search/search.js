const API_URL = 'https://movie.house-map.cn/v1/movies/'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  search:function(e){
    if (!e.detail.value) {
      return;
    }
    wx.showToast({
      title: '加载中..',
      icon: "loading",
      duration: 10000
    });
    var that = this;

    wx.request({
      url: API_URL + e.detail.value,
      data: {},
      header: {
        //'Content-Type':'application/json'
        "Content-Type": "application/text"
      },
      success: function (res) {
        console.log(res.data)
        wx.hideToast()
        that.setData({
          movies: res.data.data
        })
      }
    })
  },

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
    
  }
})