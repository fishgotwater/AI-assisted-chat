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

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/pages/extUI/nav-bar/nav-bar.js
  var import_vue5 = __toESM(require_vue());

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-card.js
  var import_vue3 = __toESM(require_vue());
  var _style_02 = { "uni-card": { "": { "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "borderRadius": 4, "overflow": "hidden", "fontFamily": "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif", "backgroundColor": "#ffffff", "flex": 1 } }, "uni-card__cover": { ".uni-card ": { "position": "relative", "marginTop": 10, "flexDirection": "row", "overflow": "hidden", "borderRadius": 4 } }, "uni-card__cover-image": { ".uni-card .uni-card__cover ": { "flex": 1 } }, "uni-card__header": { ".uni-card ": { "display": "flex", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#EBEEF5", "flexDirection": "row", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "overflow": "hidden" } }, "uni-card__header-box": { ".uni-card .uni-card__header ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": 40, "height": 40, "overflow": "hidden", "borderRadius": 5, "marginRight": 10 } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "flex": 1, "width": 40, "height": 40 } }, "uni-card__header-content": { ".uni-card .uni-card__header ": { "flexDirection": "column", "justifyContent": "center", "flex": 1, "overflow": "hidden" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 15, "color": "#3a3a3a" } }, "uni-card__header-content-subtitle": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 12, "marginTop": 5, "color": "#909399" } }, "uni-card__header-extra": { ".uni-card .uni-card__header ": { "lineHeight": 12 } }, "uni-card__header-extra-text": { ".uni-card .uni-card__header .uni-card__header-extra ": { "fontSize": 12, "color": "#909399" } }, "uni-card__content": { ".uni-card ": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "fontSize": 14, "color": "#6a6a6a", "lineHeight": 22 } }, "uni-card__actions": { ".uni-card ": { "fontSize": 12 } }, "uni-card--border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5" } }, "uni-card--shadow": { "": { "position": "relative" } }, "uni-card--full": { "": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "borderLeftWidth": 0, "borderRadius": 0 } }, "uni-ellipsis": { "": { "lines": 1 } } };
  var _sfc_main2 = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: (0, import_vue3.normalizeClass)(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: (0, import_vue3.normalizeStyle)({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" }),
        renderWhole: true
      },
      [
        (0, import_vue3.renderSlot)(_ctx.$slots, "cover", {}, () => [
          $props.cover ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            (0, import_vue3.createElementVNode)("u-image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : (0, import_vue3.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue3.renderSlot)(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            (0, import_vue3.createElementVNode)("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                (0, import_vue3.createElementVNode)("u-image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : (0, import_vue3.createCommentVNode)("v-if", true),
              (0, import_vue3.createElementVNode)("view", { class: "uni-card__header-content" }, [
                (0, import_vue3.createElementVNode)(
                  "u-text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  (0, import_vue3.toDisplayString)($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
                  "u-text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  (0, import_vue3.toDisplayString)($props.subTitle),
                  1
                  /* TEXT */
                )) : (0, import_vue3.createCommentVNode)("v-if", true)
              ])
            ]),
            (0, import_vue3.createElementVNode)("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              (0, import_vue3.createElementVNode)(
                "u-text",
                { class: "uni-card__header-extra-text" },
                (0, import_vue3.toDisplayString)($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : (0, import_vue3.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue3.createElementVNode)(
          "view",
          {
            class: "uni-card__content",
            style: (0, import_vue3.normalizeStyle)({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            (0, import_vue3.renderSlot)(_ctx.$slots, "default")
          ],
          4
          /* STYLE */
        ),
        (0, import_vue3.createElementVNode)("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          (0, import_vue3.renderSlot)(_ctx.$slots, "actions")
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-section.js
  var import_vue4 = __toESM(require_vue());
  var _style_03 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
  var _sfc_main3 = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
      class: "uni-section",
      renderWhole: true
    }, [
      (0, import_vue4.createElementVNode)("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue4.normalizeClass)(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : (0, import_vue4.renderSlot)(_ctx.$slots, "decoration", { key: 1 }),
        (0, import_vue4.createElementVNode)("view", { class: "uni-section-header__content" }, [
          (0, import_vue4.createElementVNode)(
            "u-text",
            {
              style: (0, import_vue4.normalizeStyle)({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: (0, import_vue4.normalizeClass)(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            (0, import_vue4.toDisplayString)($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
            "u-text",
            {
              key: 0,
              style: (0, import_vue4.normalizeStyle)({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            (0, import_vue4.toDisplayString)($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : (0, import_vue4.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "uni-section-header__slot-right" }, [
          (0, import_vue4.renderSlot)(_ctx.$slots, "right")
        ])
      ]),
      (0, import_vue4.createElementVNode)(
        "view",
        {
          class: "uni-section-content",
          style: (0, import_vue4.normalizeStyle)({ padding: $options._padding })
        },
        [
          (0, import_vue4.renderSlot)(_ctx.$slots, "default")
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/pages/extUI/nav-bar/nav-bar.js
  var _style_0$2 = { "uni-status-bar": { "": { "height": 20 } } };
  var _sfc_main$2 = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
      };
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      "view",
      {
        style: (0, import_vue5.normalizeStyle)({ height: $data.statusBarHeight }),
        class: "uni-status-bar",
        renderWhole: true
      },
      [
        (0, import_vue5.renderSlot)(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    );
  }
  var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  var _style_0$1 = { "uni-nvue-fixed": { "": { "position": "sticky" } }, "uni-nav-bar-text": { "": { "fontSize": "34rpx" } }, "uni-nav-bar-right-text": { "": { "fontSize": 12 } }, "uni-navbar__content": { "": { "position": "relative", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-navbar-btn-text": { "": { "flexDirection": "column", "justifyContent": "flex-start", "alignItems": "center", "lineHeight": 12 } }, "uni-navbar__header": { "": { "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "flexDirection": "row", "height": 44, "fontSize": 12 } }, "uni-navbar__header-btns": { "": { "flexWrap": "nowrap", "flexDirection": "row", "width": "120rpx", "justifyContent": "center", "alignItems": "center" } }, "uni-navbar__header-btns-left": { "": { "width": "120rpx", "justifyContent": "flex-start", "alignItems": "center" } }, "uni-navbar__header-btns-right": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-navbar__header-container": { "": { "flex": 1, "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "overflow": "hidden" } }, "uni-navbar__header-container-inner": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "fontSize": 12, "overflow": "hidden" } }, "uni-navbar__placeholder-view": { "": { "height": 44 } }, "uni-navbar--fixed": { "": { "position": "fixed", "zIndex": 99, "left": 0, "right": 0 } }, "uni-navbar--shadow": { "": { "boxShadow": "0 1px 6px #ccc" } }, "uni-navbar--border": { "": { "borderBottomWidth": "1rpx", "borderBottomStyle": "solid", "borderBottomColor": "#eeeeee" } }, "uni-ellipsis-1": { "": { "overflow": "hidden", "lines": 1, "textOverflow": "ellipsis" } } };
  var getVal2 = (val) => typeof val === "number" ? val + "px" : val;
  var _sfc_main$1 = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal2(this.height);
      },
      leftIconWidth() {
        return getVal2(this.leftWidth);
      },
      rightIconWidth() {
        return getVal2(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = (0, import_vue5.resolveComponent)("status-bar");
    const _component_uni_icons = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-icons"), __easycom_1);
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      "view",
      {
        class: (0, import_vue5.normalizeClass)(["uni-navbar", { "uni-dark": $props.dark, "uni-nvue-fixed": $props.fixed }]),
        renderWhole: true
      },
      [
        (0, import_vue5.createElementVNode)(
          "view",
          {
            class: (0, import_vue5.normalizeClass)(["uni-navbar__content", { "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }]),
            style: (0, import_vue5.normalizeStyle)({ "background-color": $options.themeBgColor, "border-bottom-color": $options.themeColor })
          },
          [
            $props.statusBar ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_status_bar, { key: 0 })) : (0, import_vue5.createCommentVNode)("v-if", true),
            (0, import_vue5.createElementVNode)(
              "view",
              {
                style: (0, import_vue5.normalizeStyle)({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
                class: "uni-navbar__header"
              },
              [
                (0, import_vue5.createElementVNode)(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-left",
                    style: (0, import_vue5.normalizeStyle)({ width: $options.leftIconWidth })
                  },
                  [
                    (0, import_vue5.renderSlot)(_ctx.$slots, "left", {}, () => [
                      $props.leftIcon.length > 0 ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
                        key: 0,
                        class: "uni-navbar__content_view"
                      }, [
                        (0, import_vue5.createVNode)(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.leftIcon,
                          size: "20"
                        }, null, 8, ["color", "type"])
                      ])) : (0, import_vue5.createCommentVNode)("v-if", true),
                      $props.leftText.length ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                        "view",
                        {
                          key: 1,
                          class: (0, import_vue5.normalizeClass)([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
                        },
                        [
                          (0, import_vue5.createElementVNode)(
                            "u-text",
                            {
                              style: (0, import_vue5.normalizeStyle)({ color: $options.themeColor, fontSize: "12px" })
                            },
                            (0, import_vue5.toDisplayString)($props.leftText),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        2
                        /* CLASS */
                      )) : (0, import_vue5.createCommentVNode)("v-if", true)
                    ])
                  ],
                  4
                  /* STYLE */
                ),
                (0, import_vue5.createElementVNode)("view", {
                  class: "uni-navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  (0, import_vue5.renderSlot)(_ctx.$slots, "default", {}, () => [
                    $props.title.length > 0 ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
                      key: 0,
                      class: "uni-navbar__header-container-inner"
                    }, [
                      (0, import_vue5.createElementVNode)(
                        "u-text",
                        {
                          class: "uni-nav-bar-text uni-ellipsis-1",
                          style: (0, import_vue5.normalizeStyle)({ color: $options.themeColor })
                        },
                        (0, import_vue5.toDisplayString)($props.title),
                        5
                        /* TEXT, STYLE */
                      )
                    ])) : (0, import_vue5.createCommentVNode)("v-if", true)
                  ])
                ]),
                (0, import_vue5.createElementVNode)(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-right",
                    style: (0, import_vue5.normalizeStyle)({ width: $options.rightIconWidth })
                  },
                  [
                    (0, import_vue5.renderSlot)(_ctx.$slots, "right", {}, () => [
                      $props.rightIcon.length ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", { key: 0 }, [
                        (0, import_vue5.createVNode)(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.rightIcon,
                          size: "22"
                        }, null, 8, ["color", "type"])
                      ])) : (0, import_vue5.createCommentVNode)("v-if", true),
                      $props.rightText.length && !$props.rightIcon.length ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
                        key: 1,
                        class: "uni-navbar-btn-text"
                      }, [
                        (0, import_vue5.createElementVNode)(
                          "u-text",
                          {
                            class: "uni-nav-bar-right-text",
                            style: (0, import_vue5.normalizeStyle)({ color: $options.themeColor })
                          },
                          (0, import_vue5.toDisplayString)($props.rightText),
                          5
                          /* TEXT, STYLE */
                        )
                      ])) : (0, import_vue5.createCommentVNode)("v-if", true)
                    ])
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      2
      /* CLASS */
    );
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  var _style_04 = { "box-bg": { "": { "backgroundColor": "#F5F5F5", "paddingTop": 5, "paddingRight": 0, "paddingBottom": 5, "paddingLeft": 0 } }, "city": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "flex-start", "marginLeft": 4 } }, "input-view": { "": { "flexDirection": "row", "flex": 1, "backgroundColor": "#f8f8f8", "height": 30, "borderRadius": 15, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15, "flexWrap": "nowrap", "marginTop": 7, "marginRight": 0, "marginBottom": 7, "marginLeft": 0, "lineHeight": 30 } }, "input-uni-icon": { "": { "lineHeight": 30 } }, "nav-bar-input": { "": { "height": 30, "lineHeight": 30, "width": "370rpx", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "fontSize": 12, "backgroundColor": "#f8f8f8" } } };
  var _sfc_main4 = {
    components: {},
    data() {
      return {
        city: "\u5317\u4EAC"
      };
    },
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        });
      },
      showMenu() {
        uni.showToast({
          title: "\u83DC\u5355"
        });
      },
      clickLeft() {
        uni.showToast({
          title: "\u5DE6\u4FA7\u6309\u94AE"
        });
      },
      search() {
        uni.showToast({
          title: "\u641C\u7D22"
        });
      },
      showCity() {
        uni.showToast({
          title: "\u9009\u62E9\u57CE\u5E02"
        });
      },
      scan() {
        uni.showToast({
          title: "\u626B\u7801"
        });
      },
      confirm() {
        uni.showToast({
          title: "\u641C\u7D22"
        });
      }
    },
    onPullDownRefresh() {
      formatAppLog("log", "at pages/extUI/nav-bar/nav-bar.nvue:128", "onPullDownRefresh");
      setTimeout(function() {
        uni.stopPullDownRefresh();
        formatAppLog("log", "at pages/extUI/nav-bar/nav-bar.nvue:131", "stopPullDownRefresh");
      }, 1e3);
    }
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-nav-bar"), __easycom_02);
    const _component_uni_card = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-card"), __easycom_0);
    const _component_uni_section = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-section"), __easycom_2);
    const _component_uni_icons = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-icons"), __easycom_1);
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue5.createElementVNode)("view", { class: "container" }, [
        (0, import_vue5.createVNode)(_component_uni_nav_bar, {
          dark: "",
          fixed: true,
          shadow: "",
          "background-color": "#007AFF",
          "status-bar": "",
          "left-icon": "left",
          "left-text": "\u8FD4\u56DE",
          title: "\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F",
          onClickLeft: $options.back
        }, null, 8, ["onClickLeft"]),
        (0, import_vue5.createVNode)(_component_uni_card, {
          "is-full": "",
          isShadow: false
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("u-text", { class: "uni-h6" }, "\u672C\u5BFC\u822A\u680F\u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u975E\u539F\u751F\u5BFC\u822A\u680F\u3002\u9664\u975E\u539F\u751F\u5BFC\u822A\u680F\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u5426\u5219\u4E0D\u63A8\u8350\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u7EC4\u4EF6\u3002\u5177\u4F53\u53C2\u8003https://ask.dcloud.net.cn/article/34921")
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u57FA\u672C\u7528\u6CD5",
          subTitle: "\u4F7F\u7528 title \u5C5E\u6027\u8BBE\u7F6E\u5BFC\u822A\u680F\u6807\u9898",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, { title: "\u6807\u9898" })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u5F00\u542F\u9634\u5F71",
          subTitle: "\u4F7F\u7528 shadow \u5C5E\u6027\u542F\u7528\u9634\u5F71",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                shadow: "",
                "left-icon": "left",
                title: "\u5F00\u542F\u9634\u5F71",
                onClickLeft: $options.back
              }, null, 8, ["onClickLeft"])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u5F00\u542F\u6697\u9ED1\u6A21\u5F0F",
          subTitle: "\u4F7F\u7528 dark \u5C5E\u6027\u8BBE\u7F6E\u6697\u9ED1\u6A21\u5F0F",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                shadow: "",
                "left-icon": "left",
                dark: "",
                title: "\u6697\u9ED1\u6A21\u5F0F",
                onClickLeft: $options.back
              }, null, 8, ["onClickLeft"])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u5E26\u8FD4\u56DE\u7BAD\u5934+\u53F3\u4FA7\u56FE\u6807",
          subTitle: "\u4F7F\u7528 left-icon/right-icon \u8BBE\u7F6E\u5DE6\u53F3\u56FE\u6807",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                shadow: "",
                "left-icon": "left",
                "right-icon": "cart",
                title: "\u6807\u9898"
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u5DE6\u4FA7\u6587\u5B57+\u53F3\u4FA7\u6587\u5B57",
          subTitle: "\u4F7F\u7528 left-text/right-text \u8BBE\u7F6E\u5DE6\u53F3\u6587\u5B57",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                shadow: "",
                "left-icon": "left",
                leftText: "\u8FD4\u56DE",
                rightText: "\u8BBE\u7F6E",
                title: "\u6807\u9898"
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u81EA\u5B9A\u4E49\u989C\u8272",
          subTitle: "\u4F7F\u7528 color/background-color \u5C5E\u6027\u8BBE\u7F6E\u524D\u666F\u80CC\u666F\u8272",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
                (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                  dark: "",
                  color: "#999",
                  backgroundColor: "#f5f5f5",
                  shadow: "",
                  "left-icon": "left",
                  leftText: "\u8FD4\u56DE",
                  rightText: "\u8BBE\u7F6E",
                  title: "\u81EA\u5B9A\u4E49\u989C\u8272"
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u81EA\u5B9A\u4E49\u9AD8\u5EA6",
          subTitle: "\u4F7F\u7528 height \u4FEE\u6539\u7EC4\u4EF6\u9AD8\u5EA6",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
                (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                  height: "65px",
                  dark: "",
                  shadow: "",
                  "left-icon": "left",
                  leftText: "\u8FD4\u56DE",
                  rightText: "\u8BBE\u7F6E",
                  title: "\u81EA\u5B9A\u4E49\u9AD8\u5EA6"
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u81EA\u5B9A\u4E49\u5185\u5BB9",
          subTitle: "\u4F7F\u7528 left/right/default \u63D2\u69FD\u81EA\u5B9A\u4E49\u5185\u5BB9",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, null, {
                left: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createElementVNode)("view", { class: "city" }, [
                    (0, import_vue5.createElementVNode)("view", null, [
                      (0, import_vue5.createElementVNode)(
                        "u-text",
                        { class: "uni-nav-bar-text" },
                        (0, import_vue5.toDisplayString)($data.city),
                        1
                        /* TEXT */
                      )
                    ]),
                    (0, import_vue5.createVNode)(_component_uni_icons, {
                      type: "arrowdown",
                      color: "#666",
                      size: "18"
                    })
                  ])
                ]),
                right: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createElementVNode)("view", { class: "city" }, [
                    (0, import_vue5.createElementVNode)("u-text", null, " \u641C\u7D22 ")
                  ])
                ]),
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createElementVNode)("view", { class: "input-view" }, [
                    (0, import_vue5.createVNode)(_component_uni_icons, {
                      class: "input-uni-icon",
                      type: "search",
                      size: "18",
                      color: "#999"
                    }),
                    (0, import_vue5.createElementVNode)(
                      "u-input",
                      {
                        confirmType: "search",
                        class: "nav-bar-input",
                        type: "text",
                        placeholder: "\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",
                        onConfirm: _cache[0] || (_cache[0] = (...args) => $options.confirm && $options.confirm(...args))
                      },
                      null,
                      32
                      /* NEED_HYDRATION */
                    )
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  var navBar = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "D:/CodeRepos/AI-assisted-chat/pages/extUI/nav-bar/nav-bar.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/nav-bar/nav-bar";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    navBar.mpType = "page";
    const app = Vue.createPageApp(navBar, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...navBar.styles || []]));
    app.mount("#root");
  }
})();
