import { r as resolveEasycom, f as formatAppLog } from "../../../uni-app.es.js";
import { _ as __easycom_0$1 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeClass, toDisplayString, createCommentVNode, createVNode, resolveComponent, renderSlot, withModifiers, withCtx } from "vue";
import { _ as __easycom_0 } from "../../../uni-load-more.js";
import { _ as __easycom_1$1 } from "../../../uni-icons.js";
import { t as tr } from "../../../uni-cloud.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
const dataPicker$1 = {
  props: {
    localdata: {
      type: [Array, Object],
      default() {
        return [];
      }
    },
    spaceInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    collection: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      default: ""
    },
    field: {
      type: String,
      default: ""
    },
    orderby: {
      type: String,
      default: ""
    },
    where: {
      type: [String, Object],
      default: ""
    },
    pageData: {
      type: String,
      default: "add"
    },
    pageCurrent: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 500
    },
    getcount: {
      type: [Boolean, String],
      default: false
    },
    getone: {
      type: [Boolean, String],
      default: false
    },
    gettree: {
      type: [Boolean, String],
      default: false
    },
    manual: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String, Number],
      default() {
        return [];
      }
    },
    modelValue: {
      type: [Array, String, Number],
      default() {
        return [];
      }
    },
    preload: {
      type: Boolean,
      default: false
    },
    stepSearh: {
      type: Boolean,
      default: true
    },
    selfField: {
      type: String,
      default: ""
    },
    parentField: {
      type: String,
      default: ""
    },
    multiple: {
      type: Boolean,
      default: false
    },
    map: {
      type: Object,
      default() {
        return {
          text: "text",
          value: "value"
        };
      }
    }
  },
  data() {
    return {
      loading: false,
      errorMessage: "",
      loadMore: {
        contentdown: "",
        contentrefresh: "",
        contentnomore: ""
      },
      dataList: [],
      selected: [],
      selectedIndex: 0,
      page: {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }
    };
  },
  computed: {
    isLocalData() {
      return !this.collection.length;
    },
    isCloudData() {
      return this.collection.length > 0;
    },
    isCloudDataList() {
      return this.isCloudData && (!this.parentField && !this.selfField);
    },
    isCloudDataTree() {
      return this.isCloudData && this.parentField && this.selfField;
    },
    dataValue() {
      let isModelValue = Array.isArray(this.modelValue) ? this.modelValue.length > 0 : this.modelValue !== null || this.modelValue !== void 0;
      return isModelValue ? this.modelValue : this.value;
    },
    hasValue() {
      if (typeof this.dataValue === "number") {
        return true;
      }
      return this.dataValue != null && this.dataValue.length > 0;
    }
  },
  created() {
    this.$watch(() => {
      var al = [];
      [
        "pageCurrent",
        "pageSize",
        "spaceInfo",
        "value",
        "modelValue",
        "localdata",
        "collection",
        "action",
        "field",
        "orderby",
        "where",
        "getont",
        "getcount",
        "gettree"
      ].forEach((key) => {
        al.push(this[key]);
      });
      return al;
    }, (newValue, oldValue) => {
      for (let i = 2; i < newValue.length; i++) {
        if (newValue[i] != oldValue[i]) {
          break;
        }
      }
      if (newValue[0] != oldValue[0]) {
        this.page.current = this.pageCurrent;
      }
      this.page.size = this.pageSize;
      this.onPropsChange();
    });
    this._treeData = [];
  },
  methods: {
    onPropsChange() {
      this._treeData = [];
    },
    // 填充 pickview 数据
    async loadData() {
      if (this.isLocalData) {
        this.loadLocalData();
      } else if (this.isCloudDataList) {
        this.loadCloudDataList();
      } else if (this.isCloudDataTree) {
        this.loadCloudDataTree();
      }
    },
    // 加载本地数据
    async loadLocalData() {
      this._treeData = [];
      this._extractTree(this.localdata, this._treeData);
      let inputValue = this.dataValue;
      if (inputValue === void 0) {
        return;
      }
      if (Array.isArray(inputValue)) {
        inputValue = inputValue[inputValue.length - 1];
        if (typeof inputValue === "object" && inputValue[this.map.value]) {
          inputValue = inputValue[this.map.value];
        }
      }
      this.selected = this._findNodePath(inputValue, this.localdata);
    },
    // 加载 Cloud 数据 (单列)
    async loadCloudDataList() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      try {
        let response = await this.getCommand();
        let responseData = response.result.data;
        this._treeData = responseData;
        this._updateBindData();
        this._updateSelected();
        this.onDataChange();
      } catch (e) {
        this.errorMessage = e;
      } finally {
        this.loading = false;
      }
    },
    // 加载 Cloud 数据 (树形)
    async loadCloudDataTree() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      try {
        let commandOptions = {
          field: this._cloudDataPostField(),
          where: this._cloudDataTreeWhere()
        };
        if (this.gettree) {
          commandOptions.startwith = `${this.selfField}=='${this.dataValue}'`;
        }
        let response = await this.getCommand(commandOptions);
        let responseData = response.result.data;
        this._treeData = responseData;
        this._updateBindData();
        this._updateSelected();
        this.onDataChange();
      } catch (e) {
        this.errorMessage = e;
      } finally {
        this.loading = false;
      }
    },
    // 加载 Cloud 数据 (节点)
    async loadCloudDataNode(callback) {
      if (this.loading) {
        return;
      }
      this.loading = true;
      try {
        let commandOptions = {
          field: this._cloudDataPostField(),
          where: this._cloudDataNodeWhere()
        };
        let response = await this.getCommand(commandOptions);
        let responseData = response.result.data;
        callback(responseData);
      } catch (e) {
        this.errorMessage = e;
      } finally {
        this.loading = false;
      }
    },
    // 回显 Cloud 数据
    getCloudDataValue() {
      if (this.isCloudDataList) {
        return this.getCloudDataListValue();
      }
      if (this.isCloudDataTree) {
        return this.getCloudDataTreeValue();
      }
    },
    // 回显 Cloud 数据 (单列)
    getCloudDataListValue() {
      let where = [];
      let whereField = this._getForeignKeyByField();
      if (whereField) {
        where.push(`${whereField} == '${this.dataValue}'`);
      }
      where = where.join(" || ");
      if (this.where) {
        where = `(${this.where}) && (${where})`;
      }
      return this.getCommand({
        field: this._cloudDataPostField(),
        where
      }).then((res) => {
        this.selected = res.result.data;
        return res.result.data;
      });
    },
    // 回显 Cloud 数据 (树形)
    getCloudDataTreeValue() {
      return this.getCommand({
        field: this._cloudDataPostField(),
        getTreePath: {
          startWith: `${this.selfField}=='${this.dataValue}'`
        }
      }).then((res) => {
        let treePath = [];
        this._extractTreePath(res.result.data, treePath);
        this.selected = treePath;
        return treePath;
      });
    },
    getCommand(options = {}) {
      let db = tr.database(this.spaceInfo);
      const action = options.action || this.action;
      if (action) {
        db = db.action(action);
      }
      const collection = options.collection || this.collection;
      db = db.collection(collection);
      const where = options.where || this.where;
      if (!(!where || !Object.keys(where).length)) {
        db = db.where(where);
      }
      const field = options.field || this.field;
      if (field) {
        db = db.field(field);
      }
      const orderby = options.orderby || this.orderby;
      if (orderby) {
        db = db.orderBy(orderby);
      }
      const current = options.pageCurrent !== void 0 ? options.pageCurrent : this.page.current;
      const size = options.pageSize !== void 0 ? options.pageSize : this.page.size;
      const getCount = options.getcount !== void 0 ? options.getcount : this.getcount;
      const getTree = options.gettree !== void 0 ? options.gettree : this.gettree;
      const getOptions = {
        getCount,
        getTree
      };
      if (options.getTreePath) {
        getOptions.getTreePath = options.getTreePath;
      }
      db = db.skip(size * (current - 1)).limit(size).get(getOptions);
      return db;
    },
    _cloudDataPostField() {
      let fields = [this.field];
      if (this.parentField) {
        fields.push(`${this.parentField} as parent_value`);
      }
      return fields.join(",");
    },
    _cloudDataTreeWhere() {
      let result = [];
      let selected = this.selected;
      let parentField = this.parentField;
      if (parentField) {
        result.push(`${parentField} == null || ${parentField} == ""`);
      }
      if (selected.length) {
        for (var i = 0; i < selected.length - 1; i++) {
          result.push(`${parentField} == '${selected[i].value}'`);
        }
      }
      let where = [];
      if (this.where) {
        where.push(`(${this.where})`);
      }
      if (result.length) {
        where.push(`(${result.join(" || ")})`);
      }
      return where.join(" && ");
    },
    _cloudDataNodeWhere() {
      let where = [];
      let selected = this.selected;
      if (selected.length) {
        where.push(`${this.parentField} == '${selected[selected.length - 1].value}'`);
      }
      where = where.join(" || ");
      if (this.where) {
        return `(${this.where}) && (${where})`;
      }
      return where;
    },
    _getWhereByForeignKey() {
      let result = [];
      let whereField = this._getForeignKeyByField();
      if (whereField) {
        result.push(`${whereField} == '${this.dataValue}'`);
      }
      if (this.where) {
        return `(${this.where}) && (${result.join(" || ")})`;
      }
      return result.join(" || ");
    },
    _getForeignKeyByField() {
      let fields = this.field.split(",");
      let whereField = null;
      for (let i = 0; i < fields.length; i++) {
        const items = fields[i].split("as");
        if (items.length < 2) {
          continue;
        }
        if (items[1].trim() === "value") {
          whereField = items[0].trim();
          break;
        }
      }
      return whereField;
    },
    _updateBindData(node) {
      const {
        dataList,
        hasNodes
      } = this._filterData(this._treeData, this.selected);
      let isleaf = this._stepSearh === false && !hasNodes;
      if (node) {
        node.isleaf = isleaf;
      }
      this.dataList = dataList;
      this.selectedIndex = dataList.length - 1;
      if (!isleaf && this.selected.length < dataList.length) {
        this.selected.push({
          value: null,
          text: "请选择"
        });
      }
      return {
        isleaf,
        hasNodes
      };
    },
    _updateSelected() {
      let dl = this.dataList;
      let sl = this.selected;
      let textField = this.map.text;
      let valueField = this.map.value;
      for (let i = 0; i < sl.length; i++) {
        let value = sl[i].value;
        let dl2 = dl[i];
        for (let j = 0; j < dl2.length; j++) {
          let item2 = dl2[j];
          if (item2[valueField] === value) {
            sl[i].text = item2[textField];
            break;
          }
        }
      }
    },
    _filterData(data, paths) {
      let dataList = [];
      let hasNodes = true;
      dataList.push(data.filter((item) => {
        return item.parent_value === null || item.parent_value === void 0 || item.parent_value === "";
      }));
      for (let i = 0; i < paths.length; i++) {
        let value = paths[i].value;
        let nodes = data.filter((item) => {
          return item.parent_value === value;
        });
        if (nodes.length) {
          dataList.push(nodes);
        } else {
          hasNodes = false;
        }
      }
      return {
        dataList,
        hasNodes
      };
    },
    _extractTree(nodes, result, parent_value) {
      let valueField = this.map.value;
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let child = {};
        for (let key in node) {
          if (key !== "children") {
            child[key] = node[key];
          }
        }
        if (parent_value !== null && parent_value !== void 0 && parent_value !== "") {
          child.parent_value = parent_value;
        }
        result.push(child);
        let children = node.children;
        if (children) {
          this._extractTree(children, result, node[valueField]);
        }
      }
    },
    _extractTreePath(nodes, result) {
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let child = {};
        for (let key in node) {
          if (key !== "children") {
            child[key] = node[key];
          }
        }
        result.push(child);
        let children = node.children;
        if (children) {
          this._extractTreePath(children, result);
        }
      }
    },
    _findNodePath(key, nodes, path = []) {
      let textField = this.map.text;
      let valueField = this.map.value;
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let children = node.children;
        let text = node[textField];
        let value = node[valueField];
        path.push({
          value,
          text
        });
        if (value === key) {
          return path;
        }
        if (children) {
          const p = this._findNodePath(key, children, path);
          if (p.length) {
            return p;
          }
        }
        path.pop();
      }
      return [];
    }
  }
};
const _style_0$2 = { "uni-data-pickerview": { "": { "flex": 1, "flexDirection": "column", "overflow": "hidden", "height": 100 } }, "error-text": { "": { "color": "#DD524D" } }, "loading-cover": { "": { "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(255,255,255,0.5)", "flexDirection": "column", "alignItems": "center", "zIndex": 1001 } }, "error-message": { "": { "backgroundColor": "#ffffff", "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "opacity": 0.9, "zIndex": 102 } }, "selected-area": { "": { "width": "750rpx" } }, "selected-list": { "": { "flexDirection": "row", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f8f8f8" } }, "selected-item": { "": { "marginLeft": 10, "marginRight": 10, "paddingTop": 12, "paddingRight": 0, "paddingBottom": 12, "paddingLeft": 0, "textAlign": "center" } }, "selected-item-text-overflow": { "": { "width": 168, "overflow": "hidden" } }, "selected-item-active": { "": { "borderBottomWidth": 2, "borderBottomStyle": "solid", "borderBottomColor": "#007aff" } }, "selected-item-text": { "": { "color": "#007aff" } }, "tab-c": { "": { "position": "relative", "flex": 1, "flexDirection": "row", "overflow": "hidden" } }, "list": { "": { "flex": 1 } }, "item": { "": { "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flexDirection": "row", "justifyContent": "space-between" } }, "is-disabled": { "": { "opacity": 0.5 } }, "item-text": { "": { "color": "#333333" } }, "item-text-overflow": { "": { "width": 280, "overflow": "hidden" } }, "check": { "": { "marginRight": 5, "borderWidth": 2, "borderStyle": "solid", "borderColor": "#007aff", "borderLeftWidth": 0, "borderLeftStyle": "solid", "borderLeftColor": "#000000", "borderTopWidth": 0, "borderTopStyle": "solid", "borderTopColor": "#000000", "height": 12, "width": 6, "transformOrigin": "center", "transform": "rotate(45deg)" } } };
const _sfc_main$2 = {
  name: "UniDataPickerView",
  emits: ["nodeclick", "change", "datachange", "update:modelValue"],
  mixins: [dataPicker$1],
  props: {
    managedMode: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: true
    }
  },
  created() {
    if (!this.managedMode) {
      this.$nextTick(() => {
        this.loadData();
      });
    }
  },
  methods: {
    onPropsChange() {
      this._treeData = [];
      this.selectedIndex = 0;
      this.$nextTick(() => {
        this.loadData();
      });
    },
    handleSelect(index) {
      this.selectedIndex = index;
    },
    handleNodeClick(item, i, j) {
      if (item.disable) {
        return;
      }
      const node = this.dataList[i][j];
      const text = node[this.map.text];
      const value = node[this.map.value];
      if (i < this.selected.length - 1) {
        this.selected.splice(i, this.selected.length - i);
        this.selected.push({
          text,
          value
        });
      } else if (i === this.selected.length - 1) {
        this.selected.splice(i, 1, {
          text,
          value
        });
      }
      if (node.isleaf) {
        this.onSelectedChange(node, node.isleaf);
        return;
      }
      const {
        isleaf,
        hasNodes
      } = this._updateBindData();
      if (this.isLocalData) {
        this.onSelectedChange(node, !hasNodes || isleaf);
      } else if (this.isCloudDataList) {
        this.onSelectedChange(node, true);
      } else if (this.isCloudDataTree) {
        if (isleaf) {
          this.onSelectedChange(node, node.isleaf);
        } else if (!hasNodes) {
          this.loadCloudDataNode((data) => {
            if (!data.length) {
              node.isleaf = true;
            } else {
              this._treeData.push(...data);
              this._updateBindData(node);
            }
            this.onSelectedChange(node, node.isleaf);
          });
        }
      }
    },
    updateData(data) {
      this._treeData = data.treeData;
      this.selected = data.selected;
      if (!this._treeData.length) {
        this.loadData();
      } else {
        this._updateBindData();
      }
    },
    onDataChange() {
      this.$emit("datachange");
    },
    onSelectedChange(node, isleaf) {
      if (isleaf) {
        this._dispatchEvent();
      }
      if (node) {
        this.$emit("nodeclick", node);
      }
    },
    _dispatchEvent() {
      this.$emit("change", this.selected.slice(0));
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_load_more = resolveEasycom(resolveDynamicComponent("uni-load-more"), __easycom_0);
  return openBlock(), createElementBlock("view", {
    class: "uni-data-pickerview",
    renderWhole: true
  }, [
    !_ctx.isCloudDataList ? (openBlock(), createElementBlock("scroll-view", {
      key: 0,
      class: "selected-area",
      scrollX: "true"
    }, [
      createElementVNode("view", { class: "selected-list" }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.selected, (item, index) => {
            return openBlock(), createElementBlock("view", {
              class: normalizeClass(["selected-item", {
                "selected-item-active": index == _ctx.selectedIndex
              }]),
              key: index,
              onClick: ($event) => $options.handleSelect(index)
            }, [
              createElementVNode(
                "u-text",
                null,
                toDisplayString(item.text || ""),
                1
                /* TEXT */
              )
            ], 10, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ])) : createCommentVNode("v-if", true),
    createElementVNode("view", { class: "tab-c" }, [
      createElementVNode("scroll-view", {
        class: "list",
        scrollY: true
      }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.dataList[_ctx.selectedIndex], (item, j) => {
            return openBlock(), createElementBlock("view", {
              class: normalizeClass(["item", { "is-disabled": !!item.disable }]),
              key: j,
              onClick: ($event) => $options.handleNodeClick(item, _ctx.selectedIndex, j)
            }, [
              createElementVNode(
                "u-text",
                { class: "item-text" },
                toDisplayString(item[_ctx.map.text]),
                1
                /* TEXT */
              ),
              _ctx.selected.length > _ctx.selectedIndex && item[_ctx.map.value] == _ctx.selected[_ctx.selectedIndex].value ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "check"
              })) : createCommentVNode("v-if", true)
            ], 10, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      _ctx.loading ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "loading-cover"
      }, [
        createVNode(_component_uni_load_more, {
          class: "load-more",
          contentText: _ctx.loadMore,
          status: "loading"
        }, null, 8, ["contentText"])
      ])) : createCommentVNode("v-if", true),
      _ctx.errorMessage ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "error-message"
      }, [
        createElementVNode(
          "u-text",
          { class: "error-text" },
          toDisplayString(_ctx.errorMessage),
          1
          /* TEXT */
        )
      ])) : createCommentVNode("v-if", true)
    ])
  ]);
}
const DataPickerView = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-data-picker/components/uni-data-pickerview/uni-data-pickerview.vue"]]);
const _style_0$1 = { "uni-data-tree": { "": { "flex": 1, "position": "relative", "fontSize": 14 } }, "error-text": { "": { "color": "#DD524D" } }, "input-value": { "": { "flexDirection": "row", "alignItems": "center", "flexWrap": "nowrap", "fontSize": 14, "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 10, "overflow": "hidden", "height": 35 } }, "input-value-border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#e5e5e5", "borderRadius": 5 } }, "selected-area": { "": { "flex": 1, "overflow": "hidden", "flexDirection": "row" } }, "load-more": { "": { "width": 40 } }, "selected-list": { "": { "flexDirection": "row", "flexWrap": "nowrap" } }, "selected-item": { "": { "flexDirection": "row" } }, "text-color": { "": { "color": "#333333" } }, "placeholder": { "": { "color": "#808080", "fontSize": 12 } }, "input-split-line": { "": { "opacity": 0.5 } }, "arrow-area": { "": { "position": "relative", "width": 20, "justifyContent": "center", "transform": "rotate(-45deg)", "transformOrigin": "center" } }, "input-arrow": { "": { "width": 7, "height": 7, "borderLeftWidth": 1, "borderLeftStyle": "solid", "borderLeftColor": "#999999", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#999999" } }, "uni-data-tree-cover": { "": { "position": "fixed", "left": 0, "top": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(0,0,0,0.4)", "flexDirection": "column", "zIndex": 100 } }, "uni-data-tree-dialog": { "": { "position": "fixed", "left": 0, "top": 200, "right": 0, "bottom": 0, "backgroundColor": "#FFFFFF", "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "flexDirection": "column", "zIndex": 102, "overflow": "hidden", "width": "750rpx" } }, "dialog-caption": { "": { "position": "relative", "flexDirection": "row" } }, "title-area": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "dialog-title": { "": { "lineHeight": 44 } }, "dialog-close": { "": { "position": "absolute", "top": 0, "right": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } }, "dialog-close-plus": { "": { "width": 16, "height": 2, "backgroundColor": "#666666", "borderRadius": 2, "transform": "rotate(45deg)" } }, "dialog-close-rotate": { "": { "position": "absolute", "transform": "rotate(-45deg)" } }, "picker-view": { "": { "flex": 1, "overflow": "hidden" } }, "icon-clear": { "": { "display": "flex", "alignItems": "center" } } };
const _sfc_main$1 = {
  name: "UniDataPicker",
  emits: ["popupopened", "popupclosed", "nodeclick", "input", "change", "update:modelValue", "inputclick"],
  mixins: [dataPicker$1],
  components: {
    DataPickerView
  },
  props: {
    options: {
      type: [Object, Array],
      default() {
        return {};
      }
    },
    popupTitle: {
      type: String,
      default: "请选择"
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    heightMobile: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearIcon: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    split: {
      type: String,
      default: "/"
    },
    ellipsis: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isOpened: false,
      inputSelected: []
    };
  },
  created() {
    this.$nextTick(() => {
      this.load();
    });
  },
  watch: {
    localdata: {
      handler() {
        this.load();
      },
      deep: true
    }
  },
  methods: {
    clear() {
      this._dispatchEvent([]);
    },
    onPropsChange() {
      this._treeData = [];
      this.selectedIndex = 0;
      this.load();
    },
    load() {
      if (this.readonly) {
        this._processReadonly(this.localdata, this.dataValue);
        return;
      }
      if (this.isLocalData) {
        this.loadData();
        this.inputSelected = this.selected.slice(0);
      } else if (this.isCloudDataList || this.isCloudDataTree) {
        this.loading = true;
        this.getCloudDataValue().then((res) => {
          this.loading = false;
          this.inputSelected = res;
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      }
    },
    show() {
      this.isOpened = true;
      setTimeout(() => {
        this.$refs.pickerView.updateData({
          treeData: this._treeData,
          selected: this.selected,
          selectedIndex: this.selectedIndex
        });
      }, 200);
      this.$emit("popupopened");
    },
    hide() {
      this.isOpened = false;
      this.$emit("popupclosed");
    },
    handleInput() {
      if (this.readonly) {
        this.$emit("inputclick");
        return;
      }
      this.show();
    },
    handleClose(e) {
      this.hide();
    },
    onnodeclick(e) {
      this.$emit("nodeclick", e);
    },
    ondatachange(e) {
      this._treeData = this.$refs.pickerView._treeData;
    },
    onchange(e) {
      this.hide();
      this.$nextTick(() => {
        this.inputSelected = e;
      });
      this._dispatchEvent(e);
    },
    _processReadonly(dataList, value) {
      var isTree = dataList.findIndex((item2) => {
        return item2.children;
      });
      if (isTree > -1) {
        let inputValue;
        if (Array.isArray(value)) {
          inputValue = value[value.length - 1];
          if (typeof inputValue === "object" && inputValue.value) {
            inputValue = inputValue.value;
          }
        } else {
          inputValue = value;
        }
        this.inputSelected = this._findNodePath(inputValue, this.localdata);
        return;
      }
      if (!this.hasValue) {
        this.inputSelected = [];
        return;
      }
      let result = [];
      for (let i = 0; i < value.length; i++) {
        var val = value[i];
        var item = dataList.find((v) => {
          return v.value == val;
        });
        if (item) {
          result.push(item);
        }
      }
      if (result.length) {
        this.inputSelected = result;
      }
    },
    _filterForArray(data, valueArray) {
      var result = [];
      for (let i = 0; i < valueArray.length; i++) {
        var value = valueArray[i];
        var found = data.find((item) => {
          return item.value == value;
        });
        if (found) {
          result.push(found);
        }
      }
      return result;
    },
    _dispatchEvent(selected) {
      let item = {};
      if (selected.length) {
        var value = new Array(selected.length);
        for (var i = 0; i < selected.length; i++) {
          value[i] = selected[i].value;
        }
        item = selected[selected.length - 1];
      } else {
        item.value = "";
      }
      if (this.formItem) {
        this.formItem.setValue(item.value);
      }
      this.$emit("input", item.value);
      this.$emit("update:modelValue", item.value);
      this.$emit("change", {
        detail: {
          value: selected
        }
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_load_more = resolveEasycom(resolveDynamicComponent("uni-load-more"), __easycom_0);
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1$1);
  const _component_data_picker_view = resolveComponent("data-picker-view");
  return openBlock(), createElementBlock("view", {
    class: "uni-data-tree",
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: "uni-data-tree-input",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.handleInput && $options.handleInput(...args))
    }, [
      renderSlot(_ctx.$slots, "default", {
        options: $props.options,
        data: $data.inputSelected,
        error: _ctx.errorMessage
      }, () => [
        createElementVNode(
          "view",
          {
            class: normalizeClass(["input-value", { "input-value-border": $props.border }])
          },
          [
            _ctx.errorMessage ? (openBlock(), createElementBlock(
              "u-text",
              {
                key: 0,
                class: "selected-area error-text"
              },
              toDisplayString(_ctx.errorMessage),
              1
              /* TEXT */
            )) : _ctx.loading && !$data.isOpened ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: "selected-area"
            }, [
              createVNode(_component_uni_load_more, {
                class: "load-more",
                contentText: _ctx.loadMore,
                status: "loading"
              }, null, 8, ["contentText"])
            ])) : $data.inputSelected.length ? (openBlock(), createElementBlock("scroll-view", {
              key: 2,
              class: "selected-area",
              scrollX: "true"
            }, [
              createElementVNode("view", { class: "selected-list" }, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.inputSelected, (item, index) => {
                    return openBlock(), createElementBlock("view", {
                      class: "selected-item",
                      key: index
                    }, [
                      createElementVNode(
                        "u-text",
                        { class: "text-color" },
                        toDisplayString(item.text),
                        1
                        /* TEXT */
                      ),
                      index < $data.inputSelected.length - 1 ? (openBlock(), createElementBlock(
                        "u-text",
                        {
                          key: 0,
                          class: "input-split-line"
                        },
                        toDisplayString($props.split),
                        1
                        /* TEXT */
                      )) : createCommentVNode("v-if", true)
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : (openBlock(), createElementBlock(
              "u-text",
              {
                key: 3,
                class: "selected-area placeholder"
              },
              toDisplayString($props.placeholder),
              1
              /* TEXT */
            )),
            $props.clearIcon && !$props.readonly && $data.inputSelected.length ? (openBlock(), createElementBlock("view", {
              key: 4,
              class: "icon-clear",
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
            }, [
              createVNode(_component_uni_icons, {
                type: "clear",
                color: "#c0c4cc",
                size: "24"
              })
            ])) : createCommentVNode("v-if", true),
            (!$props.clearIcon || !$data.inputSelected.length) && !$props.readonly ? (openBlock(), createElementBlock("view", {
              key: 5,
              class: "arrow-area"
            }, [
              createElementVNode("view", { class: "input-arrow" })
            ])) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )
      ])
    ]),
    $data.isOpened ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-data-tree-cover",
      onClick: _cache[2] || (_cache[2] = (...args) => $options.handleClose && $options.handleClose(...args))
    })) : createCommentVNode("v-if", true),
    $data.isOpened ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: "uni-data-tree-dialog"
    }, [
      createElementVNode("view", { class: "uni-popper__arrow" }),
      createElementVNode("view", { class: "dialog-caption" }, [
        createElementVNode("view", { class: "title-area" }, [
          createElementVNode(
            "u-text",
            { class: "dialog-title" },
            toDisplayString($props.popupTitle),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", {
          class: "dialog-close",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.handleClose && $options.handleClose(...args))
        }, [
          createElementVNode("view", {
            class: "dialog-close-plus",
            "data-id": "close"
          }),
          createElementVNode("view", {
            class: "dialog-close-plus dialog-close-rotate",
            "data-id": "close"
          })
        ])
      ]),
      createVNode(_component_data_picker_view, {
        class: "picker-view",
        ref: "pickerView",
        modelValue: _ctx.dataValue,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.dataValue = $event),
        localdata: _ctx.localdata,
        preload: _ctx.preload,
        collection: _ctx.collection,
        field: _ctx.field,
        orderby: _ctx.orderby,
        where: _ctx.where,
        "step-searh": _ctx.stepSearh,
        "self-field": _ctx.selfField,
        "parent-field": _ctx.parentField,
        "managed-mode": true,
        map: _ctx.map,
        ellipsis: $props.ellipsis,
        onChange: $options.onchange,
        onDatachange: $options.ondatachange,
        onNodeclick: $options.onnodeclick
      }, null, 8, ["modelValue", "localdata", "preload", "collection", "field", "orderby", "where", "step-searh", "self-field", "parent-field", "map", "ellipsis", "onChange", "onDatachange", "onNodeclick"])
    ])) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "D:/CodeRepos/AI-assisted-chat/uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.vue"]]);
const _style_0 = { "container": { "": { "flexDirection": "column" } }, "title": { "": { "fontSize": 14, "fontWeight": "bold", "marginTop": 20, "marginRight": 0, "marginBottom": 5, "marginLeft": 0 } }, "input-border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#b3e5fc", "borderRadius": 5, "paddingTop": 2, "paddingRight": 4, "paddingBottom": 2, "paddingLeft": 4 } }, "input-selected": { "": { "flexDirection": "row", "lineHeight": 2 } }, "data-pickerview": { "": { "height": 300, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#e5e5e5", "borderRadius": 5 } } };
const _sfc_main = {
  data() {
    return {
      nation: "汉族",
      address: "110101",
      // map: {
      //   text: "label",
      //   value: "value"
      // },
      classValue: "1-2",
      classDataTree: [
        {
          text: "一年级",
          value: "1-0",
          children: [
            {
              text: "1.1班",
              value: "1-1"
            },
            {
              text: "1.2班",
              value: "1-2"
            }
          ]
        },
        {
          text: "二年级",
          value: "2-0",
          children: [
            {
              text: "2.1班",
              value: "2-1"
            },
            {
              text: "2.2班",
              value: "2-2"
            }
          ]
        },
        {
          text: "三年级",
          value: "3-0",
          disable: true
        }
      ]
    };
  },
  methods: {
    onnodeclick(e) {
      formatAppLog("log", "at pages/extUI/data-picker/data-picker.nvue:111", "nodeclick", e);
    },
    onpopupopened(e) {
      formatAppLog("log", "at pages/extUI/data-picker/data-picker.nvue:114", "onpopupopened");
    },
    onpopupclosed(e) {
      formatAppLog("log", "at pages/extUI/data-picker/data-picker.nvue:117", "onpopupclosed");
    },
    onchange(e) {
      formatAppLog("log", "at pages/extUI/data-picker/data-picker.nvue:120", "onchange", e.detail.value);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0$1);
  const _component_uni_data_picker = resolveEasycom(resolveDynamicComponent("uni-data-picker"), __easycom_1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createVNode(_component_uni_card, {
        "is-full": "",
        "is-shadow": false
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "标签组件多用于商品分类、重点内容显示等场景。")
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_uni_section, {
        title: "本地数据",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-px-5 uni-pb-5" }, [
            createVNode(_component_uni_data_picker, {
              placeholder: "请选择班级",
              "popup-title": "请选择",
              localdata: $data.classDataTree,
              modelValue: $data.classValue,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.classValue = $event),
              onChange: $options.onchange,
              onNodeclick: $options.onnodeclick,
              onPopupopened: $options.onpopupopened,
              onPopupclosed: $options.onpopupclosed
            }, null, 8, ["localdata", "modelValue", "onChange", "onNodeclick", "onPopupopened", "onPopupclosed"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_uni_section, {
        title: "自定义插槽",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-px-5 uni-pb-5" }, [
            createVNode(_component_uni_data_picker, {
              title: "请选择",
              localdata: $data.classDataTree,
              modelValue: $data.classValue,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.classValue = $event)
            }, {
              default: withCtx(({ data, error, options }) => [
                createElementVNode("view", { class: "input-border" }, [
                  error ? (openBlock(), createElementBlock("view", {
                    key: 0,
                    class: "error"
                  }, [
                    createElementVNode(
                      "u-text",
                      null,
                      toDisplayString(error),
                      1
                      /* TEXT */
                    )
                  ])) : data.length ? (openBlock(), createElementBlock("view", {
                    key: 1,
                    class: "input-selected"
                  }, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(data, (item, index) => {
                        return openBlock(), createElementBlock("view", {
                          key: index,
                          class: "selected-item"
                        }, [
                          createElementVNode(
                            "u-text",
                            null,
                            toDisplayString(item.text),
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : (openBlock(), createElementBlock("view", { key: 2 }, [
                    createElementVNode("u-text", null, "请选择")
                  ]))
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["localdata", "modelValue"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
const dataPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/CodeRepos/AI-assisted-chat/pages/extUI/data-picker/data-picker.nvue"]]);
export {
  dataPicker as default
};
