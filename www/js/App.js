var root = "pages/";

var PAGES = {

  home: {
    title: 'Home',
    id: 'home',
    path: root + 'home.html'
  },
  
  page2: {
    title: 'Page 2',
    id: 'page2',
    path: root + 'page2.html'
  }
};

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();

