// chapter3.0.js
// JavaScript 是物件導向語言
// 基本型別 primitive types
/*
	Number, String, Boolean
*/

// 特殊值
/*
	null, undefined
*/

// 物件型別 object types
/*
	Number, String, Boolean, null, undefined 之外皆為物件。
	物件：一組特性(properties)的無序群集(collection)。
	特性：皆有一個名稱和一個值。
*/

// 陣列 array(特別的object)
/*
	代表一組有編號的值(nubered values)之有序群集。
*/

// 函式 function(特別的物件)
/*
	function 也是"值"
*/

// Garbage Collection
/* 
	JavaScript 直譯器會自動執行 Garbage Collection 。當一個物
	件不可及時(當程式沒有辦法參考那個物件之時)，直譯器知道那
	個物件再也用不到，因此自動收回它所佔據的記憶體空間。
*/

/*
	基本型別、物件型別；
	有方法的型別、沒有方法的型別；
	可變(mutable)型別、不可變(immutable)型別；
	可變(mutable)型別：
		物件、陣列
	不可變(immutable)型別：
		數字、字串、布林、null、undefined
		字串可被認為是字元(組成)的陣列，但在JavaScript中，字串是不可變的。
*/
console.log('***不可變型別***');
var a = 123;
a.x = 456;
a.y = 789;
console.log('a 的型別： ' + typeof a);
console.log('a.x: ' + a.x);
console.log('a.y: ' + a.y + '\n');

var b = "string";
b.x = "s2";
b.y = "s3";
console.log('b 的型別： ' + typeof b);
console.log('b.x: ' + b.x);
console.log('b.y: ' + b.y+ '\n');

var c = true;
c.x = false;
c.y = 123;
console.log('c 的型別： ' + typeof c);
console.log('c.x: ' + c.x);
console.log('c.y: ' + c.y+ '\n');

console.log('***可變型別***');
var d = ['test'];
d.x = 999;
d.y = 111;
console.log('d 的型別： ' + typeof d);
console.log('d.x: ' + d.x);
console.log('d.y: ' + d.y+ '\n');

var e = {z: 123};
e.x = true;
e.y = "SS";
console.log('e 的型別： ' + typeof e);
console.log('e.x: ' + e.x);
console.log('e.y: ' + e.y+ '\n');

// 型值轉換、變數不具型別(untyped)
/*
	JavaScript 會自由地轉換值的型別。
	JavaScript 變數不具型別。
	可以將任何型別的值指定給一個變數，隨後你還可指定不同型別的值給同一個變數。
	變數： 用 var 關鍵字宣告(declare)，
*/
console.log('***型值轉換***');
var testType = 123;
console.log('testType = ' + testType + '\ntestType type = ' + typeof testType);
testType = "SS"
console.log('testType = ' + testType + '\ntestType type = ' + typeof testType);