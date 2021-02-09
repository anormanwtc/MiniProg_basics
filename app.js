App({
  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
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
  }
});
