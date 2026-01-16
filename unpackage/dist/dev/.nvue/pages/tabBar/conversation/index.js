import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode, Fragment, renderList, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "yujl-container": { "": { "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": 0, "paddingLeft": "20rpx", "backgroundColor": "#f0f0f0" } }, "disflex": { "": { "display": "flex", "flexDirection": "row" } }, "yujl-textarea-wrap": { "": { "paddingTop": "10rpx", "paddingRight": "10rpx", "paddingBottom": "10rpx", "paddingLeft": "10rpx", "marginTop": "10rpx", "backgroundColor": "#FFFFFF", "display": "flex" } }, "yujl-textarea": { "": { "flex": 1, "fontSize": "32rpx", "color": "#353535" } }, "yujl-btn-wrap": { "": { "marginTop": "10rpx", "marginRight": 0, "marginBottom": "10rpx", "marginLeft": 0 } }, "yujl-text-wrap": { "": { "paddingTop": "5rpx", "paddingRight": "10rpx", "paddingBottom": "0rpx", "paddingLeft": "10rpx", "display": "flex", "backgroundColor": "#FFFFFF", "justifyContent": "center", "alignItems": "center", "textAlign": "left", "lineHeight": 1.8 } }, "yujl-text": { "": { "fontSize": "32rpx", "color": "#353535" } }, "text-border": { "": { "borderBottomWidth": "6rpx", "borderBottomStyle": "solid", "borderBottomColor": "#efeff4" } } };
const _sfc_main = {
  data() {
    return {
      gender: "female",
      //性别(默认女性)
      talk: "",
      //输入内容
      replies: [
        {
          value: "同时uni-app不限制各端原生平台的API调用。开发者可以在uni-app框架中无限制的调用该平台所有能使用的API。即，在小程序平台，小程序的所有API都可以使用；在web平台，浏览器的所有API都可使用；在iOS和Android平台，os的所有API都可以使用。"
        },
        {
          value: "也就是说，使用uni-app的标准API，可以跨端使用。但对于不跨端的部分，仍可以调用该端的专有API。由于常见的API都已经被封装内置，所以日常开发时，开发者只需关注uni标准API，当需要调用特色端能力时在条件编译里编写特色API调用代码。"
        },
        {
          value: "DCloud公司拥有900万开发者、数百万应用、12亿手机端月活用户、数千款uni-app插件、70+微信/qq群，开发者可以放心选择。"
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
      uni.showToast({ title: "生成成功", icon: "success" });
    },
    copy(data) {
      uni.setClipboardData({
        data,
        success: () => {
          uni.showToast({ title: "复制成功", icon: "none" });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_radio = resolveComponent("radio");
  const _component_label = resolveComponent("label");
  const _component_radio_group = resolveComponent("radio-group");
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "yujl-container" }, [
      createElementVNode("view", null, [
        createVNode(_component_radio_group, {
          onChange: $options.radioChange,
          class: "disflex"
        }, {
          default: withCtx(() => [
            createVNode(_component_label, { class: "disflex" }, {
              default: withCtx(() => [
                createVNode(_component_radio, {
                  value: "female",
                  checked: $data.gender === "female"
                }, null, 8, ["checked"]),
                createElementVNode("u-text", { class: "yujl-text" }, "她说：")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_label, { class: "disflex" }, {
              default: withCtx(() => [
                createVNode(_component_radio, {
                  value: "male",
                  checked: $data.gender === "male"
                }, null, 8, ["checked"]),
                createElementVNode("u-text", { class: "yujl-text" }, "他说：")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onChange"])
      ]),
      createElementVNode("view", { class: "yujl-textarea-wrap" }, [
        createElementVNode("u-textarea", {
          class: "yujl-textarea",
          modelValue: $data.talk,
          onInput: _cache[0] || (_cache[0] = ($event) => $data.talk = $event.detail.value)
        }, null, 40, ["modelValue"])
      ]),
      createElementVNode("view", { class: "yujl-btn-wrap" }, [
        createVNode(_component_button, {
          type: "primary",
          disabled: !$options.canReply,
          onClick: $options.generate
        }, {
          default: withCtx(() => [
            createTextVNode("生成回复")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled", "onClick"])
      ]),
      createElementVNode("view", { class: "" }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($data.replies, (item, index2) => {
            return openBlock(), createElementBlock("view", {
              class: "yujl-text-wrap text-border",
              scrollY: "true",
              key: index2
            }, [
              createElementVNode(
                "u-text",
                { class: "yujl-text" },
                toDisplayString(item.value),
                1
                /* TEXT */
              ),
              createElementVNode("view", { class: "yujl-btn-wrap" }, [
                createVNode(_component_button, {
                  class: "mini-btn",
                  type: "primary",
                  size: "mini",
                  onClick: ($event) => $options.copy(item.value)
                }, {
                  default: withCtx(() => [
                    createTextVNode("复制")
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/CodeRepos/AI-assisted-chat/pages/tabBar/conversation/index.nvue"]]);
export {
  index as default
};
