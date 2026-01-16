import { openBlock, createElementBlock, createElementVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _sfc_main = {
  name: "page-head",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "common-page-head",
    renderWhole: true
  }, [
    createElementVNode("view", { class: "common-page-head-title" }, [
      createElementVNode(
        "u-text",
        null,
        toDisplayString($props.title),
        1
        /* TEXT */
      )
    ])
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/CodeRepos/AI-assisted-chat/components/page-head/page-head.vue"]]);
export {
  __easycom_0 as _
};
