export class MenuModel {
    private _icon: any;
    private _name: string;

    get icon(): any {
        return this._icon;
    }

    set icon(value: any) {
        this._icon = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    constructor(name: string, icon: any) {
        this._name = name;
        this._icon = icon;
    }
}
