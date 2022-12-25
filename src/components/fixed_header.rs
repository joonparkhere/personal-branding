use yew::prelude::*;
use yew_router::prelude::*;

use crate::components::base_responsive::BaseResponsive;
use crate::Route;

#[function_component(FixedHeader)]
pub fn fixed_header() -> Html {
    html! (
        <div class="h-16">
            <BaseResponsive classes={Classes::from("h-full flex justify-between text-center")}>
                <div class="flex items-center">
                    <Link<Route> to={Route::Home}>
                        <img class="h-12" src="static/svg/logo.svg" alt="logo image" />
                    </Link<Route>>
                </div>
                <div class="flex items-center">
                    {"Theme Toggle Holder"}
                </div>
            </BaseResponsive>
        </div>
    )
}
