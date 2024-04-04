// /expenses/raw
import { getExpenses } from '~/data/expenses.server';
import { requireUserSession } from '~/data/auth.server';


export async function loader({ request }) {
  /* console.log('In expenses.raw loader()'); */
  /* console.log('request: ', request); */
  const userid = await requireUserSession(request);

  const expenses = await getExpenses(userid);
  return expenses
}