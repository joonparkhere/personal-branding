use yew::prelude::*;
use yew_router::prelude::*;

use crate::pages::not_found::NotFound;

#[derive(Routable, Eq, PartialEq, Clone, Debug)]
pub enum Route {
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::NotFound | _ => html! { <NotFound /> },
    }
}

#[function_component]
pub fn CounterApp() -> Html {
    html! (
        <BrowserRouter>
            <main>
                <Switch<Route> render={switch} />
            </main>
        </BrowserRouter>
    )
}
