
const tea = 15.678;
const milk = 123.965;
const juice = 90.2345;

console.log (`Tea price ${tea}`);
console.log (`Milk price ${milk}`);
console.log (`Juice price ${juice}`);

/*максимальне число*/
const max = Math.max (tea,  milk, juice);
console.log (`Max product price - ${max}`);

/*мінімальне число*/
const min = Math.min (tea, juice, milk)
console.log (`Min product price - ${min}`);


/*вартість всіх товарів*/
const totalamount = (tea + milk + juice);
console.log ( `Total amount of products - ${totalamount}`);


console.log (`Округлення значення в меньшу сторону Tea ${Math.floor(tea)}`);
console.log (`Округлення значення в меньшу сторону Milk ${Math.floor(milk)}`);
console.log (`Округлення значення в меньшу сторону Juice ${Math.floor(juice)}`);

/*Округлення товарів в МЕНЬШУ сторону*/
console.log (`Округлення значення в меньшу сторону Products ${Math.floor(totalamount)}`);

/*сума товарів округлену до сотень.*/
console.log ( `Сума товарів округлена до сотень ${Math.round(totalamount/100)*100}`);


/*булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним
чи непарним числом*/
if (totalamount % 2 === 0) {
    console.log(true)
 } else {
    console.log(false)
 }

/*сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500
грн.*/
 const ClientPayment = 500;
 const ClientRest = ClientPayment - Math.floor(totalamount);
 console.log (`ClientRest - ${ClientRest}`);

 /*середнє значення цін, округлене до другого знаку після коми*/
 const Averagevalue = (totalamount/3).toFixed(2);
 console.log (`Average value - ${Averagevalue}`);

/* випадкова знижка*/
const discount = (Math.random() * 100).toFixed(0);
console.log (`Client discount - ${discount}`);

/*const priceWithDiscount = (sumOfProducts - (sumOfProducts / 100 * discount)).toFixed(2);
console.log(`Сума до оплати зі знижкою: ${priceWithDiscount} грн`);*/

/*Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів
рівно в два рази нижче їх ціни?*/
const priceAfterDiscount = (totalamount - (totalamount/100 * discount)).toFixed(2);
console.log (`Price after discount - ${priceAfterDiscount} грн`);

const profit = (totalamount/2- priceAfterDiscount).toFixed(0);
console.log (`Profit -  ${profit} грн`)

console.log(`Tea price ${tea} Milk price ${milk} Juice price ${juice} Max product price - ${max} Min product price - ${min} Total amount of products - ${totalamount} Округлення значення в меньшу сторону ${Math.floor(tea)} ${Math.floor(milk)}${Math.floor(juice)} значення в меньшу сторону Products ${Math.floor(totalamount)} Сума товарів округлена до сотень ${Math.ceil(totalamount / 100) * 100} ClientRest - ${ClientRest} Average value - ${Averagevalue} Client discount - ${discount} Price after discount - ${priceAfterDiscount} Profit -  ${profit}`);

