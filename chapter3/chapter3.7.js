// 不可變的基本型別值與可變的物件參考
/*
  基型值 (defined、null、boolean、數字與字串）
  物件 （包含陣列、函式）
  兩者之間有個根本的差異，基型值是不可變 (immutable)的，而字串也是。
*/
var s = "hello";
console.log(s[0]);
s[0] = "q";
console.log(s[0]);

/*
  物件不同於基型值，它們是可變的 (mutable)
*/

var o = {x: 1};
o.x = 2;
o.y = 3;
console.log(o);
console.log(o.x);
console.log(o.y);

var a = [1, 2, 3];
a[0] = 0;
a[3] = 4;
console.log(a);
console.log(a[0]);
console.log(a[3]);

/*
  基型值之間是用值（by value) 相比，只有在具有相同的值時，兩個值才相等，
  特別的是，字串在相比時，只有長度，與雙方同一索引位置上的字元都相同時， JavaScript才將它們視為相等。
*/

/*
  物件並不用值相比，即使兩個物件有相同的特性與值，它們也不相等。
  而兩個陣列有相同的元素，相同的順序排列，也不相等。
*/
var u = {x: 1};
var i = {x: 1};
console.log(u === i);
var z = [1, 2];
var x = [1, 2];
console.log(z === x);

/*
  物件被稱為 參考型別 （reference types)，所以物件值其實是參考 (references)，而用物件相比時：兩個物件值只有在
  它們都指涉至 (refer to) 同一個底層物件時，才相等。
*/
var qq = [];
var bb = qq;
bb[0] = 100;
console.log(qq[0]);
console.log(qq === bb);

/*
  若要比較兩個個別的物件或陣列，我們必須比較它們的特性或元素。
*/
// 比較兩陣列的函式
function equalArrays(a, b){
  if(a.length != b.length) return false;
  for(var i = 0; i < a.length; i++){
    if(a[i] !== b[i]) return false;
  return true;
  }
}

console.log(equalArrays(z, x));
