        


        function calcTotal() {

            var itemTotal = 0;

            var item1 = document.getElementById("item1");
            var item2 = document.getElementById("item2");
            var item3 = document.getElementById("item3");
            var item4 = document.getElementById("item4");
            var item5 = document.getElementById("item5");

            var item6 = document.getElementById("item6");
            var item7 = document.getElementById("item7");
            var item8 = document.getElementById("item8");
            var item9 = document.getElementById("item9");
            var item10 = document.getElementById("item10");

            var item11 = document.getElementById("item11");
            var item12 = document.getElementById("item12");
            var item13 = document.getElementById("item13");


                        (item1.checked) ? (itemTotal += 8.99) : (itemTotal += 0);
                        (item2.checked) ? (itemTotal += 6.99) : (itemTotal += 0);
                        (item3.checked) ? (itemTotal += 9.99) : (itemTotal += 0);
                        (item4.checked) ? (itemTotal += 10.99) : (itemTotal += 0);
                        (item5.checked) ? (itemTotal += 12.99) : (itemTotal += 0);
                        (item6.checked) ? (itemTotal += 13.99) : (itemTotal += 0);
                        (item7.checked) ? (itemTotal += 14.99) : (itemTotal += 0);
                        (item8.checked) ? (itemTotal += 12.99) : (itemTotal += 0);
                        (item9.checked) ? (itemTotal += 10.99) : (itemTotal += 0);
                        (item10.checked) ? (itemTotal += 2.99) : (itemTotal += 0);
                        (item11.checked) ? (itemTotal += 13.99) : (itemTotal += 0);
                        (item12.checked) ? (itemTotal += 7.99) : (itemTotal += 0);
                        (item13.checked) ? (itemTotal += 8.99) : (itemTotal += 0);

            var SalesTaxRate = 13;
            var SalesTax = (itemTotal  * SalesTaxRate ) / 100;
            var orderTotal = itemTotal + SalesTax ;
            var roundedTotal = orderTotal.toFixed(2);
            alert("Your order total is $" + roundedTotal)

}
document.getElementById("submit").addEventListener("click", calcTotal, false);