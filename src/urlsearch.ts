export default class UrlSearch {
  parse: Function = function(param: any, needMark: boolean) {
    try {
      for (const key in param) {
        let value = param[key]
        // 不是数字才需要转换
        if (isNaN(value) && value !== undefined) {
          param[key] = encodeURIComponent(param[key])
        }
      }
      let sstr = JSON.stringify(param)
      sstr = sstr.replace(/\t/g, '')
      sstr = sstr
        .replace(/\"/g, '')
        .replace('{', '')
        .replace('}', '')
        .replace(',', '&')
        .replace(':', '=')
      sstr = sstr
        .replace(/\"/g, '')
        .replace(/{/g, '')
        .replace(/}/g, '')
        .replace(/,/g, '&')
        .replace(/:/g, '=')
      return needMark ? '?' + sstr : sstr
    } catch (e) {
      return ''
    }
  }
}
