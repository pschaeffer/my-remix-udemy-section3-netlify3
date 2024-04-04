// /expenses/analysis
import { 
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError
} from '@remix-run/react';

import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';
import { getExpenses } from '~/data/expenses.server';
import { json } from '@remix-run/node';
import { requireUserSession } from '~/data/auth.server';

function Document({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function ExpensesAnalysisPage() {
  const expenses = useLoaderData();
  return (
    <main>
      <Chart expenses={expenses} />
      <ExpenseStatistics expenses={expenses} />
    </main>
  );
}

export function ErrorBoundary() {
  /* console.log('In expenses.analysis - Error Boundary()'); */
  const error = useRouteError();
  /* console.log(error, typeof(error)); */
  let errMsg = '';
  if (typeof(error) === 'string')  
    errMsg = error;
  else if (typeof(error) === 'object')
    errMsg = 'Something went wrong. Please try again later. Got an object';
  else if (typeof(error) === 'undefined')
    errMsg = 'Something went wrong. Please try again later. Got undefined';
  else if (typeof(error.data) === 'string')  
    errMsg = error.data;
  else if (typeof(error.data.message) === 'string')  
    errMsg = error.data.message;
  return (
    <Document title="An error occurred in expenses analysis">
      <main>
        <Error title="An error occurred in expenses analysis">
          <p>
            {errMsg}
          </p>
          <p>
            Back to <Link to="/">safety</Link>.
          </p>
        </Error>
      </main>
    </Document>
  );
}

export async function loader({ request }) {
  /* console.log('In expenses.analysis.loader()'); */
  /* console.log('request: ', request); */
  const userid = await requireUserSession(request);
  const expenses = await getExpenses(userid);

  if (!expenses || expenses.length === 0) {
    throw json(
      { message: 'Could not load expenses for the requested analysis.' },
      {
        status: 404,
        statusText: 'Expenses not found',
      }
    );
  }

  return expenses; // return json(expenses);
}