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

# 正则

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
const r: RegExp = /(?<name>abc)-\k<name>/; // 等同于 /(?<t>abc)-(?<t>abc)/
r.test('abc-abc') // true
r.test('abc-ab') // false
```

# Number 扩展
