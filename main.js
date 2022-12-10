const { app, BrowserWindow } = require('electron');

app.on('ready', function(){

    var win = new BrowserWindow({ width: 600, height: 600 });

    win.loadFile('index.html')
});

