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

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/pages/tabBar/conversation/index.js
  var import_vue = __toESM(require_vue());

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/pages/tabBar/conversation/index.js
  var _style_0 = { "yujl-container": { "": { "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": 0, "paddingLeft": "20rpx", "backgroundColor": "#f0f0f0" } }, "disflex": { "": { "display": "flex", "flexDirection": "row" } }, "yujl-textarea-wrap": { "": { "paddingTop": "10rpx", "paddingRight": "10rpx", "paddingBottom": "10rpx", "paddingLeft": "10rpx", "marginTop": "10rpx", "backgroundColor": "#FFFFFF", "display": "flex" } }, "yujl-textarea": { "": { "flex": 1, "fontSize": "32rpx", "color": "#353535" } }, "yujl-btn-wrap": { "": { "marginTop": "10rpx", "marginRight": 0, "marginBottom": "10rpx", "marginLeft": 0 } }, "yujl-text-wrap": { "": { "paddingTop": "5rpx", "paddingRight": "10rpx", "paddingBottom": "0rpx", "paddingLeft": "10rpx", "display": "flex", "backgroundColor": "#FFFFFF", "justifyContent": "center", "alignItems": "center", "textAlign": "left", "lineHeight": 1.8 } }, "yujl-text": { "": { "fontSize": "32rpx", "color": "#353535" } }, "text-border": { "": { "borderBottomWidth": "6rpx", "borderBottomStyle": "solid", "borderBottomColor": "#efeff4" } } };
  var _sfc_main = {
    data() {
      return {
        gender: "female",
        //性别(默认女性)
        talk: "",
        //输入内容
        replies: [
          {
            value: "\u540C\u65F6uni-app\u4E0D\u9650\u5236\u5404\u7AEF\u539F\u751F\u5E73\u53F0\u7684API\u8C03\u7528\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u5728uni-app\u6846\u67B6\u4E2D\u65E0\u9650\u5236\u7684\u8C03\u7528\u8BE5\u5E73\u53F0\u6240\u6709\u80FD\u4F7F\u7528\u7684API\u3002\u5373\uFF0C\u5728\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF0C\u5C0F\u7A0B\u5E8F\u7684\u6240\u6709API\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF1B\u5728web\u5E73\u53F0\uFF0C\u6D4F\u89C8\u5668\u7684\u6240\u6709API\u90FD\u53EF\u4F7F\u7528\uFF1B\u5728iOS\u548CAndroid\u5E73\u53F0\uFF0Cos\u7684\u6240\u6709API\u90FD\u53EF\u4EE5\u4F7F\u7528\u3002"
          },
          {
            value: "\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F7F\u7528uni-app\u7684\u6807\u51C6API\uFF0C\u53EF\u4EE5\u8DE8\u7AEF\u4F7F\u7528\u3002\u4F46\u5BF9\u4E8E\u4E0D\u8DE8\u7AEF\u7684\u90E8\u5206\uFF0C\u4ECD\u53EF\u4EE5\u8C03\u7528\u8BE5\u7AEF\u7684\u4E13\u6709API\u3002\u7531\u4E8E\u5E38\u89C1\u7684API\u90FD\u5DF2\u7ECF\u88AB\u5C01\u88C5\u5185\u7F6E\uFF0C\u6240\u4EE5\u65E5\u5E38\u5F00\u53D1\u65F6\uFF0C\u5F00\u53D1\u8005\u53EA\u9700\u5173\u6CE8uni\u6807\u51C6API\uFF0C\u5F53\u9700\u8981\u8C03\u7528\u7279\u8272\u7AEF\u80FD\u529B\u65F6\u5728\u6761\u4EF6\u7F16\u8BD1\u91CC\u7F16\u5199\u7279\u8272API\u8C03\u7528\u4EE3\u7801\u3002"
          },
          {
            value: "DCloud\u516C\u53F8\u62E5\u6709900\u4E07\u5F00\u53D1\u8005\u3001\u6570\u767E\u4E07\u5E94\u7528\u300112\u4EBF\u624B\u673A\u7AEF\u6708\u6D3B\u7528\u6237\u3001\u6570\u5343\u6B3Euni-app\u63D2\u4EF6\u300170+\u5FAE\u4FE1/qq\u7FA4\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u653E\u5FC3\u9009\u62E9\u3002"
          }
        ]
        //回复内容
      };
    },
    computed: {
      //是否可以回复
      canReply() {
        return !!this.talk;
      }
    },
    methods: {
      radioChange(evt) {
        this.gender = evt.detail.value;
      },
      generate() {
        uni.showToast({ title: "\u751F\u6210\u6210\u529F", icon: "success" });
      },
      copy(data) {
        uni.setClipboardData({
          data,
          success: () => {
            uni.showToast({ title: "\u590D\u5236\u6210\u529F", icon: "none" });
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_radio = (0, import_vue.resolveComponent)("radio");
    const _component_label = (0, import_vue.resolveComponent)("label");
    const _component_radio_group = (0, import_vue.resolveComponent)("radio-group");
    const _component_button = (0, import_vue.resolveComponent)("button");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "yujl-container" }, [
        (0, import_vue.createElementVNode)("view", null, [
          (0, import_vue.createVNode)(_component_radio_group, {
            onChange: $options.radioChange,
            class: "disflex"
          }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createVNode)(_component_label, { class: "disflex" }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createVNode)(_component_radio, {
                    value: "female",
                    checked: $data.gender === "female"
                  }, null, 8, ["checked"]),
                  (0, import_vue.createElementVNode)("u-text", { class: "yujl-text" }, "\u5979\u8BF4\uFF1A")
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue.createVNode)(_component_label, { class: "disflex" }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createVNode)(_component_radio, {
                    value: "male",
                    checked: $data.gender === "male"
                  }, null, 8, ["checked"]),
                  (0, import_vue.createElementVNode)("u-text", { class: "yujl-text" }, "\u4ED6\u8BF4\uFF1A")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onChange"])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "yujl-textarea-wrap" }, [
          (0, import_vue.createElementVNode)("u-textarea", {
            class: "yujl-textarea",
            modelValue: $data.talk,
            onInput: _cache[0] || (_cache[0] = ($event) => $data.talk = $event.detail.value)
          }, null, 40, ["modelValue"])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "yujl-btn-wrap" }, [
          (0, import_vue.createVNode)(_component_button, {
            type: "primary",
            disabled: !$options.canReply,
            onClick: $options.generate
          }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createTextVNode)("\u751F\u6210\u56DE\u590D")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "onClick"])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "" }, [
          ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
            import_vue.Fragment,
            null,
            (0, import_vue.renderList)($data.replies, (item, index2) => {
              return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                class: "yujl-text-wrap text-border",
                scrollY: "true",
                key: index2
              }, [
                (0, import_vue.createElementVNode)(
                  "u-text",
                  { class: "yujl-text" },
                  (0, import_vue.toDisplayString)(item.value),
                  1
                  /* TEXT */
                ),
                (0, import_vue.createElementVNode)("view", { class: "yujl-btn-wrap" }, [
                  (0, import_vue.createVNode)(_component_button, {
                    class: "mini-btn",
                    type: "primary",
                    size: "mini",
                    onClick: ($event) => $options.copy(item.value)
                  }, {
                    default: (0, import_vue.withCtx)(() => [
                      (0, import_vue.createTextVNode)("\u590D\u5236")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onClick"])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/CodeRepos/AI-assisted-chat/pages/tabBar/conversation/index.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/tabBar/conversation/index";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    index.mpType = "page";
    const app = Vue.createPageApp(index, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...index.styles || []]));
    app.mount("#root");
  }
})();
