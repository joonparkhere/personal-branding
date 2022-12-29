use std::rc::Rc;
use yew::prelude::*;
use serde::{Serialize, Deserialize};
use gloo::storage::{LocalStorage, Storage};

const THEME_KEY: &str = "theme";

#[derive(Serialize, Deserialize, Clone, PartialEq, Eq, Debug)]
pub enum Theme {
    Light,
    Dark,
}

#[derive(Clone)]
pub struct UseTheme {
    theme: UseStateHandle<Theme>,
    toggle: Rc<dyn Fn()>,
}

impl UseTheme {
    pub fn toggle(self) {
        (self.toggle)()
    }
}

#[hook]
pub fn use_theme() -> UseTheme {
    let theme = use_state_eq(|| (
        LocalStorage::get::<Theme>(THEME_KEY).unwrap_or(Theme::Light)
    ));
    let toggle = {
        let theme = theme.clone();
        Rc::new(move || {
            match *theme {
                Theme::Light => {
                    LocalStorage::set::<Theme>(THEME_KEY, Theme::Dark)
                        .expect("Theme variable should be set into the local storage");
                }
                Theme::Dark => {
                    LocalStorage::set::<Theme>(THEME_KEY, Theme::Light)
                        .expect("Theme variable should be set into the local storage");
                }
            };
        })
    };

    UseTheme {
        theme,
        toggle,
    }
}
