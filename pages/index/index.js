Page({
  data: {
    banners: [],
    bannerImgs:[],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 1500,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad:function(){
    var _this = this;
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/home/multidata', //仅为示例，并非真实的接口地址
      success (res) {
        // console.log(res)
      //  var bannerData=res.data.data.banner.list
      //  var bannerimglist=[]
      //  bannerData.array.forEach(element => {
      //    bannerimglist.push(element.image)
      //  });

        _this.setData({
          banners:res.data.data.banner.list,
          // bannerImgs:bannerimglist
        })
      }
    })
  }
})
