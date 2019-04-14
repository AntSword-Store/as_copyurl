
'use strict';

const clipboard = require('electron').clipboard;
/**
 * 插件类
*/
class Plugin {
  constructor(opt) {
    // ######### 下方是具体插件代码,由插件作者编写 ##########
    clipboard.writeText(opt["url"]);
    // 检测是否复制成功
    let txt = clipboard.readText();
    if (txt.indexOf(opt["url"]) > -1) {
      toastr.success('复制成功！', 'Success');
    }else{
      toastr.error('复制失败！', 'Error');
    }
    // ######### 上方是具体插件代码,由插件作者编写 ##########
  }
}

module.exports = Plugin;