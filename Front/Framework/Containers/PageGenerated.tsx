import {Component} from "react";
import * as React from "react";
import {BEM, CardComponent} from "@codeunic/library-ui/build";
import {Header} from "../Generators/Header";
import TitleCategoryContext from "../context/TitleCategoryContext";
import {MenuModel} from "../../MenuModel";

export class PageGenerated extends Component<{
    content: MenuModel[];
}> {
    static contextType = TitleCategoryContext;

    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        let bm = new BEM("Page", {});
        return (
            <div className={bm.toString()}>
                <CardComponent>
                    {this.content()}
                </CardComponent>
            </div>
        )
    }

    private content() {
        const {content} = this.props;
        return content.map((item, index) => {
            switch (item.key) {
                case "header": {
                    return (
                        <Header/>
                    )
                }
            }
            return null;
        });
    }
}
