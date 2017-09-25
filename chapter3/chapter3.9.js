// 變數宣告
var i = 0; // 宣告一個全域變數
f = 1; // 在全域物件上加上特性
this.f = 1; //同上面一行

// strict 模式，若沒宣告變數就直接使用會出錯，或是賦值給未宣告的變數
// 非 strict 模式，若沒加上 var 宣告變數，則直接在全域物件加上該特性，如果未宣告直接使用，則返回 undefined
// 建議任何變數都要用 var 宣告

var i = 0;
f = 1;
delete i; // false 全域變數不可刪除
delete f; // true 全域物件的特性可以刪除

// 變數範圍
// JavaScript 變數範疇是以 function 而不是 block
// 區域變數總是比全域變數優先(若在區域變數沒宣告，剛好又與全域變數同名，則會直接蓋過，所以區域變數建議一定要先 var 宣告)
// 有些人會在區域變數的頂端先把所有用到變數宣告好，方便維護

var i = 0
function f () {
	i = 100;
}
console.log(i);
f();
console.log(i);

// 另一個範圍的例子，即使迴圈已結束，但在該 function 下，變數仍存在
function f () {
	for (var w = 0; w < 10; w++) {

	}
	console.log(w);
}
f(); // 10

// 全域
for (var t = 0; t < 10; t++) {

}
console.log(t);

// 提升
// JavaScript 會將區域變數宣告，拉到最頂端。
var x = 0
function f () {
	console.log(x); // undefined 而不是 0
	var x = 1 
	console.log(x);
}

// 範疇鏈