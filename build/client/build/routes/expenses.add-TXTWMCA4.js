import {
  ExpenseForm_default,
  Modal_default
} from "/build/_shared/chunk-57VOMHZT.js";
import {
  require_validation
} from "/build/_shared/chunk-PCBPXI2I.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_expenses
} from "/build/_shared/chunk-WWD72HKS.js";
import {
  require_auth
} from "/build/_shared/chunk-C35NKL4E.js";
import {
  useNavigate
} from "/build/_shared/chunk-7T7VOSOK.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-I6YOHPB4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/expenses.add.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_expenses = __toESM(require_expenses(), 1);
var import_validation = __toESM(require_validation(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\expenses.add.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\expenses.add.tsx"
  );
  import.meta.hot.lastModified = "1710099286409.7454";
}
function AddExpensesPage() {
  _s();
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpenseForm_default, {}, void 0, false, {
    fileName: "app/routes/expenses.add.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/expenses.add.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(AddExpensesPage, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c = AddExpensesPage;
var _c;
$RefreshReg$(_c, "AddExpensesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddExpensesPage as default
};
//# sourceMappingURL=/build/routes/expenses.add-TXTWMCA4.js.map
