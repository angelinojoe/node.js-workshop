var funcs = require('./command');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
var cmd = data.toString().trim().split(" ");

if (cmd[0] === 'pwd'){
   funcs.printCwd();
  }
if (cmd[0] === 'date'){
   funcs.printDate();
 }
 if (cmd[0] === 'ls'){
   funcs.ls();
 }
  if (cmd[0] === 'echo'){
   funcs.echo(cmd.slice(1));
 }
 if (cmd[0] === 'cat'){
   funcs.cat(cmd.slice(1));
 }
 if (cmd[0] === 'head'){
   funcs.head(cmd.slice(1));
 }
 if (cmd[0] === 'tail'){
   funcs.tail(cmd.slice(1));
 }
 if (cmd[0] === 'wc'){
   funcs.wc(cmd.slice(1));
 }
 if (cmd[0] === 'curl'){
   funcs.curl(cmd.slice(1));
 }
  process.stdout.write('\nprompt > ');

});
