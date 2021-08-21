const actualPrice = document.getElementById('actual-price');
const memoryPrice = document.getElementById('extraMemory-price');
const storagePrice = document.getElementById('extraStorage-price');
const delivaryPrice = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-charge');
const discount= document.getElementById('discount-price');



document.getElementById('low-memory').addEventListener('click', function () {
    memoryPrice.innerText = '0';
  

    updatePrice()
})
document.getElementById('high-memory').addEventListener('click', function () {
    memoryPrice.innerText = '180';
   
    updatePrice()
})

// storage price 

document.getElementById('low-storage').addEventListener('click', function () {
    storagePrice.innerText = '0';
    
    updatePrice()
})
document.getElementById('medium-storage').addEventListener('click', function () {
    storagePrice.innerText = '100';
    
    updatePrice()
})
document.getElementById('high-storage').addEventListener('click', function () {
    storagePrice.innerText = '180';
   
    updatePrice()
})

// delivary Charge
document.getElementById('free-delivery').addEventListener('click', function () {
    delivaryPrice.innerText = '0';
    
    updatePrice()
})
document.getElementById('cost-delivery').addEventListener('click', function () {
    delivaryPrice.innerText = '20';
    
    updatePrice()
})



// total price 
function updatePrice() {
    const memoryCharge = parseInt(memoryPrice.innerText);
    const storageCharge = parseInt(storagePrice.innerText);
    const delivaryCharge = parseInt(delivaryPrice.innerText);
    const actualCharge = parseInt(actualPrice.innerText);
    const total = memoryCharge + storageCharge + delivaryCharge+actualCharge;
    totalPrice.innerText = total;
    discount.innerText=total;
}

// discount price 
discount.innerText=total;







// function promoPrice(promo) {
//     if(promo=='stevekaku'){
//         const discount = totalPrice-(totalPrice/20);
//     }
//     return discount;
// }

// document.getElementById('promo-value').addEventListener('click',function() {
//      promoPrice();   
// })



