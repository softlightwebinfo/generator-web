import {MenuModel} from "./MenuModel";

export const settingsMenu = [
    new MenuModel("Header", "menu"),
    new MenuModel("Text", "menu"),
    new MenuModel("Container", "menu"),
    new MenuModel("Grid", "menu"),
    new MenuModel("Ads", "menu"),
    new MenuModel("Title", "menu"),
    new MenuModel("Card", "menu"),
    new MenuModel("List", "menu"),
];
export const settingsMenuLayouts = [
    new MenuModel("Form", "menu"),
    new MenuModel("Aside", "menu"),
    new MenuModel("Dashboard", "menu"),
    new MenuModel("Carousel", "menu"),
    new MenuModel("Ads", "menu"),
    new MenuModel("Title", "menu"),
    new MenuModel("Card", "menu"),
    new MenuModel("List", "menu"),
];

export const API = "http://localhost:3000/api";

export const getApi = (url: string) => `${API}/${url}/`;
