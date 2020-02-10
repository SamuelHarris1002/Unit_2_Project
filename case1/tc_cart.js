"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Samuel Harris
   Date:   02/03/20
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;

var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

for(var i = 0; i < item.length; i++){
   cartHTML += "<tr><td>" +<img src=" + item[i] + "alt=" + item[i] + "/></td>;
   cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";

   var itemCost = itemPrice[i]*itemQty[i];

   cartHTML += "<td>$" + itemcost + "</td></tr>";

   itemCost += orderTotal;

}

