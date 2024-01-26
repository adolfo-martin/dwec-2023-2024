export class Product {

    constructor(private _uuid: string, private _name: string, private _price: number) { }

    public get uuid(): string {
        return this._uuid;
    }

    public get name(): string {
        return this._name;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }
}