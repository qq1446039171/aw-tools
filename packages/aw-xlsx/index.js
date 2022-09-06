import Xlsx from './main/Export2Excel'
function xlsx(param) {
  let { header, data, filename, autoWidth = true, type = 'xlsx' } = { param }
  Xlsx.export_json_to_excel(header, data, filename, autoWidth, type)
}

export default xlsx
