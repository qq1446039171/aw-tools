# AwPrint

## 安装

```javascript
npm install aw-print
```

#### 使用

```js
import  AwPrint  from 'aw-print'

Vue.use(AwPrint)

this.$print('#printTable',{
  noPrint: ".noPrint",
  onStart: () => {
    console.log("打印开始");
  },
  onEnd: () => {
    console.log("打印完成");
  },
})
```
