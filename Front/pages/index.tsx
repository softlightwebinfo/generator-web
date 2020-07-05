import * as React from "react";
import {Template} from "../Framework/Components/Template";
import {ContainerComponent, GridComponent} from "@codeunic/library-ui/build";
import {TitleCategoryContent} from "../Framework/Components/TitleCategoryContent";
import {settingsMenu, settingsMenuLayouts} from "../settings";
import {Separator} from "../Framework/Components/Separator";
import {PageGenerated} from "../Framework/Containers/PageGenerated";

export default () => (
    <Template>
        <ContainerComponent fixed maxWidth={false}>
            <GridComponent spacing={4} item container>
                <GridComponent item xs={12} sm={12} md={9} xl={10}>
                    <PageGenerated/>
                </GridComponent>
                <GridComponent item xs={12} sm={12} md={3} xl={2}>
                    <div>
                        <TitleCategoryContent
                            label={"Componentes"}
                            menu={settingsMenu}
                        />
                        <Separator/>
                        <TitleCategoryContent
                            label={"Layouts"}
                            menu={settingsMenuLayouts}
                        />
                    </div>
                </GridComponent>
            </GridComponent>
        </ContainerComponent>
    </Template>
);
