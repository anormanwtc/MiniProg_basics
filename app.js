App({
  globalData: {
    pagesLoaded: 0,
    titleclicks: 0
  },
  onLaunch(options) {
    console.info('App onLaunch with pagesLoaded ' + this.globalData.pagesLoaded);
  },
  onShow() {
    console.log('The mini app is now showing')
  },

  //addable
  onHide() {
    console.log('you\'ve switched away from the mini app (but its still open)')
  },
  onError() {
    console.log('Error');
  },
  sayHi() {
    console.log('Hi');
    return ++this.globalData.titleclicks;
  }
});
