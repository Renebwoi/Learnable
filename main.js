console.log("hello")
let goods = ["apple","orange", "mango", "pear", "papaya"];
let prices = [350,200,250,300,450];
var cash = 1000;

var cartArray = [];

function Ecom(){

let goodsSelect =  prompt(`Select your product. Apples 350, Orange 200, Mango 250, Pear 300, Papaya 450 and cart to access the cart`, "").toLowerCase();
let amountSelect = Number(prompt(`Select your amount. For cart it's 0`, "1"));
let selectedItem = [];

for (let i=0;i<goods.length;i++){
if (goodsSelect == goods[i]) {
    selectedItem[0] = goods[i];
    selectedItem[1] = amountSelect;
    selectedItem[2] = prices[i] * amountSelect;

    console.log(selectedItem)
    cartArray.push(selectedItem)
    console.log(cartArray)
    Ecom();
} else if (goodsSelect == "cart"){
    return ShowCart(cartArray)
}

}

}
Ecom();


function ShowCart(array) {
    console.log("your items:")
    var grandTotal = 0;
    for (let p=0;p<array.length;p++){
        grandTotal = grandTotal + array[p][2];
        console.log( p+1 + " You bought "  + array[p][1] + " " + array[p][0] + " which totals " + array[p][2] )
    }
    let finalPay = Number(prompt(`Your Grand Total is ${grandTotal}. Select 1 to pay or 2 to continue shopping`, "1"));
    if(finalPay == 1){
        if(grandTotal < cash){
            cash = cash - grandTotal;
            console.log("You have paid. Balance is : " +grandTotal)
        }else{
            console.log("insufficient funds")
        }
    }
}