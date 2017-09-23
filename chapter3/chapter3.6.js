// Wrapper

var s = "hello world";
var word = s.substring(s.indexOf(" ") + 1, s.length);

/*
  字串並非物件，為什麼它們會有特性？
  每當你要參考字串 s 的一個特性， JavaScript 就把這個字串轉為物件，彷彿呼叫了 new String(s) 一般，
  這個物件繼承 （inherit） 了字串的方法，它被用來處理特性的參考動作。一但特性被參考完被，這個新創的物件就被丟棄。
  數字 與 Boolean 也是一樣 -> Number(), Boolean()。
  null, undefined 並無這種 wrapper (外覆)物件：嘗試存取這些值的特性會引發 TypeError。
*/

var t = 'test';
t.len = 4;
var q = t.len;
console.log(t.len);
console.log(q);

var p = null;
//p.len = 55; // Error

/*
  最後，你只需要知道字串、數字、Boolean、值和物件的差異在於他們特性是唯讀的，不能在它們身上定義新特性。
*/

// 建立 wrapper 物件
/*
	不必要或實用。
	可以直接調用 String(), Number(), Boolean() 建構式
*/

var s = "test";
var S = new String(s);
console.log(typeof s); // string
console.log(typeof S); // object
console.log(s == S); // true
console.log(s === S); // false

// JavaScript 會在需要的時候，將 Wrapper 物件轉為它們所包覆的基本型別值，所以 S 與 值 s 相同
// == 相等性運算子將一個值與其外覆物件視為相同
// === 嚴格相等性運算子，則視為不同，可使用 typeof 來看兩者差異。


