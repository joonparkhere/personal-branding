use yew::prelude::*;

use crate::components::fixed_header::FixedHeader;

#[function_component(Home)]
pub fn home() -> Html {
    html! (
        <div>
            <FixedHeader />
        </div>
    )
}
