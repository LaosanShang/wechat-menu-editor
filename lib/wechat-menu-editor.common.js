module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8698":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9a95":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9bea":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c472":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45c4c0f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9a95");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45c4c0f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45c4c0f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"746d8578-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/wechat-menu-editor/src/index.vue?vue&type=template&id=45c4c0f3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wechat-menu-editor"},[_c('header',[_vm._m(0),_c('div',{staticClass:"title-bar flex flex-justify"},[_vm._m(1),_c('div',[_vm._v(_vm._s(_vm.title))]),_vm._m(2)])]),_c('footer',[_c('i',{staticClass:"icon icon-keyboard"}),_c('div',{staticClass:"menus flex"},_vm._l((_vm.menus),function(menu){return _c('div',{key:menu.id,staticClass:"menu-item",class:_vm.buildRootMenuClass(menu),on:{"click":function($event){$event.stopPropagation();return _vm.clickRootMenu(menu)}}},[_c('a',[_vm._v(_vm._s(menu.name))]),(menu.selected)?_c('div',{staticClass:"menu-children"},[_c('div',{staticClass:"menu-items"},_vm._l((menu.children),function(childMenu){return _c('div',{key:childMenu.id,staticClass:"menu-item",class:_vm.buildChildMenuClass(childMenu),on:{"click":function($event){$event.stopPropagation();return _vm.clickChildMenu(menu, childMenu)}}},[_vm._v(" "+_vm._s(childMenu.name)+" ")])}),0),_c('div',{staticClass:"triangle-down"})]):_vm._e()])}),0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"status-bar flex flex-justify"},[_c('div',[_vm._v("10:00")]),_c('div',{staticClass:"flex"},[_c('div',{staticClass:"flex signal"},[_c('i'),_c('i'),_c('i'),_c('i')]),_c('div',[_vm._v("4G")]),_c('div',{staticClass:"battery"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('i',{staticClass:"icon icon-left"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('i',{staticClass:"icon icon-user"})])}]


// CONCATENATED MODULE: ./packages/wechat-menu-editor/src/index.vue?vue&type=template&id=45c4c0f3&scoped=true&

// EXTERNAL MODULE: ./packages/wechat-menu-editor/src/css/icon.css
var icon = __webpack_require__("8698");

// EXTERNAL MODULE: ./packages/wechat-menu-editor/src/css/base.css
var base = __webpack_require__("9bea");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/wechat-menu-editor/src/index.vue?vue&type=script&lang=js&
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



/**
 * 菜单选中事件名称
 */
const EVENT_MENU_SELECTED = 'menuselected';
/**
 * 菜单类型
 */
const MENU_TYPE = { ADD: 'add', NORMAL:'normal'};

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "WechatMenuEditor",
  props: {
    title: {
      type:String,
      default:'公众号名称'
    },
    menus: {
      type:Array,
      default:function(){
        return [{ type: MENU_TYPE.ADD, name: "+添加菜单" }];
      }
    },
    editable:{
      type:Boolean,
      default:true
    }
  },
  data(){
      return {
          selectedMenu:{}
      };
  },
  mounted() {
    this.init();
  },
  methods: {
    /**
     * 初始化
     */
    init() {
      let rootMenuLen = this.menus.length;
      if(rootMenuLen == 0 && this.editable){
        this.menus.push({ type: MENU_TYPE.ADD, name: "+添加菜单" });
      }else if(this.editable && rootMenuLen < 3 && !this.menus.some(m=> m.type === MENU_TYPE.ADD)){
        this.menus.push({ type: MENU_TYPE.ADD, name: "+" });
      }
      for (var i = 0; i < rootMenuLen; i++) {
        let rootMenu = this.menus[i];
        if (rootMenu.selected) {
          this.clicRootkMenu(rootMenu);
          for (var j = 0,clen = rootMenu.children.length; j < clen; j++) {
            let childMenu = rootMenu.children[j];
            if (childMenu.selected) {
              this.clickChildMenu(rootMenu, childMenu);
              return;
            }
          }
          return;
        }
      }
    },
    /**
     * 构建一级菜单样式
     */
    buildRootMenuClass(menu){
      return (menu.type === MENU_TYPE.ADD ? 'menu-item-add':'') + (menu.selected ? 'selected' : '' ) + (!this.editable && menu.type===MENU_TYPE.ADD? 'hide':'');
    },
    /**
     * 构建一级菜单样式
     */
    buildChildMenuClass(menu){
      return (menu.selected ? 'selected' : '' ) + (!this.editable && menu.type===MENU_TYPE.ADD? 'hide':'');
    },
    /**
     * 初始化一级菜单
     */
    buildDefaultRootMenu() {
      var defaultMenu = { id: 0, type: MENU_TYPE.NORMAL ,name: "添加菜单", children: []};
      defaultMenu.id = new Date().getTime();
      defaultMenu.selected = true;
      defaultMenu.children.push({ type: MENU_TYPE.ADD, name: "+" });
      return defaultMenu;
    },
    /**
     * 点击一级菜单
     */
    clickRootMenu(currentMenu) {
      this.menus.forEach(menu=>{ menu.selected = false; });
      if (currentMenu.type == MENU_TYPE.ADD) {
        let newMenu = this.buildDefaultRootMenu();
        let menuLen = this.menus.length;
        if (menuLen <= 2) {
          this.menus.splice(menuLen - 1, 0, newMenu);
          this.menus[menuLen].name = "+";
        } else {
          this.menus.splice(2, 0, newMenu);
          this.menus.splice(3, 1);
        }
        this.selectedMenu = newMenu;
      } else {
        currentMenu.selected = true;
        this.selectedMenu = currentMenu;
      }
      // 触发菜单选中事件
      this.$emit(EVENT_MENU_SELECTED,this.selectedMenu);
    },
    /**
     * 点击子菜单
     */
    clickChildMenu(parentMenu, currentMenu) {
      for (var i = 0; i < parentMenu.children.length; i++) {
        parentMenu.children[i].selected = false;
      }
      if (currentMenu.type == MENU_TYPE.ADD) {
        var defaultMenu = {
          id: new Date().getTime(),
          pid: parentMenu.id,
          type: MENU_TYPE.NORMAL,
          name: "添加子菜单",
          selected: true
        };
        if (parentMenu.children.length <= 4) {
          parentMenu.children.splice(
            parentMenu.children.length - 1,
            0,
            defaultMenu
          );
          parentMenu.children[parentMenu.children.length - 1].name = "+";
        } else {
          parentMenu.children.splice(4, 0, defaultMenu);
          parentMenu.children.splice(5, 1);
        }
        this.selectedMenu = defaultMenu;
      } else {
        currentMenu.selected = true;
        this.selectedMenu = currentMenu;
      }
      // 触发菜单选中事件
      this.$emit(EVENT_MENU_SELECTED,this.selectedMenu);
    },
  },
});

// CONCATENATED MODULE: ./packages/wechat-menu-editor/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var wechat_menu_editor_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/wechat-menu-editor/src/index.vue?vue&type=style&index=0&id=45c4c0f3&scoped=true&lang=css&
var srcvue_type_style_index_0_id_45c4c0f3_scoped_true_lang_css_ = __webpack_require__("c472");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/wechat-menu-editor/src/index.vue






/* normalize component */

var component = normalizeComponent(
  wechat_menu_editor_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "45c4c0f3",
  null
  
)

/* harmony default export */ var wechat_menu_editor_src = (component.exports);
// CONCATENATED MODULE: ./packages/wechat-menu-editor/index.js


wechat_menu_editor_src.install = function(Vue){
    Vue.component(wechat_menu_editor_src.name,wechat_menu_editor_src);
}

/* harmony default export */ var wechat_menu_editor = (wechat_menu_editor_src);
// CONCATENATED MODULE: ./packages/index.js


const components = [wechat_menu_editor];

const install = function(Vue){
    components.forEach(component=>{
        Vue.component(component.name,component);
    });
}

// 判断是否直接引入文件
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
    install,
    WechatMenuEditor: wechat_menu_editor
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=wechat-menu-editor.common.js.map