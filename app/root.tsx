import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  /* useCatch, */
  useMatches,
  useRouteError,
} from '@remix-run/react';

import * as sharedStyles from '~/styles/shared.css';
import Error from './components/util/Error';

export const meta = () => (
  [
    {
      charset: "utf-8",
      title: "New Remix App",
      viewport: "width=device-width,initial-scale=1",
    }
  ]
); 

function Document({ title, children }) {
  /* console.log('In Document()'); */
  const matches = useMatches();

  const disableJS = matches.some(match => match.handle?.disableJS);
  /* console.log('disableJS: ', disableJS); */
  return (
    <html lang="en">
      <head>
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        {!disableJS && <Scripts />}
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
/*
export function CatchBoundary() {
  const caughtResponse = useCatch();

  return (
    <Document title={caughtResponse.statusText}>
      <main>
        <Error title={caughtResponse.statusText}>
          <p>
            {caughtResponse.data?.message ||
              'Something went wrong. Please try again later.'}
          </p>
          <p>
            Back to <Link to="/">safety</Link>.
          </p>
        </Error>
      </main>
    </Document>
  );
}
*/
export function ErrorBoundary() {
  /* root - Error Boundary()'); */
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
    <Document title="An error occurred">
      <main>
        <Error title="An error occurred">
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

export function links() {
  return [{ rel: 'stylesheet', href: sharedStyles }];
}