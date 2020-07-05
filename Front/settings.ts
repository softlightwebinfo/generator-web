import {MenuModel} from "./MenuModel";

export const settingsMenu = [
    new MenuModel("Header", "menu", "header"),
    new MenuModel("Text", "menu", "text"),
    new MenuModel("Container", "menu", "container"),
    new MenuModel("Grid", "menu", "grid"),
    new MenuModel("Ads", "menu", "ads"),
    new MenuModel("Title", "menu", "title"),
    new MenuModel("Card", "menu", "card"),
    new MenuModel("List", "menu", "list"),
];
export const settingsMenuLayouts = [
    new MenuModel("Form", "menu","form"),
    new MenuModel("Aside", "menu","aside"),
    new MenuModel("Dashboard", "menu","dashboard"),
    new MenuModel("Carousel", "menu","carousel"),
];

export const API = "http://localhost:3000/api";

export const getApi = (url: string) => `${API}/${url}/`;
