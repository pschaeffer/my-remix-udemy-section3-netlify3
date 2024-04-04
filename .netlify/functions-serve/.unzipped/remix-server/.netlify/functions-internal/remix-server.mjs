
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// build/server/server.js
import { createRequestHandler } from "@netlify/remix-adapter";

// build/server/assets/server-build-D77tAonf.js
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, createCookieSessionStorage, redirect, json } from "@remix-run/node";
import { RemixServer, Outlet, useMatches, Meta, Links, ScrollRestoration, Scripts, LiveReload, useRouteError, Link, useLoaderData, useActionData, useParams, useNavigation, Form, useNavigate, useFetcher, NavLink, useLocation, useSearchParams } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { FaExclamationCircle, FaPlus, FaDownload, FaHandshake, FaTrophy, FaDollarSign, FaArrowRight, FaChartBar, FaLock, FaUserPlus } from "react-icons/fa";
import { useMemo } from "react";
import { PrismaClient } from "@prisma/client";
import pkg from "bcryptjs";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
var entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
var sharedStyles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function Error$1({ title, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "error", children: [
    /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx(FaExclamationCircle, {}) }),
    /* @__PURE__ */ jsx("h2", { children: title }),
    children
  ] });
}
var meta$3 = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1"
  }
];
function Document$1({ title, children }) {
  const matches = useMatches();
  const disableJS = matches.some((match) => {
    var _a;
    return (_a = match.handle) == null ? void 0 : _a.disableJS;
  });
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      !disableJS && /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx(LiveReload, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Document$1, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function ErrorBoundary$1() {
  const error = useRouteError();
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
  return /* @__PURE__ */ jsx(Document$1, { title: "An error occurred", children: /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs(Error$1, { title: "An error occurred", children: [
    /* @__PURE__ */ jsx("p", { children: errMsg }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Back to ",
      /* @__PURE__ */ jsx(Link, { to: "/", children: "safety" }),
      "."
    ] })
  ] }) }) });
}
function links$4() {
  return [{ rel: "stylesheet", href: sharedStyles }];
}
var route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$4,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function calculateSummaryStatistics(expenses) {
  const amounts = expenses.map((expense) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;
  return { minAmount, maxAmount, sum, mean };
}
function ExpenseStatistics({ expenses }) {
  const { minAmount, maxAmount, sum, mean } = useMemo(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Summary Statistics" }),
    /* @__PURE__ */ jsxs("dl", { id: "expense-statistics", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { children: "Total" }),
        /* @__PURE__ */ jsxs("dd", { children: [
          "$",
          sum.toFixed(2)
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { children: "Average" }),
        /* @__PURE__ */ jsxs("dd", { children: [
          "$",
          mean.toFixed(2)
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { children: " Min. Amount" }),
        /* @__PURE__ */ jsxs("dd", { children: [
          "$",
          minAmount.toFixed(2)
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { children: "Max. Amount" }),
        /* @__PURE__ */ jsxs("dd", { children: [
          "$",
          maxAmount.toFixed(2)
        ] })
      ] })
    ] })
  ] });
}
var ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round(value / maxValue * 100) + "%";
  }
  return /* @__PURE__ */ jsxs("div", { className: "chart-bar", children: [
    /* @__PURE__ */ jsx("div", { className: "chart-bar--inner", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "chart-bar--fill",
        style: { height: barFillHeight }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "chart-bar--label", children: label })
  ] });
};
var ChartBar$1 = ChartBar;
function Chart({ expenses }) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  for (const expense of expenses) {
    const expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Monthly Expenses" }),
    /* @__PURE__ */ jsx("ol", { className: "chart", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ jsx(
      ChartBar$1,
      {
        value: dataPoint.value,
        maxValue: totalMaximum,
        label: dataPoint.label
      },
      dataPoint.label
    )) })
  ] });
}
var prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  prisma.$connect();
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
    global.__db.$connect();
  }
  prisma = global.__db;
}
async function addExpense(expenseData, userId) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
        User: { connect: { id: userId } }
      }
    });
  } catch (error) {
    throw new Error("Failed to add expense.");
  }
}
async function getExpenses(userId) {
  if (!userId) {
    throw new Error("Failed to get expenses.");
  }
  try {
    const expenses = await prisma.expense.findMany({
      where: { userId },
      orderBy: { date: "desc" }
    });
    return expenses;
  } catch (error) {
    throw new Error("Failed to get expenses.");
  }
}
async function getExpense(id) {
  try {
    const expense = await prisma.expense.findFirst({ where: { id } });
    return expense;
  } catch (error) {
    throw new Error("Failed to get expense.");
  }
}
async function updateExpense(id, expenseData) {
  try {
    await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date)
      }
    });
  } catch (error) {
    throw new Error("Failed to update expense.");
  }
}
async function deleteExpense(id) {
  try {
    await prisma.expense.delete({
      where: { id }
    });
  } catch (error) {
    throw new Error("Failed to delete expense.");
  }
}
var { compare, hash } = pkg;
var SESSION_SECRET = process.env.SESSION_SECRET;
var sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    // 30 days
    httpOnly: true
  }
});
async function createUserSession(userId, redirectPath) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return redirect(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function getUserFromSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  const userId = session.get("userId");
  if (!userId) {
    return null;
  }
  return userId;
}
async function destroyUserSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function requireUserSession(request) {
  const userId = await getUserFromSession(request);
  if (!userId) {
    throw redirect("/auth?mode=login");
  }
  return userId;
}
async function signup({ email, password }) {
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (existingUser) {
    const error = new Error(
      "A user with the provided email address exists already."
    );
    error.status = 422;
    throw error;
  }
  const passwordHash = await hash(password, 12);
  const user = await prisma.user.create({
    data: { email, password: passwordHash }
  });
  return createUserSession(user.id, "/expenses");
}
async function login({ email, password }) {
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (!existingUser) {
    const error = new Error(
      "Could not log you in, please check the provided credentials."
    );
    error.status = 401;
    throw error;
  }
  const passwordCorrect = await compare(password, existingUser.password);
  if (!passwordCorrect) {
    const error = new Error(
      "Could not log you in, please check the provided credentials."
    );
    error.status = 401;
    throw error;
  }
  return createUserSession(existingUser.id, "/expenses");
}
function Document({ title, children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx(LiveReload, {})
    ] })
  ] });
}
function ExpensesAnalysisPage() {
  const expenses = useLoaderData();
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Chart, { expenses }),
    /* @__PURE__ */ jsx(ExpenseStatistics, { expenses })
  ] });
}
function ErrorBoundary() {
  const error = useRouteError();
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
  return /* @__PURE__ */ jsx(Document, { title: "An error occurred in expenses analysis", children: /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs(Error, { title: "An error occurred in expenses analysis", children: [
    /* @__PURE__ */ jsx("p", { children: errMsg }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Back to ",
      /* @__PURE__ */ jsx(Link, { to: "/", children: "safety" }),
      "."
    ] })
  ] }) }) });
}
async function loader$6({ request }) {
  const userid = await requireUserSession(request);
  const expenses = await getExpenses(userid);
  if (!expenses || expenses.length === 0) {
    throw json(
      { message: "Could not load expenses for the requested analysis." },
      {
        status: 404,
        statusText: "Expenses not found"
      }
    );
  }
  return expenses;
}
var route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  default: ExpensesAnalysisPage,
  loader: loader$6
}, Symbol.toStringTag, { value: "Module" }));
function ExpenseForm() {
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const validationErrors = useActionData();
  const params = useParams();
  const matches = useMatches();
  const expenses = matches.find(
    (match) => match.id === "routes/expenses"
  ).data;
  const expenseData = expenses.find((expense) => expense.id === params.id);
  if (params.id && !expenseData) {
    return /* @__PURE__ */ jsx("p", { children: "Invalid expense id." });
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
  return /* @__PURE__ */ jsxs(
    Form,
    {
      method: expenseData ? "patch" : "post",
      className: "form",
      id: "expense-form",
      children: [
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "title", children: "Expense Title" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "title",
              name: "title",
              required: true,
              maxLength: 30,
              defaultValue: defaultValues.title
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "amount", children: "Amount" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                id: "amount",
                name: "amount",
                min: "0",
                step: "0.01",
                required: true,
                defaultValue: defaultValues.amount
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "date", children: "Date" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                id: "date",
                name: "date",
                max: today,
                required: true,
                defaultValue: defaultValues.date ? defaultValues.date.slice(0, 10) : ""
              }
            )
          ] })
        ] }),
        validationErrors && /* @__PURE__ */ jsx("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ jsx("li", { children: error }, error)) }),
        /* @__PURE__ */ jsxs("div", { className: "form-actions", children: [
          /* @__PURE__ */ jsx("button", { disabled: isSubmitting, children: isSubmitting ? "Saving..." : "Save Expense" }),
          /* @__PURE__ */ jsx(Link, { to: "..", children: "Cancel" })
        ] })
      ]
    }
  );
}
function Modal({ children, onClose }) {
  return /* @__PURE__ */ jsx("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ jsx(
    "dialog",
    {
      className: "modal",
      open: true,
      onClick: (event) => event.stopPropagation(),
      children
    }
  ) });
}
function isValidTitle(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30;
}
function isValidAmount(value) {
  const amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
}
function isValidDate(value) {
  return value && new Date(value).getTime() < (/* @__PURE__ */ new Date()).getTime();
}
function validateExpenseInput(input) {
  let validationErrors = {};
  if (!isValidTitle(input.title)) {
    validationErrors.title = "Invalid expense title. Must be at most 30 characters long.";
  }
  if (!isValidAmount(input.amount)) {
    validationErrors.amount = "Invalid amount. Must be a number greater than zero.";
  }
  if (!isValidDate(input.date)) {
    validationErrors.date = "Invalid date. Must be a date before today.";
  }
  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
function isValidEmail(value) {
  return value && value.includes("@");
}
function isValidPassword(value) {
  return value && value.trim().length >= 7;
}
function validateCredentials(input) {
  let validationErrors = {};
  if (!isValidEmail(input.email)) {
    validationErrors.email = "Invalid email address.";
  }
  if (!isValidPassword(input.password)) {
    validationErrors.password = "Invalid password. Must be at least 7 characters long.";
  }
  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
function UpdateExpensesPage() {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ jsx(Modal, { onClose: closeHandler, children: /* @__PURE__ */ jsx(ExpenseForm, {}) });
}
async function loader$5({ params }) {
  console.log("EXPENSE ID LOADER");
  const expenseId = params.id;
  const expense = await getExpense(expenseId);
  return expense;
}
async function action$3({ params, request }) {
  const expenseId = params.id;
  if (request.method === "PATCH") {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);
    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }
    await updateExpense(expenseId, expenseData);
    return redirect("/expenses");
  } else if (request.method === "DELETE") {
    await deleteExpense(expenseId);
    return { deletedId: expenseId };
  }
}
function meta$2({ params, location, data, parentsData }) {
  const overallTitle = data.title;
  return [{
    title: overallTitle,
    description: "Update expense."
  }];
}
var route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$3,
  default: UpdateExpensesPage,
  loader: loader$5,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function AddExpensesPage() {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ jsx(Modal, { onClose: closeHandler, children: /* @__PURE__ */ jsx(ExpenseForm, {}) });
}
async function action$2({ request }) {
  const userId = await requireUserSession(request);
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);
  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }
  await addExpense(expenseData, userId);
  return redirect("/expenses");
}
var route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$2,
  default: AddExpensesPage
}, Symbol.toStringTag, { value: "Module" }));
async function loader$4({ request }) {
  const userid = await requireUserSession(request);
  const expenses = await getExpenses(userid);
  return expenses;
}
var route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
function ExpenseListItem({ id, title, amount }) {
  const fetcher = useFetcher();
  function deleteExpenseItemHandler() {
    const proceed = confirm("Are you sure? Do you want to delete this item?");
    if (!proceed) {
      return;
    }
    fetcher.submit(null, { method: "delete", action: `/expenses/${id}` });
  }
  if (fetcher.state !== "idle") {
    return /* @__PURE__ */ jsx("article", { className: "expense-item locked", children: /* @__PURE__ */ jsx("p", { children: "Deleting..." }) });
  }
  return /* @__PURE__ */ jsxs("article", { className: "expense-item", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "expense-title", children: title }),
      /* @__PURE__ */ jsxs("p", { className: "expense-amount", children: [
        "$",
        amount.toFixed(2)
      ] })
    ] }),
    /* @__PURE__ */ jsxs("menu", { className: "expense-actions", children: [
      /* @__PURE__ */ jsx("button", { onClick: deleteExpenseItemHandler, children: "Delete" }),
      /* @__PURE__ */ jsx(Link, { to: id, children: "Edit" })
    ] })
  ] });
}
function ExpensesList({ expenses }) {
  return /* @__PURE__ */ jsx("ol", { id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    ExpenseListItem,
    {
      id: expense.id,
      title: expense.title,
      amount: expense.amount
    }
  ) }, expense.id)) });
}
function Logo() {
  return /* @__PURE__ */ jsx("h1", { id: "logo", children: /* @__PURE__ */ jsx(Link, { to: "/", children: "RemixExpenses" }) });
}
function ExpensesHeader() {
  const userId = useLoaderData();
  return /* @__PURE__ */ jsxs("header", { id: "main-header", children: [
    /* @__PURE__ */ jsx(Logo, {}),
    /* @__PURE__ */ jsx("nav", { id: "main-nav", children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/expenses", end: true, children: "Manage Expenses" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/expenses/analysis", children: "Analyze Expenses" }) })
    ] }) }),
    /* @__PURE__ */ jsx("nav", { id: "cta-nav", children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsxs("li", { children: [
      userId && /* @__PURE__ */ jsx(Form, { method: "post", action: "/logout", id: "logout-form", children: /* @__PURE__ */ jsx("button", { className: "cta-alt", children: "Logout" }) }),
      !userId && /* @__PURE__ */ jsx(Link, { to: "/auth", className: "cta", children: "Login" })
    ] }) }) })
  ] });
}
function MainHeader() {
  const userId = useLoaderData();
  return /* @__PURE__ */ jsxs("header", { id: "main-header", children: [
    /* @__PURE__ */ jsx(Logo, {}),
    /* @__PURE__ */ jsx("nav", { id: "main-nav", children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/pricing", children: "Pricing" }) })
    ] }) }),
    /* @__PURE__ */ jsx("nav", { id: "cta-nav", children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsxs("li", { children: [
      userId && /* @__PURE__ */ jsx(Form, { method: "post", action: "/logout", id: "logout-form", children: /* @__PURE__ */ jsx("button", { className: "cta-alt", children: "Logout" }) }),
      !userId && /* @__PURE__ */ jsx(Link, { to: "/auth", className: "cta", children: "Login" })
    ] }) }) })
  ] });
}
var expensesStyles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function ExpensesLayout() {
  const location = useLocation();
  const pathName = location.pathname;
  const expenses = useLoaderData();
  const hasExpenses = expenses && expenses.length > 0;
  if (pathName.length <= 10)
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsxs("main", { children: [
        /* @__PURE__ */ jsx(ExpensesHeader, {}),
        /* @__PURE__ */ jsxs("section", { id: "expenses-actions", children: [
          /* @__PURE__ */ jsxs(Link, { to: "add", children: [
            /* @__PURE__ */ jsx(FaPlus, {}),
            /* @__PURE__ */ jsx("span", { children: "Add Expense" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/expenses/raw", children: [
            /* @__PURE__ */ jsx(FaDownload, {}),
            /* @__PURE__ */ jsx("span", { children: "Load Raw Data" })
          ] })
        ] }),
        hasExpenses && /* @__PURE__ */ jsx(ExpensesList, { expenses }),
        !hasExpenses && /* @__PURE__ */ jsxs("section", { id: "no-expenses", children: [
          /* @__PURE__ */ jsx("h1", { children: "No expenses found" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Start ",
            /* @__PURE__ */ jsx(Link, { to: "add", children: "adding some" }),
            " today."
          ] })
        ] })
      ] })
    ] });
  else {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(MainHeader, {}),
      /* @__PURE__ */ jsx(Outlet, {})
    ] });
  }
}
async function loader$3({ request }) {
  const userId = await requireUserSession(request);
  const expenses = await getExpenses(userId);
  return expenses;
}
function meta$1() {
  return [{
    title: "RemixExpenses - The Complete App",
    description: "Manage your expenses with ease."
  }];
}
function headers$1({
  actionHeaders,
  loaderHeaders,
  parentHeaders
}) {
  let headerValue = parentHeaders.get("Cache-Control");
  if (!headerValue == null)
    return {};
  return {
    "Cache-Control": headerValue
  };
}
function links$3() {
  const rv = [{ rel: "stylesheet", href: expensesStyles }];
  return rv;
}
var route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ExpensesLayout,
  headers: headers$1,
  links: links$3,
  loader: loader$3,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
var marketingStyles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function PricingPlan({ title, price, perks, icon }) {
  const Icon = icon;
  return /* @__PURE__ */ jsxs("article", { children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx(Icon, {}) }),
      /* @__PURE__ */ jsx("h2", { children: title }),
      /* @__PURE__ */ jsx("p", { children: price })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "plan-content", children: [
      /* @__PURE__ */ jsx("ol", { children: perks.map((perk) => /* @__PURE__ */ jsx("li", { children: perk }, perk)) }),
      /* @__PURE__ */ jsx("div", { className: "actions", children: /* @__PURE__ */ jsx("a", { href: "/not-implemented", children: "Learn More" }) })
    ] })
  ] });
}
var PRICING_PLANS = [
  {
    id: "p1",
    title: "Basic",
    price: "Free forever",
    perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    icon: FaHandshake
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/month",
    perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    icon: FaTrophy
  }
];
function PricingPage() {
  return /* @__PURE__ */ jsxs("main", { id: "pricing", children: [
    /* @__PURE__ */ jsx(MainHeader, {}),
    /* @__PURE__ */ jsx("h2", { children: "Great Product, Simple Pricing" }),
    /* @__PURE__ */ jsx("ol", { id: "pricing-plans", children: PRICING_PLANS.map((plan) => /* @__PURE__ */ jsx("li", { className: "plan", children: /* @__PURE__ */ jsx(
      PricingPlan,
      {
        title: plan.title,
        price: plan.price,
        perks: plan.perks,
        icon: plan.icon
      }
    ) }, plan.id)) })
  ] });
}
function loader$2({ request }) {
  return getUserFromSession(request);
}
function links$2() {
  const rv = [{ rel: "stylesheet", href: marketingStyles }];
  return rv;
}
function headers({}) {
  return {
    "Cache-Control": "max-age=3600"
  };
}
function meta() {
  return [{
    title: "Pricing",
    description: "See our pricing plans."
  }];
}
var handle = { disableJS: true };
var route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PricingPage,
  handle,
  headers,
  links: links$2,
  loader: loader$2,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function action$1({ request }) {
  if (request.method !== "POST") {
    throw json({ message: "Invalid request method" }, { status: 400 });
  }
  return destroyUserSession(request);
}
var route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1
}, Symbol.toStringTag, { value: "Module" }));
function Index() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(MainHeader, {}),
    /* @__PURE__ */ jsxs("section", { className: "marketing-section", children: [
      /* @__PURE__ */ jsxs("header", { children: [
        /* @__PURE__ */ jsx(FaDollarSign, {}),
        /* @__PURE__ */ jsx("h2", { children: "A Central Space" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "marketing-content", children: [
        /* @__PURE__ */ jsx("div", { className: "marketing-image", children: /* @__PURE__ */ jsx("img", { src: "images/expenses-management.jpg", alt: "A list of expenses." }) }),
        /* @__PURE__ */ jsxs("div", { className: "marketing-explanation", children: [
          /* @__PURE__ */ jsx("p", { children: "Manage your expenses in one central place." }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs(Link, { className: "cta", to: "/expenses", children: [
            /* @__PURE__ */ jsx("span", { children: "Get Started" }),
            /* @__PURE__ */ jsx(FaArrowRight, {})
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "marketing-section", children: [
      /* @__PURE__ */ jsxs("header", { children: [
        /* @__PURE__ */ jsx(FaChartBar, {}),
        /* @__PURE__ */ jsx("h2", { children: "Detailed Analytics" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "marketing-content", children: [
        /* @__PURE__ */ jsx("p", { className: "marketing-explanation", children: "Benefit from best-in-class analytics to understand your spending patterns." }),
        /* @__PURE__ */ jsx("div", { className: "marketing-image", children: /* @__PURE__ */ jsx("img", { src: "images/expenses-chart.jpg", alt: "A demo bar chart." }) })
      ] })
    ] })
  ] });
}
async function loader$1({ request }) {
  await requireUserSession(request);
  return getUserFromSession(request);
}
function links$1() {
  const rv = [{ rel: "stylesheet", href: marketingStyles }];
  return rv;
}
var route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  links: links$1,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const validationErrors = useActionData();
  const authMode = searchParams.get("mode") || "login";
  const submitBtnCaption = authMode === "login" ? "Login" : "Create User";
  const toggleBtnCaption = authMode === "login" ? "Create a new user" : "Log in with existing user";
  const isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ jsxs(Form, { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ jsx("div", { className: "icon-img", children: authMode === "login" ? /* @__PURE__ */ jsx(FaLock, {}) : /* @__PURE__ */ jsx(FaUserPlus, {}) }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email Address" }),
      /* @__PURE__ */ jsx("input", { type: "email", id: "email", name: "email", required: true })
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "password", children: "Password" }),
      /* @__PURE__ */ jsx("input", { type: "password", id: "password", name: "password", minLength: 7 })
    ] }),
    validationErrors && /* @__PURE__ */ jsx("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ jsx("li", { children: error }, error)) }),
    /* @__PURE__ */ jsxs("div", { className: "form-actions", children: [
      /* @__PURE__ */ jsx("button", { disabled: isSubmitting, children: isSubmitting ? "Authenticating..." : submitBtnCaption }),
      /* @__PURE__ */ jsx(Link, { to: authMode === "login" ? "?mode=signup" : "?mode=login", children: toggleBtnCaption })
    ] })
  ] });
}
var authStyles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function AuthPage() {
  return /* @__PURE__ */ jsx(AuthForm, {});
}
async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }
  try {
    if (authMode === "login") {
      return await login(credentials);
    } else {
      return await signup(credentials);
    }
  } catch (error) {
    if (error.status === 422) {
      return { credentials: error.message };
    }
  }
}
function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
var route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: AuthPage,
  links
}, Symbol.toStringTag, { value: "Module" }));
function loader({ params }) {
  if (params["*"] === "exp") {
    return redirect("/expenses");
  }
  throw new Response("Not found", { status: 404 });
}
var route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader
}, Symbol.toStringTag, { value: "Module" }));
var serverManifest = { "entry": { "module": "/assets/entry.client-CsPNJMHs.js", "imports": ["/assets/components-DZCVqqbL.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-C14_5Bpa.js", "imports": ["/assets/components-DZCVqqbL.js", "/assets/index-D9KS-zZG.js", "/assets/scroll-restoration-DLpdAiuL.js"], "css": ["/assets/root-buzUSTBk.css"] }, "routes/expenses.analysis": { "id": "routes/expenses.analysis", "parentId": "routes/expenses", "path": "analysis", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/expenses.analysis-BETdWq78.js", "imports": ["/assets/components-DZCVqqbL.js", "/assets/scroll-restoration-DLpdAiuL.js"], "css": [] }, "routes/expenses.$id": { "id": "routes/expenses.$id", "parentId": "routes/expenses", "path": ":id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/expenses._id-Bqie9OR5.js", "imports": ["/assets/components-DZCVqqbL.js", "/assets/Modal-BZwDsXeZ.js"], "css": [] }, "routes/expenses.add": { "id": "routes/expenses.add", "parentId": "routes/expenses", "path": "add", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/expenses.add-BL-VPjeM.js", "imports": ["/assets/components-DZCVqqbL.js", "/assets/Modal-BZwDsXeZ.js"], "css": [] }, "routes/expenses.raw": { "id": "routes/expenses.raw", "parentId": "routes/expenses", "path": "raw", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/expenses.raw-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/expenses": { "id": "routes/expenses", "parentId": "root", "path": "expenses", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/expenses-C_mzAYDk.js", "imports": ["/assets/components-DZCVqqbL.js", "/assets/index-D9KS-zZG.js", "/assets/MainHeader-CxQ5cGAi.js"], "css": ["/assets/expenses-DgpJXyyF.css"] }, "routes/pricing": { "id": "routes/pricing", "parentId": "root", "path": "pricing", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/pricing-YP8InIHY.js", "imports": ["/assets/components-DZCVqqbL.js", "/assets/index-D9KS-zZG.js", "/assets/MainHeader-CxQ5cGAi.js"], "css": ["/assets/marketing-BSfDC_U6.css"] }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/logout-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-ClOcUweB.js", "imports": ["/assets/components-DZCVqqbL.js", "/assets/index-D9KS-zZG.js", "/assets/MainHeader-CxQ5cGAi.js"], "css": ["/assets/marketing-BSfDC_U6.css"] }, "routes/auth": { "id": "routes/auth", "parentId": "root", "path": "auth", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth-DCpP1ava.js", "imports": ["/assets/components-DZCVqqbL.js", "/assets/index-D9KS-zZG.js"], "css": ["/assets/auth-BDm_rUjc.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_-l0sNRNKZ.js", "imports": [], "css": [] } }, "url": "/assets/manifest-8e05e4ac.js", "version": "8e05e4ac" };
var mode = "production";
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
var isSpaMode = false;
var publicPath = "/";
var entry = { module: entryServer };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/expenses.analysis": {
    id: "routes/expenses.analysis",
    parentId: "routes/expenses",
    path: "analysis",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/expenses.$id": {
    id: "routes/expenses.$id",
    parentId: "routes/expenses",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/expenses.add": {
    id: "routes/expenses.add",
    parentId: "routes/expenses",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/expenses.raw": {
    id: "routes/expenses.raw",
    parentId: "routes/expenses",
    path: "raw",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/expenses": {
    id: "routes/expenses",
    parentId: "root",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/pricing": {
    id: "routes/pricing",
    parentId: "root",
    path: "pricing",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route8
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  }
};
var build = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assets: serverManifest,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
}, Symbol.toStringTag, { value: "Module" }));

// build/server/server.js
import "react/jsx-runtime";
import "@remix-run/node";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "react-icons/fa";
import "react";
import "@prisma/client";
import "bcryptjs";
var _virtual_netlifyServer = createRequestHandler({ build });

// .netlify/functions-internal/remix-server.mjs
var config = {
  name: "Remix server handler",
  generator: "@netlify/remix-adapter@2.3.1",
  path: "/*",
  preferStatic: true
};
export {
  config,
  _virtual_netlifyServer as default
};
