import {Component} from "react";
import * as React from "react";
import {BEM, CardComponent} from "@codeunic/library-ui/build";

export class PageGenerated extends Component {
    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        let bm = new BEM("Page", {});
        return (
            <div className={bm.toString()}>
                <CardComponent>
                    hola
                </CardComponent>
            </div>
        )
    }
}
