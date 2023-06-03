import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./SimpleShop/Header/Header";
import App from "./App";
import ErrorPage from "./SimpleShop/ErrorPage/ErrorPage";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
//
import { BrowserRouter,} from "react-router-dom";

const basename = "/simple-shop-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename} errorElement= {<ErrorPage />}>
      <Provider store={store}>
        <PersistGate loading={<>Load...</>} persistor={persistor}>         
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
