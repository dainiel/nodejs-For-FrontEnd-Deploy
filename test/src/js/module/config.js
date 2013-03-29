seajs.config({
  // 设置默认别名
  alias : {
    "global" : "module/global",
    "jquery" : "base/jquery/1.9.1/jquery",
    //注册登陆验证器
    "scValidator" : "module/scValidator",
    //placeholder
    "scPlaceholder" : "module/scPlaceholder",
    //搜索
    "scSearch" : "module/scSearch",
    //帮助页面点击
    "scHelpClick" : "module/scHelpClick"
  },

  // 添加shim插件
  plugins : ["shim"],

  // 配置shim插件
  shim : {
    "jquery" : {
    	exports: "jQuery"
    }
  }
});