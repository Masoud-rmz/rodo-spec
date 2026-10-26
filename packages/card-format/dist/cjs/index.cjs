"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CODES: () => CODES,
  SYNC_CODES: () => SYNC_CODES,
  canonicalHash: () => canonicalHash,
  cardStateToModel: () => cardStateToModel,
  decideConflict: () => decideConflict,
  decodeCardBytes: () => decodeCardBytes,
  deepEqual: () => deepEqual,
  diffModels: () => diffModels,
  emptyModel: () => emptyModel,
  failureSignature: () => failureSignature,
  fieldEquals: () => fieldEquals,
  finding: () => finding,
  isEmptyChanges: () => isEmptyChanges,
  isError: () => isError,
  keepProgressNotes: () => keepProgressNotes,
  mergeChildren: () => mergeChildren,
  mergeField: () => mergeField,
  mergeSet: () => mergeSet,
  modelToCardState: () => modelToCardState,
  normText: () => normText,
  normalizeFailureMessage: () => normalizeFailureMessage,
  normalizeForCompare: () => normalizeForCompare,
  parseCard: () => parseCard,
  parseCardFull: () => parseCardFull,
  progressSection: () => progressSection,
  readLegacyReason: () => readLegacyReason,
  scanSecrets: () => scanSecrets,
  serializeCard: () => serializeCard,
  severityOf: () => severityOf,
  sha256Hex: () => sha256Hex,
  statusGroup: () => statusGroup,
  threeWay: () => threeWay,
  validateCard: () => validateCard
});
module.exports = __toCommonJS(index_exports);

// src/model.ts
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

// src/codes.ts
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
var SYNC_CODES = {
  LOCKED: (a) => `card is locked by ${a.name}`,
  // cycle 008: no longer raised by validateCard; the server still returns it to a caller who cannot write the board
  NO_LIST_FOR_STATUS: () => "NO_LIST_FOR_STATUS: the board has no list for this status and you cannot add one",
  STATUS_TRANSITION_INVALID: (a) => `STATUS_TRANSITION_INVALID: cannot go from ${a.from} to ${a.to}; set in_progress first`,
  ARCHIVED: () => "ARCHIVED: this card was archived on the board; the file moved to .rodo/trash/",
  FORBIDDEN: () => "FORBIDDEN: you cannot change this board (ask the board owner)",
  VALIDATION: (a) => `VALIDATION: ${a.detail}`,
  DECISION_ANSWERED_KEPT: (a) => `DECISION_ANSWERED_KEPT: "${a.question}" is answered; it stays on the card`,
  REPO_SHALLOW: () => "REPO_SHALLOW: this is a shallow git clone; the repository check was skipped",
  SIMPLE_DOC_BRANCH_CHANGED: (a) => `SIMPLE_DOC_BRANCH_CHANGED: simple.md of ${a.cycle} was last pushed from branch ${a.old}, now from ${a.new}; the board shows the newest`,
  CONFLICT_RESOLVED: (a) => `CONFLICT_RESOLVED: ${a.field} changed on the board and here; kept ${a.winner} value; a copy of your file is in .rodo/conflicts/`,
  ITEM_DELETED_ON_SERVER: (a) => `ITEM_DELETED_ON_SERVER: "${a.title}" was deleted on the board; your edit is in the web history`,
  SERVER_CHANGED_WHILE_INVALID: (a) => `SERVER_CHANGED_WHILE_INVALID: the board changed this card; its version is in .rodo/conflicts/${a.id}.server.rodo.md`,
  ARCHIVE_CONFIRM_REQUIRED: (a) => `ARCHIVE_CONFIRM_REQUIRED: ${a.n} card files were deleted; run rodo sync --confirm-archive to archive them on the board`,
  OFFLINE: () => "OFFLINE: server not reachable; validated only, nothing lost"
};
function finding(code, line, args = {}) {
  return { code, line, message: CODES[code].msg(args) };
}
var severityOf = (code) => CODES[code]?.sev;

// src/fields.ts
var import_protocol = require("@rodo/protocol");

// src/compare.ts
var TEHRAN = "+03:30";
var DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;
function normText(s) {
  return s.replace(/\r\n?/g, "\n").normalize("NFC").split("\n").map((l) => l.replace(/[ \t]+$/, "")).join("\n").replace(/\n+$/, "");
}
function toEpoch(v) {
  if (v === null || v === void 0 || v === "") return null;
  if (typeof v === "number") return v;
  if (typeof v !== "string") return v;
  const t = Date.parse(DATE_ONLY.test(v) ? `${v}T00:00:00${TEHRAN}` : v);
  return Number.isNaN(t) ? v : t;
}
var sortedUnique = (v) => Array.from(new Set((v ?? []).map((s) => s.normalize("NFC")))).sort();
var emptyToNull = (v) => {
  if (v === "" || v === void 0) return null;
  if (Array.isArray(v)) return v.length ? v.map(emptyToNull) : null;
  if (v && typeof v === "object") {
    const out = {};
    for (const k of Object.keys(v).sort()) out[k] = emptyToNull(v[k]);
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
      if (!value) return null;
      const s = value;
      const f = (l) => (l ?? []).map((x) => x.trim().normalize("NFC"));
      return emptyToNull({ allowed: f(s.allowed), forbidden: f(s.forbidden) });
    }
    case "list":
      return value === null || value === void 0 || value === "" ? null : String(value).trim().normalize("NFC");
    case "status": {
      if (!value || typeof value !== "object") return value;
      const s = value;
      return {
        status: s.status,
        list: normalizeForCompare("list", s.list),
        statusReason: normalizeForCompare("statusReason", s.statusReason),
        blockerType: s.blockerType ?? null
      };
    }
    case "financial": {
      if (!value) return null;
      const f = value;
      return { type: f.type ?? "none", amount: f.amount ?? 0, category: f.category ?? "general", date: toEpoch(f.date) };
    }
    default:
      return emptyToNull(value);
  }
}
function deepEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null || typeof a !== "object" || typeof b !== "object") return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
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

// src/fields.ts
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
  if (!isStr(v)) return false;
  const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
  if (d) {
    const t = new Date(Date.UTC(+d[1], +d[2] - 1, +d[3]));
    return t.getUTCFullYear() === +d[1] && t.getUTCMonth() === +d[2] - 1 && t.getUTCDate() === +d[3];
  }
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/.test(v) && !Number.isNaN(Date.parse(v));
}
function parseHours(v) {
  if (!isStr(v)) return null;
  const m = /^(\d{1,3}):([0-5]\d)$/.exec(v.trim());
  return m ? +m[1] * 60 + +m[2] : null;
}
function readFields(data, keyLine, order) {
  const m = emptyModel();
  const out = [];
  const L = (k) => keyLine[k] ?? null;
  const add = (code, k, args = {}) => out.push(finding(code, L(k), args));
  for (const k of order) {
    if (KNOWN.has(k) || k.startsWith("x-")) continue;
    if (k in OLD_KEYS) add("OLD_KEY", k, { key: k, hint: OLD_KEYS[k] });
    else add("UNKNOWN_KEY", k, { key: k });
  }
  for (const k of order) if (k.startsWith("x-")) m.extras[k] = data[k];
  const sv = data.schemaVersion;
  if (sv === void 0 || sv === null) add("SCHEMA_VERSION_MISSING", "schemaVersion");
  else if (sv !== 1 && sv !== 2) add("SCHEMA_VERSION_INVALID", "schemaVersion");
  m.schemaVersion = sv === 1 ? 1 : 2;
  if (data.id !== void 0 && data.id !== null) {
    if (isStr(data.id) && /^[a-z0-9]{20,32}$/.test(data.id)) m.id = data.id;
    else add("ID_INVALID", "id");
  }
  if (data.tempId !== void 0 && data.tempId !== null) {
    if (isStr(data.tempId) && /^tmp_[a-z0-9]{20,32}$/.test(data.tempId)) m.tempId = data.tempId;
    else add("TEMP_ID_INVALID", "tempId");
  }
  if (data.boardId !== void 0 && data.boardId !== null) {
    if (isStr(data.boardId) && data.boardId.trim()) m.boardId = data.boardId.trim();
    else add("BOARD_ID_MISSING", "boardId");
  } else if (m.schemaVersion === 1) add("BOARD_ID_MISSING", "schemaVersion");
  if (data.title === void 0 || data.title === null) add("TITLE_MISSING", "title");
  else if (!isStr(data.title) || data.title.trim().length < 1 || data.title.trim().length > 200) add("TITLE_INVALID", "title");
  else m.title = data.title.trim();
  if (data.status === void 0 || data.status === null) add("STATUS_MISSING", "status");
  else if (!isStr(data.status) || !import_protocol.CARD_STATUSES.includes(data.status)) add("STATUS_INVALID", "status", { value: String(data.status) });
  else m.status = data.status;
  if (data.statusReason !== void 0 && data.statusReason !== null) {
    const r = data.statusReason;
    if (isStr(r) && r.trim().length >= 1 && r.trim().length <= 500 && !/[\r\n]/.test(r.trim())) m.statusReason = r.trim();
    else add("STATUS_REASON_INVALID", "statusReason");
  }
  if (data.blockerType !== void 0 && data.blockerType !== null) {
    if (isStr(data.blockerType) && import_protocol.BLOCKER_TYPES.includes(data.blockerType)) m.blockerType = data.blockerType;
    else add("BLOCKER_TYPE_INVALID", "blockerType");
  }
  if (data.list !== void 0 && data.list !== null) {
    if (isStr(data.list) && data.list.trim()) m.list = data.list.trim();
    else add("UNKNOWN_LIST", "list", { list: String(data.list) });
  }
  if (data.priority !== void 0 && data.priority !== null) {
    if (isStr(data.priority) && PRIORITIES.includes(data.priority)) m.priority = data.priority;
    else add("PRIORITY_INVALID", "priority");
  }
  for (const [key, code, ok] of [
    ["members", "MEMBERS_INVALID", (s) => isStr(s) && USERNAME.test(s)],
    ["labels", "LABELS_INVALID", (s) => isStr(s) && s.length >= 1 && s.length <= 50]
  ]) {
    const v = data[key];
    if (v === void 0 || v === null) continue;
    if (Array.isArray(v) && v.every(ok) && new Set(v).size === v.length) m[key] = v;
    else add(code, key);
  }
  for (const key of ["startAt", "dueAt"]) {
    const v = data[key];
    if (v === void 0 || v === null) continue;
    if (validDate(v)) m[key] = v;
    else add("DATE_INVALID", key, { key });
  }
  if (data.coverColor !== void 0 && data.coverColor !== null) {
    if (isStr(data.coverColor) && COVERS.includes(data.coverColor)) m.coverColor = data.coverColor;
    else add("COVER_COLOR_INVALID", "coverColor");
  }
  let hoursSet = false;
  if (data.hours !== void 0 && data.hours !== null) {
    const h = parseHours(data.hours);
    if (h === null) add("HOURS_INVALID", "hours", { value: String(data.hours) });
    else {
      m.hoursMinutes = h;
      hoursSet = h !== 0;
    }
  }
  if (data.financial !== void 0 && data.financial !== null) readFinancial(data.financial, m, add);
  if (data.scope !== void 0 && data.scope !== null) readScope(data.scope, m, add);
  if (data.test !== void 0 && data.test !== null) {
    const t = data.test;
    if (isObj(t) && Object.keys(t).every((k) => k === "adapter" || k === "command") && isStr(t.adapter) && ADAPTERS.includes(t.adapter) && isStr(t.command) && t.command.length >= 1 && t.command.length <= 500) {
      m.test = { adapter: t.adapter, command: t.command };
    } else add("TEST_INVALID", "test");
  }
  if (data.workflow !== void 0 && data.workflow !== null) {
    if (isStr(data.workflow) && WORKFLOWS.includes(data.workflow)) m.workflow = data.workflow;
    else add("WORKFLOW_INVALID", "workflow", { value: String(data.workflow) });
  }
  if (typeof data.updatedAt === "number" && Number.isInteger(data.updatedAt)) m.updatedAt = data.updatedAt;
  else if (data.updatedAt !== void 0 && data.updatedAt !== null) add("UPDATED_AT_EDITED", "updatedAt");
  if (typeof data.locked === "boolean") m.locked = data.locked;
  else if (data.locked !== void 0 && data.locked !== null) add("LOCKED_EDITED", "locked");
  return { model: m, findings: out, fileUpdatedAt: data.updatedAt, fileLocked: data.locked, hoursSet };
}
function readFinancial(v, m, add) {
  const bad = (detail) => add("FINANCIAL_INVALID", "financial", { detail });
  if (!isObj(v)) return bad("financial must be a map with type, amount, category, date");
  const extra = Object.keys(v).find((k) => !["type", "amount", "category", "date"].includes(k));
  if (extra) return bad(`unknown key "${extra}" (allowed: type, amount, category, date)`);
  const f = { ...m.financial };
  if (v.type !== void 0) {
    if (v.type === "none" || v.type === "expense" || v.type === "income") f.type = v.type;
    else return bad("type must be none, expense or income");
  }
  if (v.amount !== void 0) {
    if (typeof v.amount === "number" && Number.isInteger(v.amount) && v.amount >= 0) f.amount = v.amount;
    else return bad("amount must be a whole number");
  }
  if (v.category !== void 0) {
    if (isStr(v.category) && v.category.trim() && v.category.length <= 50) f.category = v.category.trim();
    else return bad("category must be 1-50 characters");
  }
  if (v.date !== void 0 && v.date !== null) {
    if (validDate(v.date)) f.date = v.date;
    else return bad("date must be YYYY-MM-DD");
  }
  if (f.type !== "none" && !(f.amount > 0)) return add("FINANCIAL_AMOUNT_REQUIRED", "financial");
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

// src/refs.ts
var REF_LINE = /^- \[(.*?)\]\((<[^>]+>|[^)]*)\)(?:\s*<!-- rodo:ref_(\S+?) -->)?\s*$/;
var ID_COMMENT = /^[a-z0-9]{8,32}$/;
function parseRefs(lines) {
  const refs = [];
  const findings = [];
  const ids = [];
  const seen = /* @__PURE__ */ new Set();
  for (const { text, no } of lines) {
    if (!text.trim() || /^\s*<!--.*-->\s*$/.test(text)) continue;
    const m = REF_LINE.exec(text);
    if (!m) {
      findings.push(finding("REF_LINE_INVALID", no, { n: no }));
      continue;
    }
    const title = m[1].trim();
    if (title.length < 1 || title.length > 200) findings.push(finding("REF_TITLE_INVALID", no, { n: no }));
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
      } else findings.push(finding("ID_INVALID", no));
    }
    refs.push(ref);
  }
  if (refs.length > 20) findings.push(finding("REF_LIMIT_REACHED", lines[0]?.no ?? null));
  return { refs, findings, ids };
}
var refPathOnly = (p) => p.split("#")[0];

// src/checklists.ts
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
    } else findings.push(finding("ID_INVALID", headerNo));
  }
  checklist.title = title.trim();
  if (checklist.title.length < 1 || checklist.title.length > 120) findings.push(finding("CHECKLIST_TITLE_INVALID", headerNo, { n: headerNo }));
  for (const { text, no } of lines) {
    if (!text.trim() || /^\s*<!--.*-->\s*$/.test(text)) continue;
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
      } else findings.push(finding("ID_INVALID", no));
    }
    let hasHours = false;
    let bad = false;
    for (; ; ) {
      let t;
      if (t = /\s*\[approval(:\s*[^\]]*)?\]\s*$/.exec(body)) {
        item.kind = "approval";
        if (t[1]) findings.push(finding("APPROVAL_HASH_LEGACY", no));
      } else if (t = /\s*\[hours:\s*([^\]]*)\]\s*$/.exec(body)) {
        hasHours = true;
        const h = parseHours(t[1]);
        if (h === null) {
          findings.push(finding("HOURS_INVALID", no, { value: t[1].trim() }));
          bad = true;
        } else item.minutes = h;
      } else if (t = /\s+@(\S+)\s*$/.exec(body)) {
        if (USERNAME2.test(t[1])) item.assignee = t[1];
        else {
          findings.push(finding("ITEM_LINE_INVALID", no, { n: no }));
          bad = true;
        }
      } else break;
      body = body.slice(0, t.index);
    }
    item.title = body.trim();
    if (item.title.length < 1 || item.title.length > 200) {
      findings.push(finding("ITEM_TITLE_INVALID", no, { n: no }));
      continue;
    }
    if (item.kind === "approval" && (item.assignee || hasHours)) findings.push(finding("APPROVAL_ITEM_INVALID", no));
    if (!bad) checklist.items.push(item);
  }
  return { checklist, findings, ids };
}

// src/decisions.ts
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
    } else findings.push(finding("ID_INVALID", headerNo));
  }
  decision.question = question.trim();
  if (decision.question.length < 1 || decision.question.length > 300) findings.push(finding("DECISION_TITLE_INVALID", headerNo, { n: headerNo }));
  const keys = /* @__PURE__ */ new Set();
  for (const { text, no } of lines) {
    if (!text.trim()) continue;
    const a = ANSWER.exec(text);
    if (a) {
      const v = ANSWER_VALUE.exec(a[1].trim());
      if (!v) findings.push(finding("DECISION_LINE_INVALID", no, { n: no }));
      else decision.answer = { key: v[1], note: v[2]?.trim() || null };
      continue;
    }
    const o = OPTION.exec(text);
    if (!o) {
      findings.push(finding("DECISION_LINE_INVALID", no, { n: no }));
      continue;
    }
    const t = o[2].trim();
    if (!/^[A-F]$/.test(o[1]) || keys.has(o[1]) || t.length < 1 || t.length > 200) {
      findings.push(finding("DECISION_OPTION_INVALID", no, { n: no }));
      continue;
    }
    keys.add(o[1]);
    decision.options.push({ key: o[1], text: t });
  }
  if (decision.options.length < 2 || decision.options.length > 6) findings.push(finding("DECISION_OPTIONS_COUNT", headerNo));
  return { decision, findings, ids };
}

// src/body.ts
function parseBody(lines, firstNo) {
  const findings = [];
  const desc = [];
  const blocks = [];
  let fence = false;
  let order = { refs: 0, decision: 0, checklist: 0 };
  lines.forEach((text, i) => {
    const no = firstNo + i;
    if (/^\s*(```|~~~)/.test(text)) fence = !fence;
    let kind = null;
    let rest = "";
    if (!fence) {
      if (text.trimEnd() === "## Refs") kind = "refs";
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
      if (bad) findings.push(finding("SECTION_ORDER", no));
      order[kind]++;
      blocks.push({ kind, header: { text, no }, rest, lines: [] });
    } else if (blocks.length) blocks[blocks.length - 1].lines.push({ text, no });
    else desc.push(text);
  });
  while (desc.length && !desc[0].trim()) desc.shift();
  while (desc.length && !desc[desc.length - 1].trim()) desc.pop();
  const description = desc.join("\n");
  if (description.length > 8e3) findings.push(finding("DESCRIPTION_TOO_LONG", null, { n: description.length }));
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
  if (out.decisions.length > 5) findings.push(finding("DECISION_LIMIT_REACHED", null));
  return out;
}

// src/frontmatter.ts
var import_yaml = require("yaml");
var ERROR_LINE = /^<!--\s*RODO_ERROR:.*-->\s*$/;
function splitCard(input) {
  const findings = [];
  const bom = input.charCodeAt(0) === 65279;
  const text = bom ? input.slice(1) : input;
  if (text.includes("\uFFFD")) findings.push(finding("ENCODING_INVALID", null));
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  const trailingNewline = /\n$/.test(text);
  const lines = text.split(/\r?\n/);
  if (trailingNewline) lines.pop();
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
    if (fmEnd < 0) findings.push(finding("FRONTMATTER_UNCLOSED", first + 1));
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
        if (!(0, import_yaml.isScalar)(pair.key)) continue;
        const k = String(pair.key.value);
        order.push(k);
        const off = pair.key.range?.[0] ?? 0;
        keyLine[k] = base + lc.linePos(off).line;
      }
    }
  }
  return { data, order, keyLine, findings };
}

// src/secrets.ts
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
  while (m = re.exec(line)) out.push([m.index, m.index + m[0].length]);
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
      if (!m) continue;
      if (inCode(m.index) && assignCovers(m.index) && kind !== "private-key") {
        if (!fence?.example) hits.push({ kind: "assignment", line: n, possible: true });
        assignHandled = true;
        continue;
      }
      hits.push({ kind, line: n, possible: false });
    }
    if (assign && !assignHandled) {
      if (inCode(assign.index)) {
        if (!fence?.example) hits.push({ kind: "assignment", line: n, possible: true });
      } else hits.push({ kind: "assignment", line: n, possible: false });
    }
  });
  return hits;
}

// src/status-reason.ts
function readLegacyReason(description, status) {
  const label = status === "blocked" ? "Blocker" : status === "cancelled" ? "Cancelled" : null;
  if (!label) return null;
  const m = new RegExp(`^\\s*-\\s*${label}:[ \\t]*(.*?)[ \\t]*$`, "m").exec(description.replace(/\r\n?/g, "\n"));
  const v = m?.[1]?.trim() ?? "";
  return v === "" || v.toLowerCase() === "none" ? null : v.slice(0, 500);
}

// src/parse.ts
var isError = (f) => severityOf(f.code) !== "W";
function parseCardFull(text) {
  const sp = splitCard(text);
  const findings = [...sp.findings];
  if (sp.fmStart < 0 || sp.fmEnd < 0) return { model: null, findings, info: null };
  const fm = parseFrontmatter(sp.lines, sp.fmStart, sp.fmEnd);
  findings.push(...fm.findings);
  if (fm.findings.length) return { model: null, findings, info: null };
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
    if (seen.has(id)) findings.push(finding("ID_DUPLICATE", no, { id }));
    seen.add(id);
  }
  const kl = (k) => fm.keyLine[k] ?? null;
  if (m.schemaVersion === 1 && fm.data.schemaVersion === 1) findings.push(finding("SCHEMA_V1", kl("schemaVersion")));
  if (m.startAt && m.dueAt && (dateMs(m.startAt) ?? 0) > (dateMs(m.dueAt) ?? 0)) findings.push(finding("DATE_RANGE", kl("startAt")));
  if (m.financial.type !== "none" && m.members.length !== 1) findings.push(finding("FINANCIAL_CARD_SINGLE_MEMBER", kl("financial")));
  const hasItems = m.checklists.some((c) => c.items.length > 0);
  if (f.hoursSet && hasItems) findings.push(finding("CARD_HOURS_WITH_ITEMS", kl("hours")));
  const hold = m.status === "blocked" || m.status === "cancelled";
  const reasonBad = findings.some((x) => x.code === "STATUS_REASON_INVALID");
  if (hold && !m.statusReason && !reasonBad) {
    const legacy = readLegacyReason(m.description, m.status);
    if (legacy) {
      m.statusReason = legacy;
      findings.push(finding("STATUS_REASON_FROM_NOTES", kl("status")));
    } else findings.push(finding(m.status === "blocked" ? "BLOCKER_REASON_MISSING" : "CANCEL_REASON_MISSING", kl("status")));
  }
  if (!hold && m.statusReason) findings.push(finding("STATUS_REASON_WITHOUT_HOLD", kl("statusReason")));
  if (m.status === "blocked" && !m.blockerType && !findings.some((x) => x.code === "BLOCKER_TYPE_INVALID")) {
    findings.push(finding("BLOCKER_TYPE_MISSING", kl("status")));
  }
  if (m.status !== "blocked" && m.blockerType) findings.push(finding("BLOCKER_TYPE_WITHOUT_BLOCKED", kl("blockerType")));
  const approvals = m.checklists.flatMap((c) => c.items).filter((i) => i.kind === "approval");
  if (approvals.length > 1) findings.push(finding("APPROVAL_ITEM_DUPLICATE", null));
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

// src/serialize.ts
var import_yaml2 = require("yaml");
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
  if (m.id) kv("id", scalar(m.id));
  if (m.tempId) kv("tempId", scalar(m.tempId));
  if (m.boardId) kv("boardId", scalar(m.boardId));
  kv("title", scalar(m.title));
  kv("status", m.status);
  if (m.statusReason) kv("statusReason", scalar(m.statusReason));
  if (m.blockerType) kv("blockerType", m.blockerType);
  if (m.list) kv("list", scalar(m.list));
  if (m.priority !== "none") kv("priority", m.priority);
  if (m.members.length) kv("members", flowList(m.members));
  if (m.labels.length) kv("labels", flowList(m.labels));
  if (m.startAt) kv("startAt", m.startAt.includes(":") ? JSON.stringify(m.startAt) : m.startAt);
  if (m.dueAt) kv("dueAt", m.dueAt.includes(":") ? JSON.stringify(m.dueAt) : m.dueAt);
  if (m.coverColor) kv("coverColor", m.coverColor);
  if (m.hoursMinutes !== null) kv("hours", fmtHours(m.hoursMinutes));
  const f = m.financial;
  if (f.type !== "none" || f.amount !== 0 || f.category !== "general" || f.date) {
    o.push("financial:", `  type: ${f.type}`, `  amount: ${f.amount}`, `  category: ${scalar(f.category)}`);
    if (f.date) o.push(`  date: ${f.date}`);
  }
  if (m.scope) o.push("scope:", `  allowed: ${flowList(m.scope.allowed)}`, `  forbidden: ${flowList(m.scope.forbidden)}`);
  if (m.test) o.push("test:", `  adapter: ${m.test.adapter}`, `  command: ${JSON.stringify(m.test.command)}`);
  if (m.workflow) kv("workflow", m.workflow);
  if (m.updatedAt !== null) kv("updatedAt", String(m.updatedAt));
  if (m.locked) kv("locked", "true");
  for (const [k, v] of Object.entries(m.extras)) {
    o.push(...(0, import_yaml2.stringify)({ [k]: v }).replace(/\n$/, "").split("\n"));
  }
  return o;
}
function bodyLines(m) {
  const o = [];
  const block = (...lines) => {
    if (o.length) o.push("");
    o.push(...lines);
  };
  if (m.description) block(...m.description.split("\n"));
  if (m.refs.length) {
    block("## Refs", "");
    for (const r of m.refs) {
      const p = /\s/.test(r.path) ? `<${r.path}>` : r.path;
      o.push(`- [${r.title}](${p})${r.id ? ` <!-- rodo:ref_${r.id} -->` : ""}`);
    }
  }
  for (const d of m.decisions) {
    block(`## Decision: ${d.question}${d.id ? ` <!-- rodo:dec_${d.id} -->` : ""}`, "");
    for (const op of d.options) o.push(`- ${op.key}: ${op.text}`);
    if (d.answer) o.push(`- Answer: ${d.answer.key}${d.answer.note ? ` \u2014 ${d.answer.note}` : ""}`);
  }
  for (const c of m.checklists) {
    block(`## Checklist: ${c.title}${c.id ? ` <!-- rodo:chk_${c.id} -->` : ""}`, "");
    for (const i of c.items) {
      o.push(
        `- [${i.isDone ? "x" : " "}] ${i.title}` + (i.assignee ? ` @${i.assignee}` : "") + (i.minutes > 0 ? ` [hours: ${fmtHours(i.minutes)}]` : "") + (i.kind === "approval" ? " [approval]" : "") + (i.id ? ` <!-- rodo:ckl_${i.id} -->` : "")
      );
    }
  }
  return o;
}
function serializeCard(m, opts = {}) {
  const sp = opts.original !== void 0 ? splitCard(opts.original) : null;
  const eol = opts.eol ?? sp?.eol ?? "\n";
  const lines = ["---", ...frontmatterLines(m), "---"];
  const body = bodyLines(m);
  if (body.length) lines.push("", ...body);
  const text = lines.join(eol) + (sp ? sp.trailingNewline ? eol : "" : eol);
  return (sp?.bom ? "\uFEFF" : "") + text;
}

// src/board-checks.ts
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
    if (!l) out.push(finding("UNKNOWN_LIST", keyLine.list ?? null, { list: m.list }));
    else if (need && l.workflowRole !== need) out.push(finding("LIST_STATUS_MISMATCH", keyLine.list ?? null, { list: m.list, status: m.status }));
  }
  const users = new Set(meta.members.map((x) => x.username));
  for (const u of m.members) if (!users.has(u)) out.push(finding("UNKNOWN_MEMBER", keyLine.members ?? null, { username: u }));
  const names = new Set(meta.labels.map((x) => x.name));
  for (const l of m.labels) if (!names.has(l)) out.push(finding("UNKNOWN_LABEL", keyLine.labels ?? null, { label: l }));
  for (const c of m.checklists) {
    for (const i of c.items) {
      if (i.assignee && !users.has(i.assignee)) out.push(finding("UNKNOWN_MEMBER", null, { username: i.assignee }));
    }
  }
  return out;
}

// src/hints.ts
var CYCLE_FOLDER = /^[0-9]{3}-[a-z0-9]+(-[a-z0-9]+)*$/;
function methodHints(m, ctx, hasRefsSection) {
  const out = [];
  const seg = ctx.relPath.replace(/\\/g, "/").split("/");
  const cyc = seg[0] === "cycles" && seg.length >= 3;
  const folder = cyc ? seg[1] : null;
  const active = m.status === "todo" || m.status === "in_progress";
  if (/\.rodo\.md$/i.test(ctx.relPath) && !/\.rodo\.md$/.test(ctx.relPath)) out.push(finding("FILE_EXT_CASE", null));
  if (cyc && folder) {
    if (!CYCLE_FOLDER.test(folder)) out.push(finding("CYCLE_FOLDER_NAME", null));
    if (seg.length !== 3 || seg[2].toLowerCase() !== "card.rodo.md") out.push(finding("CYCLE_CARD_NAME", null));
    if (!ctx.siblingFiles.includes("simple.md")) out.push(finding("CYCLE_SIMPLE_MISSING", null));
    const own = `/cycles/${folder}/simple.md`;
    if (!hasRefsSection || !m.refs.some((r) => r.path.split("#")[0].endsWith(own))) out.push(finding("CYCLE_REFS_MISSING", null));
    if ((m.status === "in_progress" || m.status === "blocked") && !/^## Progress notes\s*$/m.test(m.description)) {
      out.push(finding("PROGRESS_NOTES_MISSING", null));
    }
    if (m.status === "cancelled" && ctx.mapText !== null && !listedInMap(ctx.mapText, folder, MAP_HEADINGS.cancelled)) {
      out.push(finding("CYCLE_CANCELLED_NOT_IN_MAP", null));
    }
    if (m.status === "done" && ctx.mapText !== null && !listedInMap(ctx.mapText, folder, MAP_HEADINGS.done)) {
      out.push(finding("CYCLE_DONE_NOT_IN_MAP", null));
    }
    if (active && ctx.siblingFiles.includes("spec.md") && !m.scope) out.push(finding("SCOPE_MISSING", null));
    if (active && m.workflow === "major" && !ctx.siblingFiles.includes("design.md")) out.push(finding("DESIGN_MISSING", null));
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
    if (!isHead(lines[start])) continue;
    for (let i = start + 1; i < lines.length && !lines[i].startsWith("## "); i++) {
      if (link.test(lines[i])) return true;
    }
  }
  return false;
}

// src/validate.ts
var BOARD_PLACEHOLDER = "SET-AFTER-RODO-INIT";
function validateCard(text, ctx) {
  const p = parseCardFull(text);
  const out = [...p.findings];
  const m = p.model;
  const info = p.info;
  if (m && info) {
    const kl = (k) => info.keyLine[k] ?? null;
    const base = ctx.base;
    if (m.boardId === BOARD_PLACEHOLDER && !ctx.boundBoardId) out.push(finding("BOARD_ID_PLACEHOLDER", kl("boardId")));
    else if (m.boardId && ctx.boundBoardId && m.boardId !== ctx.boundBoardId) {
      out.push(finding("BOARD_MISMATCH", kl("boardId"), { boardId: ctx.boundBoardId }));
    }
    const dup = m.id ? ctx.knownIds?.[m.id] : void 0;
    if (dup && dup !== ctx.relPath) out.push(finding("CARD_ID_DUPLICATE", kl("id"), { path: dup }));
    if (base) {
      if (info.fileUpdatedAt !== void 0 && info.fileUpdatedAt !== null && info.fileUpdatedAt !== base.updatedAt && !out.some((f) => f.code === "UPDATED_AT_EDITED")) out.push(finding("UPDATED_AT_EDITED", kl("updatedAt")));
      m.updatedAt = base.updatedAt;
    }
    const lockedNow = base?.locked ?? false;
    if (info.fileLocked !== void 0 && info.fileLocked !== null && info.fileLocked !== lockedNow && !out.some((f) => f.code === "LOCKED_EDITED")) out.push(finding("LOCKED_EDITED", kl("locked")));
    m.locked = lockedNow;
    for (const r of m.refs) {
      if (ctx.repoFileExists(refPathOnly(r.path))) continue;
      const known = base?.refs.some((b) => b.path === r.path);
      out.push(finding(known ? "REF_MISSING_LOCAL" : "REF_NOT_FOUND", null, { path: r.path }));
    }
    out.push(...decisionRules(m, base));
    out.push(...approvalRules(m, base));
    if (ctx.meta) out.push(...boardChecks(m, ctx.meta, info.keyLine));
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
      if (!same) out.push(finding("DECISION_ANSWERED_READONLY", null, { question: b.question }));
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
    if (l.isDone && !inBase && (base || !l.id)) out.push(finding("APPROVAL_REQUIRES_HUMAN", null, { title: l.title }));
  }
  return out;
}

// src/canonical.ts
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
    for (let i = 0; i < 16; i++) w2[i] = view.getUint32(off + i * 4);
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
  if (v === null || typeof v !== "object") return JSON.stringify(v) ?? "null";
  if (Array.isArray(v)) return `[${v.map(stableStringify).join(",")}]`;
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

// src/signature.ts
function normalizeFailureMessage(s) {
  return s.replace(/\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?/g, "<ts>").replace(/\d{4}-\d{2}-\d{2}/g, "<date>").replace(/\b\d{1,2}:\d{2}:\d{2}(\.\d+)?\b/g, "<time>").replace(/(?:[A-Za-z]:\\|\/)(?:[^\s:'"()<>|]+[\\/])+[^\s:'"()<>|]*/g, "<path>").replace(/\b(\d+(\.\d+)?)\s?(ms|s|sec|secs|seconds|min|m)\b/g, "<dur>").replace(/:\d{2,5}\b/g, ":<port>").replace(/\b[0-9a-f]{8,}\b/gi, "<hex>").replace(/\d{4,}/g, "<n>").replace(/\s+/g, " ").trim();
}
function failureSignature(i) {
  const hex = sha256Hex([i.adapter, i.scenario, i.step, i.errorType, normalizeFailureMessage(i.message)].join("|"));
  return { full: `sha256:${hex}`, short: hex.slice(0, 12) };
}

// src/diff.ts
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
  if (!b || !fieldEquals("title", b.title, l.title)) set.title = l.title;
  if (!b || b.isDone !== l.isDone) set.isDone = l.isDone;
  if (!b || (b.assignee ?? null) !== (l.assignee ?? null)) set.assignee = l.assignee;
  if (!b || b.minutes !== l.minutes) set.minutes = l.minutes;
  if (!b) set.kind = l.kind;
  return Object.keys(set).length ? set : void 0;
}
function checklistOp(b, l, order, seq) {
  const items = [];
  let prev = null;
  for (const li of l.items) {
    const n = seq.n++;
    const bi = li.id ? b?.items.find((x) => x.id === li.id) : void 0;
    const key = itemKey(li, n);
    if (!bi) {
      if (li.kind === "approval" && li.isDone) {
        prev = li.id ?? prev;
        continue;
      }
      items.push({ tempId: li.id ? void 0 : key, id: li.id, set: itemSet(void 0, li), after: prev });
    } else if (bi.kind === "approval") {
    } else {
      const set = itemSet(bi, li);
      if (set) items.push({ id: li.id, set });
    }
    prev = li.id ?? key;
  }
  for (const bi of b?.items ?? []) {
    if (bi.kind === "approval") continue;
    if (!l.items.some((x) => x.id === bi.id)) items.push({ id: bi.id, delete: true });
  }
  const titleChanged = !b || !fieldEquals("title", b.title, l.title);
  if (!items.length && !titleChanged && order === null) return null;
  return { id: l.id, tempId: l.id ? void 0 : `tmp_c_${seq.n++}`, title: titleChanged ? l.title : null, order, items };
}
function diffModels(base, local) {
  const fields = {};
  const eq = fieldEquals;
  if (!eq("title", base.title, local.title)) fields.title = local.title;
  if (!eq("description", base.description, local.description)) fields.description = local.description;
  if (!eq("status", statusGroup(base), statusGroup(local))) {
    const g = statusGroup(local);
    fields.status = (base.list ?? null) === (local.list ?? null) ? { ...g, list: null } : g;
  }
  if (base.priority !== local.priority) fields.priority = local.priority;
  if ((base.coverColor ?? null) !== (local.coverColor ?? null)) fields.coverColor = local.coverColor;
  if (!eq("startAt", base.startAt, local.startAt)) fields.startAt = local.startAt;
  if (!eq("dueAt", base.dueAt, local.dueAt)) fields.dueAt = local.dueAt;
  if (!eq("hours", base.hoursMinutes, local.hoursMinutes)) fields.hours = local.hoursMinutes;
  if (!eq("financial", base.financial, local.financial)) fields.financial = local.financial;
  if (!eq("scope", base.scope, local.scope)) fields.scope = local.scope ?? { allowed: [], forbidden: [] };
  if (!eq("test", base.test, local.test)) fields.test = local.test;
  const out = {};
  if (Object.keys(fields).length) out.fields = fields;
  const members = setOps(base.members, local.members);
  if (members) out.members = members;
  const labels = setOps(base.labels, local.labels);
  if (labels) out.labels = labels;
  const refKey = (r) => r.id ?? r.path;
  const refs = {
    add: local.refs.filter((r) => !base.refs.some((b) => refKey(b) === refKey(r) || b.path === r.path)).map((r) => ({ title: r.title, path: r.path })),
    remove: base.refs.filter((b) => !local.refs.some((r) => refKey(b) === refKey(r) || b.path === r.path)).map((b) => ({ title: b.title, path: b.path })),
    retitle: local.refs.flatMap((r) => {
      const b = base.refs.find((x) => x.id && x.id === r.id);
      return b && !eq("title", b.title, r.title) ? [{ id: r.id, title: r.title }] : [];
    })
  };
  if (refs.add.length || refs.remove.length || refs.retitle.length) out.refs = refs;
  const seq = { n: 1 };
  const cops = [];
  let pos = 0;
  for (const l of local.checklists) {
    const b = l.id ? base.checklists.find((x) => x.id === l.id) : void 0;
    const baseIdx = b ? base.checklists.indexOf(b) : -1;
    const op = checklistOp(b, l, b && baseIdx !== pos ? pos : null, seq);
    if (op) cops.push(op);
    pos++;
  }
  if (cops.length) out.checklists = cops;
  const dops = [];
  let dn = 1;
  for (const d of local.decisions) {
    const b = d.id ? base.decisions.find((x) => x.id === d.id) : void 0;
    const set = { question: d.question, options: d.options };
    if (!b) dops.push({ tempId: d.id ? void 0 : `tmp_d_${dn++}`, id: d.id, set });
    else if (!b.answer) {
      const same = eq("text", b.question, d.question) && b.options.length === d.options.length && b.options.every((o, i) => o.key === d.options[i].key && eq("text", o.text, d.options[i].text));
      if (!same) dops.push({ id: d.id, set });
    }
  }
  for (const b of base.decisions) {
    if (!b.answer && !local.decisions.some((d) => d.id === b.id)) dops.push({ id: b.id, withdraw: true });
  }
  if (dops.length) out.decisions = dops;
  return out;
}
var isEmptyChanges = (c) => Object.keys(c).length === 0;

// src/merge.ts
function decideConflict(i) {
  const clientAt = Math.min(i.editedAt, i.serverNowMs);
  return clientAt > i.serverAt + 2e3 ? "client" : "server";
}
function mergeField(field, base, local, remote) {
  const localChanged = !fieldEquals(field, base, local);
  const remoteChanged = !fieldEquals(field, base, remote);
  if (!localChanged) return { value: remote, push: false, conflict: false };
  if (!remoteChanged) return { value: local, push: true, conflict: false };
  if (fieldEquals(field, local, remote)) return { value: remote, push: false, conflict: false };
  return { value: local, push: true, conflict: true };
}
function mergeSet(base, local, remote) {
  const add = local.filter((x) => !base.includes(x));
  const rem = base.filter((x) => !local.includes(x));
  return [...remote.filter((x) => !rem.includes(x)), ...add.filter((x) => !remote.includes(x))];
}
function mergeChildren(base, local, remote, eq, mergeOne = (b, l, r) => {
  if (eq(b, l)) return { value: r, conflict: false };
  if (eq(b, r) || eq(l, r)) return { value: l, conflict: false };
  return { value: l, conflict: true };
}) {
  const byId = (xs, id) => id ? xs.find((x) => x.id === id) : void 0;
  const merged = [];
  const deletedOnServer = [];
  let conflicts = 0;
  for (const r of remote) {
    const b = byId(base, r.id);
    const l = byId(local, r.id);
    if (b && !l) {
      if (!eq(b, r)) merged.push(r);
      continue;
    }
    if (b && l) {
      const m = mergeOne(b, l, r);
      if (m.conflict) conflicts++;
      merged.push(m.value);
    } else merged.push(r);
  }
  for (const b of base) {
    if (byId(remote, b.id)) continue;
    const l = byId(local, b.id);
    if (l && !eq(b, l)) deletedOnServer.push(l);
  }
  local.forEach((l, i) => {
    if (l.id && (byId(base, l.id) || byId(remote, l.id))) return;
    const prev = i > 0 ? local[i - 1].id : void 0;
    const at = prev ? merged.findIndex((x) => x.id === prev) : -1;
    merged.splice(at >= 0 ? at + 1 : merged.length, 0, l);
  });
  return { merged, deletedOnServer, conflicts };
}
var itemEq = (a, b) => fieldEquals("title", a.title, b.title) && a.isDone === b.isDone && (a.assignee ?? null) === (b.assignee ?? null) && a.minutes === b.minutes && a.kind === b.kind;
function mergeItem(b, l, r) {
  if (r.kind === "approval" || b.kind === "approval") return { value: r, conflict: false };
  let conflict = false;
  const pick = (k, f = String(k)) => {
    const m = mergeField(f, b[k], l[k], r[k]);
    conflict ||= m.conflict;
    return m.value;
  };
  return {
    value: { ...r, title: pick("title"), isDone: pick("isDone"), assignee: pick("assignee"), minutes: pick("minutes") },
    conflict
  };
}
function mergeChecklist(b, l, r) {
  const t = mergeField("title", b.title, l.title, r.title);
  const items = mergeChildren(b.items, l.items, r.items, itemEq, mergeItem);
  return { value: { ...r, title: t.value, items: items.merged }, conflict: t.conflict || items.conflicts > 0 };
}
var checklistEq = (a, b) => fieldEquals("title", a.title, b.title) && a.items.length === b.items.length && a.items.every((x, i) => itemEq(x, b.items[i]));
var decisionEq = (a, b) => fieldEquals("text", a.question, b.question) && a.options.length === b.options.length && a.options.every((o, i) => o.key === b.options[i].key && fieldEquals("text", o.text, b.options[i].text)) && a.answer?.key === b.answer?.key;
function threeWay(base, local, remote) {
  const conflicts = [];
  const w2 = structuredClone(remote);
  const take = (name, field, b, l, r) => {
    const m = mergeField(field, b, l, r);
    if (m.conflict) conflicts.push(name);
    return m.value;
  };
  w2.title = take("title", "title", base.title, local.title, remote.title);
  w2.description = take("description", "description", base.description, local.description, remote.description);
  const sg = take("status", "status", statusGroup(base), statusGroup(local), statusGroup(remote));
  w2.status = sg.status;
  w2.list = sg.list ?? void 0;
  w2.statusReason = sg.statusReason;
  w2.blockerType = sg.blockerType;
  w2.priority = take("priority", "priority", base.priority, local.priority, remote.priority);
  w2.coverColor = take("coverColor", "coverColor", base.coverColor, local.coverColor, remote.coverColor);
  w2.startAt = take("startAt", "startAt", base.startAt, local.startAt, remote.startAt);
  w2.dueAt = take("dueAt", "dueAt", base.dueAt, local.dueAt, remote.dueAt);
  w2.hoursMinutes = take("hours", "hours", base.hoursMinutes, local.hoursMinutes, remote.hoursMinutes);
  w2.financial = take("financial", "financial", base.financial, local.financial, remote.financial);
  w2.scope = take("scope", "scope", base.scope, local.scope, remote.scope);
  w2.test = take("test", "test", base.test, local.test, remote.test);
  w2.members = mergeSet(base.members, local.members, remote.members);
  w2.labels = mergeSet(base.labels, local.labels, remote.labels);
  const added = local.refs.filter((r) => !base.refs.some((b) => b.path === r.path));
  const removed = base.refs.filter((b) => !local.refs.some((r) => r.path === b.path)).map((b) => b.path);
  w2.refs = [...remote.refs.filter((r) => !removed.includes(r.path)), ...added.filter((a) => !remote.refs.some((r) => r.path === a.path))].map((r) => {
    const l = local.refs.find((x) => x.id && x.id === r.id);
    const b = base.refs.find((x) => x.id && x.id === r.id);
    return l && b && fieldEquals("title", r.title, b.title) ? { ...r, title: l.title } : r;
  });
  const cl = mergeChildren(base.checklists, local.checklists, remote.checklists, checklistEq, mergeChecklist);
  w2.checklists = cl.merged;
  if (cl.conflicts) conflicts.push("checklists");
  const dec = mergeChildren(base.decisions, local.decisions, remote.decisions, decisionEq, (b, l, r) => r.answer ? { value: r, conflict: false } : decisionEq(b, l) ? { value: r, conflict: false } : { value: l, conflict: !decisionEq(b, r) && !decisionEq(l, r) });
  w2.decisions = dec.merged;
  if (dec.conflicts) conflicts.push("decisions");
  w2.workflow = local.workflow;
  w2.extras = local.extras;
  w2.schemaVersion = 2;
  return { push: diffModels(base, local), write: w2, conflicts };
}
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
function modelToCardState(m) {
  return {
    title: m.title,
    description: m.description,
    status: m.status,
    list: m.list ?? "",
    statusReason: m.statusReason,
    blockerType: m.blockerType,
    priority: m.priority,
    coverColor: m.coverColor,
    startAt: m.startAt,
    dueAt: m.dueAt,
    hours: m.hoursMinutes,
    financial: { ...m.financial },
    scope: m.scope ? { ...m.scope } : { allowed: [], forbidden: [] },
    test: m.test ? { ...m.test } : { adapter: null, command: null },
    members: [...m.members],
    labels: [...m.labels],
    locked: m.locked,
    refs: m.refs.map((r) => ({ id: r.id ?? "", title: r.title, path: r.path })),
    decisions: m.decisions.map((d) => ({
      id: d.id ?? "",
      question: d.question,
      options: d.options.map((o) => ({ ...o })),
      state: d.answer ? "answered" : "open",
      answer: d.answer ? { key: d.answer.key, note: d.answer.note, by: "", at: 0 } : null
    })),
    checklists: m.checklists.map((c) => ({
      id: c.id ?? "",
      title: c.title,
      rev: "0",
      items: c.items.map((i) => ({ id: i.id ?? "", title: i.title, isDone: i.isDone, assignee: i.assignee, minutes: i.minutes, kind: i.kind, rev: "0" }))
    }))
  };
}

// src/progress-notes.ts
var HEAD = /^## Progress notes\s*$/m;
function progressSection(description) {
  const m = HEAD.exec(description);
  if (!m) return null;
  const rest = description.slice(m.index + m[0].length);
  const next = /^## /m.exec(rest);
  return (m[0] + (next ? rest.slice(0, next.index) : rest)).trimEnd();
}
function keepProgressNotes(incoming, local) {
  if (!local || HEAD.test(incoming)) return incoming;
  const sec = progressSection(local);
  if (!sec) return incoming;
  return incoming.trim() ? `${incoming.trimEnd()}

${sec}` : sec;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CODES,
  SYNC_CODES,
  canonicalHash,
  cardStateToModel,
  decideConflict,
  decodeCardBytes,
  deepEqual,
  diffModels,
  emptyModel,
  failureSignature,
  fieldEquals,
  finding,
  isEmptyChanges,
  isError,
  keepProgressNotes,
  mergeChildren,
  mergeField,
  mergeSet,
  modelToCardState,
  normText,
  normalizeFailureMessage,
  normalizeForCompare,
  parseCard,
  parseCardFull,
  progressSection,
  readLegacyReason,
  scanSecrets,
  serializeCard,
  severityOf,
  sha256Hex,
  statusGroup,
  threeWay,
  validateCard
});
