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
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError
} from "/build/_shared/chunk-7T7VOSOK.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-I6YOHPB4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/expenses/ExpenseStatistics.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\expenses\\\\ExpenseStatistics.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\expenses\\ExpenseStatistics.jsx"
  );
  import.meta.hot.lastModified = "1668767008000";
}
function calculateSummaryStatistics(expenses) {
  const amounts = expenses.map((expense) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;
  return {
    minAmount,
    maxAmount,
    sum,
    mean
  };
}
function ExpenseStatistics({
  expenses
}) {
  _s();
  const {
    minAmount,
    maxAmount,
    sum,
    mean
  } = (0, import_react.useMemo)(() => calculateSummaryStatistics(expenses), [expenses]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Summary Statistics" }, void 0, false, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { id: "expense-statistics", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Total" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: [
          "$",
          sum.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Average" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: [
          "$",
          mean.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: " Min. Amount" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: [
          "$",
          minAmount.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Max. Amount" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: [
          "$",
          maxAmount.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpenseStatistics.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(ExpenseStatistics, "p2xC83GiILF2qC9FD1C02JEZGaY=");
_c = ExpenseStatistics;
var ExpenseStatistics_default = ExpenseStatistics;
var _c;
$RefreshReg$(_c, "ExpenseStatistics");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/expenses/ChartBar.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\expenses\\\\ChartBar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\expenses\\ChartBar.jsx"
  );
  import.meta.hot.lastModified = "1668767008000";
}
var ChartBar = ({
  maxValue,
  value,
  label
}) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round(value / maxValue * 100) + "%";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chart-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chart-bar--inner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chart-bar--fill", style: {
      height: barFillHeight
    } }, void 0, false, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chart-bar--label", children: label }, void 0, false, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ChartBar.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c2 = ChartBar;
var ChartBar_default = ChartBar;
var _c2;
$RefreshReg$(_c2, "ChartBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/expenses/Chart.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\expenses\\\\Chart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\expenses\\Chart.jsx"
  );
  import.meta.hot.lastModified = "1668767008000";
}
function Chart({
  expenses
}) {
  const chartDataPoints = [{
    label: "Jan",
    value: 0
  }, {
    label: "Feb",
    value: 0
  }, {
    label: "Mar",
    value: 0
  }, {
    label: "Apr",
    value: 0
  }, {
    label: "May",
    value: 0
  }, {
    label: "Jun",
    value: 0
  }, {
    label: "Jul",
    value: 0
  }, {
    label: "Aug",
    value: 0
  }, {
    label: "Sep",
    value: 0
  }, {
    label: "Oct",
    value: 0
  }, {
    label: "Nov",
    value: 0
  }, {
    label: "Dec",
    value: 0
  }];
  for (const expense of expenses) {
    const expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Monthly Expenses" }, void 0, false, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ol", { className: "chart", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ChartBar_default, { value: dataPoint.value, maxValue: totalMaximum, label: dataPoint.label }, dataPoint.label, false, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 71,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/Chart.jsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_c3 = Chart;
var Chart_default = Chart;
var _c3;
$RefreshReg$(_c3, "Chart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/expenses.analysis.tsx
var import_expenses = __toESM(require_expenses(), 1);
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\expenses.analysis.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\expenses.analysis.tsx"
  );
  import.meta.hot.lastModified = "1710100195977.7373";
}
function Document({
  title,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("title", { children: title }, void 0, false, {
        fileName: "app/routes/expenses.analysis.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/routes/expenses.analysis.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/routes/expenses.analysis.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/expenses.analysis.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/routes/expenses.analysis.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/routes/expenses.analysis.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/routes/expenses.analysis.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/expenses.analysis.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/expenses.analysis.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c4 = Document;
function ExpensesAnalysisPage() {
  _s2();
  const expenses = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Chart_default, { expenses }, void 0, false, {
      fileName: "app/routes/expenses.analysis.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ExpenseStatistics_default, { expenses }, void 0, false, {
      fileName: "app/routes/expenses.analysis.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/expenses.analysis.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s2(ExpensesAnalysisPage, "ChyLtWFpt7aA8dCzrR5yXcvzSMw=", false, function() {
  return [useLoaderData];
});
_c22 = ExpensesAnalysisPage;
function ErrorBoundary() {
  _s22();
  console.log("In expenses.analysis - Error Boundary()");
  const error = useRouteError();
  console.log(error, typeof error);
  let errMsg = "";
  if (typeof error === "string")
    errMsg = error;
  else if (typeof error === "object")
    errMsg = "Something went wrong. Please try again later. Got an object";
  else if (typeof error === "undefined")
    errMsg = "Something went wrong. Please try again later. Got undefined";
  else if (typeof error.data === "string")
    errMsg = error.data;
  else if (typeof error.data.message === "string")
    errMsg = error.data.message;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { title: "An error occurred in expenses analysis", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Error, { title: "An error occurred in expenses analysis", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: errMsg }, void 0, false, {
      fileName: "app/routes/expenses.analysis.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/", children: "safety" }, void 0, false, {
        fileName: "app/routes/expenses.analysis.tsx",
        lineNumber: 75,
        columnNumber: 21
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/routes/expenses.analysis.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/expenses.analysis.tsx",
    lineNumber: 70,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/expenses.analysis.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/expenses.analysis.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s22(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c32 = ErrorBoundary;
var _c4;
var _c22;
var _c32;
$RefreshReg$(_c4, "Document");
$RefreshReg$(_c22, "ExpensesAnalysisPage");
$RefreshReg$(_c32, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  ExpensesAnalysisPage as default
};
//# sourceMappingURL=/build/routes/expenses.analysis-7VRYWD6J.js.map
