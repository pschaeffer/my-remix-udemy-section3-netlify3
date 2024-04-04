import {
  require_expenses
} from "/build/_shared/chunk-WWD72HKS.js";
import {
  Logo_default,
  MainHeader_default
} from "/build/_shared/chunk-6J5W6JJ5.js";
import {
  FaDownload,
  FaPlus
} from "/build/_shared/chunk-6YI3ZSRX.js";
import {
  require_auth
} from "/build/_shared/chunk-C35NKL4E.js";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  useFetcher,
  useLoaderData,
  useLocation
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

// app/components/expenses/ExpenseListItem.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\expenses\\\\ExpenseListItem.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\expenses\\ExpenseListItem.jsx"
  );
  import.meta.hot.lastModified = "1708921105618.7722";
}
function ExpenseListItem({
  id,
  title,
  amount
}) {
  _s();
  const fetcher = useFetcher();
  function deleteExpenseItemHandler() {
    const proceed = confirm("Are you sure? Do you want to delete this item?");
    if (!proceed) {
      return;
    }
    fetcher.submit(null, {
      method: "delete",
      action: `/expenses/${id}`
    });
  }
  if (fetcher.state !== "idle") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "expense-item locked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Deleting..." }, void 0, false, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 46,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "expense-item", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "expense-title", children: title }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "expense-amount", children: [
        "$",
        amount.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("menu", { className: "expense-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: deleteExpenseItemHandler, children: "Delete" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: id, children: "Edit" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(ExpenseListItem, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c = ExpenseListItem;
var ExpenseListItem_default = ExpenseListItem;
var _c;
$RefreshReg$(_c, "ExpenseListItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/expenses/ExpensesList.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\expenses\\\\ExpensesList.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\expenses\\ExpensesList.jsx"
  );
  import.meta.hot.lastModified = "1668767008000";
}
function ExpensesList({
  expenses
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExpenseListItem_default, { id: expense.id, title: expense.title, amount: expense.amount }, void 0, false, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 27,
    columnNumber: 11
  }, this) }, expense.id, false, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 26,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = ExpensesList;
var ExpensesList_default = ExpensesList;
var _c2;
$RefreshReg$(_c2, "ExpensesList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/expenses.tsx
var import_expenses = __toESM(require_expenses(), 1);

// app/components/navigation/ExpensesHeader.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\navigation\\\\ExpensesHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\navigation\\ExpensesHeader.jsx"
  );
  import.meta.hot.lastModified = "1710093474289.2844";
}
function ExpensesHeader() {
  _s2();
  const userId = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Logo_default, {}, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: "/expenses", end: true, children: "Manage Expenses" }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: "/expenses/analysis", children: "Analyze Expenses" }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
      userId && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", action: "/logout", id: "logout-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "cta-alt", children: "Logout" }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 47,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 46,
        columnNumber: 24
      }, this),
      !userId && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/auth", className: "cta", children: "Login" }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 49,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navigation/ExpensesHeader.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s2(ExpensesHeader, "I72BKa5KQpmTbpW+3IlM/Mq7YBg=", false, function() {
  return [useLoaderData];
});
_c3 = ExpensesHeader;
var ExpensesHeader_default = ExpensesHeader;
var _c3;
$RefreshReg$(_c3, "ExpensesHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/expenses.css
var expenses_default = "/build/_assets/expenses-I2WWZSEC.css";

// app/routes/expenses.tsx
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\expenses.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\expenses.tsx"
  );
}
function ExpensesLayout() {
  _s3();
  const location = useLocation();
  const pathName = location.pathname;
  const expenses = useLoaderData();
  const hasExpenses = expenses && expenses.length > 0;
  if (pathName.length <= 10)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ExpensesHeader_default, {}, void 0, false, {
          fileName: "app/routes/expenses.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { id: "expenses-actions", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "add", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FaPlus, {}, void 0, false, {
              fileName: "app/routes/expenses.tsx",
              lineNumber: 44,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Add Expense" }, void 0, false, {
              fileName: "app/routes/expenses.tsx",
              lineNumber: 45,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/expenses.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "/expenses/raw", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FaDownload, {}, void 0, false, {
              fileName: "app/routes/expenses.tsx",
              lineNumber: 48,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Load Raw Data" }, void 0, false, {
              fileName: "app/routes/expenses.tsx",
              lineNumber: 49,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/expenses.tsx",
            lineNumber: 47,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/expenses.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        hasExpenses && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ExpensesList_default, { expenses }, void 0, false, {
          fileName: "app/routes/expenses.tsx",
          lineNumber: 52,
          columnNumber: 27
        }, this),
        !hasExpenses && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { id: "no-expenses", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "No expenses found" }, void 0, false, {
            fileName: "app/routes/expenses.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
            "Start ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "add", children: "adding some" }, void 0, false, {
              fileName: "app/routes/expenses.tsx",
              lineNumber: 56,
              columnNumber: 23
            }, this),
            " today."
          ] }, void 0, true, {
            fileName: "app/routes/expenses.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/expenses.tsx",
          lineNumber: 53,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/expenses.tsx",
      lineNumber: 38,
      columnNumber: 37
    }, this);
  else {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MainHeader_default, {}, void 0, false, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/expenses.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/expenses.tsx",
      lineNumber: 62,
      columnNumber: 12
    }, this);
  }
}
_s3(ExpensesLayout, "1Dphs73FrMedVa3R6BZMSEneMQY=", false, function() {
  return [useLocation, useLoaderData];
});
_c4 = ExpensesLayout;
function meta() {
  return [{
    title: "RemixExpenses - The Complete App",
    description: "Manage your expenses with ease."
  }];
}
function links() {
  const rv = [{
    rel: "stylesheet",
    href: expenses_default
  }];
  return rv;
}
var _c4;
$RefreshReg$(_c4, "ExpensesLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ExpensesLayout as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/expenses-AB7ZJOZ5.js.map
