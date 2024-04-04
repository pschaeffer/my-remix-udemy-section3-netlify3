import {
  marketing_default
} from "/build/_shared/chunk-M4FNM52Z.js";
import {
  MainHeader_default
} from "/build/_shared/chunk-6J5W6JJ5.js";
import {
  FaHandshake,
  FaTrophy
} from "/build/_shared/chunk-6YI3ZSRX.js";
import {
  require_auth
} from "/build/_shared/chunk-C35NKL4E.js";
import "/build/_shared/chunk-7T7VOSOK.js";
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

// app/components/marketing/PricingPlan.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\marketing\\\\PricingPlan.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\marketing\\PricingPlan.jsx"
  );
  import.meta.hot.lastModified = "1668767008000";
}
function PricingPlan({
  title,
  price,
  perks,
  icon
}) {
  const Icon = icon;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {}, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: title }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: price }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "plan-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { children: perks.map((perk) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: perk }, perk, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 38,
        columnNumber: 30
      }, this)) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/not-implemented", children: "Learn More" }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/marketing/PricingPlan.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = PricingPlan;
var PricingPlan_default = PricingPlan;
var _c;
$RefreshReg$(_c, "PricingPlan");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/pricing.tsx
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\pricing.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\pricing.tsx"
  );
}
var PRICING_PLANS = [{
  id: "p1",
  title: "Basic",
  price: "Free forever",
  perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
  icon: FaHandshake
}, {
  id: "p2",
  title: "Pro",
  price: "$9.99/month",
  perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
  icon: FaTrophy
}];
function PricingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { id: "pricing", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MainHeader_default, {}, void 0, false, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Great Product, Simple Pricing" }, void 0, false, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { id: "pricing-plans", children: PRICING_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "plan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PricingPlan_default, { title: plan.title, price: plan.price, perks: plan.perks, icon: plan.icon }, void 0, false, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this) }, plan.id, false, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 43,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c2 = PricingPage;
function links() {
  const rv = [{
    rel: "stylesheet",
    href: marketing_default
  }];
  return rv;
}
function meta() {
  return [{
    title: "Pricing",
    description: "See our pricing plans."
  }];
}
var handle = {
  disableJS: true
};
var _c2;
$RefreshReg$(_c2, "PricingPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PricingPage as default,
  handle,
  links,
  meta
};
//# sourceMappingURL=/build/routes/pricing-5DKPH3DH.js.map
