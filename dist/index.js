#!/usr/bin/env node
import { createRequire as __cr } from 'node:module';
const require = __cr(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
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

// ../protocol/dist/card-status.js
var require_card_status = __commonJS({
  "../protocol/dist/card-status.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BLOCKER_TYPE_LABELS = exports.BLOCKER_TYPES = exports.CARD_STATUS_LABELS = exports.CARD_STATUSES = void 0;
    exports.deriveCardStatus = deriveCardStatus;
    exports.CARD_STATUSES = ["todo", "in_progress", "blocked", "cancelled", "done"];
    exports.CARD_STATUS_LABELS = {
      todo: "\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC\u200C\u0634\u062F\u0647",
      in_progress: "\u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645",
      blocked: "\u06AF\u06CC\u0631 \u06A9\u0631\u062F\u0647",
      cancelled: "\u0644\u063A\u0648\u0634\u062F\u0647",
      done: "\u0627\u0646\u062C\u0627\u0645\u200C\u0634\u062F\u0647"
    };
    exports.BLOCKER_TYPES = [
      "decision",
      "technical",
      "environment",
      "external",
      "permission",
      "test",
      "requirement"
    ];
    exports.BLOCKER_TYPE_LABELS = {
      decision: "\u062A\u0635\u0645\u06CC\u0645",
      technical: "\u0641\u0646\u06CC",
      environment: "\u0645\u062D\u06CC\u0637",
      external: "\u0628\u06CC\u0631\u0648\u0646\u06CC",
      permission: "\u062F\u0633\u062A\u0631\u0633\u06CC",
      test: "\u062A\u0633\u062A",
      requirement: "\u0646\u06CC\u0627\u0632\u0645\u0646\u062F\u06CC"
    };
    function deriveCardStatus(input) {
      if (input.holdState === "CANCELLED")
        return "cancelled";
      if (input.completedAt)
        return "done";
      if (input.holdState === "BLOCKED")
        return "blocked";
      if (input.listWorkflowRole === "START")
        return "todo";
      return "in_progress";
    }
  }
});

// ../protocol/dist/sync.js
var require_sync = __commonJS({
  "../protocol/dist/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../protocol/dist/index.js
var require_dist = __commonJS({
  "../protocol/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_card_status(), exports);
    __exportStar(require_sync(), exports);
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/identity.js
var require_identity = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/identity.js"(exports) {
    "use strict";
    var ALIAS = /* @__PURE__ */ Symbol.for("yaml.alias");
    var DOC = /* @__PURE__ */ Symbol.for("yaml.document");
    var MAP = /* @__PURE__ */ Symbol.for("yaml.map");
    var PAIR = /* @__PURE__ */ Symbol.for("yaml.pair");
    var SCALAR = /* @__PURE__ */ Symbol.for("yaml.scalar");
    var SEQ = /* @__PURE__ */ Symbol.for("yaml.seq");
    var NODE_TYPE = /* @__PURE__ */ Symbol.for("yaml.node.type");
    var isAlias = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === ALIAS;
    var isDocument = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === DOC;
    var isMap2 = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === MAP;
    var isPair = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === PAIR;
    var isScalar2 = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SCALAR;
    var isSeq = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SEQ;
    function isCollection(node) {
      if (node && typeof node === "object")
        switch (node[NODE_TYPE]) {
          case MAP:
          case SEQ:
            return true;
        }
      return false;
    }
    function isNode(node) {
      if (node && typeof node === "object")
        switch (node[NODE_TYPE]) {
          case ALIAS:
          case MAP:
          case SCALAR:
          case SEQ:
            return true;
        }
      return false;
    }
    var hasAnchor = (node) => (isScalar2(node) || isCollection(node)) && !!node.anchor;
    exports.ALIAS = ALIAS;
    exports.DOC = DOC;
    exports.MAP = MAP;
    exports.NODE_TYPE = NODE_TYPE;
    exports.PAIR = PAIR;
    exports.SCALAR = SCALAR;
    exports.SEQ = SEQ;
    exports.hasAnchor = hasAnchor;
    exports.isAlias = isAlias;
    exports.isCollection = isCollection;
    exports.isDocument = isDocument;
    exports.isMap = isMap2;
    exports.isNode = isNode;
    exports.isPair = isPair;
    exports.isScalar = isScalar2;
    exports.isSeq = isSeq;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/visit.js
var require_visit = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/visit.js"(exports) {
    "use strict";
    var identity = require_identity();
    var BREAK = /* @__PURE__ */ Symbol("break visit");
    var SKIP = /* @__PURE__ */ Symbol("skip children");
    var REMOVE = /* @__PURE__ */ Symbol("remove node");
    function visit(node, visitor) {
      const visitor_ = initVisitor(visitor);
      if (identity.isDocument(node)) {
        const cd = visit_(null, node.contents, visitor_, Object.freeze([node]));
        if (cd === REMOVE)
          node.contents = null;
      } else
        visit_(null, node, visitor_, Object.freeze([]));
    }
    visit.BREAK = BREAK;
    visit.SKIP = SKIP;
    visit.REMOVE = REMOVE;
    function visit_(key2, node, visitor, path) {
      const ctrl = callVisitor(key2, node, visitor, path);
      if (identity.isNode(ctrl) || identity.isPair(ctrl)) {
        replaceNode(key2, path, ctrl);
        return visit_(key2, ctrl, visitor, path);
      }
      if (typeof ctrl !== "symbol") {
        if (identity.isCollection(node)) {
          path = Object.freeze(path.concat(node));
          for (let i = 0; i < node.items.length; ++i) {
            const ci = visit_(i, node.items[i], visitor, path);
            if (typeof ci === "number")
              i = ci - 1;
            else if (ci === BREAK)
              return BREAK;
            else if (ci === REMOVE) {
              node.items.splice(i, 1);
              i -= 1;
            }
          }
        } else if (identity.isPair(node)) {
          path = Object.freeze(path.concat(node));
          const ck = visit_("key", node.key, visitor, path);
          if (ck === BREAK)
            return BREAK;
          else if (ck === REMOVE)
            node.key = null;
          const cv = visit_("value", node.value, visitor, path);
          if (cv === BREAK)
            return BREAK;
          else if (cv === REMOVE)
            node.value = null;
        }
      }
      return ctrl;
    }
    async function visitAsync(node, visitor) {
      const visitor_ = initVisitor(visitor);
      if (identity.isDocument(node)) {
        const cd = await visitAsync_(null, node.contents, visitor_, Object.freeze([node]));
        if (cd === REMOVE)
          node.contents = null;
      } else
        await visitAsync_(null, node, visitor_, Object.freeze([]));
    }
    visitAsync.BREAK = BREAK;
    visitAsync.SKIP = SKIP;
    visitAsync.REMOVE = REMOVE;
    async function visitAsync_(key2, node, visitor, path) {
      const ctrl = await callVisitor(key2, node, visitor, path);
      if (identity.isNode(ctrl) || identity.isPair(ctrl)) {
        replaceNode(key2, path, ctrl);
        return visitAsync_(key2, ctrl, visitor, path);
      }
      if (typeof ctrl !== "symbol") {
        if (identity.isCollection(node)) {
          path = Object.freeze(path.concat(node));
          for (let i = 0; i < node.items.length; ++i) {
            const ci = await visitAsync_(i, node.items[i], visitor, path);
            if (typeof ci === "number")
              i = ci - 1;
            else if (ci === BREAK)
              return BREAK;
            else if (ci === REMOVE) {
              node.items.splice(i, 1);
              i -= 1;
            }
          }
        } else if (identity.isPair(node)) {
          path = Object.freeze(path.concat(node));
          const ck = await visitAsync_("key", node.key, visitor, path);
          if (ck === BREAK)
            return BREAK;
          else if (ck === REMOVE)
            node.key = null;
          const cv = await visitAsync_("value", node.value, visitor, path);
          if (cv === BREAK)
            return BREAK;
          else if (cv === REMOVE)
            node.value = null;
        }
      }
      return ctrl;
    }
    function initVisitor(visitor) {
      if (typeof visitor === "object" && (visitor.Collection || visitor.Node || visitor.Value)) {
        return Object.assign({
          Alias: visitor.Node,
          Map: visitor.Node,
          Scalar: visitor.Node,
          Seq: visitor.Node
        }, visitor.Value && {
          Map: visitor.Value,
          Scalar: visitor.Value,
          Seq: visitor.Value
        }, visitor.Collection && {
          Map: visitor.Collection,
          Seq: visitor.Collection
        }, visitor);
      }
      return visitor;
    }
    function callVisitor(key2, node, visitor, path) {
      if (typeof visitor === "function")
        return visitor(key2, node, path);
      if (identity.isMap(node))
        return visitor.Map?.(key2, node, path);
      if (identity.isSeq(node))
        return visitor.Seq?.(key2, node, path);
      if (identity.isPair(node))
        return visitor.Pair?.(key2, node, path);
      if (identity.isScalar(node))
        return visitor.Scalar?.(key2, node, path);
      if (identity.isAlias(node))
        return visitor.Alias?.(key2, node, path);
      return void 0;
    }
    function replaceNode(key2, path, node) {
      const parent = path[path.length - 1];
      if (identity.isCollection(parent)) {
        parent.items[key2] = node;
      } else if (identity.isPair(parent)) {
        if (key2 === "key")
          parent.key = node;
        else
          parent.value = node;
      } else if (identity.isDocument(parent)) {
        parent.contents = node;
      } else {
        const pt = identity.isAlias(parent) ? "alias" : "scalar";
        throw new Error(`Cannot replace node with ${pt} parent`);
      }
    }
    exports.visit = visit;
    exports.visitAsync = visitAsync;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/doc/directives.js
var require_directives = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/doc/directives.js"(exports) {
    "use strict";
    var identity = require_identity();
    var visit = require_visit();
    var escapeChars = {
      "!": "%21",
      ",": "%2C",
      "[": "%5B",
      "]": "%5D",
      "{": "%7B",
      "}": "%7D"
    };
    var escapeTagName = (tn) => tn.replace(/[!,[\]{}]/g, (ch) => escapeChars[ch]);
    var Directives = class _Directives {
      constructor(yaml, tags) {
        this.docStart = null;
        this.docEnd = false;
        this.yaml = Object.assign({}, _Directives.defaultYaml, yaml);
        this.tags = Object.assign({}, _Directives.defaultTags, tags);
      }
      clone() {
        const copy = new _Directives(this.yaml, this.tags);
        copy.docStart = this.docStart;
        return copy;
      }
      /**
       * During parsing, get a Directives instance for the current document and
       * update the stream state according to the current version's spec.
       */
      atDocument() {
        const res = new _Directives(this.yaml, this.tags);
        switch (this.yaml.version) {
          case "1.1":
            this.atNextDocument = true;
            break;
          case "1.2":
            this.atNextDocument = false;
            this.yaml = {
              explicit: _Directives.defaultYaml.explicit,
              version: "1.2"
            };
            this.tags = Object.assign({}, _Directives.defaultTags);
            break;
        }
        return res;
      }
      /**
       * @param onError - May be called even if the action was successful
       * @returns `true` on success
       */
      add(line, onError) {
        if (this.atNextDocument) {
          this.yaml = { explicit: _Directives.defaultYaml.explicit, version: "1.1" };
          this.tags = Object.assign({}, _Directives.defaultTags);
          this.atNextDocument = false;
        }
        const parts = line.trim().split(/[ \t]+/);
        const name = parts.shift();
        switch (name) {
          case "%TAG": {
            if (parts.length !== 2) {
              onError(0, "%TAG directive should contain exactly two parts");
              if (parts.length < 2)
                return false;
            }
            const [handle, prefix] = parts;
            this.tags[handle] = prefix;
            return true;
          }
          case "%YAML": {
            this.yaml.explicit = true;
            if (parts.length !== 1) {
              onError(0, "%YAML directive should contain exactly one part");
              return false;
            }
            const [version] = parts;
            if (version === "1.1" || version === "1.2") {
              this.yaml.version = version;
              return true;
            } else {
              const isValid = /^\d+\.\d+$/.test(version);
              onError(6, `Unsupported YAML version ${version}`, isValid);
              return false;
            }
          }
          default:
            onError(0, `Unknown directive ${name}`, true);
            return false;
        }
      }
      /**
       * Resolves a tag, matching handles to those defined in %TAG directives.
       *
       * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
       *   `'!local'` tag, or `null` if unresolvable.
       */
      tagName(source, onError) {
        if (source === "!")
          return "!";
        if (source[0] !== "!") {
          onError(`Not a valid tag: ${source}`);
          return null;
        }
        if (source[1] === "<") {
          const verbatim = source.slice(2, -1);
          if (verbatim === "!" || verbatim === "!!") {
            onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
            return null;
          }
          if (source[source.length - 1] !== ">")
            onError("Verbatim tags must end with a >");
          return verbatim;
        }
        const [, handle, suffix] = source.match(/^(.*!)([^!]*)$/s);
        if (!suffix)
          onError(`The ${source} tag has no suffix`);
        const prefix = this.tags[handle];
        if (prefix) {
          try {
            return prefix + decodeURIComponent(suffix);
          } catch (error) {
            onError(String(error));
            return null;
          }
        }
        if (handle === "!")
          return source;
        onError(`Could not resolve tag: ${source}`);
        return null;
      }
      /**
       * Given a fully resolved tag, returns its printable string form,
       * taking into account current tag prefixes and defaults.
       */
      tagString(tag) {
        for (const [handle, prefix] of Object.entries(this.tags)) {
          if (tag.startsWith(prefix))
            return handle + escapeTagName(tag.substring(prefix.length));
        }
        return tag[0] === "!" ? tag : `!<${tag}>`;
      }
      toString(doc) {
        const lines = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [];
        const tagEntries = Object.entries(this.tags);
        let tagNames;
        if (doc && tagEntries.length > 0 && identity.isNode(doc.contents)) {
          const tags = {};
          visit.visit(doc.contents, (_key, node) => {
            if (identity.isNode(node) && node.tag)
              tags[node.tag] = true;
          });
          tagNames = Object.keys(tags);
        } else
          tagNames = [];
        for (const [handle, prefix] of tagEntries) {
          if (handle === "!!" && prefix === "tag:yaml.org,2002:")
            continue;
          if (!doc || tagNames.some((tn) => tn.startsWith(prefix)))
            lines.push(`%TAG ${handle} ${prefix}`);
        }
        return lines.join("\n");
      }
    };
    Directives.defaultYaml = { explicit: false, version: "1.2" };
    Directives.defaultTags = { "!!": "tag:yaml.org,2002:" };
    exports.Directives = Directives;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/doc/anchors.js
var require_anchors = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/doc/anchors.js"(exports) {
    "use strict";
    var identity = require_identity();
    var visit = require_visit();
    function anchorIsValid(anchor) {
      if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
        const sa = JSON.stringify(anchor);
        const msg = `Anchor must not contain whitespace or control characters: ${sa}`;
        throw new Error(msg);
      }
      return true;
    }
    function anchorNames(root) {
      const anchors = /* @__PURE__ */ new Set();
      visit.visit(root, {
        Value(_key, node) {
          if (node.anchor)
            anchors.add(node.anchor);
        }
      });
      return anchors;
    }
    function findNewAnchor(prefix, exclude) {
      for (let i = 1; true; ++i) {
        const name = `${prefix}${i}`;
        if (!exclude.has(name))
          return name;
      }
    }
    function createNodeAnchors(doc, prefix) {
      const aliasObjects = [];
      const sourceObjects = /* @__PURE__ */ new Map();
      let prevAnchors = null;
      return {
        onAnchor: (source) => {
          aliasObjects.push(source);
          prevAnchors ?? (prevAnchors = anchorNames(doc));
          const anchor = findNewAnchor(prefix, prevAnchors);
          prevAnchors.add(anchor);
          return anchor;
        },
        /**
         * With circular references, the source node is only resolved after all
         * of its child nodes are. This is why anchors are set only after all of
         * the nodes have been created.
         */
        setAnchors: () => {
          for (const source of aliasObjects) {
            const ref = sourceObjects.get(source);
            if (typeof ref === "object" && ref.anchor && (identity.isScalar(ref.node) || identity.isCollection(ref.node))) {
              ref.node.anchor = ref.anchor;
            } else {
              const error = new Error("Failed to resolve repeated object (this should not happen)");
              error.source = source;
              throw error;
            }
          }
        },
        sourceObjects
      };
    }
    exports.anchorIsValid = anchorIsValid;
    exports.anchorNames = anchorNames;
    exports.createNodeAnchors = createNodeAnchors;
    exports.findNewAnchor = findNewAnchor;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/doc/applyReviver.js
var require_applyReviver = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/doc/applyReviver.js"(exports) {
    "use strict";
    function applyReviver(reviver, obj, key2, val) {
      if (val && typeof val === "object") {
        if (Array.isArray(val)) {
          for (let i = 0, len = val.length; i < len; ++i) {
            const v0 = val[i];
            const v1 = applyReviver(reviver, val, String(i), v0);
            if (v1 === void 0)
              delete val[i];
            else if (v1 !== v0)
              val[i] = v1;
          }
        } else if (val instanceof Map) {
          for (const k of Array.from(val.keys())) {
            const v0 = val.get(k);
            const v1 = applyReviver(reviver, val, k, v0);
            if (v1 === void 0)
              val.delete(k);
            else if (v1 !== v0)
              val.set(k, v1);
          }
        } else if (val instanceof Set) {
          for (const v0 of Array.from(val)) {
            const v1 = applyReviver(reviver, val, v0, v0);
            if (v1 === void 0)
              val.delete(v0);
            else if (v1 !== v0) {
              val.delete(v0);
              val.add(v1);
            }
          }
        } else {
          for (const [k, v0] of Object.entries(val)) {
            const v1 = applyReviver(reviver, val, k, v0);
            if (v1 === void 0)
              delete val[k];
            else if (v1 !== v0)
              val[k] = v1;
          }
        }
      }
      return reviver.call(obj, key2, val);
    }
    exports.applyReviver = applyReviver;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/toJS.js
var require_toJS = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/toJS.js"(exports) {
    "use strict";
    var identity = require_identity();
    function toJS(value, arg, ctx) {
      if (Array.isArray(value))
        return value.map((v, i) => toJS(v, String(i), ctx));
      if (value && typeof value.toJSON === "function") {
        if (!ctx || !identity.hasAnchor(value))
          return value.toJSON(arg, ctx);
        const data = { aliasCount: 0, count: 1, res: void 0 };
        ctx.anchors.set(value, data);
        ctx.onCreate = (res2) => {
          data.res = res2;
          delete ctx.onCreate;
        };
        const res = value.toJSON(arg, ctx);
        if (ctx.onCreate)
          ctx.onCreate(res);
        return res;
      }
      if (typeof value === "bigint" && !ctx?.keep)
        return Number(value);
      return value;
    }
    exports.toJS = toJS;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/Node.js
var require_Node = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/Node.js"(exports) {
    "use strict";
    var applyReviver = require_applyReviver();
    var identity = require_identity();
    var toJS = require_toJS();
    var NodeBase = class {
      constructor(type) {
        Object.defineProperty(this, identity.NODE_TYPE, { value: type });
      }
      /** Create a copy of this node.  */
      clone() {
        const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        if (this.range)
          copy.range = this.range.slice();
        return copy;
      }
      /** A plain JavaScript representation of this node. */
      toJS(doc, { mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
        if (!identity.isDocument(doc))
          throw new TypeError("A document argument is required");
        const ctx = {
          anchors: /* @__PURE__ */ new Map(),
          doc,
          keep: true,
          mapAsMap: mapAsMap === true,
          mapKeyWarned: false,
          maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
        };
        const res = toJS.toJS(this, "", ctx);
        if (typeof onAnchor === "function")
          for (const { count, res: res2 } of ctx.anchors.values())
            onAnchor(res2, count);
        return typeof reviver === "function" ? applyReviver.applyReviver(reviver, { "": res }, "", res) : res;
      }
    };
    exports.NodeBase = NodeBase;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/Alias.js
var require_Alias = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/Alias.js"(exports) {
    "use strict";
    var anchors = require_anchors();
    var visit = require_visit();
    var identity = require_identity();
    var Node = require_Node();
    var toJS = require_toJS();
    var Alias = class extends Node.NodeBase {
      constructor(source) {
        super(identity.ALIAS);
        this.source = source;
        Object.defineProperty(this, "tag", {
          set() {
            throw new Error("Alias nodes cannot have tags");
          }
        });
      }
      /**
       * Resolve the value of this alias within `doc`, finding the last
       * instance of the `source` anchor before this node.
       */
      resolve(doc, ctx) {
        if (ctx?.maxAliasCount === 0)
          throw new ReferenceError("Alias resolution is disabled");
        let nodes;
        if (ctx?.aliasResolveCache) {
          nodes = ctx.aliasResolveCache;
        } else {
          nodes = [];
          visit.visit(doc, {
            Node: (_key, node) => {
              if (identity.isAlias(node) || identity.hasAnchor(node))
                nodes.push(node);
            }
          });
          if (ctx)
            ctx.aliasResolveCache = nodes;
        }
        let found = void 0;
        for (const node of nodes) {
          if (node === this)
            break;
          if (node.anchor === this.source)
            found = node;
        }
        if (found && ctx) {
          const { anchors: anchors2, doc: doc2, maxAliasCount } = ctx;
          let data = anchors2.get(found);
          if (!data) {
            toJS.toJS(found, null, ctx);
            data = anchors2.get(found);
          }
          if (data?.res === void 0) {
            const msg = "This should not happen: Alias anchor was not resolved?";
            throw new ReferenceError(msg);
          }
          if (maxAliasCount >= 0) {
            data.count += 1;
            if (data.aliasCount === 0)
              data.aliasCount = getAliasCount(doc2, found, anchors2);
            if (data.count * data.aliasCount > maxAliasCount) {
              const msg = "Excessive alias count indicates a resource exhaustion attack";
              throw new ReferenceError(msg);
            }
          }
        }
        return found;
      }
      toJSON(_arg, ctx) {
        if (!ctx)
          return { source: this.source };
        const source = this.resolve(ctx.doc, ctx);
        if (!source) {
          const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
          throw new ReferenceError(msg);
        }
        return ctx.anchors.get(source).res;
      }
      toString(ctx, _onComment, _onChompKeep) {
        const src = `*${this.source}`;
        if (ctx) {
          anchors.anchorIsValid(this.source);
          if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
            const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
            throw new Error(msg);
          }
          if (ctx.implicitKey)
            return `${src} `;
        }
        return src;
      }
    };
    function getAliasCount(doc, node, anchors2) {
      if (identity.isAlias(node)) {
        const source = node.resolve(doc);
        const anchor = anchors2 && source && anchors2.get(source);
        return anchor ? anchor.count * anchor.aliasCount : 0;
      } else if (identity.isCollection(node)) {
        let count = 0;
        for (const item of node.items) {
          const c = getAliasCount(doc, item, anchors2);
          if (c > count)
            count = c;
        }
        return count;
      } else if (identity.isPair(node)) {
        const kc = getAliasCount(doc, node.key, anchors2);
        const vc = getAliasCount(doc, node.value, anchors2);
        return Math.max(kc, vc);
      }
      return 1;
    }
    exports.Alias = Alias;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/Scalar.js
var require_Scalar = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/Scalar.js"(exports) {
    "use strict";
    var identity = require_identity();
    var Node = require_Node();
    var toJS = require_toJS();
    var isScalarValue = (value) => !value || typeof value !== "function" && typeof value !== "object";
    var Scalar = class extends Node.NodeBase {
      constructor(value) {
        super(identity.SCALAR);
        this.value = value;
      }
      toJSON(arg, ctx) {
        return ctx?.keep ? this.value : toJS.toJS(this.value, arg, ctx);
      }
      toString() {
        return String(this.value);
      }
    };
    Scalar.BLOCK_FOLDED = "BLOCK_FOLDED";
    Scalar.BLOCK_LITERAL = "BLOCK_LITERAL";
    Scalar.PLAIN = "PLAIN";
    Scalar.QUOTE_DOUBLE = "QUOTE_DOUBLE";
    Scalar.QUOTE_SINGLE = "QUOTE_SINGLE";
    exports.Scalar = Scalar;
    exports.isScalarValue = isScalarValue;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/doc/createNode.js
var require_createNode = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/doc/createNode.js"(exports) {
    "use strict";
    var Alias = require_Alias();
    var identity = require_identity();
    var Scalar = require_Scalar();
    var defaultTagPrefix = "tag:yaml.org,2002:";
    function findTagObject(value, tagName, tags) {
      if (tagName) {
        const match = tags.filter((t2) => t2.tag === tagName);
        const tagObj = match.find((t2) => !t2.format) ?? match[0];
        if (!tagObj)
          throw new Error(`Tag ${tagName} not found`);
        return tagObj;
      }
      return tags.find((t2) => t2.identify?.(value) && !t2.format);
    }
    function createNode(value, tagName, ctx) {
      if (identity.isDocument(value))
        value = value.contents;
      if (identity.isNode(value))
        return value;
      if (identity.isPair(value)) {
        const map = ctx.schema[identity.MAP].createNode?.(ctx.schema, null, ctx);
        map.items.push(value);
        return map;
      }
      if (value instanceof String || value instanceof Number || value instanceof Boolean || typeof BigInt !== "undefined" && value instanceof BigInt) {
        value = value.valueOf();
      }
      const { aliasDuplicateObjects, onAnchor, onTagObj, schema, sourceObjects } = ctx;
      let ref = void 0;
      if (aliasDuplicateObjects && value && typeof value === "object") {
        ref = sourceObjects.get(value);
        if (ref) {
          ref.anchor ?? (ref.anchor = onAnchor(value));
          return new Alias.Alias(ref.anchor);
        } else {
          ref = { anchor: null, node: null };
          sourceObjects.set(value, ref);
        }
      }
      if (tagName?.startsWith("!!"))
        tagName = defaultTagPrefix + tagName.slice(2);
      let tagObj = findTagObject(value, tagName, schema.tags);
      if (!tagObj) {
        if (value && typeof value.toJSON === "function") {
          value = value.toJSON();
        }
        if (!value || typeof value !== "object") {
          const node2 = new Scalar.Scalar(value);
          if (ref)
            ref.node = node2;
          return node2;
        }
        tagObj = value instanceof Map ? schema[identity.MAP] : Symbol.iterator in Object(value) ? schema[identity.SEQ] : schema[identity.MAP];
      }
      if (onTagObj) {
        onTagObj(tagObj);
        delete ctx.onTagObj;
      }
      const node = tagObj?.createNode ? tagObj.createNode(ctx.schema, value, ctx) : typeof tagObj?.nodeClass?.from === "function" ? tagObj.nodeClass.from(ctx.schema, value, ctx) : new Scalar.Scalar(value);
      if (tagName)
        node.tag = tagName;
      else if (!tagObj.default)
        node.tag = tagObj.tag;
      if (ref)
        ref.node = node;
      return node;
    }
    exports.createNode = createNode;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/Collection.js
var require_Collection = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/Collection.js"(exports) {
    "use strict";
    var createNode = require_createNode();
    var identity = require_identity();
    var Node = require_Node();
    function collectionFromPath(schema, path, value) {
      let v = value;
      for (let i = path.length - 1; i >= 0; --i) {
        const k = path[i];
        if (typeof k === "number" && Number.isInteger(k) && k >= 0) {
          const a = [];
          a[k] = v;
          v = a;
        } else {
          v = /* @__PURE__ */ new Map([[k, v]]);
        }
      }
      return createNode.createNode(v, void 0, {
        aliasDuplicateObjects: false,
        keepUndefined: false,
        onAnchor: () => {
          throw new Error("This should not happen, please report a bug.");
        },
        schema,
        sourceObjects: /* @__PURE__ */ new Map()
      });
    }
    var isEmptyPath = (path) => path == null || typeof path === "object" && !!path[Symbol.iterator]().next().done;
    var Collection = class extends Node.NodeBase {
      constructor(type, schema) {
        super(type);
        Object.defineProperty(this, "schema", {
          value: schema,
          configurable: true,
          enumerable: false,
          writable: true
        });
      }
      /**
       * Create a copy of this collection.
       *
       * @param schema - If defined, overwrites the original's schema
       */
      clone(schema) {
        const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        if (schema)
          copy.schema = schema;
        copy.items = copy.items.map((it) => identity.isNode(it) || identity.isPair(it) ? it.clone(schema) : it);
        if (this.range)
          copy.range = this.range.slice();
        return copy;
      }
      /**
       * Adds a value to the collection. For `!!map` and `!!omap` the value must
       * be a Pair instance or a `{ key, value }` object, which may not have a key
       * that already exists in the map.
       */
      addIn(path, value) {
        if (isEmptyPath(path))
          this.add(value);
        else {
          const [key2, ...rest] = path;
          const node = this.get(key2, true);
          if (identity.isCollection(node))
            node.addIn(rest, value);
          else if (node === void 0 && this.schema)
            this.set(key2, collectionFromPath(this.schema, rest, value));
          else
            throw new Error(`Expected YAML collection at ${key2}. Remaining path: ${rest}`);
        }
      }
      /**
       * Removes a value from the collection.
       * @returns `true` if the item was found and removed.
       */
      deleteIn(path) {
        const [key2, ...rest] = path;
        if (rest.length === 0)
          return this.delete(key2);
        const node = this.get(key2, true);
        if (identity.isCollection(node))
          return node.deleteIn(rest);
        else
          throw new Error(`Expected YAML collection at ${key2}. Remaining path: ${rest}`);
      }
      /**
       * Returns item at `key`, or `undefined` if not found. By default unwraps
       * scalar values from their surrounding node; to disable set `keepScalar` to
       * `true` (collections are always returned intact).
       */
      getIn(path, keepScalar) {
        const [key2, ...rest] = path;
        const node = this.get(key2, true);
        if (rest.length === 0)
          return !keepScalar && identity.isScalar(node) ? node.value : node;
        else
          return identity.isCollection(node) ? node.getIn(rest, keepScalar) : void 0;
      }
      hasAllNullValues(allowScalar) {
        return this.items.every((node) => {
          if (!identity.isPair(node))
            return false;
          const n = node.value;
          return n == null || allowScalar && identity.isScalar(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
        });
      }
      /**
       * Checks if the collection includes a value with the key `key`.
       */
      hasIn(path) {
        const [key2, ...rest] = path;
        if (rest.length === 0)
          return this.has(key2);
        const node = this.get(key2, true);
        return identity.isCollection(node) ? node.hasIn(rest) : false;
      }
      /**
       * Sets a value in this collection. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       */
      setIn(path, value) {
        const [key2, ...rest] = path;
        if (rest.length === 0) {
          this.set(key2, value);
        } else {
          const node = this.get(key2, true);
          if (identity.isCollection(node))
            node.setIn(rest, value);
          else if (node === void 0 && this.schema)
            this.set(key2, collectionFromPath(this.schema, rest, value));
          else
            throw new Error(`Expected YAML collection at ${key2}. Remaining path: ${rest}`);
        }
      }
    };
    exports.Collection = Collection;
    exports.collectionFromPath = collectionFromPath;
    exports.isEmptyPath = isEmptyPath;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyComment.js
var require_stringifyComment = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyComment.js"(exports) {
    "use strict";
    var stringifyComment = (str) => str.replace(/^(?!$)(?: $)?/gm, "#");
    function indentComment(comment, indent) {
      if (/^\n+$/.test(comment))
        return comment.substring(1);
      return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
    }
    var lineComment = (str, indent, comment) => str.endsWith("\n") ? indentComment(comment, indent) : comment.includes("\n") ? "\n" + indentComment(comment, indent) : (str.endsWith(" ") ? "" : " ") + comment;
    exports.indentComment = indentComment;
    exports.lineComment = lineComment;
    exports.stringifyComment = stringifyComment;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/foldFlowLines.js
var require_foldFlowLines = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/foldFlowLines.js"(exports) {
    "use strict";
    var FOLD_FLOW = "flow";
    var FOLD_BLOCK = "block";
    var FOLD_QUOTED = "quoted";
    function foldFlowLines(text, indent, mode = "flow", { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
      if (!lineWidth || lineWidth < 0)
        return text;
      if (lineWidth < minContentWidth)
        minContentWidth = 0;
      const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
      if (text.length <= endStep)
        return text;
      const folds = [];
      const escapedFolds = {};
      let end = lineWidth - indent.length;
      if (typeof indentAtStart === "number") {
        if (indentAtStart > lineWidth - Math.max(2, minContentWidth))
          folds.push(0);
        else
          end = lineWidth - indentAtStart;
      }
      let split = void 0;
      let prev = void 0;
      let overflow = false;
      let i = -1;
      let escStart = -1;
      let escEnd = -1;
      if (mode === FOLD_BLOCK) {
        i = consumeMoreIndentedLines(text, i, indent.length);
        if (i !== -1)
          end = i + endStep;
      }
      for (let ch; ch = text[i += 1]; ) {
        if (mode === FOLD_QUOTED && ch === "\\") {
          escStart = i;
          switch (text[i + 1]) {
            case "x":
              i += 3;
              break;
            case "u":
              i += 5;
              break;
            case "U":
              i += 9;
              break;
            default:
              i += 1;
          }
          escEnd = i;
        }
        if (ch === "\n") {
          if (mode === FOLD_BLOCK)
            i = consumeMoreIndentedLines(text, i, indent.length);
          end = i + indent.length + endStep;
          split = void 0;
        } else {
          if (ch === " " && prev && prev !== " " && prev !== "\n" && prev !== "	") {
            const next = text[i + 1];
            if (next && next !== " " && next !== "\n" && next !== "	")
              split = i;
          }
          if (i >= end) {
            if (split) {
              folds.push(split);
              end = split + endStep;
              split = void 0;
            } else if (mode === FOLD_QUOTED) {
              while (prev === " " || prev === "	") {
                prev = ch;
                ch = text[i += 1];
                overflow = true;
              }
              const j = i > escEnd + 1 ? i - 2 : escStart - 1;
              if (escapedFolds[j])
                return text;
              folds.push(j);
              escapedFolds[j] = true;
              end = j + endStep;
              split = void 0;
            } else {
              overflow = true;
            }
          }
        }
        prev = ch;
      }
      if (overflow && onOverflow)
        onOverflow();
      if (folds.length === 0)
        return text;
      if (onFold)
        onFold();
      let res = text.slice(0, folds[0]);
      for (let i2 = 0; i2 < folds.length; ++i2) {
        const fold = folds[i2];
        const end2 = folds[i2 + 1] || text.length;
        if (fold === 0)
          res = `
${indent}${text.slice(0, end2)}`;
        else {
          if (mode === FOLD_QUOTED && escapedFolds[fold])
            res += `${text[fold]}\\`;
          res += `
${indent}${text.slice(fold + 1, end2)}`;
        }
      }
      return res;
    }
    function consumeMoreIndentedLines(text, i, indent) {
      let end = i;
      let start = i + 1;
      let ch = text[start];
      while (ch === " " || ch === "	") {
        if (i < start + indent) {
          ch = text[++i];
        } else {
          do {
            ch = text[++i];
          } while (ch && ch !== "\n");
          end = i;
          start = i + 1;
          ch = text[start];
        }
      }
      return end;
    }
    exports.FOLD_BLOCK = FOLD_BLOCK;
    exports.FOLD_FLOW = FOLD_FLOW;
    exports.FOLD_QUOTED = FOLD_QUOTED;
    exports.foldFlowLines = foldFlowLines;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyString.js
var require_stringifyString = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyString.js"(exports) {
    "use strict";
    var Scalar = require_Scalar();
    var foldFlowLines = require_foldFlowLines();
    var getFoldOptions = (ctx, isBlock) => ({
      indentAtStart: isBlock ? ctx.indent.length : ctx.indentAtStart,
      lineWidth: ctx.options.lineWidth,
      minContentWidth: ctx.options.minContentWidth
    });
    var containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
    function lineLengthOverLimit(str, lineWidth, indentLength) {
      if (!lineWidth || lineWidth < 0)
        return false;
      const limit = lineWidth - indentLength;
      const strLen = str.length;
      if (strLen <= limit)
        return false;
      for (let i = 0, start = 0; i < strLen; ++i) {
        if (str[i] === "\n") {
          if (i - start > limit)
            return true;
          start = i + 1;
          if (strLen - start <= limit)
            return false;
        }
      }
      return true;
    }
    function doubleQuotedString(value, ctx) {
      const json = JSON.stringify(value);
      if (ctx.options.doubleQuotedAsJSON)
        return json;
      const { implicitKey } = ctx;
      const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
      const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
      let str = "";
      let start = 0;
      for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
        if (ch === " " && json[i + 1] === "\\" && json[i + 2] === "n") {
          str += json.slice(start, i) + "\\ ";
          i += 1;
          start = i;
          ch = "\\";
        }
        if (ch === "\\")
          switch (json[i + 1]) {
            case "u":
              {
                str += json.slice(start, i);
                const code = json.substr(i + 2, 4);
                switch (code) {
                  case "0000":
                    str += "\\0";
                    break;
                  case "0007":
                    str += "\\a";
                    break;
                  case "000b":
                    str += "\\v";
                    break;
                  case "001b":
                    str += "\\e";
                    break;
                  case "0085":
                    str += "\\N";
                    break;
                  case "00a0":
                    str += "\\_";
                    break;
                  case "2028":
                    str += "\\L";
                    break;
                  case "2029":
                    str += "\\P";
                    break;
                  default:
                    if (code.substr(0, 2) === "00")
                      str += "\\x" + code.substr(2);
                    else
                      str += json.substr(i, 6);
                }
                i += 5;
                start = i + 1;
              }
              break;
            case "n":
              if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
                i += 1;
              } else {
                str += json.slice(start, i) + "\n\n";
                while (json[i + 2] === "\\" && json[i + 3] === "n" && json[i + 4] !== '"') {
                  str += "\n";
                  i += 2;
                }
                str += indent;
                if (json[i + 2] === " ")
                  str += "\\";
                i += 1;
                start = i + 1;
              }
              break;
            default:
              i += 1;
          }
      }
      str = start ? str + json.slice(start) : json;
      return implicitKey ? str : foldFlowLines.foldFlowLines(str, indent, foldFlowLines.FOLD_QUOTED, getFoldOptions(ctx, false));
    }
    function singleQuotedString(value, ctx) {
      if (ctx.options.singleQuote === false || ctx.implicitKey && value.includes("\n") || /[ \t]\n|\n[ \t]/.test(value))
        return doubleQuotedString(value, ctx);
      const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
      const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&
${indent}`) + "'";
      return ctx.implicitKey ? res : foldFlowLines.foldFlowLines(res, indent, foldFlowLines.FOLD_FLOW, getFoldOptions(ctx, false));
    }
    function quotedString(value, ctx) {
      const { singleQuote } = ctx.options;
      let qs;
      if (singleQuote === false)
        qs = doubleQuotedString;
      else {
        const hasDouble = value.includes('"');
        const hasSingle = value.includes("'");
        if (hasDouble && !hasSingle)
          qs = singleQuotedString;
        else if (hasSingle && !hasDouble)
          qs = doubleQuotedString;
        else
          qs = singleQuote ? singleQuotedString : doubleQuotedString;
      }
      return qs(value, ctx);
    }
    var blockEndNewlines;
    try {
      blockEndNewlines = new RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
    } catch {
      blockEndNewlines = /\n+(?!\n|$)/g;
    }
    function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
      const { blockQuote, commentString, lineWidth } = ctx.options;
      if (!blockQuote || /\n[\t ]+$/.test(value)) {
        return quotedString(value, ctx);
      }
      const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
      const literal = blockQuote === "literal" ? true : blockQuote === "folded" || type === Scalar.Scalar.BLOCK_FOLDED ? false : type === Scalar.Scalar.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, lineWidth, indent.length);
      if (!value)
        return literal ? "|\n" : ">\n";
      let chomp;
      let endStart;
      for (endStart = value.length; endStart > 0; --endStart) {
        const ch = value[endStart - 1];
        if (ch !== "\n" && ch !== "	" && ch !== " ")
          break;
      }
      let end = value.substring(endStart);
      const endNlPos = end.indexOf("\n");
      if (endNlPos === -1) {
        chomp = "-";
      } else if (value === end || endNlPos !== end.length - 1) {
        chomp = "+";
        if (onChompKeep)
          onChompKeep();
      } else {
        chomp = "";
      }
      if (end) {
        value = value.slice(0, -end.length);
        if (end[end.length - 1] === "\n")
          end = end.slice(0, -1);
        end = end.replace(blockEndNewlines, `$&${indent}`);
      }
      let startWithSpace = false;
      let startEnd;
      let startNlPos = -1;
      for (startEnd = 0; startEnd < value.length; ++startEnd) {
        const ch = value[startEnd];
        if (ch === " ")
          startWithSpace = true;
        else if (ch === "\n")
          startNlPos = startEnd;
        else
          break;
      }
      let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
      if (start) {
        value = value.substring(start.length);
        start = start.replace(/\n+/g, `$&${indent}`);
      }
      const indentSize = indent ? "2" : "1";
      let header = (startWithSpace ? indentSize : "") + chomp;
      if (comment) {
        header += " " + commentString(comment.replace(/ ?[\r\n]+/g, " "));
        if (onComment)
          onComment();
      }
      if (!literal) {
        const foldedValue = value.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${indent}`);
        let literalFallback = false;
        const foldOptions = getFoldOptions(ctx, true);
        if (blockQuote !== "folded" && type !== Scalar.Scalar.BLOCK_FOLDED) {
          foldOptions.onOverflow = () => {
            literalFallback = true;
          };
        }
        const body = foldFlowLines.foldFlowLines(`${start}${foldedValue}${end}`, indent, foldFlowLines.FOLD_BLOCK, foldOptions);
        if (!literalFallback)
          return `>${header}
${indent}${body}`;
      }
      value = value.replace(/\n+/g, `$&${indent}`);
      return `|${header}
${indent}${start}${value}${end}`;
    }
    function plainString(item, ctx, onComment, onChompKeep) {
      const { type, value } = item;
      const { actualString, implicitKey, indent, indentStep, inFlow } = ctx;
      if (implicitKey && value.includes("\n") || inFlow && /[[\]{},]/.test(value)) {
        return quotedString(value, ctx);
      }
      if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
        return implicitKey || inFlow || !value.includes("\n") ? quotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
      }
      if (!implicitKey && !inFlow && type !== Scalar.Scalar.PLAIN && value.includes("\n")) {
        return blockString(item, ctx, onComment, onChompKeep);
      }
      if (containsDocumentMarker(value)) {
        if (indent === "") {
          ctx.forceBlockIndent = true;
          return blockString(item, ctx, onComment, onChompKeep);
        } else if (implicitKey && indent === indentStep) {
          return quotedString(value, ctx);
        }
      }
      const str = value.replace(/\n+/g, `$&
${indent}`);
      if (actualString) {
        const test = (tag) => tag.default && tag.tag !== "tag:yaml.org,2002:str" && tag.test?.test(str);
        const { compat, tags } = ctx.doc.schema;
        if (tags.some(test) || compat?.some(test))
          return quotedString(value, ctx);
      }
      return implicitKey ? str : foldFlowLines.foldFlowLines(str, indent, foldFlowLines.FOLD_FLOW, getFoldOptions(ctx, false));
    }
    function stringifyString(item, ctx, onComment, onChompKeep) {
      const { implicitKey, inFlow } = ctx;
      const ss = typeof item.value === "string" ? item : Object.assign({}, item, { value: String(item.value) });
      let { type } = item;
      if (type !== Scalar.Scalar.QUOTE_DOUBLE) {
        if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value))
          type = Scalar.Scalar.QUOTE_DOUBLE;
      }
      const _stringify = (_type) => {
        switch (_type) {
          case Scalar.Scalar.BLOCK_FOLDED:
          case Scalar.Scalar.BLOCK_LITERAL:
            return implicitKey || inFlow ? quotedString(ss.value, ctx) : blockString(ss, ctx, onComment, onChompKeep);
          case Scalar.Scalar.QUOTE_DOUBLE:
            return doubleQuotedString(ss.value, ctx);
          case Scalar.Scalar.QUOTE_SINGLE:
            return singleQuotedString(ss.value, ctx);
          case Scalar.Scalar.PLAIN:
            return plainString(ss, ctx, onComment, onChompKeep);
          default:
            return null;
        }
      };
      let res = _stringify(type);
      if (res === null) {
        const { defaultKeyType, defaultStringType } = ctx.options;
        const t2 = implicitKey && defaultKeyType || defaultStringType;
        res = _stringify(t2);
        if (res === null)
          throw new Error(`Unsupported default string type ${t2}`);
      }
      return res;
    }
    exports.stringifyString = stringifyString;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringify.js"(exports) {
    "use strict";
    var anchors = require_anchors();
    var identity = require_identity();
    var stringifyComment = require_stringifyComment();
    var stringifyString = require_stringifyString();
    function createStringifyContext(doc, options) {
      const opt = Object.assign({
        blockQuote: true,
        commentString: stringifyComment.stringifyComment,
        defaultKeyType: null,
        defaultStringType: "PLAIN",
        directives: null,
        doubleQuotedAsJSON: false,
        doubleQuotedMinMultiLineLength: 40,
        falseStr: "false",
        flowCollectionPadding: true,
        indentSeq: true,
        lineWidth: 80,
        minContentWidth: 20,
        nullStr: "null",
        simpleKeys: false,
        singleQuote: null,
        trailingComma: false,
        trueStr: "true",
        verifyAliasOrder: true
      }, doc.schema.toStringOptions, options);
      let inFlow;
      switch (opt.collectionStyle) {
        case "block":
          inFlow = false;
          break;
        case "flow":
          inFlow = true;
          break;
        default:
          inFlow = null;
      }
      return {
        anchors: /* @__PURE__ */ new Set(),
        doc,
        flowCollectionPadding: opt.flowCollectionPadding ? " " : "",
        indent: "",
        indentStep: typeof opt.indent === "number" ? " ".repeat(opt.indent) : "  ",
        inFlow,
        options: opt
      };
    }
    function getTagObject(tags, item) {
      if (item.tag) {
        const match = tags.filter((t2) => t2.tag === item.tag);
        if (match.length > 0)
          return match.find((t2) => t2.format === item.format) ?? match[0];
      }
      let tagObj = void 0;
      let obj;
      if (identity.isScalar(item)) {
        obj = item.value;
        let match = tags.filter((t2) => t2.identify?.(obj));
        if (match.length > 1) {
          const testMatch = match.filter((t2) => t2.test);
          if (testMatch.length > 0)
            match = testMatch;
        }
        tagObj = match.find((t2) => t2.format === item.format) ?? match.find((t2) => !t2.format);
      } else {
        obj = item;
        tagObj = tags.find((t2) => t2.nodeClass && obj instanceof t2.nodeClass);
      }
      if (!tagObj) {
        const name = obj?.constructor?.name ?? (obj === null ? "null" : typeof obj);
        throw new Error(`Tag not resolved for ${name} value`);
      }
      return tagObj;
    }
    function stringifyProps(node, tagObj, { anchors: anchors$1, doc }) {
      if (!doc.directives)
        return "";
      const props = [];
      const anchor = (identity.isScalar(node) || identity.isCollection(node)) && node.anchor;
      if (anchor && anchors.anchorIsValid(anchor)) {
        anchors$1.add(anchor);
        props.push(`&${anchor}`);
      }
      const tag = node.tag ?? (tagObj.default ? null : tagObj.tag);
      if (tag)
        props.push(doc.directives.tagString(tag));
      return props.join(" ");
    }
    function stringify(item, ctx, onComment, onChompKeep) {
      if (identity.isPair(item))
        return item.toString(ctx, onComment, onChompKeep);
      if (identity.isAlias(item)) {
        if (ctx.doc.directives)
          return item.toString(ctx);
        if (ctx.resolvedAliases?.has(item)) {
          throw new TypeError(`Cannot stringify circular structure without alias nodes`);
        } else {
          if (ctx.resolvedAliases)
            ctx.resolvedAliases.add(item);
          else
            ctx.resolvedAliases = /* @__PURE__ */ new Set([item]);
          item = item.resolve(ctx.doc);
        }
      }
      let tagObj = void 0;
      const node = identity.isNode(item) ? item : ctx.doc.createNode(item, { onTagObj: (o) => tagObj = o });
      tagObj ?? (tagObj = getTagObject(ctx.doc.schema.tags, node));
      const props = stringifyProps(node, tagObj, ctx);
      if (props.length > 0)
        ctx.indentAtStart = (ctx.indentAtStart ?? 0) + props.length + 1;
      const str = typeof tagObj.stringify === "function" ? tagObj.stringify(node, ctx, onComment, onChompKeep) : identity.isScalar(node) ? stringifyString.stringifyString(node, ctx, onComment, onChompKeep) : node.toString(ctx, onComment, onChompKeep);
      if (!props)
        return str;
      return identity.isScalar(node) || str[0] === "{" || str[0] === "[" ? `${props} ${str}` : `${props}
${ctx.indent}${str}`;
    }
    exports.createStringifyContext = createStringifyContext;
    exports.stringify = stringify;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyPair.js
var require_stringifyPair = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyPair.js"(exports) {
    "use strict";
    var identity = require_identity();
    var Scalar = require_Scalar();
    var stringify = require_stringify();
    var stringifyComment = require_stringifyComment();
    function stringifyPair({ key: key2, value }, ctx, onComment, onChompKeep) {
      const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
      let keyComment = identity.isNode(key2) && key2.comment || null;
      if (simpleKeys) {
        if (keyComment) {
          throw new Error("With simple keys, key nodes cannot have comments");
        }
        if (identity.isCollection(key2) || !identity.isNode(key2) && typeof key2 === "object") {
          const msg = "With simple keys, collection cannot be used as a key value";
          throw new Error(msg);
        }
      }
      let explicitKey = !simpleKeys && (!key2 || keyComment && value == null && !ctx.inFlow || identity.isCollection(key2) || (identity.isScalar(key2) ? key2.type === Scalar.Scalar.BLOCK_FOLDED || key2.type === Scalar.Scalar.BLOCK_LITERAL : typeof key2 === "object"));
      ctx = Object.assign({}, ctx, {
        allNullValues: false,
        implicitKey: !explicitKey && (simpleKeys || !allNullValues),
        indent: indent + indentStep
      });
      let keyCommentDone = false;
      let chompKeep = false;
      let str = stringify.stringify(key2, ctx, () => keyCommentDone = true, () => chompKeep = true);
      if (!explicitKey && !ctx.inFlow && str.length > 1024) {
        if (simpleKeys)
          throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
        explicitKey = true;
      }
      if (ctx.inFlow) {
        if (allNullValues || value == null) {
          if (keyCommentDone && onComment)
            onComment();
          return str === "" ? "?" : explicitKey ? `? ${str}` : str;
        }
      } else if (allNullValues && !simpleKeys || value == null && explicitKey) {
        str = `? ${str}`;
        if (keyComment && !keyCommentDone) {
          str += stringifyComment.lineComment(str, ctx.indent, commentString(keyComment));
        } else if (chompKeep && onChompKeep)
          onChompKeep();
        return str;
      }
      if (keyCommentDone)
        keyComment = null;
      if (explicitKey) {
        if (keyComment)
          str += stringifyComment.lineComment(str, ctx.indent, commentString(keyComment));
        str = `? ${str}
${indent}:`;
      } else {
        str = `${str}:`;
        if (keyComment)
          str += stringifyComment.lineComment(str, ctx.indent, commentString(keyComment));
      }
      let vsb, vcb, valueComment;
      if (identity.isNode(value)) {
        vsb = !!value.spaceBefore;
        vcb = value.commentBefore;
        valueComment = value.comment;
      } else {
        vsb = false;
        vcb = null;
        valueComment = null;
        if (value && typeof value === "object")
          value = doc.createNode(value);
      }
      ctx.implicitKey = false;
      if (!explicitKey && !keyComment && identity.isScalar(value))
        ctx.indentAtStart = str.length + 1;
      chompKeep = false;
      if (!indentSeq && indentStep.length >= 2 && !ctx.inFlow && !explicitKey && identity.isSeq(value) && !value.flow && !value.tag && !value.anchor) {
        ctx.indent = ctx.indent.substring(2);
      }
      let valueCommentDone = false;
      const valueStr = stringify.stringify(value, ctx, () => valueCommentDone = true, () => chompKeep = true);
      let ws = " ";
      if (keyComment || vsb || vcb) {
        ws = vsb ? "\n" : "";
        if (vcb) {
          const cs = commentString(vcb);
          ws += `
${stringifyComment.indentComment(cs, ctx.indent)}`;
        }
        if (valueStr === "" && !ctx.inFlow) {
          if (ws === "\n" && valueComment)
            ws = "\n\n";
        } else {
          ws += `
${ctx.indent}`;
        }
      } else if (!explicitKey && identity.isCollection(value)) {
        const vs0 = valueStr[0];
        const nl0 = valueStr.indexOf("\n");
        const hasNewline = nl0 !== -1;
        const flow = ctx.inFlow ?? value.flow ?? value.items.length === 0;
        if (hasNewline || !flow) {
          let hasPropsLine = false;
          if (hasNewline && (vs0 === "&" || vs0 === "!")) {
            let sp0 = valueStr.indexOf(" ");
            if (vs0 === "&" && sp0 !== -1 && sp0 < nl0 && valueStr[sp0 + 1] === "!") {
              sp0 = valueStr.indexOf(" ", sp0 + 1);
            }
            if (sp0 === -1 || nl0 < sp0)
              hasPropsLine = true;
          }
          if (!hasPropsLine)
            ws = `
${ctx.indent}`;
        }
      } else if (valueStr === "" || valueStr[0] === "\n") {
        ws = "";
      }
      str += ws + valueStr;
      if (ctx.inFlow) {
        if (valueCommentDone && onComment)
          onComment();
      } else if (valueComment && !valueCommentDone) {
        str += stringifyComment.lineComment(str, ctx.indent, commentString(valueComment));
      } else if (chompKeep && onChompKeep) {
        onChompKeep();
      }
      return str;
    }
    exports.stringifyPair = stringifyPair;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/log.js
var require_log = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/log.js"(exports) {
    "use strict";
    var node_process = __require("process");
    function debug(logLevel, ...messages) {
      if (logLevel === "debug")
        console.log(...messages);
    }
    function warn(logLevel, warning) {
      if (logLevel === "debug" || logLevel === "warn") {
        if (typeof node_process.emitWarning === "function")
          node_process.emitWarning(warning);
        else
          console.warn(warning);
      }
    }
    exports.debug = debug;
    exports.warn = warn;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/merge.js
var require_merge = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/merge.js"(exports) {
    "use strict";
    var identity = require_identity();
    var Scalar = require_Scalar();
    var MERGE_KEY = "<<";
    var merge = {
      identify: (value) => value === MERGE_KEY || typeof value === "symbol" && value.description === MERGE_KEY,
      default: "key",
      tag: "tag:yaml.org,2002:merge",
      test: /^<<$/,
      resolve: () => Object.assign(new Scalar.Scalar(Symbol(MERGE_KEY)), {
        addToJSMap: addMergeToJSMap
      }),
      stringify: () => MERGE_KEY
    };
    var isMergeKey = (ctx, key2) => (merge.identify(key2) || identity.isScalar(key2) && (!key2.type || key2.type === Scalar.Scalar.PLAIN) && merge.identify(key2.value)) && ctx?.doc.schema.tags.some((tag) => tag.tag === merge.tag && tag.default);
    function addMergeToJSMap(ctx, map, value) {
      const source = resolveAliasValue(ctx, value);
      if (identity.isSeq(source))
        for (const it of source.items)
          mergeValue(ctx, map, it);
      else if (Array.isArray(source))
        for (const it of source)
          mergeValue(ctx, map, it);
      else
        mergeValue(ctx, map, source);
    }
    function mergeValue(ctx, map, value) {
      const source = resolveAliasValue(ctx, value);
      if (!identity.isMap(source))
        throw new Error("Merge sources must be maps or map aliases");
      const srcMap = source.toJSON(null, ctx, Map);
      for (const [key2, value2] of srcMap) {
        if (map instanceof Map) {
          if (!map.has(key2))
            map.set(key2, value2);
        } else if (map instanceof Set) {
          map.add(key2);
        } else if (!Object.prototype.hasOwnProperty.call(map, key2)) {
          Object.defineProperty(map, key2, {
            value: value2,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
      return map;
    }
    function resolveAliasValue(ctx, value) {
      return ctx && identity.isAlias(value) ? value.resolve(ctx.doc, ctx) : value;
    }
    exports.addMergeToJSMap = addMergeToJSMap;
    exports.isMergeKey = isMergeKey;
    exports.merge = merge;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/addPairToJSMap.js
var require_addPairToJSMap = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/addPairToJSMap.js"(exports) {
    "use strict";
    var log = require_log();
    var merge = require_merge();
    var stringify = require_stringify();
    var identity = require_identity();
    var toJS = require_toJS();
    function addPairToJSMap(ctx, map, { key: key2, value }) {
      if (identity.isNode(key2) && key2.addToJSMap)
        key2.addToJSMap(ctx, map, value);
      else if (merge.isMergeKey(ctx, key2))
        merge.addMergeToJSMap(ctx, map, value);
      else {
        const jsKey = toJS.toJS(key2, "", ctx);
        if (map instanceof Map) {
          map.set(jsKey, toJS.toJS(value, jsKey, ctx));
        } else if (map instanceof Set) {
          map.add(jsKey);
        } else {
          const stringKey = stringifyKey(key2, jsKey, ctx);
          const jsValue = toJS.toJS(value, stringKey, ctx);
          if (stringKey in map)
            Object.defineProperty(map, stringKey, {
              value: jsValue,
              writable: true,
              enumerable: true,
              configurable: true
            });
          else
            map[stringKey] = jsValue;
        }
      }
      return map;
    }
    function stringifyKey(key2, jsKey, ctx) {
      if (jsKey === null)
        return "";
      if (typeof jsKey !== "object")
        return String(jsKey);
      if (identity.isNode(key2) && ctx?.doc) {
        const strCtx = stringify.createStringifyContext(ctx.doc, {});
        strCtx.anchors = /* @__PURE__ */ new Set();
        for (const node of ctx.anchors.keys())
          strCtx.anchors.add(node.anchor);
        strCtx.inFlow = true;
        strCtx.inStringifyKey = true;
        const strKey = key2.toString(strCtx);
        if (!ctx.mapKeyWarned) {
          let jsonStr = JSON.stringify(strKey);
          if (jsonStr.length > 40)
            jsonStr = jsonStr.substring(0, 36) + '..."';
          log.warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
          ctx.mapKeyWarned = true;
        }
        return strKey;
      }
      return JSON.stringify(jsKey);
    }
    exports.addPairToJSMap = addPairToJSMap;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/Pair.js
var require_Pair = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/Pair.js"(exports) {
    "use strict";
    var createNode = require_createNode();
    var stringifyPair = require_stringifyPair();
    var addPairToJSMap = require_addPairToJSMap();
    var identity = require_identity();
    function createPair(key2, value, ctx) {
      const k = createNode.createNode(key2, void 0, ctx);
      const v = createNode.createNode(value, void 0, ctx);
      return new Pair(k, v);
    }
    var Pair = class _Pair {
      constructor(key2, value = null) {
        Object.defineProperty(this, identity.NODE_TYPE, { value: identity.PAIR });
        this.key = key2;
        this.value = value;
      }
      clone(schema) {
        let { key: key2, value } = this;
        if (identity.isNode(key2))
          key2 = key2.clone(schema);
        if (identity.isNode(value))
          value = value.clone(schema);
        return new _Pair(key2, value);
      }
      toJSON(_, ctx) {
        const pair = ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
        return addPairToJSMap.addPairToJSMap(ctx, pair, this);
      }
      toString(ctx, onComment, onChompKeep) {
        return ctx?.doc ? stringifyPair.stringifyPair(this, ctx, onComment, onChompKeep) : JSON.stringify(this);
      }
    };
    exports.Pair = Pair;
    exports.createPair = createPair;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyCollection.js
var require_stringifyCollection = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyCollection.js"(exports) {
    "use strict";
    var identity = require_identity();
    var stringify = require_stringify();
    var stringifyComment = require_stringifyComment();
    function stringifyCollection(collection, ctx, options) {
      const flow = ctx.inFlow ?? collection.flow;
      const stringify2 = flow ? stringifyFlowCollection : stringifyBlockCollection;
      return stringify2(collection, ctx, options);
    }
    function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
      const { indent, options: { commentString } } = ctx;
      const itemCtx = Object.assign({}, ctx, { indent: itemIndent, type: null });
      let chompKeep = false;
      const lines = [];
      for (let i = 0; i < items.length; ++i) {
        const item = items[i];
        let comment2 = null;
        if (identity.isNode(item)) {
          if (!chompKeep && item.spaceBefore)
            lines.push("");
          addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
          if (item.comment)
            comment2 = item.comment;
        } else if (identity.isPair(item)) {
          const ik = identity.isNode(item.key) ? item.key : null;
          if (ik) {
            if (!chompKeep && ik.spaceBefore)
              lines.push("");
            addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
          }
        }
        chompKeep = false;
        let str2 = stringify.stringify(item, itemCtx, () => comment2 = null, () => chompKeep = true);
        if (comment2)
          str2 += stringifyComment.lineComment(str2, itemIndent, commentString(comment2));
        if (chompKeep && comment2)
          chompKeep = false;
        lines.push(blockItemPrefix + str2);
      }
      let str;
      if (lines.length === 0) {
        str = flowChars.start + flowChars.end;
      } else {
        str = lines[0];
        for (let i = 1; i < lines.length; ++i) {
          const line = lines[i];
          str += line ? `
${indent}${line}` : "\n";
        }
      }
      if (comment) {
        str += "\n" + stringifyComment.indentComment(commentString(comment), indent);
        if (onComment)
          onComment();
      } else if (chompKeep && onChompKeep)
        onChompKeep();
      return str;
    }
    function stringifyFlowCollection({ items }, ctx, { flowChars, itemIndent }) {
      const { indent, indentStep, flowCollectionPadding: fcPadding, options: { commentString } } = ctx;
      itemIndent += indentStep;
      const itemCtx = Object.assign({}, ctx, {
        indent: itemIndent,
        inFlow: true,
        type: null
      });
      let reqNewline = false;
      let linesAtValue = 0;
      const lines = [];
      for (let i = 0; i < items.length; ++i) {
        const item = items[i];
        let comment = null;
        if (identity.isNode(item)) {
          if (item.spaceBefore)
            lines.push("");
          addCommentBefore(ctx, lines, item.commentBefore, false);
          if (item.comment)
            comment = item.comment;
        } else if (identity.isPair(item)) {
          const ik = identity.isNode(item.key) ? item.key : null;
          if (ik) {
            if (ik.spaceBefore)
              lines.push("");
            addCommentBefore(ctx, lines, ik.commentBefore, false);
            if (ik.comment)
              reqNewline = true;
          }
          const iv = identity.isNode(item.value) ? item.value : null;
          if (iv) {
            if (iv.comment)
              comment = iv.comment;
            if (iv.commentBefore)
              reqNewline = true;
          } else if (item.value == null && ik?.comment) {
            comment = ik.comment;
          }
        }
        if (comment)
          reqNewline = true;
        let str = stringify.stringify(item, itemCtx, () => comment = null);
        reqNewline || (reqNewline = lines.length > linesAtValue || str.includes("\n"));
        if (i < items.length - 1) {
          str += ",";
        } else if (ctx.options.trailingComma) {
          if (ctx.options.lineWidth > 0) {
            reqNewline || (reqNewline = lines.reduce((sum2, line) => sum2 + line.length + 2, 2) + (str.length + 2) > ctx.options.lineWidth);
          }
          if (reqNewline) {
            str += ",";
          }
        }
        if (comment)
          str += stringifyComment.lineComment(str, itemIndent, commentString(comment));
        lines.push(str);
        linesAtValue = lines.length;
      }
      const { start, end } = flowChars;
      if (lines.length === 0) {
        return start + end;
      } else {
        if (!reqNewline) {
          const len = lines.reduce((sum2, line) => sum2 + line.length + 2, 2);
          reqNewline = ctx.options.lineWidth > 0 && len > ctx.options.lineWidth;
        }
        if (reqNewline) {
          let str = start;
          for (const line of lines)
            str += line ? `
${indentStep}${indent}${line}` : "\n";
          return `${str}
${indent}${end}`;
        } else {
          return `${start}${fcPadding}${lines.join(" ")}${fcPadding}${end}`;
        }
      }
    }
    function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
      if (comment && chompKeep)
        comment = comment.replace(/^\n+/, "");
      if (comment) {
        const ic = stringifyComment.indentComment(commentString(comment), indent);
        lines.push(ic.trimStart());
      }
    }
    exports.stringifyCollection = stringifyCollection;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/YAMLMap.js
var require_YAMLMap = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/YAMLMap.js"(exports) {
    "use strict";
    var stringifyCollection = require_stringifyCollection();
    var addPairToJSMap = require_addPairToJSMap();
    var Collection = require_Collection();
    var identity = require_identity();
    var Pair = require_Pair();
    var Scalar = require_Scalar();
    function findPair(items, key2) {
      const k = identity.isScalar(key2) ? key2.value : key2;
      for (const it of items) {
        if (identity.isPair(it)) {
          if (it.key === key2 || it.key === k)
            return it;
          if (identity.isScalar(it.key) && it.key.value === k)
            return it;
        }
      }
      return void 0;
    }
    var YAMLMap = class extends Collection.Collection {
      static get tagName() {
        return "tag:yaml.org,2002:map";
      }
      constructor(schema) {
        super(identity.MAP, schema);
        this.items = [];
      }
      /**
       * A generic collection parsing method that can be extended
       * to other node classes that inherit from YAMLMap
       */
      static from(schema, obj, ctx) {
        const { keepUndefined, replacer } = ctx;
        const map = new this(schema);
        const add = (key2, value) => {
          if (typeof replacer === "function")
            value = replacer.call(obj, key2, value);
          else if (Array.isArray(replacer) && !replacer.includes(key2))
            return;
          if (value !== void 0 || keepUndefined)
            map.items.push(Pair.createPair(key2, value, ctx));
        };
        if (obj instanceof Map) {
          for (const [key2, value] of obj)
            add(key2, value);
        } else if (obj && typeof obj === "object") {
          for (const key2 of Object.keys(obj))
            add(key2, obj[key2]);
        }
        if (typeof schema.sortMapEntries === "function") {
          map.items.sort(schema.sortMapEntries);
        }
        return map;
      }
      /**
       * Adds a value to the collection.
       *
       * @param overwrite - If not set `true`, using a key that is already in the
       *   collection will throw. Otherwise, overwrites the previous value.
       */
      add(pair, overwrite) {
        let _pair;
        if (identity.isPair(pair))
          _pair = pair;
        else if (!pair || typeof pair !== "object" || !("key" in pair)) {
          _pair = new Pair.Pair(pair, pair?.value);
        } else
          _pair = new Pair.Pair(pair.key, pair.value);
        const prev = findPair(this.items, _pair.key);
        const sortEntries = this.schema?.sortMapEntries;
        if (prev) {
          if (!overwrite)
            throw new Error(`Key ${_pair.key} already set`);
          if (identity.isScalar(prev.value) && Scalar.isScalarValue(_pair.value))
            prev.value.value = _pair.value;
          else
            prev.value = _pair.value;
        } else if (sortEntries) {
          const i = this.items.findIndex((item) => sortEntries(_pair, item) < 0);
          if (i === -1)
            this.items.push(_pair);
          else
            this.items.splice(i, 0, _pair);
        } else {
          this.items.push(_pair);
        }
      }
      delete(key2) {
        const it = findPair(this.items, key2);
        if (!it)
          return false;
        const del = this.items.splice(this.items.indexOf(it), 1);
        return del.length > 0;
      }
      get(key2, keepScalar) {
        const it = findPair(this.items, key2);
        const node = it?.value;
        return (!keepScalar && identity.isScalar(node) ? node.value : node) ?? void 0;
      }
      has(key2) {
        return !!findPair(this.items, key2);
      }
      set(key2, value) {
        this.add(new Pair.Pair(key2, value), true);
      }
      /**
       * @param ctx - Conversion context, originally set in Document#toJS()
       * @param {Class} Type - If set, forces the returned collection type
       * @returns Instance of Type, Map, or Object
       */
      toJSON(_, ctx, Type) {
        const map = Type ? new Type() : ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
        if (ctx?.onCreate)
          ctx.onCreate(map);
        for (const item of this.items)
          addPairToJSMap.addPairToJSMap(ctx, map, item);
        return map;
      }
      toString(ctx, onComment, onChompKeep) {
        if (!ctx)
          return JSON.stringify(this);
        for (const item of this.items) {
          if (!identity.isPair(item))
            throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
        }
        if (!ctx.allNullValues && this.hasAllNullValues(false))
          ctx = Object.assign({}, ctx, { allNullValues: true });
        return stringifyCollection.stringifyCollection(this, ctx, {
          blockItemPrefix: "",
          flowChars: { start: "{", end: "}" },
          itemIndent: ctx.indent || "",
          onChompKeep,
          onComment
        });
      }
    };
    exports.YAMLMap = YAMLMap;
    exports.findPair = findPair;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/common/map.js
var require_map = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/common/map.js"(exports) {
    "use strict";
    var identity = require_identity();
    var YAMLMap = require_YAMLMap();
    var map = {
      collection: "map",
      default: true,
      nodeClass: YAMLMap.YAMLMap,
      tag: "tag:yaml.org,2002:map",
      resolve(map2, onError) {
        if (!identity.isMap(map2))
          onError("Expected a mapping for this tag");
        return map2;
      },
      createNode: (schema, obj, ctx) => YAMLMap.YAMLMap.from(schema, obj, ctx)
    };
    exports.map = map;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/YAMLSeq.js
var require_YAMLSeq = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/nodes/YAMLSeq.js"(exports) {
    "use strict";
    var createNode = require_createNode();
    var stringifyCollection = require_stringifyCollection();
    var Collection = require_Collection();
    var identity = require_identity();
    var Scalar = require_Scalar();
    var toJS = require_toJS();
    var YAMLSeq = class extends Collection.Collection {
      static get tagName() {
        return "tag:yaml.org,2002:seq";
      }
      constructor(schema) {
        super(identity.SEQ, schema);
        this.items = [];
      }
      add(value) {
        this.items.push(value);
      }
      /**
       * Removes a value from the collection.
       *
       * `key` must contain a representation of an integer for this to succeed.
       * It may be wrapped in a `Scalar`.
       *
       * @returns `true` if the item was found and removed.
       */
      delete(key2) {
        const idx = asItemIndex(key2);
        if (typeof idx !== "number")
          return false;
        const del = this.items.splice(idx, 1);
        return del.length > 0;
      }
      get(key2, keepScalar) {
        const idx = asItemIndex(key2);
        if (typeof idx !== "number")
          return void 0;
        const it = this.items[idx];
        return !keepScalar && identity.isScalar(it) ? it.value : it;
      }
      /**
       * Checks if the collection includes a value with the key `key`.
       *
       * `key` must contain a representation of an integer for this to succeed.
       * It may be wrapped in a `Scalar`.
       */
      has(key2) {
        const idx = asItemIndex(key2);
        return typeof idx === "number" && idx < this.items.length;
      }
      /**
       * Sets a value in this collection. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       *
       * If `key` does not contain a representation of an integer, this will throw.
       * It may be wrapped in a `Scalar`.
       */
      set(key2, value) {
        const idx = asItemIndex(key2);
        if (typeof idx !== "number")
          throw new Error(`Expected a valid index, not ${key2}.`);
        const prev = this.items[idx];
        if (identity.isScalar(prev) && Scalar.isScalarValue(value))
          prev.value = value;
        else
          this.items[idx] = value;
      }
      toJSON(_, ctx) {
        const seq = [];
        if (ctx?.onCreate)
          ctx.onCreate(seq);
        let i = 0;
        for (const item of this.items)
          seq.push(toJS.toJS(item, String(i++), ctx));
        return seq;
      }
      toString(ctx, onComment, onChompKeep) {
        if (!ctx)
          return JSON.stringify(this);
        return stringifyCollection.stringifyCollection(this, ctx, {
          blockItemPrefix: "- ",
          flowChars: { start: "[", end: "]" },
          itemIndent: (ctx.indent || "") + "  ",
          onChompKeep,
          onComment
        });
      }
      static from(schema, obj, ctx) {
        const { replacer } = ctx;
        const seq = new this(schema);
        if (obj && Symbol.iterator in Object(obj)) {
          let i = 0;
          for (let it of obj) {
            if (typeof replacer === "function") {
              const key2 = obj instanceof Set ? it : String(i++);
              it = replacer.call(obj, key2, it);
            }
            seq.items.push(createNode.createNode(it, void 0, ctx));
          }
        }
        return seq;
      }
    };
    function asItemIndex(key2) {
      let idx = identity.isScalar(key2) ? key2.value : key2;
      if (idx && typeof idx === "string")
        idx = Number(idx);
      return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 ? idx : null;
    }
    exports.YAMLSeq = YAMLSeq;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/common/seq.js
var require_seq = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/common/seq.js"(exports) {
    "use strict";
    var identity = require_identity();
    var YAMLSeq = require_YAMLSeq();
    var seq = {
      collection: "seq",
      default: true,
      nodeClass: YAMLSeq.YAMLSeq,
      tag: "tag:yaml.org,2002:seq",
      resolve(seq2, onError) {
        if (!identity.isSeq(seq2))
          onError("Expected a sequence for this tag");
        return seq2;
      },
      createNode: (schema, obj, ctx) => YAMLSeq.YAMLSeq.from(schema, obj, ctx)
    };
    exports.seq = seq;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/common/string.js
var require_string = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/common/string.js"(exports) {
    "use strict";
    var stringifyString = require_stringifyString();
    var string = {
      identify: (value) => typeof value === "string",
      default: true,
      tag: "tag:yaml.org,2002:str",
      resolve: (str) => str,
      stringify(item, ctx, onComment, onChompKeep) {
        ctx = Object.assign({ actualString: true }, ctx);
        return stringifyString.stringifyString(item, ctx, onComment, onChompKeep);
      }
    };
    exports.string = string;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/common/null.js
var require_null = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/common/null.js"(exports) {
    "use strict";
    var Scalar = require_Scalar();
    var nullTag = {
      identify: (value) => value == null,
      createNode: () => new Scalar.Scalar(null),
      default: true,
      tag: "tag:yaml.org,2002:null",
      test: /^(?:~|[Nn]ull|NULL)?$/,
      resolve: () => new Scalar.Scalar(null),
      stringify: ({ source }, ctx) => typeof source === "string" && nullTag.test.test(source) ? source : ctx.options.nullStr
    };
    exports.nullTag = nullTag;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/core/bool.js
var require_bool = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/core/bool.js"(exports) {
    "use strict";
    var Scalar = require_Scalar();
    var boolTag = {
      identify: (value) => typeof value === "boolean",
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
      resolve: (str) => new Scalar.Scalar(str[0] === "t" || str[0] === "T"),
      stringify({ source, value }, ctx) {
        if (source && boolTag.test.test(source)) {
          const sv = source[0] === "t" || source[0] === "T";
          if (value === sv)
            return source;
        }
        return value ? ctx.options.trueStr : ctx.options.falseStr;
      }
    };
    exports.boolTag = boolTag;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyNumber.js
var require_stringifyNumber = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyNumber.js"(exports) {
    "use strict";
    function stringifyNumber({ format, minFractionDigits, tag, value }) {
      if (typeof value === "bigint")
        return String(value);
      const num = typeof value === "number" ? value : Number(value);
      if (!isFinite(num))
        return isNaN(num) ? ".nan" : num < 0 ? "-.inf" : ".inf";
      let n = Object.is(value, -0) ? "-0" : JSON.stringify(value);
      if (!format && minFractionDigits && (!tag || tag === "tag:yaml.org,2002:float") && /^-?\d/.test(n) && !n.includes("e")) {
        let i = n.indexOf(".");
        if (i < 0) {
          i = n.length;
          n += ".";
        }
        let d = minFractionDigits - (n.length - i - 1);
        while (d-- > 0)
          n += "0";
      }
      return n;
    }
    exports.stringifyNumber = stringifyNumber;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/core/float.js
var require_float = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/core/float.js"(exports) {
    "use strict";
    var Scalar = require_Scalar();
    var stringifyNumber = require_stringifyNumber();
    var floatNaN = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
      resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
      stringify: stringifyNumber.stringifyNumber
    };
    var floatExp = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      format: "EXP",
      test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
      resolve: (str) => parseFloat(str),
      stringify(node) {
        const num = Number(node.value);
        return isFinite(num) ? num.toExponential() : stringifyNumber.stringifyNumber(node);
      }
    };
    var float = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
      resolve(str) {
        const node = new Scalar.Scalar(parseFloat(str));
        const dot = str.indexOf(".");
        if (dot !== -1 && str[str.length - 1] === "0")
          node.minFractionDigits = str.length - dot - 1;
        return node;
      },
      stringify: stringifyNumber.stringifyNumber
    };
    exports.float = float;
    exports.floatExp = floatExp;
    exports.floatNaN = floatNaN;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/core/int.js
var require_int = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/core/int.js"(exports) {
    "use strict";
    var stringifyNumber = require_stringifyNumber();
    var intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
    var intResolve = (str, offset, radix, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str.substring(offset), radix);
    function intStringify(node, radix, prefix) {
      const { value } = node;
      if (intIdentify(value) && value >= 0)
        return prefix + value.toString(radix);
      return stringifyNumber.stringifyNumber(node);
    }
    var intOct = {
      identify: (value) => intIdentify(value) && value >= 0,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "OCT",
      test: /^0o[0-7]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 2, 8, opt),
      stringify: (node) => intStringify(node, 8, "0o")
    };
    var int = {
      identify: intIdentify,
      default: true,
      tag: "tag:yaml.org,2002:int",
      test: /^[-+]?[0-9]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
      stringify: stringifyNumber.stringifyNumber
    };
    var intHex = {
      identify: (value) => intIdentify(value) && value >= 0,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "HEX",
      test: /^0x[0-9a-fA-F]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
      stringify: (node) => intStringify(node, 16, "0x")
    };
    exports.int = int;
    exports.intHex = intHex;
    exports.intOct = intOct;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/core/schema.js
var require_schema = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/core/schema.js"(exports) {
    "use strict";
    var map = require_map();
    var _null = require_null();
    var seq = require_seq();
    var string = require_string();
    var bool = require_bool();
    var float = require_float();
    var int = require_int();
    var schema = [
      map.map,
      seq.seq,
      string.string,
      _null.nullTag,
      bool.boolTag,
      int.intOct,
      int.int,
      int.intHex,
      float.floatNaN,
      float.floatExp,
      float.float
    ];
    exports.schema = schema;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/json/schema.js
var require_schema2 = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/json/schema.js"(exports) {
    "use strict";
    var Scalar = require_Scalar();
    var map = require_map();
    var seq = require_seq();
    function intIdentify(value) {
      return typeof value === "bigint" || Number.isInteger(value);
    }
    var stringifyJSON = ({ value }) => JSON.stringify(value);
    var jsonScalars = [
      {
        identify: (value) => typeof value === "string",
        default: true,
        tag: "tag:yaml.org,2002:str",
        resolve: (str) => str,
        stringify: stringifyJSON
      },
      {
        identify: (value) => value == null,
        createNode: () => new Scalar.Scalar(null),
        default: true,
        tag: "tag:yaml.org,2002:null",
        test: /^null$/,
        resolve: () => null,
        stringify: stringifyJSON
      },
      {
        identify: (value) => typeof value === "boolean",
        default: true,
        tag: "tag:yaml.org,2002:bool",
        test: /^true$|^false$/,
        resolve: (str) => str === "true",
        stringify: stringifyJSON
      },
      {
        identify: intIdentify,
        default: true,
        tag: "tag:yaml.org,2002:int",
        test: /^-?(?:0|[1-9][0-9]*)$/,
        resolve: (str, _onError, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str, 10),
        stringify: ({ value }) => intIdentify(value) ? value.toString() : JSON.stringify(value)
      },
      {
        identify: (value) => typeof value === "number",
        default: true,
        tag: "tag:yaml.org,2002:float",
        test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
        resolve: (str) => parseFloat(str),
        stringify: stringifyJSON
      }
    ];
    var jsonError = {
      default: true,
      tag: "",
      test: /^/,
      resolve(str, onError) {
        onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
        return str;
      }
    };
    var schema = [map.map, seq.seq].concat(jsonScalars, jsonError);
    exports.schema = schema;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/binary.js
var require_binary = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/binary.js"(exports) {
    "use strict";
    var node_buffer = __require("buffer");
    var Scalar = require_Scalar();
    var stringifyString = require_stringifyString();
    var binary = {
      identify: (value) => value instanceof Uint8Array,
      // Buffer inherits from Uint8Array
      default: false,
      tag: "tag:yaml.org,2002:binary",
      /**
       * Returns a Buffer in node and an Uint8Array in browsers
       *
       * To use the resulting buffer as an image, you'll want to do something like:
       *
       *   const blob = new Blob([buffer], { type: 'image/jpeg' })
       *   document.querySelector('#photo').src = URL.createObjectURL(blob)
       */
      resolve(src, onError) {
        if (typeof node_buffer.Buffer === "function") {
          return node_buffer.Buffer.from(src, "base64");
        } else if (typeof atob === "function") {
          const str = atob(src.replace(/[\n\r]/g, ""));
          const buffer = new Uint8Array(str.length);
          for (let i = 0; i < str.length; ++i)
            buffer[i] = str.charCodeAt(i);
          return buffer;
        } else {
          onError("This environment does not support reading binary tags; either Buffer or atob is required");
          return src;
        }
      },
      stringify({ comment, type, value }, ctx, onComment, onChompKeep) {
        if (!value)
          return "";
        const buf = value;
        let str;
        if (typeof node_buffer.Buffer === "function") {
          str = buf instanceof node_buffer.Buffer ? buf.toString("base64") : node_buffer.Buffer.from(buf.buffer).toString("base64");
        } else if (typeof btoa === "function") {
          let s = "";
          for (let i = 0; i < buf.length; ++i)
            s += String.fromCharCode(buf[i]);
          str = btoa(s);
        } else {
          throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
        }
        type ?? (type = Scalar.Scalar.BLOCK_LITERAL);
        if (type !== Scalar.Scalar.QUOTE_DOUBLE) {
          const lineWidth = Math.max(ctx.options.lineWidth - ctx.indent.length, ctx.options.minContentWidth);
          const n = Math.ceil(str.length / lineWidth);
          const lines = new Array(n);
          for (let i = 0, o = 0; i < n; ++i, o += lineWidth) {
            lines[i] = str.substr(o, lineWidth);
          }
          str = lines.join(type === Scalar.Scalar.BLOCK_LITERAL ? "\n" : " ");
        }
        return stringifyString.stringifyString({ comment, type, value: str }, ctx, onComment, onChompKeep);
      }
    };
    exports.binary = binary;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/pairs.js
var require_pairs = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/pairs.js"(exports) {
    "use strict";
    var identity = require_identity();
    var Pair = require_Pair();
    var Scalar = require_Scalar();
    var YAMLSeq = require_YAMLSeq();
    function resolvePairs(seq, onError) {
      if (identity.isSeq(seq)) {
        for (let i = 0; i < seq.items.length; ++i) {
          let item = seq.items[i];
          if (identity.isPair(item))
            continue;
          else if (identity.isMap(item)) {
            if (item.items.length > 1)
              onError("Each pair must have its own sequence indicator");
            const pair = item.items[0] || new Pair.Pair(new Scalar.Scalar(null));
            if (item.commentBefore)
              pair.key.commentBefore = pair.key.commentBefore ? `${item.commentBefore}
${pair.key.commentBefore}` : item.commentBefore;
            if (item.comment) {
              const cn = pair.value ?? pair.key;
              cn.comment = cn.comment ? `${item.comment}
${cn.comment}` : item.comment;
            }
            item = pair;
          }
          seq.items[i] = identity.isPair(item) ? item : new Pair.Pair(item);
        }
      } else
        onError("Expected a sequence for this tag");
      return seq;
    }
    function createPairs(schema, iterable, ctx) {
      const { replacer } = ctx;
      const pairs2 = new YAMLSeq.YAMLSeq(schema);
      pairs2.tag = "tag:yaml.org,2002:pairs";
      let i = 0;
      if (iterable && Symbol.iterator in Object(iterable))
        for (let it of iterable) {
          if (typeof replacer === "function")
            it = replacer.call(iterable, String(i++), it);
          let key2, value;
          if (Array.isArray(it)) {
            if (it.length === 2) {
              key2 = it[0];
              value = it[1];
            } else
              throw new TypeError(`Expected [key, value] tuple: ${it}`);
          } else if (it && it instanceof Object) {
            const keys = Object.keys(it);
            if (keys.length === 1) {
              key2 = keys[0];
              value = it[key2];
            } else {
              throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
            }
          } else {
            key2 = it;
          }
          pairs2.items.push(Pair.createPair(key2, value, ctx));
        }
      return pairs2;
    }
    var pairs = {
      collection: "seq",
      default: false,
      tag: "tag:yaml.org,2002:pairs",
      resolve: resolvePairs,
      createNode: createPairs
    };
    exports.createPairs = createPairs;
    exports.pairs = pairs;
    exports.resolvePairs = resolvePairs;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/omap.js
var require_omap = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/omap.js"(exports) {
    "use strict";
    var identity = require_identity();
    var toJS = require_toJS();
    var YAMLMap = require_YAMLMap();
    var YAMLSeq = require_YAMLSeq();
    var pairs = require_pairs();
    var YAMLOMap = class _YAMLOMap extends YAMLSeq.YAMLSeq {
      constructor() {
        super();
        this.add = YAMLMap.YAMLMap.prototype.add.bind(this);
        this.delete = YAMLMap.YAMLMap.prototype.delete.bind(this);
        this.get = YAMLMap.YAMLMap.prototype.get.bind(this);
        this.has = YAMLMap.YAMLMap.prototype.has.bind(this);
        this.set = YAMLMap.YAMLMap.prototype.set.bind(this);
        this.tag = _YAMLOMap.tag;
      }
      /**
       * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
       * but TypeScript won't allow widening the signature of a child method.
       */
      toJSON(_, ctx) {
        if (!ctx)
          return super.toJSON(_);
        const map = /* @__PURE__ */ new Map();
        if (ctx?.onCreate)
          ctx.onCreate(map);
        for (const pair of this.items) {
          let key2, value;
          if (identity.isPair(pair)) {
            key2 = toJS.toJS(pair.key, "", ctx);
            value = toJS.toJS(pair.value, key2, ctx);
          } else {
            key2 = toJS.toJS(pair, "", ctx);
          }
          if (map.has(key2))
            throw new Error("Ordered maps must not include duplicate keys");
          map.set(key2, value);
        }
        return map;
      }
      static from(schema, iterable, ctx) {
        const pairs$1 = pairs.createPairs(schema, iterable, ctx);
        const omap2 = new this();
        omap2.items = pairs$1.items;
        return omap2;
      }
    };
    YAMLOMap.tag = "tag:yaml.org,2002:omap";
    var omap = {
      collection: "seq",
      identify: (value) => value instanceof Map,
      nodeClass: YAMLOMap,
      default: false,
      tag: "tag:yaml.org,2002:omap",
      resolve(seq, onError) {
        const pairs$1 = pairs.resolvePairs(seq, onError);
        const seenKeys = [];
        for (const { key: key2 } of pairs$1.items) {
          if (identity.isScalar(key2)) {
            if (seenKeys.includes(key2.value)) {
              onError(`Ordered maps must not include duplicate keys: ${key2.value}`);
            } else {
              seenKeys.push(key2.value);
            }
          }
        }
        return Object.assign(new YAMLOMap(), pairs$1);
      },
      createNode: (schema, iterable, ctx) => YAMLOMap.from(schema, iterable, ctx)
    };
    exports.YAMLOMap = YAMLOMap;
    exports.omap = omap;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/bool.js
var require_bool2 = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/bool.js"(exports) {
    "use strict";
    var Scalar = require_Scalar();
    function boolStringify({ value, source }, ctx) {
      const boolObj = value ? trueTag : falseTag;
      if (source && boolObj.test.test(source))
        return source;
      return value ? ctx.options.trueStr : ctx.options.falseStr;
    }
    var trueTag = {
      identify: (value) => value === true,
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
      resolve: () => new Scalar.Scalar(true),
      stringify: boolStringify
    };
    var falseTag = {
      identify: (value) => value === false,
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
      resolve: () => new Scalar.Scalar(false),
      stringify: boolStringify
    };
    exports.falseTag = falseTag;
    exports.trueTag = trueTag;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/float.js
var require_float2 = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/float.js"(exports) {
    "use strict";
    var Scalar = require_Scalar();
    var stringifyNumber = require_stringifyNumber();
    var floatNaN = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
      resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
      stringify: stringifyNumber.stringifyNumber
    };
    var floatExp = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      format: "EXP",
      test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
      resolve: (str) => parseFloat(str.replace(/_/g, "")),
      stringify(node) {
        const num = Number(node.value);
        return isFinite(num) ? num.toExponential() : stringifyNumber.stringifyNumber(node);
      }
    };
    var float = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
      resolve(str) {
        const node = new Scalar.Scalar(parseFloat(str.replace(/_/g, "")));
        const dot = str.indexOf(".");
        if (dot !== -1) {
          const f = str.substring(dot + 1).replace(/_/g, "");
          if (f[f.length - 1] === "0")
            node.minFractionDigits = f.length;
        }
        return node;
      },
      stringify: stringifyNumber.stringifyNumber
    };
    exports.float = float;
    exports.floatExp = floatExp;
    exports.floatNaN = floatNaN;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/int.js
var require_int2 = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/int.js"(exports) {
    "use strict";
    var stringifyNumber = require_stringifyNumber();
    var intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
    function intResolve(str, offset, radix, { intAsBigInt }) {
      const sign = str[0];
      if (sign === "-" || sign === "+")
        offset += 1;
      str = str.substring(offset).replace(/_/g, "");
      if (intAsBigInt) {
        switch (radix) {
          case 2:
            str = `0b${str}`;
            break;
          case 8:
            str = `0o${str}`;
            break;
          case 16:
            str = `0x${str}`;
            break;
        }
        const n2 = BigInt(str);
        return sign === "-" ? BigInt(-1) * n2 : n2;
      }
      const n = parseInt(str, radix);
      return sign === "-" ? -1 * n : n;
    }
    function intStringify(node, radix, prefix) {
      const { value } = node;
      if (intIdentify(value)) {
        const str = value.toString(radix);
        return value < 0 ? "-" + prefix + str.substr(1) : prefix + str;
      }
      return stringifyNumber.stringifyNumber(node);
    }
    var intBin = {
      identify: intIdentify,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "BIN",
      test: /^[-+]?0b[0-1_]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 2, 2, opt),
      stringify: (node) => intStringify(node, 2, "0b")
    };
    var intOct = {
      identify: intIdentify,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "OCT",
      test: /^[-+]?0[0-7_]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 1, 8, opt),
      stringify: (node) => intStringify(node, 8, "0")
    };
    var int = {
      identify: intIdentify,
      default: true,
      tag: "tag:yaml.org,2002:int",
      test: /^[-+]?[0-9][0-9_]*$/,
      resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
      stringify: stringifyNumber.stringifyNumber
    };
    var intHex = {
      identify: intIdentify,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "HEX",
      test: /^[-+]?0x[0-9a-fA-F_]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
      stringify: (node) => intStringify(node, 16, "0x")
    };
    exports.int = int;
    exports.intBin = intBin;
    exports.intHex = intHex;
    exports.intOct = intOct;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/set.js
var require_set = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/set.js"(exports) {
    "use strict";
    var identity = require_identity();
    var Pair = require_Pair();
    var YAMLMap = require_YAMLMap();
    var YAMLSet = class _YAMLSet extends YAMLMap.YAMLMap {
      constructor(schema) {
        super(schema);
        this.tag = _YAMLSet.tag;
      }
      add(key2) {
        let pair;
        if (identity.isPair(key2))
          pair = key2;
        else if (key2 && typeof key2 === "object" && "key" in key2 && "value" in key2 && key2.value === null)
          pair = new Pair.Pair(key2.key, null);
        else
          pair = new Pair.Pair(key2, null);
        const prev = YAMLMap.findPair(this.items, pair.key);
        if (!prev)
          this.items.push(pair);
      }
      /**
       * If `keepPair` is `true`, returns the Pair matching `key`.
       * Otherwise, returns the value of that Pair's key.
       */
      get(key2, keepPair) {
        const pair = YAMLMap.findPair(this.items, key2);
        return !keepPair && identity.isPair(pair) ? identity.isScalar(pair.key) ? pair.key.value : pair.key : pair;
      }
      set(key2, value) {
        if (typeof value !== "boolean")
          throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
        const prev = YAMLMap.findPair(this.items, key2);
        if (prev && !value) {
          this.items.splice(this.items.indexOf(prev), 1);
        } else if (!prev && value) {
          this.items.push(new Pair.Pair(key2));
        }
      }
      toJSON(_, ctx) {
        return super.toJSON(_, ctx, Set);
      }
      toString(ctx, onComment, onChompKeep) {
        if (!ctx)
          return JSON.stringify(this);
        if (this.hasAllNullValues(true))
          return super.toString(Object.assign({}, ctx, { allNullValues: true }), onComment, onChompKeep);
        else
          throw new Error("Set items must all have null values");
      }
      static from(schema, iterable, ctx) {
        const { replacer } = ctx;
        const set2 = new this(schema);
        if (iterable && Symbol.iterator in Object(iterable))
          for (let value of iterable) {
            if (typeof replacer === "function")
              value = replacer.call(iterable, value, value);
            set2.items.push(Pair.createPair(value, null, ctx));
          }
        return set2;
      }
    };
    YAMLSet.tag = "tag:yaml.org,2002:set";
    var set = {
      collection: "map",
      identify: (value) => value instanceof Set,
      nodeClass: YAMLSet,
      default: false,
      tag: "tag:yaml.org,2002:set",
      createNode: (schema, iterable, ctx) => YAMLSet.from(schema, iterable, ctx),
      resolve(map, onError) {
        if (identity.isMap(map)) {
          if (map.hasAllNullValues(true))
            return Object.assign(new YAMLSet(), map);
          else
            onError("Set items must all have null values");
        } else
          onError("Expected a mapping for this tag");
        return map;
      }
    };
    exports.YAMLSet = YAMLSet;
    exports.set = set;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/timestamp.js
var require_timestamp = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/timestamp.js"(exports) {
    "use strict";
    var stringifyNumber = require_stringifyNumber();
    function parseSexagesimal(str, asBigInt) {
      const sign = str[0];
      const parts = sign === "-" || sign === "+" ? str.substring(1) : str;
      const num = (n) => asBigInt ? BigInt(n) : Number(n);
      const res = parts.replace(/_/g, "").split(":").reduce((res2, p) => res2 * num(60) + num(p), num(0));
      return sign === "-" ? num(-1) * res : res;
    }
    function stringifySexagesimal(node) {
      let { value } = node;
      let num = (n) => n;
      if (typeof value === "bigint")
        num = (n) => BigInt(n);
      else if (isNaN(value) || !isFinite(value))
        return stringifyNumber.stringifyNumber(node);
      let sign = "";
      if (value < 0) {
        sign = "-";
        value *= num(-1);
      }
      const _60 = num(60);
      const parts = [value % _60];
      if (value < 60) {
        parts.unshift(0);
      } else {
        value = (value - parts[0]) / _60;
        parts.unshift(value % _60);
        if (value >= 60) {
          value = (value - parts[0]) / _60;
          parts.unshift(value);
        }
      }
      return sign + parts.map((n) => String(n).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
    }
    var intTime = {
      identify: (value) => typeof value === "bigint" || Number.isInteger(value),
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "TIME",
      test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
      resolve: (str, _onError, { intAsBigInt }) => parseSexagesimal(str, intAsBigInt),
      stringify: stringifySexagesimal
    };
    var floatTime = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      format: "TIME",
      test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
      resolve: (str) => parseSexagesimal(str, false),
      stringify: stringifySexagesimal
    };
    var timestamp = {
      identify: (value) => value instanceof Date,
      default: true,
      tag: "tag:yaml.org,2002:timestamp",
      // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
      // may be omitted altogether, resulting in a date format. In such a case, the time part is
      // assumed to be 00:00:00Z (start of day, UTC).
      test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
      resolve(str) {
        const match = str.match(timestamp.test);
        if (!match)
          throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
        const [, year, month, day, hour, minute, second] = match.map(Number);
        const millisec = match[7] ? Number((match[7] + "00").substr(1, 3)) : 0;
        let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec);
        const tz = match[8];
        if (tz && tz !== "Z") {
          let d = parseSexagesimal(tz, false);
          if (Math.abs(d) < 30)
            d *= 60;
          date -= 6e4 * d;
        }
        return new Date(date);
      },
      stringify: ({ value }) => value?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
    };
    exports.floatTime = floatTime;
    exports.intTime = intTime;
    exports.timestamp = timestamp;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/schema.js
var require_schema3 = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/yaml-1.1/schema.js"(exports) {
    "use strict";
    var map = require_map();
    var _null = require_null();
    var seq = require_seq();
    var string = require_string();
    var binary = require_binary();
    var bool = require_bool2();
    var float = require_float2();
    var int = require_int2();
    var merge = require_merge();
    var omap = require_omap();
    var pairs = require_pairs();
    var set = require_set();
    var timestamp = require_timestamp();
    var schema = [
      map.map,
      seq.seq,
      string.string,
      _null.nullTag,
      bool.trueTag,
      bool.falseTag,
      int.intBin,
      int.intOct,
      int.int,
      int.intHex,
      float.floatNaN,
      float.floatExp,
      float.float,
      binary.binary,
      merge.merge,
      omap.omap,
      pairs.pairs,
      set.set,
      timestamp.intTime,
      timestamp.floatTime,
      timestamp.timestamp
    ];
    exports.schema = schema;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/tags.js
var require_tags = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/tags.js"(exports) {
    "use strict";
    var map = require_map();
    var _null = require_null();
    var seq = require_seq();
    var string = require_string();
    var bool = require_bool();
    var float = require_float();
    var int = require_int();
    var schema = require_schema();
    var schema$1 = require_schema2();
    var binary = require_binary();
    var merge = require_merge();
    var omap = require_omap();
    var pairs = require_pairs();
    var schema$2 = require_schema3();
    var set = require_set();
    var timestamp = require_timestamp();
    var schemas = /* @__PURE__ */ new Map([
      ["core", schema.schema],
      ["failsafe", [map.map, seq.seq, string.string]],
      ["json", schema$1.schema],
      ["yaml11", schema$2.schema],
      ["yaml-1.1", schema$2.schema]
    ]);
    var tagsByName = {
      binary: binary.binary,
      bool: bool.boolTag,
      float: float.float,
      floatExp: float.floatExp,
      floatNaN: float.floatNaN,
      floatTime: timestamp.floatTime,
      int: int.int,
      intHex: int.intHex,
      intOct: int.intOct,
      intTime: timestamp.intTime,
      map: map.map,
      merge: merge.merge,
      null: _null.nullTag,
      omap: omap.omap,
      pairs: pairs.pairs,
      seq: seq.seq,
      set: set.set,
      timestamp: timestamp.timestamp
    };
    var coreKnownTags = {
      "tag:yaml.org,2002:binary": binary.binary,
      "tag:yaml.org,2002:merge": merge.merge,
      "tag:yaml.org,2002:omap": omap.omap,
      "tag:yaml.org,2002:pairs": pairs.pairs,
      "tag:yaml.org,2002:set": set.set,
      "tag:yaml.org,2002:timestamp": timestamp.timestamp
    };
    function getTags(customTags, schemaName, addMergeTag) {
      const schemaTags = schemas.get(schemaName);
      if (schemaTags && !customTags) {
        return addMergeTag && !schemaTags.includes(merge.merge) ? schemaTags.concat(merge.merge) : schemaTags.slice();
      }
      let tags = schemaTags;
      if (!tags) {
        if (Array.isArray(customTags))
          tags = [];
        else {
          const keys = Array.from(schemas.keys()).filter((key2) => key2 !== "yaml11").map((key2) => JSON.stringify(key2)).join(", ");
          throw new Error(`Unknown schema "${schemaName}"; use one of ${keys} or define customTags array`);
        }
      }
      if (Array.isArray(customTags)) {
        for (const tag of customTags)
          tags = tags.concat(tag);
      } else if (typeof customTags === "function") {
        tags = customTags(tags.slice());
      }
      if (addMergeTag)
        tags = tags.concat(merge.merge);
      return tags.reduce((tags2, tag) => {
        const tagObj = typeof tag === "string" ? tagsByName[tag] : tag;
        if (!tagObj) {
          const tagName = JSON.stringify(tag);
          const keys = Object.keys(tagsByName).map((key2) => JSON.stringify(key2)).join(", ");
          throw new Error(`Unknown custom tag ${tagName}; use one of ${keys}`);
        }
        if (!tags2.includes(tagObj))
          tags2.push(tagObj);
        return tags2;
      }, []);
    }
    exports.coreKnownTags = coreKnownTags;
    exports.getTags = getTags;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/Schema.js
var require_Schema = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/schema/Schema.js"(exports) {
    "use strict";
    var identity = require_identity();
    var map = require_map();
    var seq = require_seq();
    var string = require_string();
    var tags = require_tags();
    var sortMapEntriesByKey = (a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
    var Schema = class _Schema {
      constructor({ compat, customTags, merge, resolveKnownTags, schema, sortMapEntries, toStringDefaults }) {
        this.compat = Array.isArray(compat) ? tags.getTags(compat, "compat") : compat ? tags.getTags(null, compat) : null;
        this.name = typeof schema === "string" && schema || "core";
        this.knownTags = resolveKnownTags ? tags.coreKnownTags : {};
        this.tags = tags.getTags(customTags, this.name, merge);
        this.toStringOptions = toStringDefaults ?? null;
        Object.defineProperty(this, identity.MAP, { value: map.map });
        Object.defineProperty(this, identity.SCALAR, { value: string.string });
        Object.defineProperty(this, identity.SEQ, { value: seq.seq });
        this.sortMapEntries = typeof sortMapEntries === "function" ? sortMapEntries : sortMapEntries === true ? sortMapEntriesByKey : null;
      }
      clone() {
        const copy = Object.create(_Schema.prototype, Object.getOwnPropertyDescriptors(this));
        copy.tags = this.tags.slice();
        return copy;
      }
    };
    exports.Schema = Schema;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyDocument.js
var require_stringifyDocument = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/stringify/stringifyDocument.js"(exports) {
    "use strict";
    var identity = require_identity();
    var stringify = require_stringify();
    var stringifyComment = require_stringifyComment();
    function stringifyDocument(doc, options) {
      const lines = [];
      let hasDirectives = options.directives === true;
      if (options.directives !== false && doc.directives) {
        const dir = doc.directives.toString(doc);
        if (dir) {
          lines.push(dir);
          hasDirectives = true;
        } else if (doc.directives.docStart)
          hasDirectives = true;
      }
      if (hasDirectives)
        lines.push("---");
      const ctx = stringify.createStringifyContext(doc, options);
      const { commentString } = ctx.options;
      if (doc.commentBefore) {
        if (lines.length !== 1)
          lines.unshift("");
        const cs = commentString(doc.commentBefore);
        lines.unshift(stringifyComment.indentComment(cs, ""));
      }
      let chompKeep = false;
      let contentComment = null;
      if (doc.contents) {
        if (identity.isNode(doc.contents)) {
          if (doc.contents.spaceBefore && hasDirectives)
            lines.push("");
          if (doc.contents.commentBefore) {
            const cs = commentString(doc.contents.commentBefore);
            lines.push(stringifyComment.indentComment(cs, ""));
          }
          ctx.forceBlockIndent = !!doc.comment;
          contentComment = doc.contents.comment;
        }
        const onChompKeep = contentComment ? void 0 : () => chompKeep = true;
        let body = stringify.stringify(doc.contents, ctx, () => contentComment = null, onChompKeep);
        if (contentComment)
          body += stringifyComment.lineComment(body, "", commentString(contentComment));
        if ((body[0] === "|" || body[0] === ">") && lines[lines.length - 1] === "---") {
          lines[lines.length - 1] = `--- ${body}`;
        } else
          lines.push(body);
      } else {
        lines.push(stringify.stringify(doc.contents, ctx));
      }
      if (doc.directives?.docEnd) {
        if (doc.comment) {
          const cs = commentString(doc.comment);
          if (cs.includes("\n")) {
            lines.push("...");
            lines.push(stringifyComment.indentComment(cs, ""));
          } else {
            lines.push(`... ${cs}`);
          }
        } else {
          lines.push("...");
        }
      } else {
        let dc = doc.comment;
        if (dc && chompKeep)
          dc = dc.replace(/^\n+/, "");
        if (dc) {
          if ((!chompKeep || contentComment) && lines[lines.length - 1] !== "")
            lines.push("");
          lines.push(stringifyComment.indentComment(commentString(dc), ""));
        }
      }
      return lines.join("\n") + "\n";
    }
    exports.stringifyDocument = stringifyDocument;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/doc/Document.js
var require_Document = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/doc/Document.js"(exports) {
    "use strict";
    var Alias = require_Alias();
    var Collection = require_Collection();
    var identity = require_identity();
    var Pair = require_Pair();
    var toJS = require_toJS();
    var Schema = require_Schema();
    var stringifyDocument = require_stringifyDocument();
    var anchors = require_anchors();
    var applyReviver = require_applyReviver();
    var createNode = require_createNode();
    var directives = require_directives();
    var Document = class _Document {
      constructor(value, replacer, options) {
        this.commentBefore = null;
        this.comment = null;
        this.errors = [];
        this.warnings = [];
        Object.defineProperty(this, identity.NODE_TYPE, { value: identity.DOC });
        let _replacer = null;
        if (typeof replacer === "function" || Array.isArray(replacer)) {
          _replacer = replacer;
        } else if (options === void 0 && replacer) {
          options = replacer;
          replacer = void 0;
        }
        const opt = Object.assign({
          intAsBigInt: false,
          keepSourceTokens: false,
          logLevel: "warn",
          prettyErrors: true,
          strict: true,
          stringKeys: false,
          uniqueKeys: true,
          version: "1.2"
        }, options);
        this.options = opt;
        let { version } = opt;
        if (options?._directives) {
          this.directives = options._directives.atDocument();
          if (this.directives.yaml.explicit)
            version = this.directives.yaml.version;
        } else
          this.directives = new directives.Directives({ version });
        this.setSchema(version, options);
        this.contents = value === void 0 ? null : this.createNode(value, _replacer, options);
      }
      /**
       * Create a deep copy of this Document and its contents.
       *
       * Custom Node values that inherit from `Object` still refer to their original instances.
       */
      clone() {
        const copy = Object.create(_Document.prototype, {
          [identity.NODE_TYPE]: { value: identity.DOC }
        });
        copy.commentBefore = this.commentBefore;
        copy.comment = this.comment;
        copy.errors = this.errors.slice();
        copy.warnings = this.warnings.slice();
        copy.options = Object.assign({}, this.options);
        if (this.directives)
          copy.directives = this.directives.clone();
        copy.schema = this.schema.clone();
        copy.contents = identity.isNode(this.contents) ? this.contents.clone(copy.schema) : this.contents;
        if (this.range)
          copy.range = this.range.slice();
        return copy;
      }
      /** Adds a value to the document. */
      add(value) {
        if (assertCollection(this.contents))
          this.contents.add(value);
      }
      /** Adds a value to the document. */
      addIn(path, value) {
        if (assertCollection(this.contents))
          this.contents.addIn(path, value);
      }
      /**
       * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
       *
       * If `node` already has an anchor, `name` is ignored.
       * Otherwise, the `node.anchor` value will be set to `name`,
       * or if an anchor with that name is already present in the document,
       * `name` will be used as a prefix for a new unique anchor.
       * If `name` is undefined, the generated anchor will use 'a' as a prefix.
       */
      createAlias(node, name) {
        if (!node.anchor) {
          const prev = anchors.anchorNames(this);
          node.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          !name || prev.has(name) ? anchors.findNewAnchor(name || "a", prev) : name;
        }
        return new Alias.Alias(node.anchor);
      }
      createNode(value, replacer, options) {
        let _replacer = void 0;
        if (typeof replacer === "function") {
          value = replacer.call({ "": value }, "", value);
          _replacer = replacer;
        } else if (Array.isArray(replacer)) {
          const keyToStr = (v) => typeof v === "number" || v instanceof String || v instanceof Number;
          const asStr = replacer.filter(keyToStr).map(String);
          if (asStr.length > 0)
            replacer = replacer.concat(asStr);
          _replacer = replacer;
        } else if (options === void 0 && replacer) {
          options = replacer;
          replacer = void 0;
        }
        const { aliasDuplicateObjects, anchorPrefix, flow, keepUndefined, onTagObj, tag } = options ?? {};
        const { onAnchor, setAnchors, sourceObjects } = anchors.createNodeAnchors(
          this,
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          anchorPrefix || "a"
        );
        const ctx = {
          aliasDuplicateObjects: aliasDuplicateObjects ?? true,
          keepUndefined: keepUndefined ?? false,
          onAnchor,
          onTagObj,
          replacer: _replacer,
          schema: this.schema,
          sourceObjects
        };
        const node = createNode.createNode(value, tag, ctx);
        if (flow && identity.isCollection(node))
          node.flow = true;
        setAnchors();
        return node;
      }
      /**
       * Convert a key and a value into a `Pair` using the current schema,
       * recursively wrapping all values as `Scalar` or `Collection` nodes.
       */
      createPair(key2, value, options = {}) {
        const k = this.createNode(key2, null, options);
        const v = this.createNode(value, null, options);
        return new Pair.Pair(k, v);
      }
      /**
       * Removes a value from the document.
       * @returns `true` if the item was found and removed.
       */
      delete(key2) {
        return assertCollection(this.contents) ? this.contents.delete(key2) : false;
      }
      /**
       * Removes a value from the document.
       * @returns `true` if the item was found and removed.
       */
      deleteIn(path) {
        if (Collection.isEmptyPath(path)) {
          if (this.contents == null)
            return false;
          this.contents = null;
          return true;
        }
        return assertCollection(this.contents) ? this.contents.deleteIn(path) : false;
      }
      /**
       * Returns item at `key`, or `undefined` if not found. By default unwraps
       * scalar values from their surrounding node; to disable set `keepScalar` to
       * `true` (collections are always returned intact).
       */
      get(key2, keepScalar) {
        return identity.isCollection(this.contents) ? this.contents.get(key2, keepScalar) : void 0;
      }
      /**
       * Returns item at `path`, or `undefined` if not found. By default unwraps
       * scalar values from their surrounding node; to disable set `keepScalar` to
       * `true` (collections are always returned intact).
       */
      getIn(path, keepScalar) {
        if (Collection.isEmptyPath(path))
          return !keepScalar && identity.isScalar(this.contents) ? this.contents.value : this.contents;
        return identity.isCollection(this.contents) ? this.contents.getIn(path, keepScalar) : void 0;
      }
      /**
       * Checks if the document includes a value with the key `key`.
       */
      has(key2) {
        return identity.isCollection(this.contents) ? this.contents.has(key2) : false;
      }
      /**
       * Checks if the document includes a value at `path`.
       */
      hasIn(path) {
        if (Collection.isEmptyPath(path))
          return this.contents !== void 0;
        return identity.isCollection(this.contents) ? this.contents.hasIn(path) : false;
      }
      /**
       * Sets a value in this document. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       */
      set(key2, value) {
        if (this.contents == null) {
          this.contents = Collection.collectionFromPath(this.schema, [key2], value);
        } else if (assertCollection(this.contents)) {
          this.contents.set(key2, value);
        }
      }
      /**
       * Sets a value in this document. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       */
      setIn(path, value) {
        if (Collection.isEmptyPath(path)) {
          this.contents = value;
        } else if (this.contents == null) {
          this.contents = Collection.collectionFromPath(this.schema, Array.from(path), value);
        } else if (assertCollection(this.contents)) {
          this.contents.setIn(path, value);
        }
      }
      /**
       * Change the YAML version and schema used by the document.
       * A `null` version disables support for directives, explicit tags, anchors, and aliases.
       * It also requires the `schema` option to be given as a `Schema` instance value.
       *
       * Overrides all previously set schema options.
       */
      setSchema(version, options = {}) {
        if (typeof version === "number")
          version = String(version);
        let opt;
        switch (version) {
          case "1.1":
            if (this.directives)
              this.directives.yaml.version = "1.1";
            else
              this.directives = new directives.Directives({ version: "1.1" });
            opt = { resolveKnownTags: false, schema: "yaml-1.1" };
            break;
          case "1.2":
          case "next":
            if (this.directives)
              this.directives.yaml.version = version;
            else
              this.directives = new directives.Directives({ version });
            opt = { resolveKnownTags: true, schema: "core" };
            break;
          case null:
            if (this.directives)
              delete this.directives;
            opt = null;
            break;
          default: {
            const sv = JSON.stringify(version);
            throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${sv}`);
          }
        }
        if (options.schema instanceof Object)
          this.schema = options.schema;
        else if (opt)
          this.schema = new Schema.Schema(Object.assign(opt, options));
        else
          throw new Error(`With a null YAML version, the { schema: Schema } option is required`);
      }
      // json & jsonArg are only used from toJSON()
      toJS({ json, jsonArg, mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
        const ctx = {
          anchors: /* @__PURE__ */ new Map(),
          doc: this,
          keep: !json,
          mapAsMap: mapAsMap === true,
          mapKeyWarned: false,
          maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
        };
        const res = toJS.toJS(this.contents, jsonArg ?? "", ctx);
        if (typeof onAnchor === "function")
          for (const { count, res: res2 } of ctx.anchors.values())
            onAnchor(res2, count);
        return typeof reviver === "function" ? applyReviver.applyReviver(reviver, { "": res }, "", res) : res;
      }
      /**
       * A JSON representation of the document `contents`.
       *
       * @param jsonArg Used by `JSON.stringify` to indicate the array index or
       *   property name.
       */
      toJSON(jsonArg, onAnchor) {
        return this.toJS({ json: true, jsonArg, mapAsMap: false, onAnchor });
      }
      /** A YAML representation of the document. */
      toString(options = {}) {
        if (this.errors.length > 0)
          throw new Error("Document with errors cannot be stringified");
        if ("indent" in options && (!Number.isInteger(options.indent) || Number(options.indent) <= 0)) {
          const s = JSON.stringify(options.indent);
          throw new Error(`"indent" option must be a positive integer, not ${s}`);
        }
        return stringifyDocument.stringifyDocument(this, options);
      }
    };
    function assertCollection(contents) {
      if (identity.isCollection(contents))
        return true;
      throw new Error("Expected a YAML collection as document contents");
    }
    exports.Document = Document;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/errors.js
var require_errors = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/errors.js"(exports) {
    "use strict";
    var YAMLError = class extends Error {
      constructor(name, pos, code, message) {
        super();
        this.name = name;
        this.code = code;
        this.message = message;
        this.pos = pos;
      }
    };
    var YAMLParseError = class extends YAMLError {
      constructor(pos, code, message) {
        super("YAMLParseError", pos, code, message);
      }
    };
    var YAMLWarning = class extends YAMLError {
      constructor(pos, code, message) {
        super("YAMLWarning", pos, code, message);
      }
    };
    var prettifyError = (src, lc) => (error) => {
      if (error.pos[0] === -1)
        return;
      error.linePos = error.pos.map((pos) => lc.linePos(pos));
      const { line, col } = error.linePos[0];
      error.message += ` at line ${line}, column ${col}`;
      let ci = col - 1;
      let lineStr = src.substring(lc.lineStarts[line - 1], lc.lineStarts[line]).replace(/[\n\r]+$/, "");
      if (ci >= 60 && lineStr.length > 80) {
        const trimStart = Math.min(ci - 39, lineStr.length - 79);
        lineStr = "\u2026" + lineStr.substring(trimStart);
        ci -= trimStart - 1;
      }
      if (lineStr.length > 80)
        lineStr = lineStr.substring(0, 79) + "\u2026";
      if (line > 1 && /^ *$/.test(lineStr.substring(0, ci))) {
        let prev = src.substring(lc.lineStarts[line - 2], lc.lineStarts[line - 1]);
        if (prev.length > 80)
          prev = prev.substring(0, 79) + "\u2026\n";
        lineStr = prev + lineStr;
      }
      if (/[^ ]/.test(lineStr)) {
        let count = 1;
        const end = error.linePos[1];
        if (end?.line === line && end.col > col) {
          count = Math.max(1, Math.min(end.col - col, 80 - ci));
        }
        const pointer = " ".repeat(ci) + "^".repeat(count);
        error.message += `:

${lineStr}
${pointer}
`;
      }
    };
    exports.YAMLError = YAMLError;
    exports.YAMLParseError = YAMLParseError;
    exports.YAMLWarning = YAMLWarning;
    exports.prettifyError = prettifyError;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-props.js
var require_resolve_props = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-props.js"(exports) {
    "use strict";
    function resolveProps(tokens, { flow, indicator, next, offset, onError, parentIndent, startOnNewline }) {
      let spaceBefore = false;
      let atNewline = startOnNewline;
      let hasSpace = startOnNewline;
      let comment = "";
      let commentSep = "";
      let hasNewline = false;
      let reqSpace = false;
      let tab = null;
      let anchor = null;
      let tag = null;
      let newlineAfterProp = null;
      let comma = null;
      let found = null;
      let start = null;
      for (const token of tokens) {
        if (reqSpace) {
          if (token.type !== "space" && token.type !== "newline" && token.type !== "comma")
            onError(token.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
          reqSpace = false;
        }
        if (tab) {
          if (atNewline && token.type !== "comment" && token.type !== "newline") {
            onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
          }
          tab = null;
        }
        switch (token.type) {
          case "space":
            if (!flow && (indicator !== "doc-start" || next?.type !== "flow-collection") && token.source.includes("	")) {
              tab = token;
            }
            hasSpace = true;
            break;
          case "comment": {
            if (!hasSpace)
              onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
            const cb = token.source.substring(1) || " ";
            if (!comment)
              comment = cb;
            else
              comment += commentSep + cb;
            commentSep = "";
            atNewline = false;
            break;
          }
          case "newline":
            if (atNewline) {
              if (comment)
                comment += token.source;
              else if (!found || indicator !== "seq-item-ind")
                spaceBefore = true;
            } else
              commentSep += token.source;
            atNewline = true;
            hasNewline = true;
            if (anchor || tag)
              newlineAfterProp = token;
            hasSpace = true;
            break;
          case "anchor":
            if (anchor)
              onError(token, "MULTIPLE_ANCHORS", "A node can have at most one anchor");
            if (token.source.endsWith(":"))
              onError(token.offset + token.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", true);
            anchor = token;
            start ?? (start = token.offset);
            atNewline = false;
            hasSpace = false;
            reqSpace = true;
            break;
          case "tag": {
            if (tag)
              onError(token, "MULTIPLE_TAGS", "A node can have at most one tag");
            tag = token;
            start ?? (start = token.offset);
            atNewline = false;
            hasSpace = false;
            reqSpace = true;
            break;
          }
          case indicator:
            if (anchor || tag)
              onError(token, "BAD_PROP_ORDER", `Anchors and tags must be after the ${token.source} indicator`);
            if (found)
              onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.source} in ${flow ?? "collection"}`);
            found = token;
            atNewline = indicator === "seq-item-ind" || indicator === "explicit-key-ind";
            hasSpace = false;
            break;
          case "comma":
            if (flow) {
              if (comma)
                onError(token, "UNEXPECTED_TOKEN", `Unexpected , in ${flow}`);
              comma = token;
              atNewline = false;
              hasSpace = false;
              break;
            }
          // else fallthrough
          default:
            onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.type} token`);
            atNewline = false;
            hasSpace = false;
        }
      }
      const last = tokens[tokens.length - 1];
      const end = last ? last.offset + last.source.length : offset;
      if (reqSpace && next && next.type !== "space" && next.type !== "newline" && next.type !== "comma" && (next.type !== "scalar" || next.source !== "")) {
        onError(next.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
      }
      if (tab && (atNewline && tab.indent <= parentIndent || next?.type === "block-map" || next?.type === "block-seq"))
        onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
      return {
        comma,
        found,
        spaceBefore,
        comment,
        hasNewline,
        anchor,
        tag,
        newlineAfterProp,
        end,
        start: start ?? end
      };
    }
    exports.resolveProps = resolveProps;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/util-contains-newline.js
var require_util_contains_newline = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/util-contains-newline.js"(exports) {
    "use strict";
    function containsNewline(key2) {
      if (!key2)
        return null;
      switch (key2.type) {
        case "alias":
        case "scalar":
        case "double-quoted-scalar":
        case "single-quoted-scalar":
          if (key2.source.includes("\n"))
            return true;
          if (key2.end) {
            for (const st of key2.end)
              if (st.type === "newline")
                return true;
          }
          return false;
        case "flow-collection":
          for (const it of key2.items) {
            for (const st of it.start)
              if (st.type === "newline")
                return true;
            if (it.sep) {
              for (const st of it.sep)
                if (st.type === "newline")
                  return true;
            }
            if (containsNewline(it.key) || containsNewline(it.value))
              return true;
          }
          return false;
        default:
          return true;
      }
    }
    exports.containsNewline = containsNewline;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/util-flow-indent-check.js
var require_util_flow_indent_check = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/util-flow-indent-check.js"(exports) {
    "use strict";
    var utilContainsNewline = require_util_contains_newline();
    function flowIndentCheck(indent, fc, onError) {
      if (fc?.type === "flow-collection") {
        const end = fc.end[0];
        if (end.indent === indent && (end.source === "]" || end.source === "}") && utilContainsNewline.containsNewline(fc)) {
          const msg = "Flow end indicator should be more indented than parent";
          onError(end, "BAD_INDENT", msg, true);
        }
      }
    }
    exports.flowIndentCheck = flowIndentCheck;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/util-map-includes.js
var require_util_map_includes = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/util-map-includes.js"(exports) {
    "use strict";
    var identity = require_identity();
    function mapIncludes(ctx, items, search) {
      const { uniqueKeys } = ctx.options;
      if (uniqueKeys === false)
        return false;
      const isEqual = typeof uniqueKeys === "function" ? uniqueKeys : (a, b) => a === b || identity.isScalar(a) && identity.isScalar(b) && a.value === b.value;
      return items.some((pair) => isEqual(pair.key, search));
    }
    exports.mapIncludes = mapIncludes;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-block-map.js
var require_resolve_block_map = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-block-map.js"(exports) {
    "use strict";
    var Pair = require_Pair();
    var YAMLMap = require_YAMLMap();
    var resolveProps = require_resolve_props();
    var utilContainsNewline = require_util_contains_newline();
    var utilFlowIndentCheck = require_util_flow_indent_check();
    var utilMapIncludes = require_util_map_includes();
    var startColMsg = "All mapping items must start at the same column";
    function resolveBlockMap({ composeNode, composeEmptyNode }, ctx, bm, onError, tag) {
      const NodeClass = tag?.nodeClass ?? YAMLMap.YAMLMap;
      const map = new NodeClass(ctx.schema);
      if (ctx.atRoot)
        ctx.atRoot = false;
      let offset = bm.offset;
      let commentEnd = null;
      for (const collItem of bm.items) {
        const { start, key: key2, sep: sep3, value } = collItem;
        const keyProps = resolveProps.resolveProps(start, {
          indicator: "explicit-key-ind",
          next: key2 ?? sep3?.[0],
          offset,
          onError,
          parentIndent: bm.indent,
          startOnNewline: true
        });
        const implicitKey = !keyProps.found;
        if (implicitKey) {
          if (key2) {
            if (key2.type === "block-seq")
              onError(offset, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key");
            else if ("indent" in key2 && key2.indent !== bm.indent)
              onError(offset, "BAD_INDENT", startColMsg);
          }
          if (!keyProps.anchor && !keyProps.tag && !sep3) {
            commentEnd = keyProps.end;
            if (keyProps.comment) {
              if (map.comment)
                map.comment += "\n" + keyProps.comment;
              else
                map.comment = keyProps.comment;
            }
            continue;
          }
          if (keyProps.newlineAfterProp || utilContainsNewline.containsNewline(key2)) {
            onError(key2 ?? start[start.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
          }
        } else if (keyProps.found?.indent !== bm.indent) {
          onError(offset, "BAD_INDENT", startColMsg);
        }
        ctx.atKey = true;
        const keyStart = keyProps.end;
        const keyNode = key2 ? composeNode(ctx, key2, keyProps, onError) : composeEmptyNode(ctx, keyStart, start, null, keyProps, onError);
        if (ctx.schema.compat)
          utilFlowIndentCheck.flowIndentCheck(bm.indent, key2, onError);
        ctx.atKey = false;
        if (utilMapIncludes.mapIncludes(ctx, map.items, keyNode))
          onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
        const valueProps = resolveProps.resolveProps(sep3 ?? [], {
          indicator: "map-value-ind",
          next: value,
          offset: keyNode.range[2],
          onError,
          parentIndent: bm.indent,
          startOnNewline: !key2 || key2.type === "block-scalar"
        });
        offset = valueProps.end;
        if (valueProps.found) {
          if (implicitKey) {
            if (value?.type === "block-map" && !valueProps.hasNewline)
              onError(offset, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings");
            if (ctx.options.strict && keyProps.start < valueProps.found.offset - 1024)
              onError(keyNode.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key");
          }
          const valueNode = value ? composeNode(ctx, value, valueProps, onError) : composeEmptyNode(ctx, offset, sep3, null, valueProps, onError);
          if (ctx.schema.compat)
            utilFlowIndentCheck.flowIndentCheck(bm.indent, value, onError);
          offset = valueNode.range[2];
          const pair = new Pair.Pair(keyNode, valueNode);
          if (ctx.options.keepSourceTokens)
            pair.srcToken = collItem;
          map.items.push(pair);
        } else {
          if (implicitKey)
            onError(keyNode.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values");
          if (valueProps.comment) {
            if (keyNode.comment)
              keyNode.comment += "\n" + valueProps.comment;
            else
              keyNode.comment = valueProps.comment;
          }
          const pair = new Pair.Pair(keyNode);
          if (ctx.options.keepSourceTokens)
            pair.srcToken = collItem;
          map.items.push(pair);
        }
      }
      if (commentEnd && commentEnd < offset)
        onError(commentEnd, "IMPOSSIBLE", "Map comment with trailing content");
      map.range = [bm.offset, offset, commentEnd ?? offset];
      return map;
    }
    exports.resolveBlockMap = resolveBlockMap;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-block-seq.js
var require_resolve_block_seq = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-block-seq.js"(exports) {
    "use strict";
    var YAMLSeq = require_YAMLSeq();
    var resolveProps = require_resolve_props();
    var utilFlowIndentCheck = require_util_flow_indent_check();
    function resolveBlockSeq({ composeNode, composeEmptyNode }, ctx, bs, onError, tag) {
      const NodeClass = tag?.nodeClass ?? YAMLSeq.YAMLSeq;
      const seq = new NodeClass(ctx.schema);
      if (ctx.atRoot)
        ctx.atRoot = false;
      if (ctx.atKey)
        ctx.atKey = false;
      let offset = bs.offset;
      let commentEnd = null;
      for (const { start, value } of bs.items) {
        const props = resolveProps.resolveProps(start, {
          indicator: "seq-item-ind",
          next: value,
          offset,
          onError,
          parentIndent: bs.indent,
          startOnNewline: true
        });
        if (!props.found) {
          if (props.anchor || props.tag || value) {
            if (value?.type === "block-seq")
              onError(props.end, "BAD_INDENT", "All sequence items must start at the same column");
            else
              onError(offset, "MISSING_CHAR", "Sequence item without - indicator");
          } else {
            commentEnd = props.end;
            if (props.comment)
              seq.comment = props.comment;
            continue;
          }
        }
        const node = value ? composeNode(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, start, null, props, onError);
        if (ctx.schema.compat)
          utilFlowIndentCheck.flowIndentCheck(bs.indent, value, onError);
        offset = node.range[2];
        seq.items.push(node);
      }
      seq.range = [bs.offset, offset, commentEnd ?? offset];
      return seq;
    }
    exports.resolveBlockSeq = resolveBlockSeq;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-end.js
var require_resolve_end = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-end.js"(exports) {
    "use strict";
    function resolveEnd(end, offset, reqSpace, onError) {
      let comment = "";
      if (end) {
        let hasSpace = false;
        let sep3 = "";
        for (const token of end) {
          const { source, type } = token;
          switch (type) {
            case "space":
              hasSpace = true;
              break;
            case "comment": {
              if (reqSpace && !hasSpace)
                onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
              const cb = source.substring(1) || " ";
              if (!comment)
                comment = cb;
              else
                comment += sep3 + cb;
              sep3 = "";
              break;
            }
            case "newline":
              if (comment)
                sep3 += source;
              hasSpace = true;
              break;
            default:
              onError(token, "UNEXPECTED_TOKEN", `Unexpected ${type} at node end`);
          }
          offset += source.length;
        }
      }
      return { comment, offset };
    }
    exports.resolveEnd = resolveEnd;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-flow-collection.js
var require_resolve_flow_collection = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-flow-collection.js"(exports) {
    "use strict";
    var identity = require_identity();
    var Pair = require_Pair();
    var YAMLMap = require_YAMLMap();
    var YAMLSeq = require_YAMLSeq();
    var resolveEnd = require_resolve_end();
    var resolveProps = require_resolve_props();
    var utilContainsNewline = require_util_contains_newline();
    var utilMapIncludes = require_util_map_includes();
    var blockMsg = "Block collections are not allowed within flow collections";
    var isBlock = (token) => token && (token.type === "block-map" || token.type === "block-seq");
    function resolveFlowCollection({ composeNode, composeEmptyNode }, ctx, fc, onError, tag) {
      const isMap2 = fc.start.source === "{";
      const fcName = isMap2 ? "flow map" : "flow sequence";
      const NodeClass = tag?.nodeClass ?? (isMap2 ? YAMLMap.YAMLMap : YAMLSeq.YAMLSeq);
      const coll = new NodeClass(ctx.schema);
      coll.flow = true;
      const atRoot = ctx.atRoot;
      if (atRoot)
        ctx.atRoot = false;
      if (ctx.atKey)
        ctx.atKey = false;
      let offset = fc.offset + fc.start.source.length;
      for (let i = 0; i < fc.items.length; ++i) {
        const collItem = fc.items[i];
        const { start, key: key2, sep: sep3, value } = collItem;
        const props = resolveProps.resolveProps(start, {
          flow: fcName,
          indicator: "explicit-key-ind",
          next: key2 ?? sep3?.[0],
          offset,
          onError,
          parentIndent: fc.indent,
          startOnNewline: false
        });
        if (!props.found) {
          if (!props.anchor && !props.tag && !sep3 && !value) {
            if (i === 0 && props.comma)
              onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
            else if (i < fc.items.length - 1)
              onError(props.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${fcName}`);
            if (props.comment) {
              if (coll.comment)
                coll.comment += "\n" + props.comment;
              else
                coll.comment = props.comment;
            }
            offset = props.end;
            continue;
          }
          if (!isMap2 && ctx.options.strict && utilContainsNewline.containsNewline(key2))
            onError(
              key2,
              // checked by containsNewline()
              "MULTILINE_IMPLICIT_KEY",
              "Implicit keys of flow sequence pairs need to be on a single line"
            );
        }
        if (i === 0) {
          if (props.comma)
            onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
        } else {
          if (!props.comma)
            onError(props.start, "MISSING_CHAR", `Missing , between ${fcName} items`);
          if (props.comment) {
            let prevItemComment = "";
            loop: for (const st of start) {
              switch (st.type) {
                case "comma":
                case "space":
                  break;
                case "comment":
                  prevItemComment = st.source.substring(1);
                  break loop;
                default:
                  break loop;
              }
            }
            if (prevItemComment) {
              let prev = coll.items[coll.items.length - 1];
              if (identity.isPair(prev))
                prev = prev.value ?? prev.key;
              if (prev.comment)
                prev.comment += "\n" + prevItemComment;
              else
                prev.comment = prevItemComment;
              props.comment = props.comment.substring(prevItemComment.length + 1);
            }
          }
        }
        if (!isMap2 && !sep3 && !props.found) {
          const valueNode = value ? composeNode(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, sep3, null, props, onError);
          coll.items.push(valueNode);
          offset = valueNode.range[2];
          if (isBlock(value))
            onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
        } else {
          ctx.atKey = true;
          const keyStart = props.end;
          const keyNode = key2 ? composeNode(ctx, key2, props, onError) : composeEmptyNode(ctx, keyStart, start, null, props, onError);
          if (isBlock(key2))
            onError(keyNode.range, "BLOCK_IN_FLOW", blockMsg);
          ctx.atKey = false;
          const valueProps = resolveProps.resolveProps(sep3 ?? [], {
            flow: fcName,
            indicator: "map-value-ind",
            next: value,
            offset: keyNode.range[2],
            onError,
            parentIndent: fc.indent,
            startOnNewline: false
          });
          if (valueProps.found) {
            if (!isMap2 && !props.found && ctx.options.strict) {
              if (sep3)
                for (const st of sep3) {
                  if (st === valueProps.found)
                    break;
                  if (st.type === "newline") {
                    onError(st, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                    break;
                  }
                }
              if (props.start < valueProps.found.offset - 1024)
                onError(valueProps.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
            }
          } else if (value) {
            if ("source" in value && value.source?.[0] === ":")
              onError(value, "MISSING_CHAR", `Missing space after : in ${fcName}`);
            else
              onError(valueProps.start, "MISSING_CHAR", `Missing , or : between ${fcName} items`);
          }
          const valueNode = value ? composeNode(ctx, value, valueProps, onError) : valueProps.found ? composeEmptyNode(ctx, valueProps.end, sep3, null, valueProps, onError) : null;
          if (valueNode) {
            if (isBlock(value))
              onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
          } else if (valueProps.comment) {
            if (keyNode.comment)
              keyNode.comment += "\n" + valueProps.comment;
            else
              keyNode.comment = valueProps.comment;
          }
          const pair = new Pair.Pair(keyNode, valueNode);
          if (ctx.options.keepSourceTokens)
            pair.srcToken = collItem;
          if (isMap2) {
            const map = coll;
            if (utilMapIncludes.mapIncludes(ctx, map.items, keyNode))
              onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
            map.items.push(pair);
          } else {
            const map = new YAMLMap.YAMLMap(ctx.schema);
            map.flow = true;
            map.items.push(pair);
            const endRange = (valueNode ?? keyNode).range;
            map.range = [keyNode.range[0], endRange[1], endRange[2]];
            coll.items.push(map);
          }
          offset = valueNode ? valueNode.range[2] : valueProps.end;
        }
      }
      const expectedEnd = isMap2 ? "}" : "]";
      const [ce, ...ee] = fc.end;
      let cePos = offset;
      if (ce?.source === expectedEnd)
        cePos = ce.offset + ce.source.length;
      else {
        const name = fcName[0].toUpperCase() + fcName.substring(1);
        const msg = atRoot ? `${name} must end with a ${expectedEnd}` : `${name} in block collection must be sufficiently indented and end with a ${expectedEnd}`;
        onError(offset, atRoot ? "MISSING_CHAR" : "BAD_INDENT", msg);
        if (ce && ce.source.length !== 1)
          ee.unshift(ce);
      }
      if (ee.length > 0) {
        const end = resolveEnd.resolveEnd(ee, cePos, ctx.options.strict, onError);
        if (end.comment) {
          if (coll.comment)
            coll.comment += "\n" + end.comment;
          else
            coll.comment = end.comment;
        }
        coll.range = [fc.offset, cePos, end.offset];
      } else {
        coll.range = [fc.offset, cePos, cePos];
      }
      return coll;
    }
    exports.resolveFlowCollection = resolveFlowCollection;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/compose-collection.js
var require_compose_collection = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/compose-collection.js"(exports) {
    "use strict";
    var identity = require_identity();
    var Scalar = require_Scalar();
    var YAMLMap = require_YAMLMap();
    var YAMLSeq = require_YAMLSeq();
    var resolveBlockMap = require_resolve_block_map();
    var resolveBlockSeq = require_resolve_block_seq();
    var resolveFlowCollection = require_resolve_flow_collection();
    function resolveCollection(CN, ctx, token, onError, tagName, tag) {
      const coll = token.type === "block-map" ? resolveBlockMap.resolveBlockMap(CN, ctx, token, onError, tag) : token.type === "block-seq" ? resolveBlockSeq.resolveBlockSeq(CN, ctx, token, onError, tag) : resolveFlowCollection.resolveFlowCollection(CN, ctx, token, onError, tag);
      const Coll = coll.constructor;
      if (tagName === "!" || tagName === Coll.tagName) {
        coll.tag = Coll.tagName;
        return coll;
      }
      if (tagName)
        coll.tag = tagName;
      return coll;
    }
    function composeCollection(CN, ctx, token, props, onError) {
      const tagToken = props.tag;
      const tagName = !tagToken ? null : ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg));
      if (token.type === "block-seq") {
        const { anchor, newlineAfterProp: nl } = props;
        const lastProp = anchor && tagToken ? anchor.offset > tagToken.offset ? anchor : tagToken : anchor ?? tagToken;
        if (lastProp && (!nl || nl.offset < lastProp.offset)) {
          const message = "Missing newline after block sequence props";
          onError(lastProp, "MISSING_CHAR", message);
        }
      }
      const expType = token.type === "block-map" ? "map" : token.type === "block-seq" ? "seq" : token.start.source === "{" ? "map" : "seq";
      if (!tagToken || !tagName || tagName === "!" || tagName === YAMLMap.YAMLMap.tagName && expType === "map" || tagName === YAMLSeq.YAMLSeq.tagName && expType === "seq") {
        return resolveCollection(CN, ctx, token, onError, tagName);
      }
      let tag = ctx.schema.tags.find((t2) => t2.tag === tagName && t2.collection === expType);
      if (!tag) {
        const kt = ctx.schema.knownTags[tagName];
        if (kt?.collection === expType) {
          ctx.schema.tags.push(Object.assign({}, kt, { default: false }));
          tag = kt;
        } else {
          if (kt) {
            onError(tagToken, "BAD_COLLECTION_TYPE", `${kt.tag} used for ${expType} collection, but expects ${kt.collection ?? "scalar"}`, true);
          } else {
            onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, true);
          }
          return resolveCollection(CN, ctx, token, onError, tagName);
        }
      }
      const coll = resolveCollection(CN, ctx, token, onError, tagName, tag);
      const res = tag.resolve?.(coll, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg), ctx.options) ?? coll;
      const node = identity.isNode(res) ? res : new Scalar.Scalar(res);
      node.range = coll.range;
      node.tag = tagName;
      if (tag?.format)
        node.format = tag.format;
      return node;
    }
    exports.composeCollection = composeCollection;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-block-scalar.js
var require_resolve_block_scalar = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-block-scalar.js"(exports) {
    "use strict";
    var Scalar = require_Scalar();
    function resolveBlockScalar(ctx, scalar2, onError) {
      const start = scalar2.offset;
      const header = parseBlockScalarHeader(scalar2, ctx.options.strict, onError);
      if (!header)
        return { value: "", type: null, comment: "", range: [start, start, start] };
      const type = header.mode === ">" ? Scalar.Scalar.BLOCK_FOLDED : Scalar.Scalar.BLOCK_LITERAL;
      const lines = scalar2.source ? splitLines(scalar2.source) : [];
      let chompStart = lines.length;
      for (let i = lines.length - 1; i >= 0; --i) {
        const content = lines[i][1];
        if (content === "" || content === "\r")
          chompStart = i;
        else
          break;
      }
      if (chompStart === 0) {
        const value2 = header.chomp === "+" && lines.length > 0 ? "\n".repeat(Math.max(1, lines.length - 1)) : "";
        let end2 = start + header.length;
        if (scalar2.source)
          end2 += scalar2.source.length;
        return { value: value2, type, comment: header.comment, range: [start, end2, end2] };
      }
      let trimIndent = scalar2.indent + header.indent;
      let offset = scalar2.offset + header.length;
      let contentStart = 0;
      for (let i = 0; i < chompStart; ++i) {
        const [indent, content] = lines[i];
        if (content === "" || content === "\r") {
          if (header.indent === 0 && indent.length > trimIndent)
            trimIndent = indent.length;
        } else {
          if (indent.length < trimIndent) {
            const message = "Block scalars with more-indented leading empty lines must use an explicit indentation indicator";
            onError(offset + indent.length, "MISSING_CHAR", message);
          }
          if (header.indent === 0)
            trimIndent = indent.length;
          contentStart = i;
          if (trimIndent === 0 && !ctx.atRoot) {
            const message = "Block scalar values in collections must be indented";
            onError(offset, "BAD_INDENT", message);
          }
          break;
        }
        offset += indent.length + content.length + 1;
      }
      for (let i = lines.length - 1; i >= chompStart; --i) {
        if (lines[i][0].length > trimIndent)
          chompStart = i + 1;
      }
      let value = "";
      let sep3 = "";
      let prevMoreIndented = false;
      for (let i = 0; i < contentStart; ++i)
        value += lines[i][0].slice(trimIndent) + "\n";
      for (let i = contentStart; i < chompStart; ++i) {
        let [indent, content] = lines[i];
        offset += indent.length + content.length + 1;
        const crlf = content[content.length - 1] === "\r";
        if (crlf)
          content = content.slice(0, -1);
        if (content && indent.length < trimIndent) {
          const src = header.indent ? "explicit indentation indicator" : "first line";
          const message = `Block scalar lines must not be less indented than their ${src}`;
          onError(offset - content.length - (crlf ? 2 : 1), "BAD_INDENT", message);
          indent = "";
        }
        if (type === Scalar.Scalar.BLOCK_LITERAL) {
          value += sep3 + indent.slice(trimIndent) + content;
          sep3 = "\n";
        } else if (indent.length > trimIndent || content[0] === "	") {
          if (sep3 === " ")
            sep3 = "\n";
          else if (!prevMoreIndented && sep3 === "\n")
            sep3 = "\n\n";
          value += sep3 + indent.slice(trimIndent) + content;
          sep3 = "\n";
          prevMoreIndented = true;
        } else if (content === "") {
          if (sep3 === "\n")
            value += "\n";
          else
            sep3 = "\n";
        } else {
          value += sep3 + content;
          sep3 = " ";
          prevMoreIndented = false;
        }
      }
      switch (header.chomp) {
        case "-":
          break;
        case "+":
          for (let i = chompStart; i < lines.length; ++i)
            value += "\n" + lines[i][0].slice(trimIndent);
          if (value[value.length - 1] !== "\n")
            value += "\n";
          break;
        default:
          value += "\n";
      }
      const end = start + header.length + scalar2.source.length;
      return { value, type, comment: header.comment, range: [start, end, end] };
    }
    function parseBlockScalarHeader({ offset, props }, strict, onError) {
      if (props[0].type !== "block-scalar-header") {
        onError(props[0], "IMPOSSIBLE", "Block scalar header not found");
        return null;
      }
      const { source } = props[0];
      const mode = source[0];
      let indent = 0;
      let chomp = "";
      let error = -1;
      for (let i = 1; i < source.length; ++i) {
        const ch = source[i];
        if (!chomp && (ch === "-" || ch === "+"))
          chomp = ch;
        else {
          const n = Number(ch);
          if (!indent && n)
            indent = n;
          else if (error === -1)
            error = offset + i;
        }
      }
      if (error !== -1)
        onError(error, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${source}`);
      let hasSpace = false;
      let comment = "";
      let length = source.length;
      for (let i = 1; i < props.length; ++i) {
        const token = props[i];
        switch (token.type) {
          case "space":
            hasSpace = true;
          // fallthrough
          case "newline":
            length += token.source.length;
            break;
          case "comment":
            if (strict && !hasSpace) {
              const message = "Comments must be separated from other tokens by white space characters";
              onError(token, "MISSING_CHAR", message);
            }
            length += token.source.length;
            comment = token.source.substring(1);
            break;
          case "error":
            onError(token, "UNEXPECTED_TOKEN", token.message);
            length += token.source.length;
            break;
          /* istanbul ignore next should not happen */
          default: {
            const message = `Unexpected token in block scalar header: ${token.type}`;
            onError(token, "UNEXPECTED_TOKEN", message);
            const ts = token.source;
            if (ts && typeof ts === "string")
              length += ts.length;
          }
        }
      }
      return { mode, indent, chomp, comment, length };
    }
    function splitLines(source) {
      const split = source.split(/\n( *)/);
      const first = split[0];
      const m = first.match(/^( *)/);
      const line0 = m?.[1] ? [m[1], first.slice(m[1].length)] : ["", first];
      const lines = [line0];
      for (let i = 1; i < split.length; i += 2)
        lines.push([split[i], split[i + 1]]);
      return lines;
    }
    exports.resolveBlockScalar = resolveBlockScalar;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-flow-scalar.js
var require_resolve_flow_scalar = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/resolve-flow-scalar.js"(exports) {
    "use strict";
    var Scalar = require_Scalar();
    var resolveEnd = require_resolve_end();
    function resolveFlowScalar(scalar2, strict, onError) {
      const { offset, type, source, end } = scalar2;
      let _type;
      let value;
      const _onError = (rel, code, msg) => onError(offset + rel, code, msg);
      switch (type) {
        case "scalar":
          _type = Scalar.Scalar.PLAIN;
          value = plainValue(source, _onError);
          break;
        case "single-quoted-scalar":
          _type = Scalar.Scalar.QUOTE_SINGLE;
          value = singleQuotedValue(source, _onError);
          break;
        case "double-quoted-scalar":
          _type = Scalar.Scalar.QUOTE_DOUBLE;
          value = doubleQuotedValue(source, _onError);
          break;
        /* istanbul ignore next should not happen */
        default:
          onError(scalar2, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${type}`);
          return {
            value: "",
            type: null,
            comment: "",
            range: [offset, offset + source.length, offset + source.length]
          };
      }
      const valueEnd = offset + source.length;
      const re = resolveEnd.resolveEnd(end, valueEnd, strict, onError);
      return {
        value,
        type: _type,
        comment: re.comment,
        range: [offset, valueEnd, re.offset]
      };
    }
    function plainValue(source, onError) {
      let badChar = "";
      switch (source[0]) {
        /* istanbul ignore next should not happen */
        case "	":
          badChar = "a tab character";
          break;
        case ",":
          badChar = "flow indicator character ,";
          break;
        case "%":
          badChar = "directive indicator character %";
          break;
        case "|":
        case ">": {
          badChar = `block scalar indicator ${source[0]}`;
          break;
        }
        case "@":
        case "`": {
          badChar = `reserved character ${source[0]}`;
          break;
        }
      }
      if (badChar)
        onError(0, "BAD_SCALAR_START", `Plain value cannot start with ${badChar}`);
      return unfoldLines(source);
    }
    function singleQuotedValue(source, onError) {
      if (source[source.length - 1] !== "'" || source.length === 1)
        onError(source.length, "MISSING_CHAR", "Missing closing 'quote");
      return unfoldLines(source.slice(1, -1)).replace(/''/g, "'");
    }
    function unfoldLines(source) {
      const line = /(.*?)\r?\n/sy;
      let match = line.exec(source);
      if (!match)
        return source;
      let trimEnd, trimBoth;
      try {
        trimEnd = new RegExp("(?<![ 	])[ 	]+$");
        trimBoth = new RegExp("^[ 	]+|(?<![ 	])[ 	]+$", "g");
      } catch {
        trimEnd = /[ \t]+$/;
        trimBoth = /^[ \t]+|[ \t]+$/g;
      }
      let res = match[1].replace(trimEnd, "");
      let sep3 = " ";
      let pos = line.lastIndex;
      while (match = line.exec(source)) {
        const lm = match[1].replace(trimBoth, "");
        if (lm === "") {
          if (sep3 === "\n")
            res += sep3;
          else
            sep3 = "\n";
        } else {
          res += sep3 + lm;
          sep3 = " ";
        }
        pos = line.lastIndex;
      }
      const last = /[ \t]*(.*)/sy;
      last.lastIndex = pos;
      match = last.exec(source);
      return res + sep3 + (match?.[1] ?? "");
    }
    function doubleQuotedValue(source, onError) {
      let res = "";
      for (let i = 1; i < source.length - 1; ++i) {
        const ch = source[i];
        if (ch === "\r" && source[i + 1] === "\n")
          continue;
        if (ch === "\n") {
          const { fold, offset } = foldNewline(source, i);
          res += fold;
          i = offset;
        } else if (ch === "\\") {
          let next = source[++i];
          const cc = escapeCodes[next];
          if (cc)
            res += cc;
          else if (next === "\n") {
            next = source[i + 1];
            while (next === " " || next === "	")
              next = source[++i + 1];
          } else if (next === "\r" && source[i + 1] === "\n") {
            next = source[++i + 1];
            while (next === " " || next === "	")
              next = source[++i + 1];
          } else if (next === "x" || next === "u" || next === "U") {
            const length = next === "x" ? 2 : next === "u" ? 4 : 8;
            res += parseCharCode(source, i + 1, length, onError);
            i += length;
          } else {
            const raw = source.substr(i - 1, 2);
            onError(i - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
            res += raw;
          }
        } else if (ch === " " || ch === "	") {
          const wsStart = i;
          let next = source[i + 1];
          while (next === " " || next === "	")
            next = source[++i + 1];
          if (next !== "\n" && !(next === "\r" && source[i + 2] === "\n"))
            res += i > wsStart ? source.slice(wsStart, i + 1) : ch;
        } else {
          res += ch;
        }
      }
      if (source[source.length - 1] !== '"' || source.length === 1)
        onError(source.length, "MISSING_CHAR", 'Missing closing "quote');
      return res;
    }
    function foldNewline(source, offset) {
      let fold = "";
      let ch = source[offset + 1];
      while (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
        if (ch === "\r" && source[offset + 2] !== "\n")
          break;
        if (ch === "\n")
          fold += "\n";
        offset += 1;
        ch = source[offset + 1];
      }
      if (!fold)
        fold = " ";
      return { fold, offset };
    }
    var escapeCodes = {
      "0": "\0",
      // null character
      a: "\x07",
      // bell character
      b: "\b",
      // backspace
      e: "\x1B",
      // escape character
      f: "\f",
      // form feed
      n: "\n",
      // line feed
      r: "\r",
      // carriage return
      t: "	",
      // horizontal tab
      v: "\v",
      // vertical tab
      N: "\x85",
      // Unicode next line
      _: "\xA0",
      // Unicode non-breaking space
      L: "\u2028",
      // Unicode line separator
      P: "\u2029",
      // Unicode paragraph separator
      " ": " ",
      '"': '"',
      "/": "/",
      "\\": "\\",
      "	": "	"
    };
    function parseCharCode(source, offset, length, onError) {
      const cc = source.substr(offset, length);
      const ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
      const code = ok ? parseInt(cc, 16) : NaN;
      try {
        return String.fromCodePoint(code);
      } catch {
        const raw = source.substr(offset - 2, length + 2);
        onError(offset - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
        return raw;
      }
    }
    exports.resolveFlowScalar = resolveFlowScalar;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/compose-scalar.js
var require_compose_scalar = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/compose-scalar.js"(exports) {
    "use strict";
    var identity = require_identity();
    var Scalar = require_Scalar();
    var resolveBlockScalar = require_resolve_block_scalar();
    var resolveFlowScalar = require_resolve_flow_scalar();
    function composeScalar(ctx, token, tagToken, onError) {
      const { value, type, comment, range } = token.type === "block-scalar" ? resolveBlockScalar.resolveBlockScalar(ctx, token, onError) : resolveFlowScalar.resolveFlowScalar(token, ctx.options.strict, onError);
      const tagName = tagToken ? ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg)) : null;
      let tag;
      if (ctx.options.stringKeys && ctx.atKey) {
        tag = ctx.schema[identity.SCALAR];
      } else if (tagName)
        tag = findScalarTagByName(ctx.schema, value, tagName, tagToken, onError);
      else if (token.type === "scalar")
        tag = findScalarTagByTest(ctx, value, token, onError);
      else
        tag = ctx.schema[identity.SCALAR];
      let scalar2;
      try {
        const res = tag.resolve(value, (msg) => onError(tagToken ?? token, "TAG_RESOLVE_FAILED", msg), ctx.options);
        scalar2 = identity.isScalar(res) ? res : new Scalar.Scalar(res);
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        onError(tagToken ?? token, "TAG_RESOLVE_FAILED", msg);
        scalar2 = new Scalar.Scalar(value);
      }
      scalar2.range = range;
      scalar2.source = value;
      if (type)
        scalar2.type = type;
      if (tagName)
        scalar2.tag = tagName;
      if (tag.format)
        scalar2.format = tag.format;
      if (comment)
        scalar2.comment = comment;
      return scalar2;
    }
    function findScalarTagByName(schema, value, tagName, tagToken, onError) {
      if (tagName === "!")
        return schema[identity.SCALAR];
      const matchWithTest = [];
      for (const tag of schema.tags) {
        if (!tag.collection && tag.tag === tagName) {
          if (tag.default && tag.test)
            matchWithTest.push(tag);
          else
            return tag;
        }
      }
      for (const tag of matchWithTest)
        if (tag.test?.test(value))
          return tag;
      const kt = schema.knownTags[tagName];
      if (kt && !kt.collection) {
        schema.tags.push(Object.assign({}, kt, { default: false, test: void 0 }));
        return kt;
      }
      onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, tagName !== "tag:yaml.org,2002:str");
      return schema[identity.SCALAR];
    }
    function findScalarTagByTest({ atKey, directives, schema }, value, token, onError) {
      const tag = schema.tags.find((tag2) => (tag2.default === true || atKey && tag2.default === "key") && tag2.test?.test(value)) || schema[identity.SCALAR];
      if (schema.compat) {
        const compat = schema.compat.find((tag2) => tag2.default && tag2.test?.test(value)) ?? schema[identity.SCALAR];
        if (tag.tag !== compat.tag) {
          const ts = directives.tagString(tag.tag);
          const cs = directives.tagString(compat.tag);
          const msg = `Value may be parsed as either ${ts} or ${cs}`;
          onError(token, "TAG_RESOLVE_FAILED", msg, true);
        }
      }
      return tag;
    }
    exports.composeScalar = composeScalar;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/util-empty-scalar-position.js
var require_util_empty_scalar_position = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/util-empty-scalar-position.js"(exports) {
    "use strict";
    function emptyScalarPosition(offset, before, pos) {
      if (before) {
        pos ?? (pos = before.length);
        for (let i = pos - 1; i >= 0; --i) {
          let st = before[i];
          switch (st.type) {
            case "space":
            case "comment":
            case "newline":
              offset -= st.source.length;
              continue;
          }
          st = before[++i];
          while (st?.type === "space") {
            offset += st.source.length;
            st = before[++i];
          }
          break;
        }
      }
      return offset;
    }
    exports.emptyScalarPosition = emptyScalarPosition;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/compose-node.js
var require_compose_node = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/compose-node.js"(exports) {
    "use strict";
    var Alias = require_Alias();
    var identity = require_identity();
    var composeCollection = require_compose_collection();
    var composeScalar = require_compose_scalar();
    var resolveEnd = require_resolve_end();
    var utilEmptyScalarPosition = require_util_empty_scalar_position();
    var CN = { composeNode, composeEmptyNode };
    function composeNode(ctx, token, props, onError) {
      const atKey = ctx.atKey;
      const { spaceBefore, comment, anchor, tag } = props;
      let node;
      let isSrcToken = true;
      switch (token.type) {
        case "alias":
          node = composeAlias(ctx, token, onError);
          if (anchor || tag)
            onError(token, "ALIAS_PROPS", "An alias node must not specify any properties");
          break;
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
        case "block-scalar":
          node = composeScalar.composeScalar(ctx, token, tag, onError);
          if (anchor)
            node.anchor = anchor.source.substring(1);
          break;
        case "block-map":
        case "block-seq":
        case "flow-collection":
          try {
            node = composeCollection.composeCollection(CN, ctx, token, props, onError);
            if (anchor)
              node.anchor = anchor.source.substring(1);
          } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            onError(token, "RESOURCE_EXHAUSTION", message);
          }
          break;
        default: {
          const message = token.type === "error" ? token.message : `Unsupported token (type: ${token.type})`;
          onError(token, "UNEXPECTED_TOKEN", message);
          isSrcToken = false;
        }
      }
      node ?? (node = composeEmptyNode(ctx, token.offset, void 0, null, props, onError));
      if (anchor && node.anchor === "")
        onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
      if (atKey && ctx.options.stringKeys && (!identity.isScalar(node) || typeof node.value !== "string" || node.tag && node.tag !== "tag:yaml.org,2002:str")) {
        const msg = "With stringKeys, all keys must be strings";
        onError(tag ?? token, "NON_STRING_KEY", msg);
      }
      if (spaceBefore)
        node.spaceBefore = true;
      if (comment) {
        if (token.type === "scalar" && token.source === "")
          node.comment = comment;
        else
          node.commentBefore = comment;
      }
      if (ctx.options.keepSourceTokens && isSrcToken)
        node.srcToken = token;
      return node;
    }
    function composeEmptyNode(ctx, offset, before, pos, { spaceBefore, comment, anchor, tag, end }, onError) {
      const token = {
        type: "scalar",
        offset: utilEmptyScalarPosition.emptyScalarPosition(offset, before, pos),
        indent: -1,
        source: ""
      };
      const node = composeScalar.composeScalar(ctx, token, tag, onError);
      if (anchor) {
        node.anchor = anchor.source.substring(1);
        if (node.anchor === "")
          onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
      }
      if (spaceBefore)
        node.spaceBefore = true;
      if (comment) {
        node.comment = comment;
        node.range[2] = end;
      }
      return node;
    }
    function composeAlias({ options }, { offset, source, end }, onError) {
      const alias = new Alias.Alias(source.substring(1));
      if (alias.source === "")
        onError(offset, "BAD_ALIAS", "Alias cannot be an empty string");
      if (alias.source.endsWith(":"))
        onError(offset + source.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", true);
      const valueEnd = offset + source.length;
      const re = resolveEnd.resolveEnd(end, valueEnd, options.strict, onError);
      alias.range = [offset, valueEnd, re.offset];
      if (re.comment)
        alias.comment = re.comment;
      return alias;
    }
    exports.composeEmptyNode = composeEmptyNode;
    exports.composeNode = composeNode;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/compose-doc.js
var require_compose_doc = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/compose-doc.js"(exports) {
    "use strict";
    var Document = require_Document();
    var composeNode = require_compose_node();
    var resolveEnd = require_resolve_end();
    var resolveProps = require_resolve_props();
    function composeDoc(options, directives, { offset, start, value, end }, onError) {
      const opts = Object.assign({ _directives: directives }, options);
      const doc = new Document.Document(void 0, opts);
      const ctx = {
        atKey: false,
        atRoot: true,
        directives: doc.directives,
        options: doc.options,
        schema: doc.schema
      };
      const props = resolveProps.resolveProps(start, {
        indicator: "doc-start",
        next: value ?? end?.[0],
        offset,
        onError,
        parentIndent: 0,
        startOnNewline: true
      });
      if (props.found) {
        doc.directives.docStart = true;
        if (value && (value.type === "block-map" || value.type === "block-seq") && !props.hasNewline)
          onError(props.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker");
      }
      doc.contents = value ? composeNode.composeNode(ctx, value, props, onError) : composeNode.composeEmptyNode(ctx, props.end, start, null, props, onError);
      const contentEnd = doc.contents.range[2];
      const re = resolveEnd.resolveEnd(end, contentEnd, false, onError);
      if (re.comment)
        doc.comment = re.comment;
      doc.range = [offset, contentEnd, re.offset];
      return doc;
    }
    exports.composeDoc = composeDoc;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/composer.js
var require_composer = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/compose/composer.js"(exports) {
    "use strict";
    var node_process = __require("process");
    var directives = require_directives();
    var Document = require_Document();
    var errors = require_errors();
    var identity = require_identity();
    var composeDoc = require_compose_doc();
    var resolveEnd = require_resolve_end();
    function getErrorPos(src) {
      if (typeof src === "number")
        return [src, src + 1];
      if (Array.isArray(src))
        return src.length === 2 ? src : [src[0], src[1]];
      const { offset, source } = src;
      return [offset, offset + (typeof source === "string" ? source.length : 1)];
    }
    function parsePrelude(prelude) {
      let comment = "";
      let atComment = false;
      let afterEmptyLine = false;
      for (let i = 0; i < prelude.length; ++i) {
        const source = prelude[i];
        switch (source[0]) {
          case "#":
            comment += (comment === "" ? "" : afterEmptyLine ? "\n\n" : "\n") + (source.substring(1) || " ");
            atComment = true;
            afterEmptyLine = false;
            break;
          case "%":
            if (prelude[i + 1]?.[0] !== "#")
              i += 1;
            atComment = false;
            break;
          default:
            if (!atComment)
              afterEmptyLine = true;
            atComment = false;
        }
      }
      return { comment, afterEmptyLine };
    }
    var Composer = class {
      constructor(options = {}) {
        this.doc = null;
        this.atDirectives = false;
        this.prelude = [];
        this.errors = [];
        this.warnings = [];
        this.onError = (source, code, message, warning) => {
          const pos = getErrorPos(source);
          if (warning)
            this.warnings.push(new errors.YAMLWarning(pos, code, message));
          else
            this.errors.push(new errors.YAMLParseError(pos, code, message));
        };
        this.directives = new directives.Directives({ version: options.version || "1.2" });
        this.options = options;
      }
      decorate(doc, afterDoc) {
        const { comment, afterEmptyLine } = parsePrelude(this.prelude);
        if (comment) {
          const dc = doc.contents;
          if (afterDoc) {
            doc.comment = doc.comment ? `${doc.comment}
${comment}` : comment;
          } else if (afterEmptyLine || doc.directives.docStart || !dc) {
            doc.commentBefore = comment;
          } else if (identity.isCollection(dc) && !dc.flow && dc.items.length > 0) {
            let it = dc.items[0];
            if (identity.isPair(it))
              it = it.key;
            const cb = it.commentBefore;
            it.commentBefore = cb ? `${comment}
${cb}` : comment;
          } else {
            const cb = dc.commentBefore;
            dc.commentBefore = cb ? `${comment}
${cb}` : comment;
          }
        }
        if (afterDoc) {
          for (let i = 0; i < this.errors.length; ++i)
            doc.errors.push(this.errors[i]);
          for (let i = 0; i < this.warnings.length; ++i)
            doc.warnings.push(this.warnings[i]);
        } else {
          doc.errors = this.errors;
          doc.warnings = this.warnings;
        }
        this.prelude = [];
        this.errors = [];
        this.warnings = [];
      }
      /**
       * Current stream status information.
       *
       * Mostly useful at the end of input for an empty stream.
       */
      streamInfo() {
        return {
          comment: parsePrelude(this.prelude).comment,
          directives: this.directives,
          errors: this.errors,
          warnings: this.warnings
        };
      }
      /**
       * Compose tokens into documents.
       *
       * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
       * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
       */
      *compose(tokens, forceDoc = false, endOffset = -1) {
        for (const token of tokens)
          yield* this.next(token);
        yield* this.end(forceDoc, endOffset);
      }
      /** Advance the composer by one CST token. */
      *next(token) {
        if (node_process.env.LOG_STREAM)
          console.dir(token, { depth: null });
        switch (token.type) {
          case "directive":
            this.directives.add(token.source, (offset, message, warning) => {
              const pos = getErrorPos(token);
              pos[0] += offset;
              this.onError(pos, "BAD_DIRECTIVE", message, warning);
            });
            this.prelude.push(token.source);
            this.atDirectives = true;
            break;
          case "document": {
            const doc = composeDoc.composeDoc(this.options, this.directives, token, this.onError);
            if (this.atDirectives && !doc.directives.docStart)
              this.onError(token, "MISSING_CHAR", "Missing directives-end/doc-start indicator line");
            this.decorate(doc, false);
            if (this.doc)
              yield this.doc;
            this.doc = doc;
            this.atDirectives = false;
            break;
          }
          case "byte-order-mark":
          case "space":
            break;
          case "comment":
          case "newline":
            this.prelude.push(token.source);
            break;
          case "error": {
            const msg = token.source ? `${token.message}: ${JSON.stringify(token.source)}` : token.message;
            const error = new errors.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg);
            if (this.atDirectives || !this.doc)
              this.errors.push(error);
            else
              this.doc.errors.push(error);
            break;
          }
          case "doc-end": {
            if (!this.doc) {
              const msg = "Unexpected doc-end without preceding document";
              this.errors.push(new errors.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg));
              break;
            }
            this.doc.directives.docEnd = true;
            const end = resolveEnd.resolveEnd(token.end, token.offset + token.source.length, this.doc.options.strict, this.onError);
            this.decorate(this.doc, true);
            if (end.comment) {
              const dc = this.doc.comment;
              this.doc.comment = dc ? `${dc}
${end.comment}` : end.comment;
            }
            this.doc.range[2] = end.offset;
            break;
          }
          default:
            this.errors.push(new errors.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", `Unsupported token ${token.type}`));
        }
      }
      /**
       * Call at end of input to yield any remaining document.
       *
       * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
       * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
       */
      *end(forceDoc = false, endOffset = -1) {
        if (this.doc) {
          this.decorate(this.doc, true);
          yield this.doc;
          this.doc = null;
        } else if (forceDoc) {
          const opts = Object.assign({ _directives: this.directives }, this.options);
          const doc = new Document.Document(void 0, opts);
          if (this.atDirectives)
            this.onError(endOffset, "MISSING_CHAR", "Missing directives-end indicator line");
          doc.range = [0, endOffset, endOffset];
          this.decorate(doc, false);
          yield doc;
        }
      }
    };
    exports.Composer = Composer;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/cst-scalar.js
var require_cst_scalar = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/cst-scalar.js"(exports) {
    "use strict";
    var resolveBlockScalar = require_resolve_block_scalar();
    var resolveFlowScalar = require_resolve_flow_scalar();
    var errors = require_errors();
    var stringifyString = require_stringifyString();
    function resolveAsScalar(token, strict = true, onError) {
      if (token) {
        const _onError = (pos, code, message) => {
          const offset = typeof pos === "number" ? pos : Array.isArray(pos) ? pos[0] : pos.offset;
          if (onError)
            onError(offset, code, message);
          else
            throw new errors.YAMLParseError([offset, offset + 1], code, message);
        };
        switch (token.type) {
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar":
            return resolveFlowScalar.resolveFlowScalar(token, strict, _onError);
          case "block-scalar":
            return resolveBlockScalar.resolveBlockScalar({ options: { strict } }, token, _onError);
        }
      }
      return null;
    }
    function createScalarToken(value, context) {
      const { implicitKey = false, indent, inFlow = false, offset = -1, type = "PLAIN" } = context;
      const source = stringifyString.stringifyString({ type, value }, {
        implicitKey,
        indent: indent > 0 ? " ".repeat(indent) : "",
        inFlow,
        options: { blockQuote: true, lineWidth: -1 }
      });
      const end = context.end ?? [
        { type: "newline", offset: -1, indent, source: "\n" }
      ];
      switch (source[0]) {
        case "|":
        case ">": {
          const he = source.indexOf("\n");
          const head2 = source.substring(0, he);
          const body = source.substring(he + 1) + "\n";
          const props = [
            { type: "block-scalar-header", offset, indent, source: head2 }
          ];
          if (!addEndtoBlockProps(props, end))
            props.push({ type: "newline", offset: -1, indent, source: "\n" });
          return { type: "block-scalar", offset, indent, props, source: body };
        }
        case '"':
          return { type: "double-quoted-scalar", offset, indent, source, end };
        case "'":
          return { type: "single-quoted-scalar", offset, indent, source, end };
        default:
          return { type: "scalar", offset, indent, source, end };
      }
    }
    function setScalarValue(token, value, context = {}) {
      let { afterKey = false, implicitKey = false, inFlow = false, type } = context;
      let indent = "indent" in token ? token.indent : null;
      if (afterKey && typeof indent === "number")
        indent += 2;
      if (!type)
        switch (token.type) {
          case "single-quoted-scalar":
            type = "QUOTE_SINGLE";
            break;
          case "double-quoted-scalar":
            type = "QUOTE_DOUBLE";
            break;
          case "block-scalar": {
            const header = token.props[0];
            if (header.type !== "block-scalar-header")
              throw new Error("Invalid block scalar header");
            type = header.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
            break;
          }
          default:
            type = "PLAIN";
        }
      const source = stringifyString.stringifyString({ type, value }, {
        implicitKey: implicitKey || indent === null,
        indent: indent !== null && indent > 0 ? " ".repeat(indent) : "",
        inFlow,
        options: { blockQuote: true, lineWidth: -1 }
      });
      switch (source[0]) {
        case "|":
        case ">":
          setBlockScalarValue(token, source);
          break;
        case '"':
          setFlowScalarValue(token, source, "double-quoted-scalar");
          break;
        case "'":
          setFlowScalarValue(token, source, "single-quoted-scalar");
          break;
        default:
          setFlowScalarValue(token, source, "scalar");
      }
    }
    function setBlockScalarValue(token, source) {
      const he = source.indexOf("\n");
      const head2 = source.substring(0, he);
      const body = source.substring(he + 1) + "\n";
      if (token.type === "block-scalar") {
        const header = token.props[0];
        if (header.type !== "block-scalar-header")
          throw new Error("Invalid block scalar header");
        header.source = head2;
        token.source = body;
      } else {
        const { offset } = token;
        const indent = "indent" in token ? token.indent : -1;
        const props = [
          { type: "block-scalar-header", offset, indent, source: head2 }
        ];
        if (!addEndtoBlockProps(props, "end" in token ? token.end : void 0))
          props.push({ type: "newline", offset: -1, indent, source: "\n" });
        for (const key2 of Object.keys(token))
          if (key2 !== "type" && key2 !== "offset")
            delete token[key2];
        Object.assign(token, { type: "block-scalar", indent, props, source: body });
      }
    }
    function addEndtoBlockProps(props, end) {
      if (end)
        for (const st of end)
          switch (st.type) {
            case "space":
            case "comment":
              props.push(st);
              break;
            case "newline":
              props.push(st);
              return true;
          }
      return false;
    }
    function setFlowScalarValue(token, source, type) {
      switch (token.type) {
        case "scalar":
        case "double-quoted-scalar":
        case "single-quoted-scalar":
          token.type = type;
          token.source = source;
          break;
        case "block-scalar": {
          const end = token.props.slice(1);
          let oa = source.length;
          if (token.props[0].type === "block-scalar-header")
            oa -= token.props[0].source.length;
          for (const tok of end)
            tok.offset += oa;
          delete token.props;
          Object.assign(token, { type, source, end });
          break;
        }
        case "block-map":
        case "block-seq": {
          const offset = token.offset + source.length;
          const nl = { type: "newline", offset, indent: token.indent, source: "\n" };
          delete token.items;
          Object.assign(token, { type, source, end: [nl] });
          break;
        }
        default: {
          const indent = "indent" in token ? token.indent : -1;
          const end = "end" in token && Array.isArray(token.end) ? token.end.filter((st) => st.type === "space" || st.type === "comment" || st.type === "newline") : [];
          for (const key2 of Object.keys(token))
            if (key2 !== "type" && key2 !== "offset")
              delete token[key2];
          Object.assign(token, { type, indent, source, end });
        }
      }
    }
    exports.createScalarToken = createScalarToken;
    exports.resolveAsScalar = resolveAsScalar;
    exports.setScalarValue = setScalarValue;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/cst-stringify.js
var require_cst_stringify = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/cst-stringify.js"(exports) {
    "use strict";
    var stringify = (cst) => "type" in cst ? stringifyToken(cst) : stringifyItem(cst);
    function stringifyToken(token) {
      switch (token.type) {
        case "block-scalar": {
          let res = "";
          for (const tok of token.props)
            res += stringifyToken(tok);
          return res + token.source;
        }
        case "block-map":
        case "block-seq": {
          let res = "";
          for (const item of token.items)
            res += stringifyItem(item);
          return res;
        }
        case "flow-collection": {
          let res = token.start.source;
          for (const item of token.items)
            res += stringifyItem(item);
          for (const st of token.end)
            res += st.source;
          return res;
        }
        case "document": {
          let res = stringifyItem(token);
          if (token.end)
            for (const st of token.end)
              res += st.source;
          return res;
        }
        default: {
          let res = token.source;
          if ("end" in token && token.end)
            for (const st of token.end)
              res += st.source;
          return res;
        }
      }
    }
    function stringifyItem({ start, key: key2, sep: sep3, value }) {
      let res = "";
      for (const st of start)
        res += st.source;
      if (key2)
        res += stringifyToken(key2);
      if (sep3)
        for (const st of sep3)
          res += st.source;
      if (value)
        res += stringifyToken(value);
      return res;
    }
    exports.stringify = stringify;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/cst-visit.js
var require_cst_visit = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/cst-visit.js"(exports) {
    "use strict";
    var BREAK = /* @__PURE__ */ Symbol("break visit");
    var SKIP = /* @__PURE__ */ Symbol("skip children");
    var REMOVE = /* @__PURE__ */ Symbol("remove item");
    function visit(cst, visitor) {
      if ("type" in cst && cst.type === "document")
        cst = { start: cst.start, value: cst.value };
      _visit(Object.freeze([]), cst, visitor);
    }
    visit.BREAK = BREAK;
    visit.SKIP = SKIP;
    visit.REMOVE = REMOVE;
    visit.itemAtPath = (cst, path) => {
      let item = cst;
      for (const [field, index] of path) {
        const tok = item?.[field];
        if (tok && "items" in tok) {
          item = tok.items[index];
        } else
          return void 0;
      }
      return item;
    };
    visit.parentCollection = (cst, path) => {
      const parent = visit.itemAtPath(cst, path.slice(0, -1));
      const field = path[path.length - 1][0];
      const coll = parent?.[field];
      if (coll && "items" in coll)
        return coll;
      throw new Error("Parent collection not found");
    };
    function _visit(path, item, visitor) {
      let ctrl = visitor(item, path);
      if (typeof ctrl === "symbol")
        return ctrl;
      for (const field of ["key", "value"]) {
        const token = item[field];
        if (token && "items" in token) {
          for (let i = 0; i < token.items.length; ++i) {
            const ci = _visit(Object.freeze(path.concat([[field, i]])), token.items[i], visitor);
            if (typeof ci === "number")
              i = ci - 1;
            else if (ci === BREAK)
              return BREAK;
            else if (ci === REMOVE) {
              token.items.splice(i, 1);
              i -= 1;
            }
          }
          if (typeof ctrl === "function" && field === "key")
            ctrl = ctrl(item, path);
        }
      }
      return typeof ctrl === "function" ? ctrl(item, path) : ctrl;
    }
    exports.visit = visit;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/cst.js
var require_cst = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/cst.js"(exports) {
    "use strict";
    var cstScalar = require_cst_scalar();
    var cstStringify = require_cst_stringify();
    var cstVisit = require_cst_visit();
    var BOM = "\uFEFF";
    var DOCUMENT = "";
    var FLOW_END = "";
    var SCALAR = "";
    var isCollection = (token) => !!token && "items" in token;
    var isScalar2 = (token) => !!token && (token.type === "scalar" || token.type === "single-quoted-scalar" || token.type === "double-quoted-scalar" || token.type === "block-scalar");
    function prettyToken(token) {
      switch (token) {
        case BOM:
          return "<BOM>";
        case DOCUMENT:
          return "<DOC>";
        case FLOW_END:
          return "<FLOW_END>";
        case SCALAR:
          return "<SCALAR>";
        default:
          return JSON.stringify(token);
      }
    }
    function tokenType(source) {
      switch (source) {
        case BOM:
          return "byte-order-mark";
        case DOCUMENT:
          return "doc-mode";
        case FLOW_END:
          return "flow-error-end";
        case SCALAR:
          return "scalar";
        case "---":
          return "doc-start";
        case "...":
          return "doc-end";
        case "":
        case "\n":
        case "\r\n":
          return "newline";
        case "-":
          return "seq-item-ind";
        case "?":
          return "explicit-key-ind";
        case ":":
          return "map-value-ind";
        case "{":
          return "flow-map-start";
        case "}":
          return "flow-map-end";
        case "[":
          return "flow-seq-start";
        case "]":
          return "flow-seq-end";
        case ",":
          return "comma";
      }
      switch (source[0]) {
        case " ":
        case "	":
          return "space";
        case "#":
          return "comment";
        case "%":
          return "directive-line";
        case "*":
          return "alias";
        case "&":
          return "anchor";
        case "!":
          return "tag";
        case "'":
          return "single-quoted-scalar";
        case '"':
          return "double-quoted-scalar";
        case "|":
        case ">":
          return "block-scalar-header";
      }
      return null;
    }
    exports.createScalarToken = cstScalar.createScalarToken;
    exports.resolveAsScalar = cstScalar.resolveAsScalar;
    exports.setScalarValue = cstScalar.setScalarValue;
    exports.stringify = cstStringify.stringify;
    exports.visit = cstVisit.visit;
    exports.BOM = BOM;
    exports.DOCUMENT = DOCUMENT;
    exports.FLOW_END = FLOW_END;
    exports.SCALAR = SCALAR;
    exports.isCollection = isCollection;
    exports.isScalar = isScalar2;
    exports.prettyToken = prettyToken;
    exports.tokenType = tokenType;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/lexer.js
var require_lexer = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/lexer.js"(exports) {
    "use strict";
    var cst = require_cst();
    function isEmpty(ch) {
      switch (ch) {
        case void 0:
        case " ":
        case "\n":
        case "\r":
        case "	":
          return true;
        default:
          return false;
      }
    }
    var hexDigits = new Set("0123456789ABCDEFabcdef");
    var tagChars = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()");
    var flowIndicatorChars = new Set(",[]{}");
    var invalidAnchorChars = new Set(" ,[]{}\n\r	");
    var isNotAnchorChar = (ch) => !ch || invalidAnchorChars.has(ch);
    var Lexer = class {
      constructor() {
        this.atEnd = false;
        this.blockScalarIndent = -1;
        this.blockScalarKeep = false;
        this.buffer = "";
        this.flowKey = false;
        this.flowLevel = 0;
        this.indentNext = 0;
        this.indentValue = 0;
        this.lineEndPos = null;
        this.next = null;
        this.pos = 0;
      }
      /**
       * Generate YAML tokens from the `source` string. If `incomplete`,
       * a part of the last line may be left as a buffer for the next call.
       *
       * @returns A generator of lexical tokens
       */
      *lex(source, incomplete = false) {
        if (source) {
          if (typeof source !== "string")
            throw TypeError("source is not a string");
          this.buffer = this.buffer ? this.buffer + source : source;
          this.lineEndPos = null;
        }
        this.atEnd = !incomplete;
        let next = this.next ?? "stream";
        while (next && (incomplete || this.hasChars(1)))
          next = yield* this.parseNext(next);
      }
      atLineEnd() {
        let i = this.pos;
        let ch = this.buffer[i];
        while (ch === " " || ch === "	")
          ch = this.buffer[++i];
        if (!ch || ch === "#" || ch === "\n")
          return true;
        if (ch === "\r")
          return this.buffer[i + 1] === "\n";
        return false;
      }
      charAt(n) {
        return this.buffer[this.pos + n];
      }
      continueScalar(offset) {
        let ch = this.buffer[offset];
        if (this.indentNext > 0) {
          let indent = 0;
          while (ch === " ")
            ch = this.buffer[++indent + offset];
          if (ch === "\r") {
            const next = this.buffer[indent + offset + 1];
            if (next === "\n" || !next && !this.atEnd)
              return offset + indent + 1;
          }
          return ch === "\n" || indent >= this.indentNext || !ch && !this.atEnd ? offset + indent : -1;
        }
        if (ch === "-" || ch === ".") {
          const dt = this.buffer.substr(offset, 3);
          if ((dt === "---" || dt === "...") && isEmpty(this.buffer[offset + 3]))
            return -1;
        }
        return offset;
      }
      getLine() {
        let end = this.lineEndPos;
        if (typeof end !== "number" || end !== -1 && end < this.pos) {
          end = this.buffer.indexOf("\n", this.pos);
          this.lineEndPos = end;
        }
        if (end === -1)
          return this.atEnd ? this.buffer.substring(this.pos) : null;
        if (this.buffer[end - 1] === "\r")
          end -= 1;
        return this.buffer.substring(this.pos, end);
      }
      hasChars(n) {
        return this.pos + n <= this.buffer.length;
      }
      setNext(state) {
        this.buffer = this.buffer.substring(this.pos);
        this.pos = 0;
        this.lineEndPos = null;
        this.next = state;
        return null;
      }
      peek(n) {
        return this.buffer.substr(this.pos, n);
      }
      *parseNext(next) {
        switch (next) {
          case "stream":
            return yield* this.parseStream();
          case "line-start":
            return yield* this.parseLineStart();
          case "block-start":
            return yield* this.parseBlockStart();
          case "doc":
            return yield* this.parseDocument();
          case "flow":
            return yield* this.parseFlowCollection();
          case "quoted-scalar":
            return yield* this.parseQuotedScalar();
          case "block-scalar":
            return yield* this.parseBlockScalar();
          case "plain-scalar":
            return yield* this.parsePlainScalar();
        }
      }
      *parseStream() {
        let line = this.getLine();
        if (line === null)
          return this.setNext("stream");
        if (line[0] === cst.BOM) {
          yield* this.pushCount(1);
          line = line.substring(1);
        }
        if (line[0] === "%") {
          let dirEnd = line.length;
          let cs = line.indexOf("#");
          while (cs !== -1) {
            const ch = line[cs - 1];
            if (ch === " " || ch === "	") {
              dirEnd = cs - 1;
              break;
            } else {
              cs = line.indexOf("#", cs + 1);
            }
          }
          while (true) {
            const ch = line[dirEnd - 1];
            if (ch === " " || ch === "	")
              dirEnd -= 1;
            else
              break;
          }
          const n = (yield* this.pushCount(dirEnd)) + (yield* this.pushSpaces(true));
          yield* this.pushCount(line.length - n);
          this.pushNewline();
          return "stream";
        }
        if (this.atLineEnd()) {
          const sp = yield* this.pushSpaces(true);
          yield* this.pushCount(line.length - sp);
          yield* this.pushNewline();
          return "stream";
        }
        yield cst.DOCUMENT;
        return yield* this.parseLineStart();
      }
      *parseLineStart() {
        const ch = this.charAt(0);
        if (!ch && !this.atEnd)
          return this.setNext("line-start");
        if (ch === "-" || ch === ".") {
          if (!this.atEnd && !this.hasChars(4))
            return this.setNext("line-start");
          const s = this.peek(3);
          if ((s === "---" || s === "...") && isEmpty(this.charAt(3))) {
            yield* this.pushCount(3);
            this.indentValue = 0;
            this.indentNext = 0;
            return s === "---" ? "doc" : "stream";
          }
        }
        this.indentValue = yield* this.pushSpaces(false);
        if (this.indentNext > this.indentValue && !isEmpty(this.charAt(1)))
          this.indentNext = this.indentValue;
        return yield* this.parseBlockStart();
      }
      *parseBlockStart() {
        const [ch0, ch1] = this.peek(2);
        if (!ch1 && !this.atEnd)
          return this.setNext("block-start");
        if ((ch0 === "-" || ch0 === "?" || ch0 === ":") && isEmpty(ch1)) {
          const n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
          this.indentNext = this.indentValue + 1;
          this.indentValue += n;
          return "block-start";
        }
        return "doc";
      }
      *parseDocument() {
        yield* this.pushSpaces(true);
        const line = this.getLine();
        if (line === null)
          return this.setNext("doc");
        let n = yield* this.pushIndicators();
        switch (line[n]) {
          case "#":
            yield* this.pushCount(line.length - n);
          // fallthrough
          case void 0:
            yield* this.pushNewline();
            return yield* this.parseLineStart();
          case "{":
          case "[":
            yield* this.pushCount(1);
            this.flowKey = false;
            this.flowLevel = 1;
            return "flow";
          case "}":
          case "]":
            yield* this.pushCount(1);
            return "doc";
          case "*":
            yield* this.pushUntil(isNotAnchorChar);
            return "doc";
          case '"':
          case "'":
            return yield* this.parseQuotedScalar();
          case "|":
          case ">":
            n += yield* this.parseBlockScalarHeader();
            n += yield* this.pushSpaces(true);
            yield* this.pushCount(line.length - n);
            yield* this.pushNewline();
            return yield* this.parseBlockScalar();
          default:
            return yield* this.parsePlainScalar();
        }
      }
      *parseFlowCollection() {
        let nl, sp;
        let indent = -1;
        do {
          nl = yield* this.pushNewline();
          if (nl > 0) {
            sp = yield* this.pushSpaces(false);
            this.indentValue = indent = sp;
          } else {
            sp = 0;
          }
          sp += yield* this.pushSpaces(true);
        } while (nl + sp > 0);
        const line = this.getLine();
        if (line === null)
          return this.setNext("flow");
        if (indent !== -1 && indent < this.indentNext && line[0] !== "#" || indent === 0 && (line.startsWith("---") || line.startsWith("...")) && isEmpty(line[3])) {
          const atFlowEndMarker = indent === this.indentNext - 1 && this.flowLevel === 1 && (line[0] === "]" || line[0] === "}");
          if (!atFlowEndMarker) {
            this.flowLevel = 0;
            yield cst.FLOW_END;
            return yield* this.parseLineStart();
          }
        }
        let n = 0;
        while (line[n] === ",") {
          n += yield* this.pushCount(1);
          n += yield* this.pushSpaces(true);
          this.flowKey = false;
        }
        n += yield* this.pushIndicators();
        switch (line[n]) {
          case void 0:
            return "flow";
          case "#":
            yield* this.pushCount(line.length - n);
            return "flow";
          case "{":
          case "[":
            yield* this.pushCount(1);
            this.flowKey = false;
            this.flowLevel += 1;
            return "flow";
          case "}":
          case "]":
            yield* this.pushCount(1);
            this.flowKey = true;
            this.flowLevel -= 1;
            return this.flowLevel ? "flow" : "doc";
          case "*":
            yield* this.pushUntil(isNotAnchorChar);
            return "flow";
          case '"':
          case "'":
            this.flowKey = true;
            return yield* this.parseQuotedScalar();
          case ":": {
            const next = this.charAt(1);
            if (this.flowKey || isEmpty(next) || next === ",") {
              this.flowKey = false;
              yield* this.pushCount(1);
              yield* this.pushSpaces(true);
              return "flow";
            }
          }
          // fallthrough
          default:
            this.flowKey = false;
            return yield* this.parsePlainScalar();
        }
      }
      *parseQuotedScalar() {
        const quote = this.charAt(0);
        let end = this.buffer.indexOf(quote, this.pos + 1);
        if (quote === "'") {
          while (end !== -1 && this.buffer[end + 1] === "'")
            end = this.buffer.indexOf("'", end + 2);
        } else {
          while (end !== -1) {
            let n = 0;
            while (this.buffer[end - 1 - n] === "\\")
              n += 1;
            if (n % 2 === 0)
              break;
            end = this.buffer.indexOf('"', end + 1);
          }
        }
        const qb = this.buffer.substring(0, end);
        let nl = qb.indexOf("\n", this.pos);
        if (nl !== -1) {
          while (nl !== -1) {
            const cs = this.continueScalar(nl + 1);
            if (cs === -1)
              break;
            nl = qb.indexOf("\n", cs);
          }
          if (nl !== -1) {
            end = nl - (qb[nl - 1] === "\r" ? 2 : 1);
          }
        }
        if (end === -1) {
          if (!this.atEnd)
            return this.setNext("quoted-scalar");
          end = this.buffer.length;
        }
        yield* this.pushToIndex(end + 1, false);
        return this.flowLevel ? "flow" : "doc";
      }
      *parseBlockScalarHeader() {
        this.blockScalarIndent = -1;
        this.blockScalarKeep = false;
        let i = this.pos;
        while (true) {
          const ch = this.buffer[++i];
          if (ch === "+")
            this.blockScalarKeep = true;
          else if (ch > "0" && ch <= "9")
            this.blockScalarIndent = Number(ch) - 1;
          else if (ch !== "-")
            break;
        }
        return yield* this.pushUntil((ch) => isEmpty(ch) || ch === "#");
      }
      *parseBlockScalar() {
        let nl = this.pos - 1;
        let indent = 0;
        let ch;
        loop: for (let i2 = this.pos; ch = this.buffer[i2]; ++i2) {
          switch (ch) {
            case " ":
              indent += 1;
              break;
            case "\n":
              nl = i2;
              indent = 0;
              break;
            case "\r": {
              const next = this.buffer[i2 + 1];
              if (!next && !this.atEnd)
                return this.setNext("block-scalar");
              if (next === "\n")
                break;
            }
            // fallthrough
            default:
              break loop;
          }
        }
        if (!ch && !this.atEnd)
          return this.setNext("block-scalar");
        if (indent >= this.indentNext) {
          if (this.blockScalarIndent === -1)
            this.indentNext = indent;
          else {
            this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
          }
          do {
            const cs = this.continueScalar(nl + 1);
            if (cs === -1)
              break;
            nl = this.buffer.indexOf("\n", cs);
          } while (nl !== -1);
          if (nl === -1) {
            if (!this.atEnd)
              return this.setNext("block-scalar");
            nl = this.buffer.length;
          }
        }
        let i = nl + 1;
        ch = this.buffer[i];
        while (ch === " ")
          ch = this.buffer[++i];
        if (ch === "	") {
          while (ch === "	" || ch === " " || ch === "\r" || ch === "\n")
            ch = this.buffer[++i];
          nl = i - 1;
        } else if (!this.blockScalarKeep) {
          do {
            let i2 = nl - 1;
            let ch2 = this.buffer[i2];
            if (ch2 === "\r")
              ch2 = this.buffer[--i2];
            const lastChar = i2;
            while (ch2 === " ")
              ch2 = this.buffer[--i2];
            if (ch2 === "\n" && i2 >= this.pos && i2 + 1 + indent > lastChar)
              nl = i2;
            else
              break;
          } while (true);
        }
        yield cst.SCALAR;
        yield* this.pushToIndex(nl + 1, true);
        return yield* this.parseLineStart();
      }
      *parsePlainScalar() {
        const inFlow = this.flowLevel > 0;
        let end = this.pos - 1;
        let i = this.pos - 1;
        let ch;
        while (ch = this.buffer[++i]) {
          if (ch === ":") {
            const next = this.buffer[i + 1];
            if (isEmpty(next) || inFlow && flowIndicatorChars.has(next))
              break;
            end = i;
          } else if (isEmpty(ch)) {
            let next = this.buffer[i + 1];
            if (ch === "\r") {
              if (next === "\n") {
                i += 1;
                ch = "\n";
                next = this.buffer[i + 1];
              } else
                end = i;
            }
            if (next === "#" || inFlow && flowIndicatorChars.has(next))
              break;
            if (ch === "\n") {
              const cs = this.continueScalar(i + 1);
              if (cs === -1)
                break;
              i = Math.max(i, cs - 2);
            }
          } else {
            if (inFlow && flowIndicatorChars.has(ch))
              break;
            end = i;
          }
        }
        if (!ch && !this.atEnd)
          return this.setNext("plain-scalar");
        yield cst.SCALAR;
        yield* this.pushToIndex(end + 1, true);
        return inFlow ? "flow" : "doc";
      }
      *pushCount(n) {
        if (n > 0) {
          yield this.buffer.substr(this.pos, n);
          this.pos += n;
          return n;
        }
        return 0;
      }
      *pushToIndex(i, allowEmpty) {
        const s = this.buffer.slice(this.pos, i);
        if (s) {
          yield s;
          this.pos += s.length;
          return s.length;
        } else if (allowEmpty)
          yield "";
        return 0;
      }
      *pushIndicators() {
        let n = 0;
        loop: while (true) {
          switch (this.charAt(0)) {
            case "!":
              n += yield* this.pushTag();
              n += yield* this.pushSpaces(true);
              continue loop;
            case "&":
              n += yield* this.pushUntil(isNotAnchorChar);
              n += yield* this.pushSpaces(true);
              continue loop;
            case "-":
            // this is an error
            case "?":
            // this is an error outside flow collections
            case ":": {
              const inFlow = this.flowLevel > 0;
              const ch1 = this.charAt(1);
              if (isEmpty(ch1) || inFlow && flowIndicatorChars.has(ch1)) {
                if (!inFlow)
                  this.indentNext = this.indentValue + 1;
                else if (this.flowKey)
                  this.flowKey = false;
                n += yield* this.pushCount(1);
                n += yield* this.pushSpaces(true);
                continue loop;
              }
            }
          }
          break loop;
        }
        return n;
      }
      *pushTag() {
        if (this.charAt(1) === "<") {
          let i = this.pos + 2;
          let ch = this.buffer[i];
          while (!isEmpty(ch) && ch !== ">")
            ch = this.buffer[++i];
          return yield* this.pushToIndex(ch === ">" ? i + 1 : i, false);
        } else {
          let i = this.pos + 1;
          let ch = this.buffer[i];
          while (ch) {
            if (tagChars.has(ch))
              ch = this.buffer[++i];
            else if (ch === "%" && hexDigits.has(this.buffer[i + 1]) && hexDigits.has(this.buffer[i + 2])) {
              ch = this.buffer[i += 3];
            } else
              break;
          }
          return yield* this.pushToIndex(i, false);
        }
      }
      *pushNewline() {
        const ch = this.buffer[this.pos];
        if (ch === "\n")
          return yield* this.pushCount(1);
        else if (ch === "\r" && this.charAt(1) === "\n")
          return yield* this.pushCount(2);
        else
          return 0;
      }
      *pushSpaces(allowTabs) {
        let i = this.pos - 1;
        let ch;
        do {
          ch = this.buffer[++i];
        } while (ch === " " || allowTabs && ch === "	");
        const n = i - this.pos;
        if (n > 0) {
          yield this.buffer.substr(this.pos, n);
          this.pos = i;
        }
        return n;
      }
      *pushUntil(test) {
        let i = this.pos;
        let ch = this.buffer[i];
        while (!test(ch))
          ch = this.buffer[++i];
        return yield* this.pushToIndex(i, false);
      }
    };
    exports.Lexer = Lexer;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/line-counter.js
var require_line_counter = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/line-counter.js"(exports) {
    "use strict";
    var LineCounter2 = class {
      constructor() {
        this.lineStarts = [];
        this.addNewLine = (offset) => this.lineStarts.push(offset);
        this.linePos = (offset) => {
          let low = 0;
          let high = this.lineStarts.length;
          while (low < high) {
            const mid = low + high >> 1;
            if (this.lineStarts[mid] < offset)
              low = mid + 1;
            else
              high = mid;
          }
          if (this.lineStarts[low] === offset)
            return { line: low + 1, col: 1 };
          if (low === 0)
            return { line: 0, col: offset };
          const start = this.lineStarts[low - 1];
          return { line: low, col: offset - start + 1 };
        };
      }
    };
    exports.LineCounter = LineCounter2;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/parser.js
var require_parser = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/parse/parser.js"(exports) {
    "use strict";
    var node_process = __require("process");
    var cst = require_cst();
    var lexer = require_lexer();
    function includesToken(list, type) {
      for (let i = 0; i < list.length; ++i)
        if (list[i].type === type)
          return true;
      return false;
    }
    function findNonEmptyIndex(list) {
      for (let i = 0; i < list.length; ++i) {
        switch (list[i].type) {
          case "space":
          case "comment":
          case "newline":
            break;
          default:
            return i;
        }
      }
      return -1;
    }
    function isFlowToken(token) {
      switch (token?.type) {
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
        case "flow-collection":
          return true;
        default:
          return false;
      }
    }
    function getPrevProps(parent) {
      switch (parent.type) {
        case "document":
          return parent.start;
        case "block-map": {
          const it = parent.items[parent.items.length - 1];
          return it.sep ?? it.start;
        }
        case "block-seq":
          return parent.items[parent.items.length - 1].start;
        /* istanbul ignore next should not happen */
        default:
          return [];
      }
    }
    function getFirstKeyStartProps(prev) {
      if (prev.length === 0)
        return [];
      let i = prev.length;
      loop: while (--i >= 0) {
        switch (prev[i].type) {
          case "doc-start":
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
          case "newline":
            break loop;
        }
      }
      while (prev[++i]?.type === "space") {
      }
      return prev.splice(i, prev.length);
    }
    function arrayPushArray(target, source) {
      if (source.length < 1e5)
        Array.prototype.push.apply(target, source);
      else
        for (let i = 0; i < source.length; ++i)
          target.push(source[i]);
    }
    function fixFlowSeqItems(fc) {
      if (fc.start.type === "flow-seq-start") {
        for (const it of fc.items) {
          if (it.sep && !it.value && !includesToken(it.start, "explicit-key-ind") && !includesToken(it.sep, "map-value-ind")) {
            if (it.key)
              it.value = it.key;
            delete it.key;
            if (isFlowToken(it.value)) {
              if (it.value.end)
                arrayPushArray(it.value.end, it.sep);
              else
                it.value.end = it.sep;
            } else
              arrayPushArray(it.start, it.sep);
            delete it.sep;
          }
        }
      }
    }
    var Parser = class {
      /**
       * @param onNewLine - If defined, called separately with the start position of
       *   each new line (in `parse()`, including the start of input).
       */
      constructor(onNewLine) {
        this.atNewLine = true;
        this.atScalar = false;
        this.indent = 0;
        this.offset = 0;
        this.onKeyLine = false;
        this.stack = [];
        this.source = "";
        this.type = "";
        this.lexer = new lexer.Lexer();
        this.onNewLine = onNewLine;
      }
      /**
       * Parse `source` as a YAML stream.
       * If `incomplete`, a part of the last line may be left as a buffer for the next call.
       *
       * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
       *
       * @returns A generator of tokens representing each directive, document, and other structure.
       */
      *parse(source, incomplete = false) {
        if (this.onNewLine && this.offset === 0)
          this.onNewLine(0);
        for (const lexeme of this.lexer.lex(source, incomplete))
          yield* this.next(lexeme);
        if (!incomplete)
          yield* this.end();
      }
      /**
       * Advance the parser by the `source` of one lexical token.
       */
      *next(source) {
        this.source = source;
        if (node_process.env.LOG_TOKENS)
          console.log("|", cst.prettyToken(source));
        if (this.atScalar) {
          this.atScalar = false;
          yield* this.step();
          this.offset += source.length;
          return;
        }
        const type = cst.tokenType(source);
        if (!type) {
          const message = `Not a YAML token: ${source}`;
          yield* this.pop({ type: "error", offset: this.offset, message, source });
          this.offset += source.length;
        } else if (type === "scalar") {
          this.atNewLine = false;
          this.atScalar = true;
          this.type = "scalar";
        } else {
          this.type = type;
          yield* this.step();
          switch (type) {
            case "newline":
              this.atNewLine = true;
              this.indent = 0;
              if (this.onNewLine)
                this.onNewLine(this.offset + source.length);
              break;
            case "space":
              if (this.atNewLine && source[0] === " ")
                this.indent += source.length;
              break;
            case "explicit-key-ind":
            case "map-value-ind":
            case "seq-item-ind":
              if (this.atNewLine)
                this.indent += source.length;
              break;
            case "doc-mode":
            case "flow-error-end":
              return;
            default:
              this.atNewLine = false;
          }
          this.offset += source.length;
        }
      }
      /** Call at end of input to push out any remaining constructions */
      *end() {
        while (this.stack.length > 0)
          yield* this.pop();
      }
      get sourceToken() {
        const st = {
          type: this.type,
          offset: this.offset,
          indent: this.indent,
          source: this.source
        };
        return st;
      }
      *step() {
        const top = this.peek(1);
        if (this.type === "doc-end" && top?.type !== "doc-end") {
          while (this.stack.length > 0)
            yield* this.pop();
          this.stack.push({
            type: "doc-end",
            offset: this.offset,
            source: this.source
          });
          return;
        }
        if (!top)
          return yield* this.stream();
        switch (top.type) {
          case "document":
            return yield* this.document(top);
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar":
            return yield* this.scalar(top);
          case "block-scalar":
            return yield* this.blockScalar(top);
          case "block-map":
            return yield* this.blockMap(top);
          case "block-seq":
            return yield* this.blockSequence(top);
          case "flow-collection":
            return yield* this.flowCollection(top);
          case "doc-end":
            return yield* this.documentEnd(top);
        }
        yield* this.pop();
      }
      peek(n) {
        return this.stack[this.stack.length - n];
      }
      *pop(error) {
        const token = error ?? this.stack.pop();
        if (!token) {
          const message = "Tried to pop an empty stack";
          yield { type: "error", offset: this.offset, source: "", message };
        } else if (this.stack.length === 0) {
          yield token;
        } else {
          const top = this.peek(1);
          if (token.type === "block-scalar") {
            token.indent = "indent" in top ? top.indent : 0;
          } else if (token.type === "flow-collection" && top.type === "document") {
            token.indent = 0;
          }
          if (token.type === "flow-collection")
            fixFlowSeqItems(token);
          switch (top.type) {
            case "document":
              top.value = token;
              break;
            case "block-scalar":
              top.props.push(token);
              break;
            case "block-map": {
              const it = top.items[top.items.length - 1];
              if (it.value) {
                top.items.push({ start: [], key: token, sep: [] });
                this.onKeyLine = true;
                return;
              } else if (it.sep) {
                it.value = token;
              } else {
                Object.assign(it, { key: token, sep: [] });
                this.onKeyLine = !it.explicitKey;
                return;
              }
              break;
            }
            case "block-seq": {
              const it = top.items[top.items.length - 1];
              if (it.value)
                top.items.push({ start: [], value: token });
              else
                it.value = token;
              break;
            }
            case "flow-collection": {
              const it = top.items[top.items.length - 1];
              if (!it || it.value)
                top.items.push({ start: [], key: token, sep: [] });
              else if (it.sep)
                it.value = token;
              else
                Object.assign(it, { key: token, sep: [] });
              return;
            }
            /* istanbul ignore next should not happen */
            default:
              yield* this.pop();
              yield* this.pop(token);
          }
          if ((top.type === "document" || top.type === "block-map" || top.type === "block-seq") && (token.type === "block-map" || token.type === "block-seq")) {
            const last = token.items[token.items.length - 1];
            if (last && !last.sep && !last.value && last.start.length > 0 && findNonEmptyIndex(last.start) === -1 && (token.indent === 0 || last.start.every((st) => st.type !== "comment" || st.indent < token.indent))) {
              if (top.type === "document")
                top.end = last.start;
              else
                top.items.push({ start: last.start });
              token.items.splice(-1, 1);
            }
          }
        }
      }
      *stream() {
        switch (this.type) {
          case "directive-line":
            yield { type: "directive", offset: this.offset, source: this.source };
            return;
          case "byte-order-mark":
          case "space":
          case "comment":
          case "newline":
            yield this.sourceToken;
            return;
          case "doc-mode":
          case "doc-start": {
            const doc = {
              type: "document",
              offset: this.offset,
              start: []
            };
            if (this.type === "doc-start")
              doc.start.push(this.sourceToken);
            this.stack.push(doc);
            return;
          }
        }
        yield {
          type: "error",
          offset: this.offset,
          message: `Unexpected ${this.type} token in YAML stream`,
          source: this.source
        };
      }
      *document(doc) {
        if (doc.value)
          return yield* this.lineEnd(doc);
        switch (this.type) {
          case "doc-start": {
            if (findNonEmptyIndex(doc.start) !== -1) {
              yield* this.pop();
              yield* this.step();
            } else
              doc.start.push(this.sourceToken);
            return;
          }
          case "anchor":
          case "tag":
          case "space":
          case "comment":
          case "newline":
            doc.start.push(this.sourceToken);
            return;
        }
        const bv = this.startBlockValue(doc);
        if (bv)
          this.stack.push(bv);
        else {
          yield {
            type: "error",
            offset: this.offset,
            message: `Unexpected ${this.type} token in YAML document`,
            source: this.source
          };
        }
      }
      *scalar(scalar2) {
        if (this.type === "map-value-ind") {
          const prev = getPrevProps(this.peek(2));
          const start = getFirstKeyStartProps(prev);
          let sep3;
          if (scalar2.end) {
            sep3 = scalar2.end;
            sep3.push(this.sourceToken);
            delete scalar2.end;
          } else
            sep3 = [this.sourceToken];
          const map = {
            type: "block-map",
            offset: scalar2.offset,
            indent: scalar2.indent,
            items: [{ start, key: scalar2, sep: sep3 }]
          };
          this.onKeyLine = true;
          this.stack[this.stack.length - 1] = map;
        } else
          yield* this.lineEnd(scalar2);
      }
      *blockScalar(scalar2) {
        switch (this.type) {
          case "space":
          case "comment":
          case "newline":
            scalar2.props.push(this.sourceToken);
            return;
          case "scalar":
            scalar2.source = this.source;
            this.atNewLine = true;
            this.indent = 0;
            if (this.onNewLine) {
              let nl = this.source.indexOf("\n") + 1;
              while (nl !== 0) {
                this.onNewLine(this.offset + nl);
                nl = this.source.indexOf("\n", nl) + 1;
              }
            }
            yield* this.pop();
            break;
          /* istanbul ignore next should not happen */
          default:
            yield* this.pop();
            yield* this.step();
        }
      }
      *blockMap(map) {
        const it = map.items[map.items.length - 1];
        switch (this.type) {
          case "newline":
            this.onKeyLine = false;
            if (it.value) {
              const end = "end" in it.value ? it.value.end : void 0;
              const last = Array.isArray(end) ? end[end.length - 1] : void 0;
              if (last?.type === "comment")
                end?.push(this.sourceToken);
              else
                map.items.push({ start: [this.sourceToken] });
            } else if (it.sep) {
              it.sep.push(this.sourceToken);
            } else {
              it.start.push(this.sourceToken);
            }
            return;
          case "space":
          case "comment":
            if (it.value) {
              map.items.push({ start: [this.sourceToken] });
            } else if (it.sep) {
              it.sep.push(this.sourceToken);
            } else {
              if (this.atIndentedComment(it.start, map.indent)) {
                const prev = map.items[map.items.length - 2];
                const end = prev?.value?.end;
                if (Array.isArray(end)) {
                  arrayPushArray(end, it.start);
                  end.push(this.sourceToken);
                  map.items.pop();
                  return;
                }
              }
              it.start.push(this.sourceToken);
            }
            return;
        }
        if (this.indent >= map.indent) {
          const atMapIndent = !this.onKeyLine && this.indent === map.indent;
          const atNextItem = atMapIndent && (it.sep || it.explicitKey) && this.type !== "seq-item-ind";
          let start = [];
          if (atNextItem && it.sep && !it.value) {
            const nl = [];
            for (let i = 0; i < it.sep.length; ++i) {
              const st = it.sep[i];
              switch (st.type) {
                case "newline":
                  nl.push(i);
                  break;
                case "space":
                  break;
                case "comment":
                  if (st.indent > map.indent)
                    nl.length = 0;
                  break;
                default:
                  nl.length = 0;
              }
            }
            if (nl.length >= 2)
              start = it.sep.splice(nl[1]);
          }
          switch (this.type) {
            case "anchor":
            case "tag":
              if (atNextItem || it.value) {
                start.push(this.sourceToken);
                map.items.push({ start });
                this.onKeyLine = true;
              } else if (it.sep) {
                it.sep.push(this.sourceToken);
              } else {
                it.start.push(this.sourceToken);
              }
              return;
            case "explicit-key-ind":
              if (!it.sep && !it.explicitKey) {
                it.start.push(this.sourceToken);
                it.explicitKey = true;
              } else if (atNextItem || it.value) {
                start.push(this.sourceToken);
                map.items.push({ start, explicitKey: true });
              } else {
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: [this.sourceToken], explicitKey: true }]
                });
              }
              this.onKeyLine = true;
              return;
            case "map-value-ind":
              if (it.explicitKey) {
                if (!it.sep) {
                  if (includesToken(it.start, "newline")) {
                    Object.assign(it, { key: null, sep: [this.sourceToken] });
                  } else {
                    const start2 = getFirstKeyStartProps(it.start);
                    this.stack.push({
                      type: "block-map",
                      offset: this.offset,
                      indent: this.indent,
                      items: [{ start: start2, key: null, sep: [this.sourceToken] }]
                    });
                  }
                } else if (it.value) {
                  map.items.push({ start: [], key: null, sep: [this.sourceToken] });
                } else if (includesToken(it.sep, "map-value-ind")) {
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start, key: null, sep: [this.sourceToken] }]
                  });
                } else if (isFlowToken(it.key) && !includesToken(it.sep, "newline")) {
                  const start2 = getFirstKeyStartProps(it.start);
                  const key2 = it.key;
                  const sep3 = it.sep;
                  sep3.push(this.sourceToken);
                  delete it.key;
                  delete it.sep;
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start: start2, key: key2, sep: sep3 }]
                  });
                } else if (start.length > 0) {
                  it.sep = it.sep.concat(start, this.sourceToken);
                } else {
                  it.sep.push(this.sourceToken);
                }
              } else {
                if (!it.sep) {
                  Object.assign(it, { key: null, sep: [this.sourceToken] });
                } else if (it.value || atNextItem) {
                  map.items.push({ start, key: null, sep: [this.sourceToken] });
                } else if (includesToken(it.sep, "map-value-ind")) {
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start: [], key: null, sep: [this.sourceToken] }]
                  });
                } else {
                  it.sep.push(this.sourceToken);
                }
              }
              this.onKeyLine = true;
              return;
            case "alias":
            case "scalar":
            case "single-quoted-scalar":
            case "double-quoted-scalar": {
              const fs = this.flowScalar(this.type);
              if (atNextItem || it.value) {
                map.items.push({ start, key: fs, sep: [] });
                this.onKeyLine = true;
              } else if (it.sep) {
                this.stack.push(fs);
              } else {
                Object.assign(it, { key: fs, sep: [] });
                this.onKeyLine = true;
              }
              return;
            }
            default: {
              const bv = this.startBlockValue(map);
              if (bv) {
                if (bv.type === "block-seq") {
                  if (!it.explicitKey && it.sep && !includesToken(it.sep, "newline")) {
                    yield* this.pop({
                      type: "error",
                      offset: this.offset,
                      message: "Unexpected block-seq-ind on same line with key",
                      source: this.source
                    });
                    return;
                  }
                } else if (atMapIndent) {
                  map.items.push({ start });
                }
                this.stack.push(bv);
                return;
              }
            }
          }
        }
        yield* this.pop();
        yield* this.step();
      }
      *blockSequence(seq) {
        const it = seq.items[seq.items.length - 1];
        switch (this.type) {
          case "newline":
            if (it.value) {
              const end = "end" in it.value ? it.value.end : void 0;
              const last = Array.isArray(end) ? end[end.length - 1] : void 0;
              if (last?.type === "comment")
                end?.push(this.sourceToken);
              else
                seq.items.push({ start: [this.sourceToken] });
            } else
              it.start.push(this.sourceToken);
            return;
          case "space":
          case "comment":
            if (it.value)
              seq.items.push({ start: [this.sourceToken] });
            else {
              if (this.atIndentedComment(it.start, seq.indent)) {
                const prev = seq.items[seq.items.length - 2];
                const end = prev?.value?.end;
                if (Array.isArray(end)) {
                  arrayPushArray(end, it.start);
                  end.push(this.sourceToken);
                  seq.items.pop();
                  return;
                }
              }
              it.start.push(this.sourceToken);
            }
            return;
          case "anchor":
          case "tag":
            if (it.value || this.indent <= seq.indent)
              break;
            it.start.push(this.sourceToken);
            return;
          case "seq-item-ind":
            if (this.indent !== seq.indent)
              break;
            if (it.value || includesToken(it.start, "seq-item-ind"))
              seq.items.push({ start: [this.sourceToken] });
            else
              it.start.push(this.sourceToken);
            return;
        }
        if (this.indent > seq.indent) {
          const bv = this.startBlockValue(seq);
          if (bv) {
            this.stack.push(bv);
            return;
          }
        }
        yield* this.pop();
        yield* this.step();
      }
      *flowCollection(fc) {
        const it = fc.items[fc.items.length - 1];
        if (this.type === "flow-error-end") {
          let top;
          do {
            yield* this.pop();
            top = this.peek(1);
          } while (top?.type === "flow-collection");
        } else if (fc.end.length === 0) {
          switch (this.type) {
            case "comma":
            case "explicit-key-ind":
              if (!it || it.sep)
                fc.items.push({ start: [this.sourceToken] });
              else
                it.start.push(this.sourceToken);
              return;
            case "map-value-ind":
              if (!it || it.value)
                fc.items.push({ start: [], key: null, sep: [this.sourceToken] });
              else if (it.sep)
                it.sep.push(this.sourceToken);
              else
                Object.assign(it, { key: null, sep: [this.sourceToken] });
              return;
            case "space":
            case "comment":
            case "newline":
            case "anchor":
            case "tag":
              if (!it || it.value)
                fc.items.push({ start: [this.sourceToken] });
              else if (it.sep)
                it.sep.push(this.sourceToken);
              else
                it.start.push(this.sourceToken);
              return;
            case "alias":
            case "scalar":
            case "single-quoted-scalar":
            case "double-quoted-scalar": {
              const fs = this.flowScalar(this.type);
              if (!it || it.value)
                fc.items.push({ start: [], key: fs, sep: [] });
              else if (it.sep)
                this.stack.push(fs);
              else
                Object.assign(it, { key: fs, sep: [] });
              return;
            }
            case "flow-map-end":
            case "flow-seq-end":
              fc.end.push(this.sourceToken);
              return;
          }
          const bv = this.startBlockValue(fc);
          if (bv)
            this.stack.push(bv);
          else {
            yield* this.pop();
            yield* this.step();
          }
        } else {
          const parent = this.peek(2);
          if (parent.type === "block-map" && (this.type === "map-value-ind" && parent.indent === fc.indent || this.type === "newline" && !parent.items[parent.items.length - 1].sep)) {
            yield* this.pop();
            yield* this.step();
          } else if (this.type === "map-value-ind" && parent.type !== "flow-collection") {
            const prev = getPrevProps(parent);
            const start = getFirstKeyStartProps(prev);
            fixFlowSeqItems(fc);
            const sep3 = fc.end.splice(1, fc.end.length);
            sep3.push(this.sourceToken);
            const map = {
              type: "block-map",
              offset: fc.offset,
              indent: fc.indent,
              items: [{ start, key: fc, sep: sep3 }]
            };
            this.onKeyLine = true;
            this.stack[this.stack.length - 1] = map;
          } else {
            yield* this.lineEnd(fc);
          }
        }
      }
      flowScalar(type) {
        if (this.onNewLine) {
          let nl = this.source.indexOf("\n") + 1;
          while (nl !== 0) {
            this.onNewLine(this.offset + nl);
            nl = this.source.indexOf("\n", nl) + 1;
          }
        }
        return {
          type,
          offset: this.offset,
          indent: this.indent,
          source: this.source
        };
      }
      startBlockValue(parent) {
        switch (this.type) {
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar":
            return this.flowScalar(this.type);
          case "block-scalar-header":
            return {
              type: "block-scalar",
              offset: this.offset,
              indent: this.indent,
              props: [this.sourceToken],
              source: ""
            };
          case "flow-map-start":
          case "flow-seq-start":
            return {
              type: "flow-collection",
              offset: this.offset,
              indent: this.indent,
              start: this.sourceToken,
              items: [],
              end: []
            };
          case "seq-item-ind":
            return {
              type: "block-seq",
              offset: this.offset,
              indent: this.indent,
              items: [{ start: [this.sourceToken] }]
            };
          case "explicit-key-ind": {
            this.onKeyLine = true;
            const prev = getPrevProps(parent);
            const start = getFirstKeyStartProps(prev);
            start.push(this.sourceToken);
            return {
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{ start, explicitKey: true }]
            };
          }
          case "map-value-ind": {
            this.onKeyLine = true;
            const prev = getPrevProps(parent);
            const start = getFirstKeyStartProps(prev);
            return {
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{ start, key: null, sep: [this.sourceToken] }]
            };
          }
        }
        return null;
      }
      atIndentedComment(start, indent) {
        if (this.type !== "comment")
          return false;
        if (this.indent <= indent)
          return false;
        return start.every((st) => st.type === "newline" || st.type === "space");
      }
      *documentEnd(docEnd) {
        if (this.type !== "doc-mode") {
          if (docEnd.end)
            docEnd.end.push(this.sourceToken);
          else
            docEnd.end = [this.sourceToken];
          if (this.type === "newline")
            yield* this.pop();
        }
      }
      *lineEnd(token) {
        switch (this.type) {
          case "comma":
          case "doc-start":
          case "doc-end":
          case "flow-seq-end":
          case "flow-map-end":
          case "map-value-ind":
            yield* this.pop();
            yield* this.step();
            break;
          case "newline":
            this.onKeyLine = false;
          // fallthrough
          case "space":
          case "comment":
          default:
            if (token.end)
              token.end.push(this.sourceToken);
            else
              token.end = [this.sourceToken];
            if (this.type === "newline")
              yield* this.pop();
        }
      }
    };
    exports.Parser = Parser;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/public-api.js
var require_public_api = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/public-api.js"(exports) {
    "use strict";
    var composer = require_composer();
    var Document = require_Document();
    var errors = require_errors();
    var log = require_log();
    var identity = require_identity();
    var lineCounter = require_line_counter();
    var parser = require_parser();
    function parseOptions(options) {
      const prettyErrors = options.prettyErrors !== false;
      const lineCounter$1 = options.lineCounter || prettyErrors && new lineCounter.LineCounter() || null;
      return { lineCounter: lineCounter$1, prettyErrors };
    }
    function parseAllDocuments(source, options = {}) {
      const { lineCounter: lineCounter2, prettyErrors } = parseOptions(options);
      const parser$1 = new parser.Parser(lineCounter2?.addNewLine);
      const composer$1 = new composer.Composer(options);
      const docs = Array.from(composer$1.compose(parser$1.parse(source)));
      if (prettyErrors && lineCounter2)
        for (const doc of docs) {
          doc.errors.forEach(errors.prettifyError(source, lineCounter2));
          doc.warnings.forEach(errors.prettifyError(source, lineCounter2));
        }
      if (docs.length > 0)
        return docs;
      return Object.assign([], { empty: true }, composer$1.streamInfo());
    }
    function parseDocument2(source, options = {}) {
      const { lineCounter: lineCounter2, prettyErrors } = parseOptions(options);
      const parser$1 = new parser.Parser(lineCounter2?.addNewLine);
      const composer$1 = new composer.Composer(options);
      let doc = null;
      for (const _doc of composer$1.compose(parser$1.parse(source), true, source.length)) {
        if (!doc)
          doc = _doc;
        else if (doc.options.logLevel !== "silent") {
          doc.errors.push(new errors.YAMLParseError(_doc.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
          break;
        }
      }
      if (prettyErrors && lineCounter2) {
        doc.errors.forEach(errors.prettifyError(source, lineCounter2));
        doc.warnings.forEach(errors.prettifyError(source, lineCounter2));
      }
      return doc;
    }
    function parse(src, reviver, options) {
      let _reviver = void 0;
      if (typeof reviver === "function") {
        _reviver = reviver;
      } else if (options === void 0 && reviver && typeof reviver === "object") {
        options = reviver;
      }
      const doc = parseDocument2(src, options);
      if (!doc)
        return null;
      doc.warnings.forEach((warning) => log.warn(doc.options.logLevel, warning));
      if (doc.errors.length > 0) {
        if (doc.options.logLevel !== "silent")
          throw doc.errors[0];
        else
          doc.errors = [];
      }
      return doc.toJS(Object.assign({ reviver: _reviver }, options));
    }
    function stringify(value, replacer, options) {
      let _replacer = null;
      if (typeof replacer === "function" || Array.isArray(replacer)) {
        _replacer = replacer;
      } else if (options === void 0 && replacer) {
        options = replacer;
      }
      if (typeof options === "string")
        options = options.length;
      if (typeof options === "number") {
        const indent = Math.round(options);
        options = indent < 1 ? void 0 : indent > 8 ? { indent: 8 } : { indent };
      }
      if (value === void 0) {
        const { keepUndefined } = options ?? replacer ?? {};
        if (!keepUndefined)
          return void 0;
      }
      if (identity.isDocument(value) && !_replacer)
        return value.toString(options);
      return new Document.Document(value, _replacer, options).toString(options);
    }
    exports.parse = parse;
    exports.parseAllDocuments = parseAllDocuments;
    exports.parseDocument = parseDocument2;
    exports.stringify = stringify;
  }
});

// ../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/index.js
var require_dist2 = __commonJS({
  "../../node_modules/.pnpm/yaml@2.9.1/node_modules/yaml/dist/index.js"(exports) {
    "use strict";
    var composer = require_composer();
    var Document = require_Document();
    var Schema = require_Schema();
    var errors = require_errors();
    var Alias = require_Alias();
    var identity = require_identity();
    var Pair = require_Pair();
    var Scalar = require_Scalar();
    var YAMLMap = require_YAMLMap();
    var YAMLSeq = require_YAMLSeq();
    var cst = require_cst();
    var lexer = require_lexer();
    var lineCounter = require_line_counter();
    var parser = require_parser();
    var publicApi = require_public_api();
    var visit = require_visit();
    exports.Composer = composer.Composer;
    exports.Document = Document.Document;
    exports.Schema = Schema.Schema;
    exports.YAMLError = errors.YAMLError;
    exports.YAMLParseError = errors.YAMLParseError;
    exports.YAMLWarning = errors.YAMLWarning;
    exports.Alias = Alias.Alias;
    exports.isAlias = identity.isAlias;
    exports.isCollection = identity.isCollection;
    exports.isDocument = identity.isDocument;
    exports.isMap = identity.isMap;
    exports.isNode = identity.isNode;
    exports.isPair = identity.isPair;
    exports.isScalar = identity.isScalar;
    exports.isSeq = identity.isSeq;
    exports.Pair = Pair.Pair;
    exports.Scalar = Scalar.Scalar;
    exports.YAMLMap = YAMLMap.YAMLMap;
    exports.YAMLSeq = YAMLSeq.YAMLSeq;
    exports.CST = cst;
    exports.Lexer = lexer.Lexer;
    exports.LineCounter = lineCounter.LineCounter;
    exports.Parser = parser.Parser;
    exports.parse = publicApi.parse;
    exports.parseAllDocuments = publicApi.parseAllDocuments;
    exports.parseDocument = publicApi.parseDocument;
    exports.stringify = publicApi.stringify;
    exports.visit = visit.visit;
    exports.visitAsync = visit.visitAsync;
  }
});

// src/index.ts
import { Command } from "commander";

// src/core/context.ts
import { createInterface } from "readline";

// src/core/output.ts
import pc from "picocolors";
var Out = class {
  constructor(opts, write = (s) => process.stdout.write(s)) {
    this.opts = opts;
    this.write = write;
  }
  opts;
  write;
  lines = [];
  line(s = "") {
    this.lines.push(s);
  }
  ok = (s) => this.line(`${pc.green("OK  ")} ${s}`);
  warn = (s) => this.line(`${pc.yellow("WARN")} ${s}`);
  fail = (s) => this.line(`${pc.red("FAIL")} ${s}`);
  info = (s) => this.line(`${pc.dim("INFO")} ${s}`);
  /** print the lines collected so far (before a prompt, so lists appear above the question); no-op with --json */
  drain() {
    if (this.opts.json || !this.lines.length) return;
    this.write(this.lines.join("\n") + "\n");
    this.lines = [];
  }
  /** print once at the end; `data` is the stable --json shape */
  flush(data) {
    this.write(this.opts.json ? JSON.stringify(data, null, 2) + "\n" : this.lines.join("\n") + (this.lines.length ? "\n" : ""));
  }
};
var mark = { err: pc.red("\u2716"), warn: pc.yellow("\u26A0") };
var isTty = () => !!process.stdin.isTTY && !!process.stdout.isTTY;

// src/core/context.ts
function stdinPrompter() {
  let it = null;
  const next = async () => {
    it ??= createInterface({ input: process.stdin })[Symbol.asyncIterator]();
    const r = await it.next();
    return r.done ? "" : r.value;
  };
  return {
    interactive: isTty(),
    async ask(q, def) {
      process.stderr.write(`${q}${def ? ` [${def}]` : ""}: `);
      const a = (await next()).trim();
      return a || def || "";
    },
    async confirm(q, def) {
      process.stderr.write(def ? `${q} (Y/n): ` : `${q} (type yes): `);
      const a = (await next()).trim().toLowerCase();
      if (def && a === "") return true;
      return a === "yes" || def === true && a === "y";
    }
  };
}
function withDrain(p, out) {
  return {
    interactive: p.interactive,
    ask: (q, d) => {
      out.drain();
      return p.ask(q, d);
    },
    confirm: (q, d) => {
      out.drain();
      return p.confirm(q, d);
    }
  };
}

// src/core/errors.ts
var CliError = class extends Error {
  constructor(code, message, exitCode = 1) {
    super(message);
    this.code = code;
    this.exitCode = exitCode;
  }
  code;
  exitCode;
};
var usage = (m) => new CliError("USAGE", m, 2);
var notRepo = (m) => new CliError("NOT_RODO_REPO", m, 3);

// src/core/discovery.ts
import { existsSync as existsSync3, readdirSync, statSync } from "fs";
import { dirname as dirname2, join as join2, relative, resolve, sep } from "path";

// src/core/project.ts
import { existsSync as existsSync2 } from "fs";
import { join } from "path";

// src/core/fs-atomic.ts
import { mkdirSync, renameSync, writeFileSync, readFileSync, existsSync } from "fs";
import { createHash } from "crypto";
import { dirname } from "path";
function writeAtomic(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  const tmp = `${path}.${process.pid}.${Date.now()}.tmp`;
  writeFileSync(tmp, data);
  renameSync(tmp, path);
}
var readText = (path) => readFileSync(path, "utf8");
var readJson = (path) => {
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readText(path));
  } catch {
    return null;
  }
};
var writeJson = (path, v) => writeAtomic(path, JSON.stringify(v, null, 2) + "\n");
var sha256 = (b) => `sha256:${createHash("sha256").update(b).digest("hex")}`;
var posix = (p) => p.replaceAll(String.fromCharCode(92), "/");

// src/core/project.ts
var SLUG_RE = /^[a-z0-9][a-z0-9-]{1,31}$/;
function slugify(s) {
  const slug2 = s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 32).replace(/-+$/, "");
  return SLUG_RE.test(slug2) ? slug2 : "project";
}
function slugProblem(slug2) {
  if (!SLUG_RE.test(slug2)) return `project slug must match ${SLUG_RE.source}`;
  if (slug2 === "kit") return '"kit" is a reserved name';
  return null;
}
function readProject(dir, slug2) {
  const path = join(dir, "project.json");
  if (!existsSync2(path)) return { project: null, problem: "project.json is missing" };
  const p = readJson(path);
  if (!p || typeof p !== "object") return { project: null, problem: "project.json is not valid JSON" };
  if (p.projectSlug !== slug2) return { project: null, problem: `projectSlug "${String(p.projectSlug)}" does not match the folder "${slug2}"` };
  const bad = slugProblem(slug2);
  if (bad) return { project: null, problem: bad };
  return {
    project: {
      schemaVersion: 2,
      projectSlug: slug2,
      name: p.name ?? slug2,
      serverUrl: p.serverUrl ?? null,
      boardId: p.boardId ?? null,
      repoFingerprint: p.repoFingerprint ?? null,
      language: { simple: p.language?.simple === "en" ? "en" : "fa", technical: p.language?.technical ?? "en" },
      testCommand: p.testCommand ?? null,
      stepsDirs: Array.isArray(p.stepsDirs) ? p.stepsDirs : []
    },
    problem: null
  };
}
function formatProjectJson(p) {
  const s = JSON.stringify(p, null, 2);
  const one = s.replace(/\[\n\s*([^\[\]{}\n]*(?:\n\s*[^\[\]{}\n]*)*?)\n\s*\]/g, (m, body) => {
    const items = body.split(/,\n\s*/).map((x) => x.trim());
    const line = `[${items.join(", ")}]`;
    return line.length <= 80 ? line : m;
  }).replace(/\{\n\s*("[^"\n]+": [^{}\[\]\n]+(?:,\n\s*"[^"\n]+": [^{}\[\]\n]+)*)\n\s*\}/g, (m, body, offset) => {
    if (offset === 0) return m;
    const line = `{ ${body.split(/,\n\s*/).map((x) => x.trim()).join(", ")} }`;
    return line.length <= 80 ? line : m;
  });
  return one + "\n";
}
var writeProject = (dir, p) => writeAtomic(join(dir, "project.json"), formatProjectJson(p));

// src/core/discovery.ts
function findRoot(cwd) {
  let dir = resolve(cwd);
  for (; ; ) {
    if (existsSync3(join2(dir, ".git"))) return { root: dir, hasGit: true };
    if (existsSync3(join2(dir, "rodo", "kit.json"))) return { root: dir, hasGit: false };
    const up = dirname2(dir);
    if (up === dir) return null;
    dir = up;
  }
}
var isLegacyLayout = (root) => existsSync3(join2(root, "rodo", "MAP.md")) || existsSync3(join2(root, "rodo", "config.json"));
function discover(cwd) {
  const found = findRoot(cwd);
  if (!found) throw notRepo("not inside a git repository or a RODO repo (no .git, no rodo/kit.json)");
  const { root, hasGit: hasGit2 } = found;
  const rodo = join2(root, "rodo");
  const projects = [];
  const legacy = isLegacyLayout(root);
  if (existsSync3(rodo)) {
    for (const name of readdirSync(rodo).sort()) {
      const dir = join2(rodo, name);
      if (!statSync(dir).isDirectory() || !existsSync3(join2(dir, "project.json"))) continue;
      const r = readProject(dir, name);
      projects.push({ slug: name, dir, project: r.project, problem: r.problem, legacy: false });
    }
  }
  if (legacy) projects.push({ slug: "legacy", dir: rodo, project: null, problem: null, legacy: true });
  const rel = relative(rodo, resolve(cwd));
  const first = rel && !rel.startsWith("..") ? rel.split(sep)[0] : null;
  const cwdProject = first && projects.some((p) => p.slug === first && !p.legacy) ? first : null;
  return { root, hasGit: hasGit2, projects, legacy, cwdProject };
}
function selectProjects(d, names, defaultToCwd) {
  if (names.length) {
    return names.map((n) => {
      const p = d.projects.find((x) => x.slug === n);
      if (!p) throw notRepo(`project "${n}" not found under rodo/`);
      return p;
    });
  }
  if (defaultToCwd && d.cwdProject) return d.projects.filter((p) => p.slug === d.cwdProject);
  return d.projects;
}

// src/auth/login.ts
import { hostname } from "os";

// src/net/errors.ts
var ApiError = class extends Error {
  constructor(status, code, message, body = {}) {
    super(message);
    this.status = status;
    this.code = code;
    this.body = body;
  }
  status;
  code;
  body;
  get offline() {
    return this.status === 0;
  }
};
function exitCodeFor(e2) {
  if (e2.status === 401 || ["DEVICE_TOKEN_INVALID", "DEVICE_REVOKED", "DEVICE_EXPIRED", "CLI_TOO_OLD"].includes(e2.code)) return 4;
  if (e2.code === "REPOSITORY_MISMATCH") return 6;
  return 1;
}
var toCliError = (e2) => new CliError(e2.code, `${e2.code}: ${e2.message}`, exitCodeFor(e2));

// src/net/http.ts
var wait = (ms) => new Promise((r) => setTimeout(r, ms));
var Http = class {
  constructor(opts) {
    this.opts = opts;
  }
  opts;
  async request(method, path, init = {}) {
    const base = this.opts.baseUrl.endsWith("/") ? this.opts.baseUrl : `${this.opts.baseUrl}/`;
    const url = new URL(path.replace(/^\//, ""), base);
    for (const [k, v] of Object.entries(init.query ?? {})) if (v !== void 0) url.searchParams.set(k, String(v));
    const headers = { Accept: "application/json" };
    if (init.body !== void 0) headers["Content-Type"] = "application/json";
    if (this.opts.token) headers.Authorization = `Bearer ${this.opts.token}`;
    if (this.opts.cliVersion) headers["X-Rodo-Cli-Version"] = this.opts.cliVersion;
    if (this.opts.fingerprint) headers["X-Rodo-Repo-Fingerprint"] = this.opts.fingerprint;
    const sleep2 = this.opts.sleep ?? wait;
    let last = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      if (attempt > 0) await sleep2(300 * 3 ** (attempt - 1));
      try {
        const res = await fetch(url, {
          method,
          headers,
          body: init.body === void 0 ? void 0 : JSON.stringify(init.body),
          signal: AbortSignal.timeout(this.opts.timeoutMs ?? 3e4)
        });
        const text = await res.text();
        const json = text ? safeJson(text) : {};
        if (res.ok) return json;
        const err = new ApiError(res.status, String(json.code ?? `HTTP_${res.status}`), String(json.message ?? res.statusText), json);
        if (res.status < 500) throw err;
        last = err;
      } catch (e2) {
        if (e2 instanceof ApiError && e2.status !== 0 && e2.status < 500) throw e2;
        last = e2 instanceof ApiError ? e2 : new ApiError(0, "OFFLINE", e2 instanceof Error ? e2.message : "network error");
      }
    }
    throw last;
  }
  get = (path, query) => this.request("GET", path, { query });
  post = (path, body) => this.request("POST", path, { body: body ?? {} });
};
function safeJson(text) {
  try {
    const v = JSON.parse(text);
    return v && typeof v === "object" ? v : { message: text };
  } catch {
    return { message: text.slice(0, 200) };
  }
}

// src/net/discovery.ts
async function discover2(serverUrl) {
  try {
    const d = await new Http({ baseUrl: serverUrl, timeoutMs: 1e4 }).get("/.well-known/rodo.json");
    return { apiBaseUrl: (d.apiBaseUrl || serverUrl).replace(/\/$/, ""), minCliVersion: d.minCliVersion ?? null, latestKitVersion: d.latestKitVersion ?? null };
  } catch (e2) {
    if (e2.offline) throw e2;
    return { apiBaseUrl: serverUrl.replace(/\/$/, ""), minCliVersion: null, latestKitVersion: null };
  }
}

// src/auth/credentials-file.ts
import { execFileSync } from "child_process";
import { chmodSync, existsSync as existsSync4, mkdirSync as mkdirSync2, readFileSync as readFileSync2, statSync as statSync2 } from "fs";
import { homedir } from "os";
import { join as join3 } from "path";
var rodoHome = () => process.env.RODO_HOME ?? join3(homedir(), ".rodo");
var credentialsPath = () => join3(rodoHome(), "credentials");
function restrict(path) {
  if (process.platform === "win32") {
    try {
      execFileSync("icacls", [path, "/inheritance:r", "/grant:r", `${process.env.USERNAME ?? ""}:F`], { stdio: "ignore" });
    } catch {
    }
  } else chmodSync(path, 384);
}
function readCredentials() {
  const p = credentialsPath();
  if (!existsSync4(p)) return {};
  try {
    return JSON.parse(readFileSync2(p, "utf8"));
  } catch {
    return {};
  }
}
function writeCredentials(all) {
  mkdirSync2(rodoHome(), { recursive: true, mode: 448 });
  writeAtomic(credentialsPath(), JSON.stringify(all, null, 2) + "\n");
  restrict(credentialsPath());
}
function credentialsTooOpen() {
  const p = credentialsPath();
  if (process.platform === "win32" || !existsSync4(p)) return false;
  return (statSync2(p).mode & 63) !== 0;
}

// src/auth/token-store.ts
var key = (serverUrl) => serverUrl.replace(/\/$/, "");
function getToken(serverUrl) {
  const env = process.env.RODO_TOKEN;
  if (env) return { token: env, deviceId: "", expiresAt: "" };
  return readCredentials()[key(serverUrl)] ?? null;
}
function saveToken(serverUrl, t2) {
  writeCredentials({ ...readCredentials(), [key(serverUrl)]: t2 });
}
function deleteToken(serverUrl) {
  const all = readCredentials();
  delete all[key(serverUrl)];
  writeCredentials(all);
}

// src/auth/login.ts
var platformName = () => process.platform === "win32" ? "WINDOWS" : process.platform === "darwin" ? "MACOS" : "LINUX";
var wait2 = (ms) => new Promise((r) => setTimeout(r, ms));
var apiHttp = async (serverUrl, token, cliVersion, fingerprint) => {
  const d = await discover2(serverUrl);
  return { http: new Http({ baseUrl: d.apiBaseUrl, token, cliVersion, fingerprint }), apiBaseUrl: d.apiBaseUrl, discovery: d };
};
async function loginDeviceCode(serverUrl, cliVersion, io) {
  const { http } = await apiHttp(serverUrl, null, cliVersion);
  const a = await http.post("/v1/devices/authorize", { name: hostname().slice(0, 80) || "device", platform: platformName(), cliVersion });
  io.print(`Open ${a.verificationUri} and enter ${a.userCode}`);
  let interval = a.intervalSec * 1e3;
  const deadline = Date.now() + a.expiresInSec * 1e3;
  const sleep2 = io.sleep ?? wait2;
  while (Date.now() < deadline) {
    await sleep2(interval);
    try {
      const t2 = await http.post("/v1/devices/token", { deviceCode: a.deviceCode });
      saveToken(serverUrl, { token: t2.token, deviceId: t2.deviceId, expiresAt: t2.expiresAt });
      return t2;
    } catch (e2) {
      if (!(e2 instanceof ApiError)) throw e2;
      if (e2.code === "AUTHORIZATION_PENDING") continue;
      if (e2.code === "SLOW_DOWN") {
        interval += 5e3;
        continue;
      }
      if (e2.code === "ACCESS_DENIED") throw new CliError(e2.code, "ACCESS_DENIED: the request was denied on the web", 4);
      if (e2.code === "EXPIRED_TOKEN") throw new CliError(e2.code, "EXPIRED_TOKEN: the code expired; run the command again", 4);
      throw toCliError(e2);
    }
  }
  throw new CliError("EXPIRED_TOKEN", "EXPIRED_TOKEN: the code expired; run the command again", 4);
}
async function loginConnect(serverUrl, cliVersion, code) {
  const { http } = await apiHttp(serverUrl, null, cliVersion);
  try {
    const r = await http.post("/v1/devices/connect", { code, name: hostname().slice(0, 80) || "device", platform: platformName(), cliVersion });
    saveToken(serverUrl, { token: r.token, deviceId: r.deviceId, expiresAt: r.expiresAt });
    return r;
  } catch (e2) {
    if (e2 instanceof ApiError) throw new CliError(e2.code, `${e2.code}: ${e2.message}`, 4);
    throw e2;
  }
}
async function rotateToken(serverUrl, cliVersion) {
  const t2 = getToken(serverUrl);
  if (!t2) throw new CliError("AUTH_REQUIRED", "AUTH_REQUIRED: run rodo login first", 4);
  const { http } = await apiHttp(serverUrl, t2.token, cliVersion);
  try {
    const r = await http.post("/v1/devices/me/rotate");
    saveToken(serverUrl, { token: r.token, deviceId: t2.deviceId, expiresAt: r.expiresAt });
    return { expiresAt: r.expiresAt };
  } catch (e2) {
    throw e2 instanceof ApiError ? toCliError(e2) : e2;
  }
}
async function logout(serverUrl, cliVersion) {
  const t2 = getToken(serverUrl);
  let revoked = false;
  if (t2) {
    try {
      const { http } = await apiHttp(serverUrl, t2.token, cliVersion);
      await http.post("/v1/devices/me/revoke");
      revoked = true;
    } catch {
    }
  }
  if (!process.env.RODO_TOKEN) deleteToken(serverUrl);
  return { revoked };
}

// src/commands/server.ts
var BUILTIN_SERVER = "https://rodo.n3xus.ir";
function defaultServer(env = process.env) {
  const v = env.RODO_SERVER?.trim();
  return (v ? v : BUILTIN_SERVER).replace(/\/+$/, "");
}

// src/kit/install.ts
import { existsSync as existsSync5, readFileSync as readFileSync3, mkdirSync as mkdirSync3 } from "fs";
import { dirname as dirname3, join as join4 } from "path";
import { fileURLToPath } from "url";
var BLOCK_START = "<!-- rodo:start -->";
var BLOCK_END = "<!-- rodo:end -->";
function kitDir() {
  const here = dirname3(fileURLToPath(import.meta.url));
  for (const c of [process.env.RODO_KIT_DIR, join4(here, "kit"), join4(here, "../../rodo-kit"), join4(here, "../../../rodo-kit")]) {
    if (c && existsSync5(join4(c, "kit-manifest.json"))) return c;
  }
  throw new Error("bundled kit not found (kit-manifest.json)");
}
function loadKit() {
  const dir = kitDir();
  return { dir, manifest: JSON.parse(readFileSync3(join4(dir, "kit-manifest.json"), "utf8")), read: (s) => readFileSync3(join4(dir, s)) };
}
var lf = (s) => s.replace(/\r\n/g, "\n");
var readKitJson = (root) => readJson(join4(root, "rodo", "kit.json"));
function installedKitVersion(root) {
  const k = readKitJson(root);
  if (k) return k.kitVersion;
  const legacy = join4(root, "rodo", ".kit-version");
  return existsSync5(legacy) ? readFileSync3(legacy, "utf8").trim() || null : null;
}
function installKit(root, opts = {}) {
  const kit = loadKit();
  const prev = readKitJson(root);
  const recorded = prev?.files ?? {};
  const files = { ...recorded };
  const rep = { written: [], updated: [], unchanged: [], kept: [], from: installedKitVersion(root), to: kit.manifest.version, blocks: [] };
  for (const f of kit.manifest.files) {
    const dest = join4(root, f.dest);
    const bytes = kit.read(f.src);
    const newHash = sha256(bytes);
    const key2 = posix(f.dest);
    if (!existsSync5(dest)) {
      if (!opts.dryRun) writeAtomic(dest, bytes);
      files[key2] = newHash;
      rep.written.push(key2);
      continue;
    }
    const cur = readFileSync3(dest);
    const curHash = sha256(cur);
    if (curHash === newHash) {
      files[key2] = newHash;
      rep.unchanged.push(key2);
      continue;
    }
    const legacy = kit.manifest.legacyHashes?.[key2] ?? [];
    const untouched = curHash === recorded[key2] || legacy.includes(sha256(lf(cur.toString("utf8"))));
    if (untouched) {
      if (!opts.dryRun) writeAtomic(dest, bytes);
      files[key2] = newHash;
      rep.updated.push(key2);
    } else {
      if (!opts.dryRun) writeAtomic(`${dest}.rodo-new`, bytes);
      rep.kept.push(key2);
    }
  }
  const block = lf(kit.read("agents-block.md").toString("utf8")).trimEnd();
  for (const name of ["AGENTS.md", "CLAUDE.md"]) {
    if (ensureBlock(join4(root, name), block, kit.manifest.legacyHashes?.[name] ?? [], name === "CLAUDE.md", opts.dryRun)) rep.blocks.push(name);
  }
  if (!opts.dryRun) {
    writeJson(join4(root, "rodo", "kit.json"), {
      kitVersion: kit.manifest.version,
      ...prev?.kitRepo ? { kitRepo: prev.kitRepo } : {},
      ...prev?.kitRef ? { kitRef: prev.kitRef } : {},
      files: Object.fromEntries(Object.entries(files).sort(([a], [b]) => a.localeCompare(b)))
    });
  }
  return rep;
}
function ensureBlock(path, block, kit20Hashes, importsAgents, dryRun = false) {
  const exists = existsSync5(path);
  const text = exists ? readFileSync3(path, "utf8") : "";
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  const body = lf(text);
  const withEol = (s) => eol === "\r\n" ? s.replace(/\n/g, "\r\n") : s;
  let next;
  const a = body.indexOf(BLOCK_START);
  const b = body.indexOf(BLOCK_END);
  if (a >= 0 && b > a) next = body.slice(0, a) + block + body.slice(b + BLOCK_END.length);
  else if (!exists) next = block + "\n";
  else if (importsAgents && /^@AGENTS\.md\s*$/m.test(body)) return false;
  else if (kit20Hashes.includes(sha256(body))) next = block + "\n";
  else next = body.replace(/\n*$/, "\n\n") + block + "\n";
  if (next === body) return false;
  if (!dryRun) writeAtomic(path, withEol(next));
  return true;
}

// package.json
var package_default = {
  name: "@rodo/cli",
  version: "2.1.0-dev",
  private: true,
  type: "module",
  bin: {
    rodo: "dist/index.js"
  },
  engines: {
    node: ">=20"
  },
  scripts: {
    build: "tsup",
    typecheck: "tsc -p tsconfig.json --noEmit",
    lint: "tsc -p tsconfig.json --noEmit",
    test: "vitest run"
  },
  dependencies: {
    commander: "^12.1.0",
    picocolors: "^1.1.1"
  },
  devDependencies: {
    "@rodo/card-format": "workspace:*",
    "@rodo/protocol": "workspace:*",
    "@types/node": "^22.0.0",
    tsup: "^8.3.5",
    typescript: "^5.8.2",
    vitest: "^3.1.1",
    yaml: "^2.7.0"
  }
};

// src/commands/version.ts
var CLI_VERSION = package_default.version;
async function runVersion(ctx) {
  const kit = loadKit().manifest.version;
  ctx.out.line(`rodo ${CLI_VERSION}`);
  ctx.out.line(`kit ${kit}`);
  ctx.out.line(`node ${process.versions.node}`);
  ctx.out.line("server minCliVersion: unknown (not connected)");
  ctx.out.flush({ version: 1, cli: CLI_VERSION, kit, node: process.versions.node, minCliVersion: null });
  return 0;
}

// src/commands/auth.ts
function resolveServer(ctx, flag) {
  if (flag) return flag.replace(/\/$/, "");
  if (process.env.RODO_SERVER?.trim()) return defaultServer();
  try {
    const d = discover(ctx.cwd);
    const own = d.projects.find((p) => p.slug === d.cwdProject)?.project?.serverUrl;
    const any = d.projects.map((p) => p.project?.serverUrl).filter((u) => !!u);
    return (own ?? any[0] ?? defaultServer()).replace(/\/$/, "");
  } catch {
    return defaultServer();
  }
}
async function runLogin(ctx, a) {
  const server = resolveServer(ctx, a.server);
  if (a.rotate) {
    const r = await rotateToken(server, CLI_VERSION);
    ctx.out.line(`Token replaced. New expiry: ${r.expiresAt}`);
    ctx.out.flush({ version: 1, server, rotated: true, expiresAt: r.expiresAt });
    return 0;
  }
  const t2 = a.connect ? await loginConnect(server, CLI_VERSION, a.connect) : await loginDeviceCode(server, CLI_VERSION, { print: (l) => process.stderr.write(`${l}
`), sleep: ctx.sleep });
  ctx.out.line(`Logged in as ${t2.user.username} on ${server}. Token expires ${t2.expiresAt}.`);
  ctx.out.flush({ version: 1, server, user: t2.user.username, scopes: t2.scopes, expiresAt: t2.expiresAt });
  return 0;
}
async function runLogout(ctx, a) {
  const server = resolveServer(ctx, a.server);
  const r = await logout(server, CLI_VERSION);
  ctx.out.line(r.revoked ? "This device was revoked on the server and the local token was deleted." : "The local token was deleted (the server could not be told; revoke the device on the web if needed).");
  ctx.out.flush({ version: 1, server, revoked: r.revoked });
  return 0;
}
async function runDevices(ctx, a) {
  const server = resolveServer(ctx, a.server);
  const t2 = getToken(server);
  const lines = [`Devices page: ${server}/devices`];
  if (t2) {
    try {
      const { http } = await apiHttp(server, t2.token, CLI_VERSION);
      const me = await http.get("/v1/devices/me");
      lines.push(`This device: ${me.name} \xB7 scopes ${me.scopes.join(", ")} \xB7 expires ${me.expiresAt ?? "?"}`);
    } catch (e2) {
      if (!(e2 instanceof Error)) throw e2;
      lines.push("This device: the token is not accepted (run rodo login)");
    }
  } else lines.push("This device: not logged in");
  for (const l of lines) ctx.out.line(l);
  ctx.out.flush({ version: 1, server, url: `${server}/devices` });
  return 0;
}

// src/commands/doctor.ts
import { execFileSync as execFileSync3 } from "child_process";
import { existsSync as existsSync9, readdirSync as readdirSync3, readFileSync as readFileSync6, statSync as statSync4 } from "fs";
import { join as join7, relative as relative3 } from "path";

// ../card-format/dist/model.js
function emptyModel() {
  return {
    schemaVersion: 2,
    title: "",
    status: "todo",
    statusReason: null,
    blockerType: null,
    priority: "none",
    members: [],
    labels: [],
    startAt: null,
    dueAt: null,
    coverColor: null,
    hoursMinutes: null,
    financial: { type: "none", amount: 0, category: "general", date: null },
    scope: null,
    test: null,
    updatedAt: null,
    locked: false,
    description: "",
    refs: [],
    decisions: [],
    checklists: [],
    extras: {}
  };
}

// ../card-format/dist/codes.js
var STATUS_LIST = "status must be todo, in_progress, blocked, cancelled or done";
var BLOCKER_LIST = "decision, technical, environment, external, permission, test, requirement";
var e = (msg) => ({ sev: "E", msg });
var w = (msg) => ({ sev: "W", msg });
var CODES = {
  ENCODING_INVALID: e(() => "ENCODING_INVALID: file is not UTF-8"),
  FRONTMATTER_MISSING: e(() => "FRONTMATTER_MISSING: line 1 must be ---"),
  FRONTMATTER_UNCLOSED: e(() => "FRONTMATTER_UNCLOSED: add a closing --- line"),
  YAML_INVALID: e((a) => `YAML_INVALID: line ${a.n}: ${a.detail}`),
  SCHEMA_VERSION_MISSING: e(() => "SCHEMA_VERSION_MISSING: schemaVersion must be 1 or 2"),
  SCHEMA_VERSION_INVALID: e(() => "SCHEMA_VERSION_INVALID: schemaVersion must be 1 or 2"),
  BOARD_ID_MISSING: e(() => "BOARD_ID_MISSING: add boardId (schemaVersion 1 only) or use schemaVersion: 2"),
  BOARD_MISMATCH: e((a) => `BOARD_MISMATCH: boardId is not the board of this project (${a.boardId})`),
  TITLE_MISSING: e(() => "TITLE_MISSING: title must be 1-200 characters"),
  TITLE_INVALID: e(() => "TITLE_INVALID: title must be 1-200 characters"),
  STATUS_MISSING: e(() => `STATUS_MISSING: ${STATUS_LIST}`),
  STATUS_INVALID: e((a) => `STATUS_INVALID: ${STATUS_LIST} (found "${a.value}")`),
  STATUS_NOT_SUPPORTED: e((a) => `STATUS_NOT_SUPPORTED: this RODO server does not know status ${a.value} yet; use todo, in_progress or done for now`),
  ID_INVALID: e(() => "ID_INVALID: do not write id; rodo sync writes it"),
  TEMP_ID_INVALID: e(() => "TEMP_ID_INVALID: do not write tempId; rodo sync writes it"),
  STATUS_REASON_INVALID: e(() => "STATUS_REASON_INVALID: statusReason must be one line of 1-500 characters"),
  BLOCKER_TYPE_INVALID: e(() => "BLOCKER_TYPE_INVALID: blockerType must be decision, technical, environment, external, permission, test or requirement"),
  PRIORITY_INVALID: e(() => "PRIORITY_INVALID: priority must be none, low, medium, high or urgent"),
  MEMBERS_INVALID: e(() => "MEMBERS_INVALID: members must be a list like [ali, sara]"),
  LABELS_INVALID: e(() => "LABELS_INVALID: labels must be a list like [bug, ui]"),
  DATE_INVALID: e((a) => `DATE_INVALID: ${a.key} must be YYYY-MM-DD`),
  DATE_RANGE: e(() => "DATE_RANGE: startAt is after dueAt"),
  COVER_COLOR_INVALID: e(() => "COVER_COLOR_INVALID: use purple, orange, green, sky, yellow or pink"),
  HOURS_INVALID: e((a) => `invalid hours: "${a.value}" (use H:MM with two-digit minutes)`),
  CARD_HOURS_WITH_ITEMS: e(() => "CARD_HOURS_WITH_ITEMS: remove front-matter hours; put hours on items"),
  FINANCIAL_INVALID: e((a) => `FINANCIAL_INVALID: ${a.detail}`),
  FINANCIAL_AMOUNT_REQUIRED: e(() => "FINANCIAL_AMOUNT_REQUIRED: set financial.amount to a whole number above 0"),
  FINANCIAL_CARD_SINGLE_MEMBER: e(() => "FINANCIAL_CARD_SINGLE_MEMBER: keep exactly one name in members"),
  SCOPE_INVALID: e(() => "SCOPE_INVALID: scope must have allowed/forbidden lists of up to 20 short items"),
  TEST_INVALID: e(() => "TEST_INVALID: test needs adapter (web, api, cli, mobile, iot, other) and command (max 500 chars)"),
  UNKNOWN_KEY: e((a) => `UNKNOWN_KEY: "${a.key}" is not a card field (use x-<name> for local notes)`),
  OLD_KEY: e((a) => `OLD_KEY: "${a.key}" is no longer used (${a.hint})`),
  DESCRIPTION_TOO_LONG: e((a) => `DESCRIPTION_TOO_LONG: description is ${a.n} characters (max 8000)`),
  SECTION_ORDER: e(() => "SECTION_ORDER: write description, then ## Refs, then ## Decision sections, then ## Checklist sections"),
  REF_LINE_INVALID: e((a) => `REF_LINE_INVALID: line ${a.n}: write - [title](/path)`),
  REF_PATH_INVALID: e((a) => `REF_PATH_INVALID: ${a.path}`),
  REF_TITLE_INVALID: e((a) => `REF_TITLE_INVALID: line ${a.n}: title must be 1-200 characters`),
  REF_DUPLICATE: e((a) => `REF_DUPLICATE: ${a.path}`),
  REF_LIMIT_REACHED: e(() => "REF_LIMIT_REACHED: at most 20 refs"),
  REF_NOT_FOUND: e((a) => `ref not found: ${a.path}`),
  DECISION_TITLE_INVALID: e((a) => `DECISION_TITLE_INVALID: line ${a.n}: the question must be 1-300 characters`),
  DECISION_LINE_INVALID: e((a) => `DECISION_LINE_INVALID: line ${a.n}: write options as "- A: text"`),
  DECISION_OPTION_INVALID: e((a) => `DECISION_OPTION_INVALID: line ${a.n}: use keys A-F once each, 1-200 characters`),
  DECISION_OPTIONS_COUNT: e(() => "DECISION_OPTIONS_COUNT: a decision needs 2 to 6 options"),
  DECISION_LIMIT_REACHED: e(() => "DECISION_LIMIT_REACHED: at most 5 decisions per card"),
  DECISION_ANSWER_REQUIRES_HUMAN: e((a) => `DECISION_ANSWER_REQUIRES_HUMAN: only a person can answer "${a.question}" in the web app; remove the Answer line`),
  CHECKLIST_TITLE_INVALID: e((a) => `CHECKLIST_TITLE_INVALID: line ${a.n}: title must be 1-120 characters`),
  ITEM_LINE_INVALID: e((a) => `ITEM_LINE_INVALID: line ${a.n}: write - [ ] title`),
  ITEM_TITLE_INVALID: e((a) => `ITEM_TITLE_INVALID: line ${a.n}: title must be 1-200 characters`),
  APPROVAL_ITEM_DUPLICATE: e(() => "APPROVAL_ITEM_DUPLICATE: keep only one [approval] item"),
  APPROVAL_ITEM_INVALID: e(() => "APPROVAL_ITEM_INVALID: no @user or [hours] on the [approval] item"),
  APPROVAL_REQUIRES_HUMAN: e((a) => `APPROVAL_REQUIRES_HUMAN: only a person can tick "${a.title}" in the web app`),
  ID_DUPLICATE: e((a) => `ID_DUPLICATE: rodo id ${a.id} appears twice in this file`),
  CARD_ID_DUPLICATE: e((a) => `duplicate id: this file is a copy of ${a.path}; delete its id line and rodo: comments`),
  SECRET_SUSPECTED: e((a) => `SECRET_SUSPECTED: line ${a.n} looks like a secret (${a.kind}); remove it \u2014 secrets never go into rodo files`),
  SECRET_POSSIBLE: w((a) => `SECRET_POSSIBLE: line ${a.n} may contain a secret inside code (${a.kind}); check it \u2014 only an example value is fine`),
  UNKNOWN_LIST: e((a) => `UNKNOWN_LIST: "${a.list}"`),
  LIST_STATUS_MISMATCH: e((a) => `LIST_STATUS_MISMATCH: list "${a.list}" does not fit status ${a.status}`),
  UNKNOWN_MEMBER: e((a) => `UNKNOWN_MEMBER: ${a.username}`),
  UNKNOWN_LABEL: e((a) => `UNKNOWN_LABEL: ${a.label}`),
  FILE_EXT_CASE: w(() => "FILE_EXT_CASE: rename to *.rodo.md"),
  LOCKED_EDITED: w(() => "LOCKED_EDITED: locked is set by the server; local change ignored"),
  UPDATED_AT_EDITED: w(() => "UPDATED_AT_EDITED: updatedAt is written by rodo sync; local change ignored"),
  BLOCKER_TYPE_MISSING: w(() => `BLOCKER_TYPE_MISSING: add blockerType (${BLOCKER_LIST})`),
  BLOCKER_TYPE_WITHOUT_BLOCKED: w(() => "BLOCKER_TYPE_WITHOUT_BLOCKED: blockerType is only used when status is blocked"),
  DECISION_ANSWERED_READONLY: w((a) => `DECISION_ANSWERED_READONLY: "${a.question}" is answered; local changes ignored`),
  WORKFLOW_INVALID: w((a) => `WORKFLOW_INVALID: workflow must be quick, standard or major (found "${a.value}"); ignored`),
  DESIGN_MISSING: w(() => "DESIGN_MISSING: workflow is major but the cycle has no design.md (recommended, not required)"),
  REF_MISSING_LOCAL: w((a) => `ref not found on this device: ${a.path}`),
  APPROVAL_HASH_LEGACY: w(() => "APPROVAL_HASH_LEGACY: use [approval] without a hash"),
  CYCLE_FOLDER_NAME: w(() => "CYCLE_FOLDER_NAME: name the cycle folder NNN-slug (for example 004-order-cancel)"),
  CYCLE_CARD_NAME: w(() => "CYCLE_CARD_NAME: a cycle card must be cycles/NNN-slug/card.rodo.md"),
  CYCLE_SIMPLE_MISSING: w(() => "CYCLE_SIMPLE_MISSING: the cycle folder has no simple.md"),
  CYCLE_REFS_MISSING: w(() => "CYCLE_REFS_MISSING: add a ## Refs section that links the cycle simple.md"),
  PROGRESS_NOTES_MISSING: w(() => "PROGRESS_NOTES_MISSING: add a ## Progress notes section"),
  BLOCKER_REASON_MISSING: w(() => "BLOCKER_REASON_MISSING: a blocked card needs statusReason"),
  CANCEL_REASON_MISSING: w(() => "CANCEL_REASON_MISSING: a cancelled card needs statusReason"),
  STATUS_REASON_WITHOUT_HOLD: w(() => "STATUS_REASON_WITHOUT_HOLD: statusReason is only used when status is blocked or cancelled"),
  STATUS_REASON_FROM_NOTES: w(() => "STATUS_REASON_FROM_NOTES: the reason was read from Progress notes; rodo sync will add statusReason"),
  CYCLE_CANCELLED_NOT_IN_MAP: w(() => "CYCLE_CANCELLED_NOT_IN_MAP: list this cancelled cycle under ## \u0644\u063A\u0648\u0634\u062F\u0647 (or ## Cancelled) in MAP.md"),
  CYCLE_DONE_NOT_IN_MAP: w(() => "CYCLE_DONE_NOT_IN_MAP: list this finished cycle under ## \u0627\u0646\u062C\u0627\u0645\u200C\u0634\u062F\u0647 (or ## Done) in MAP.md"),
  SCOPE_MISSING: w(() => "SCOPE_MISSING: add scope (allowed/forbidden) to this cycle card"),
  REQUEST_GOAL_MISSING: w(() => "REQUEST_GOAL_MISSING: a new request card needs a ## Goal heading"),
  BOARD_ID_PLACEHOLDER: w(() => "BOARD_ID_PLACEHOLDER: boardId is a placeholder; run rodo init to bind this project"),
  SCHEMA_V1: w(() => "SCHEMA_V1: schemaVersion 1 is old; rodo sync will upgrade the file to 2")
};
function finding(code, line, args = {}) {
  return { code, line, message: CODES[code].msg(args) };
}
var severityOf = (code) => CODES[code]?.sev;

// ../card-format/dist/fields.js
var import_protocol = __toESM(require_dist(), 1);

// ../card-format/dist/compare.js
var TEHRAN = "+03:30";
var DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;
function normText(s) {
  return s.replace(/\r\n?/g, "\n").normalize("NFC").split("\n").map((l) => l.replace(/[ \t]+$/, "")).join("\n").replace(/\n+$/, "");
}
function toEpoch(v) {
  if (v === null || v === void 0 || v === "")
    return null;
  if (typeof v === "number")
    return v;
  if (typeof v !== "string")
    return v;
  const t2 = Date.parse(DATE_ONLY.test(v) ? `${v}T00:00:00${TEHRAN}` : v);
  return Number.isNaN(t2) ? v : t2;
}
var sortedUnique = (v) => Array.from(new Set((v ?? []).map((s) => s.normalize("NFC")))).sort();
var emptyToNull = (v) => {
  if (v === "" || v === void 0)
    return null;
  if (Array.isArray(v))
    return v.length ? v.map(emptyToNull) : null;
  if (v && typeof v === "object") {
    const out = {};
    for (const k of Object.keys(v).sort())
      out[k] = emptyToNull(v[k]);
    return Object.values(out).every((x) => x === null) ? null : out;
  }
  return v;
};
function normalizeForCompare(field, value) {
  switch (field) {
    case "description":
    case "statusReason":
    case "text":
      return typeof value === "string" ? emptyToNull(normText(value)) : emptyToNull(value);
    case "title":
      return typeof value === "string" ? value.trim().normalize("NFC") : value;
    case "startAt":
    case "dueAt":
    case "date":
      return toEpoch(value);
    case "members":
    case "labels":
      return emptyToNull(sortedUnique(value));
    case "hours":
    case "hoursMinutes":
    case "minutes":
      return value === null || value === void 0 ? null : Number(value);
    case "scope": {
      if (!value)
        return null;
      const s = value;
      const f = (l) => (l ?? []).map((x) => x.trim().normalize("NFC"));
      return emptyToNull({ allowed: f(s.allowed), forbidden: f(s.forbidden) });
    }
    case "list":
      return value === null || value === void 0 || value === "" ? null : String(value).trim().normalize("NFC");
    case "status": {
      if (!value || typeof value !== "object")
        return value;
      const s = value;
      return {
        status: s.status,
        list: normalizeForCompare("list", s.list),
        statusReason: normalizeForCompare("statusReason", s.statusReason),
        blockerType: s.blockerType ?? null
      };
    }
    case "financial": {
      if (!value)
        return null;
      const f = value;
      return { type: f.type ?? "none", amount: f.amount ?? 0, category: f.category ?? "general", date: toEpoch(f.date) };
    }
    default:
      return emptyToNull(value);
  }
}
function deepEqual(a, b) {
  if (a === b)
    return true;
  if (a === null || b === null || typeof a !== "object" || typeof b !== "object")
    return false;
  if (Array.isArray(a) !== Array.isArray(b))
    return false;
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length !== kb.length)
    return false;
  return ka.every((k) => deepEqual(a[k], b[k]));
}
function fieldEquals(field, a, b) {
  const na = normalizeForCompare(field, a);
  const nb = normalizeForCompare(field, b);
  if (field === "status" && na && nb && typeof na === "object" && typeof nb === "object") {
    const x = na;
    const y = nb;
    const listOk = x.list === null || y.list === null || x.list === y.list;
    return listOk && x.status === y.status && deepEqual(x.statusReason, y.statusReason) && deepEqual(x.blockerType, y.blockerType);
  }
  return deepEqual(na, nb);
}

// ../card-format/dist/fields.js
var PRIORITIES = ["none", "low", "medium", "high", "urgent"];
var COVERS = ["purple", "orange", "green", "sky", "yellow", "pink"];
var ADAPTERS = ["web", "api", "cli", "mobile", "iot", "other"];
var WORKFLOWS = ["quick", "standard", "major"];
var USERNAME = /^[a-z0-9_.-]{3,32}$/;
var KNOWN = /* @__PURE__ */ new Set([
  "schemaVersion",
  "id",
  "tempId",
  "boardId",
  "title",
  "status",
  "statusReason",
  "blockerType",
  "list",
  "priority",
  "members",
  "labels",
  "startAt",
  "dueAt",
  "coverColor",
  "hours",
  "financial",
  "scope",
  "test",
  "workflow",
  "updatedAt",
  "locked"
]);
var OLD_KEYS = {
  state: "use status",
  assignee: "use members",
  createdAt: "remove it, it is a server field",
  t: "remove it",
  approval: "use an [approval] checklist item",
  requestId: "use a todo card with ## Goal and ## Why",
  acceptance: "use test",
  sync: "remove it, rodo sync manages it",
  type: "use labels"
};
var isStr = (v) => typeof v === "string";
var isObj = (v) => !!v && typeof v === "object" && !Array.isArray(v);
function validDate(v) {
  if (!isStr(v))
    return false;
  const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
  if (d) {
    const t2 = new Date(Date.UTC(+d[1], +d[2] - 1, +d[3]));
    return t2.getUTCFullYear() === +d[1] && t2.getUTCMonth() === +d[2] - 1 && t2.getUTCDate() === +d[3];
  }
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/.test(v) && !Number.isNaN(Date.parse(v));
}
function parseHours(v) {
  if (!isStr(v))
    return null;
  const m = /^(\d{1,3}):([0-5]\d)$/.exec(v.trim());
  return m ? +m[1] * 60 + +m[2] : null;
}
function readFields(data, keyLine, order) {
  const m = emptyModel();
  const out = [];
  const L = (k) => keyLine[k] ?? null;
  const add = (code, k, args = {}) => out.push(finding(code, L(k), args));
  for (const k of order) {
    if (KNOWN.has(k) || k.startsWith("x-"))
      continue;
    if (k in OLD_KEYS)
      add("OLD_KEY", k, { key: k, hint: OLD_KEYS[k] });
    else
      add("UNKNOWN_KEY", k, { key: k });
  }
  for (const k of order)
    if (k.startsWith("x-"))
      m.extras[k] = data[k];
  const sv = data.schemaVersion;
  if (sv === void 0 || sv === null)
    add("SCHEMA_VERSION_MISSING", "schemaVersion");
  else if (sv !== 1 && sv !== 2)
    add("SCHEMA_VERSION_INVALID", "schemaVersion");
  m.schemaVersion = sv === 1 ? 1 : 2;
  if (data.id !== void 0 && data.id !== null) {
    if (isStr(data.id) && /^[a-z0-9]{20,32}$/.test(data.id))
      m.id = data.id;
    else
      add("ID_INVALID", "id");
  }
  if (data.tempId !== void 0 && data.tempId !== null) {
    if (isStr(data.tempId) && /^tmp_[a-z0-9]{20,32}$/.test(data.tempId))
      m.tempId = data.tempId;
    else
      add("TEMP_ID_INVALID", "tempId");
  }
  if (data.boardId !== void 0 && data.boardId !== null) {
    if (isStr(data.boardId) && data.boardId.trim())
      m.boardId = data.boardId.trim();
    else
      add("BOARD_ID_MISSING", "boardId");
  } else if (m.schemaVersion === 1)
    add("BOARD_ID_MISSING", "schemaVersion");
  if (data.title === void 0 || data.title === null)
    add("TITLE_MISSING", "title");
  else if (!isStr(data.title) || data.title.trim().length < 1 || data.title.trim().length > 200)
    add("TITLE_INVALID", "title");
  else
    m.title = data.title.trim();
  if (data.status === void 0 || data.status === null)
    add("STATUS_MISSING", "status");
  else if (!isStr(data.status) || !import_protocol.CARD_STATUSES.includes(data.status))
    add("STATUS_INVALID", "status", { value: String(data.status) });
  else
    m.status = data.status;
  if (data.statusReason !== void 0 && data.statusReason !== null) {
    const r = data.statusReason;
    if (isStr(r) && r.trim().length >= 1 && r.trim().length <= 500 && !/[\r\n]/.test(r.trim()))
      m.statusReason = r.trim();
    else
      add("STATUS_REASON_INVALID", "statusReason");
  }
  if (data.blockerType !== void 0 && data.blockerType !== null) {
    if (isStr(data.blockerType) && import_protocol.BLOCKER_TYPES.includes(data.blockerType))
      m.blockerType = data.blockerType;
    else
      add("BLOCKER_TYPE_INVALID", "blockerType");
  }
  if (data.list !== void 0 && data.list !== null) {
    if (isStr(data.list) && data.list.trim())
      m.list = data.list.trim();
    else
      add("UNKNOWN_LIST", "list", { list: String(data.list) });
  }
  if (data.priority !== void 0 && data.priority !== null) {
    if (isStr(data.priority) && PRIORITIES.includes(data.priority))
      m.priority = data.priority;
    else
      add("PRIORITY_INVALID", "priority");
  }
  for (const [key2, code, ok] of [
    ["members", "MEMBERS_INVALID", (s) => isStr(s) && USERNAME.test(s)],
    ["labels", "LABELS_INVALID", (s) => isStr(s) && s.length >= 1 && s.length <= 50]
  ]) {
    const v = data[key2];
    if (v === void 0 || v === null)
      continue;
    if (Array.isArray(v) && v.every(ok) && new Set(v).size === v.length)
      m[key2] = v;
    else
      add(code, key2);
  }
  for (const key2 of ["startAt", "dueAt"]) {
    const v = data[key2];
    if (v === void 0 || v === null)
      continue;
    if (validDate(v))
      m[key2] = v;
    else
      add("DATE_INVALID", key2, { key: key2 });
  }
  if (data.coverColor !== void 0 && data.coverColor !== null) {
    if (isStr(data.coverColor) && COVERS.includes(data.coverColor))
      m.coverColor = data.coverColor;
    else
      add("COVER_COLOR_INVALID", "coverColor");
  }
  let hoursSet = false;
  if (data.hours !== void 0 && data.hours !== null) {
    const h = parseHours(data.hours);
    if (h === null)
      add("HOURS_INVALID", "hours", { value: String(data.hours) });
    else {
      m.hoursMinutes = h;
      hoursSet = h !== 0;
    }
  }
  if (data.financial !== void 0 && data.financial !== null)
    readFinancial(data.financial, m, add);
  if (data.scope !== void 0 && data.scope !== null)
    readScope(data.scope, m, add);
  if (data.test !== void 0 && data.test !== null) {
    const t2 = data.test;
    if (isObj(t2) && Object.keys(t2).every((k) => k === "adapter" || k === "command") && isStr(t2.adapter) && ADAPTERS.includes(t2.adapter) && isStr(t2.command) && t2.command.length >= 1 && t2.command.length <= 500) {
      m.test = { adapter: t2.adapter, command: t2.command };
    } else
      add("TEST_INVALID", "test");
  }
  if (data.workflow !== void 0 && data.workflow !== null) {
    if (isStr(data.workflow) && WORKFLOWS.includes(data.workflow))
      m.workflow = data.workflow;
    else
      add("WORKFLOW_INVALID", "workflow", { value: String(data.workflow) });
  }
  if (typeof data.updatedAt === "number" && Number.isInteger(data.updatedAt))
    m.updatedAt = data.updatedAt;
  else if (data.updatedAt !== void 0 && data.updatedAt !== null)
    add("UPDATED_AT_EDITED", "updatedAt");
  if (typeof data.locked === "boolean")
    m.locked = data.locked;
  else if (data.locked !== void 0 && data.locked !== null)
    add("LOCKED_EDITED", "locked");
  return { model: m, findings: out, fileUpdatedAt: data.updatedAt, fileLocked: data.locked, hoursSet };
}
function readFinancial(v, m, add) {
  const bad = (detail) => add("FINANCIAL_INVALID", "financial", { detail });
  if (!isObj(v))
    return bad("financial must be a map with type, amount, category, date");
  const extra = Object.keys(v).find((k) => !["type", "amount", "category", "date"].includes(k));
  if (extra)
    return bad(`unknown key "${extra}" (allowed: type, amount, category, date)`);
  const f = { ...m.financial };
  if (v.type !== void 0) {
    if (v.type === "none" || v.type === "expense" || v.type === "income")
      f.type = v.type;
    else
      return bad("type must be none, expense or income");
  }
  if (v.amount !== void 0) {
    if (typeof v.amount === "number" && Number.isInteger(v.amount) && v.amount >= 0)
      f.amount = v.amount;
    else
      return bad("amount must be a whole number");
  }
  if (v.category !== void 0) {
    if (isStr(v.category) && v.category.trim() && v.category.length <= 50)
      f.category = v.category.trim();
    else
      return bad("category must be 1-50 characters");
  }
  if (v.date !== void 0 && v.date !== null) {
    if (validDate(v.date))
      f.date = v.date;
    else
      return bad("date must be YYYY-MM-DD");
  }
  if (f.type !== "none" && !(f.amount > 0))
    return add("FINANCIAL_AMOUNT_REQUIRED", "financial");
  m.financial = f;
}
function readScope(v, m, add) {
  const okList = (l) => l === void 0 || Array.isArray(l) && l.length <= 20 && l.every((s) => isStr(s) && s.length >= 1 && s.length <= 200);
  if (!isObj(v) || Object.keys(v).some((k) => k !== "allowed" && k !== "forbidden") || !okList(v.allowed) || !okList(v.forbidden)) {
    return add("SCOPE_INVALID", "scope");
  }
  m.scope = { allowed: v.allowed ?? [], forbidden: v.forbidden ?? [] };
}
var dateMs = (v) => v ? toEpoch(v) : null;

// ../card-format/dist/refs.js
var REF_LINE = /^- \[(.*?)\]\((<[^>]+>|[^)]*)\)(?:\s*<!-- rodo:ref_(\S+?) -->)?\s*$/;
var ID_COMMENT = /^[a-z0-9]{8,32}$/;
function parseRefs(lines) {
  const refs = [];
  const findings = [];
  const ids = [];
  const seen = /* @__PURE__ */ new Set();
  for (const { text, no } of lines) {
    if (!text.trim() || /^\s*<!--.*-->\s*$/.test(text))
      continue;
    const m = REF_LINE.exec(text);
    if (!m) {
      findings.push(finding("REF_LINE_INVALID", no, { n: no }));
      continue;
    }
    const title = m[1].trim();
    if (title.length < 1 || title.length > 200)
      findings.push(finding("REF_TITLE_INVALID", no, { n: no }));
    const raw = m[2].startsWith("<") ? m[2].slice(1, -1) : m[2];
    const pathOnly = raw.split("#")[0];
    if (!pathOnly.startsWith("/") || pathOnly.startsWith("//") || pathOnly.includes("\\") || pathOnly.split("/").includes("..")) {
      findings.push(finding("REF_PATH_INVALID", no, { path: raw }));
      continue;
    }
    if (seen.has(raw)) {
      findings.push(finding("REF_DUPLICATE", no, { path: raw }));
      continue;
    }
    seen.add(raw);
    const ref = { title, path: raw };
    if (m[3]) {
      if (ID_COMMENT.test(m[3])) {
        ref.id = m[3];
        ids.push({ id: m[3], no });
      } else
        findings.push(finding("ID_INVALID", no));
    }
    refs.push(ref);
  }
  if (refs.length > 20)
    findings.push(finding("REF_LIMIT_REACHED", lines[0]?.no ?? null));
  return { refs, findings, ids };
}
var refPathOnly = (p) => p.split("#")[0];

// ../card-format/dist/checklists.js
var ITEM = /^- \[( |x|X)\] (.*)$/;
var USERNAME2 = /^[a-z0-9_.-]{3,32}$/;
function parseChecklist(rest, headerNo, lines) {
  const findings = [];
  const ids = [];
  const checklist = { title: "", items: [] };
  let title = rest;
  const c = /\s*<!-- rodo:chk_(\S+?) -->\s*$/.exec(rest);
  if (c) {
    title = rest.slice(0, c.index);
    if (ID_COMMENT.test(c[1])) {
      checklist.id = c[1];
      ids.push({ id: c[1], no: headerNo });
    } else
      findings.push(finding("ID_INVALID", headerNo));
  }
  checklist.title = title.trim();
  if (checklist.title.length < 1 || checklist.title.length > 120)
    findings.push(finding("CHECKLIST_TITLE_INVALID", headerNo, { n: headerNo }));
  for (const { text, no } of lines) {
    if (!text.trim() || /^\s*<!--.*-->\s*$/.test(text))
      continue;
    const m = ITEM.exec(text);
    if (!m) {
      findings.push(finding("ITEM_LINE_INVALID", no, { n: no }));
      continue;
    }
    const item = { title: "", isDone: m[1] !== " ", assignee: null, minutes: 0, kind: "task" };
    let body = m[2];
    const ic = /\s*<!-- rodo:ckl_(\S+?) -->\s*$/.exec(body);
    if (ic) {
      body = body.slice(0, ic.index);
      if (ID_COMMENT.test(ic[1])) {
        item.id = ic[1];
        ids.push({ id: ic[1], no });
      } else
        findings.push(finding("ID_INVALID", no));
    }
    let hasHours = false;
    let bad = false;
    for (; ; ) {
      let t2;
      if (t2 = /\s*\[approval(:\s*[^\]]*)?\]\s*$/.exec(body)) {
        item.kind = "approval";
        if (t2[1])
          findings.push(finding("APPROVAL_HASH_LEGACY", no));
      } else if (t2 = /\s*\[hours:\s*([^\]]*)\]\s*$/.exec(body)) {
        hasHours = true;
        const h = parseHours(t2[1]);
        if (h === null) {
          findings.push(finding("HOURS_INVALID", no, { value: t2[1].trim() }));
          bad = true;
        } else
          item.minutes = h;
      } else if (t2 = /\s+@(\S+)\s*$/.exec(body)) {
        if (USERNAME2.test(t2[1]))
          item.assignee = t2[1];
        else {
          findings.push(finding("ITEM_LINE_INVALID", no, { n: no }));
          bad = true;
        }
      } else
        break;
      body = body.slice(0, t2.index);
    }
    item.title = body.trim();
    if (item.title.length < 1 || item.title.length > 200) {
      findings.push(finding("ITEM_TITLE_INVALID", no, { n: no }));
      continue;
    }
    if (item.kind === "approval" && (item.assignee || hasHours))
      findings.push(finding("APPROVAL_ITEM_INVALID", no));
    if (!bad)
      checklist.items.push(item);
  }
  return { checklist, findings, ids };
}

// ../card-format/dist/decisions.js
var OPTION = /^- ([A-Za-z]): ?(.*)$/;
var ANSWER = /^- Answer: ?(.*)$/;
var ANSWER_VALUE = /^([A-F]|other)(?: — (.*))?$/;
function parseDecision(rest, headerNo, lines) {
  const findings = [];
  const ids = [];
  const decision = { question: "", options: [], answer: null };
  let question = rest;
  const c = /\s*<!-- rodo:dec_(\S+?) -->\s*$/.exec(rest);
  if (c) {
    question = rest.slice(0, c.index);
    if (ID_COMMENT.test(c[1])) {
      decision.id = c[1];
      ids.push({ id: c[1], no: headerNo });
    } else
      findings.push(finding("ID_INVALID", headerNo));
  }
  decision.question = question.trim();
  if (decision.question.length < 1 || decision.question.length > 300)
    findings.push(finding("DECISION_TITLE_INVALID", headerNo, { n: headerNo }));
  const keys = /* @__PURE__ */ new Set();
  for (const { text, no } of lines) {
    if (!text.trim())
      continue;
    const a = ANSWER.exec(text);
    if (a) {
      const v = ANSWER_VALUE.exec(a[1].trim());
      if (!v)
        findings.push(finding("DECISION_LINE_INVALID", no, { n: no }));
      else
        decision.answer = { key: v[1], note: v[2]?.trim() || null };
      continue;
    }
    const o = OPTION.exec(text);
    if (!o) {
      findings.push(finding("DECISION_LINE_INVALID", no, { n: no }));
      continue;
    }
    const t2 = o[2].trim();
    if (!/^[A-F]$/.test(o[1]) || keys.has(o[1]) || t2.length < 1 || t2.length > 200) {
      findings.push(finding("DECISION_OPTION_INVALID", no, { n: no }));
      continue;
    }
    keys.add(o[1]);
    decision.options.push({ key: o[1], text: t2 });
  }
  if (decision.options.length < 2 || decision.options.length > 6)
    findings.push(finding("DECISION_OPTIONS_COUNT", headerNo));
  return { decision, findings, ids };
}

// ../card-format/dist/body.js
function parseBody(lines, firstNo) {
  const findings = [];
  const desc = [];
  const blocks = [];
  let fence = false;
  let order = { refs: 0, decision: 0, checklist: 0 };
  lines.forEach((text, i) => {
    const no = firstNo + i;
    if (/^\s*(```|~~~)/.test(text))
      fence = !fence;
    let kind = null;
    let rest = "";
    if (!fence) {
      if (text.trimEnd() === "## Refs")
        kind = "refs";
      else if (text.startsWith("## Decision: ")) {
        kind = "decision";
        rest = text.slice("## Decision: ".length);
      } else if (text.startsWith("## Checklist: ")) {
        kind = "checklist";
        rest = text.slice("## Checklist: ".length);
      }
    }
    if (kind) {
      const bad = kind === "refs" && (order.refs > 0 || order.decision > 0 || order.checklist > 0) || kind === "decision" && order.checklist > 0;
      if (bad)
        findings.push(finding("SECTION_ORDER", no));
      order[kind]++;
      blocks.push({ kind, header: { text, no }, rest, lines: [] });
    } else if (blocks.length)
      blocks[blocks.length - 1].lines.push({ text, no });
    else
      desc.push(text);
  });
  while (desc.length && !desc[0].trim())
    desc.shift();
  while (desc.length && !desc[desc.length - 1].trim())
    desc.pop();
  const description = desc.join("\n");
  if (description.length > 8e3)
    findings.push(finding("DESCRIPTION_TOO_LONG", null, { n: description.length }));
  const out = { description, refs: [], hasRefsSection: false, decisions: [], checklists: [], findings, ids: [] };
  for (const b of blocks) {
    if (b.kind === "refs") {
      out.hasRefsSection = true;
      const r = parseRefs(b.lines);
      out.refs.push(...r.refs);
      findings.push(...r.findings);
      out.ids.push(...r.ids);
    } else if (b.kind === "decision") {
      const d = parseDecision(b.rest, b.header.no, b.lines);
      out.decisions.push(d.decision);
      findings.push(...d.findings);
      out.ids.push(...d.ids);
    } else {
      const c = parseChecklist(b.rest, b.header.no, b.lines);
      out.checklists.push(c.checklist);
      findings.push(...c.findings);
      out.ids.push(...c.ids);
    }
  }
  if (out.decisions.length > 5)
    findings.push(finding("DECISION_LIMIT_REACHED", null));
  return out;
}

// ../card-format/dist/frontmatter.js
var import_yaml = __toESM(require_dist2(), 1);
var ERROR_LINE = /^<!--\s*RODO_ERROR:.*-->\s*$/;
function splitCard(input) {
  const findings = [];
  const bom = input.charCodeAt(0) === 65279;
  const text = bom ? input.slice(1) : input;
  if (text.includes("\uFFFD"))
    findings.push(finding("ENCODING_INVALID", null));
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  const trailingNewline = /\n$/.test(text);
  const lines = text.split(/\r?\n/);
  if (trailingNewline)
    lines.pop();
  const line0 = lines[0];
  const errorLine = line0 !== void 0 && ERROR_LINE.test(line0) ? line0 : null;
  const first = errorLine ? 1 : 0;
  let fmStart = -1;
  let fmEnd = -1;
  if (lines[first]?.trimEnd() === "---") {
    fmStart = first;
    for (let i = first + 1; i < lines.length; i++) {
      if (lines[i].trimEnd() === "---") {
        fmEnd = i;
        break;
      }
    }
    if (fmEnd < 0)
      findings.push(finding("FRONTMATTER_UNCLOSED", first + 1));
  } else {
    findings.push(finding("FRONTMATTER_MISSING", first + 1));
  }
  return { bom, eol, errorLine, lines, fmStart, fmEnd, trailingNewline, findings };
}
function parseFrontmatter(lines, fmStart, fmEnd) {
  const findings = [];
  const yamlText = lines.slice(fmStart + 1, fmEnd).join("\n");
  const lc = new import_yaml.LineCounter();
  const doc = (0, import_yaml.parseDocument)(yamlText, { version: "1.2", schema: "core", uniqueKeys: true, lineCounter: lc });
  const base = fmStart + 1;
  for (const err of doc.errors) {
    const yl = err.linePos?.[0]?.line ?? 1;
    findings.push(finding("YAML_INVALID", base + yl, { n: base + yl, detail: err.message.split("\n")[0] }));
  }
  const data = {};
  const order = [];
  const keyLine = {};
  if (findings.length === 0) {
    const js = doc.toJS();
    if (doc.contents && !(0, import_yaml.isMap)(doc.contents) && !(doc.contents === null)) {
      findings.push(finding("YAML_INVALID", base + 1, { n: base + 1, detail: "frontmatter must be a map of keys" }));
    } else if (js && typeof js === "object") {
      Object.assign(data, js);
    }
    if ((0, import_yaml.isMap)(doc.contents)) {
      for (const pair of doc.contents.items) {
        if (!(0, import_yaml.isScalar)(pair.key))
          continue;
        const k = String(pair.key.value);
        order.push(k);
        const off = pair.key.range?.[0] ?? 0;
        keyLine[k] = base + lc.linePos(off).line;
      }
    }
  }
  return { data, order, keyLine, findings };
}

// ../card-format/dist/secrets.js
var HIGH = [
  ["private-key", /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
  ["aws-key", /AKIA[0-9A-Z]{16}/],
  ["github-token", /gh[pousr]_[A-Za-z0-9]{36,}|github_pat_[A-Za-z0-9_]{50,}/],
  ["rodo-token", /rodo_dev_[A-Za-z0-9_-]{40,}/],
  ["openai-like", /sk-[A-Za-z0-9_-]{32,}/],
  ["slack", /xox[abprs]-[A-Za-z0-9-]{10,}/],
  ["jwt", /eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/],
  ["url-credentials", /[a-z]+:\/\/[^/\s:@]+:[^/\s@]+@/i]
];
var ASSIGNMENT = /(password|passwd|secret|api[_-]?key|token)\s*[:=]\s*['"]?[^\s'"]{8,}/i;
function inlineCodeRanges(line) {
  const out = [];
  const re = /(`+)(.+?)\1/g;
  let m;
  while (m = re.exec(line))
    out.push([m.index, m.index + m[0].length]);
  return out;
}
function scanSecrets(text) {
  const hits = [];
  let fence = null;
  text.split(/\r?\n/).forEach((line, i) => {
    const n = i + 1;
    const f = /^\s*(```|~~~)\s*(.*)$/.exec(line);
    if (f) {
      fence = fence ? null : { example: /example/i.test(f[2]) };
      return;
    }
    const code = inlineCodeRanges(line);
    const inCode = (idx) => !!fence || code.some(([a, b]) => idx >= a && idx < b);
    const assign = ASSIGNMENT.exec(line);
    const assignCovers = (idx) => !!assign && idx >= assign.index && idx < assign.index + assign[0].length;
    let assignHandled = false;
    for (const [kind, re] of HIGH) {
      const m = re.exec(line);
      if (!m)
        continue;
      if (inCode(m.index) && assignCovers(m.index) && kind !== "private-key") {
        if (!fence?.example)
          hits.push({ kind: "assignment", line: n, possible: true });
        assignHandled = true;
        continue;
      }
      hits.push({ kind, line: n, possible: false });
    }
    if (assign && !assignHandled) {
      if (inCode(assign.index)) {
        if (!fence?.example)
          hits.push({ kind: "assignment", line: n, possible: true });
      } else
        hits.push({ kind: "assignment", line: n, possible: false });
    }
  });
  return hits;
}

// ../card-format/dist/status-reason.js
function readLegacyReason(description, status) {
  const label = status === "blocked" ? "Blocker" : status === "cancelled" ? "Cancelled" : null;
  if (!label)
    return null;
  const m = new RegExp(`^\\s*-\\s*${label}:[ \\t]*(.*?)[ \\t]*$`, "m").exec(description.replace(/\r\n?/g, "\n"));
  const v = m?.[1]?.trim() ?? "";
  return v === "" || v.toLowerCase() === "none" ? null : v.slice(0, 500);
}

// ../card-format/dist/parse.js
var isError = (f) => severityOf(f.code) !== "W";
function parseCardFull(text) {
  const sp = splitCard(text);
  const findings = [...sp.findings];
  if (sp.fmStart < 0 || sp.fmEnd < 0)
    return { model: null, findings, info: null };
  const fm = parseFrontmatter(sp.lines, sp.fmStart, sp.fmEnd);
  findings.push(...fm.findings);
  if (fm.findings.length)
    return { model: null, findings, info: null };
  const f = readFields(fm.data, fm.keyLine, fm.order);
  findings.push(...f.findings);
  const m = f.model;
  const body = parseBody(sp.lines.slice(sp.fmEnd + 1), sp.fmEnd + 2);
  findings.push(...body.findings);
  m.description = body.description;
  m.refs = body.refs;
  m.decisions = body.decisions;
  m.checklists = body.checklists;
  const seen = /* @__PURE__ */ new Set();
  for (const { id, no } of body.ids) {
    if (seen.has(id))
      findings.push(finding("ID_DUPLICATE", no, { id }));
    seen.add(id);
  }
  const kl = (k) => fm.keyLine[k] ?? null;
  if (m.schemaVersion === 1 && fm.data.schemaVersion === 1)
    findings.push(finding("SCHEMA_V1", kl("schemaVersion")));
  if (m.startAt && m.dueAt && (dateMs(m.startAt) ?? 0) > (dateMs(m.dueAt) ?? 0))
    findings.push(finding("DATE_RANGE", kl("startAt")));
  if (m.financial.type !== "none" && m.members.length !== 1)
    findings.push(finding("FINANCIAL_CARD_SINGLE_MEMBER", kl("financial")));
  const hasItems = m.checklists.some((c) => c.items.length > 0);
  if (f.hoursSet && hasItems)
    findings.push(finding("CARD_HOURS_WITH_ITEMS", kl("hours")));
  const hold = m.status === "blocked" || m.status === "cancelled";
  const reasonBad = findings.some((x) => x.code === "STATUS_REASON_INVALID");
  if (hold && !m.statusReason && !reasonBad) {
    const legacy = readLegacyReason(m.description, m.status);
    if (legacy) {
      m.statusReason = legacy;
      findings.push(finding("STATUS_REASON_FROM_NOTES", kl("status")));
    } else
      findings.push(finding(m.status === "blocked" ? "BLOCKER_REASON_MISSING" : "CANCEL_REASON_MISSING", kl("status")));
  }
  if (!hold && m.statusReason)
    findings.push(finding("STATUS_REASON_WITHOUT_HOLD", kl("statusReason")));
  if (m.status === "blocked" && !m.blockerType && !findings.some((x) => x.code === "BLOCKER_TYPE_INVALID")) {
    findings.push(finding("BLOCKER_TYPE_MISSING", kl("status")));
  }
  if (m.status !== "blocked" && m.blockerType)
    findings.push(finding("BLOCKER_TYPE_WITHOUT_BLOCKED", kl("blockerType")));
  const approvals = m.checklists.flatMap((c) => c.items).filter((i) => i.kind === "approval");
  if (approvals.length > 1)
    findings.push(finding("APPROVAL_ITEM_DUPLICATE", null));
  const scanText = sp.lines.map((l, i) => i === 0 && sp.errorLine ? "" : l).join("\n");
  for (const h of scanSecrets(scanText)) {
    findings.push(finding(h.possible ? "SECRET_POSSIBLE" : "SECRET_SUSPECTED", h.line, { n: h.line, kind: h.kind }));
  }
  return {
    model: m,
    findings,
    info: {
      eol: sp.eol,
      bom: sp.bom,
      trailingNewline: sp.trailingNewline,
      errorLine: sp.errorLine,
      keyLine: fm.keyLine,
      fileUpdatedAt: f.fileUpdatedAt,
      fileLocked: f.fileLocked,
      hasRefsSection: body.hasRefsSection,
      keyOrder: fm.order
    }
  };
}
function parseCard(text) {
  const p = parseCardFull(text);
  return { model: p.model, errors: p.findings.filter(isError), warnings: p.findings.filter((x) => !isError(x)) };
}
function decodeCardBytes(bytes) {
  try {
    return { text: new TextDecoder("utf-8", { fatal: true }).decode(bytes), error: null };
  } catch {
    return { text: "", error: finding("ENCODING_INVALID", null) };
  }
}

// ../card-format/dist/serialize.js
var import_yaml2 = __toESM(require_dist2(), 1);
function scalar(s, flow = false) {
  let plain = s !== "" && s === s.trim() && !/[:#\n\r]|^-|—/.test(s) && !(flow && /[,[\]{}]/.test(s));
  if (plain) {
    try {
      plain = (0, import_yaml2.parse)(s) === s;
    } catch {
      plain = false;
    }
  }
  return plain ? s : JSON.stringify(s);
}
var flowList = (l) => `[${l.map((x) => scalar(x, true)).join(", ")}]`;
var fmtHours = (min) => `${Math.floor(min / 60)}:${String(min % 60).padStart(2, "0")}`;
function frontmatterLines(m) {
  const o = [];
  const kv = (k, v) => o.push(`${k}: ${v}`);
  kv("schemaVersion", String(m.schemaVersion));
  if (m.id)
    kv("id", scalar(m.id));
  if (m.tempId)
    kv("tempId", scalar(m.tempId));
  if (m.boardId)
    kv("boardId", scalar(m.boardId));
  kv("title", scalar(m.title));
  kv("status", m.status);
  if (m.statusReason)
    kv("statusReason", scalar(m.statusReason));
  if (m.blockerType)
    kv("blockerType", m.blockerType);
  if (m.list)
    kv("list", scalar(m.list));
  if (m.priority !== "none")
    kv("priority", m.priority);
  if (m.members.length)
    kv("members", flowList(m.members));
  if (m.labels.length)
    kv("labels", flowList(m.labels));
  if (m.startAt)
    kv("startAt", m.startAt.includes(":") ? JSON.stringify(m.startAt) : m.startAt);
  if (m.dueAt)
    kv("dueAt", m.dueAt.includes(":") ? JSON.stringify(m.dueAt) : m.dueAt);
  if (m.coverColor)
    kv("coverColor", m.coverColor);
  if (m.hoursMinutes !== null)
    kv("hours", fmtHours(m.hoursMinutes));
  const f = m.financial;
  if (f.type !== "none" || f.amount !== 0 || f.category !== "general" || f.date) {
    o.push("financial:", `  type: ${f.type}`, `  amount: ${f.amount}`, `  category: ${scalar(f.category)}`);
    if (f.date)
      o.push(`  date: ${f.date}`);
  }
  if (m.scope)
    o.push("scope:", `  allowed: ${flowList(m.scope.allowed)}`, `  forbidden: ${flowList(m.scope.forbidden)}`);
  if (m.test)
    o.push("test:", `  adapter: ${m.test.adapter}`, `  command: ${JSON.stringify(m.test.command)}`);
  if (m.workflow)
    kv("workflow", m.workflow);
  if (m.updatedAt !== null)
    kv("updatedAt", String(m.updatedAt));
  if (m.locked)
    kv("locked", "true");
  for (const [k, v] of Object.entries(m.extras)) {
    o.push(...(0, import_yaml2.stringify)({ [k]: v }).replace(/\n$/, "").split("\n"));
  }
  return o;
}
function bodyLines(m) {
  const o = [];
  const block = (...lines) => {
    if (o.length)
      o.push("");
    o.push(...lines);
  };
  if (m.description)
    block(...m.description.split("\n"));
  if (m.refs.length) {
    block("## Refs", "");
    for (const r of m.refs) {
      const p = /\s/.test(r.path) ? `<${r.path}>` : r.path;
      o.push(`- [${r.title}](${p})${r.id ? ` <!-- rodo:ref_${r.id} -->` : ""}`);
    }
  }
  for (const d of m.decisions) {
    block(`## Decision: ${d.question}${d.id ? ` <!-- rodo:dec_${d.id} -->` : ""}`, "");
    for (const op of d.options)
      o.push(`- ${op.key}: ${op.text}`);
    if (d.answer)
      o.push(`- Answer: ${d.answer.key}${d.answer.note ? ` \u2014 ${d.answer.note}` : ""}`);
  }
  for (const c of m.checklists) {
    block(`## Checklist: ${c.title}${c.id ? ` <!-- rodo:chk_${c.id} -->` : ""}`, "");
    for (const i of c.items) {
      o.push(`- [${i.isDone ? "x" : " "}] ${i.title}` + (i.assignee ? ` @${i.assignee}` : "") + (i.minutes > 0 ? ` [hours: ${fmtHours(i.minutes)}]` : "") + (i.kind === "approval" ? " [approval]" : "") + (i.id ? ` <!-- rodo:ckl_${i.id} -->` : ""));
    }
  }
  return o;
}
function serializeCard(m, opts = {}) {
  const sp = opts.original !== void 0 ? splitCard(opts.original) : null;
  const eol = opts.eol ?? sp?.eol ?? "\n";
  const lines = ["---", ...frontmatterLines(m), "---"];
  const body = bodyLines(m);
  if (body.length)
    lines.push("", ...body);
  const text = lines.join(eol) + (sp ? sp.trailingNewline ? eol : "" : eol);
  return (sp?.bom ? "\uFEFF" : "") + text;
}

// ../card-format/dist/board-checks.js
var ROLE_FOR = {
  todo: "START",
  in_progress: "ACTIVE",
  done: "END"
};
function boardChecks(m, meta, keyLine) {
  const out = [];
  if (!meta.capabilities.cardStatuses.includes(m.status)) {
    out.push(finding("STATUS_NOT_SUPPORTED", keyLine.status ?? null, { value: m.status }));
  }
  const need = ROLE_FOR[m.status];
  if (m.list) {
    const l = meta.lists.find((x) => x.title === m.list);
    if (!l)
      out.push(finding("UNKNOWN_LIST", keyLine.list ?? null, { list: m.list }));
    else if (need && l.workflowRole !== need)
      out.push(finding("LIST_STATUS_MISMATCH", keyLine.list ?? null, { list: m.list, status: m.status }));
  }
  const users = new Set(meta.members.map((x) => x.username));
  for (const u of m.members)
    if (!users.has(u))
      out.push(finding("UNKNOWN_MEMBER", keyLine.members ?? null, { username: u }));
  const names = new Set(meta.labels.map((x) => x.name));
  for (const l of m.labels)
    if (!names.has(l))
      out.push(finding("UNKNOWN_LABEL", keyLine.labels ?? null, { label: l }));
  for (const c of m.checklists) {
    for (const i of c.items) {
      if (i.assignee && !users.has(i.assignee))
        out.push(finding("UNKNOWN_MEMBER", null, { username: i.assignee }));
    }
  }
  return out;
}

// ../card-format/dist/hints.js
var CYCLE_FOLDER = /^[0-9]{3}-[a-z0-9]+(-[a-z0-9]+)*$/;
function methodHints(m, ctx, hasRefsSection) {
  const out = [];
  const seg = ctx.relPath.replace(/\\/g, "/").split("/");
  const cyc = seg[0] === "cycles" && seg.length >= 3;
  const folder = cyc ? seg[1] : null;
  const active = m.status === "todo" || m.status === "in_progress";
  if (/\.rodo\.md$/i.test(ctx.relPath) && !/\.rodo\.md$/.test(ctx.relPath))
    out.push(finding("FILE_EXT_CASE", null));
  if (cyc && folder) {
    if (!CYCLE_FOLDER.test(folder))
      out.push(finding("CYCLE_FOLDER_NAME", null));
    if (seg.length !== 3 || seg[2].toLowerCase() !== "card.rodo.md")
      out.push(finding("CYCLE_CARD_NAME", null));
    if (!ctx.siblingFiles.includes("simple.md"))
      out.push(finding("CYCLE_SIMPLE_MISSING", null));
    const own = `/cycles/${folder}/simple.md`;
    if (!hasRefsSection || !m.refs.some((r) => r.path.split("#")[0].endsWith(own)))
      out.push(finding("CYCLE_REFS_MISSING", null));
    if ((m.status === "in_progress" || m.status === "blocked") && !/^## Progress notes\s*$/m.test(m.description)) {
      out.push(finding("PROGRESS_NOTES_MISSING", null));
    }
    if (m.status === "cancelled" && ctx.mapText !== null && !listedInMap(ctx.mapText, folder, MAP_HEADINGS.cancelled)) {
      out.push(finding("CYCLE_CANCELLED_NOT_IN_MAP", null));
    }
    if (m.status === "done" && ctx.mapText !== null && !listedInMap(ctx.mapText, folder, MAP_HEADINGS.done)) {
      out.push(finding("CYCLE_DONE_NOT_IN_MAP", null));
    }
    if (active && ctx.siblingFiles.includes("spec.md") && !m.scope)
      out.push(finding("SCOPE_MISSING", null));
    if (active && m.workflow === "major" && !ctx.siblingFiles.includes("design.md"))
      out.push(finding("DESIGN_MISSING", null));
  } else if (!m.id && m.status === "todo" && !/^## Goal\s*$/m.test(m.description)) {
    out.push(finding("REQUEST_GOAL_MISSING", null));
  }
  return out;
}
var MAP_HEADINGS = {
  cancelled: ["\u0644\u063A\u0648\u0634\u062F\u0647", "Cancelled"],
  done: ["\u0627\u0646\u062C\u0627\u0645\u200C\u0634\u062F\u0647", "Done"]
};
function listedInMap(map, folder, headings) {
  const lines = map.split(/\r?\n/);
  const isHead = (l) => headings.some((h) => new RegExp(`^##\\s+${h}(\\s|$|[(:\u2014-])`, "i").test(l.trim()));
  const link = new RegExp(`(^|[/(\\s])cycles/${folder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(/|\\)|\\s|$)`);
  for (let start = 0; start < lines.length; start++) {
    if (!isHead(lines[start]))
      continue;
    for (let i = start + 1; i < lines.length && !lines[i].startsWith("## "); i++) {
      if (link.test(lines[i]))
        return true;
    }
  }
  return false;
}

// ../card-format/dist/validate.js
var BOARD_PLACEHOLDER = "SET-AFTER-RODO-INIT";
function validateCard(text, ctx) {
  const p = parseCardFull(text);
  const out = [...p.findings];
  const m = p.model;
  const info = p.info;
  if (m && info) {
    const kl = (k) => info.keyLine[k] ?? null;
    const base = ctx.base;
    if (m.boardId === BOARD_PLACEHOLDER && !ctx.boundBoardId)
      out.push(finding("BOARD_ID_PLACEHOLDER", kl("boardId")));
    else if (m.boardId && ctx.boundBoardId && m.boardId !== ctx.boundBoardId) {
      out.push(finding("BOARD_MISMATCH", kl("boardId"), { boardId: ctx.boundBoardId }));
    }
    const dup = m.id ? ctx.knownIds?.[m.id] : void 0;
    if (dup && dup !== ctx.relPath)
      out.push(finding("CARD_ID_DUPLICATE", kl("id"), { path: dup }));
    if (base) {
      if (info.fileUpdatedAt !== void 0 && info.fileUpdatedAt !== null && info.fileUpdatedAt !== base.updatedAt && !out.some((f) => f.code === "UPDATED_AT_EDITED"))
        out.push(finding("UPDATED_AT_EDITED", kl("updatedAt")));
      m.updatedAt = base.updatedAt;
    }
    const lockedNow = base?.locked ?? false;
    if (info.fileLocked !== void 0 && info.fileLocked !== null && info.fileLocked !== lockedNow && !out.some((f) => f.code === "LOCKED_EDITED"))
      out.push(finding("LOCKED_EDITED", kl("locked")));
    m.locked = lockedNow;
    for (const r of m.refs) {
      if (ctx.repoFileExists(refPathOnly(r.path)))
        continue;
      const known = base?.refs.some((b) => b.path === r.path);
      out.push(finding(known ? "REF_MISSING_LOCAL" : "REF_NOT_FOUND", null, { path: r.path }));
    }
    out.push(...decisionRules(m, base));
    out.push(...approvalRules(m, base));
    if (ctx.meta)
      out.push(...boardChecks(m, ctx.meta, info.keyLine));
    out.push(...methodHints(m, ctx, info.hasRefsSection));
  } else if (/\.rodo\.md$/i.test(ctx.relPath) && !/\.rodo\.md$/.test(ctx.relPath)) {
    out.push(finding("FILE_EXT_CASE", null));
  }
  return { model: m, errors: out.filter(isError), warnings: out.filter((f) => !isError(f)) };
}
function decisionRules(m, base) {
  const out = [];
  for (const d of m.decisions) {
    const b = d.id ? base?.decisions.find((x) => x.id === d.id) : void 0;
    if (d.answer && !(b?.answer && b.answer.key === d.answer.key && (b.answer.note ?? null) === (d.answer.note ?? null))) {
      out.push(finding("DECISION_ANSWER_REQUIRES_HUMAN", null, { question: d.question }));
    }
    if (b?.answer) {
      const same = fieldEquals("text", b.question, d.question) && b.options.length === d.options.length && b.options.every((o, i) => o.key === d.options[i].key && fieldEquals("text", o.text, d.options[i].text));
      if (!same)
        out.push(finding("DECISION_ANSWERED_READONLY", null, { question: b.question }));
    }
  }
  return out;
}
function approvalRules(m, base) {
  const out = [];
  const local = m.checklists.flatMap((c) => c.items).filter((i) => i.kind === "approval");
  const baseItems = (base?.checklists ?? []).flatMap((c) => c.items);
  for (const b of baseItems.filter((i) => i.kind === "approval" && i.id)) {
    const l = m.checklists.flatMap((c) => c.items).find((i) => i.id === b.id);
    if (!l || l.kind !== "approval" || l.isDone !== b.isDone || !fieldEquals("title", l.title, b.title)) {
      out.push(finding("APPROVAL_REQUIRES_HUMAN", null, { title: b.title }));
    }
  }
  for (const l of local) {
    const inBase = !!l.id && baseItems.some((i) => i.id === l.id);
    if (l.isDone && !inBase && (base || !l.id))
      out.push(finding("APPROVAL_REQUIRES_HUMAN", null, { title: l.title }));
  }
  return out;
}

// ../card-format/dist/canonical.js
var K = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
function sha256Hex(input) {
  const data = new TextEncoder().encode(input);
  const len = data.length;
  const padded = new Uint8Array(len + 9 + 63 >> 6 << 6);
  padded.set(data);
  padded[len] = 128;
  const view = new DataView(padded.buffer);
  view.setUint32(padded.length - 8, Math.floor(len * 8 / 4294967296));
  view.setUint32(padded.length - 4, len * 8 >>> 0);
  const h = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
  const w2 = new Uint32Array(64);
  const rotr = (x, n) => x >>> n | x << 32 - n;
  const at = (arr, i) => arr[i];
  for (let off = 0; off < padded.length; off += 64) {
    for (let i = 0; i < 16; i++)
      w2[i] = view.getUint32(off + i * 4);
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(at(w2, i - 15), 7) ^ rotr(at(w2, i - 15), 18) ^ at(w2, i - 15) >>> 3;
      const s1 = rotr(at(w2, i - 2), 17) ^ rotr(at(w2, i - 2), 19) ^ at(w2, i - 2) >>> 10;
      w2[i] = at(w2, i - 16) + s0 + at(w2, i - 7) + s1 >>> 0;
    }
    let a = at(h, 0), b = at(h, 1), c = at(h, 2), d = at(h, 3), e2 = at(h, 4), f = at(h, 5), g = at(h, 6), hh = at(h, 7);
    for (let i = 0; i < 64; i++) {
      const t1 = hh + (rotr(e2, 6) ^ rotr(e2, 11) ^ rotr(e2, 25)) + (e2 & f ^ ~e2 & g) + at(K, i) + at(w2, i) >>> 0;
      const t2 = (rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) + (a & b ^ a & c ^ b & c) >>> 0;
      hh = g;
      g = f;
      f = e2;
      e2 = d + t1 >>> 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 >>> 0;
    }
    h[0] = at(h, 0) + a;
    h[1] = at(h, 1) + b;
    h[2] = at(h, 2) + c;
    h[3] = at(h, 3) + d;
    h[4] = at(h, 4) + e2;
    h[5] = at(h, 5) + f;
    h[6] = at(h, 6) + g;
    h[7] = at(h, 7) + hh;
  }
  return Array.from(h, (x) => x.toString(16).padStart(8, "0")).join("");
}
function stableStringify(v) {
  if (v === null || typeof v !== "object")
    return JSON.stringify(v) ?? "null";
  if (Array.isArray(v))
    return `[${v.map(stableStringify).join(",")}]`;
  const o = v;
  return `{${Object.keys(o).sort().filter((k) => o[k] !== void 0).map((k) => `${JSON.stringify(k)}:${stableStringify(o[k])}`).join(",")}}`;
}
function canonicalHash(m) {
  const n = normalizeForCompare;
  const body = {
    title: n("title", m.title),
    description: n("description", m.description),
    status: n("status", { status: m.status, list: m.list ?? null, statusReason: m.statusReason, blockerType: m.blockerType }),
    priority: m.priority,
    coverColor: m.coverColor,
    startAt: n("startAt", m.startAt),
    dueAt: n("dueAt", m.dueAt),
    hours: n("hours", m.hoursMinutes),
    financial: n("financial", m.financial),
    scope: n("scope", m.scope),
    test: n("test", m.test),
    members: n("members", m.members),
    labels: n("labels", m.labels),
    refs: m.refs.map((r) => ({ id: r.id ?? null, title: n("title", r.title), path: r.path })),
    decisions: m.decisions.map((d) => ({
      id: d.id ?? null,
      question: n("text", d.question),
      options: d.options.map((o) => ({ key: o.key, text: n("text", o.text) })),
      answer: d.answer
    })),
    checklists: m.checklists.map((c) => ({
      id: c.id ?? null,
      title: n("title", c.title),
      items: c.items.map((i) => ({ id: i.id ?? null, title: n("title", i.title), isDone: i.isDone, assignee: i.assignee, minutes: i.minutes, kind: i.kind }))
    }))
  };
  return `sha256:${sha256Hex(stableStringify(body))}`;
}

// ../card-format/dist/signature.js
function normalizeFailureMessage(s) {
  return s.replace(/\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?/g, "<ts>").replace(/\d{4}-\d{2}-\d{2}/g, "<date>").replace(/\b\d{1,2}:\d{2}:\d{2}(\.\d+)?\b/g, "<time>").replace(/(?:[A-Za-z]:\\|\/)(?:[^\s:'"()<>|]+[\\/])+[^\s:'"()<>|]*/g, "<path>").replace(/\b(\d+(\.\d+)?)\s?(ms|s|sec|secs|seconds|min|m)\b/g, "<dur>").replace(/:\d{2,5}\b/g, ":<port>").replace(/\b[0-9a-f]{8,}\b/gi, "<hex>").replace(/\d{4,}/g, "<n>").replace(/\s+/g, " ").trim();
}
function failureSignature(i) {
  const hex = sha256Hex([i.adapter, i.scenario, i.step, i.errorType, normalizeFailureMessage(i.message)].join("|"));
  return { full: `sha256:${hex}`, short: hex.slice(0, 12) };
}

// ../card-format/dist/diff.js
var isHold = (s) => s === "blocked" || s === "cancelled";
function statusGroup(m) {
  return {
    status: m.status,
    list: m.list ?? null,
    statusReason: isHold(m.status) ? m.statusReason : null,
    blockerType: m.status === "blocked" ? m.blockerType : null
  };
}
function setOps(base, local) {
  const add = local.filter((x) => !base.includes(x));
  const remove = base.filter((x) => !local.includes(x));
  return add.length || remove.length ? { add, remove } : void 0;
}
var itemKey = (i, n) => i.id ?? i.tempId ?? `tmp_i_${n}`;
function itemSet(b, l) {
  const set = {};
  if (!b || !fieldEquals("title", b.title, l.title))
    set.title = l.title;
  if (!b || b.isDone !== l.isDone)
    set.isDone = l.isDone;
  if (!b || (b.assignee ?? null) !== (l.assignee ?? null))
    set.assignee = l.assignee;
  if (!b || b.minutes !== l.minutes)
    set.minutes = l.minutes;
  if (!b)
    set.kind = l.kind;
  return Object.keys(set).length ? set : void 0;
}
function checklistOp(b, l, order, seq) {
  const items = [];
  let prev = null;
  for (const li of l.items) {
    const n = seq.n++;
    const bi = li.id ? b?.items.find((x) => x.id === li.id) : void 0;
    const key2 = itemKey(li, n);
    if (!bi) {
      if (li.kind === "approval" && li.isDone) {
        prev = li.id ?? prev;
        continue;
      }
      items.push({ tempId: li.id ? void 0 : key2, id: li.id, set: itemSet(void 0, li), after: prev });
    } else if (bi.kind === "approval") {
    } else {
      const set = itemSet(bi, li);
      if (set)
        items.push({ id: li.id, set });
    }
    prev = li.id ?? key2;
  }
  for (const bi of b?.items ?? []) {
    if (bi.kind === "approval")
      continue;
    if (!l.items.some((x) => x.id === bi.id))
      items.push({ id: bi.id, delete: true });
  }
  const titleChanged = !b || !fieldEquals("title", b.title, l.title);
  if (!items.length && !titleChanged && order === null)
    return null;
  return { id: l.id, tempId: l.id ? void 0 : `tmp_c_${seq.n++}`, title: titleChanged ? l.title : null, order, items };
}
function diffModels(base, local) {
  const fields = {};
  const eq = fieldEquals;
  if (!eq("title", base.title, local.title))
    fields.title = local.title;
  if (!eq("description", base.description, local.description))
    fields.description = local.description;
  if (!eq("status", statusGroup(base), statusGroup(local))) {
    const g = statusGroup(local);
    fields.status = (base.list ?? null) === (local.list ?? null) ? { ...g, list: null } : g;
  }
  if (base.priority !== local.priority)
    fields.priority = local.priority;
  if ((base.coverColor ?? null) !== (local.coverColor ?? null))
    fields.coverColor = local.coverColor;
  if (!eq("startAt", base.startAt, local.startAt))
    fields.startAt = local.startAt;
  if (!eq("dueAt", base.dueAt, local.dueAt))
    fields.dueAt = local.dueAt;
  if (!eq("hours", base.hoursMinutes, local.hoursMinutes))
    fields.hours = local.hoursMinutes;
  if (!eq("financial", base.financial, local.financial))
    fields.financial = local.financial;
  if (!eq("scope", base.scope, local.scope))
    fields.scope = local.scope ?? { allowed: [], forbidden: [] };
  if (!eq("test", base.test, local.test))
    fields.test = local.test;
  const out = {};
  if (Object.keys(fields).length)
    out.fields = fields;
  const members = setOps(base.members, local.members);
  if (members)
    out.members = members;
  const labels = setOps(base.labels, local.labels);
  if (labels)
    out.labels = labels;
  const refKey = (r) => r.id ?? r.path;
  const refs = {
    add: local.refs.filter((r) => !base.refs.some((b) => refKey(b) === refKey(r) || b.path === r.path)).map((r) => ({ title: r.title, path: r.path })),
    remove: base.refs.filter((b) => !local.refs.some((r) => refKey(b) === refKey(r) || b.path === r.path)).map((b) => ({ title: b.title, path: b.path })),
    retitle: local.refs.flatMap((r) => {
      const b = base.refs.find((x) => x.id && x.id === r.id);
      return b && !eq("title", b.title, r.title) ? [{ id: r.id, title: r.title }] : [];
    })
  };
  if (refs.add.length || refs.remove.length || refs.retitle.length)
    out.refs = refs;
  const seq = { n: 1 };
  const cops = [];
  let pos = 0;
  for (const l of local.checklists) {
    const b = l.id ? base.checklists.find((x) => x.id === l.id) : void 0;
    const baseIdx = b ? base.checklists.indexOf(b) : -1;
    const op = checklistOp(b, l, b && baseIdx !== pos ? pos : null, seq);
    if (op)
      cops.push(op);
    pos++;
  }
  if (cops.length)
    out.checklists = cops;
  const dops = [];
  let dn = 1;
  for (const d of local.decisions) {
    const b = d.id ? base.decisions.find((x) => x.id === d.id) : void 0;
    const set = { question: d.question, options: d.options };
    if (!b)
      dops.push({ tempId: d.id ? void 0 : `tmp_d_${dn++}`, id: d.id, set });
    else if (!b.answer) {
      const same = eq("text", b.question, d.question) && b.options.length === d.options.length && b.options.every((o, i) => o.key === d.options[i].key && eq("text", o.text, d.options[i].text));
      if (!same)
        dops.push({ id: d.id, set });
    }
  }
  for (const b of base.decisions) {
    if (!b.answer && !local.decisions.some((d) => d.id === b.id))
      dops.push({ id: b.id, withdraw: true });
  }
  if (dops.length)
    out.decisions = dops;
  return out;
}
var isEmptyChanges = (c) => Object.keys(c).length === 0;

// ../card-format/dist/merge.js
function cardStateToModel(s) {
  return {
    ...emptyModel(),
    schemaVersion: 2,
    id: s.id,
    title: s.title,
    status: s.status,
    statusReason: s.statusReason,
    blockerType: s.blockerType,
    list: s.list,
    priority: s.priority ?? "none",
    members: [...s.members],
    labels: [...s.labels],
    startAt: s.startAt,
    dueAt: s.dueAt,
    coverColor: s.coverColor ?? null,
    hoursMinutes: s.hours,
    financial: { type: s.financial.type, amount: s.financial.amount, category: s.financial.category, date: s.financial.date },
    scope: s.scope.allowed.length || s.scope.forbidden.length ? { ...s.scope } : null,
    test: s.test.adapter && s.test.command ? { adapter: s.test.adapter, command: s.test.command } : null,
    updatedAt: s.updatedAt,
    locked: s.locked,
    description: s.description,
    refs: s.refs.map((r) => ({ ...r })),
    decisions: s.decisions.map((d) => ({ id: d.id, question: d.question, options: d.options.map((o) => ({ ...o })), answer: d.answer ? { key: d.answer.key, note: d.answer.note } : null })),
    checklists: s.checklists.map((c) => ({
      id: c.id,
      title: c.title,
      items: c.items.map((i) => ({ id: i.id, title: i.title, isDone: i.isDone, assignee: i.assignee, minutes: i.minutes, kind: i.kind }))
    }))
  };
}

// ../card-format/dist/progress-notes.js
var HEAD = /^## Progress notes\s*$/m;
function progressSection(description) {
  const m = HEAD.exec(description);
  if (!m)
    return null;
  const rest = description.slice(m.index + m[0].length);
  const next = /^## /m.exec(rest);
  return (m[0] + (next ? rest.slice(0, next.index) : rest)).trimEnd();
}
function keepProgressNotes(incoming, local) {
  if (!local || HEAD.test(incoming))
    return incoming;
  const sec = progressSection(local);
  if (!sec)
    return incoming;
  return incoming.trim() ? `${incoming.trimEnd()}

${sec}` : sec;
}

// src/core/cards.ts
import { existsSync as existsSync6, readdirSync as readdirSync2, readFileSync as readFileSync4, statSync as statSync3 } from "fs";
import { join as join5, relative as relative2, resolve as resolve2 } from "path";
var CARD_RE = /\.rodo\.md$/i;
function walk(dir, isLegacy, out = []) {
  for (const n of readdirSync2(dir).sort()) {
    const p = join5(dir, n);
    if (statSync3(p).isDirectory()) {
      if (n === ".rodo" || n === "node_modules") continue;
      if (isLegacy && existsSync6(join5(p, "project.json"))) continue;
      walk(p, isLegacy, out);
    } else if (CARD_RE.test(n)) out.push(p);
  }
  return out;
}
function cardKey(relPath) {
  const seg = relPath.split("/");
  if (seg[0] === "cycles" && seg.length >= 3) {
    const m = /^(\d{3})-/.exec(seg[1]);
    return { key: seg[1], number: m ? m[1] : null };
  }
  return { key: seg[seg.length - 1].replace(CARD_RE, ""), number: null };
}
function scanCards(root, ref, only = [], opts = {}) {
  const keep = only.map((p) => resolve2(p));
  const abs = walk(ref.dir, ref.legacy).filter((p) => !keep.length || keep.some((k) => p === k || p.startsWith(k + "\\") || p.startsWith(k + "/")));
  const mapPath = join5(ref.dir, "MAP.md");
  const mapText = existsSync6(mapPath) ? readFileSync4(mapPath, "utf8") : null;
  const read = abs.map((p) => {
    const bytes = readFileSync4(p);
    const dec = decodeCardBytes(bytes);
    return { p, rel: posix(relative2(ref.dir, p)), bytes, dec };
  });
  const knownIds = {};
  const idOf = /* @__PURE__ */ new Map();
  for (const r of read.sort((a, b) => a.rel.localeCompare(b.rel))) {
    const id = r.dec.error ? void 0 : parseCard(r.dec.text).model?.id;
    if (id) idOf.set(r.rel, id);
    if (id && !knownIds[id]) knownIds[id] = r.rel;
  }
  return read.map((r) => {
    const { key: key2, number } = cardKey(r.rel);
    const base = { path: r.rel, abs: r.p, key: key2, number, mtimeMs: statSync3(r.p).mtimeMs };
    if (r.dec.error) return { ...base, text: "", model: null, errors: [r.dec.error], warnings: [] };
    const v = validateCard(r.dec.text, {
      relPath: r.rel,
      projectSlug: ref.legacy ? null : ref.slug,
      boundBoardId: ref.project?.boardId ?? null,
      base: idOf.has(r.rel) ? opts.baseOf?.(idOf.get(r.rel)) ?? null : null,
      meta: opts.meta ?? null,
      repoFileExists: (repoPath) => existsSync6(join5(root, repoPath.replace(/^\//, ""))),
      siblingFiles: readdirSync2(join5(r.p, "..")),
      mapText,
      knownIds
    });
    return { ...base, text: r.dec.text, model: v.model, errors: v.errors, warnings: v.warnings };
  });
}
function findCard(cards, q) {
  const num = /^\d{1,3}$/.test(q) ? q.padStart(3, "0") : null;
  return cards.find((c) => num && c.number === num || c.key === q || c.model?.id && (c.model.id === q || q.length === 8 && c.model.id.endsWith(q))) ?? // the cycle slug without its number: `rodo resume delete-note` (dogfood #10)
  cards.find((c) => c.number !== null && c.key.replace(/^\d{3}-/, "") === q) ?? null;
}
function cardLabel(number, title, sep3 = " ") {
  if (!number) return title;
  const t2 = title.trim();
  return new RegExp(`^${number}(\\b|\\s|[\u2014:.-])`).test(t2) ? t2 : `${number}${sep3}${t2}`;
}

// src/core/git.ts
import { execFileSync as execFileSync2 } from "child_process";
import { existsSync as existsSync7, mkdirSync as mkdirSync4, renameSync as renameSync2 } from "fs";
import { dirname as dirname4 } from "path";
function git(root, args) {
  try {
    return execFileSync2("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return null;
  }
}
var isGitRepo = (root) => git(root, ["rev-parse", "--git-dir"]) !== null;
var gitHead = (root) => git(root, ["rev-parse", "HEAD"]);
var gitBranch = (root) => git(root, ["rev-parse", "--abbrev-ref", "HEAD"]);
var isShallow = (root) => git(root, ["rev-parse", "--is-shallow-repository"]) === "true";
function rootCommit(root) {
  if (isShallow(root)) return null;
  const out = git(root, ["rev-list", "--max-parents=0", "HEAD"]);
  return out ? out.split("\n").sort()[0] : null;
}
function repoFingerprint(root) {
  const c = rootCommit(root);
  return c ? sha256(c) : null;
}
function lsFiles(root, pathspec) {
  const out = git(root, ["ls-files", "--", ...pathspec]);
  return out === null ? null : out.split("\n").filter(Boolean);
}
function moveFile(root, from, to, useGit) {
  if (existsSync7(to)) throw new Error(`target exists: ${to}`);
  mkdirSync4(dirname4(to), { recursive: true });
  if (useGit && git(root, ["mv", from, to]) !== null) return;
  renameSync2(from, to);
}
function remoteHint(root) {
  const url = git(root, ["remote", "get-url", "origin"]);
  if (!url) return null;
  const m = /^(?:[a-z+]+:\/\/)?(?:[^@/]+@)?([^/:]+)[/:](.+?)(?:\.git)?\/?$/i.exec(url);
  return m ? `${m[1]}/${m[2]}` : null;
}

// src/kit/project-scaffold.ts
import { existsSync as existsSync8, mkdirSync as mkdirSync5, readFileSync as readFileSync5 } from "fs";
import { join as join6 } from "path";
var GITIGNORE_LINES = ["rodo/*/.rodo/", "rodo/*/inbox/", "rodo/**/*.rodo.md"];
var CARDS_LINE = "rodo/**/*.rodo.md";
var GITIGNORE_HEADER = "# RODO: local state (and, once a board is bound, card files: they live on the board)";
var OLD_HEADER = "# RODO: local state and card files (cards live on the RODO board)";
function scaffoldProject(root, slug2, name, lang) {
  const kit = loadKit();
  const template = lang === "en" && kit.manifest.projectTemplateEn?.length ? kit.manifest.projectTemplateEn : kit.manifest.projectTemplate;
  const dir = join6(root, "rodo", slug2);
  const created = [];
  for (const f of template) {
    const dest = join6(dir, f.dest);
    if (existsSync8(dest)) continue;
    let text = kit.read(f.src).toString("utf8").replaceAll("{{DATE}}", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)).replaceAll("{{slug}}", slug2).replaceAll("{{name}}", name).replaceAll("{{\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647}}", name);
    if (f.dest === "project.json" && lang === "en") text = text.replace('"simple": "fa"', '"simple": "en"');
    writeAtomic(dest, text);
    created.push(`rodo/${slug2}/${f.dest}`);
  }
  mkdirSync5(join6(dir, "cycles"), { recursive: true });
  return created;
}
function missingGitignoreLines(root, opts = {}) {
  const p = join6(root, ".gitignore");
  const have = new Set((existsSync8(p) ? readFileSync5(p, "utf8") : "").split(/\r?\n/).map((l) => l.trim()));
  return GITIGNORE_LINES.filter((l) => !have.has(l) && (opts.cards !== false || l !== CARDS_LINE));
}
function addGitignore(root, opts = {}) {
  const missing = missingGitignoreLines(root, opts);
  if (!missing.length) return;
  const p = join6(root, ".gitignore");
  const cur = existsSync8(p) ? readFileSync5(p, "utf8") : "";
  const eol = cur.includes("\r\n") ? "\r\n" : "\n";
  const head2 = cur && !cur.endsWith("\n") ? eol : "";
  const hasHeader = cur.includes(GITIGNORE_HEADER) || cur.includes(OLD_HEADER);
  const add = [...hasHeader ? [] : [GITIGNORE_HEADER], ...missing].join(eol) + eol;
  writeAtomic(p, cur + head2 + (cur ? eol : "") + add);
}

// src/commands/doctor.ts
var verCmp = (a, b) => a.localeCompare(b, void 0, { numeric: true });
function walk2(dir, out = []) {
  if (!existsSync9(dir)) return out;
  for (const n of readdirSync3(dir)) {
    const p = join7(dir, n);
    if (statSync4(p).isDirectory()) {
      if (n !== ".rodo" && n !== "node_modules") walk2(p, out);
    } else out.push(p);
  }
  return out;
}
var gitHooksPath = (root) => {
  try {
    return execFileSync3("git", ["config", "core.hooksPath"], { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim() || null;
  } catch {
    return null;
  }
};
var hasGit = () => {
  try {
    execFileSync3("git", ["--version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};
function secretTargets(ref) {
  const docs = ["MAP.md", "MEMORY.md"].map((f) => join7(ref.dir, f));
  const all = [...docs, ...walk2(join7(ref.dir, "project")), ...walk2(ref.dir).filter((p) => /[\\/]simple\.md$|\.rodo\.md$/i.test(p))];
  return [...new Set(all)].filter((p) => existsSync9(p));
}
function localChecks(d) {
  const out = [];
  const add = (id, project, level, message, fix) => out.push({ id, project, level, message, fix });
  const { root } = d;
  const major = Number(process.versions.node.split(".")[0]);
  major >= 20 ? add("node", null, "OK", `Node ${process.versions.node}`) : add("node", null, "FAIL", `Node ${process.versions.node} is too old`, "install Node 20 or newer");
  if (!hasGit()) add("git", null, "WARN", "git is not installed", "install git; RODO works without it but cannot tell repositories apart");
  else if (!isGitRepo(root)) add("git", null, "WARN", "this folder is not a git repository", "run git init");
  else add("git", null, "OK", "git repository");
  if (d.legacy) add("layout", null, "WARN", "kit 2.0 layout (rodo/MAP.md directly under rodo/)", "run rodo init to move rodo/ into rodo/<project>/");
  for (const p of d.projects.filter((x) => !x.legacy)) {
    p.problem ? add("layout", p.slug, "FAIL", `project.json: ${p.problem}`, "fix rodo/" + p.slug + "/project.json") : add("layout", p.slug, "OK", "project.json valid");
  }
  const kit = readKitJson(root);
  if (!kit) add("kit", null, "WARN", "rodo/kit.json is missing", "run rodo init --method-only");
  else {
    const bundled = loadKit().manifest.version;
    if (verCmp(kit.kitVersion, bundled) < 0) add("kit", null, "WARN", `kit ${kit.kitVersion} is older than the bundled kit ${bundled}`, "rodo init updates it");
    else add("kit", null, "OK", `kit ${kit.kitVersion}`);
  }
  const kept = walk2(join7(root, ".agents")).filter((p) => p.endsWith(".rodo-new"));
  if (kept.length) add("kit-files", null, "WARN", `${kept.length} kit file(s) changed locally (*.rodo-new present)`, "compare each file with its .rodo-new copy, then delete the .rodo-new file");
  const bound = discover(root).projects.some((p) => !!p.project?.boardId);
  const missing = missingGitignoreLines(root, { cards: bound });
  missing.length ? add("gitignore", null, "WARN", `.gitignore lacks: ${missing.join(", ")}`, bound ? "run rodo init --yes-files" : "run rodo init --method-only --yes-files") : add("gitignore", null, "OK", ".gitignore has the RODO lines");
  const tracked2 = lsFiles(root, ["rodo"])?.filter((f) => /\.rodo\.md$/i.test(f));
  if (bound && tracked2?.length) add("gitignore", null, "WARN", `${tracked2.length} card file(s) are tracked by git`, "git rm --cached <file>; cards live on the board, not in git");
  const old = [];
  if (existsSync9(join7(root, ".githooks"))) old.push(".githooks/");
  if (gitHooksPath(root)) old.push("core.hooksPath");
  if (existsSync9(join7(root, "scripts", "rodo-lint.cjs"))) old.push("scripts/rodo-lint.cjs");
  if (old.length) add("legacy-kit-1", null, "WARN", `kit 1.x leftovers: ${old.join(", ")}`, "see rodo MIGRATION.md in the kit");
  const superseded = ["scripts/rodo-install.cjs", "scripts/rodo-update.cjs", "scripts/lib/core.cjs"].filter((f) => existsSync9(join7(root, f)));
  if (superseded.length) add("legacy-kit-2", null, "INFO", `superseded by rodo init, safe to delete: ${superseded.join(", ")}`);
  const tok = getToken(defaultServer());
  tok ? add("credentials", null, "OK", `logged in on ${defaultServer()}; no board bound yet`, "run rodo init to bind a board") : add("credentials", null, "SKIP", "not connected");
  add("server", null, "SKIP", "not connected");
  add("token", null, "SKIP", "not connected");
  add("clock", null, "SKIP", "not connected");
  for (const ref of d.projects) {
    const slug2 = ref.slug;
    const pj = ref.project;
    if (pj?.repoFingerprint) {
      const fp = repoFingerprint(root);
      if (fp && fp !== pj.repoFingerprint) add("repository", slug2, "FAIL", "REPOSITORY_MISMATCH: this repository is not the one the project was bound to", "run rodo from the original repository, or reset the binding on the web");
      else add("repository", slug2, "OK", "repository identity matches");
    } else add("repository", slug2, "SKIP", "not connected");
    pj?.boardId ? add("binding", slug2, "OK", `bound to board ${pj.boardId}`) : add("binding", slug2, "SKIP", "not connected (no board bound)");
    const conflicts = walk2(join7(ref.dir, ".rodo", "conflicts"));
    const last = readJson(join7(ref.dir, ".rodo", "last-sync.json"));
    const newer = conflicts.filter((p) => !last || statSync4(p).mtimeMs > last.finishedAt);
    if (newer.length) add("sync-drift", slug2, "WARN", `${newer.length} conflict file(s) in .rodo/conflicts newer than the last sync`, "open them, decide, then run rodo sync");
    const cards = scanCards(root, ref);
    const errs = cards.reduce((n, c) => n + c.errors.length, 0);
    const warns = cards.reduce((n, c) => n + c.warnings.length, 0);
    errs ? add("cards", slug2, "WARN", `${cards.length} card(s), ${errs} error(s), ${warns} warning(s)`, "run rodo validate and fix the errors") : add("cards", slug2, "OK", `${cards.length} card(s), no errors, ${warns} warning(s)`);
    let secrets = 0;
    for (const p of secretTargets(ref)) {
      for (const h of scanSecrets(readFileSync6(p, "utf8"))) {
        if (h.possible) continue;
        secrets++;
        add("secrets", slug2, "FAIL", `${posix(relative3(root, p))}:${h.line} looks like a secret (${h.kind})`, "remove it, rotate it, and refer to it by name only");
      }
    }
    if (!secrets) add("secrets", slug2, "OK", "no secrets found");
    pj && !pj.testCommand ? add("testCommand", slug2, "INFO", "no testCommand (tests are optional)") : pj && add("testCommand", slug2, "OK", "testCommand set");
  }
  return out;
}
async function serverChecks(d, checks) {
  const bound = d.projects.filter((p) => !p.legacy && p.project?.serverUrl && p.project.boardId);
  if (!bound.length) return checks;
  const server = bound[0].project.serverUrl;
  const out = [...checks];
  const set = (c) => {
    const i = out.findIndex((x) => x.id === c.id && x.project === c.project && x.level !== "FAIL");
    if (i >= 0) out[i] = c;
    else out.push(c);
  };
  const tok = getToken(server);
  if (!tok) set({ id: "credentials", project: null, level: "WARN", message: "no token for this server", fix: "run rodo login" });
  else if (credentialsTooOpen()) set({ id: "credentials", project: null, level: "FAIL", message: "~/.rodo/credentials can be read by other users", fix: "chmod 600 ~/.rodo/credentials" });
  else set({ id: "credentials", project: null, level: "OK", message: process.env.RODO_TOKEN ? "token from RODO_TOKEN" : "token in the credentials file" });
  let api;
  try {
    api = await apiHttp(server, tok?.token ?? null, CLI_VERSION);
    await api.http.get("/v1/sync/time");
    set({ id: "server", project: null, level: "OK", message: `${server} answers` });
  } catch {
    set({ id: "server", project: null, level: "WARN", message: `${server} cannot be reached (offline?)`, fix: "check the network; rodo keeps working offline" });
    for (const id of ["token", "clock"]) set({ id, project: null, level: "SKIP", message: "server unreachable" });
    return out;
  }
  if (!tok) {
    for (const id of ["token", "clock"]) set({ id, project: null, level: "SKIP", message: "not logged in" });
    return out;
  }
  try {
    const me = await api.http.get("/v1/devices/me");
    const days = me.expiresAt ? (Date.parse(me.expiresAt) - Date.now()) / 864e5 : 999;
    set(days < 14 ? { id: "token", project: null, level: "WARN", message: `token expires in ${Math.floor(days)} days`, fix: "run rodo login --rotate" } : { id: "token", project: null, level: "OK", message: "token accepted" });
  } catch (e2) {
    const code = e2 instanceof ApiError ? e2.code : "ERROR";
    set({ id: "token", project: null, level: "FAIL", message: `${code}: the server does not accept this token`, fix: code === "CLI_TOO_OLD" ? "update the rodo CLI" : "run rodo login" });
    return out;
  }
  const t0 = Date.now();
  const time = await api.http.get("/v1/sync/time");
  const offset = time.serverTimeMs + (Date.now() - t0) / 2 - Date.now();
  set(Math.abs(offset) > 3e5 ? { id: "clock", project: null, level: "WARN", message: `your computer clock is off by ${Math.round(offset / 6e4)} min`, fix: "fix the system time" } : { id: "clock", project: null, level: "OK", message: "clock agrees with the server" });
  for (const p of bound) {
    const slug2 = p.slug;
    try {
      const meta = await api.http.get(`/v1/sync/boards/${p.project.boardId}/meta`);
      const boards = await api.http.get("/v1/sync/boards");
      const mine = boards.find((b) => b.id === p.project.boardId);
      set(mine && !mine.canWrite ? { id: "binding", project: slug2, level: "WARN", message: "you can read this board but not write", fix: "ask a board admin for write access" } : { id: "binding", project: slug2, level: "OK", message: `bound to board "${meta.board.title}"` });
      const fp = repoFingerprint(d.root);
      if (fp && meta.board.repoFingerprint && fp !== meta.board.repoFingerprint) {
        set({ id: "repository", project: slug2, level: "FAIL", message: "REPOSITORY_MISMATCH: this repository is not the one the board was bound to", fix: "run rodo from the original repository" });
      } else set({ id: "repository", project: slug2, level: "OK", message: "repository identity matches the board" });
    } catch (e2) {
      const gone = e2 instanceof ApiError && (e2.code === "BOARD_ARCHIVED" || e2.status === 404 || e2.status === 403);
      set({ id: "binding", project: slug2, level: gone ? "FAIL" : "WARN", message: e2 instanceof ApiError ? `${e2.code}: ${e2.message}` : "board check failed", fix: gone ? "bind the project to another board (rodo init --board)" : void 0 });
    }
  }
  return out;
}
async function runDoctor(ctx) {
  const d = discover(ctx.cwd);
  const only = new Set(ctx.opts.project ?? []);
  const checks = (await serverChecks(d, localChecks(d))).filter((c) => !c.project || !only.size || only.has(c.project));
  for (const c of checks) {
    const line = `${c.id}${c.project ? ` [${c.project}]` : ""}: ${c.message}${c.fix ? `  \u2192 ${c.fix}` : ""}`;
    if (c.level === "OK") ctx.out.ok(line);
    else if (c.level === "WARN") ctx.out.warn(line);
    else if (c.level === "FAIL") ctx.out.fail(line);
    else if (c.level === "INFO") ctx.out.info(line);
    else ctx.out.line(`SKIP ${c.id}: ${c.message}`.replace(/^SKIP (\S+): not connected$/, "SKIP $1 (not connected)"));
  }
  ctx.out.flush({ version: 1, checks });
  return 0;
}

// src/commands/init.ts
import { existsSync as existsSync14 } from "fs";
import { basename as basename2, join as join14 } from "path";

// src/kit/legacy-migrate.ts
import { existsSync as existsSync10, readdirSync as readdirSync4, readFileSync as readFileSync7, statSync as statSync5 } from "fs";
import { join as join8, relative as relative4 } from "path";
var MOVE_NAMES = ["MAP.md", "MEMORY.md", "RULES.md", "CHANGELOG.md", "project", "cycles"];
var OLD_LINK = /(?<![A-Za-z0-9_.\-/])\/rodo\/(?=(?:cycles\/|project\/|MAP\.md|MEMORY\.md|RULES\.md|CHANGELOG\.md))/g;
var OLD_MENTION = /rodo\/(?:cycles|project)\b|rodo\/(?:MAP|MEMORY)\.md/;
var SKIP_DIRS = /* @__PURE__ */ new Set(["node_modules", ".git", "dist", "build", ".next", "coverage"]);
function planMigration(root, slug2) {
  const rodo = join8(root, "rodo");
  const moves = [];
  for (const n of MOVE_NAMES) {
    if (existsSync10(join8(rodo, n))) moves.push({ from: `rodo/${n}`, to: `rodo/${slug2}/${n}` });
  }
  const config = existsSync10(join8(rodo, "config.json")) ? { from: "rodo/config.json", to: `rodo/${slug2}/project.json` } : null;
  for (const m of [...moves, ...config ? [config] : []]) {
    if (existsSync10(join8(root, m.to))) throw new Error(`cannot migrate: ${m.to} already exists`);
  }
  return {
    slug: slug2,
    moves,
    config,
    binding: existsSync10(join8(root, ".rodo.json")) ? ".rodo.json" : null,
    leftInPlace: existsSync10(join8(rodo, ".kit-version")) ? ["rodo/.kit-version"] : []
  };
}
function walk3(dir, out = []) {
  for (const n of readdirSync4(dir)) {
    const p = join8(dir, n);
    if (statSync5(p).isDirectory()) {
      if (!SKIP_DIRS.has(n) && n !== ".rodo") walk3(p, out);
    } else out.push(p);
  }
  return out;
}
function applyMigration(root, plan, opts) {
  const rodo = join8(root, "rodo");
  const slug2 = plan.slug;
  const oldConfig = plan.config ? readJson(join8(root, plan.config.from)) ?? {} : {};
  const binding = plan.binding ? readJson(join8(root, plan.binding)) : null;
  const all = plan.config ? [...plan.moves, plan.config] : plan.moves;
  for (const m of all) moveFile(root, join8(root, m.from), join8(root, m.to), opts.useGit);
  if (plan.config) {
    const lang = oldConfig.language ?? {};
    const project = {
      schemaVersion: 2,
      projectSlug: slug2,
      name: opts.name ?? slug2,
      serverUrl: binding?.serverUrl ?? null,
      boardId: binding?.boardId ?? null,
      repoFingerprint: null,
      language: { simple: lang.simple === "en" ? "en" : "fa", technical: lang.technical ?? "en" },
      testCommand: typeof oldConfig.testCommand === "string" ? oldConfig.testCommand : null,
      stepsDirs: Array.isArray(oldConfig.stepsDirs) ? oldConfig.stepsDirs : []
    };
    writeJson(join8(root, plan.config.to), project);
    const kit = readKitJson(root);
    if (kit && (oldConfig.kitRepo || oldConfig.kitRef)) {
      writeJson(join8(rodo, "kit.json"), { ...kit, ...oldConfig.kitRepo ? { kitRepo: oldConfig.kitRepo } : {}, ...oldConfig.kitRef ? { kitRef: oldConfig.kitRef } : {} });
    }
  }
  const rewritten = [];
  const targets = existsSync10(join8(rodo, slug2)) ? walk3(join8(rodo, slug2)).filter((p) => /\.(md|feature)$/i.test(p)) : [];
  for (const n of ["AGENTS.md", "CLAUDE.md"]) if (existsSync10(join8(root, n))) targets.push(join8(root, n));
  for (const p of targets) {
    const text = readFileSync7(p, "utf8");
    let n = 0;
    const next = text.replace(OLD_LINK, () => {
      n++;
      return `/rodo/${slug2}/`;
    });
    if (n) {
      writeAtomic(p, next);
      rewritten.push({ file: posix(relative4(root, p)), links: n });
    }
  }
  const done = new Set(rewritten.map((r) => r.file));
  const candidates = (opts.useGit ? lsFiles(root, ["."]) : null) ?? walk3(root).map((p) => posix(relative4(root, p)));
  const notRewritten = [];
  for (const f of candidates) {
    if (done.has(f) || f.startsWith(".agents/skills/rodo/") || f === "rodo/kit.json" || f.endsWith(".rodo-new")) continue;
    const abs = join8(root, f);
    if (!existsSync10(abs) || statSync5(abs).size > 1e6) continue;
    const text = readFileSync7(abs, "utf8");
    if (!text.includes("\0") && OLD_MENTION.test(text)) notRewritten.push(f);
  }
  return { moved: all, rewritten, notRewritten: notRewritten.sort() };
}

// src/commands/init-connect.ts
import { join as join13 } from "path";

// src/sync/run.ts
import { copyFileSync as copyFileSync2, existsSync as existsSync13, mkdirSync as mkdirSync9, readFileSync as readFileSync11, writeFileSync as writeFileSync2 } from "fs";
import { dirname as dirname7, join as join12 } from "path";

// src/core/lock.ts
import { mkdirSync as mkdirSync6, openSync, closeSync, writeSync, unlinkSync, readFileSync as readFileSync8, statSync as statSync6 } from "fs";
import { hostname as hostname2 } from "os";
import { dirname as dirname5 } from "path";
var STALE_MS = 10 * 6e4;
var sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function acquireLock(path, waitMs = 3e4) {
  mkdirSync6(dirname5(path), { recursive: true });
  const deadline = Date.now() + waitMs;
  for (; ; ) {
    try {
      const fd = openSync(path, "wx");
      writeSync(fd, JSON.stringify({ pid: process.pid, host: hostname2(), startedAt: Date.now() }));
      closeSync(fd);
      return () => {
        try {
          unlinkSync(path);
        } catch {
        }
      };
    } catch {
      let startedAt = 0;
      try {
        startedAt = JSON.parse(readFileSync8(path, "utf8")).startedAt ?? statSync6(path).mtimeMs;
      } catch {
      }
      if (Date.now() - startedAt > STALE_MS) {
        try {
          unlinkSync(path);
        } catch {
        }
        continue;
      }
      if (Date.now() >= deadline) return null;
      await sleep(200);
    }
  }
}

// src/sync/clock.ts
function computeOffset(sentAt, receivedAt, serverTimeMs) {
  const rtt = receivedAt - sentAt;
  return Math.round(serverTimeMs + rtt / 2 - receivedAt);
}
function editedAt(i) {
  const upper = i.nowMs + i.offsetMs;
  const lower = Math.min(i.lastSyncAt, upper);
  return Math.round(Math.min(Math.max(i.mtimeMs + i.offsetMs, lower), upper));
}
var formatOffset = (offsetMs) => `${offsetMs < 0 ? "\u2212" : "+"}${(Math.abs(offsetMs) / 1e3).toFixed(1)}s`;

// src/sync/offline.ts
import { readFileSync as readFileSync9 } from "fs";
import { join as join9 } from "path";
var ERROR_LINE2 = /^<!--\s*RODO_ERROR:.*-->\s*$/;
function errorMarker(slug2, errors) {
  const first = errors[0];
  if (!first) return null;
  const msg = first.message.replace(/\s+/g, " ").replace(/-->/g, "-- >");
  const more = errors.length > 1 ? ` (+${errors.length - 1} more: rodo/${slug2}/.rodo/last-sync.json)` : "";
  return `<!-- RODO_ERROR: ${msg}${more} -->`;
}
function withMarker(raw, marker) {
  const bom = raw.charCodeAt(0) === 65279 ? "\uFEFF" : "";
  const text = bom ? raw.slice(1) : raw;
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  const nl = text.indexOf("\n");
  const first = nl < 0 ? text : text.slice(0, nl).replace(/\r$/, "");
  const rest = ERROR_LINE2.test(first) ? nl < 0 ? "" : text.slice(nl + 1) : text;
  const next = bom + (marker ? marker + eol : "") + rest;
  return next === raw ? null : next;
}
var slim = (f) => ({ code: f.code, line: f.line, message: f.message });
function buildReport(slug2, cards, startedAt, over = {}, extra = /* @__PURE__ */ new Map()) {
  const merged = cards.map((c) => {
    const x = extra.get(c.path);
    return { c, errors: [...c.errors, ...x?.errors ?? []], warnings: [...c.warnings, ...x?.warnings ?? []] };
  });
  const files = merged.filter((m) => m.errors.length || m.warnings.length).map((m) => ({ path: m.c.path, cardId: m.c.model?.id ?? null, errors: m.errors.map(slim), warnings: m.warnings.map(slim) }));
  return {
    version: 1,
    project: slug2,
    startedAt,
    finishedAt: Date.now(),
    mode: "offline",
    clock: { source: "system", offsetMs: 0 },
    pulled: 0,
    pushed: 0,
    created: 0,
    archived: 0,
    conflicts: [],
    notes: ["OFFLINE: cards were validated only"],
    ...over,
    files,
    summary: { files: cards.length, errors: merged.reduce((n, m) => n + m.errors.length, 0), warnings: merged.reduce((n, m) => n + m.warnings.length, 0) }
  };
}
function applyMarkers(root, ref, scanOpts = {}, extra = /* @__PURE__ */ new Map(), dryRun = false) {
  let cards = scanCards(root, ref, [], scanOpts);
  for (let pass = 0; pass < 3 && !dryRun; pass++) {
    let changed = false;
    for (const c of cards) {
      if (c.errors.some((e2) => e2.code === "ENCODING_INVALID")) continue;
      const raw = readFileSync9(c.abs, "utf8");
      const errors = [...c.errors, ...extra.get(c.path)?.errors ?? []];
      const next = withMarker(raw, errorMarker(ref.slug, errors));
      if (next !== null) {
        writeAtomic(c.abs, next);
        changed = true;
      }
    }
    if (!changed) break;
    cards = scanCards(root, ref, [], scanOpts);
  }
  return cards;
}
async function runOfflineSync(root, ref, opts = {}) {
  const startedAt = Date.now();
  const lockPath = join9(ref.dir, ".rodo", "sync.lock");
  const release = opts.dryRun ? () => {
  } : await acquireLock(lockPath, opts.lockWaitMs);
  if (!release) throw new CliError("SYNC_LOCKED", `SYNC_LOCKED: another rodo sync is running for ${ref.slug}`, 5);
  try {
    const cards = applyMarkers(root, ref, {}, /* @__PURE__ */ new Map(), opts.dryRun);
    const report = buildReport(ref.slug, cards, startedAt, opts.notes ? { notes: opts.notes } : {});
    if (!opts.dryRun) writeJson(join9(ref.dir, ".rodo", "last-sync.json"), report);
    return { report, cards };
  } finally {
    release();
  }
}

// src/sync/push.ts
var MAX_OPS = 50;
var MAX_BYTES = 9e5;
var size = (p) => Buffer.byteLength(JSON.stringify(p.op), "utf8");
function splitBatches(ops, maxOps = MAX_OPS, maxBytes = MAX_BYTES) {
  const out = [];
  let cur = [];
  let bytes = 0;
  for (const p of ops) {
    const s = size(p);
    if (cur.length && (cur.length >= maxOps || bytes + s > maxBytes)) {
      out.push(cur);
      cur = [];
      bytes = 0;
    }
    cur.push(p);
    bytes += s;
  }
  if (cur.length) out.push(cur);
  return out;
}
var is413 = (e2) => e2 instanceof ApiError && e2.status === 413;
async function sendBatches(http, boardId, env, batches) {
  const out = { results: /* @__PURE__ */ new Map(), tooLarge: [], toSeq: null, serverTimeMs: null };
  const send = async (batch) => {
    try {
      const r = await http.post(`/v1/sync/boards/${boardId}/push`, { ...env, ops: batch.map((p) => p.op), validation: [] });
      for (const res of r.results) out.results.set(res.opId, res);
      out.toSeq = r.toSeq;
      out.serverTimeMs = r.serverTimeMs;
    } catch (e2) {
      if (!is413(e2)) throw e2;
      if (batch.length === 1) {
        out.tooLarge.push(batch[0]);
        return;
      }
      const mid = Math.ceil(batch.length / 2);
      await send(batch.slice(0, mid));
      await send(batch.slice(mid));
    }
  };
  for (const b of batches) await send(b);
  return out;
}
async function sendValidation(http, boardId, env, validation) {
  return http.post(`/v1/sync/boards/${boardId}/push`, { ...env, ops: [], validation });
}

// src/sync/state.ts
import { existsSync as existsSync11, mkdirSync as mkdirSync7, rmSync } from "fs";
import { join as join10 } from "path";
var statePath = (dir) => join10(dir, ".rodo", "state.json");
var basePath = (dir, id) => join10(dir, ".rodo", "base", `${id}.json`);
function readState(dir) {
  return readJson(statePath(dir));
}
var newState = (init) => ({
  schemaVersion: 1,
  serverUrl: init.serverUrl,
  apiBaseUrl: init.apiBaseUrl,
  boardId: init.boardId,
  deviceId: init.deviceId ?? "",
  lastSeq: "0",
  lastSyncAt: null,
  clock: { offsetMs: 0, source: "system" },
  materialize: "ALL",
  meta: null,
  cards: {},
  pendingCreates: {}
});
function writeState(dir, s) {
  writeJson(statePath(dir), s);
}
var readBase = (dir, id) => readJson(basePath(dir, id));
function writeBase(dir, card) {
  mkdirSync7(join10(dir, ".rodo", "base"), { recursive: true });
  writeJson(basePath(dir, card.id), card);
}
function dropBase(dir, id) {
  if (existsSync11(basePath(dir, id))) rmSync(basePath(dir, id));
}

// src/sync/write-back.ts
import { copyFileSync, existsSync as existsSync12, mkdirSync as mkdirSync8, readFileSync as readFileSync10, renameSync as renameSync3 } from "fs";
import { basename, dirname as dirname6, join as join11 } from "path";
function regenerate(card, local) {
  const m = cardStateToModel(card);
  const keep = local?.model;
  if (keep) {
    if (keep.workflow) m.workflow = keep.workflow;
    m.extras = keep.extras;
    m.description = keepProgressNotes(m.description, keep.description);
  }
  delete m.list;
  m.updatedAt = card.updatedAt;
  m.locked = card.locked;
  const original = local ? readFileSync10(local.abs, "utf8") : void 0;
  return serializeCard(m, original !== void 0 ? { original } : {});
}
function writeCard(projectDir, state, card, path, local, extra) {
  const text = regenerate(card, local);
  writeAtomic(join11(projectDir, path), text);
  writeBase(projectDir, card);
  const prev = state.cards[card.id];
  const entry = {
    path,
    baseRev: card.rev,
    baseHash: canonicalHash(cardStateToModel(card)),
    fileHash: sha256(text),
    simpleDocHash: extra.simpleDocHash !== void 0 ? extra.simpleDocHash : prev?.simpleDocHash ?? null,
    simpleDocBranch: extra.simpleDocBranch !== void 0 ? extra.simpleDocBranch : prev?.simpleDocBranch ?? null,
    lastSyncAt: extra.lastSyncAt
  };
  state.cards[card.id] = entry;
  return entry;
}
function moveToTrash(projectDir, state, id, path) {
  const abs = join11(projectDir, path);
  if (!existsSync12(abs)) {
    if (id) {
      delete state.cards[id];
      dropBase(projectDir, id);
    }
    return null;
  }
  let dest = join11(projectDir, ".rodo", "trash", basename(path));
  if (existsSync12(dest)) dest = join11(dirname6(dest), `${Date.now()}-${basename(path)}`);
  mkdirSync8(dirname6(dest), { recursive: true });
  renameSync3(abs, dest);
  if (id) {
    delete state.cards[id];
    dropBase(projectDir, id);
  }
  return dest;
}
function saveServerCopy(projectDir, card) {
  writeAtomic(join11(projectDir, ".rodo", "conflicts", `${card.id}.server.rodo.md`), regenerate(card, null));
}
var slug = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "card";
function materializePath(projectDir, card) {
  const own = card.rodoPath;
  if (own && !own.startsWith("/") && !own.includes("..") && existsSync12(dirname6(join11(projectDir, own))) && !existsSync12(join11(projectDir, own))) return own;
  let name = `${slug(card.title)}-${card.id.slice(-8)}.rodo.md`;
  if (existsSync12(join11(projectDir, "inbox", name))) name = `${Date.now()}-${name}`;
  return `inbox/${name}`;
}
function saveLocalCopy(projectDir, id, abs, now = Date.now()) {
  const rel = join11(".rodo", "conflicts", `${id}.local-${now}.rodo.md`);
  mkdirSync8(dirname6(join11(projectDir, rel)), { recursive: true });
  copyFileSync(abs, join11(projectDir, rel));
  return rel.split("\\").join("/");
}
function conflictValue(m, field) {
  const v = m[field === "hours" ? "hoursMinutes" : field];
  if (v === null || v === void 0) return void 0;
  if (typeof v === "string") return v.length > 80 ? `${v.slice(0, 77)}...` : v;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  return void 0;
}

// src/sync/run.ts
var ARCHIVE_LIMIT = 10;
var WARNING_CODES = /* @__PURE__ */ new Set(["ITEM_DELETED_ON_SERVER", "CONFLICT_RESOLVED", "SIMPLE_DOC_BRANCH_CHANGED", "SERVER_CHANGED_WHILE_INVALID", "REPO_SHALLOW"]);
var tempId = () => `tmp_${Array.from({ length: 24 }, () => Math.floor(Math.random() * 36).toString(36)).join("")}`;
var finding2 = (code, message) => ({ code, line: null, message: `${code}: ${message}` });
async function syncProject(root, ref, flags, cliVersion, lockWaitMs) {
  const dir = ref.dir;
  const project = ref.project;
  const startedAt = Date.now();
  const notes = [];
  const extra = /* @__PURE__ */ new Map();
  const counters = { pulled: 0, pushed: 0, created: 0, archived: 0 };
  const conflicts = [];
  let exit = 0;
  let mode = "offline";
  let clock = { source: "system", offsetMs: 0 };
  const release = flags.dryRun ? () => {
  } : await acquireLock(join12(dir, ".rodo", "sync.lock"), lockWaitMs);
  if (!release) throw new CliError("SYNC_LOCKED", `SYNC_LOCKED: another rodo sync is running for ${ref.slug}`, 5);
  const add = (path, kind, code, message) => {
    const e2 = extra.get(path) ?? { errors: [], warnings: [] };
    e2[kind].push(finding2(code, message));
    extra.set(path, e2);
  };
  const scanOpts = (state2) => ({
    baseOf: (id) => {
      const b = state2?.cards[id] ? readBase(dir, id) : null;
      return b ? cardStateToModel(b) : null;
    },
    meta: state2?.meta ?? null
  });
  let state = readState(dir);
  const link = { online: null };
  try {
    const serverUrl = project.serverUrl;
    if (!project.boardId || !serverUrl) {
      notes.push("OFFLINE: this project is not bound to a board (run rodo init); cards were validated only");
    } else {
      const tok = getToken(serverUrl);
      if (!tok) {
        notes.push("AUTH_REQUIRED: run rodo login; cards were validated only");
        exit = 4;
      } else {
        state ??= newState({ serverUrl, apiBaseUrl: serverUrl, boardId: project.boardId, deviceId: tok.deviceId });
        const online2 = await runOnline();
        if (online2) mode = "online";
      }
    }
  } catch (e2) {
    exit = Math.max(exit, handleFailure(e2));
  }
  const cards = applyMarkers(root, ref, scanOpts(state), extra, flags.dryRun);
  const online = link.online;
  if (online && !flags.dryRun && !flags.check) {
    const validation = cards.filter((c) => c.errors.length && c.model?.id).map((c) => ({ cardId: c.model.id, path: c.path, errors: c.errors.map((x) => ({ code: x.code, line: x.line, message: x.message })), warnings: c.warnings.map((x) => ({ code: x.code, line: x.line, message: x.message })) }));
    if (validation.length || counters.pulled) {
      try {
        await sendValidation(online.http, project.boardId, envelope(online.st, online.offsetMs), validation);
      } catch {
      }
    }
  }
  const report = buildReport(ref.slug, cards, startedAt, { mode, clock, ...counters, conflicts, notes: [...notes] }, extra);
  if (!flags.dryRun) {
    writeJson(join12(dir, ".rodo", "last-sync.json"), report);
    if (state && mode === "online") {
      state.lastSyncAt = Date.now() + clock.offsetMs;
      writeState(dir, state);
    }
  }
  release();
  const s = report.summary;
  const head2 = mode === "online" ? `rodo/${ref.slug}  \u25B8 pulled ${counters.pulled} \xB7 pushed ${counters.pushed}${counters.created ? ` (${counters.created} new)` : ""}${counters.archived ? ` (${counters.archived} archived)` : ""} \xB7 conflicts ${conflicts.length} \xB7 errors ${s.errors} \xB7 warnings ${s.warnings}   [clock: ${clock.source === "server" ? `server ${formatOffset(clock.offsetMs)}` : "system"}]` : `rodo/${ref.slug}  \u25B8 offline \xB7 files ${s.files} \xB7 errors ${s.errors} \xB7 warnings ${s.warnings}`;
  return { exit, report, cards, extra, notes, header: head2 };
  function handleFailure(e2) {
    if (!(e2 instanceof ApiError)) throw e2;
    if (e2.offline) {
      notes.push("OFFLINE: the server cannot be reached; cards were validated only");
      return 0;
    }
    if (e2.code === "REPOSITORY_MISMATCH") {
      notes.push(`REPOSITORY_MISMATCH: ${e2.message} (expected ${String(e2.body.expected ?? "?")}, got ${String(e2.body.got ?? "?")}); this project is not synced`);
      return 6;
    }
    if (e2.status === 401 || ["DEVICE_REVOKED", "DEVICE_EXPIRED", "DEVICE_TOKEN_INVALID"].includes(e2.code)) {
      notes.push(`${e2.code}: ${e2.message}; run rodo login`);
      return 4;
    }
    if (e2.code === "CLI_TOO_OLD") {
      notes.push(`CLI_TOO_OLD: update the rodo CLI (server wants ${String(e2.body.minCliVersion ?? "a newer version")})`);
      return 4;
    }
    notes.push(`${e2.code}: ${e2.message}`);
    return 1;
  }
  async function runOnline() {
    const st = state;
    const serverUrl = project.serverUrl;
    const boardId = project.boardId;
    const token = getToken(serverUrl).token;
    const disc = await discover2(serverUrl);
    st.apiBaseUrl = disc.apiBaseUrl;
    let fp = null;
    if (isShallow(root)) notes.push("REPO_SHALLOW: shallow clone; the repository check is skipped");
    else fp = repoFingerprint(root);
    if (fp && project.repoFingerprint && fp !== project.repoFingerprint) {
      throw new ApiError(409, "REPOSITORY_MISMATCH", "this folder is not the repository the project was bound to", { expected: project.repoFingerprint.slice(0, 19), got: fp.slice(0, 19) });
    }
    const http = new Http({ baseUrl: disc.apiBaseUrl, token, cliVersion, fingerprint: fp });
    const t0 = Date.now();
    const time = await http.get("/v1/sync/time");
    const offsetMs = computeOffset(t0, Date.now(), time.serverTimeMs);
    st.clock = { offsetMs, source: "server" };
    clock = st.clock;
    st.meta = await http.get(`/v1/sync/boards/${boardId}/meta`);
    mode = "online";
    if (flags.check) {
      const m = await http.post(`/v1/sync/boards/${boardId}/manifest`, {
        cards: Object.entries(st.cards).map(([id, c]) => ({ id, baseRev: c.baseRev }))
      });
      const drift = m.stale.length + m.unknown.length + m.archived.length + m.deleted.length;
      if (drift) notes.push(`DRIFT: stale ${m.stale.length}, unknown ${m.unknown.length}, archived ${m.archived.length}, deleted ${m.deleted.length} (board seq ${m.syncSeq}, local seq ${st.lastSeq})`);
      return true;
    }
    const remoteSeen = /* @__PURE__ */ new Map();
    let scan = scanCards(root, ref, [], scanOpts(st));
    const localById = () => new Map(scan.filter((c) => c.model?.id).map((c) => [c.model.id, c]));
    if (!flags.pushOnly) {
      let since = st.lastSeq;
      for (let guard = 0; guard < 1e4; guard++) {
        let page;
        try {
          page = await http.get(`/v1/sync/boards/${boardId}/changes`, { since, limit: 200 });
        } catch (e2) {
          if (e2 instanceof ApiError && e2.code === "RESYNC_REQUIRED" && since !== "0") {
            notes.push("RESYNC_REQUIRED: deletes were purged on the board; pulling everything again and merging against the base copies");
            since = "0";
            st.lastSeq = "0";
            continue;
          }
          throw e2;
        }
        for (const card of page.cards) {
          remoteSeen.set(card.id, card);
          if (!flags.dryRun) applyRemote(card, localById());
          else counters.pulled += st.cards[card.id]?.baseRev === card.rev ? 0 : 1;
        }
        for (const t2 of page.tombstones) {
          if (t2.entity === "CARD" && st.cards[t2.cardId] && !flags.dryRun) {
            moveToTrash(dir, st, t2.cardId, st.cards[t2.cardId].path);
            counters.pulled++;
          }
        }
        if (!flags.dryRun) {
          st.lastSeq = page.toSeq;
          writeState(dir, st);
        }
        since = page.toSeq;
        if (!page.hasMore) break;
      }
      scan = scanCards(root, ref, [], scanOpts(st));
    }
    const allValid = scan.filter((c) => c.model && c.errors.length === 0);
    if (!flags.pullOnly) {
      const planned = plan(st, scan, allValid, remoteSeen, offsetMs);
      if (flags.dryRun) {
        notes.push(`DRY_RUN: would push ${planned.length} op(s); nothing was written`);
        return true;
      }
      await pushAll(http, st, planned, scan, offsetMs);
    }
    link.online = { http, st, offsetMs };
    return true;
  }
  function envelope(st, offsetMs) {
    return {
      deviceId: st.deviceId,
      clientNowMs: Date.now() + offsetMs,
      clock: st.clock.source === "server" ? "server" : "local",
      offsetMs,
      ackSeq: st.lastSeq
    };
  }
  function applyRemote(R, locals) {
    const st = state;
    const entry = st.cards[R.id];
    const local = locals.get(R.id) ?? null;
    if (R.deleted || R.archived) {
      if (entry) {
        moveToTrash(dir, st, R.id, entry.path);
        counters.pulled++;
      }
      return;
    }
    if (!entry && !local) {
      const path = materializePath(dir, R);
      writeCard(dir, st, R, path, null, { lastSyncAt: Date.now() + st.clock.offsetMs });
      counters.pulled++;
      return;
    }
    if (entry && entry.baseRev === R.rev) return;
    if (!entry || !readBase(dir, R.id)) return;
    if (!local) {
      writeCard(dir, st, R, entry.path, null, { lastSyncAt: Date.now() + st.clock.offsetMs });
      add(entry.path, "warnings", "CONFLICT_RESOLVED", "the card changed on the board after you deleted its file; the file was restored");
      counters.pulled++;
      return;
    }
    if (local.errors.length || !local.model) {
      saveServerCopy(dir, R);
      add(local.path, "warnings", "SERVER_CHANGED_WHILE_INVALID", `the card changed on the board while this file is invalid; the board copy is in .rodo/conflicts/${R.id}.server.rodo.md`);
      return;
    }
    const base = readBase(dir, R.id);
    const changes = diffModels(cardStateToModel(base), local.model);
    const simpleChanged = simpleInfo(local, entry) !== null;
    if (isEmptyChanges(changes) && !simpleChanged) {
      writeCard(dir, st, R, local.path, local, { lastSyncAt: Date.now() + st.clock.offsetMs });
      counters.pulled++;
    }
  }
  function simpleInfo(c, entry) {
    const seg = c.path.split("/");
    if (seg[0] !== "cycles" || seg.length < 3) return null;
    const file = join12(dirname7(c.abs), "simple.md");
    if (!existsSync13(file)) return null;
    const content = readFileSync11(file, "utf8");
    const hash = sha256(content);
    if (entry && entry.simpleDocHash === hash) return null;
    return { path: `/rodo/${ref.slug}/${seg.slice(0, 2).join("/")}/simple.md`, hash, content };
  }
  function plan(st, all, valid, remote, offsetMs) {
    const out = [];
    const now = Date.now();
    const branch = gitBranch(root);
    const commit = gitHead(root)?.slice(0, 7);
    const mk = (kind, body) => {
      const op = { kind, formatVersion: 2, ...body };
      return { ...op, opId: `sha256:${sha256(JSON.stringify({ d: st.deviceId, op })).slice(7)}` };
    };
    for (const c of valid) {
      const m = c.model;
      const id = m.id;
      if (!id) {
        const tid = m.tempId ?? tempId();
        if (!m.tempId) {
          writeFileSync2(c.abs, serializeCard({ ...m, tempId: tid }, { original: readFileSync11(c.abs, "utf8") }));
        }
        st.pendingCreates[tid] = st.pendingCreates[tid] ?? { path: c.path, firstPushAt: now };
        const changes2 = diffModels(emptyModel(), m);
        const simple2 = simpleInfo(c, void 0);
        out.push({
          op: mk("CREATE", { tempId: tid, baseRev: "0", editedAt: editedAt({ mtimeMs: c.mtimeMs, offsetMs, lastSyncAt: 0, nowMs: now }), rodoPath: c.path, ...changes2, ...simple2 ? { simpleDoc: { path: simple2.path, hash: simple2.hash, content: simple2.content, gitCommit: commit, gitBranch: branch ?? void 0 } } : {} }),
          path: c.path,
          id: null,
          ...simple2 ? { simple: { hash: simple2.hash, branch: branch ?? null } } : {}
        });
        continue;
      }
      const entry = st.cards[id];
      const base = (entry ? readBase(dir, id) : null) ?? remote.get(id) ?? null;
      if (!base) continue;
      const changes = diffModels(cardStateToModel(base), m);
      const simple = simpleInfo(c, entry);
      const moved = !!entry && entry.path !== c.path;
      if (isEmptyChanges(changes) && !simple && !moved) continue;
      if (simple && entry?.simpleDocBranch && branch && entry.simpleDocBranch !== branch) {
        add(c.path, "warnings", "SIMPLE_DOC_BRANCH_CHANGED", `simple.md was last pushed from branch ${entry.simpleDocBranch}, now ${branch}`);
      }
      out.push({
        op: mk("UPDATE", { cardId: id, baseRev: base.rev, editedAt: editedAt({ mtimeMs: c.mtimeMs, offsetMs, lastSyncAt: entry?.lastSyncAt ?? 0, nowMs: now }), rodoPath: c.path, ...changes, ...simple ? { simpleDoc: { path: simple.path, hash: simple.hash, content: simple.content, gitCommit: commit, gitBranch: branch ?? void 0 } } : {} }),
        path: c.path,
        id,
        ...simple ? { simple: { hash: simple.hash, branch: branch ?? null } } : {}
      });
    }
    const archives = [];
    for (const [id, entry] of Object.entries(st.cards)) {
      if (all.some((c) => c.model?.id === id) || existsSync13(join12(dir, entry.path))) continue;
      archives.push({
        op: mk("ARCHIVE", { cardId: id, baseRev: entry.baseRev, editedAt: Math.round(startedAt + offsetMs), rodoPath: entry.path }),
        path: entry.path,
        id
      });
    }
    if (archives.length > ARCHIVE_LIMIT && !flags.confirmArchive) {
      notes.push(`ARCHIVE_CONFIRM_REQUIRED: ${archives.length} card files were deleted; nothing was archived. Ask the user, then run rodo sync --confirm-archive`);
    } else out.push(...archives);
    return out;
  }
  async function pushAll(http, st, planned, scan, offsetMs) {
    if (!planned.length) return;
    const outcome = await sendBatches(http, project.boardId, envelope(st, offsetMs), splitBatches(planned));
    const byPath = new Map(scan.map((c) => [c.path, c]));
    for (const p of outcome.tooLarge) add(p.path, "errors", "PUSH_TOO_LARGE", "this card alone is too big for one request");
    for (const p of planned) {
      const res = outcome.results.get(p.op.opId);
      if (res) handleResult(st, p, res, byPath.get(p.path) ?? null, outcome.serverTimeMs ?? Date.now());
    }
  }
  function handleResult(st, p, res, local, serverNow) {
    const path = p.path;
    for (const err of res.errors) {
      const code = WARNING_CODES.has(err.code) ? "warnings" : "errors";
      add(path, code, err.code, err.message);
    }
    const lost = (res.conflicts ?? []).some((c) => c.winner === "server") && local && res.card ? saveLocalCopy(dir, res.card.id, local.abs) : null;
    for (const c of res.conflicts ?? []) {
      const localValue = c.winner === "server" && local?.model ? conflictValue(local.model, c.field) : void 0;
      conflicts.push({ path, field: c.field, winner: c.winner, ...localValue !== void 0 ? { localValue } : {}, ...lost && c.winner === "server" ? { localCopy: lost } : {} });
      add(path, "warnings", "CONFLICT_RESOLVED", c.winner === "server" ? `${c.field} changed on the board and here; kept the board value${localValue !== void 0 ? ` (yours was: ${localValue})` : ""}; your file is saved in ${lost ?? ".rodo/conflicts/"}` : `${c.field} changed on the board and here; kept your value`);
    }
    if (res.errors.some((e2) => e2.code === "ARCHIVED")) {
      moveToTrash(dir, st, p.id, path);
      return;
    }
    const card = res.card;
    if (p.op.kind === "ARCHIVE") {
      if (res.status === "APPLIED" && p.id) {
        delete st.cards[p.id];
        counters.archived++;
        counters.pushed++;
      } else if (card && !card.archived) {
        writeCard(dir, st, card, path, null, { lastSyncAt: serverNow });
      }
      return;
    }
    if (!card || res.status === "REJECTED") return;
    if (res.status === "PARTIAL" && local) {
      const backup = join12(dir, ".rodo", "conflicts", `${card.id}.local-${Date.now()}.rodo.md`);
      mkdirSync9(dirname7(backup), { recursive: true });
      copyFileSync2(local.abs, backup);
    }
    const simpleFailed = res.errors.some((e2) => e2.field === "simpleDoc");
    writeCard(dir, st, card, path, local, {
      lastSyncAt: serverNow,
      ...p.simple && !simpleFailed ? { simpleDocHash: p.simple.hash, simpleDocBranch: p.simple.branch } : {}
    });
    if (p.op.tempId) delete st.pendingCreates[p.op.tempId];
    if (res.status === "APPLIED" || res.status === "PARTIAL") {
      counters.pushed++;
      if (p.op.kind === "CREATE") counters.created++;
    }
  }
}

// src/commands/init-connect.ts
import { execFileSync as execFileSync4 } from "child_process";
var pick = async (ctx, title, rows, zero) => {
  ctx.out.line(title);
  rows.forEach((r, i) => ctx.out.line(`  ${i + 1}) ${r}`));
  if (zero) ctx.out.line(`  0) ${zero}`);
  const n = Number(await ctx.prompt.ask("Number", "1"));
  if (!Number.isInteger(n) || n < (zero ? 0 : 1) || n > rows.length) throw new CliError("USAGE", "USAGE: not a number from the list", 2);
  return n;
};
async function connectProject(ctx, root, slug2, a, data) {
  const out = ctx.out;
  const projectDir = join13(root, "rodo", slug2);
  const current = readProject(projectDir, slug2).project;
  const server = (a.server ?? (process.env.RODO_SERVER?.trim() ? defaultServer() : void 0) ?? current.serverUrl ?? await ctx.prompt.ask("Server", defaultServer())).replace(/\/$/, "");
  data.server = server;
  let tok = getToken(server);
  if (tok && !a.connect) {
    try {
      const { http: http2 } = await apiHttp(server, tok.token, CLI_VERSION);
      await http2.get("/v1/devices/me");
    } catch (e2) {
      if (e2 instanceof ApiError && (e2.status === 401 || e2.offline === false)) tok = null;
      else throw e2;
    }
  }
  let connectBoard = null;
  if (a.connect) connectBoard = (await loginConnect(server, CLI_VERSION, a.connect)).board;
  else if (!tok) await loginDeviceCode(server, CLI_VERSION, { print: (l) => process.stderr.write(`${l}
`), sleep: ctx.sleep });
  const { http, apiBaseUrl } = await apiHttp(server, getToken(server).token, CLI_VERSION);
  const me = await http.get("/v1/devices/me");
  let boardId;
  if (connectBoard) boardId = connectBoard.id;
  else if (a.board) boardId = a.board;
  else if (a.createBoard) boardId = await createBoard(ctx, http, me, slug2, current.name, root);
  else {
    const boards = await http.get("/v1/sync/boards");
    const canCreate = me.scopes.includes("boards:create");
    if (!boards.length && !canCreate) {
      throw new CliError("NO_BOARDS", "NO_BOARDS: you have no board yet. Create one on the web, then run rodo init again.", 4);
    }
    const n = await pick(ctx, "Boards:", boards.map((b) => `${b.title} (${b.workspace.name})${b.canWrite ? "" : " [read only]"}`), canCreate ? "create a new board" : void 0);
    boardId = n === 0 ? await createBoard(ctx, http, me, slug2, current.name, root) : boards[n - 1].id;
  }
  data.boardId = boardId;
  let fp = null;
  if (isShallow(root)) out.line("REPO_SHALLOW: shallow clone; the repository check is skipped");
  else fp = repoFingerprint(root);
  let meta;
  try {
    const r = await http.post(`/v1/sync/boards/${boardId}/bind`, {
      projectSlug: slug2,
      folderLabel: `rodo/${slug2}`,
      ...fp ? { repoFingerprint: fp } : {},
      ...remoteHint(root) ? { repoRemoteHint: remoteHint(root) } : {},
      materialize: "ALL"
    });
    meta = r.meta;
    for (const w2 of r.warnings) out.line(`${w2}: the repository identity will be set by a later sync`);
  } catch (e2) {
    if (e2 instanceof ApiError && e2.code === "REPOSITORY_MISMATCH") {
      throw new CliError("REPOSITORY_MISMATCH", `REPOSITORY_MISMATCH: ${e2.message} (expected ${String(e2.body.expected)}, got ${String(e2.body.got)})`, 6);
    }
    if (e2 instanceof ApiError) throw new CliError(e2.code, `${e2.code}: ${e2.message}`, e2.status === 401 ? 4 : 1);
    throw e2;
  }
  writeProject(projectDir, { ...current, serverUrl: server, boardId, repoFingerprint: fp });
  const state = newState({ serverUrl: server, apiBaseUrl, boardId, deviceId: me.deviceId });
  state.meta = meta;
  writeState(projectDir, state);
  out.line(`Bound rodo/${slug2} to board "${meta.board.title}" on ${server}`);
  const ref = discover(root).projects.find((p) => p.slug === slug2);
  const run = await syncProject(root, ref, {}, CLI_VERSION);
  out.line(run.header);
  for (const n of run.notes) out.line(`  ${n}`);
  data.firstSync = run.report.summary;
  if (missingGitignoreLines(root).includes(CARDS_LINE)) {
    addGitignore(root);
    out.line(`.gitignore: added ${CARDS_LINE} (cards now live on the board)`);
    if (tracked(root, `rodo/${slug2}`)) out.line(`Card files are already in git. To stop tracking them (the files stay): git rm --cached -r --ignore-unmatch "rodo/${slug2}/**/*.rodo.md"`);
  }
  out.line("");
  out.line(nextSteps({ bound: true, gitignore: true }));
  return run.exit;
}
async function createBoard(ctx, http, me, slug2, name, root) {
  if (!me.scopes.includes("boards:create")) {
    throw new CliError(
      "BOARD_CREATE_NOT_ALLOWED",
      'BOARD_CREATE_NOT_ALLOWED: this device may not create boards. Create the board on the web and run rodo init again, or run rodo login again and tick "allow creating boards from this device" on the approval page.',
      4
    );
  }
  if (!ctx.prompt.interactive) {
    throw new CliError(
      "BOARD_CREATE_NEEDS_HUMAN",
      "BOARD_CREATE_NEEDS_HUMAN: creating a board needs a person. Open a terminal yourself (not through an AI assistant or a pipe) and run: rodo init --create-board",
      4
    );
  }
  const ws = await http.get("/v1/sync/workspaces");
  const usable = ws.filter((w3) => w3.role === "OWNER" || w3.role === "MEMBER");
  if (!usable.length) throw new CliError("BOARD_CREATE_FORBIDDEN", "BOARD_CREATE_FORBIDDEN: you cannot create boards in any workspace", 4);
  const w2 = usable[await pick(ctx, "Workspaces:", usable.map((x) => x.name)) - 1];
  if (!w2.projects.length) throw new CliError("NO_PROJECT", "NO_PROJECT: this workspace has no project; create one on the web first", 4);
  const p = w2.projects[await pick(ctx, "Projects:", w2.projects.map((x) => x.name)) - 1];
  const title = (await ctx.prompt.ask("Board title", name || slug2)).trim();
  ctx.out.line(`This creates the board "${title}" in ${w2.name} / ${p.name} from device ${me.name}.`);
  const typed = (await ctx.prompt.ask("Type the board title exactly to confirm")).trim();
  if (typed !== title) throw new CliError("CONFIRM_TITLE_MISMATCH", "CONFIRM_TITLE_MISMATCH: the title you typed is different; nothing was created", 2);
  const fp = isShallow(root) ? null : repoFingerprint(root);
  try {
    const r = await http.post("/v1/sync/boards", {
      workspaceId: w2.id,
      projectId: p.id,
      title,
      template: "rodo",
      projectSlug: slug2,
      ...fp ? { repoFingerprint: fp } : {},
      ...remoteHint(root) ? { repoRemoteHint: remoteHint(root) } : {},
      confirmTitle: typed
    });
    return r.board.id;
  } catch (e2) {
    if (e2 instanceof ApiError) throw new CliError(e2.code, `${e2.code}: ${e2.message}`, e2.code === "DEVICE_TOKEN_SCOPE" ? 4 : 1);
    throw e2;
  }
}
function tracked(root, dir) {
  try {
    return execFileSync4("git", ["ls-files", "--", `${dir}/**/*.rodo.md`, `${dir}/*.rodo.md`], { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim().length > 0;
  } catch {
    return false;
  }
}

// src/commands/init.ts
async function runInit(ctx, a) {
  const { out } = ctx;
  const data = { version: 1 };
  if (a.methodOnly && (a.connect || a.board || a.createBoard)) throw usage("--connect, --board and --create-board need the server; drop --method-only");
  const found = findRoot(ctx.cwd);
  const root = found?.root ?? ctx.cwd;
  if (!found || !isGitRepo(root)) {
    out.line("NO_GIT: no git repository found (repository identity will be unavailable)");
    data.warnings = ["NO_GIT"];
  }
  if (!a.noKitUpdate) {
    const r = installKit(root, { dryRun: a.dryRun });
    const jump = r.from && r.from !== r.to ? `${r.from} \u2192 ${r.to}` : r.to;
    out.line(`kit ${jump}: ${r.written.length} written, ${r.updated.length} updated, ${r.unchanged.length} unchanged${a.dryRun ? "  (dry run: nothing written)" : ""}`);
    for (const f of r.kept) out.line(`KIT_FILE_KEPT: ${f} (you changed it; compare with ${f}.rodo-new)`);
    for (const f of r.blocks) out.line(`${f}: RODO block ${a.dryRun ? "would be " : ""}updated`);
    data.kit = r;
  }
  const legacy = isLegacyLayout(root);
  const existing = discover(root).projects.filter((p) => !p.legacy);
  let slug2 = a.project;
  if (!slug2) {
    if (!legacy && existing.length === 1) slug2 = existing[0].slug;
    else if (a.dryRun) slug2 = slugify(basename2(root));
    else slug2 = (await ctx.prompt.ask("Project slug", slugify(basename2(root)))).trim();
  }
  const bad = slugProblem(slug2);
  if (bad) throw usage(`${bad} (got "${slug2}")`);
  data.project = slug2;
  if (legacy) {
    const plan = planMigration(root, slug2);
    out.line("LEGACY_LAYOUT: kit 2.0 layout found. Plan:");
    for (const m of plan.moves) out.line(`  ${m.from}  \u2192  ${m.to}`);
    if (plan.config) out.line(`  ${plan.config.from}  \u2192  ${plan.config.to}  (keys converted)`);
    if (plan.binding) out.line(`  ${plan.binding}: boardId and serverUrl are copied into project.json (the file stays)`);
    for (const f of plan.leftInPlace) out.line(`  ${f}: stays (superseded by rodo/kit.json, safe to delete later)`);
    out.line("  links /rodo/cycles/\u2026, /rodo/project/\u2026, /rodo/MAP.md, /rodo/MEMORY.md become /rodo/" + slug2 + "/\u2026");
    data.plan = plan;
    if (!a.dryRun) {
      if (!await ctx.prompt.confirm("Move the files above?")) {
        out.line("MIGRATION_CANCELLED: nothing was moved");
        out.flush(data);
        return 0;
      }
      const res = applyMigration(root, plan, { name: a.name, useGit: isGitRepo(root) });
      out.line(`moved ${res.moved.length} item(s); rewrote links in ${res.rewritten.length} file(s); nothing was deleted`);
      if (res.notRewritten.length) {
        out.line("These files mention the old paths and need a manual edit:");
        for (const f of res.notRewritten) out.line(`  ${f}`);
      }
      if (isGitRepo(root)) out.line("Review with: git status    (you commit)");
      data.migration = res;
    }
  }
  const projectDir = join14(root, "rodo", slug2);
  if (a.dryRun) {
    out.line(`project rodo/${slug2}/: ${existsSync14(join14(projectDir, "project.json")) ? "exists (missing files would be added)" : "would be created"}`);
  } else {
    const isNew = !existsSync14(join14(projectDir, "project.json"));
    const lang = isNew ? await chooseLanguage(ctx) : "fa";
    const created = scaffoldProject(root, slug2, a.name ?? slug2, lang);
    if (isNew) data.language = lang;
    out.line(created.length ? `rodo/${slug2}/: created ${created.length} file(s)` : `rodo/${slug2}/: nothing to add`);
    data.created = created;
  }
  const gi = { cards: !a.methodOnly };
  const missing = missingGitignoreLines(root, gi);
  let gitignoreDone = !missing.length;
  if (missing.length) {
    if (a.dryRun) out.line(`.gitignore would get: ${missing.join(", ")}`);
    else if (a.yesFiles || await ctx.prompt.confirm(`Add ${missing.length} RODO line(s) to .gitignore (${missing.join(", ")})?`, true)) {
      addGitignore(root, gi);
      out.line(".gitignore updated");
      gitignoreDone = true;
    } else out.line(".gitignore left alone (local sync state may end up in git)");
  }
  if (!a.methodOnly && !a.dryRun) {
    const code = await connectProject(ctx, root, slug2, a, data);
    out.flush(data);
    return code;
  }
  out.line("");
  out.line(nextSteps({ bound: false, gitignore: gitignoreDone }));
  out.flush(data);
  return 0;
}
function nextSteps(o) {
  const files = `rodo/, .agents/, AGENTS.md, CLAUDE.md${o.gitignore ? " and .gitignore" : ""}`;
  return [
    o.bound ? `Next: commit ${files}. Card files (*.rodo.md) are not committed: they live on the board and arrive with rodo sync.` : `Next: commit ${files}. Without a board, card files (*.rodo.md) are committed too; run rodo init (without --method-only) later to connect a board.`,
    'Then ask your AI assistant to read AGENTS.md and plan the first card, or run: rodo new "<title>"'
  ].join("\n");
}
async function chooseLanguage(ctx, env = process.env) {
  const flag = ctx.opts.lang;
  if (flag === "fa" || flag === "en") return flag;
  const loc = (env.LC_ALL || env.LC_MESSAGES || env.LANG || "").toLowerCase();
  const def = loc.startsWith("fa") ? "fa" : "en";
  if (!ctx.prompt.interactive) return def;
  const a = (await ctx.prompt.ask("Language for the plain-language docs (en/fa)", def)).trim().toLowerCase();
  return a === "fa" ? "fa" : a === "en" ? "en" : def;
}

// src/commands/new.ts
import { existsSync as existsSync15, mkdirSync as mkdirSync10, readdirSync as readdirSync5, readFileSync as readFileSync12, writeFileSync as writeFileSync3 } from "fs";
import { join as join15, relative as relative5, sep as sep2 } from "path";

// src/commands/shared.ts
var LEGACY_MSG = "LEGACY_LAYOUT: run rodo init to move rodo/ into rodo/<project>/";
function load(ctx, defaultToCwd) {
  const d = discover(ctx.cwd);
  const refs = selectProjects(d, ctx.opts.project ?? [], defaultToCwd);
  const broken = refs.find((r) => r.problem);
  if (broken) throw new CliError("PROJECT_INVALID", `rodo/${broken.slug}: ${broken.problem}`, 3);
  if (!refs.length) throw notRepo("no RODO project found: run rodo init --method-only");
  return { d, refs };
}
var fmt = (c, f, icon) => `  ${icon} ${c.path}${f.line ? `:${f.line}` : ""}  ${f.message}`;
function printFindings(ctx, cards) {
  for (const c of cards) {
    for (const f of c.errors) ctx.out.line(fmt(c, f, mark.err));
    for (const f of c.warnings) ctx.out.line(fmt(c, f, mark.warn));
  }
}
var sum = (cards) => ({
  files: cards.length,
  errors: cards.reduce((n, c) => n + c.errors.length, 0),
  warnings: cards.reduce((n, c) => n + c.warnings.length, 0)
});
var slim2 = (f) => ({ code: f.code, line: f.line, message: f.message });

// src/commands/new.ts
function slugify2(title) {
  return title.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").split("-").slice(0, 6).join("-");
}
function nextNumber(cyclesDir) {
  const nums = existsSync15(cyclesDir) ? readdirSync5(cyclesDir).map((n) => /^(\d{3,})-/.exec(n)?.[1]).filter(Boolean).map(Number) : [];
  return String((nums.length ? Math.max(...nums) : 0) + 1).padStart(3, "0");
}
function templatesDir(root, lang) {
  const local = join15(root, ".agents/skills/rodo/templates");
  const base = existsSync15(join15(local, "card.rodo.md")) ? local : join15(kitDir(), ".agents/skills/rodo/templates");
  const en = existsSync15(join15(base, "en/card.rodo.md")) ? join15(base, "en") : base;
  return { dir: lang === "en" ? en : base, en };
}
var today = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
async function runNew(ctx, title, o) {
  const t2 = (title ?? "").trim();
  if (!t2) throw new CliError("USAGE", 'usage: rodo new "<title>" [--slug <kebab-slug>] [--major]', 2);
  const { d, refs } = load(ctx, true);
  if (refs.length !== 1 || refs[0].legacy) {
    throw new CliError("USAGE", `more than one project: add --project <slug> (${refs.map((r) => r.slug).join(", ")})`, 2);
  }
  const ref = refs[0];
  const slug2 = o.slug ? slugify2(o.slug) : slugify2(t2);
  if (!slug2) throw new CliError("USAGE", "the title has no latin letters for a folder name: add --slug <kebab-slug>, e.g. --slug order-cancel", 2);
  const cycles = join15(ref.dir, "cycles");
  const nnn = nextNumber(cycles);
  const folder = `${nnn}-${slug2}`;
  const dir = join15(cycles, folder);
  if (existsSync15(dir)) throw new CliError("USAGE", `${relative5(d.root, dir)} already exists`, 2);
  const lang = ref.project?.language.simple ?? "fa";
  const { dir: tpl, en } = templatesDir(d.root, lang);
  const fill = (s) => s.replaceAll("{{NNN-slug}}", folder).replaceAll("{{NNN}}", nnn).replaceAll("{{project}}", ref.slug).replaceAll("{{YYYY-MM-DD}}", today()).replace(/\{\{(short title|عنوان کوتاه|title|عنوان|cycle title|عنوان چرخه)\}\}/g, t2.replace(/"/g, "'"));
  const read = (name) => {
    const p = existsSync15(join15(tpl, name)) ? join15(tpl, name) : join15(en, name);
    return existsSync15(p) ? readFileSync12(p, "utf8") : existsSync15(join15(tpl, "..", name)) ? readFileSync12(join15(tpl, "..", name), "utf8") : null;
  };
  let card = fill(read("card.rodo.md"));
  if (o.major) {
    card = card.replace(/^# workflow: standard.*$/m, "workflow: major").replace(/^<!-- (\[[^\]]+\]\([^)]*acceptance\.feature\)) — [^>]*-->$/m, "- $1");
  }
  const files = [["card.rodo.md", card], ["simple.md", fill(read("simple.md"))], ["spec.md", fill(read("spec.md"))]];
  if (o.major) files.push(["design.md", fill(read("design.md"))], ["acceptance.feature", fill(read("acceptance.feature"))]);
  const rel = relative5(d.root, dir).split(sep2).join("/");
  if (!o.dryRun) {
    mkdirSync10(dir, { recursive: true });
    for (const [n, body] of files) writeFileSync3(join15(dir, n), body);
  }
  ctx.out.line(`${o.dryRun ? "would create" : "created"} ${rel}/`);
  for (const [n] of files) ctx.out.line(`  ${n}`);
  let errors = 0;
  if (!o.dryRun) {
    const cards = scanCards(d.root, ref, [join15(dir, "card.rodo.md")]);
    errors = sum(cards).errors;
    printFindings(ctx, cards);
    ctx.out.line("Next: fill in the {{\u2026}} parts of card.rodo.md and simple.md (or ask your AI), add the cycle to MAP.md, then rodo validate.");
  }
  ctx.out.flush({ version: 2, project: ref.slug, folder: rel, number: nnn, files: files.map(([n]) => `${rel}/${n}`), dryRun: !!o.dryRun, errors });
  return 0;
}

// src/commands/resume.ts
import { existsSync as existsSync17, readFileSync as readFileSync14 } from "fs";
import { dirname as dirname8, join as join17 } from "path";

// src/core/i18n.ts
var T = {
  "resume.none": { fa: "\u06A9\u0627\u0631\u062A \u0641\u0639\u0627\u0644\u06CC \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F", en: "no active card found" },
  "resume.several": { fa: "\u0686\u0646\u062F \u06A9\u0627\u0631\u062A \u0641\u0639\u0627\u0644 \u0647\u0633\u062A\u061B \u06CC\u06A9\u06CC \u0631\u0627 \u0645\u0634\u062E\u0635 \u06A9\u0646\u06CC\u062F", en: "several active cards; name one" },
  "resume.never": { fa: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686\u200C\u0648\u0642\u062A sync \u0646\u0634\u062F\u0647\u061B rodo sync \u0631\u0627 \u0627\u062C\u0631\u0627 \u06A9\u0646\u06CC\u062F", en: "this project has never been synced; run rodo sync" },
  "resume.stale": { fa: "\u0622\u062E\u0631\u06CC\u0646 sync \u0628\u06CC\u0634 \u0627\u0632 \u06CC\u06A9 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634 \u0628\u0648\u062F\u0647\u061B rodo sync \u0631\u0627 \u0627\u062C\u0631\u0627 \u06A9\u0646\u06CC\u062F", en: "last sync is older than 1 hour; run rodo sync" },
  "status.waitingDecision": { fa: "\u0645\u0646\u062A\u0638\u0631 \u062A\u0635\u0645\u06CC\u0645 \u0634\u0645\u0627", en: "waiting for your decision" },
  "status.waitingApproval": { fa: "\u0645\u0646\u062A\u0638\u0631 \u062A\u0623\u06CC\u06CC\u062F \u0634\u0645\u0627", en: "waiting for approval" },
  "test.none": { fa: "\u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u06A9\u0627\u0631\u062A \u062F\u0633\u062A\u0648\u0631 \u062A\u0633\u062A \u062A\u0639\u0631\u06CC\u0641 \u0646\u0634\u062F\u0647 (\u062A\u0633\u062A \u0627\u062E\u062A\u06CC\u0627\u0631\u06CC \u0627\u0633\u062A)", en: "no test command for this card (tests are optional)" },
  "offline.note": { fa: "\u062D\u0627\u0644\u062A \u0622\u0641\u0644\u0627\u06CC\u0646: \u0641\u0642\u0637 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 \u0627\u0646\u062C\u0627\u0645 \u0634\u062F", en: "offline: cards were validated only" }
};
function pickLang(flag, projectLang) {
  return flag === "fa" || flag === "en" ? flag : projectLang === "en" ? "en" : "fa";
}
var t = (lang, key2) => T[key2]?.[lang] ?? key2;

// src/core/time.ts
var fmtFor = (timeZone) => new Intl.DateTimeFormat("sv-SE", {
  timeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});
var zoneName = (env = process.env) => {
  const z = env.RODO_TZ?.trim();
  if (z) {
    try {
      fmtFor(z);
      return z;
    } catch {
    }
  }
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
};
var localTime = (ms, zone = zoneName()) => fmtFor(zone).format(new Date(ms)).replace(/\u00a0/g, " ");
var stamp = (ms, zone = zoneName()) => `${localTime(ms, zone)} (${zone})`;
function ago(ms, now = Date.now()) {
  const s = Math.max(0, Math.round((now - ms) / 1e3));
  if (s < 60) return `${s} s ago`;
  if (s < 3600) return `${Math.round(s / 60)} min ago`;
  if (s < 86400) return `${Math.round(s / 3600)} h ago`;
  return `${Math.round(s / 86400)} d ago`;
}

// src/test-runner/run.ts
import { spawn } from "child_process";
import { appendFileSync, existsSync as existsSync16, mkdirSync as mkdirSync11, readFileSync as readFileSync13, writeFileSync as writeFileSync4, rmSync as rmSync2 } from "fs";
import { tmpdir } from "os";
import { join as join16 } from "path";

// src/test-runner/parsers/generic.ts
var stripAnsi = (s) => s.replace(/\u001b\[[0-9;]*[A-Za-z]/g, "");
var SUMMARY = [
  /^#\s*(tests|suites|pass|fail|cancelled|skipped|todo|duration_ms)\b/i,
  // node:test / TAP footer
  /^(Tests?|Test Files|Test Suites|Suites|Snapshots):?\s/i,
  // vitest / jest footer
  /^\d+\s+(passing|failing|pending)\b/i,
  // mocha
  /^(npm (ERR!|error)|ELIFECYCLE|error Command failed|Command failed with exit code)/i,
  /^(FAILED|failed)$/i,
  /^[-=⎯─_ ]{3,}/
  // separators
];
var isSummary = (l) => SUMMARY.some((r) => r.test(l));
var NAME = [/^not ok \d+\s*-?\s*(.+)$/, /^(?:FAIL|✗|×|✖)\s+(.+)$/, /^●\s+(.+)$/];
function parseGeneric(output) {
  const lines = stripAnsi(output).split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const body = lines.filter((l) => !isSummary(l));
  const names = body.flatMap((l) => {
    for (const r of NAME) {
      const m = r.exec(l);
      if (m) return [m[1].replace(/\s+#.*$/, "").trim()];
    }
    return [];
  });
  const errorLine = [...body].reverse().find((l) => /\b[A-Za-z]*Error\b(\s*[:[(]|$)/.test(l) && !NAME.some((r) => r.test(l)));
  const hit = errorLine ?? [...body].reverse().find((l) => /(Error|FAIL|failed)/i.test(l)) ?? names[0] ?? body[body.length - 1] ?? lines[lines.length - 1] ?? "test command failed";
  const type = /\b([A-Za-z]*Error)\b/.exec(hit)?.[1] ?? (/\bFAIL/i.test(hit) ? "FAIL" : "failed");
  return { scenario: [...new Set(names)].slice(0, 5).join(" | "), step: "", errorType: type, message: hit };
}

// src/test-runner/parsers/jest.ts
function parseJest(json) {
  let data;
  try {
    data = JSON.parse(json);
  } catch {
    return null;
  }
  for (const file of data.testResults ?? []) {
    const a = (file.assertionResults ?? []).find((x) => x.status === "failed");
    if (a) {
      const lines = stripAnsi(a.failureMessages?.[0] ?? "").split("\n").map((l) => l.trim()).filter(Boolean);
      const name = a.fullName ?? a.title ?? "";
      return {
        scenario: /@R\d+/.exec(name)?.[0] ?? name,
        step: "",
        errorType: /^([A-Za-z]*Error)\b/.exec(lines[0] ?? "")?.[1] ?? "AssertionError",
        message: lines.slice(0, 3).join(" ") || "test failed"
      };
    }
    if (file.status === "failed" && file.message) {
      const lines = stripAnsi(file.message).split("\n").map((l) => l.trim()).filter(Boolean);
      return { scenario: "", step: "", errorType: "SuiteError", message: lines.slice(0, 3).join(" ") };
    }
  }
  return null;
}

// src/test-runner/parsers/playwright.ts
var failingStep = (steps = []) => {
  for (const s of steps) {
    const inner = failingStep(s.steps);
    if (inner) return inner;
    if (s.error) return s.title ?? null;
  }
  return null;
};
function firstFailure(suites = []) {
  for (const su of suites) {
    for (const spec of su.specs ?? []) {
      for (const t2 of spec.tests ?? []) {
        const res = (t2.results ?? []).find((r) => r.status && r.status !== "passed" && r.status !== "skipped");
        if (res) return { spec, res };
      }
    }
    const inner = firstFailure(su.suites);
    if (inner) return inner;
  }
  return null;
}
function parsePlaywright(json) {
  let data;
  try {
    data = JSON.parse(json);
  } catch {
    return null;
  }
  const f = firstFailure(data.suites);
  if (!f) return null;
  const title = f.spec.title ?? "";
  const tag = /@R\d+/.exec([title, ...f.spec.tags ?? []].join(" "))?.[0];
  const err = f.res.error ?? f.res.errors?.[0] ?? {};
  const msg = stripAnsi(err.message ?? "").split("\n").map((l) => l.trim()).filter(Boolean);
  const expectLine = msg.find((l) => /expect\(/i.test(l)) ?? msg[0] ?? "test failed";
  return {
    scenario: tag ?? title,
    step: failingStep(f.res.steps) ?? expectLine,
    errorType: /\b([A-Za-z]*Error)\b/.exec(msg[0] ?? "")?.[1] ?? "AssertionError",
    message: msg.slice(0, 3).join(" ")
  };
}

// src/test-runner/run.ts
var TAIL_BYTES = 2e6;
function withReporters(command, report) {
  if (/playwright\s+test/.test(command) && !/--reporter/.test(command)) {
    return { command: `${command} --reporter=list,json`, env: { PLAYWRIGHT_JSON_OUTPUT_NAME: report } };
  }
  if (/\bjest\b/.test(command) && !/--json/.test(command)) return { command: `${command} --json --outputFile="${report}"`, env: {} };
  return { command, env: {} };
}
async function runTestCommand(command, cwd, opts) {
  const report = join16(tmpdir(), `rodo-test-${process.pid}-${Date.now()}.json`);
  const wrapped = withReporters(command, report);
  const t0 = Date.now();
  let output = "";
  const exitCode = await new Promise((resolve4) => {
    const child = spawn(wrapped.command, { cwd, shell: true, env: { ...process.env, ...wrapped.env }, stdio: ["inherit", "pipe", "pipe"] });
    const take = (b, sink) => {
      if (opts.stream) sink.write(b);
      output = (output + b.toString("utf8")).slice(-TAIL_BYTES);
    };
    child.stdout.on("data", (b) => take(b, process.stdout));
    child.stderr.on("data", (b) => take(b, process.stderr));
    child.on("error", (e2) => {
      output += `
Error: ${e2.message}`;
      resolve4(127);
    });
    child.on("close", (c) => resolve4(c ?? 1));
  });
  const durationMs = Date.now() - t0;
  let failure = null;
  let adapter = opts.adapter ?? "other";
  if (exitCode !== 0) {
    const json = existsSync16(report) ? readFileSync13(report, "utf8") : "";
    const pw = json ? parsePlaywright(json) : null;
    const jest = pw ? null : json ? parseJest(json) : null;
    if (pw) {
      failure = pw;
      adapter = opts.adapter ?? "web";
    } else if (jest) {
      failure = jest;
      adapter = opts.adapter ?? "api";
    } else failure = parseGeneric(output);
  }
  rmSync2(report, { force: true });
  return { exitCode, output, durationMs, failure, adapter };
}
var runsFile = (projectDir, key2) => join16(projectDir, ".rodo", "runs", `${key2}.jsonl`);
function readRuns(projectDir, key2) {
  const p = runsFile(projectDir, key2);
  if (!existsSync16(p)) return [];
  return readFileSync13(p, "utf8").split("\n").filter(Boolean).flatMap((l) => {
    try {
      return [JSON.parse(l)];
    } catch {
      return [];
    }
  });
}
function recordRun(projectDir, key2, rec, output) {
  mkdirSync11(join16(projectDir, ".rodo", "runs"), { recursive: true });
  appendFileSync(runsFile(projectDir, key2), JSON.stringify(rec) + "\n");
  writeFileSync4(join16(projectDir, ".rodo", "runs", `${key2}.last.txt`), output.split(/\r?\n/).slice(-60).join("\n"));
}
var readLastOutput = (projectDir, key2) => {
  const p = join16(projectDir, ".rodo", "runs", `${key2}.last.txt`);
  return existsSync16(p) ? readFileSync13(p, "utf8") : null;
};
function setLastFailure(text, value, createSection) {
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  const trailing = /\n$/.test(text);
  const lines = text.split(/\r?\n/);
  if (trailing) lines.pop();
  const line = `- Last failure: ${value}`;
  const fm0 = lines.findIndex((l) => l.trimEnd() === "---");
  const fm1 = fm0 < 0 ? -1 : lines.findIndex((l, i) => i > fm0 && l.trimEnd() === "---");
  const bodyStart = fm1 + 1;
  const h = lines.findIndex((l, i) => i >= bodyStart && l.trimEnd() === "## Progress notes");
  if (h >= 0) {
    let end = lines.findIndex((l, i) => i > h && l.startsWith("## "));
    if (end < 0) end = lines.length;
    const at = lines.findIndex((l, i) => i > h && i < end && l.startsWith("- Last failure:"));
    if (at >= 0) {
      if (lines[at] === line) return null;
      lines[at] = line;
    } else {
      let last = end - 1;
      while (last > h && !lines[last].trim()) last--;
      lines.splice(last + 1, 0, line);
    }
  } else {
    if (!createSection) return null;
    let at = lines.findIndex((l, i) => i >= bodyStart && /^## (Refs|Decision: |Checklist: )/.test(l));
    if (at < 0) at = lines.length;
    const block = ["## Progress notes", "", line, ""];
    if (at > 0 && lines[at - 1].trim()) block.unshift("");
    if (at === lines.length) block.pop();
    lines.splice(at, 0, ...block);
  }
  return lines.join(eol) + (trailing ? eol : "");
}

// src/test-runner/signature.ts
var signatureOf = (adapter, f) => failureSignature({ adapter, scenario: f.scenario, step: f.step, errorType: f.errorType, message: f.message }).short;
function streak(previous, sig) {
  let n = 1;
  for (let i = previous.length - 1; i >= 0; i--) {
    const r = previous[i];
    if (r.passed || r.signature !== sig) break;
    n++;
  }
  return n;
}
var STUCK_MESSAGE = (sig) => `RODO_STUCK: the same failure happened twice (${sig}). Per the RODO method: set status: blocked, blockerType: test or technical, write the reason in statusReason, and ask the user.`;

// src/commands/select.ts
function oneProject(ctx) {
  const { d, refs } = load(ctx, true);
  if (refs.length !== 1) throw usage(`several projects (${refs.map((r) => r.slug).join(", ")}): use --project <slug>`);
  return { d, ref: refs[0] };
}
function pickCard(cards, query) {
  if (query) {
    const c = findCard(cards, query);
    if (!c) throw usage(`no card matches "${query}"`);
    return c;
  }
  for (const status of ["in_progress", "blocked"]) {
    const list = cards.filter((c) => c.model?.status === status);
    if (list.length === 1) return list[0];
    if (list.length > 1) throw usage(`several ${status} cards, name one:
${list.map((c) => `  ${c.number ?? c.key}  ${c.model?.title}`).join("\n")}`);
  }
  throw new CliError("NO_ACTIVE_CARD", "no in_progress or blocked card; name one (rodo resume <card>)", 2);
}
function projectCards(ctx) {
  const { d, ref } = oneProject(ctx);
  return { d, ref, cards: scanCards(d.root, ref) };
}

// src/commands/resume.ts
var MAP_WHAT = /^##\s*(این پروژه چیست|What this project is)/i;
var MAP_WHERE = /^##\s*(الان کجاییم|Where we are)/i;
function section(md, heading, max) {
  if (!md) return [];
  const lines = md.split(/\r?\n/);
  const start = lines.findIndex((l) => heading.test(l));
  if (start < 0) return [];
  const out = [];
  for (let i = start + 1; i < lines.length && !lines[i].startsWith("## "); i++) {
    const l = lines[i].trim();
    if (l && !l.startsWith(">") && !/^\{\{.*\}\}$/.test(l)) out.push(l);
    if (out.length >= max) break;
  }
  return out;
}
function goal(desc) {
  const g = section(desc, /^##\s*Goal\s*$/, 6);
  if (g.length) return g;
  const para = [];
  for (const l of desc.split(/\r?\n/)) {
    if (l.startsWith("## ")) break;
    if (l.trim()) para.push(l.trim());
    else if (para.length) break;
    if (para.length >= 6) break;
  }
  return para;
}
var noteLine = (desc, label) => {
  const m = new RegExp(`^- ${label}:\\s*(.*)$`, "mi").exec(desc);
  return m ? m[1].trim() : null;
};
var head = (text, n) => text.split(/\r?\n/).slice(0, n).join("\n");
var readIf = (p) => existsSync17(p) ? readFileSync14(p, "utf8") : null;
async function runResume(ctx, query, a) {
  const { d, ref, cards } = projectCards(ctx);
  const card = pickCard(cards, query);
  const m = card.model;
  if (!m) {
    ctx.out.line(`${card.path} is not a readable card:`);
    for (const e2 of card.errors) ctx.out.line(`  ${e2.message}`);
    ctx.out.flush({ version: 1, card: card.key, errors: card.errors });
    return 2;
  }
  const lang = pickLang(ctx.opts.lang, ref.project?.language.simple);
  const now = Date.now();
  const last = readJson(join17(ref.dir, ".rodo", "last-sync.json"));
  const mapText = readIf(join17(ref.dir, "MAP.md"));
  const memText = readIf(join17(ref.dir, "MEMORY.md"));
  const desc = m.description;
  const approvals = m.checklists.flatMap((c) => c.items).filter((i) => i.kind === "approval");
  const approval = !approvals.length ? "none" : approvals.every((i) => i.isDone) ? "approved" : "waiting for the user (do not code)";
  const decisions = m.decisions.map((x) => x.answer ? `answered: "${x.question}" \u2192 ${x.answer.key}${x.answer.note ? ` \u2014 ${x.answer.note}` : ""}` : `open: "${x.question}" (${x.options.map((o) => `${o.key} ${o.text}`).join(", ")})`);
  const steps = m.checklists.flatMap((c) => c.items).filter((i) => i.kind === "task" && !i.isDone).map((i) => i.title);
  const remaining = [noteLine(desc, "Remaining"), ...steps].filter(Boolean).slice(0, 8);
  const projectCmd = ref.project?.testCommand;
  const command = m.test?.command ?? (projectCmd ? projectCmd.replaceAll("{NNN}", card.number ?? "") : null);
  const runs = readRuns(ref.dir, card.key);
  const lastRun = runs[runs.length - 1];
  const lastFail = lastRun && !lastRun.passed && lastRun.signature ? `${lastRun.signature} \xD7${streak(runs.slice(0, -1), lastRun.signature)} \u2014 ${lastRun.message.slice(0, 120)}   [from .rodo/runs]` : "none";
  const mem = (memText ?? "").split(/\r?\n/).filter((l) => l.startsWith("- ") && !l.includes("{{")).slice(-5);
  const dirOfCard = dirname8(card.abs);
  const fields = {
    PROJECT: section(mapText, MAP_WHAT, 5),
    WHERE: section(mapText, MAP_WHERE, 5),
    GOAL: goal(desc),
    SCOPE: m.scope ? `allowed: ${m.scope.allowed.join(", ") || "\u2014"}   forbidden: ${m.scope.forbidden.join(", ") || "\u2014"}` : "none",
    APPROVAL: approval,
    DONE: noteLine(desc, "Done") ?? "none",
    REMAINING: remaining.length ? remaining : "none",
    BLOCKER: m.statusReason ?? "none",
    DECISIONS: decisions.length ? decisions.join(" | ") : "none",
    TEST: command ? `${command} (adapter ${m.test?.adapter ?? "other"})` : "none (tests are optional)",
    "LAST FAIL": lastFail,
    FILES: m.refs.map((r) => r.path),
    "DECISIONS-MEM": mem.length ? mem : "none",
    RULES: "read .agents/skills/rodo/SKILL.md (session protocol) \u2014 run `rodo sync` at the end"
  };
  const hints = [];
  if (!last) {
    if (ref.project?.boardId) hints.push(t(lang, "resume.never"));
  } else if (now - last.finishedAt > 36e5) hints.push(t(lang, "resume.stale"));
  const cardLine = `${card.number ? cardLabel(card.number, m.title, " \u2014 ") : `${card.key} \u2014 ${m.title}`}   status: ${m.status}${m.status === "blocked" && m.blockerType ? ` (${m.blockerType})` : ""}${m.workflow ? `   workflow: ${m.workflow}` : ""}   path: rodo/${ref.legacy ? "" : ref.slug + "/"}${card.path}`;
  ctx.out.line(`RODO CONTEXT (compact) \u2014 project ${ref.slug} \u2014 ${stamp(now)} \u2014 last sync ${last ? ago(last.finishedAt, now) : "never"}`);
  const put = (label, v) => {
    const lines = Array.isArray(v) ? v : [v];
    const pad = label.padEnd(14);
    if (!lines.length) {
      ctx.out.line(`${pad}none`);
      return;
    }
    lines.forEach((l, i) => ctx.out.line(`${i === 0 ? pad : " ".repeat(14)}${l}`));
  };
  const order = ["PROJECT", "WHERE"];
  for (const k of order) put(k, fields[k]);
  put("CARD", cardLine);
  for (const k of ["GOAL", "SCOPE", "APPROVAL", "DONE", "REMAINING", "BLOCKER", "DECISIONS", "TEST", "LAST FAIL", "FILES", "DECISIONS-MEM", "RULES"]) put(k, fields[k]);
  let full;
  if (a.full) {
    full = {};
    const add = (name, p) => {
      const x = readIf(p);
      if (x !== null) full[name] = head(x, 400);
    };
    add("simple.md", join17(dirOfCard, "simple.md"));
    add("spec.md", join17(dirOfCard, "spec.md"));
    add("acceptance.feature", join17(dirOfCard, "acceptance.feature"));
    add("project/architecture.md", join17(ref.dir, "project", "architecture.md"));
    const out = readLastOutput(ref.dir, card.key);
    if (out) full["last test output"] = out;
    for (const [name, text] of Object.entries(full)) {
      ctx.out.line("");
      ctx.out.line(`=== ${name} ===`);
      ctx.out.line(text);
    }
  }
  for (const h of hints) ctx.out.line(`HINT        ${h}`);
  const data = {
    project: ref.slug,
    at: now,
    lastSyncAt: last?.finishedAt ?? null,
    card: { key: card.key, title: m.title, status: m.status, workflow: m.workflow ?? null, path: `rodo/${ref.slug}/${card.path}` },
    fields,
    ...full ? { full } : {},
    hints
  };
  ctx.out.flush({ version: 1, ...data });
  return 0;
}

// src/commands/status.ts
import { readFileSync as readFileSync15 } from "fs";
import { join as join18 } from "path";

// src/sync/board-view.ts
async function boardChanges(serverUrl, boardId, state, cliVersion) {
  if (!serverUrl || !boardId) return null;
  const tok = getToken(serverUrl);
  if (!tok) return null;
  try {
    const d = await discover2(serverUrl);
    const http = new Http({ baseUrl: d.apiBaseUrl, token: tok.token, cliVersion, timeoutMs: 1e4 });
    const cards = /* @__PURE__ */ new Map();
    let since = state?.lastSeq ?? "0";
    let seq = since;
    for (let i = 0; i < 1e3; i++) {
      const page = await http.get(`/v1/sync/boards/${boardId}/changes`, { since, limit: 200 });
      for (const c of page.cards) cards.set(c.id, c);
      since = seq = page.toSeq;
      if (!page.hasMore) break;
    }
    return { cards, seq };
  } catch {
    return null;
  }
}

// src/commands/status.ts
function syncState(ref, c, state, remote, projectDir) {
  if (c.errors.length) return `invalid (${c.errors.length} error${c.errors.length > 1 ? "s" : ""})`;
  if (!ref.project?.boardId) return "not-bound";
  const id = c.model?.id;
  if (!id) return "local-new";
  const known = state?.cards?.[id];
  if (!known) return "local-new";
  if (remote?.archived || remote?.deleted) return "archived-on-board";
  const base = projectDir ? readBase(projectDir, id) : null;
  const localChanged = base && c.model ? !isEmptyChanges(diffModels(cardStateToModel(base), c.model)) : !!known.fileHash && known.fileHash !== sha256(readFileSync15(c.abs));
  const boardChanged = !!remote && remote.rev !== known.baseRev;
  if (localChanged && boardChanged) return "conflict-pending";
  if (boardChanged) return "board-changed";
  return localChanged ? "local-changed" : "clean";
}
var openDecisions = (c) => (c.model?.decisions ?? []).filter((d) => !d.answer);
var pendingApprovals = (c) => (c.model?.checklists ?? []).flatMap((l) => l.items).filter((i) => i.kind === "approval" && !i.isDone);
async function runStatus(ctx, a) {
  const { d, refs } = load(ctx, true);
  const projects = [];
  for (const ref of refs) {
    const cards = scanCards(d.root, ref);
    const state = readJson(join18(ref.dir, ".rodo", "state.json"));
    const last = readJson(join18(ref.dir, ".rodo", "last-sync.json"));
    const lang = pickLang(ctx.opts.lang, ref.project?.language.simple);
    const head2 = gitHead(d.root);
    const branch = gitBranch(d.root);
    const board = a.local ? null : await boardChanges(ref.project?.serverUrl ?? null, ref.project?.boardId ?? null, state, CLI_VERSION);
    if (ref.legacy) ctx.out.line(LEGACY_MSG);
    const bound = ref.project?.boardId ? `board ${ref.project.boardId}` : "not connected to a board";
    ctx.out.line(`Project  ${ref.slug}  (${bound})${branch ? `      branch ${branch}${head2 ? ` @ ${head2.slice(0, 7)}` : ""}` : ""}`);
    ctx.out.line(`Sync     ${last ? `last ${stamp(last.finishedAt)} \xB7 ${last.mode}` : "never"}  (server: ${board ? `connected \xB7 board seq ${board.seq}` : "not connected"})`);
    ctx.out.line("");
    ctx.out.line(`${"Card".padEnd(44)} ${"Board".padEnd(12)} ${"Local".padEnd(12)} Sync`);
    const rows = cards.map((c) => {
      const title = c.model?.title ?? "(unreadable)";
      const label = c.number ? cardLabel(c.number, title) : c.path.replace(/\.rodo\.md$/i, "");
      const remote = c.model?.id ? board?.cards.get(c.model.id) ?? null : null;
      const known = board && c.model?.id && state?.cards?.[c.model.id] ? readBase(ref.dir, c.model.id) : null;
      const boardStatus = remote ? remote.archived || remote.deleted ? "archived" : remote.status : known?.status ?? null;
      return { path: c.path, key: c.key, title, status: c.errors.length ? null : c.model?.status ?? null, board: boardStatus, sync: syncState(ref, c, state, remote, ref.dir), errors: c.errors.length, label };
    });
    for (const r of rows) ctx.out.line(`${r.label.slice(0, 44).padEnd(44)} ${(r.board ?? "\u2014").padEnd(12)} ${(r.status ?? "\u2014").padEnd(12)} ${r.sync}`);
    const dec = cards.reduce((n, c) => n + openDecisions(c).length, 0);
    const apr = cards.reduce((n, c) => n + pendingApprovals(c).length, 0);
    ctx.out.line("");
    const lost = (last?.conflicts ?? []).filter((c) => c.winner === "server");
    for (const c of lost) ctx.out.line(`Conflict ${c.path}: ${c.field} kept the board value${c.localValue !== void 0 ? ` (yours: ${c.localValue})` : ""}${c.localCopy ? `; your file: rodo/${ref.slug}/${c.localCopy}` : ""}`);
    if (dec) ctx.out.line(`${t(lang, "status.waitingDecision")}: ${dec}`);
    if (apr) ctx.out.line(`${t(lang, "status.waitingApproval")}: ${apr}`);
    projects.push({
      project: ref.slug,
      boardId: ref.project?.boardId ?? null,
      branch,
      head: head2,
      lastSyncAt: last?.finishedAt ?? null,
      cards: rows.map(({ label: _l, ...r }) => r),
      waitingDecision: dec,
      waitingApproval: apr,
      conflicts: lost
    });
  }
  ctx.out.flush({ version: 1, projects });
  return 0;
}

// src/commands/sync.ts
async function runSync(ctx, a, lockWaitMs) {
  if (a.pullOnly && a.pushOnly) throw usage("--pull-only and --push-only cannot be used together");
  const { d, refs } = load(ctx, false);
  let exit = 0;
  const data = [];
  for (const ref of refs) {
    if (ref.legacy) {
      ctx.out.line(LEGACY_MSG);
      ctx.out.line(`rodo/  \u25B8 sync refuses until the layout is migrated`);
      exit = Math.max(exit, 3);
      continue;
    }
    try {
      if (a.offline) {
        const { report, cards } = await runOfflineSync(d.root, ref, { dryRun: a.dryRun, lockWaitMs });
        const s = report.summary;
        ctx.out.line(`rodo/${ref.slug}  \u25B8 offline \xB7 files ${s.files} \xB7 errors ${s.errors} \xB7 warnings ${s.warnings}${a.dryRun ? "  (dry run: nothing written)" : ""}`);
        printFindings(ctx, cards);
        data.push(report);
        continue;
      }
      const run = await syncProject(d.root, ref, a, CLI_VERSION, lockWaitMs);
      ctx.out.line(run.header);
      for (const n of run.notes) ctx.out.line(`  ${mark.warn} ${n}`);
      for (const c of run.cards) {
        const x = run.extra.get(c.path);
        const line = (f, icon) => ctx.out.line(`  ${icon} ${c.path}${f.line ? `:${f.line}` : ""}  ${f.message}`);
        for (const f of [...c.errors, ...x?.errors ?? []]) line(f, mark.err);
        for (const f of [...c.warnings, ...x?.warnings ?? []]) line(f, mark.warn);
      }
      data.push(run.report);
      exit = Math.max(exit, run.exit);
    } catch (e2) {
      if (!(e2 instanceof CliError) || e2.exitCode !== 5) throw e2;
      ctx.out.line(e2.message);
      exit = Math.max(exit, 5);
    }
  }
  ctx.out.flush({ version: 1, ...a.offline ? { mode: "offline" } : {}, projects: data });
  return exit;
}

// src/commands/test.ts
import { readFileSync as readFileSync16 } from "fs";
async function runTest(ctx, query, a) {
  const { d, ref, cards } = projectCards(ctx);
  const card = pickCard(cards, query);
  const lang = pickLang(ctx.opts.lang, ref.project?.language.simple);
  const own = card.model?.test?.command;
  const projectCmd = ref.project?.testCommand;
  const command = (own || projectCmd || "").replaceAll("{NNN}", card.number ?? "");
  if (!command) {
    ctx.out.line(t(lang, "test.none"));
    ctx.out.flush({ version: 1, card: card.key, ran: false });
    return 0;
  }
  const adapter = a.adapter ?? card.model?.test?.adapter;
  const res = await runTestCommand(command, d.root, { adapter, stream: !ctx.opts.json });
  const passed = res.exitCode === 0;
  const previous = readRuns(ref.dir, card.key);
  const sig = res.failure ? signatureOf(res.adapter, res.failure) : null;
  const n = sig ? streak(previous, sig) : 0;
  const rec = {
    at: Date.now(),
    command,
    adapter: res.adapter,
    exitCode: res.exitCode,
    passed,
    signature: sig,
    scenario: res.failure?.scenario ?? "",
    step: res.failure?.step ?? "",
    message: (res.failure?.message ?? "").slice(0, 500),
    durationMs: res.durationMs,
    gitCommit: gitHead(d.root)
  };
  recordRun(ref.dir, card.key, rec, res.output);
  const note = passed ? "none" : `${sig} \xD7${n} \u2014 ${(res.failure?.message ?? "").replace(/\s+/g, " ").slice(0, 120)}`;
  const updated = setLastFailure(readFileSync16(card.abs, "utf8"), note, !passed);
  if (updated !== null) writeAtomic(card.abs, updated);
  if (passed) ctx.out.line(`TEST PASSED  ${card.key}  (${res.durationMs} ms)`);
  else ctx.out.line(`TEST FAILED  ${card.key}  ${note}`);
  const stuck = !passed && n >= 2;
  if (stuck) ctx.out.line(STUCK_MESSAGE(sig));
  ctx.out.flush({ version: 1, card: card.key, ran: true, passed, exitCode: res.exitCode, signature: sig, count: n, stuck, adapter: res.adapter });
  return res.exitCode;
}

// src/commands/validate.ts
import { resolve as resolve3 } from "path";
async function runValidate(ctx, paths, o = {}) {
  const { d, refs } = load(ctx, false);
  const only = paths.map((p) => resolve3(ctx.cwd, p));
  const files = [];
  const total = { files: 0, errors: 0, warnings: 0 };
  for (const ref of refs) {
    const cards = scanCards(d.root, ref, only);
    const s = sum(cards);
    total.files += s.files;
    total.errors += s.errors;
    total.warnings += s.warnings;
    if (ref.legacy) ctx.out.line(LEGACY_MSG);
    ctx.out.line(`rodo/${ref.legacy ? "" : ref.slug}  \u25B8 ${s.files} files \xB7 errors ${s.errors} \xB7 warnings ${s.warnings}`);
    printFindings(ctx, cards);
    for (const c of cards) files.push({ project: ref.slug, path: c.path, errors: c.errors.map(slim2), warnings: c.warnings.map(slim2) });
  }
  ctx.out.flush({ version: 2, files, summary: total });
  return o.strict && total.errors > 0 ? 1 : 0;
}

// src/index.ts
var collect = (v, prev) => [...prev, v];
function buildProgram(run) {
  const program = new Command("rodo").description("RODO method CLI").version(CLI_VERSION).option("--json", "machine-readable output").option("--project <slug>", "project (repeatable; default: all)", collect, []).option("--lang <fa|en>", "language of hints and of new project files (error codes stay English)").option("--verbose", "more detail").showHelpAfterError().addHelpText("after", `
Getting started:
  rodo init --method-only --project <slug>   install the method kit and create rodo/<slug>/
  rodo new "Delete a note"                   start the next cycle (card, simple.md, spec.md)
  rodo validate --strict                     check the cards (exit 1 on errors)
  rodo resume <card>                         context for an AI session
  rodo test <card>                           run the card test and catch repeated failures
  rodo init --project <slug> --create-board  later: connect a board, then rodo sync`);
  program.command("init").description("install or update the method kit and create a project folder").option("--name <name>", "display name").option("--server <url>", "board server (default: RODO_SERVER, else the built-in server)").option("--connect <code>", "one-time connect code from the board website (skips the device code)").option("--board <id>", "bind to an existing board").option("--create-board", "create a new board for this project").option("--method-only", "no server: install the kit and create the project folder only").option("--no-kit-update", "skip the kit step").option("--dry-run", "print the plan, write nothing").option("--yes-files", "answer yes to the .gitignore question").addHelpText("after", `
Examples:
  rodo init --method-only --project notely --lang en   kit + project folder, no server
  rodo init --project notely --create-board            log in and create a board
  rodo init --project notely --board <id>              bind to an existing board`).action((o) => run((ctx) => runInit(ctx, { ...o, project: ctx.opts.project?.[0], noKitUpdate: o.kitUpdate === false })));
  program.command("login").description("log in with a device code or a connect code").option("--server <url>").option("--connect <code>").option("--rotate", "replace this device token").action((o) => run((ctx) => runLogin(ctx, o)));
  program.command("logout").description("revoke this device and delete the local token").option("--server <url>").action((o) => run((ctx) => runLogout(ctx, o)));
  program.command("devices").description("where to manage devices").option("--server <url>").action((o) => run((ctx) => runDevices(ctx, o)));
  program.command("validate [paths...]").description("validate card files (writes nothing)").option("--strict", "exit 1 when there are errors (for CI and git hooks)").action((paths, o) => run((ctx) => runValidate(ctx, paths, o)));
  program.command("new <title>").description("start a new cycle: rodo/<project>/cycles/NNN-slug/ from the kit templates").option("--slug <kebab-slug>", "folder name after the number (default: from the title; needed for non-latin titles)").option("--major", "also create design.md and acceptance.feature, and set workflow: major").option("--dry-run", "print the plan, write nothing").action((title, o) => run((ctx) => runNew(ctx, title, o)));
  program.command("sync").description("pull, merge, push and report (--offline: validate only)").option("--offline").option("--dry-run").option("--pull-only").option("--push-only").option("--confirm-archive").option("--check").action((o) => run((ctx) => runSync(ctx, o)));
  program.command("status").description("cards and their state").option("--local").action((o) => run((ctx) => runStatus(ctx, o)));
  program.command("doctor").description("read-only health checks").action(() => run((ctx) => runDoctor(ctx)));
  program.command("resume [card]").description("print the context of a card for an AI session").option("--full").action((card, o) => run((ctx) => runResume(ctx, card, o)));
  program.command("test [card]").description("run the card test command and track failure signatures").option("--adapter <adapter>", "web|api|cli|mobile|iot|other").action((card, o) => run((ctx) => runTest(ctx, card, o)));
  program.command("version").description("versions").action(() => run((ctx) => runVersion(ctx)));
  return program;
}
async function main(argv, prompt = stdinPrompter()) {
  let code = 0;
  const program = buildProgram(async (fn) => {
    const opts = program.opts();
    const out = new Out(opts);
    const ctx = { cwd: process.cwd(), opts, out, prompt: withDrain(prompt, out) };
    try {
      code = await fn(ctx);
    } catch (e2) {
      if (!(e2 instanceof CliError)) throw e2;
      process.stderr.write(`${e2.message}
`);
      code = e2.exitCode;
    }
  });
  program.exitOverride();
  try {
    await program.parseAsync(argv);
  } catch (e2) {
    const c = e2.code;
    if (c === "commander.helpDisplayed" || c === "commander.version" || c === "commander.help") return 0;
    return c?.startsWith("commander.") ? 2 : 1;
  }
  return code;
}
if (process.env.RODO_CLI_NO_MAIN !== "1") {
  main(process.argv).then((c) => process.exit(c), (e2) => {
    process.stderr.write(`${e2.stack ?? e2}
`);
    process.exit(1);
  });
}
export {
  buildProgram,
  main
};
