var util = require('../../utils/util.js')

const API_URL = 'https://movie.house-map.cn/v1/movies/'

wx.cloud.init()


var name = "推荐";
var nickname;
var city;
var gender;
var country;
var user_language;
var province;

var movie_name;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:[],
    movies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) { 
    console.log("params为"+params.name)
    movie_name = params.name
    var that = this;
    wx.request({
      url: API_URL + params.name,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        that.setData({
          movies: res.data.data
        })
      }
    })


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
              user_language = res.userInfo / user_language;
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
              const db = wx.cloud.database()
              db.collection('user').add({
                data: {
                  nickname: nickname,
                  city: city,
                  gender: gender,
                  country: country,
                  user_language: user_language,
                  province: province
                },
                success: res => {
                  // 在返回结果中会包含新创建的记录的 _id
                  this.setData({
                  })
                  wx.showToast({
                    title: '添加成功',
                  })
                  console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
                },
                fail: err => {
                  wx.showToast({
                    icon: 'none',
                    title: '新增记录失败'
                  })
                  console.error('[数据库] [新增记录] 失败：', err)
                }
              })
            }
          })

        }
      }
    })
  },

  collect:function(){
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    console.log("当前时间：" + Y + M + D);
    var time = Y + M + D
    /*wx.request({
      url: 'http://localhost:8008/collect/inputMovie',
      data: { "nickname": nickname, "city": city,"movie_name":movie_name,"time":time},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
      }
    })*/
    const db = wx.cloud.database()
    db.collection('movie').add({
      data: {
        nickname: nickname,
        city: city,
        movie_name: movie_name,
        time: time
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
        })
        wx.showToast({
          title: '添加成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
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