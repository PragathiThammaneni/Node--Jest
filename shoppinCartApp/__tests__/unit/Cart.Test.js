
require('../../Cart.js');

let cart = new Cart();
var itemListTest = new Map();

//Test to check if cart is Empty
describe('#emptyCart()=> Cart',()=>{
    it('should be empty',()=>{
        expect(cart.itemList).toEqual(itemListTest);
    });
});

//Test to check the items are added correctly
describe('#addItems() => Cart', () => {
    it('should exist', () => {
        itemListTest.set(new Item("Handbag",2,false),100);
        expect(cart.addItems(new Item("Handbag",2,false),100)).toBe(itemListTest.size);
    });
});

//Test to get items in the cart
describe('#getItems()=> Cart', () =>{
    it('Check same itemList returned',()=>{

        //Add it to the map - Test
        itemListTest.set(new Item("Soap",2,true),4);

        //Add one dummy item
        var x = cart.addItems(new Item("Soap",2,true),4);

        //Compare - Test getItems
        expect(cart.getItems()).toEqual(itemListTest);


    });
});

//Test to get itemized list with quantity and total price for that item
describe('#getItemizedList() => Cart', () => {
    it('Get ItemizedList', () => {
        var expectedResult = ['Handbag x100 - $200', 'Soap x4 - $8'];
        expect(cart.getItemizedList()).toEqual(expectedResult);
    });
});

//Test to get item and quantity
describe('#getItemQuantities() => Cart', () => {
    it('Get Item Quantities', () => {
        var expectedResult = ['Handbag -x100', 'Soap -x4'];
        expect(cart.getItemQuantities()).toEqual(expectedResult);
    });
});

//Test to get on Sale items from the cart
describe('#getOnSaleItems => Cart', () => {
    it('Get only items that are on sale', () => {
        var expectedResult = ['Soap x4 - $2'];
        expect(cart.getOnSaleItems()).toEqual(expectedResult);
    });
});

//Test to get total price of all items in the cart
describe('#getTotalPrice => Cart',()=>{
    it('Get the total Price',()=>{
        expect(cart.getTotalPrice()).toBe(208);
    });
});

