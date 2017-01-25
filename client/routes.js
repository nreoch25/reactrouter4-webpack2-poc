import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";

// require.ensure polyfill for node
if (typeof require.ensure !== "function") {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

if (process.env.NODE_ENV !== "production") {
  // Require async routes only in development for react-hot-reloader to work.
  require("./components/Index");
  require("./components/Arts");
  require("./components/News");
  require("./components/Sports");
  require("./components/Detail");
}

export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        System.import("./components/Index").then((module) => {
              cb(null, module.default);
          }).catch((error) => {
              console.log("ERROR", error);
          });
      }}
    />
    <Route
      path="homepage/:id"
      getComponent={(nextState, cb) => {
        System.import("./components/Detail").then((module) => {
              cb(null, module.default);
          }).catch((error) => {
              console.log("ERROR", error);
          });
      }}
    />
    <Route
      path="arts"
      getComponent={(nextState, cb) => {
        System.import("./components/Arts").then((module) => {
              cb(null, module.default);
          }).catch((error) => {
              console.log("ERROR", error);
          });
      }}
    />
    <Route
      path="arts/:id"
      getComponent={(nextState, cb) => {
        System.import("./components/Detail").then((module) => {
              cb(null, module.default);
          }).catch((error) => {
              console.log("ERROR", error);
          });
      }}
    />
    <Route
      path="news"
      getComponent={(nextState, cb) => {
        System.import("./components/News").then((module) => {
              cb(null, module.default);
          }).catch((error) => {
              console.log("ERROR", error);
          });
      }}
    />
    <Route
      path="news/:id"
      getComponent={(nextState, cb) => {
        System.import("./components/Detail").then((module) => {
              cb(null, module.default);
          }).catch((error) => {
              console.log("ERROR", error);
          });
      }}
    />
    <Route
      path="sports"
      getComponent={(nextState, cb) => {
        System.import("./components/Sports").then((module) => {
              cb(null, module.default);
          }).catch((error) => {
              console.log("ERROR", error);
          });
      }}
    />
    <Route
      path="sports/:id"
      getComponent={(nextState, cb) => {
        System.import("./components/Detail").then((module) => {
              cb(null, module.default);
          }).catch((error) => {
              console.log("ERROR", error);
          });
      }}
    />
  </Route>
);
