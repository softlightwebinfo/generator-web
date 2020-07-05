import {TitleCategory} from "./TitleCategory";
import {Separator} from "./Separator";
import {GridComponent} from "@codeunic/library-ui/build";
import {CardOption} from "./CardOption";
import * as React from "react";
import {ITitleCategoryContentProps} from "../Props/ITitleCategoryContentProps";

export const TitleCategoryContent = (props: ITitleCategoryContentProps) => (
    <div className={"TitleCategoryContent"}>
        <TitleCategory label={props.label}/>
        <Separator/>
        <GridComponent container spacing={1} item>
            {props.menu.map((menu, index) => (
                <GridComponent key={index} item xs={12} sm={3}>
                    <CardOption
                        icon={menu.icon}
                        name={menu.name}
                    />
                </GridComponent>
            ))}
        </GridComponent>
    </div>
);
