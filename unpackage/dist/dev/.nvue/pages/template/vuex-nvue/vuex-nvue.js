import { _ as __easycom_0 } from "../../../page-head.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, toDisplayString, withCtx, createTextVNode } from "vue";
import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { createStore } from "vuex";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const store = createStore({
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
    sex: "男",
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
    getUserOpenId: async function({
      commit,
      state
    }) {
      return await new Promise((resolve, reject) => {
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
              formatAppLog("log", "at store/index.js:119", "uni.login 接口调用失败，将无法正常使用开放接口等服务", err);
              reject(err);
            }
          });
        }
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
const _sfc_main = {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_page_head = resolveEasycom(resolveDynamicComponent("page-head"), __easycom_0);
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "uni-product" }, [
      createVNode(_component_page_head, { title: "vuex:nvue页面" }),
      createElementVNode(
        "u-text",
        { class: "username" },
        "用户名：" + toDisplayString($options.username),
        1
        /* TEXT */
      ),
      createElementVNode(
        "u-text",
        { class: "sex" },
        "性别：" + toDisplayString($options.sex),
        1
        /* TEXT */
      ),
      createElementVNode("view", { class: "age" }, [
        createElementVNode(
          "u-text",
          null,
          "年龄：" + toDisplayString($options.age),
          1
          /* TEXT */
        )
      ]),
      createElementVNode("view", { class: "doubleAge" }, [
        createElementVNode(
          "u-text",
          null,
          "年龄翻倍：" + toDisplayString($options.doubleAge),
          1
          /* TEXT */
        )
      ]),
      createVNode(_component_button, { onClick: $options.addAge }, {
        default: withCtx(() => [
          createTextVNode("增加1岁")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      createVNode(_component_button, { onClick: $options.addAgeTen }, {
        default: withCtx(() => [
          createTextVNode("增加10岁")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      createVNode(_component_button, { onClick: $options.addAgeAction }, {
        default: withCtx(() => [
          createTextVNode("增加20岁")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      createVNode(_component_button, { onClick: $options.resetAge }, {
        default: withCtx(() => [
          createTextVNode("重置")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"])
    ])
  ]);
}
const vuexNvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/CodeRepos/AI-assisted-chat/pages/template/vuex-nvue/vuex-nvue.nvue"]]);
export {
  vuexNvue as default
};
