(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/follow-reading/follow-reading"],{

/***/ 127:
/*!******************************************************************************************************!*\
  !*** D:/documents/HBuilderProject1/demo2/main.js?{"page":"pages%2Ffollow-reading%2Ffollow-reading"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _followReading = _interopRequireDefault(__webpack_require__(/*! ./pages/follow-reading/follow-reading.vue */ 128));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_followReading.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 128:
/*!***********************************************************************************!*\
  !*** D:/documents/HBuilderProject1/demo2/pages/follow-reading/follow-reading.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _follow_reading_vue_vue_type_template_id_9bd47a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow-reading.vue?vue&type=template&id=9bd47a74&scoped=true& */ 129);
/* harmony import */ var _follow_reading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-reading.vue?vue&type=script&lang=js& */ 131);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _follow_reading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _follow_reading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _follow_reading_vue_vue_type_style_index_0_id_9bd47a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./follow-reading.vue?vue&type=style&index=0&id=9bd47a74&scoped=true&lang=css& */ 133);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _follow_reading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _follow_reading_vue_vue_type_template_id_9bd47a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _follow_reading_vue_vue_type_template_id_9bd47a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9bd47a74",
  null,
  false,
  _follow_reading_vue_vue_type_template_id_9bd47a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/follow-reading/follow-reading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 129:
/*!******************************************************************************************************************************!*\
  !*** D:/documents/HBuilderProject1/demo2/pages/follow-reading/follow-reading.vue?vue&type=template&id=9bd47a74&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_template_id_9bd47a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./follow-reading.vue?vue&type=template&id=9bd47a74&scoped=true& */ 130);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_template_id_9bd47a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_template_id_9bd47a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_template_id_9bd47a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_template_id_9bd47a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 130:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/documents/HBuilderProject1/demo2/pages/follow-reading/follow-reading.vue?vue&type=template&id=9bd47a74&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var m0 = _vm.getReadingText(0)
  var m1 = _vm.getReadingText(1)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 131:
/*!************************************************************************************************************!*\
  !*** D:/documents/HBuilderProject1/demo2/pages/follow-reading/follow-reading.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./follow-reading.vue?vue&type=script&lang=js& */ 132);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 132:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/documents/HBuilderProject1/demo2/pages/follow-reading/follow-reading.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _recordManager = __webpack_require__(/*! ../../utils/record-manager */ 116);
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
//
//
// import recordManager from '@/utils/record-manager.js'
var _default = {
  data: function data() {
    return {
      isRecording: [false, false, false],
      // 0: 跟读1, 1: 跟读2, 2: 咳嗽
      recordFiles: ['', '', ''],
      // 0: 跟读1, 1: 跟读2, 2: 咳嗽
      recordTimes: [0, 0, 0],
      // 0: 跟读1, 1: 跟读2, 2: 咳嗽
      recordManagers: [] // 存储每个录音项的独立管理器
    };
  },
  onLoad: function onLoad() {
    console.log('跟读页面加载');

    // 为每个录音项创建独立的录音管理器
    this.recordManagers = [new _recordManager.RecordManager('item_0'),
    // 第一个跟读项
    new _recordManager.RecordManager('item_1'),
    // 第二个跟读项
    new _recordManager.RecordManager('item_cough') // 咳嗽录音项
    ];

    // 初始化所有管理器
    this.recordManagers.forEach(function (manager) {
      manager.init();
    });
  },
  onUnload: function onUnload() {
    // 清理资源
    this.recordManagers.forEach(function (manager) {
      manager.destroy();
    });
  },
  methods: {
    // 播放音频
    playAudio: function playAudio(index) {
      console.log('播放音频', index);

      // 获取对应录音文件的路径
      var filePath = this.recordFiles[index];
      if (!filePath) {
        uni.showToast({
          title: '请先录音',
          icon: 'none'
        });
        return;
      }

      // 创建音频上下文
      var audioContext = uni.createInnerAudioContext();
      audioContext.src = filePath;
      audioContext.autoplay = true;
      audioContext.onPlay(function () {
        console.log('开始播放音频', index);
        uni.showToast({
          title: '播放中',
          icon: 'none',
          duration: 1000
        });
      });
      audioContext.onEnded(function () {
        console.log('播放结束', index);
        audioContext.destroy();
      });
      audioContext.onError(function (err) {
        console.error('播放失败:', err);
        uni.showToast({
          title: '播放失败',
          icon: 'none'
        });
        audioContext.destroy();
      });
    },
    // 切换录音状态
    toggleRecord: function toggleRecord(index) {
      console.log('切换录音状态', index, this.isRecording[index]);

      // 检查是否有其他项正在录音
      for (var i = 0; i < this.isRecording.length; i++) {
        if (i !== index && this.isRecording[i]) {
          uni.showToast({
            title: '请先完成上一个录音',
            icon: 'none',
            duration: 2000
          });
          return;
        }
      }
      if (this.isRecording[index]) {
        // 停止录音
        this.stopRecord(index);
      } else {
        // 开始录音
        this.startRecord(index);
      }
    },
    // 开始录音
    startRecord: function startRecord(index) {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var manager, errorMsg;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('开始录音', index);

                // 显示加载状态
                uni.showLoading({
                  title: '准备录音...',
                  mask: true
                });
                _context.prev = 2;
                // 重置录音状态
                _this.recordTimes[index] = 0;
                _this.recordFiles[index] = '';

                // 获取对应录音管理器
                manager = _this.recordManagers[index]; // 启动录音
                _context.next = 8;
                return manager.startRecord();
              case 8:
                // 更新页面状态
                _this.isRecording[index] = true;

                // 设置时间更新回调
                manager.setTimeUpdateCallback(function (seconds, formatted) {
                  console.log("\u5F55\u97F3".concat(index, "\u65F6\u95F4\u66F4\u65B0:"), seconds);
                  _this.recordTimes[index] = seconds;
                });
                uni.hideLoading();
                uni.showToast({
                  title: '开始录音',
                  icon: 'none',
                  duration: 1000
                });
                console.log("\u5F55\u97F3".concat(index, "\u542F\u52A8\u6210\u529F"));
                _context.next = 23;
                break;
              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](2);
                console.error('开始录音失败:', _context.t0);
                uni.hideLoading();

                // 显示具体错误信息
                errorMsg = '开始录音失败';
                if (typeof _context.t0 === 'string' && _context.t0.includes('权限被拒绝')) {
                  errorMsg = '需要麦克风权限，请在设置中开启';
                } else if (typeof _context.t0 === 'string' && _context.t0.includes('检查权限失败')) {
                  errorMsg = '权限检查失败，请重试';
                } else {
                  errorMsg = _context.t0.message || '未知错误';
                }
                uni.showToast({
                  title: errorMsg,
                  icon: 'none',
                  duration: 3000
                });

                // 恢复状态
                _this.isRecording[index] = false;
              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 15]]);
      }))();
    },
    // 停止录音
    stopRecord: function stopRecord(index) {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var manager, _manager;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('停止录音', index);
                if (_this2.isRecording[index]) {
                  _context2.next = 4;
                  break;
                }
                console.warn("\u5F55\u97F3".concat(index, "\u5E76\u672A\u5728\u5F55\u5236\u4E2D"));
                return _context2.abrupt("return");
              case 4:
                // 显示停止中状态
                uni.showLoading({
                  title: '停止录音中...',
                  mask: true
                });
                _context2.prev = 5;
                // 获取对应录音管理器
                manager = _this2.recordManagers[index]; // 停止录音
                _context2.next = 9;
                return manager.stopRecord();
              case 9:
                // 获取录音文件路径
                _this2.recordFiles[index] = manager.getRecordFile();

                // 更新页面状态
                _this2.isRecording[index] = false;

                // 清除时间更新回调
                manager.setTimeUpdateCallback(null);
                uni.hideLoading();
                uni.showToast({
                  title: '录音完成',
                  icon: 'success',
                  duration: 1500
                });
                console.log("\u5F55\u97F3".concat(index, "\u5B8C\u6210\uFF0C\u6587\u4EF6\u8DEF\u5F84:"), _this2.recordFiles[index]);

                // 检查录音文件是否有效
                if (!_this2.recordFiles[index]) {
                  console.warn("\u5F55\u97F3".concat(index, "\u6587\u4EF6\u8DEF\u5F84\u4E3A\u7A7A"));
                  uni.showToast({
                    title: '录音文件保存失败，请重试',
                    icon: 'none',
                    duration: 2000
                  });
                }
                _context2.next = 26;
                break;
              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](5);
                console.error('停止录音失败:', _context2.t0);
                uni.hideLoading();
                uni.showToast({
                  title: '停止录音失败',
                  icon: 'none',
                  duration: 2000
                });

                // 强制恢复状态
                _this2.isRecording[index] = false;

                // 尝试清理计时器
                _manager = _this2.recordManagers[index];
                if (_manager) {
                  _manager.stopTimer();
                  _manager.setTimeUpdateCallback(null);
                }
              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[5, 18]]);
      }))();
    },
    // 刷新
    handleRefresh: function handleRefresh() {
      console.log('刷新');
      uni.showToast({
        title: '刷新',
        icon: 'none',
        duration: 1000
      });
    },
    // 静音
    handleMute: function handleMute() {
      console.log('静音');
      uni.showToast({
        title: '静音',
        icon: 'none',
        duration: 1000
      });
    },
    // 跳过
    handleSkip: function handleSkip() {
      var _this3 = this;
      console.log('跳过');
      uni.showModal({
        title: '提示',
        content: '确定要跳过所有录音吗？',
        success: function success(res) {
          if (res.confirm) {
            console.log('用户确认跳过');

            // 停止所有正在进行的录音
            _this3.stopAllRecording();

            // 跳转到下一页或其他操作
            uni.showToast({
              title: '已跳过',
              icon: 'success'
            });

            // 模拟导航
            setTimeout(function () {
              uni.navigateTo({
                url: '/pages/next/page'
              });
            }, 1000);
          }
        }
      });
    },
    // 确定
    handleConfirm: function handleConfirm() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var incompleteRecordings, hasRecordings, uploadData;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('确定');

                // 检查是否有录音未完成
                incompleteRecordings = _this4.isRecording.filter(function (status) {
                  return status;
                });
                if (!(incompleteRecordings.length > 0)) {
                  _context3.next = 5;
                  break;
                }
                uni.showToast({
                  title: '请先完成录音',
                  icon: 'none'
                });
                return _context3.abrupt("return");
              case 5:
                // 检查是否有录音文件
                hasRecordings = _this4.recordFiles.some(function (file) {
                  return file;
                });
                if (hasRecordings) {
                  _context3.next = 9;
                  break;
                }
                uni.showToast({
                  title: '请先完成至少一个录音',
                  icon: 'none'
                });
                return _context3.abrupt("return");
              case 9:
                // 显示提交中状态
                uni.showLoading({
                  title: '提交录音中...',
                  mask: true
                });
                _context3.prev = 10;
                // 准备上传数据
                uploadData = {
                  recordings: _this4.recordFiles.map(function (file, idx) {
                    return {
                      index: idx,
                      filePath: file,
                      duration: _this4.recordTimes[idx],
                      text: _this4.getReadingText(idx) // 获取对应的跟读文本
                    };
                  }),

                  timestamp: Date.now()
                };
                console.log('提交的录音数据:', uploadData);

                // 模拟上传过程
                _context3.next = 15;
                return _this4.uploadRecordings(uploadData);
              case 15:
                uni.hideLoading();
                uni.showToast({
                  title: '提交成功',
                  icon: 'success',
                  duration: 2000
                });

                // 跳转到结果页面
                setTimeout(function () {
                  uni.navigateTo({
                    url: '/pages/result/result'
                  });
                }, 1500);
                _context3.next = 25;
                break;
              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](10);
                console.error('提交失败:', _context3.t0);
                uni.hideLoading();
                uni.showToast({
                  title: '提交失败，请重试',
                  icon: 'none'
                });
              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[10, 20]]);
      }))();
    },
    // 上传录音文件（模拟）
    uploadRecordings: function uploadRecordings(data) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          // 模拟网络请求
          var success = Math.random() > 0.2; // 80%成功率

          if (success) {
            console.log('录音上传成功:', data);

            // 这里应该调用API
            // uni.uploadFile({
            //     url: 'API_URL',
            //     filePath: data.filePath,
            //     name: 'audio',
            //     formData: data,
            //     success: resolve,
            //     fail: reject
            // })

            resolve();
          } else {
            reject(new Error('网络错误，上传失败'));
          }
        }, 1500);
      });
    },
    // 停止所有录音
    stopAllRecording: function stopAllRecording() {
      var _this5 = this;
      console.log('停止所有录音');

      // 遍历所有录音管理器
      this.recordManagers.forEach(function (manager, index) {
        if (_this5.isRecording[index]) {
          // 停止录音
          manager.stopRecord();
          manager.stopTimer();
          manager.setTimeUpdateCallback(null);

          // 更新状态
          _this5.isRecording[index] = false;
        }
      });
    },
    // 获取跟读文本
    getReadingText: function getReadingText(index) {
      var texts = ['一二三四五六七八九十', '赵钱孙李，周吴郑王', '请咳嗽至少三声'];
      return texts[index] || '';
    },
    // 重新录制指定项
    redoRecording: function redoRecording(index) {
      var _this6 = this;
      console.log('重新录制', index);
      uni.showModal({
        title: '提示',
        content: '确定要重新录制这一项吗？',
        success: function success(res) {
          if (res.confirm) {
            // 重置状态
            _this6.isRecording[index] = false;
            _this6.recordFiles[index] = '';
            _this6.recordTimes[index] = 0;

            // 如果需要立即开始新的录音
            // this.startRecord(index)

            uni.showToast({
              title: '已重置，可以重新录音',
              icon: 'success'
            });
          }
        }
      });
    },
    // 播放所有录音
    playAllRecordings: function playAllRecordings() {
      console.log('播放所有录音');
      var hasRecordings = this.recordFiles.some(function (file) {
        return file;
      });
      if (!hasRecordings) {
        uni.showToast({
          title: '请先完成录音',
          icon: 'none'
        });
        return;
      }

      // 按顺序播放所有录音
      this.playRecordingSequence(0);
    },
    // 顺序播放录音
    playRecordingSequence: function playRecordingSequence(index) {
      var _this7 = this;
      if (index >= this.recordFiles.length) {
        console.log('所有录音播放完成');
        return;
      }
      var filePath = this.recordFiles[index];
      if (!filePath) {
        // 如果该项没有录音，跳过
        this.playRecordingSequence(index + 1);
        return;
      }
      console.log("\u64AD\u653E\u7B2C".concat(index + 1, "\u4E2A\u5F55\u97F3"));
      var audioContext = uni.createInnerAudioContext();
      audioContext.src = filePath;
      audioContext.autoplay = true;
      audioContext.onEnded(function () {
        console.log("\u7B2C".concat(index + 1, "\u4E2A\u5F55\u97F3\u64AD\u653E\u7ED3\u675F"));
        audioContext.destroy();

        // 播放下一个
        _this7.playRecordingSequence(index + 1);
      });
      audioContext.onError(function (err) {
        console.error("\u64AD\u653E\u7B2C".concat(index + 1, "\u4E2A\u5F55\u97F3\u5931\u8D25:"), err);
        audioContext.destroy();

        // 继续播放下一个
        _this7.playRecordingSequence(index + 1);
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 133:
/*!********************************************************************************************************************************************!*\
  !*** D:/documents/HBuilderProject1/demo2/pages/follow-reading/follow-reading.vue?vue&type=style&index=0&id=9bd47a74&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_style_index_0_id_9bd47a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../download/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./follow-reading.vue?vue&type=style&index=0&id=9bd47a74&scoped=true&lang=css& */ 134);
/* harmony import */ var _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_style_index_0_id_9bd47a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_style_index_0_id_9bd47a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_style_index_0_id_9bd47a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_style_index_0_id_9bd47a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_follow_reading_vue_vue_type_style_index_0_id_9bd47a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 134:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/documents/HBuilderProject1/demo2/pages/follow-reading/follow-reading.vue?vue&type=style&index=0&id=9bd47a74&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[127,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/follow-reading/follow-reading.js.map