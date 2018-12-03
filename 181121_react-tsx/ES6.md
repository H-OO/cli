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

**flags 属性**

通过`.flags`获取正则表达式修饰符，例如：/abc/g.flags // g

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
- y //

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

- unicode // 是否设置了`u`修饰符
