use yew::prelude::*;

#[derive(Clone, PartialEq, Eq, Debug)]
pub enum Color {
    Transparent,
    Violet,
    LightGray,
    Gray,
    DarkGray,
    Red,
}

#[derive(Clone, PartialEq, Eq, Debug)]
pub enum Size {
    Small,
    Medium,
    Large,
}

#[derive(Properties, Clone, PartialEq, Debug)]
pub struct Props {
    #[prop_or(Color::Violet)]
    pub color: Color,
    #[prop_or(Size::Medium)]
    pub size: Size,
    pub on_click: Callback<MouseEvent>,
    pub children: Children,
}

#[function_component(RectangleButton)]
pub fn rectangle_button(props: &Props) -> Html {
    let Props {
        color,
        size,
        on_click,
        children,
    } = props.clone();

    let color_classes = derive_color_classes(color);
    let size_classes = derive_size_classes(size);

    html! {
        <button class={classes!(
            "inline-flex", "justify-center", "items-center", "pt-0", "pb-0", "font-bold", "outline-0", "border-0", "rounded", "cursor-pointer",
            color_classes, size_classes
        )} onclick={on_click}>
            {children}
        </button>
    }
}

fn derive_color_classes(color: Color) -> String {
    match color {
        Color::Transparent => {
            String::from("bg-transparent-bg text-transparent-text hover:bg-transparent-hover")
        }
        Color::Violet => {
            String::from("bg-violet-bg text-violet-text hover:bg-violet-hover")
        }
        Color::LightGray => {
            String::from("bg-lightGray-bg text-lightGray-text hover:bg-lightGray-hover")
        }
        Color::Gray => {
            String::from("bg-gray-bg text-gray-text hover:bg-gray-hover")
        }
        Color::DarkGray => {
            String::from("bg-darkGray-bg text-darkGray-text hover:bg-darkGray-hover")
        }
        Color::Red => {
            String::from("bg-red-bg text-red-text hover:bg-red-hover")
        }
    }
}

fn derive_size_classes(size: Size) -> String {
    match size {
        Size::Small => {
            String::from("h-6 px-4 text-xs")
        }
        Size::Medium => {
            String::from("h-8 px-5 text-base")
        }
        Size::Large => {
            String::from("h-10 px-6 text-lg")
        }
    }
}
