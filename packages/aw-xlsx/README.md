# AwXlsx

## 安装

```javascript
npm install aw-xlsx
```

#### 使用

```js
import  AwXlsx  from 'aw-xlsx'

AwXlsx(data)

// data对象中包含的参数: 
{
  multiHeader = [],
  header, // 数组 Excel 头部
  data,   // Excel 内容 二维数组 [[]]
  fileName, // 文件的名称
  merges = [],
  autoWidth = true, // 表头是否自适应
  bookType = "xlsx" // 导出文件类型：'xlsx', 'csv', 'txt'  (默认xlsx)
}
```

