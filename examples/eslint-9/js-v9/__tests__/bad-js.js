var st = "122"

var tryq = '2463'
tryq.toLowerCase().replace('1','8')
tryq.toLowerCase().replace('1','8').split('').map(el => `-${el}-`)

const func = (e) => console.log('some function');



const obj = { name: 'john', age: 36}
const tr= obj['name']; 
const longObj = {
  somelongObjectKeyName: 'https://www.google.com/abcdef'
}
const res = a?b:c
const vb={data:{url:'bla bla'}}

const yu='color' 
let query = { configKey: 'window', [yu]:50}
var op={'$User.name':{[yu]:'#007aba'}}

function a(){}
function someFN(var1,var2,var3){return var1-var2+var3}

class Foo{
  constructor(){}
}

for(;;){
  // ...
}

/**
 * Test the following rules:
 * - @stylistic/js/array-bracket-newline
 * - @stylistic/js/array-bracket-spacing
 * - @stylistic/js/array-element-newline
 */
let arr = [2,42,42,33,23,67,234,2323]
arr.forEach(ele => ele+=1)
arr = [2,3]

var arr2 = ['raj', 'rajesh', 'rajesh kumar']
var arr4 = ['http://localhost:5000', 'http://localhost:5001', 'http://localhost:5002']
var arr5 = [
  'http://localhost:5000',
  'http://localhost:5001',
  'http://localhost:5002'
];

try{ console.log('hello world')}
catch(err) {console.error(err)}

/* Test @stylistic/js/object-curly-newline */
const obj2 = { a: 23, v: '323', c: {we: 34}, d:'deded' };
const obj3 = {
  a: 23,
  v: '323', c: {we: 34}, d:'deded'
};

/* Test @stylistic/js/function-call-spacing */
console.log ('hello world')