(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/record/record-page"],{

/***/ 107:
/*!*******************************************************************************************!*\
  !*** D:/documents/HBuilderProject1/demo2/main.js?{"page":"pages%2Frecord%2Frecord-page"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _recordPage = _interopRequireDefault(__webpack_require__(/*! ./pages/record/record-page.vue */ 109));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_recordPage.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 109:
/*!************************************************************************!*\
  !*** D:/documents/HBuilderProject1/demo2/pages/record/record-page.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _record_page_vue_vue_type_template_id_0d0b5386_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./record-page.vue?vue&type=template&id=0d0b5386&scoped=true& */ 110);
/* harmony import */ var _record_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./record-page.vue?vue&type=script&lang=js& */ 112);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _record_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _record_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _record_page_vue_vue_type_style_index_0_id_0d0b5386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./record-page.vue?vue&type=style&index=0&id=0d0b5386&scoped=true&lang=css& */ 114);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _record_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _record_page_vue_vue_type_template_id_0d0b5386_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _record_page_vue_vue_type_template_id_0d0b5386_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d0b5386",
  null,
  false,
  _record_page_vue_vue_type_template_id_0d0b5386_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/record/record-page.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 110:
/*!*******************************************************************************************************************!*\
  !*** D:/documents/HBuilderProject1/demo2/pages/record/record-page.vue?vue&type=template&id=0d0b5386&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_template_id_0d0b5386_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./record-page.vue?vue&type=template&id=0d0b5386&scoped=true& */ 111);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_template_id_0d0b5386_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_template_id_0d0b5386_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_template_id_0d0b5386_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_template_id_0d0b5386_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 111:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/documents/HBuilderProject1/demo2/pages/record/record-page.vue?vue&type=template&id=0d0b5386&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 112:
/*!*************************************************************************************************!*\
  !*** D:/documents/HBuilderProject1/demo2/pages/record/record-page.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./record-page.vue?vue&type=script&lang=js& */ 113);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 113:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/documents/HBuilderProject1/demo2/pages/record/record-page.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 71));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 73));
var _recordManager = _interopRequireDefault(__webpack_require__(/*! @/utils/record-manager.js */ 116));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 导入录音管理器
var _default = {
  data: function data() {
    return {
      isRecording: false,
      // 是否正在录音
      hasRecord: false,
      // 是否有录音文件
      isPlaying: false,
      // 是否正在播放
      isUploading: false,
      // 是否正在上传
      isStarting: false,
      // 开始录音中
      recordTime: 0,
      // 录音时长
      filePath: '',
      // 文件路径
      uploadResult: '',
      // 上传结果
      isDev: true,
      // 开发模式
      innerAudioContext: null // 音频播放上下文
    };
  },

  computed: {
    // 状态文本
    statusText: function statusText() {
      if (this.isRecording) return '🎤 录音中...';
      if (this.hasRecord) return '✅ 录音完成';
      return '📱 准备录音';
    },
    // 格式化时间
    formattedTime: function formattedTime() {
      var minutes = Math.floor(this.recordTime / 60);
      var seconds = this.recordTime % 60;
      return "".concat(minutes.toString().padStart(2, '0'), ":").concat(seconds.toString().padStart(2, '0'));
    }
  },
  onLoad: function onLoad() {
    var _this = this;
    console.log('页面加载');
    // 初始化录音管理器
    _recordManager.default.init();
    _recordManager.default.setTimeUpdateCallback(function (seconds, formatted) {
      // 只在录音中才更新页面显示，确保状态同步
      if (_this.isRecording || _recordManager.default.isRecording) {
        _this.recordTime = seconds;
        // 强制更新视图
        _this.$forceUpdate();
      }
    });

    // 初始化音频播放上下文
    this.initInnerAudioContext();
  },
  onUnload: function onUnload() {
    // 清理资源
    _recordManager.default.destroy();
    // 销毁音频上下文
    if (this.innerAudioContext) {
      this.innerAudioContext.destroy();
    }
  },
  methods: {
    // 初始化音频播放上下文
    initInnerAudioContext: function initInnerAudioContext() {
      var _this2 = this;
      console.log('初始化音频播放上下文');
      this.innerAudioContext = uni.createInnerAudioContext();

      // 配置音频
      this.innerAudioContext.autoplay = false;
      this.innerAudioContext.loop = false;
      this.innerAudioContext.volume = 1.0;

      // 监听各种事件
      this.innerAudioContext.onCanplay(function () {
        console.log('音频可以播放了');
      });
      this.innerAudioContext.onPlay(function () {
        console.log('音频开始播放');
      });
      this.innerAudioContext.onPause(function () {
        console.log('音频暂停');
      });
      this.innerAudioContext.onStop(function () {
        console.log('音频停止');
      });

      // 监听播放结束
      this.innerAudioContext.onEnded(function () {
        console.log('播放完成');
        _this2.isPlaying = false;
      });

      // 监听播放错误
      this.innerAudioContext.onError(function (err) {
        console.error('播放失败:', err);
        uni.showToast({
          title: '播放失败: ' + (err.errMsg || err.message),
          icon: 'none'
        });
        _this2.isPlaying = false;
      });
      this.innerAudioContext.onWaiting(function () {
        console.log('音频加载中...');
      });
      this.innerAudioContext.onSeeking(function () {
        console.log('音频跳转中...');
      });
      this.innerAudioContext.onSeeked(function () {
        console.log('音频跳转完成');
      });
    },
    // 开始录音
    handleStartRecord: function handleStartRecord() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('点击开始录音');
                _this3.isStarting = true;
                _context.prev = 2;
                _context.next = 5;
                return _recordManager.default.startRecord();
              case 5:
                _this3.isRecording = true;
                _this3.hasRecord = false;
                _this3.uploadResult = '';
                // 立即同步计时显示，确保从0开始
                _this3.recordTime = _recordManager.default.recordTime;
                uni.showToast({
                  title: '开始录音',
                  icon: 'none',
                  duration: 1500
                });
                _context.next = 16;
                break;
              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                console.error('开始录音失败:', _context.t0);
                uni.showToast({
                  title: '开始录音失败',
                  icon: 'none'
                });
              case 16:
                _context.prev = 16;
                _this3.isStarting = false;
                return _context.finish(16);
              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12, 16, 19]]);
      }))();
    },
    // 停止录音
    handleStopRecord: function handleStopRecord() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('点击停止录音');
                _context2.next = 3;
                return _recordManager.default.stopRecord();
              case 3:
                _this4.isRecording = false;
                _this4.hasRecord = true;
                _this4.filePath = _recordManager.default.getRecordFile();
                uni.showToast({
                  title: '录音完成',
                  icon: 'success'
                });
                console.log('录音文件路径:', _this4.filePath);
              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // 重新录音
    handleRedoRecord: function handleRedoRecord() {
      var _this5 = this;
      uni.showModal({
        title: '提示',
        content: '确定要重新录音吗？',
        success: function success(res) {
          if (res.confirm) {
            _this5.isRecording = false;
            _this5.hasRecord = false;
            _this5.isPlaying = false;
            _this5.recordTime = 0;
            _this5.uploadResult = '';
            _this5.filePath = '';
            _recordManager.default.tempFilePath = '';
            _recordManager.default.recordTime = 0;
          }
        }
      });
    },
    // 播放录音
    handlePlay: function handlePlay() {
      console.log('点击播放录音');
      if (!this.filePath) {
        uni.showToast({
          title: '请先录音',
          icon: 'none'
        });
        console.log('播放失败：filePath为空');
        return;
      }
      console.log('当前filePath:', this.filePath);
      console.log('当前isPlaying:', this.isPlaying);
      console.log('innerAudioContext:', this.innerAudioContext);
      if (this.isPlaying) {
        // 暂停播放
        console.log('暂停播放');
        this.innerAudioContext.pause();
        this.isPlaying = false;
      } else {
        // 开始播放
        console.log('开始播放，设置src:', this.filePath);
        this.innerAudioContext.src = this.filePath;

        // 直接调用play()，微信小程序中不需要load()方法
        console.log('调用play()');
        this.innerAudioContext.play();
        this.isPlaying = true;
        console.log('设置isPlaying为true');
      }
    },
    // 上传录音（模拟上传）
    handleUpload: function handleUpload() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var SERVER_URL, uploadTask;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this6.filePath) {
                  _context3.next = 3;
                  break;
                }
                uni.showToast({
                  title: '请先录音',
                  icon: 'none'
                });
                return _context3.abrupt("return");
              case 3:
                _this6.isUploading = true;
                _this6.uploadResult = '';
                try {
                  uni.showToast({
                    title: '开始上传录音',
                    mask: true
                  });
                  SERVER_URL = 'https://4c212857c50add03-122-224-247-54.serveousercontent.com'; //使用uni.uploadFile API
                  uploadTask = uni.uploadFile({
                    url: "".concat(SERVER_URL, "/api/upload"),
                    filePath: _this6.filePath,
                    name: 'audio',
                    formData: {
                      userId: 'test_user_001',
                      timestamp: Date.now(),
                      duration: _this6.recordTime
                    },
                    success: function success(uploadRes) {
                      var result = JSON.parse(uploadRes.data);
                      if (result.success) {
                        uni.showToast({
                          title: '上传成功',
                          icon: 'success'
                        });
                        _this6.uploadResult = "\u2705 \u4E0A\u4F20\u6210\u529F\uFF01\n                  \u6587\u4EF6\u540D: ".concat(result.data.filename, "\n                  \u5927\u5C0F: ").concat(_this6.formatFileSize(result.data.size), "\n                  \u65F6\u95F4: ").concat(new Date().toLocaleTimeString());
                        console.log('上传成功', result.data);
                      } else {
                        throw new Error(result.message || '上传失败');
                      }
                    },
                    fail: function fail(err) {
                      console.error('上传失败', err);
                      throw new Error("\u4E0A\u4F20\u8BF7\u6C42\u5931\u8D25: ".concat(err.errMsg || err.message));
                    },
                    complete: function complete() {
                      uni.hideLoading();
                      _this6.isUploading = false;
                    }
                  });
                  uploadTask.onProgressUpdate(function (res) {
                    console.log('上传进度:', res.progress + '%');
                    // 可以在这里显示进度条
                  });
                } catch (error) {
                  console.error('上传出错:', error);
                  uni.showToast({
                    title: "\u4E0A\u4F20\u5931\u8D25: ".concat(error.message),
                    icon: 'none',
                    duration: 3000
                  });
                  _this6.uploadResult = "\u4E0A\u4F20\u5931\u8D25: ".concat(error.message);
                  _this6.isUploading = false;
                }
              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    formatFileSize: function formatFileSize(bytes) {
      if (bytes === 0) return '0 B';
      var k = 1024;
      var sizes = ['B', 'KB', 'MB', 'GB'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 114:
/*!*********************************************************************************************************************************!*\
  !*** D:/documents/HBuilderProject1/demo2/pages/record/record-page.vue?vue&type=style&index=0&id=0d0b5386&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_style_index_0_id_0d0b5386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./record-page.vue?vue&type=style&index=0&id=0d0b5386&scoped=true&lang=css& */ 115);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_style_index_0_id_0d0b5386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_style_index_0_id_0d0b5386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_style_index_0_id_0d0b5386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_style_index_0_id_0d0b5386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_record_page_vue_vue_type_style_index_0_id_0d0b5386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 115:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/documents/HBuilderProject1/demo2/pages/record/record-page.vue?vue&type=style&index=0&id=0d0b5386&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[107,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/record/record-page.js.map