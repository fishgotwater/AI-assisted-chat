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

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
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

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-icons.js
  var import_vue2 = __toESM(require_vue());

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-icons.js
  var fontData = [
    {
      "font_class": "arrow-down",
      "unicode": "\uE6BE"
    },
    {
      "font_class": "arrow-left",
      "unicode": "\uE6BC"
    },
    {
      "font_class": "arrow-right",
      "unicode": "\uE6BB"
    },
    {
      "font_class": "arrow-up",
      "unicode": "\uE6BD"
    },
    {
      "font_class": "auth",
      "unicode": "\uE6AB"
    },
    {
      "font_class": "auth-filled",
      "unicode": "\uE6CC"
    },
    {
      "font_class": "back",
      "unicode": "\uE6B9"
    },
    {
      "font_class": "bars",
      "unicode": "\uE627"
    },
    {
      "font_class": "calendar",
      "unicode": "\uE6A0"
    },
    {
      "font_class": "calendar-filled",
      "unicode": "\uE6C0"
    },
    {
      "font_class": "camera",
      "unicode": "\uE65A"
    },
    {
      "font_class": "camera-filled",
      "unicode": "\uE658"
    },
    {
      "font_class": "cart",
      "unicode": "\uE631"
    },
    {
      "font_class": "cart-filled",
      "unicode": "\uE6D0"
    },
    {
      "font_class": "chat",
      "unicode": "\uE65D"
    },
    {
      "font_class": "chat-filled",
      "unicode": "\uE659"
    },
    {
      "font_class": "chatboxes",
      "unicode": "\uE696"
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": "\uE692"
    },
    {
      "font_class": "chatbubble",
      "unicode": "\uE697"
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": "\uE694"
    },
    {
      "font_class": "checkbox",
      "unicode": "\uE62B"
    },
    {
      "font_class": "checkbox-filled",
      "unicode": "\uE62C"
    },
    {
      "font_class": "checkmarkempty",
      "unicode": "\uE65C"
    },
    {
      "font_class": "circle",
      "unicode": "\uE65B"
    },
    {
      "font_class": "circle-filled",
      "unicode": "\uE65E"
    },
    {
      "font_class": "clear",
      "unicode": "\uE66D"
    },
    {
      "font_class": "close",
      "unicode": "\uE673"
    },
    {
      "font_class": "closeempty",
      "unicode": "\uE66C"
    },
    {
      "font_class": "cloud-download",
      "unicode": "\uE647"
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": "\uE646"
    },
    {
      "font_class": "cloud-upload",
      "unicode": "\uE645"
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": "\uE648"
    },
    {
      "font_class": "color",
      "unicode": "\uE6CF"
    },
    {
      "font_class": "color-filled",
      "unicode": "\uE6C9"
    },
    {
      "font_class": "compose",
      "unicode": "\uE67F"
    },
    {
      "font_class": "contact",
      "unicode": "\uE693"
    },
    {
      "font_class": "contact-filled",
      "unicode": "\uE695"
    },
    {
      "font_class": "down",
      "unicode": "\uE6B8"
    },
    {
      "font_class": "bottom",
      "unicode": "\uE6B8"
    },
    {
      "font_class": "download",
      "unicode": "\uE68D"
    },
    {
      "font_class": "download-filled",
      "unicode": "\uE681"
    },
    {
      "font_class": "email",
      "unicode": "\uE69E"
    },
    {
      "font_class": "email-filled",
      "unicode": "\uE69A"
    },
    {
      "font_class": "eye",
      "unicode": "\uE651"
    },
    {
      "font_class": "eye-filled",
      "unicode": "\uE66A"
    },
    {
      "font_class": "eye-slash",
      "unicode": "\uE6B3"
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": "\uE6B4"
    },
    {
      "font_class": "fire",
      "unicode": "\uE6A1"
    },
    {
      "font_class": "fire-filled",
      "unicode": "\uE6C5"
    },
    {
      "font_class": "flag",
      "unicode": "\uE65F"
    },
    {
      "font_class": "flag-filled",
      "unicode": "\uE660"
    },
    {
      "font_class": "folder-add",
      "unicode": "\uE6A9"
    },
    {
      "font_class": "folder-add-filled",
      "unicode": "\uE6C8"
    },
    {
      "font_class": "font",
      "unicode": "\uE6A3"
    },
    {
      "font_class": "forward",
      "unicode": "\uE6BA"
    },
    {
      "font_class": "gear",
      "unicode": "\uE664"
    },
    {
      "font_class": "gear-filled",
      "unicode": "\uE661"
    },
    {
      "font_class": "gift",
      "unicode": "\uE6A4"
    },
    {
      "font_class": "gift-filled",
      "unicode": "\uE6C4"
    },
    {
      "font_class": "hand-down",
      "unicode": "\uE63D"
    },
    {
      "font_class": "hand-down-filled",
      "unicode": "\uE63C"
    },
    {
      "font_class": "hand-up",
      "unicode": "\uE63F"
    },
    {
      "font_class": "hand-up-filled",
      "unicode": "\uE63E"
    },
    {
      "font_class": "headphones",
      "unicode": "\uE630"
    },
    {
      "font_class": "heart",
      "unicode": "\uE639"
    },
    {
      "font_class": "heart-filled",
      "unicode": "\uE641"
    },
    {
      "font_class": "help",
      "unicode": "\uE679"
    },
    {
      "font_class": "help-filled",
      "unicode": "\uE674"
    },
    {
      "font_class": "home",
      "unicode": "\uE662"
    },
    {
      "font_class": "home-filled",
      "unicode": "\uE663"
    },
    {
      "font_class": "image",
      "unicode": "\uE670"
    },
    {
      "font_class": "image-filled",
      "unicode": "\uE678"
    },
    {
      "font_class": "images",
      "unicode": "\uE650"
    },
    {
      "font_class": "images-filled",
      "unicode": "\uE64B"
    },
    {
      "font_class": "info",
      "unicode": "\uE669"
    },
    {
      "font_class": "info-filled",
      "unicode": "\uE649"
    },
    {
      "font_class": "left",
      "unicode": "\uE6B7"
    },
    {
      "font_class": "link",
      "unicode": "\uE6A5"
    },
    {
      "font_class": "list",
      "unicode": "\uE644"
    },
    {
      "font_class": "location",
      "unicode": "\uE6AE"
    },
    {
      "font_class": "location-filled",
      "unicode": "\uE6AF"
    },
    {
      "font_class": "locked",
      "unicode": "\uE66B"
    },
    {
      "font_class": "locked-filled",
      "unicode": "\uE668"
    },
    {
      "font_class": "loop",
      "unicode": "\uE633"
    },
    {
      "font_class": "mail-open",
      "unicode": "\uE643"
    },
    {
      "font_class": "mail-open-filled",
      "unicode": "\uE63A"
    },
    {
      "font_class": "map",
      "unicode": "\uE667"
    },
    {
      "font_class": "map-filled",
      "unicode": "\uE666"
    },
    {
      "font_class": "map-pin",
      "unicode": "\uE6AD"
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": "\uE6AC"
    },
    {
      "font_class": "medal",
      "unicode": "\uE6A2"
    },
    {
      "font_class": "medal-filled",
      "unicode": "\uE6C3"
    },
    {
      "font_class": "mic",
      "unicode": "\uE671"
    },
    {
      "font_class": "mic-filled",
      "unicode": "\uE677"
    },
    {
      "font_class": "micoff",
      "unicode": "\uE67E"
    },
    {
      "font_class": "micoff-filled",
      "unicode": "\uE6B0"
    },
    {
      "font_class": "minus",
      "unicode": "\uE66F"
    },
    {
      "font_class": "minus-filled",
      "unicode": "\uE67D"
    },
    {
      "font_class": "more",
      "unicode": "\uE64D"
    },
    {
      "font_class": "more-filled",
      "unicode": "\uE64E"
    },
    {
      "font_class": "navigate",
      "unicode": "\uE66E"
    },
    {
      "font_class": "navigate-filled",
      "unicode": "\uE67A"
    },
    {
      "font_class": "notification",
      "unicode": "\uE6A6"
    },
    {
      "font_class": "notification-filled",
      "unicode": "\uE6C1"
    },
    {
      "font_class": "paperclip",
      "unicode": "\uE652"
    },
    {
      "font_class": "paperplane",
      "unicode": "\uE672"
    },
    {
      "font_class": "paperplane-filled",
      "unicode": "\uE675"
    },
    {
      "font_class": "person",
      "unicode": "\uE699"
    },
    {
      "font_class": "person-filled",
      "unicode": "\uE69D"
    },
    {
      "font_class": "personadd",
      "unicode": "\uE69F"
    },
    {
      "font_class": "personadd-filled",
      "unicode": "\uE698"
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": "\uE6D1"
    },
    {
      "font_class": "phone",
      "unicode": "\uE69C"
    },
    {
      "font_class": "phone-filled",
      "unicode": "\uE69B"
    },
    {
      "font_class": "plus",
      "unicode": "\uE676"
    },
    {
      "font_class": "plus-filled",
      "unicode": "\uE6C7"
    },
    {
      "font_class": "plusempty",
      "unicode": "\uE67B"
    },
    {
      "font_class": "pulldown",
      "unicode": "\uE632"
    },
    {
      "font_class": "pyq",
      "unicode": "\uE682"
    },
    {
      "font_class": "qq",
      "unicode": "\uE680"
    },
    {
      "font_class": "redo",
      "unicode": "\uE64A"
    },
    {
      "font_class": "redo-filled",
      "unicode": "\uE655"
    },
    {
      "font_class": "refresh",
      "unicode": "\uE657"
    },
    {
      "font_class": "refresh-filled",
      "unicode": "\uE656"
    },
    {
      "font_class": "refreshempty",
      "unicode": "\uE6BF"
    },
    {
      "font_class": "reload",
      "unicode": "\uE6B2"
    },
    {
      "font_class": "right",
      "unicode": "\uE6B5"
    },
    {
      "font_class": "scan",
      "unicode": "\uE62A"
    },
    {
      "font_class": "search",
      "unicode": "\uE654"
    },
    {
      "font_class": "settings",
      "unicode": "\uE653"
    },
    {
      "font_class": "settings-filled",
      "unicode": "\uE6CE"
    },
    {
      "font_class": "shop",
      "unicode": "\uE62F"
    },
    {
      "font_class": "shop-filled",
      "unicode": "\uE6CD"
    },
    {
      "font_class": "smallcircle",
      "unicode": "\uE67C"
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": "\uE665"
    },
    {
      "font_class": "sound",
      "unicode": "\uE684"
    },
    {
      "font_class": "sound-filled",
      "unicode": "\uE686"
    },
    {
      "font_class": "spinner-cycle",
      "unicode": "\uE68A"
    },
    {
      "font_class": "staff",
      "unicode": "\uE6A7"
    },
    {
      "font_class": "staff-filled",
      "unicode": "\uE6CB"
    },
    {
      "font_class": "star",
      "unicode": "\uE688"
    },
    {
      "font_class": "star-filled",
      "unicode": "\uE68F"
    },
    {
      "font_class": "starhalf",
      "unicode": "\uE683"
    },
    {
      "font_class": "trash",
      "unicode": "\uE687"
    },
    {
      "font_class": "trash-filled",
      "unicode": "\uE685"
    },
    {
      "font_class": "tune",
      "unicode": "\uE6AA"
    },
    {
      "font_class": "tune-filled",
      "unicode": "\uE6CA"
    },
    {
      "font_class": "undo",
      "unicode": "\uE64F"
    },
    {
      "font_class": "undo-filled",
      "unicode": "\uE64C"
    },
    {
      "font_class": "up",
      "unicode": "\uE6B6"
    },
    {
      "font_class": "top",
      "unicode": "\uE6B6"
    },
    {
      "font_class": "upload",
      "unicode": "\uE690"
    },
    {
      "font_class": "upload-filled",
      "unicode": "\uE68E"
    },
    {
      "font_class": "videocam",
      "unicode": "\uE68C"
    },
    {
      "font_class": "videocam-filled",
      "unicode": "\uE689"
    },
    {
      "font_class": "vip",
      "unicode": "\uE6A8"
    },
    {
      "font_class": "vip-filled",
      "unicode": "\uE6C6"
    },
    {
      "font_class": "wallet",
      "unicode": "\uE6B1"
    },
    {
      "font_class": "wallet-filled",
      "unicode": "\uE6C2"
    },
    {
      "font_class": "weibo",
      "unicode": "\uE68B"
    },
    {
      "font_class": "weixin",
      "unicode": "\uE691"
    }
  ];
  var iconUrl = "/assets/uniicons.32e978a5.ttf";
  var _style_0 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue2.normalizeStyle)($options.styleObj),
        class: "uni-icons",
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      (0, import_vue2.toDisplayString)($options.unicode),
      5
      /* TEXT, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/pages/extUI/indexed-list/indexed-list.js
  var import_vue3 = __toESM(require_vue());
  var _style_0$1 = { "uni-indexed-list__list": { "": { "backgroundColor": "#ffffff", "flexDirection": "column", "borderTopStyle": "solid", "borderTopWidth": 1, "borderTopColor": "#DEDEDE" } }, "uni-indexed-list__item": { "": { "fontSize": 14, "flex": 1, "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "uni-indexed-list__item-container": { "": { "paddingLeft": 15, "flex": 1, "position": "relative", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "uni-indexed-list__item-border": { "": { "flex": 1, "position": "relative", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center", "height": 50, "paddingTop": 25, "paddingRight": 25, "paddingBottom": 25, "paddingLeft": 0, "borderBottomStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#DEDEDE" } }, "uni-indexed-list__item-border--last": { "": { "borderBottomWidth": 0 } }, "uni-indexed-list__item-content": { "": { "flex": 1, "fontSize": 14, "color": "#191919" } }, "uni-indexed-list": { "": { "flexDirection": "row" } }, "uni-indexed-list__title-wrapper": { "": { "backgroundColor": "#f7f7f7" } }, "uni-indexed-list__title": { "": { "paddingTop": 6, "paddingRight": 12, "paddingBottom": 6, "paddingLeft": 12, "lineHeight": 24, "fontSize": 16, "fontWeight": "500" } } };
  var _sfc_main$2 = {
    name: "UniIndexedList",
    emits: ["itemClick"],
    props: {
      loaded: {
        type: Boolean,
        default: false
      },
      idx: {
        type: Number,
        default: 0
      },
      list: {
        type: Object,
        default() {
          return {};
        }
      },
      showSelect: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick(idx, index) {
        this.$emit("itemClick", {
          idx,
          index
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-icons"), __easycom_1);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", { renderWhole: true }, [
      $props.loaded || $props.list.itemIndex < 15 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
        key: 0,
        class: "uni-indexed-list__title-wrapper"
      }, [
        $props.list.items && $props.list.items.length > 0 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
          "u-text",
          {
            key: 0,
            class: "uni-indexed-list__title"
          },
          (0, import_vue3.toDisplayString)($props.list.key),
          1
          /* TEXT */
        )) : (0, import_vue3.createCommentVNode)("v-if", true)
      ])) : (0, import_vue3.createCommentVNode)("v-if", true),
      ($props.loaded || $props.list.itemIndex < 15) && $props.list.items && $props.list.items.length > 0 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
        key: 1,
        class: "uni-indexed-list__list"
      }, [
        ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
          import_vue3.Fragment,
          null,
          (0, import_vue3.renderList)($props.list.items, (item, index) => {
            return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
              key: index,
              class: "uni-indexed-list__item",
              hoverClass: "uni-indexed-list__item--hover"
            }, [
              (0, import_vue3.createElementVNode)("view", {
                class: "uni-indexed-list__item-container",
                onClick: ($event) => $options.onClick($props.idx, index)
              }, [
                (0, import_vue3.createElementVNode)(
                  "view",
                  {
                    class: (0, import_vue3.normalizeClass)(["uni-indexed-list__item-border", { "uni-indexed-list__item-border--last": index === $props.list.items.length - 1 }])
                  },
                  [
                    $props.showSelect ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                      key: 0,
                      style: { "margin-right": "20rpx" }
                    }, [
                      (0, import_vue3.createVNode)(_component_uni_icons, {
                        type: item.checked ? "checkbox-filled" : "circle",
                        color: item.checked ? "#007aff" : "#C0C0C0",
                        size: "24"
                      }, null, 8, ["type", "color"])
                    ])) : (0, import_vue3.createCommentVNode)("v-if", true),
                    (0, import_vue3.createElementVNode)(
                      "u-text",
                      { class: "uni-indexed-list__item-content" },
                      (0, import_vue3.toDisplayString)(item.name),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ], 8, ["onClick"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : (0, import_vue3.createCommentVNode)("v-if", true)
    ]);
  }
  var indexedListItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$1]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list-item.vue"]]);
  var _style_02 = { "uni-indexed-list": { "": { "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "flexDirection": "row" } }, "uni-indexed-list__scroll": { "": { "flex": 1 } }, "uni-indexed-list__menu": { "": { "width": 24, "flexDirection": "column" } }, "uni-indexed-list__menu-item": { "": { "flex": 1, "alignItems": "center", "justifyContent": "center" } }, "uni-indexed-list__menu-text": { "": { "fontSize": 12, "textAlign": "center", "color": "#aaaaaa" } }, "uni-indexed-list__menu-text--active": { "": { "borderRadius": 16, "width": 16, "height": 16, "lineHeight": 16, "backgroundColor": "#007aff", "color": "#ffffff" } }, "uni-indexed-list__alert-wrapper": { "": { "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "uni-indexed-list__alert": { "": { "width": 80, "height": 80, "borderRadius": 80, "textAlign": "center", "lineHeight": 80, "fontSize": 35, "color": "#ffffff", "backgroundColor": "rgba(0,0,0,0.5)" } } };
  var dom = weex.requireModule("dom");
  function throttle(func, delay) {
    var prev = Date.now();
    return function() {
      var context = this;
      var args = arguments;
      var now = Date.now();
      if (now - prev >= delay) {
        func.apply(context, args);
        prev = Date.now();
      }
    };
  }
  function touchMove(e) {
    let pageY = e.touches[0].pageY;
    let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
    if (this.touchmoveIndex === index) {
      return false;
    }
    let item = this.lists[index];
    if (item) {
      dom.scrollToElement(this.$refs["uni-indexed-list-" + index][0], {
        animated: false
      });
      this.touchmoveIndex = index;
    }
  }
  var throttleTouchMove = throttle(touchMove, 40);
  var _sfc_main$1 = {
    name: "UniIndexedList",
    components: {
      indexedListItem
    },
    emits: ["click"],
    props: {
      options: {
        type: Array,
        default() {
          return [];
        }
      },
      showSelect: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        lists: [],
        winHeight: 0,
        itemHeight: 0,
        winOffsetY: 0,
        touchmove: false,
        touchmoveIndex: -1,
        scrollViewId: "",
        touchmovable: true,
        loaded: false,
        isPC: false
      };
    },
    watch: {
      options: {
        handler: function() {
          this.setList();
        },
        deep: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.setList();
      }, 50);
      setTimeout(() => {
        this.loaded = true;
      }, 300);
    },
    methods: {
      setList() {
        this.lists = [];
        this.options.forEach((value, index) => {
          if (value.data.length === 0) {
            return;
          }
          let indexBefore = index;
          let items = value.data.map((item) => {
            let obj = {};
            obj["key"] = value.letter;
            obj["name"] = item;
            obj["itemIndex"] = index;
            index++;
            obj.checked = item.checked ? item.checked : false;
            return obj;
          });
          this.lists.push({
            title: value.letter,
            key: value.letter,
            items,
            itemIndex: indexBefore
          });
        });
        dom.getComponentRect(this.$refs["list"], (res) => {
          this.winOffsetY = res.size.top;
          this.winHeight = res.size.height;
          this.itemHeight = this.winHeight / this.lists.length;
        });
      },
      touchStart(e) {
        this.touchmove = true;
        let pageY = this.isPC ? e.pageY : e.touches[0].pageY;
        let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
        let item = this.lists[index];
        if (item) {
          this.scrollViewId = "uni-indexed-list-" + index;
          this.touchmoveIndex = index;
          dom.scrollToElement(this.$refs["uni-indexed-list-" + index][0], {
            animated: false
          });
        }
      },
      touchMove(e) {
        throttleTouchMove.call(this, e);
      },
      touchEnd() {
        this.touchmove = false;
      },
      /**
       * 兼容 PC @tian
       */
      mousedown(e) {
        if (!this.isPC)
          return;
        this.touchStart(e);
      },
      mousemove(e) {
        if (!this.isPC)
          return;
        this.touchMove(e);
      },
      mouseleave(e) {
        if (!this.isPC)
          return;
        this.touchEnd(e);
      },
      onClick(e) {
        let {
          idx,
          index
        } = e;
        let obj = {};
        for (let key in this.lists[idx].items[index]) {
          obj[key] = this.lists[idx].items[index][key];
        }
        let select = [];
        if (this.showSelect) {
          this.lists[idx].items[index].checked = !this.lists[idx].items[index].checked;
          this.lists.forEach((value, idx2) => {
            value.items.forEach((item, index2) => {
              if (item.checked) {
                let obj2 = {};
                for (let key in this.lists[idx2].items[index2]) {
                  obj2[key] = this.lists[idx2].items[index2][key];
                }
                select.push(obj2);
              }
            });
          });
        }
        this.$emit("click", {
          item: obj,
          select
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_indexed_list_item = (0, import_vue3.resolveComponent)("indexed-list-item");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: "uni-indexed-list",
        ref: "list",
        id: "list",
        renderWhole: true
      },
      [
        (0, import_vue3.createElementVNode)("list", {
          class: "uni-indexed-list__scroll",
          scrollable: "true",
          showScrollbar: "false"
        }, [
          ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
            import_vue3.Fragment,
            null,
            (0, import_vue3.renderList)($data.lists, (list, idx) => {
              return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("cell", {
                key: idx,
                ref_for: true,
                ref: "uni-indexed-list-" + idx
              }, [
                (0, import_vue3.createVNode)(_component_indexed_list_item, {
                  list,
                  loaded: $data.loaded,
                  idx,
                  showSelect: $props.showSelect,
                  onItemClick: $options.onClick
                }, null, 8, ["list", "loaded", "idx", "showSelect", "onItemClick"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        (0, import_vue3.createElementVNode)(
          "view",
          {
            class: "uni-indexed-list__menu",
            onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.touchStart && $options.touchStart(...args)),
            onTouchmove: _cache[1] || (_cache[1] = (0, import_vue3.withModifiers)((...args) => $options.touchMove && $options.touchMove(...args), ["stop", "prevent"])),
            onTouchend: _cache[2] || (_cache[2] = (...args) => $options.touchEnd && $options.touchEnd(...args)),
            onMousedown: _cache[3] || (_cache[3] = (0, import_vue3.withModifiers)((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
            onMousemove: _cache[4] || (_cache[4] = (0, import_vue3.withModifiers)((...args) => $options.mousemove && $options.mousemove(...args), ["stop", "prevent"])),
            onMouseleave: _cache[5] || (_cache[5] = (0, import_vue3.withModifiers)((...args) => $options.mouseleave && $options.mouseleave(...args), ["stop"]))
          },
          [
            ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
              import_vue3.Fragment,
              null,
              (0, import_vue3.renderList)($data.lists, (list, key) => {
                return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
                  "view",
                  {
                    key,
                    class: (0, import_vue3.normalizeClass)(["uni-indexed-list__menu-item", $data.touchmoveIndex == key ? "uni-indexed-list__menu--active" : ""])
                  },
                  [
                    (0, import_vue3.createElementVNode)(
                      "u-text",
                      {
                        class: (0, import_vue3.normalizeClass)(["uni-indexed-list__menu-text", $data.touchmoveIndex == key ? "uni-indexed-list__menu-text--active" : ""])
                      },
                      (0, import_vue3.toDisplayString)(list.key),
                      3
                      /* TEXT, CLASS */
                    )
                  ],
                  2
                  /* CLASS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          32
          /* NEED_HYDRATION */
        ),
        $data.touchmove ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
          key: 0,
          class: "uni-indexed-list__alert-wrapper"
        }, [
          (0, import_vue3.createElementVNode)(
            "u-text",
            { class: "uni-indexed-list__alert" },
            (0, import_vue3.toDisplayString)($data.lists[$data.touchmoveIndex].key),
            1
            /* TEXT */
          )
        ])) : (0, import_vue3.createCommentVNode)("v-if", true)
      ],
      512
      /* NEED_PATCH */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_02]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list.vue"]]);
  var airport = {
    "list": [{
      "letter": "A",
      "data": [
        "\u963F\u514B\u82CF\u673A\u573A",
        "\u963F\u62C9\u5C71\u53E3\u673A\u573A",
        "\u963F\u52D2\u6CF0\u673A\u573A",
        "\u963F\u91CC\u6606\u838E\u673A\u573A",
        "\u5B89\u5E86\u5929\u67F1\u5C71\u673A\u573A",
        "\u6FB3\u95E8\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "B",
      "data": [
        "\u4FDD\u5C71\u673A\u573A",
        "\u5305\u5934\u673A\u573A",
        "\u5317\u6D77\u798F\u6210\u673A\u573A",
        "\u5317\u4EAC\u5357\u82D1\u673A\u573A",
        "\u5317\u4EAC\u9996\u90FD\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "C",
      "data": [
        "\u957F\u767D\u5C71\u673A\u573A",
        "\u957F\u6625\u9F99\u5609\u56FD\u9645\u673A\u573A",
        "\u5E38\u5FB7\u6843\u82B1\u6E90\u673A\u573A",
        "\u660C\u90FD\u90A6\u8FBE\u673A\u573A",
        "\u957F\u6C99\u9EC4\u82B1\u56FD\u9645\u673A\u573A",
        "\u957F\u6CBB\u738B\u6751\u673A\u573A",
        "\u5E38\u5DDE\u5954\u725B\u673A\u573A",
        "\u6210\u90FD\u53CC\u6D41\u56FD\u9645\u673A\u573A",
        "\u8D64\u5CF0\u673A\u573A"
      ]
    }, {
      "letter": "D",
      "data": [
        "\u5927\u7406\u673A\u573A",
        "\u5927\u8FDE\u5468\u6C34\u5B50\u56FD\u9645\u673A\u573A",
        "\u5927\u5E86\u8428\u5C14\u56FE\u673A\u573A",
        "\u5927\u540C\u4E1C\u738B\u5E84\u673A\u573A",
        "\u8FBE\u5DDE\u6CB3\u5E02\u673A\u573A",
        "\u4E39\u4E1C\u6D6A\u5934\u673A\u573A",
        "\u5FB7\u5B8F\u8292\u5E02\u673A\u573A",
        "\u8FEA\u5E86\u9999\u683C\u91CC\u62C9\u673A\u573A",
        "\u4E1C\u8425\u673A\u573A",
        "\u6566\u714C\u673A\u573A"
      ]
    }, {
      "letter": "E",
      "data": [
        "\u9102\u5C14\u591A\u65AF\u673A\u573A",
        "\u6069\u65BD\u8BB8\u5BB6\u576A\u673A\u573A",
        "\u4E8C\u8FDE\u6D69\u7279\u8D5B\u4E4C\u82CF\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "F",
      "data": [
        "\u961C\u9633\u897F\u5173\u673A\u573A",
        "\u798F\u5DDE\u957F\u4E50\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "G",
      "data": [
        "\u8D63\u5DDE\u9EC4\u91D1\u673A\u573A",
        "\u683C\u5C14\u6728\u673A\u573A",
        "\u56FA\u539F\u516D\u76D8\u5C71\u673A\u573A",
        "\u5E7F\u5143\u76D8\u9F99\u673A\u573A",
        "\u5E7F\u5DDE\u767D\u4E91\u56FD\u9645\u673A\u573A",
        "\u6842\u6797\u4E24\u6C5F\u56FD\u9645\u673A\u573A",
        "\u8D35\u9633\u9F99\u6D1E\u5821\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "H",
      "data": [
        "\u54C8\u5C14\u6EE8\u592A\u5E73\u56FD\u9645\u673A\u573A",
        "\u54C8\u5BC6\u673A\u573A",
        "\u6D77\u53E3\u7F8E\u5170\u56FD\u9645\u673A\u573A",
        "\u6D77\u62C9\u5C14\u4E1C\u5C71\u56FD\u9645\u673A\u573A",
        "\u90AF\u90F8\u673A\u573A",
        "\u6C49\u4E2D\u673A\u573A",
        "\u676D\u5DDE\u8427\u5C71\u56FD\u9645\u673A\u573A",
        "\u5408\u80A5\u9A86\u5C97\u56FD\u9645\u673A\u573A",
        "\u548C\u7530\u673A\u573A",
        "\u9ED1\u6CB3\u673A\u573A",
        "\u547C\u548C\u6D69\u7279\u767D\u5854\u56FD\u9645\u673A\u573A",
        "\u6DEE\u5B89\u6D9F\u6C34\u673A\u573A",
        "\u9EC4\u5C71\u5C6F\u6EAA\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "I",
      "data": []
    }, {
      "letter": "J",
      "data": [
        "\u6D4E\u5357\u9065\u5899\u56FD\u9645\u673A\u573A",
        "\u6D4E\u5B81\u66F2\u961C\u673A\u573A",
        "\u9E21\u897F\u5174\u51EF\u6E56\u673A\u573A",
        "\u4F73\u6728\u65AF\u4E1C\u90CA\u673A\u573A",
        "\u5609\u5CEA\u5173\u673A\u573A",
        "\u9526\u5DDE\u5C0F\u5CAD\u5B50\u673A\u573A",
        "\u666F\u5FB7\u9547\u673A\u573A",
        "\u4E95\u5188\u5C71\u673A\u573A",
        "\u4E5D\u6C5F\u5E90\u5C71\u673A\u573A",
        "\u4E5D\u5BE8\u9EC4\u9F99\u673A\u573A"
      ]
    }, {
      "letter": "K",
      "data": [
        "\u5580\u4EC0\u673A\u573A",
        "\u514B\u62C9\u739B\u4F9D\u673A\u573A",
        "\u5E93\u8F66\u9F9F\u5179\u673A\u573A",
        "\u5E93\u5C14\u52D2\u673A\u573A",
        "\u6606\u660E\u5DEB\u5BB6\u575D\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "L",
      "data": [
        "\u62C9\u8428\u8D21\u560E\u673A\u573A",
        "\u5170\u5DDE\u4E2D\u5DDD\u673A\u573A",
        "\u4E3D\u6C5F\u4E09\u4E49\u673A\u573A",
        "\u9ECE\u5E73\u673A\u573A",
        "\u8FDE\u4E91\u6E2F\u767D\u5854\u57E0\u673A\u573A",
        "\u4E34\u6CA7\u673A\u573A",
        "\u4E34\u6C82\u673A\u573A",
        "\u6797\u829D\u7C73\u6797\u673A\u573A",
        "\u67F3\u5DDE\u767D\u83B2\u673A\u573A",
        "\u9F99\u5CA9\u51A0\u8C78\u5C71\u673A\u573A",
        "\u6CF8\u5DDE\u84DD\u7530\u673A\u573A",
        "\u6D1B\u9633\u5317\u90CA\u673A\u573A"
      ]
    }, {
      "letter": "M",
      "data": [
        "\u6EE1\u6D32\u91CC\u897F\u90CA\u673A\u573A",
        "\u7EF5\u9633\u5357\u90CA\u673A\u573A",
        "\u6F20\u6CB3\u53E4\u83B2\u673A\u573A",
        "\u7261\u4E39\u6C5F\u6D77\u6D6A\u673A\u573A"
      ]
    }, {
      "letter": "N",
      "data": [
        "\u5357\u660C\u660C\u5317\u56FD\u9645\u673A\u573A",
        "\u5357\u5145\u9AD8\u576A\u673A\u573A",
        "\u5357\u4EAC\u7984\u53E3\u56FD\u9645\u673A\u573A",
        "\u5357\u5B81\u5434\u5729\u673A\u573A",
        "\u5357\u901A\u5174\u4E1C\u673A\u573A",
        "\u5357\u9633\u59DC\u8425\u673A\u573A",
        "\u5B81\u6CE2\u680E\u793E\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "O",
      "data": []
    }, {
      "letter": "P",
      "data": [
        "\u666E\u6D31\u601D\u8305\u673A\u573A"
      ]
    }, {
      "letter": "Q",
      "data": [
        "\u9F50\u9F50\u54C8\u5C14\u4E09\u5BB6\u5B50\u673A\u573A",
        "\u79E6\u7687\u5C9B\u5C71\u6D77\u5173\u673A\u573A",
        "\u9752\u5C9B\u6D41\u4EAD\u56FD\u9645\u673A\u573A",
        "\u8862\u5DDE\u673A\u573A",
        "\u6CC9\u5DDE\u664B\u6C5F\u673A\u573A"
      ]
    }, {
      "letter": "R",
      "data": [
        "\u65E5\u5580\u5219\u548C\u5E73\u673A\u573A"
      ]
    }, {
      "letter": "S",
      "data": [
        "\u4E09\u4E9A\u51E4\u51F0\u56FD\u9645\u673A\u573A",
        "\u6C55\u5934\u5916\u7802\u673A\u573A",
        "\u4E0A\u6D77\u8679\u6865\u56FD\u9645\u673A\u573A",
        "\u4E0A\u6D77\u6D66\u4E1C\u56FD\u9645\u673A\u573A",
        "\u6DF1\u5733\u5B9D\u5B89\u56FD\u9645\u673A\u573A",
        "\u6C88\u9633\u6843\u4ED9\u56FD\u9645\u673A\u573A",
        "\u77F3\u5BB6\u5E84\u6B63\u5B9A\u56FD\u9645\u673A\u573A",
        "\u82CF\u5357\u7855\u653E\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "T",
      "data": [
        "\u5854\u57CE\u673A\u573A",
        "\u592A\u539F\u6B66\u5BBF\u56FD\u9645\u673A\u573A",
        "\u53F0\u5DDE\u8DEF\u6865\u673A\u573A (\u9EC4\u5CA9\u673A\u573A)",
        "\u5510\u5C71\u4E09\u5973\u6CB3\u673A\u573A",
        "\u817E\u51B2\u9A7C\u5CF0\u673A\u573A",
        "\u5929\u6D25\u6EE8\u6D77\u56FD\u9645\u673A\u573A",
        "\u901A\u8FBD\u673A\u573A",
        "\u94DC\u4EC1\u51E4\u51F0\u673A\u573A"
      ]
    }, {
      "letter": "U",
      "data": []
    }, {
      "letter": "V",
      "data": []
    }, {
      "letter": "W",
      "data": [
        "\u4E07\u5DDE\u4E94\u6865\u673A\u573A",
        "\u6F4D\u574A\u673A\u573A",
        "\u5A01\u6D77\u5927\u6C34\u6CCA\u673A\u573A",
        "\u6587\u5C71\u666E\u8005\u9ED1\u673A\u573A",
        "\u6E29\u5DDE\u6C38\u5F3A\u56FD\u9645\u673A\u573A",
        "\u4E4C\u6D77\u673A\u573A",
        "\u6B66\u6C49\u5929\u6CB3\u56FD\u9645\u673A\u573A",
        "\u4E4C\u5170\u6D69\u7279\u673A\u573A",
        "\u4E4C\u9C81\u6728\u9F50\u5730\u7A9D\u5821\u56FD\u9645\u673A\u573A",
        "\u6B66\u5937\u5C71\u673A\u573A",
        "\u68A7\u5DDE\u957F\u6D32\u5C9B\u673A\u573A"
      ]
    }, {
      "letter": "X",
      "data": [
        "\u897F\u5B89\u54B8\u9633\u56FD\u9645\u673A\u573A",
        "\u897F\u660C\u9752\u5C71\u673A\u573A",
        "\u9521\u6797\u6D69\u7279\u673A\u573A",
        "\u897F\u5B81\u66F9\u5BB6\u5821\u673A\u573A",
        "\u897F\u53CC\u7248\u7EB3\u560E\u6D12\u673A\u573A",
        "\u53A6\u95E8\u9AD8\u5D0E\u56FD\u9645\u673A\u573A",
        "\u9999\u6E2F\u56FD\u9645\u673A\u573A",
        "\u8944\u9633\u5218\u96C6\u673A\u573A",
        "\u5174\u4E49\u673A\u573A",
        "\u5F90\u5DDE\u89C2\u97F3\u673A\u573A"
      ]
    }, {
      "letter": "Y",
      "data": [
        "\u5EF6\u5B89\u4E8C\u5341\u91CC\u5821\u673A\u573A",
        "\u76D0\u57CE\u673A\u573A",
        "\u5EF6\u5409\u671D\u9633\u5DDD\u673A\u573A",
        "\u70DF\u53F0\u83B1\u5C71\u56FD\u9645\u673A\u573A",
        "\u5B9C\u5BBE\u83DC\u575D\u673A\u573A",
        "\u5B9C\u660C\u4E09\u5CE1\u673A\u573A",
        "\u4F0A\u6625\u6797\u90FD\u673A\u573A",
        "\u4F0A\u5B81\u673A\u573A",
        "\u4E49\u4E4C\u673A\u573A",
        "\u94F6\u5DDD\u6CB3\u4E1C\u673A\u573A",
        "\u6C38\u5DDE\u96F6\u9675\u673A\u573A",
        "\u6986\u6797\u6986\u9633\u673A\u573A",
        "\u7389\u6811\u5DF4\u5858\u673A\u573A",
        "\u8FD0\u57CE\u5F20\u5B5D\u673A\u573A"
      ]
    }, {
      "letter": "Z",
      "data": [
        "\u6E5B\u6C5F\u673A\u573A",
        "\u662D\u901A\u673A\u573A",
        "\u90D1\u5DDE\u65B0\u90D1\u56FD\u9645\u673A\u573A",
        "\u82B7\u6C5F\u673A\u573A",
        "\u91CD\u5E86\u6C5F\u5317\u56FD\u9645\u673A\u573A",
        "\u4E2D\u536B\u9999\u5C71\u673A\u573A",
        "\u821F\u5C71\u6731\u5BB6\u5C16\u673A\u573A",
        "\u73E0\u6D77\u4E09\u7076\u673A\u573A"
      ]
    }]
  };
  var _sfc_main2 = {
    components: {},
    data() {
      return {
        list: airport.list
      };
    },
    methods: {
      bindClick(e) {
        formatAppLog("log", "at pages/extUI/indexed-list/indexed-list.nvue:16", "\u70B9\u51FBitem\uFF0C\u8FD4\u56DE\u6570\u636E" + JSON.stringify(e));
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_indexed_list = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-indexed-list"), __easycom_0);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createVNode)(_component_uni_indexed_list, {
        options: $data.list,
        "show-select": true,
        onClick: $options.bindClick
      }, null, 8, ["options", "onClick"])
    ]);
  }
  var indexedList = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["__file", "D:/CodeRepos/AI-assisted-chat/pages/extUI/indexed-list/indexed-list.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/indexed-list/indexed-list";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    indexedList.mpType = "page";
    const app = Vue.createPageApp(indexedList, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...indexedList.styles || []]));
    app.mount("#root");
  }
})();
