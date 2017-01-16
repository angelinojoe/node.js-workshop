var fs = require('fs');
var req = require('request');
exports.printCwd = function (fileName){
    process.stdout.write('Current Directory: ' + process.cwd());
};

exports.printDate = function (fileName){
    process.stdout.write('Current Date: ' + Date());
};

exports.ls = function (fileName){
    fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
    process.stdout.write(file.toString() + "\n");
  })
  process.stdout.write("prompt > ");
});
};

exports.echo = function (fileName){
    process.stdout.write(fileName.join(' '));
};

exports.cat = function (fileName){
    fs.readFile('./' + fileName, function(err, contents){
        if(err) return console.log(err);
        process.stdout.write(contents.toString());
        process.stdout.write("\nprompt > ");
    });
};
exports.head = function (fileName){
    fs.readFile('./' + fileName, function(err, contents){
        if(err) return console.log(err);
        //var contentArr = contents.toString.split('\n');
        var currentContent = contents.toString();
        var contentArr = currentContent.split('\n');
        process.stdout.write(contentArr.slice(0,6).join('\n'));
        process.stdout.write("\nprompt > ");

    });
};
exports.tail = function (fileName){
    fs.readFile('./' + fileName, function(err, contents){
        if(err) return console.log(err);
        var currentContent = contents.toString();
        var contentArr = currentContent.split('\n');
        process.stdout.write(contentArr.slice(contentArr.length-6, contentArr.length-1).join('\n'));
        process.stdout.write("\nprompt > ");

    });
};

exports.wc = function (fileName){
    fs.readFile('./' + fileName, function(err, contents){
        if(err) return console.log(err);
        var currentContent = contents.toString();
        var contentArr = currentContent.split('\n');
        process.stdout.write(contentArr.length.toString());
        process.stdout.write("\nprompt > ");

    });
};

exports.curl = function (fileName){
    req(fileName.toString(), function (error, response, body) {
    if (!error && response.statusCode == 200) {
    process.stdout.write(body); // Show the HTML for the Google homepage.
    process.stdout.write("\nprompt > ");
  }
});
};
