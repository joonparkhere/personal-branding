use yew::prelude::*;
use yew_router::hooks::use_navigator;

use crate::components::error_template::ErrorTemplate;
use crate::Route;

#[function_component(NotFound)]
pub fn not_found() -> Html {
    let navigator = use_navigator().unwrap();

    let on_button_click = Callback::from(move |_| {
        navigator.push(&Route::Home);
    });

    html! {
        <>
            <ErrorTemplate
                message={"Not Thing!"}
                button_text={"Go Home"}
                on_button_click={on_button_click}
            />
        </>
    }
}
