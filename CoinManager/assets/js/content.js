'use strict'
var CoinItem = function(text){
    if(text){
        var obj = JSON.parse(text);
        this.name = obj.name;
        this.time = obj.time;
        this.price = obj.price;
        this.place = obj.place;
    }
};

CoinItem.prototype ={
     toString : function(){
        return JSON.stringify(this)
    }
};

var TheContent= function () {
    LocalContractStorage.defineMapProperty(this, "data", {
        parse: function (text) {
            return new CoinItem(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
    LocalContractStorage.defineMapProperty(this, "arrayMap");
    LocalContractStorage.defineProperty(this, "size");
};

TheContent.prototype = {
    init:function(){
        this.size = 0;
    },
     save:function(name,time,price,place){
        if(!name || !time || !price || !place){
            throw new Error("empty content")
        }
        var from = Blockchain.transaction.from;
        var coinItem = new CoinItem();
        coinItem.name = name;
        coinItem.time = time;
        coinItem.price = price;
        coinItem.place = place;

        var index = this.size;
        this.arrayMap.set(index, name);
        this.data.put(name,coinItem);
        this.size +=1;
        return coinItem.name;
    },

    get:function(name){
          var from = Blockchain.transaction.from;
          var list =[];
          for(var i=0;i<this.size;i++){
            var key = this.arrayMap.get(i);
            var object = this.data.get(key);
            list.push(object);
        }
          return list;
    }
}
module.exports = TheContent;