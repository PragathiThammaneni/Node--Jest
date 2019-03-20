class Item {

    constructor(name,price,onSale){
        this.name = name;
        this.price = price;
        this.onSale = onSale;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    get price(){
        return this._price;
    }

    set price(price){
        this._price = price;
    }

    get onSale(){
        return this._onSale;
    }

    set onSale(onSale){
        this._onSale = onSale;
    }
}


//module.exports=Item;

global.Item = Item;