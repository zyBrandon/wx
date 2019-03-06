// pages/recommend/recommend.js
var API_URL = "https://movie-map.cn/api/recommendation?size=30&name=";

var name = "推荐";
var nickname;
var city;
var gender;
var country;
var user_language;
var province;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['推荐', '动作', '剧情','战争','喜剧','科幻'],
    currentTab: 0,
    movies:{}
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    console.log("e的值为" + e.currentTarget.dataset.idx)
    if (e.currentTarget.dataset.idx == 0){
      name = "推荐"
      var that = this;
      wx.showToast({
        title: '加载中',
        duration: 10000
      });

      wx.request({
        url: API_URL + name,
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
        }
      })

    } else if (e.currentTarget.dataset.idx == 1){
      name = "动作"
      var that = this;
      wx.showToast({
        title: '加载中',
        duration: 10000
      });

      wx.request({
        url: API_URL + name + "&size=20",
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
    } else if (e.currentTarget.dataset.idx == 2){
      name = "剧情"
      var that = this;
      wx.showToast({
        title: '加载中',
        duration: 10000
      });

      wx.request({
        url: API_URL + name,
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
    } else if (e.currentTarget.dataset.idx == 3){
      name = "战争"
      var that = this;
      wx.showToast({
        title: '加载中',
        duration: 10000
      });

      wx.request({
        url: API_URL + name,
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
    } else if (e.currentTarget.dataset.idx == 4){
      name = "喜剧"
      var that = this;
      wx.showToast({
        title: '加载中',
        duration: 10000
      });

      wx.request({
        url: API_URL + name,
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
    } else {
      name = "科幻"
      var that = this;
      wx.showToast({
        title: '加载中',
        duration: 10000
      });

      wx.request({
        url: API_URL + name,
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
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showToast({
      title: '加载中',
      duration: 10000
    });

    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
              nickname = res.userInfo.nickName;
              city = res.userInfo.city;
              gender = res.userInfo.gender;
              country = res.userInfo.country;
              user_language = res.userInfo/user_language;
              province = res.userInfo.province;
              /*wx.request({
                url: 'http://localhost:8008/collect/inputUser',
                data: { "nickname": nickname, "city": city, "gender": gender, "country": country, "user_language": user_language, "province": province },
                header: {
                  'Content-Type': 'application/json'
                },
                success: function (res) {
                  console.log(res)
                }
              })*/
            }
          })

        }
      }
    })

    

    wx.request({
      url: API_URL + name,
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