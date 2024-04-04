// /expenses => shared layout
import { 
  Link, 
  Outlet, 
  useLoaderData,
  useLocation, 
} from '@remix-run/react';
import { 
  FaPlus, 
  FaDownload 
} from 'react-icons/fa';

import ExpensesList from '~/components/expenses/ExpensesList';
import { getExpenses } from '~/data/expenses.server';
import ExpensesHeader from '~/components/navigation/ExpensesHeader';
import MainHeader from '~/components/navigation/MainHeader'; 
import * as expensesStyles from '~/styles/expenses.css';
import { requireUserSession } from '~/data/auth.server';

export default function ExpensesLayout() {
  /* console.log('In ExpensesLayout()'); */
  const location = useLocation();
  const pathName = location.pathname;
  /* console.log('pathName: ', pathName, pathName.length); */
  const expenses = useLoaderData();
  const hasExpenses = expenses && expenses.length > 0;
 
  if (pathName.length <= 10) 
    return (
      <>
        <Outlet />
        <main>
          <ExpensesHeader />
          <section id="expenses-actions">
            <Link to="add">
              <FaPlus />
              <span>Add Expense</span>
            </Link>
            <a href="/expenses/raw">
              <FaDownload />
              <span>Load Raw Data</span>
            </a>
          </section>
          {hasExpenses && <ExpensesList expenses={expenses} />}
          {!hasExpenses && (
            <section id="no-expenses">
              <h1>No expenses found</h1>
              <p>
                Start <Link to="add">adding some</Link> today.
              </p>
            </section>
          )}
        </main>
      </>
    )
  else { 
    return (
      <>
        <MainHeader />
        <Outlet />
      </>
    );
  }
}

export async function loader({ request }) {
  /* console.log('In expenses.loader()'); */
  const userId = await requireUserSession(request);

  const expenses = await getExpenses(userId);
  /* console.log('expenses: ', expenses); */
  return expenses;

  // if (!expenses || expenses.length === 0) {
  //   throw json(
  //     { message: 'Could not find any expenses.' },
  //     { status: 404, statusText: 'No expenses found' }
  //   );
  // }
}

// export function CatchBoundary() {
//   return <p>Error</p>
// }

export function meta() {
  return [{
    title: 'RemixExpenses - The Complete App',
    description: 'Manage your expenses with ease.'
  }] 
}

export function headers({
  actionHeaders,
  loaderHeaders,
  parentHeaders
}) {
  let headerValue = parentHeaders.get('Cache-Control');
  if (!headerValue == null)  
    return {};
  return {
    'Cache-Control': headerValue 
  }
}

export function links() {
  const rv = [{ rel: 'stylesheet', href: expensesStyles }];
  return rv;
}