import {
  Form,
  Link,
  useActionData,
  useMatches,
  useNavigation,
  useParams
} from "/build/_shared/chunk-7T7VOSOK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-I6YOHPB4.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/expenses/ExpenseForm.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\expenses\\\\ExpenseForm.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\expenses\\ExpenseForm.jsx"
  );
  import.meta.hot.lastModified = "1708927473936.348";
}
function ExpenseForm() {
  _s();
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const validationErrors = useActionData();
  const params = useParams();
  const matches = useMatches();
  const expenses = matches.find((match) => match.id === "routes/expenses").data;
  const expenseData = expenses.find((expense) => expense.id === params.id);
  if (params.id && !expenseData) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Invalid expense id." }, void 0, false, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 37,
      columnNumber: 12
    }, this);
  }
  const navigation = useNavigation();
  const defaultValues = expenseData ? {
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date
  } : {
    title: "",
    amount: "",
    date: ""
  };
  const isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Form,
    {
      method: expenseData ? "patch" : "post",
      className: "form",
      id: "expense-form",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", children: "Expense Title" }, void 0, false, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "title", name: "title", required: true, maxLength: 30, defaultValue: defaultValues.title }, void 0, false, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 66,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "amount", children: "Amount" }, void 0, false, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "amount", name: "amount", min: "0", step: "0.01", required: true, defaultValue: defaultValues.amount }, void 0, false, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 74,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "date", children: "Date" }, void 0, false, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 77,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", id: "date", name: "date", max: today, required: true, defaultValue: defaultValues.date ? defaultValues.date.slice(0, 10) : "" }, void 0, false, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 78,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 76,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 71,
          columnNumber: 7
        }, this),
        validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: error }, error, false, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 82,
          columnNumber: 57
        }, this)) }, void 0, false, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 81,
          columnNumber: 28
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Saving..." : "Save Expense" }, void 0, false, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 85,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", children: "Cancel" }, void 0, false, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 88,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 84,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 63,
      columnNumber: 10
    },
    this
  );
}
_s(ExpenseForm, "wJzwgE6KkgsIn5e+zbHhPudKViY=", false, function() {
  return [useActionData, useParams, useMatches, useNavigation];
});
_c = ExpenseForm;
var ExpenseForm_default = ExpenseForm;
var _c;
$RefreshReg$(_c, "ExpenseForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/util/Modal.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\util\\\\Modal.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\util\\Modal.jsx"
  );
  import.meta.hot.lastModified = "1668767008000";
}
function Modal({
  children,
  onClose
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dialog", { className: "modal", open: true, onClick: (event) => event.stopPropagation(), children }, void 0, false, {
    fileName: "app/components/util/Modal.jsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/util/Modal.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = Modal;
var Modal_default = Modal;
var _c2;
$RefreshReg$(_c2, "Modal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ExpenseForm_default,
  Modal_default
};
//# sourceMappingURL=/build/_shared/chunk-57VOMHZT.js.map
