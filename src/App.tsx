import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import NotFoundPage from "./pages/NotFoundPage";
import Core from "./components/Core";
import rootReducer from "./modules";
import storage from "./lib/storage";
import displayMode from "./modules/displayMode";
import ConditionalBackground from "./components/ConditionalBackground";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

const store = createStore(
    rootReducer,
    (window as any).__REDUX_STATE__,
    composeWithDevTools(),
);

function loadTheme() {
    const theme = storage.getItem("theme");
    if (!theme) return;
    if (theme === "dark") {
        store.dispatch(displayMode.actions.enableDarkMode());
    } else {
        store.dispatch(displayMode.actions.enableLightMode());
    }
}
loadTheme();

export interface AppProps {}

function App(props: AppProps) {
    // <Helmet>
    //     <title>sinabro</title>
    //     <meta name="description" content="personal branding of sinabro" />
    // </Helmet>
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <ConditionalBackground />
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route component={NotFoundPage} />
                    </Switch>
                    <Core />
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
