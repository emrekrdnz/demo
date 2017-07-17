var rl = require('readline');

var i = rl.createInterface(process.stdin, process.stdout, null);

function cevaplayici(cevap){
	console.log('Nice to meet you> ' + cevap);
	i.close();
	process.stdin.destroy();
}
i.question('Write your name: ', cevaplayici);


var a = {
	foo: function(){
		console.log("foo");
	},
	bar: function(){
		console.log("bar");
	},
	hello: "world",
	myNum: 12321
};


a.foo();

a.bar();

console.log(a.hello);