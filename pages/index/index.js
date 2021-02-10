Page({

  data: {
    header: '',
    content: 'hi',
    pagesLoaded: 0,
  },
  onLoad(query) {
    const content = 'get from SQL data or something'
    this.setData({content})
    this.setData({header: 'Index Page'});


    var app = getApp();
    app.globalData.pagesLoaded++;
    my.setStorage({
      key: 'stored',
      data: {
        location: 'test',
        tab: 'storage',
        text: 'hello',
      }
    });
    // my.clearStorage();
    // my.removeStorage({
    //   key: 'stored'
    // });
    console.info('This is when the page loads');
  },
  onReady() {
    console.log('the index page is now ready to be interacted with')
  },
  onShow() {
    var app = getApp();
    const v = app.globalData.pagesLoaded;
    this.setData({pagesLoaded:v})
    console.log('Index is now showing')
  },
  onHide() {
    console.log('you\'ve switched away from the index page (but its still open)')
  },
  onUnload() {
    console.log('you\'ve closed the index page')
  },
  onTitleClick() {
    let num = getApp().sayHi();
    console.log('you clicked my title ' + num + ' times')
  },
  onReachBottom() {
    console.log('you\'ve scrolled all the way')
  },
  onShareAppMessage() {
    return data;
  },
  nav() {
    my.navigateTo({url: '/pages/newpage/newpage'})
  },
  red() {
    my.redirectTo({url:  '/pages/newpage/newpage', })
  }
});
