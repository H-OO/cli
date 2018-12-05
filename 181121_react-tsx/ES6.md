v181203

# 字符串扩展

- includes // 检索参数字符串是否存在，{ (str: string, n: number) => boolean }
- startsWith // 检索参数字符串是否在原字符串的头部，{ (str: string, n: number) => boolean }
- endsWith // 检索参数字符串是否在原字符串的尾部，{ (str: string, n: number) => boolean }
- repeat // 将原字符串复制 n 次，{ (n: number) => string }
- padStart // 字符串补全长度，头部补全，{ (n: number, str: string) => string }
- padEnd // 字符串补全长度，尾部补全，{ (n: number, str: string) => string }

方法传参  
includes、startsWith、endsWith 都可传入两个参数，表示开始检索的位置  
`startsWith`与`includes`使用第二个参数`n`，表示从第`n`个位置开始检索直到原字符串结束  
`endsWith`使用第二个参数`n`，表示从原字符串里的前`n`个字符串内进行检索

# 正则扩展

**正则构造函数**

```ts
const r: RegExp | string = new RegExp('xxx');
```

---

**字符串正则方法**

- match // 检索字符串，{ (r: RegExp|string) => Array<string> }
- replace // 替换字符串，{ (r: RegExp|string) => string }
- search // 检索字符串，返回索引位置， { (r: RegExp|string) => number }
- split // 字符串切割成数组，{ (r: RegExp|string) => Array<string> }

---

**正则方法**

- exec // { (str: string) => Array }
- test // { (str: string) => boolean }

---

**修饰符**

- u // Unicode 模式，用于处理大于`\uFFFF`的 Unicode 字符
- y // 粘连修饰符，用于全局匹配，与`g`修饰符不同在于，匹配必须从剩余部分的第一个位置开始
- s // 使`.`可以匹配任意单个字符，eg: /a./s.test('a\n') // true

---

**字符**

- . // 除换行符以外的任意单个字符，对于码点大于`\uFFFF`的 Unicode 字符，点字符不能识别，需加上`u`修饰符

---

**量词**

- {n,m} // 数量
- \* // {0,}
- \+ // {1,}
- ? // {0,1}

---

**Unicode 字符表示法**

```ts
const unic: boolean = /\u{61}/u.test('a'); // true
// 如果不加`u`修饰符，正则表达式无法识别`\u{61}`这种表示法
```

---

**RegExp 属性**

- flags // 获取正则表达式修饰符，返回{ string }
- unicode // 是否设置了`u`修饰符，返回{ boolean }
- sticky // 是否设置了`y`修饰符，返回{ boolean }

---

**具名组匹配**

可用于匹配具有固定结构的字符串

```ts
// 基本使用
const r: RegExp = /(\d{3})-(\d{4})-(\d{4})/;
const phone: string = '150-0000-0000';
r.exec(phone) // ['150-0000-0000', '150', '0000', '0000', ...]

// 增加可读性，添加组名，格式：?<name>
const r: RegExp = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const date: string = '2018-12-04';
r.exec(date) // ['2018-12-04','2018','12','04',groups:{year:'2018',month:'12',day:'04'},...]
// 解构赋值
const {groups: {year, month, day}}: any = r.exec(date);
year // 2018
month // 12
day // 04

// 通过`\k<name>`复用`(?<name>)`
const r: RegExp = /(?<name>abc)-\k<name>/; // 等同于 /(?<name>abc)-(?<name>abc)/
r.test('abc-abc') // true
r.test('abc-ab') // false
```

# Number 扩展

**二进制与八进制表示法**

- 0b 二进制
- 0o 八进制

```js
0b111110111 === 503 // true
0o767 === 503 // true
```

---

**非十进制转十进制**

```js
Number('0b111') // 7
Number('0o10') // 8
```

---

**属性与方法**

- Number.isFinite() // 判断参数是否为有限数值，{ (num: number) => boolean }
- Number.isNaN() // 判断参数是否为NaN，{ (num: number) => boolean }
- Number.parseInt() // 取整，{ (num: number|string) => number }
- Number.parseFloat() // 取浮点数，{ (num: number|string) => number }
- Number.isInteger() // 判断参数是否为整数，{ (num: number) => boolean }
- Number.isSafeInteger() // 判断参数是否落在精确区范围内的整数，{ (num: number) => boolean }
- Number.MAX_SAFE_INTEGER // 最大精确值极限
- Number.MIN_SAFE_INTEGER // 最小精确值极限

`Number.isFinite()`和`Number.isNaN()`与传统的全局方法`isFinite()`和`isNaN()`的区别在于：只对数值有效。

```js
isFinite('25') // true
Number.isFinite('25') // false
Number.isFinite(25) // true

isNaN('NaN') // true
Number.isNaN('NaN') // false
Number.isNaN(NaN) // true
// 传统的全局方法会先调用`Number()`尝试将参数转成数值类型

Number.parseInt(123.23) // 123
Number.parseInt('123.23') // 123
Number.parseFloat('123.23') // 123.23
Number.parseFloat('123.23#') // 123.23
```

# Math 扩展

- trunc // 去除参数数值的小数部分，{ (num: number) => number }
- sign // 判断参数是正数、负数、还是零，{ (num: number) => number }
- cbrt // 计算参数数值的立方根，{ (num: number) => number }
- hypot // 返回所有参数的平方和的平方根，{ (num: number) => number }

```js
Math.trunc(123.456) // 123
Math.trunc('123.456') // 123
Math.trunc(true) // 1
Math.trunc(false) // 0
Math.trunc(null) // 0
Math.trunc('NaN') // NaN
Math.trunc(NaN) // NaN

Math.sign(-5) // -1
Math.sign(5) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign(NaN) // NaN
Math.sign('') // 0
Math.sign(true) // +1
Math.sign(false) // 0
Math.sign(null) // 0
Math.sign('5') // +1
Math.sign('foo') // NaN
Math.sign() // NaN
Math.sign(undefined) // NaN

Math.cbrt(8) // 2
```

# 数组的扩展

**扩展运算符复制数组**

```ts
// 简单使用
const arr1: Array<number> = [1, 2];
const arr2: Array<number> = [...arr1];

// 数组解构赋值 (在数组解构中扩展运算符必须放在最末)
const [first, ...rest] = [0, 1, 2, 3];
first // 0
rest // [1,2,3]
```

---

**遍历 HTMLCollection**

```ts
// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>
const ulNode: HTMLUListElement = document.querySelector('ul');
const lis: HTMLCollection = ulNode.children;
// 遍历
Array.apply(null, lis).forEach((item: HTMLLIElement, i: number) => {
  // item
})
```

---

**方法**

- Array.from // 将两类对象`array-like object | iterable(Set&Map)`转为真正的数组，{ (p1, p2, p3) => Array<any> }
- Array.of // 将参数转换成数组，弥补`Array()与new Array()`方法的不足，{ (args: any) => Array<any> }
- Array.prototype.copyWithin // 将指定位置的成员复制其他位置，{ (target: number, start: number = 0, end: number = this.length) => Array<any> }
- Array.prototype.find // 找出第一个符合条件的数组成员，不符合条件则返回`undefined`；{ ((n: number, i: number, arr: 当前数组) => n < 0) => number }
- Array.prototype.findIndex // 找出第一个符合条件的数组成员对应的下标，不符合条件则返回`-1`；{ ((n: number, i: number, arr: 当前数组) => n < 0) => number }

```ts
// Array.from
const arr: Array<number|undefined> = [1, , 2, , 3];
const arr2: Array<number> = Array.from(arr, item => {
  console.log(item);
  return item || 0;
});
arr // [1, undefined, 2, undefined, 3]
arr2 // [1, 0, 2, 0, 3]

// Array.prototype.copyWithin
const arr: Array<number> = [1, 2, 3, 4, 5];
arr.copyWithin(0, 2, 4) // [3, 4, 3, 4, 5]  参数解析：(0, 2)指修改的位置[0, 2]，(2, 4)指复制的位置[2, 4]

// Array.prototype.find
const arr: Array<number> = [1, -2, 3, 4, 5];
arr.find((n) => n < 0) // -2，全部不满足条件则返回 undefined
```

---
