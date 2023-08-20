// click card fot getting price
let total = 0;

function cardClick(target){
    const itemscontainer = document.getElementById('selected-items');
    const cardName = target.childNodes[3].childNodes[1].innerText;
    const count = itemscontainer.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${cardName}`;
    itemscontainer.appendChild(p);

    const price = target.childNodes[3].childNodes[5].childNodes[0].innerText;

    total = parseFloat(total) + parseFloat(price);
    document.getElementById('total').innerText = total.toFixed(2);

    if(total =>200){
        document.getElementById('discount-btn') = 
    }

     console.log(total);
    
}