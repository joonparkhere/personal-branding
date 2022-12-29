use std::collections::HashMap;
use yew::prelude::*;
use yew_router::history::{AnyHistory, History, MemoryHistory};
use yew_router::prelude::*;

use crate::pages::home::Home;
use crate::pages::not_found::NotFound;

#[derive(Routable, Eq, PartialEq, Clone, Debug)]
pub enum Route {
    #[at("/")]
    Home,
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(route: Route) -> Html {
    match route {
        Route::Home => html! { <Home /> },
        Route::NotFound => html! ( <NotFound /> ),
    }
}

#[function_component(CSRApp)]
pub fn csr_app() -> Html {
    html! (
        <BrowserRouter>
            <Switch<Route> render={switch} />
        </BrowserRouter>
    )
}

#[derive(Properties, Eq, PartialEq, Debug)]
pub struct SSRAppProps {
    pub url: AttrValue,
    pub queries: HashMap<String, String>,
}

#[function_component(SSRApp)]
pub fn ssr_app(props: &SSRAppProps) -> Html {
    let history = AnyHistory::from(MemoryHistory::new());
    history
        .push_with_query(&*props.url, &props.queries)
        .unwrap();

    html! (
        <Router history={history}>
            <Switch<Route> render={switch} />
        </Router>
    )
}
