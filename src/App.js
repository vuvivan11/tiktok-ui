import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { homeRoutes } from "~/routes";
import DefaultLayout from "./Layouts/DefaultLayout";
import HeaderOnly from "./Layouts/HeaderOnly";

function App() {
  return (
    <Router >
      <Routes>
        {homeRoutes.map((route, index) => {
          const Page = route.component

          let Layout = DefaultLayout

          if (route.layout) {
            Layout = HeaderOnly
          } else if (route.layout === null) {
            Layout = Fragment
          }

          return (
            <Route key={index} path={route.path} element={<Layout>
              <Page />
            </Layout>} />
          )
        })}
      </Routes>
    </Router>
  );
}

export default App;
