# AwXlsx

## 安装

```javascript
npm install aw-xlsx
```

#### 使用

```js
import  Awxlsx  from 'aw-xlsx'

Awxlsx(data)

data对象中包含的参数: 
  {
    multiHeader = [],
    header, // 数组 Excel 头部
    data,   // Excel 内容
    fileName, // 文件的内容
    merges = [],
    autoWidth = true, // 表头是否自适应
    bookType = "xlsx" // 导出文件类型：'xlsx', 'csv', 'txt'  (默认xlsx)
  }
```

