const down = {
  /**
   下载文件
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
    const url = window.URL.createObjectURL(new Blob([obj]))
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    const fileName = parseTime(new Date()) + '-' + name + '.' + suffix
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

export default down
