const down = {
  /**
   下载文件 由后端做的导出
  @method downloadFile
  @param {
    result -> 导出的数据  
    title -> 导出的标题  
    xlsx -> 导出的格式
  }
  @example downloadFile(result, title + "数据", "xlsx")
  @return  file   
  */
  downloadFile(obj, name, suffix) {
    name = name || new Date().getTime()
    const url = window.URL.createObjectURL(new Blob([obj]))
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    const fileName = name + '.' + suffix
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  },

  /**
   下载文件  由后端做的导出
  @method leadDownloadFile
  @param {
    header -> 需要导出的头部标题  
    data -> 需要导出的内容
    filename -> 导出文件的名称
    type -> 导出的格式 支持('xlsx', 'csv', 'txt')
  }
  @example leadDownloadFile({result, title + "数据", "xlsx"})
  @return  file   
  */
  leadDownloadFile({ header = [], data = [{}], fileName, type = 'xlsx' } = {}) {
    // 列标题，逗号隔开，每一个逗号就是隔开一个单元格
    fileName = fileName || new Date().getTime()
    if (!(header instanceof Array)) {
      if (this.$message) {
        this.$message.error('header必须为数组类型！')
      }
      console.log('header必须为数组类型！')
      return
    }
    let middleHeader = header.join(',')

    let headerTitle = `${middleHeader}\n`
    // 增加\t为了不让表格显示科学计数法或者其他格式
    for (let i = 0; i < data.length; i++) {
      for (const key in data[i]) {
        headerTitle += `${data[i][key] + '\t'},`
      }
      headerTitle += '\n'
    }
    // encodeURIComponent解决中文乱码
    const url = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(headerTitle)

    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    const name = parseTime(new Date()) + '-' + fileName + '.' + type
    link.setAttribute('download', name)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

export default down
