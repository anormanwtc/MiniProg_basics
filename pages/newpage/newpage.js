Page({
  data: {
    storage: ''
  },
  onLoad() {
    var app = getApp();
    app.globalData.pagesLoaded++
    my.getStorage({
      key: 'stored',
      success: (result) => {
        console.log(result)
        this.setData({storage:result.data})
      },
      fail: () => {
        console.log('get storage failed')
      },
    });
  },
});
