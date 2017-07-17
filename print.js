/**
 * Created by SertaçKarahoda on 17-Jul-17.
 */
var rl = require('readline');

var i = rl.createInterface(process.stdin, process.stdout, null);
i.question('Write your name: ', function(answer) {
	console.log('Nice to meet you> ' + answer);
	i.close();
	process.stdin.destroy();

});