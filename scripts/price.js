// click card fot getting price
let totalPrice = 0;

function cardClick(target){
    const itemscontainer = document.getElementById('selected-items');
    const cardName = target.childNodes[3].childNodes[1].innerText;
    const count = itemscontainer.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${cardName}`;
    itemscontainer.appendChild(p);
    

    const price = target.childNodes[3].childNodes[5].childNodes[0].innerText;

    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

    const purchaseButton = document.getElementById('purchase-btn');
    const discountButton = document.getElementById('discount-btn');

    if(totalPrice > 0){
        purchaseButton.removeAttribute('disabled');


        if(totalPrice >= 200){
            discountButton.removeAttribute('disabled')
        }
        
    }
    else{
        purchaseButton.setAttribute('disabled')
    }
    
}
    function discountCalculation(target){
        const couponCode = document.getElementById('coupon-code');
        const coupon = couponCode.innerText;
        const input = document.getElementById('input-field');
        
        if(input.value === coupon){
            const discountPrice =  totalPrice * 0.2;
            const discount = discountPrice.toFixed(2);
        
            document.getElementById('discount').innerText = discount;
            const total = document.getElementById('total');
            const finalPrice = totalPrice - discount;
            total.innerText = finalPrice.toFixed(2);
        }
        else{
        alert('Sorry!!! Wrong coupon code')
        }
        input.value = '';
    }
    function goHomeBtn(target){
        window.location.href = 'index.html'

    }