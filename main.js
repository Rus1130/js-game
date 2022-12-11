const { app, BrowserWindow } = require('electron');

app.on('ready', function(){

    var win = new BrowserWindow({ width: 1000, height: 1000 });

    win.loadFile('index.html')
});

