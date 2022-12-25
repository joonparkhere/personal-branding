use yew::prelude::*;

#[derive(Properties, Clone, PartialEq, Debug)]
pub struct Props {
    pub classes: Option<Classes>,
    pub children: Children,
}

#[function_component(BaseResponsive)]
pub fn base_responsive(props: &Props) -> Html {
    let Props {
        classes,
        children
    } = props.clone();

    html! {
        <div class={classes!(
            "w-[1728px]", "2xl:w-[1376px]", "xl:w-[1024px]", "md:w-[calc(100%-2rem)]", "mx-auto",
            classes
        )}>
            {children}
        </div>
    }
}
