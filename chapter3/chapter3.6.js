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
