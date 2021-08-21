document.getElementById('memory-low').addEventListener('click', function () {
    const memorycharge = document.getElementById('extraMemory-price');
    const memorychargeText = parseFloat(memorycharge.innerText);
    memorycharge.innerText = '0';

})

document.getElementById('memory-high').addEventListener('click', function () {
    const memorycharge = document.getElementById('extraMemory-price');
    const memorychargeText = memorycharge.innerText;
    memorycharge.innerHTML = '180';
    const memorychargenumber = parseFloat(memorycharge.innerText);

    const totalCharge = document.getElementById('total-charge');
    const totalChargeText = totalCharge.innerText;
    let totalChargeNumber = parseFloat(totalCharge.innerText)
    totalCharge.innerText = memorychargenumber + totalChargeNumber;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    let totalPriceNumber = parseFloat(totalPrice.innerText)
    totalPrice.innerText = memorychargenumber + totalChargeNumber;
})

// storage price 

document.getElementById('low-storage').addEventListener('click', function () {
    const storageCharge = document.getElementById('extraStorage-price');
    const storageChargeNumber = parseFloat(storageCharge.innerText);
    storageCharge.innerText = '0';

    const totalCharge = document.getElementById('total-charge');
    const totalChargeText = totalCharge.innerText;
    totalCharge.innerText = '1299';

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    totalPrice.innerText = '1299';
})

document.getElementById('medium-storage').addEventListener('click', function () {
    const storageCharge = document.getElementById('extraStorage-price');
    const storageChargeText = storageCharge.innerText;
    storageCharge.innerText = '100';
    const storageChargeNumber = parseFloat(storageCharge.innerText);

    const totalCharge = document.getElementById('total-charge');
    const totalChargeText = totalCharge.innerText;
    let totalChargeNumber = parseFloat(totalCharge.innerText)
    totalCharge.innerText = storageChargeNumber + totalChargeNumber;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    let totalPriceNumber = parseFloat(totalPrice.innerText)
    totalPrice.innerText = storageChargeNumber + totalChargeNumber;
})

document.getElementById('high-storage').addEventListener('click', function () {
    const storageCharge = document.getElementById('extraStorage-price');
    const storageChargeText = storageCharge.innerText;
    storageCharge.innerText = '180';
    const storageChargeNumber = parseFloat(storageCharge.innerText);

    const totalCharge = document.getElementById('total-charge');
    const totalChargeText = totalCharge.innerText;
    let totalChargeNumber = parseFloat(totalCharge.innerText)
    totalCharge.innerText = storageChargeNumber + totalChargeNumber;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    let totalPriceNumber = parseFloat(totalPrice.innerText)
    totalPrice.innerText = storageChargeNumber + totalChargeNumber;
})


// delivery charge 


document.getElementById('free-delivery').addEventListener('click', function () {

    const delivaryCharge = document.getElementById('delivery-charge')
    const delivaryChargeText = delivaryCharge.innerText;
    delivaryCharge.innerText = '0';
    const delivaryChargenumber = parseFloat(delivaryCharge.innerText);

    const totalCharge = document.getElementById('total-charge');
    const totalChargeText = totalCharge.innerText;
    totalCharge.innerText = '1299';

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    totalPrice.innerText = '1299';
})

document.getElementById('cost-delivery').addEventListener('click', function () {
    
    const delivaryCharge = document.getElementById('delivery-charge')
    const delivaryChargeText = delivaryCharge.innerText;
    delivaryCharge.innerText = '20';
    const delivaryChargenumber = parseFloat(delivaryCharge.innerText);

    const totalCharge = document.getElementById('total-charge');
    const totalChargeText = totalCharge.innerText;
    let totalChargeNumber = parseFloat(totalCharge.innerText)
    totalCharge.innerText = delivaryChargenumber + totalChargeNumber;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    let totalPriceNumber = parseFloat(totalPrice.innerText)
    totalPrice.innerText = delivaryChargenumber + totalChargeNumber;

})






