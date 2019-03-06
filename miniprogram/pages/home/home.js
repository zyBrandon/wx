// pages/home/home.js
wx.cloud.init()
var city = ""
var nickname = ""
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies:[],
    name:""
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
    var that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              that.setData({
                name: res.userInfo.nickName
              })
              nickname = res.userInfo.nickName
              city = res.userInfo.city
              console.log(res.userInfo)
              /*wx.request({
                url: 'http://localhost:8008/collect/selectMovies',
                data: { "nickname": nickname, "city": city },
                header: {
                  'Content-Type': 'application/json'
                },
                success: function (res) {
                  that.setData({
                    movies: res.data
                  })
                  console.log(res.data)
                }
              })*/
              const db = wx.cloud.database()
              // 查询当前用户所有的 counters
              db.collection('movie').where({
                
              }).get({
                success: res => {
                  this.setData({
                    movies:res.data
                  })
                  console.log('[数据库] [查询记录] 成功: ', res.data)
                },
                fail: err => {
                  wx.showToast({
                    icon: 'none',
                    title: '查询记录失败'
                  })
                  console.error('[数据库] [查询记录] 失败：', err)
                }
              })
            }
          })

        }
      }
    })
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