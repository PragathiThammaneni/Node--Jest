//const Item = require('./Item.js');

require('./Item.js');

var itemList = {};


class Cart {

    constructor(){
        itemList=new Map();
    }

    get itemList(){
        return itemList;
    }

  addItems(item,quantity){
        itemList.set(item,quantity);  
        return itemList.size;
    }

  getItems(){
         
        return itemList;
    }

  getItemizedList(){
        var listFormat=[];
        itemList.forEach((values, key, map)=>{
            listFormat.push(`${key.name} x${values} - $${key.price*values}`); 
        })
        return listFormat;
    }

  getItemQuantities(){
        var listFormat=[];
        itemList.forEach((values, key, map)=>{
            listFormat.push(`${key.name} -x${values}`); 
        })
        return listFormat;
    }
  
  getOnSaleItems(){
      var onSaleList = [];
      itemList.forEach((values,key,map) => {
          if(key.onSale){
              onSaleList.push(`${key.name} x${values} - $${key.price}`);
          }
      })
      return onSaleList;
  }

  getTotalPrice(){
      var totalPrice=0;

      itemList.forEach((values,key)=>{
          totalPrice += key.price*values;
      })
      return totalPrice;
  }
}

global.Cart=Cart;

