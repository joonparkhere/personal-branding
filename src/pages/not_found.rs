use yew::prelude::*;
use stylist::yew::use_style;

#[function_component]
pub fn NotFound() -> Html {
    let style = use_style!(r#"
        color: red;
    "#);

    html! {
        <>
            <h1>
                { "Page not found" }
            </h1>
            <div class={style}>
                { "Page page does not seem to exist" }
            </div>
        </>
    }
}
