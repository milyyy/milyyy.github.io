
## 数组
### 基础常用方法1
`arr.shift()` 头部删除  
`arr.unshift` 头部追加  
`arr.pop()` 尾部删除  
`arr.push()` 尾部追加  
`arr.join()` 把数组每位元素按照‘x’拼接成字符串   
`arr.concact()` 数组合并  
`arr.find(fn)` 接受一个回调函数，返回符合条件的第一个值  
`arr.findIndex(fn)` 接受一个回调函数，返回符合条件的第一个值的索引  
`arr.reverse()` 数组元素反转  

`arr.splice(start, num, end)` 数组增删;   
num>1 表示从start开始删除num位；num=0，表示从start开始，插入元素 
```js
// slice(start, end) 数据截取
var arr = [1,'a',2,'b','hello'];
var arr1  = arr.slice();
console.log(arr1); // [1,'a',2,'b','hello'],相当于浅拷贝

var arr2 = arr.slice(1); // 只有一个参数表示从index开始向后截取所有的
console.log(arr2); // ['a',2,'b','hello']

var arr3 = arr.slice(2,4); // 从start开始，到end结束（不包括end）
console.log(arr3); // [2,'b']

``` 

### 常用方法2
`foreach` 数组 遍历 ,可以没有返回值
```js
  var arr = [1,2,3];
  arr.forEach(function(item, index){
    // console.log(item, index)
  })
```

`filter` 返回 过滤 后的新数组，返回一个新数组
```js
  var font = ['a', 'b','C','D', 'e']; // 过滤出大写字母
  var newFont = font.filter(function(item, index){
    return item === item.toUpperCase();
  })
```

`map` 按规则 替换 每一个值，返回替换后的新数组。
```js
  var arr2 = ['a', 'b','C','D', 'e']; // 过滤出大写字母
  var nArr2 = arr2.map(function(item, index){
    return index;  //用索引替换了每一项
  })
  // console.log(nArr2); // [0, 1, 2, 3, 4]
```

`every` 返回布尔值：每一项都符合条件 则返回true,否则返回false; 
```js
 var arr3 = ['a', 'b','C','D', 'e']
  var res = arr3.every(function(item, index){
    return item == item.toLowerCase()
  })
  // console.log(res); // false
```

`some` 某一项满足条件则返回true, 否则返回false  
```js
  var arr4 = ['a', 'b','C','D', 'e']
  var res2 = arr4.some(function(item, index){
    return item == item.toLowerCase()
  })
  // console.log(res2); // true
```

`arr.reduce((累计器, 当前值, 当前索引)=>{})`
```js
  var arr = [1, 2, 3, 4, 5];
  var res3 = arr.reduce((prev, curr, index) => {
    return prev + curr;
  })
  var res4 = arr.reduce((prev, curr, index) => {
    return prev + curr;
  }, 10);  // 传了第二个参数10，默认为 n0，10+n1+n2...
  // 第一次 1+2； 第二次 1+2 +3； 第三次1+2+3+4； 第四次：1+2+3+4+5；
  // prev始终是前两项之累加的和
  // console.log(res3); 
  // console.log(res4); 
```

`arr.fill(value, start, end)`; 从start开始填充，不包括end
```js
  var _arr = [1, 2, 3, 4, 5];
  _arr.fill('a',1,3); //[1,'a','a', 4, 5]
```
`arr.includes(value, index)`; 从第几位开始检索有没有value值，index可选
```js
  var _arr2 = [1, 2, 5, 4, 5];
  let bool = _arr.includes(2, 2); //从第2位开始没有检索到2
```

### 数组扁平化
`array.flat(n)`;  `n`:表示层级嵌套关系，默认不传只拍平一层；`n=3`表示拍平3层；`Infinity`表示拍平到最后一层.
```js
let arr = [
  ['mily', 18],
  ['xxxx', 18],
  ['huahua', 18],
  [
    'nihao',
    'hello',
    [
      3, 4, 5,
      [
        'a', 'b' ,'c'
      ]
    ]
  ]
]

let a = arr.flat(); 
let b = arr.flat(Infinity); // ["mily", 18, "xxxx", 18, "huahua", 18, "nihao", "hello", 3, 4, 5, "a", "b", "c"]
```  

## 字符串常用API
`str.concat()` 字符串拼接，返回一个新的字符串, 不改变原值

`str.toLowerCase()` 转小写 返回一个新的字符串, 不改变原值

`str.toUpperCase()` 转大写 返回一个新的字符串, 不改变原值

`str.trim()` 去除首尾空格, 返回新的字符串, 不改变原值

`split(separator,[howmany])`； 返回一个新的数组
//separator：按照分隔符分割；howmany：有参数则指定返回数组的长度（元素的个数），没有整个字符串都会被分割

`str.charAt(index)` 返回字符串所在下标的字符串

`str.indexOf('o')`  查找字符串返回索引

`substr(start, length)` 截取

`substring(start,end)`返回指定下标间的字符，下标必须为正整数

`substr(start,length)`返回从指定下标开始的长度为length的字符，可以为负数

`slice(start,end)`返回指定下标间的字符，可以为负数

`str.incluedes(value, [index])`; 是否包含某个字符串，index表示从某个索引开始检索，可选参数，默认为0

`str.startsWith(value, [index])`; 是否以某个字符串开始，index表示从某个索引开始检索，可选参数，默认为0

`str.endsWith(value, [index])`; 是否以某个字符串开始，index表示从某个索引开始检索，可选参数，默认为0

`str.repeat(n)`; 字符串重复的次数

```JS
var str1 = str.split("o");
var str2 = str.split("o", 2); 

// console.log(str1);  // [" hell", " W", "rld "]
// console.log(str2);  //  [" hell", " W"]

var str3 = 'hello world';
let res = str3.startsWith("hello"); // true

var str4 = 'a';
str4.repeat(3); // 'aaa' 重复3次
```

Q1: 为什么字符串有方法？
A: 字符串底层还是调用new String();相当于一个类数组

## 对象方法
需求：把属性和值分别存放一个数组中
```js
var obj = { name:'mily', age:18, gender:'女'};
```

1.for in
```
  // var ks = [], vals =[];
  // for (const k in obj) {
  //   ks.push(k); 
  //   vals.push(obj[k]);
  // }
```


2.keys() , values
```js
  var ks = Object.keys(obj); // 取出对象所有的属性返回一数组
  var vals = Object.values(obj); // 取出对象所有的value返回一数组

    // 判断对象中是否有某个属性
  var res = 'name' in obj;
  console.log(res); // true
```

3.对象合并，Object.assign(target,o1,o2...);
```js
  var o1 = {
    name: 'mily'
  }
  var o2 = {
    name: 'hello',
    age: 18
  }
  var o3 = Object.assign({},o1,o2);  // {name: "hello", age: 18}

  // 4.Object.is(value1, value2); // 判断两值是否相等，强类型比较
  Object.is(1, '1');    // false
```

### 深浅拷贝
**浅拷贝**只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。  

**实现方式**：  
- Object.assign()：需注意的是目标对象只有一层的时候，是深拷贝  
- ES6的对象拓展运算符  
- Array.prototype.concat()
- Array.prototype.slice()

**深拷贝**就是在拷贝数据的时候，将数据的所有引用结构都拷贝一份。简单的说就是，在内存中存在两个数据结构完全相同又相互独立的数据，将引用型类型进行复制，而不是只复制其引用关系。  

**实现方式**：  
- JSON.parse(JSON.stringfy(obj))  
- lodash的_.clonedeep方法
- jquery的$.extend
- 手写递归
```js
	// 手写完整递归深拷贝
	// 思路：先判断目标对象类型是否为数组或对象，如果是再次调用函数遍历一次，
function checkType(target) {
	return Object.prototype.toString.call(target).slice(8, -1);
}
function _clone(target) {
	let result, _type = checkType(target);
	if (_type === 'Object') {
		result = {}
	} else if(_type === 'Array') {
		result = []
	}
	
	for (const i in target) {
		let value = target[i];
		// 检查递归得到的目标的类型
		if ( checkType(value) === 'Object' || checkType(value) === 'Array' ) {
			// 把递归遍历获得的目标进行赋值
			result[i] = _clone(value);
		} else {
			result[i] = value;
		}
	}
	return result;
}
```

