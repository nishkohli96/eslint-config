function createFn(
	// @Body() body,
	// @Res() res,
	// @Req() req
) {
	try {
		console.log('hello')
	}catch(err){
		console.error(err);
	}
}

expect(Promise.resolve('lemon')).resolves.toBe('lemon');

// export class LinkAsset {
//   @IsNotEmpty({ message: validationConstants.REQUIRED })
//   @IsMongoId({ message: validationConstants.IS_OBJECT_ID })
//   sourceAssetId;
//   @IsNotEmpty({ message: validationConstants.REQUIRED })
//   @IsMongoId({ message: validationConstants.IS_OBJECT_ID })
//   targetAssetId;
// }


const events = [
	{ title:'a', msg: 'e'},
{title:'b',msg:'e'},
	{ title:'ac', msg: 'c',},
]

let we=30;
const po =Date.now()+ we * 60 *1000  

res.send({ contentFilters: [], sort: [], somelongStrs: ['12',23,45]})

let str = 'HELLo'
switch(str) {
	case 'world' : return true;
	case 'hel': { return 'bla bla'}
}

/* max-len rule tests */
/**
 * This is a really really really really really really really really really long comment......
**/
var foo = 'bar'; // This is a really really really really really really really long comment

var url = 'https://www.example.com/really/really/really/really/really/really/really/long' + foo;
var longString = 'this is a really really really really really long string!';
var longTemplateLiteral = `this is a really really really really really long template literal - ${longString}!`;
var longRegExpLiteral = /this is a really really really really really long regular expression!/;
var dep = require('really/really/really/really/really/really/really/really/long/module');
import RHFDateTimePicker, { RHFDateTimePickerProps } from '@nish1896/rhf-mui-components/mui-pickers/date-time';
export { somevar, anotherVariable } from 'really/really/really/really/really/really/really/really/long/module';