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

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-card.js
  var import_vue2 = __toESM(require_vue());

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-card.js
  var _style_0 = { "uni-card": { "": { "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "borderRadius": 4, "overflow": "hidden", "fontFamily": "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif", "backgroundColor": "#ffffff", "flex": 1 } }, "uni-card__cover": { ".uni-card ": { "position": "relative", "marginTop": 10, "flexDirection": "row", "overflow": "hidden", "borderRadius": 4 } }, "uni-card__cover-image": { ".uni-card .uni-card__cover ": { "flex": 1 } }, "uni-card__header": { ".uni-card ": { "display": "flex", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#EBEEF5", "flexDirection": "row", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "overflow": "hidden" } }, "uni-card__header-box": { ".uni-card .uni-card__header ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": 40, "height": 40, "overflow": "hidden", "borderRadius": 5, "marginRight": 10 } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "flex": 1, "width": 40, "height": 40 } }, "uni-card__header-content": { ".uni-card .uni-card__header ": { "flexDirection": "column", "justifyContent": "center", "flex": 1, "overflow": "hidden" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 15, "color": "#3a3a3a" } }, "uni-card__header-content-subtitle": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 12, "marginTop": 5, "color": "#909399" } }, "uni-card__header-extra": { ".uni-card .uni-card__header ": { "lineHeight": 12 } }, "uni-card__header-extra-text": { ".uni-card .uni-card__header .uni-card__header-extra ": { "fontSize": 12, "color": "#909399" } }, "uni-card__content": { ".uni-card ": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "fontSize": 14, "color": "#6a6a6a", "lineHeight": 22 } }, "uni-card__actions": { ".uni-card ": { "fontSize": 12 } }, "uni-card--border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5" } }, "uni-card--shadow": { "": { "position": "relative" } }, "uni-card--full": { "": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "borderLeftWidth": 0, "borderRadius": 0 } }, "uni-ellipsis": { "": { "lines": 1 } } };
  var _sfc_main = {
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: (0, import_vue2.normalizeStyle)({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" }),
        renderWhole: true
      },
      [
        (0, import_vue2.renderSlot)(_ctx.$slots, "cover", {}, () => [
          $props.cover ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            (0, import_vue2.createElementVNode)("u-image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : (0, import_vue2.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue2.renderSlot)(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            (0, import_vue2.createElementVNode)("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                (0, import_vue2.createElementVNode)("u-image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : (0, import_vue2.createCommentVNode)("v-if", true),
              (0, import_vue2.createElementVNode)("view", { class: "uni-card__header-content" }, [
                (0, import_vue2.createElementVNode)(
                  "u-text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  (0, import_vue2.toDisplayString)($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                  "u-text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  (0, import_vue2.toDisplayString)($props.subTitle),
                  1
                  /* TEXT */
                )) : (0, import_vue2.createCommentVNode)("v-if", true)
              ])
            ]),
            (0, import_vue2.createElementVNode)("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              (0, import_vue2.createElementVNode)(
                "u-text",
                { class: "uni-card__header-extra-text" },
                (0, import_vue2.toDisplayString)($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : (0, import_vue2.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue2.createElementVNode)(
          "view",
          {
            class: "uni-card__content",
            style: (0, import_vue2.normalizeStyle)({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            (0, import_vue2.renderSlot)(_ctx.$slots, "default")
          ],
          4
          /* STYLE */
        ),
        (0, import_vue2.createElementVNode)("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          (0, import_vue2.renderSlot)(_ctx.$slots, "actions")
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/pages/extUI/list/list.js
  var import_vue7 = __toESM(require_vue());

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-icons.js
  var import_vue3 = __toESM(require_vue());
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
  var _style_02 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main2 = {
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
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue3.normalizeStyle)($options.styleObj),
        class: "uni-icons",
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      (0, import_vue3.toDisplayString)($options.unicode),
      5
      /* TEXT, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-list.js
  var import_vue5 = __toESM(require_vue());

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-badge.js
  var import_vue4 = __toESM(require_vue());
  var _style_03 = { "uni-badge--x": { "": { "position": "relative" } }, "uni-badge--absolute": { "": { "position": "absolute" } }, "uni-badge--small": { "": { "transform": "scale(0.8)", "transformOrigin": "center center" } }, "uni-badge": { "": { "justifyContent": "center", "flexDirection": "row", "height": 20, "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4, "lineHeight": 18, "color": "#ffffff", "borderRadius": 100, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#ffffff", "textAlign": "center", "fontFamily": '"Helvetica Neue", Helvetica, sans-serif', "fontSize": 12 } }, "uni-badge--info": { "": { "color": "#ffffff", "backgroundColor": "#909399" } }, "uni-badge--primary": { "": { "backgroundColor": "#2979ff" } }, "uni-badge--success": { "": { "backgroundColor": "#4cd964" } }, "uni-badge--warning": { "": { "backgroundColor": "#f0ad4e" } }, "uni-badge--error": { "": { "backgroundColor": "#dd524d" } }, "uni-badge--inverted": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 0, "color": "#909399" } }, "uni-badge--info-inverted": { "": { "color": "#909399", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--primary-inverted": { "": { "color": "#2979ff", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--success-inverted": { "": { "color": "#4cd964", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--warning-inverted": { "": { "color": "#f0ad4e", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--error-inverted": { "": { "color": "#dd524d", "backgroundColor": "rgba(0,0,0,0)" } } };
  var _sfc_main3 = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w = this.width / 2, h = 10;
        if (this.isDot) {
          w = 5;
          h = 5;
        }
        const x = `${-w + this.offset[0]}px`;
        const y = `${-h + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y
          },
          rightBottom: {
            right: x,
            bottom: y
          },
          leftBottom: {
            left: x,
            bottom: y
          },
          leftTop: {
            left: x,
            top: y
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
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
      class: "uni-badge--x",
      renderWhole: true
    }, [
      (0, import_vue4.renderSlot)(_ctx.$slots, "default"),
      $props.text ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
        "u-text",
        {
          key: 0,
          class: (0, import_vue4.normalizeClass)([$options.classNames, "uni-badge"]),
          style: (0, import_vue4.normalizeStyle)([$options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        (0, import_vue4.toDisplayString)($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : (0, import_vue4.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-list.js
  var _style_0$1 = { "uni-list-item": { "": { "fontSize": 16, "position": "relative", "justifyContent": "space-between", "alignItems": "center", "backgroundColor": "#ffffff", "flexDirection": "row" } }, "uni-list-item--disabled": { "": { "opacity": 0.3 } }, "uni-list-item--hover": { "": { "backgroundColor": "#f1f1f1" } }, "uni-list-item__container": { "": { "position": "relative", "flexDirection": "row", "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flex": 1, "overflow": "hidden" } }, "container--right": { "": { "paddingRight": 0 } }, "uni-list--border": { "": { "position": "absolute", "top": 0, "right": 0, "left": 0, "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-list-item__content": { "": { "paddingRight": 8, "flex": 1, "color": "#3b4144", "flexDirection": "column", "justifyContent": "space-between", "overflow": "hidden" } }, "uni-list-item__content--center": { "": { "justifyContent": "center" } }, "uni-list-item__content-title": { "": { "fontSize": 14, "color": "#3b4144", "overflow": "hidden" } }, "uni-list-item__content-note": { "": { "marginTop": "6rpx", "color": "#999999", "fontSize": 12, "overflow": "hidden" } }, "uni-list-item__extra": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-list-item__header": { "": { "flexDirection": "row", "alignItems": "center" } }, "uni-list-item__icon": { "": { "marginRight": "18rpx", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni-list-item__icon-img": { "": { "height": 26, "width": 26, "marginRight": 10 } }, "uni-icon-wrapper": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "flex--direction": { "": { "flexDirection": "column" } }, "uni-list--lg": { "": { "height": 40, "width": 40 } }, "uni-list--base": { "": { "height": 26, "width": 26 } }, "uni-list--sm": { "": { "height": 20, "width": 20 } }, "uni-list-item__extra-text": { "": { "color": "#999999", "fontSize": 12 } }, "uni-ellipsis-1": { "": { "lines": 1, "textOverflow": "ellipsis" } }, "uni-ellipsis-2": { "": { "lines": 2, "textOverflow": "ellipsis" } } };
  var _sfc_main$1 = {
    name: "UniListItem",
    emits: ["click", "switchChange"],
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      badgeStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "",
            color: "#000000",
            size: 20,
            customPrefix: ""
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: Object,
        default() {
          return {
            padding: "",
            backgroundColor: "#FFFFFF"
          };
        }
      },
      keepScrollPosition: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      "customStyle.padding": {
        handler(padding) {
          if (typeof padding == "number") {
            padding += "";
          }
          let paddingArr = padding.split(" ");
          if (paddingArr.length === 1) {
            const allPadding = paddingArr[0];
            this.padding = {
              "top": allPadding,
              "right": allPadding,
              "bottom": allPadding,
              "left": allPadding
            };
          } else if (paddingArr.length === 2) {
            const [verticalPadding, horizontalPadding] = paddingArr;
            this.padding = {
              "top": verticalPadding,
              "right": horizontalPadding,
              "bottom": verticalPadding,
              "left": horizontalPadding
            };
          } else if (paddingArr.length === 4) {
            const [topPadding, rightPadding, bottomPadding, leftPadding] = paddingArr;
            this.padding = {
              "top": topPadding,
              "right": rightPadding,
              "bottom": bottomPadding,
              "left": leftPadding
            };
          }
        },
        immediate: true
      }
    },
    // inject: ['list'],
    data() {
      return {
        isFirstChild: false,
        padding: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e) {
        this.$emit("switchChange", e.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-icons"), __easycom_1);
    const _component_uni_badge = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-badge"), __easycom_5);
    const _component_switch = (0, import_vue5.resolveComponent)("switch");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("cell", { keepScrollPosition: $props.keepScrollPosition }, [
      (0, import_vue5.createElementVNode)("view", {
        class: (0, import_vue5.normalizeClass)([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
        style: (0, import_vue5.normalizeStyle)({ "background-color": $props.customStyle.backgroundColor }),
        hoverClass: !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        !$data.isFirstChild ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue5.normalizeClass)(["border--left", { "uni-list--border": $props.border }])
          },
          null,
          2
          /* CLASS */
        )) : (0, import_vue5.createCommentVNode)("v-if", true),
        (0, import_vue5.createElementVNode)(
          "view",
          {
            class: (0, import_vue5.normalizeClass)(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }]),
            style: (0, import_vue5.normalizeStyle)({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
          },
          [
            (0, import_vue5.renderSlot)(_ctx.$slots, "header", {}, () => [
              (0, import_vue5.createElementVNode)("view", { class: "uni-list-item__header" }, [
                $props.thumb ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
                  key: 0,
                  class: "uni-list-item__icon"
                }, [
                  (0, import_vue5.createElementVNode)("u-image", {
                    src: $props.thumb,
                    class: (0, import_vue5.normalizeClass)(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
                  }, null, 10, ["src"])
                ])) : $props.showExtraIcon ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
                  key: 1,
                  class: "uni-list-item__icon"
                }, [
                  (0, import_vue5.createVNode)(_component_uni_icons, {
                    customPrefix: $props.extraIcon.customPrefix,
                    color: $props.extraIcon.color,
                    size: $props.extraIcon.size,
                    type: $props.extraIcon.type
                  }, null, 8, ["customPrefix", "color", "size", "type"])
                ])) : (0, import_vue5.createCommentVNode)("v-if", true)
              ])
            ]),
            (0, import_vue5.renderSlot)(_ctx.$slots, "body", {}, () => [
              (0, import_vue5.createElementVNode)(
                "view",
                {
                  class: (0, import_vue5.normalizeClass)(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
                },
                [
                  $props.title ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                    "u-text",
                    {
                      key: 0,
                      class: (0, import_vue5.normalizeClass)(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
                    },
                    (0, import_vue5.toDisplayString)($props.title),
                    3
                    /* TEXT, CLASS */
                  )) : (0, import_vue5.createCommentVNode)("v-if", true),
                  $props.note ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                    "u-text",
                    {
                      key: 1,
                      class: "uni-list-item__content-note"
                    },
                    (0, import_vue5.toDisplayString)($props.note),
                    1
                    /* TEXT */
                  )) : (0, import_vue5.createCommentVNode)("v-if", true)
                ],
                2
                /* CLASS */
              )
            ]),
            (0, import_vue5.renderSlot)(_ctx.$slots, "footer", {}, () => [
              $props.rightText || $props.showBadge || $props.showSwitch ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                "view",
                {
                  key: 0,
                  class: (0, import_vue5.normalizeClass)(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
                },
                [
                  $props.rightText ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                    "u-text",
                    {
                      key: 0,
                      class: "uni-list-item__extra-text"
                    },
                    (0, import_vue5.toDisplayString)($props.rightText),
                    1
                    /* TEXT */
                  )) : (0, import_vue5.createCommentVNode)("v-if", true),
                  $props.showBadge ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_uni_badge, {
                    key: 1,
                    type: $props.badgeType,
                    text: $props.badgeText,
                    "custom-style": $props.badgeStyle
                  }, null, 8, ["type", "text", "custom-style"])) : (0, import_vue5.createCommentVNode)("v-if", true),
                  $props.showSwitch ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_switch, {
                    key: 2,
                    disabled: $props.disabled,
                    checked: $props.switchChecked,
                    onChange: $options.onSwitchChange
                  }, null, 8, ["disabled", "checked", "onChange"])) : (0, import_vue5.createCommentVNode)("v-if", true)
                ],
                2
                /* CLASS */
              )) : (0, import_vue5.createCommentVNode)("v-if", true)
            ])
          ],
          6
          /* CLASS, STYLE */
        ),
        $props.showArrow || $props.link ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_uni_icons, {
          key: 1,
          size: 16,
          class: "uni-icon-wrapper",
          color: "#bbb",
          type: "arrowright"
        })) : (0, import_vue5.createCommentVNode)("v-if", true)
      ], 14, ["hoverClass"])
    ], 8, ["keepScrollPosition"]);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  var _style_04 = { "uni-list": { "": { "backgroundColor": "#ffffff", "position": "relative", "flexDirection": "column" } }, "uni-list--border": { "": { "position": "relative", "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5, "borderBottomColor": "#e5e5e5", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "zIndex": -1 } } };
  var _sfc_main4 = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      stackFromEnd: {
        type: Boolean,
        default: false
      },
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      },
      renderReverse: {
        type: Boolean,
        default: false
      }
    },
    // provide() {
    // 	return {
    // 		list: this
    // 	};
    // },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      },
      scroll(e) {
        this.$emit("scroll", e);
      }
    }
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("list", {
      bounce: false,
      scrollable: true,
      showScrollbar: "",
      renderReverse: $props.renderReverse,
      onScroll: _cache[0] || (_cache[0] = (...args) => $options.scroll && $options.scroll(...args)),
      class: (0, import_vue5.normalizeClass)(["uni-list", { "uni-list--border": $props.border }]),
      enableBackToTop: $props.enableBackToTop,
      loadmoreoffset: "15"
    }, [
      (0, import_vue5.renderSlot)(_ctx.$slots, "default")
    ], 42, ["renderReverse", "enableBackToTop"]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/uni-section.js
  var import_vue6 = __toESM(require_vue());
  var _style_05 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
  var _sfc_main5 = {
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
  function _sfc_render5(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      class: "uni-section",
      renderWhole: true
    }, [
      (0, import_vue6.createElementVNode)("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue6.normalizeClass)(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : (0, import_vue6.renderSlot)(_ctx.$slots, "decoration", { key: 1 }),
        (0, import_vue6.createElementVNode)("view", { class: "uni-section-header__content" }, [
          (0, import_vue6.createElementVNode)(
            "u-text",
            {
              style: (0, import_vue6.normalizeStyle)({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: (0, import_vue6.normalizeClass)(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            (0, import_vue6.toDisplayString)($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
            "u-text",
            {
              key: 0,
              style: (0, import_vue6.normalizeStyle)({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            (0, import_vue6.toDisplayString)($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : (0, import_vue6.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue6.createElementVNode)("view", { class: "uni-section-header__slot-right" }, [
          (0, import_vue6.renderSlot)(_ctx.$slots, "right")
        ])
      ]),
      (0, import_vue6.createElementVNode)(
        "view",
        {
          class: "uni-section-content",
          style: (0, import_vue6.normalizeStyle)({ padding: $options._padding })
        },
        [
          (0, import_vue6.renderSlot)(_ctx.$slots, "default")
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main5, [["render", _sfc_render5], ["styles", [_style_05]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);

  // ../../../../CodeRepos/AI-assisted-chat/unpackage/dist/dev/.nvue/pages/extUI/list/list.js
  var _imports_0 = "/static/logo.png";
  var _style_06 = { "slot-box": { "": { "flexDirection": "row", "alignItems": "center" } }, "slot-image": { "": { "marginRight": 10, "width": 30, "height": 30 } }, "slot-text": { "": { "flex": 1, "fontSize": 14, "color": "#4cd964", "marginRight": 10 } } };
  var _sfc_main6 = {
    components: {},
    data() {
      return {
        cover: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        avatar: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
        extraIcon: {
          color: "#4cd964",
          size: "22",
          type: "gear-filled"
        }
      };
    },
    methods: {
      onClick(e) {
        formatAppLog("log", "at pages/extUI/list/list.nvue:125", "\u6267\u884Cclick\u4E8B\u4EF6", e.data);
        uni.showToast({
          title: "\u70B9\u51FB\u53CD\u9988"
        });
      },
      switchChange(e) {
        uni.showToast({
          title: "change:" + e.value,
          icon: "none"
        });
      }
    }
  };
  function _sfc_render6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_card = resolveEasycom((0, import_vue7.resolveDynamicComponent)("uni-card"), __easycom_0);
    const _component_uni_list_item = resolveEasycom((0, import_vue7.resolveDynamicComponent)("uni-list-item"), __easycom_3);
    const _component_uni_list = resolveEasycom((0, import_vue7.resolveDynamicComponent)("uni-list"), __easycom_4);
    const _component_uni_section = resolveEasycom((0, import_vue7.resolveDynamicComponent)("uni-section"), __easycom_2);
    return (0, import_vue7.openBlock)(), (0, import_vue7.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue7.createElementVNode)("view", { class: "container" }, [
        (0, import_vue7.createVNode)(_component_uni_card, {
          "is-shadow": false,
          "is-full": ""
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createElementVNode)("u-text", { class: "uni-h6" }, "\u5217\u8868\u7EC4\u4EF6\u53EF\u4EE5\u5728\u5176\u4E2D\u4F7F\u7528\u56FE\u6807\u3001\u7565\u7F29\u56FE\u6216\u653E\u7F6E\u4EFB\u4F55\u4F60\u60F3\u653E\u7684\u5143\u7D20\uFF0C\u4F7F\u7528\u573A\u666F\u5982\uFF1A\u5BFC\u822A\u83DC\u5355\u3001\u5217\u8868\u3001\u8BBE\u7F6E\u4E2D\u5FC3\u6392\u7248\u7B49")
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue7.createVNode)(_component_uni_section, {
          title: "\u57FA\u7840\u7528\u6CD5",
          type: "line"
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createVNode)(_component_uni_list, null, {
              default: (0, import_vue7.withCtx)(() => [
                (0, import_vue7.createVNode)(_component_uni_list_item, { title: "\u5217\u8868\u6587\u5B57" }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u5217\u8868\u6587\u5B57",
                  rightText: "\u53F3\u4FA7\u6587\u5B57"
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u5217\u8868\u6587\u5B57",
                  note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                  rightText: "\u53F3\u4FA7\u6587\u5B57"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue7.createVNode)(_component_uni_section, {
          title: "\u7981\u7528\u5217\u8868",
          type: "line"
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createVNode)(_component_uni_list, null, {
              default: (0, import_vue7.withCtx)(() => [
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  disabled: true,
                  title: "\u5217\u8868\u7981\u7528\u72B6\u6001",
                  rightText: "\u53F3\u4FA7\u6587\u5B57"
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  disabled: true,
                  title: "\u5217\u8868\u7981\u7528\u72B6\u6001",
                  rightText: "\u53F3\u4FA7\u6587\u5B57"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue7.createVNode)(_component_uni_section, {
          title: "\u663E\u793A\u53F3\u4FA7\u7BAD\u5934",
          type: "line"
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createVNode)(_component_uni_list, null, {
              default: (0, import_vue7.withCtx)(() => [
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  showArrow: "",
                  title: "\u5217\u8868\u6587\u5B57"
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  showArrow: "",
                  title: "\u5217\u8868\u6587\u5B57",
                  rightText: "\u53F3\u4FA7\u6587\u5B57"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue7.createVNode)(_component_uni_section, {
          title: "\u5F00\u542F\u70B9\u51FB\u53CD\u9988",
          type: "line"
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createVNode)(_component_uni_list, null, {
              default: (0, import_vue7.withCtx)(() => [
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u5F39\u7A97\u63D0\u793A",
                  clickable: "",
                  onClick: $options.onClick
                }, null, 8, ["onClick"]),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u9875\u9762\u8DF3\u8F6C",
                  to: `./chat`,
                  onClick: $options.onClick
                }, null, 8, ["to", "onClick"]),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u5173\u95ED\u5F53\u524D\u9875\u9762\u6253\u5F00\u65B0\u9875\u9762",
                  showArrow: "",
                  link: "redirectTo",
                  to: "./chat",
                  onClick: $options.onClick
                }, null, 8, ["onClick"]),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u6253\u5F00\u9519\u8BEF\u9875\u9762(\u67E5\u770B\u63A7\u5236\u53F0)",
                  showArrow: "",
                  link: "redirectTo",
                  to: "./chats",
                  onClick: $options.onClick
                }, null, 8, ["onClick"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue7.createVNode)(_component_uni_section, {
          title: "\u4E0D\u663E\u793A\u5206\u9694\u7EBF",
          type: "line"
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createVNode)(_component_uni_list, { border: false }, {
              default: (0, import_vue7.withCtx)(() => [
                (0, import_vue7.createVNode)(_component_uni_list_item, { title: "\u5217\u8868\u6587\u5B57" }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  border: false,
                  title: "\u5217\u8868\u6587\u5B57",
                  note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                  rightText: "\u53F3\u4FA7\u6587\u5B57"
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  border: false,
                  title: "\u5217\u8868\u6587\u5B57",
                  note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                  rightText: "\u53F3\u4FA7\u6587\u5B57"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue7.createVNode)(_component_uni_section, {
          title: "\u5206\u9694\u7EBF\u901A\u680F",
          type: "line"
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createVNode)(_component_uni_list, { "border-full": "" }, {
              default: (0, import_vue7.withCtx)(() => [
                (0, import_vue7.createVNode)(_component_uni_list_item, { title: "\u5217\u8868\u6587\u5B57" }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u5217\u8868\u6587\u5B57",
                  note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                  rightText: "\u53F3\u4FA7\u6587\u5B57"
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u5217\u8868\u6587\u5B57",
                  note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                  rightText: "\u53F3\u4FA7\u6587\u5B57"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue7.createVNode)(_component_uni_section, {
          title: "\u6587\u5B57\u6EA2\u51FA\u9690\u85CF",
          type: "line"
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createVNode)(_component_uni_list, null, {
              default: (0, import_vue7.withCtx)(() => [
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  ellipsis: "1",
                  title: "\u8D85\u957F\u6587\u5B57\u663E\u793A\u4E00\u884C,\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57"
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  ellipsis: "2",
                  title: "\u8D85\u957F\u6587\u5B57\u663E\u793A\u4E8C\u884C,\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57",
                  rightText: "\u4E8C\u884C\u663E\u793A"
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  ellipsis: "1",
                  title: "\u5168\u90E8\u663E\u793A,\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57",
                  note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57",
                  showArrow: "",
                  rightText: "\u4E00\u884C\u663E\u793A"
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u5168\u90E8\u663E\u793A,\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57",
                  showArrow: "",
                  rightText: "\u5168\u90E8"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue7.createVNode)(_component_uni_section, {
          title: "\u663E\u793A\u56FE\u6807\u6216\u56FE\u7247",
          type: "line"
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createVNode)(_component_uni_list, null, {
              default: (0, import_vue7.withCtx)(() => [
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  "show-extra-icon": true,
                  showArrow: "",
                  "extra-icon": $data.extraIcon,
                  title: "\u5217\u8868\u5DE6\u4FA7\u5E26\u6269\u5C55\u56FE\u6807"
                }, null, 8, ["extra-icon"]),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u5217\u8868\u5DE6\u4FA7\u5E26\u7565\u7F29\u56FE",
                  note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                  showArrow: "",
                  thumb: "/static/c1.png",
                  "thumb-size": "sm",
                  rightText: "\u5C0F\u56FE"
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u5217\u8868\u5DE6\u4FA7\u5E26\u7565\u7F29\u56FE",
                  note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                  showArrow: "",
                  thumb: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
                  "thumb-size": "base",
                  rightText: "\u9ED8\u8BA4"
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u5217\u8868\u5DE6\u4FA7\u5E26\u7565\u7F29\u56FE",
                  note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                  showArrow: "",
                  thumb: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
                  "thumb-size": "lg",
                  rightText: "\u5927\u56FE"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue7.createVNode)(_component_uni_section, {
          title: "\u4F7F\u7528\u63D2\u69FD",
          type: "line"
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createVNode)(_component_uni_list, null, {
              default: (0, import_vue7.withCtx)(() => [
                (0, import_vue7.createVNode)(_component_uni_list_item, null, {
                  body: (0, import_vue7.withCtx)(() => [
                    (0, import_vue7.createElementVNode)("view", { class: "slot-box" }, [
                      (0, import_vue7.createElementVNode)("u-text", { class: "slot-text" }, "\u4F7F\u7528 body \u63D2\u69FD")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, {
                  title: "\u81EA\u5B9A\u4E49\u53F3\u4FA7\u63D2\u69FD",
                  note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                  link: ""
                }, {
                  footer: (0, import_vue7.withCtx)(() => [
                    (0, import_vue7.createElementVNode)("u-image", {
                      class: "slot-image",
                      src: _imports_0,
                      mode: "widthFix"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue7.createVNode)(_component_uni_list_item, null, {
                  header: (0, import_vue7.withCtx)(() => [
                    (0, import_vue7.createElementVNode)("view", { class: "slot-box" }, [
                      (0, import_vue7.createElementVNode)("u-image", {
                        class: "slot-image",
                        src: _imports_0,
                        mode: "widthFix"
                      })
                    ])
                  ]),
                  body: (0, import_vue7.withCtx)(() => [
                    (0, import_vue7.createElementVNode)("u-text", { class: "slot-box slot-text" }, "\u81EA\u5B9A\u4E49\u4E24\u4FA7\u63D2\u69FD")
                  ]),
                  footer: (0, import_vue7.withCtx)(() => [
                    (0, import_vue7.createElementVNode)("u-image", {
                      class: "slot-image",
                      src: _imports_0,
                      mode: "widthFix"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  var list = /* @__PURE__ */ _export_sfc(_sfc_main6, [["render", _sfc_render6], ["styles", [_style_06]], ["__file", "D:/CodeRepos/AI-assisted-chat/pages/extUI/list/list.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/list/list";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    list.mpType = "page";
    const app = Vue.createPageApp(list, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...list.styles || []]));
    app.mount("#root");
  }
})();
