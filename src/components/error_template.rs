use yew::prelude::*;

use crate::components::rectangle_button::{RectangleButton, Size};

#[derive(Properties, Clone, PartialEq, Debug)]
pub struct Props {
    pub message: AttrValue,
    pub button_text: AttrValue,
    pub on_button_click: Callback<MouseEvent>,
}

#[function_component(ErrorTemplate)]
pub fn error_template(props: &Props) -> Html {
    let Props {
        message,
        button_text,
        on_button_click,
    } = props.clone();

    html! {
        <div class="flex flex-col w-full h-full justify-center items-center">
            <div class="mt-8 px-4 text-center text-4xl whitespace-pre">
                {message}
            </div>
            <div class="mt-8">
                <RectangleButton size={Size::Large} on_click={on_button_click}>
                    {button_text}
                </RectangleButton>
            </div>
        </div>
    }
}
