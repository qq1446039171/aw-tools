# AwLazy

## 安装

```javascript
npm install aw-lazy
```

#### 使用

```js
import  AwLazy  from 'aw-lazy'

Vue.use(AwLazy)

// 自定义指令使用(配合Element中的select组件)
v-lazy="{ class: '.el-select-dropdown .el-select-dropdown__wrap', loadFun: drugLoadMore }"
// v-lazy="{ class: '.step', loadFun: drugLoadMore }"
// .step 此类名需要设置 height: 210px; overflow-y: auto;
  // 历史任务信息查询（随访任务
  // drugLoadMore(patientId) {
  //   if (this.historyTaskQuery.loading || this.historyTaskQuery.loaded) return
  //   this.historyTaskQuery.loading = true
  //   GetListUserHistoryTask({ ...this.historyTaskQuery, patientId }).then((res) => {
  //     let historyStep = res.rows.map((item) => {
  //       return {
  //         title: item.createTime,
  //         type: item.serveTypeName,
  //         description: [
  //           item.drugName ? item.drugName : '药品名称还没有',
  //           item.treatDesc ? item.treatDesc : '服务记录为空',
  //           item.executeTime
  //         ]
  //       }
  //     })
  //     this.historyStep = this.historyStep.concat(historyStep)
  //     this.historyTaskQuery.pageNum++
  //     this.historyTaskQuery.loaded = this.historyStep.length >= res.total
  //     this.historyTaskQuery.loading = false
  //   })
  // },
```
