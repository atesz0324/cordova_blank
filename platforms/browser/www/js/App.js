//App :: Oldalak elérési mappája
var root = "pages/";



//App :: Oldalak tulajdonságai (props)
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



//App :: Konstruktor
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();