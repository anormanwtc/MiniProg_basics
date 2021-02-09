Page({

  data: {
    header: '',
    content: 'hi'
  },
  onLoad(query) {
    const content = 'get from SQL data or something'
    this.setData({content})
    this.setData({header: 'Index Page'});
    // my.setStorage({
    //   key: 'store',
    //   data: {
    //     location: 'devTool',
    //     tab: 'storage',
    //     text: 'hello',
    //   }
    // });
    // my.clearStorage();
    console.info('This is when the page loads');
  },
  onReady() {
    console.log('the index page is now ready to be interacted with')
  },
  onShow() {
    console.log('Index is now showing')
  },
  onHide() {
    console.log('you\'ve switched away from the index page (but its still open)')
  },
  onUnload() {
    console.log('you\'ve closed the index page')
  },
  onTitleClick() {
    console.log('you clicked my title')
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
