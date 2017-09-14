Page({
  data: {
    movies: [
      'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
      'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
      'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg',
      'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg',
      'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'
    ]
  },
  clickImage: function(e) {
    var current = e.target.dataset.src;
    wx.previewImage({
        current: current,
        urls: this.data.movies,
    })    
  }
})
