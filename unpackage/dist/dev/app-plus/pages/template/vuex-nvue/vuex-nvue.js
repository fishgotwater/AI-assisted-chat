"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // vuex-ns:vuex
  var require_vuex = __commonJS({
    "vuex-ns:vuex"(exports, module) {
      module.exports = uni.Vuex;
    }
  });

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/page-head.js
  var import_vue = __toESM(require_vue());

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/page-head.js
  var _sfc_main = {
    name: "page-head",
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      class: "common-page-head",
      renderWhole: true
    }, [
      (0, import_vue.createElementVNode)("view", { class: "common-page-head-title" }, [
        (0, import_vue.createElementVNode)(
          "u-text",
          null,
          (0, import_vue.toDisplayString)($props.title),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/CodeRepos/AI-assisted-chat/components/page-head/page-head.vue"]]);

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/pages/template/vuex-nvue/vuex-nvue.js
  var import_vue3 = __toESM(require_vue());

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue2 = __toESM(require_vue());
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/pages/template/vuex-nvue/vuex-nvue.js
  var import_vuex = __toESM(require_vuex());
  var store = (0, import_vuex.createStore)({
    state: {
      hasLogin: false,
      isUniverifyLogin: false,
      loginProvider: "",
      openid: null,
      testvuex: false,
      colorIndex: 0,
      colorList: ["#FF0000", "#00FF00", "#0000FF"],
      noMatchLeftWindow: true,
      active: "componentPage",
      leftWinActive: "/pages/component/view/view",
      activeOpen: "",
      menu: [],
      univerifyErrorMsg: "",
      // vuex测试例使用
      username: "foo",
      sex: "\u7537",
      age: 10
    },
    mutations: {
      login(state, provider) {
        state.hasLogin = true;
        state.loginProvider = provider;
      },
      logout(state) {
        state.hasLogin = false;
        state.openid = null;
      },
      setOpenid(state, openid) {
        state.openid = openid;
      },
      setTestTrue(state) {
        state.testvuex = true;
      },
      setTestFalse(state) {
        state.testvuex = false;
      },
      setColorIndex(state, index) {
        state.colorIndex = index;
      },
      setMatchLeftWindow(state, matchLeftWindow) {
        state.noMatchLeftWindow = !matchLeftWindow;
      },
      setActive(state, tabPage) {
        state.active = tabPage;
      },
      setLeftWinActive(state, leftWinActive) {
        state.leftWinActive = leftWinActive;
      },
      setActiveOpen(state, activeOpen) {
        state.activeOpen = activeOpen;
      },
      setMenu(state, menu) {
        state.menu = menu;
      },
      setUniverifyLogin(state, payload) {
        typeof payload !== "boolean" ? payload = !!payload : "";
        state.isUniverifyLogin = payload;
      },
      setUniverifyErrorMsg(state, payload = "") {
        state.univerifyErrorMsg = payload;
      },
      // vuex测试例使用
      increment(state) {
        state.age++;
      },
      incrementTen(state, payload) {
        state.age += payload.amount;
      },
      resetAge(state) {
        state.age = 10;
      }
    },
    getters: {
      currentColor(state) {
        return state.colorList[state.colorIndex];
      },
      // vuex测试例使用
      doubleAge(state) {
        return state.age * 2;
      }
    },
    actions: {
      // vuex测试例使用
      incrementAsync(context, payload) {
        context.commit("incrementTen", payload);
      },
      // lazy loading openid
      getUserOpenId: function(_0) {
        return __async(this, arguments, function* ({
          commit,
          state
        }) {
          return yield new Promise((resolve, reject) => {
            if (state.openid) {
              resolve(state.openid);
            } else {
              uni.login({
                success: (data) => {
                  commit("login");
                  setTimeout(function() {
                    const openid = "123456789";
                    formatAppLog("log", "at store/index.js:113", "uni.request mock openid[" + openid + "]");
                    commit("setOpenid", openid);
                    resolve(openid);
                  }, 1e3);
                },
                fail: (err) => {
                  formatAppLog("log", "at store/index.js:119", "uni.login \u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF0C\u5C06\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\u5F00\u653E\u63A5\u53E3\u7B49\u670D\u52A1", err);
                  reject(err);
                }
              });
            }
          });
        });
      },
      getPhoneNumber: function({
        commit
      }, univerifyInfo) {
        return new Promise((resolve, reject) => {
          uni.request({
            url: "https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/univerify-login",
            method: "POST",
            data: univerifyInfo,
            success: (res2) => {
              const data = res2.data;
              if (data.success) {
                resolve(data.phoneNumber);
              } else {
                reject(res2);
              }
            },
            fail: (err) => {
              reject(res);
            }
          });
        });
      }
    }
  });
  var _sfc_main2 = {
    data() {
      return {};
    },
    computed: {
      // ...mapState(['age']),
      username() {
        return this.$store.state.username;
      },
      sex() {
        return store.state.sex;
      },
      age() {
        return store.state.age;
      },
      doubleAge() {
        return store.getters.doubleAge;
      }
    },
    methods: {
      addAge() {
        store.commit("increment");
      },
      addAgeTen() {
        store.commit("incrementTen", {
          amount: 10
        });
      },
      addAgeAction() {
        store.dispatch("incrementAsync", {
          amount: 20
        });
      },
      resetAge() {
        store.commit("resetAge");
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_page_head = resolveEasycom((0, import_vue3.resolveDynamicComponent)("page-head"), __easycom_0);
    const _component_button = (0, import_vue3.resolveComponent)("button");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "uni-product" }, [
        (0, import_vue3.createVNode)(_component_page_head, { title: "vuex:nvue\u9875\u9762" }),
        (0, import_vue3.createElementVNode)(
          "u-text",
          { class: "username" },
          "\u7528\u6237\u540D\uFF1A" + (0, import_vue3.toDisplayString)($options.username),
          1
          /* TEXT */
        ),
        (0, import_vue3.createElementVNode)(
          "u-text",
          { class: "sex" },
          "\u6027\u522B\uFF1A" + (0, import_vue3.toDisplayString)($options.sex),
          1
          /* TEXT */
        ),
        (0, import_vue3.createElementVNode)("view", { class: "age" }, [
          (0, import_vue3.createElementVNode)(
            "u-text",
            null,
            "\u5E74\u9F84\uFF1A" + (0, import_vue3.toDisplayString)($options.age),
            1
            /* TEXT */
          )
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "doubleAge" }, [
          (0, import_vue3.createElementVNode)(
            "u-text",
            null,
            "\u5E74\u9F84\u7FFB\u500D\uFF1A" + (0, import_vue3.toDisplayString)($options.doubleAge),
            1
            /* TEXT */
          )
        ]),
        (0, import_vue3.createVNode)(_component_button, { onClick: $options.addAge }, {
          default: (0, import_vue3.withCtx)(() => [
            (0, import_vue3.createTextVNode)("\u589E\u52A01\u5C81")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue3.createVNode)(_component_button, { onClick: $options.addAgeTen }, {
          default: (0, import_vue3.withCtx)(() => [
            (0, import_vue3.createTextVNode)("\u589E\u52A010\u5C81")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue3.createVNode)(_component_button, { onClick: $options.addAgeAction }, {
          default: (0, import_vue3.withCtx)(() => [
            (0, import_vue3.createTextVNode)("\u589E\u52A020\u5C81")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue3.createVNode)(_component_button, { onClick: $options.resetAge }, {
          default: (0, import_vue3.withCtx)(() => [
            (0, import_vue3.createTextVNode)("\u91CD\u7F6E")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ])
    ]);
  }
  var vuexNvue = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["__file", "D:/CodeRepos/AI-assisted-chat/pages/template/vuex-nvue/vuex-nvue.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/template/vuex-nvue/vuex-nvue";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    vuexNvue.mpType = "page";
    const app = Vue.createPageApp(vuexNvue, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...vuexNvue.styles || []]));
    app.mount("#root");
  }
})();
