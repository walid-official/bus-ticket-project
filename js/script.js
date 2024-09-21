const seatBook = document.querySelectorAll('.seat-selection button');
let apply_input = document.getElementById('applyInput');
let apply_btn = document.getElementById('applyBtn');
let grandTotal = document.getElementById('grand-total');
let totalPrice = document.getElementById('total-price');
let selectedSeat =   document.getElementById('selected-option');
let sum = 0;
let counting = 0;

for(const seat of seatBook){
   
    // Step-1
    seat.addEventListener('click', function(event){
   
    let option = `
         <div class="flex justify-between py-2">
            <h2 class="">${event.target.innerText}</h2>
            <h2>Economy</h2>
            <h2 id="main-price">550</h2>
        </div>
    `
        if(selectedSeat.childElementCount < 4){
            selectedSeat.innerHTML += option;
        }else{
            alert('Maximum seat is selected')
        }
    // step-2
    let mainPrice = document.getElementById('main-price');
    let mainPriceNumber = Number(mainPrice.innerText);
    sum += mainPriceNumber
    resultTotalPrice = sum;

    totalPrice.innerText = resultTotalPrice.toFixed(2);
    // Step-3
    let seatNumber = document.getElementById('seat-number')
    seatNumberConvert = Number(seatNumber.innerText);
    seatNumberConvert++;
    seatNumber.innerText = seatNumberConvert;
    // Step-4
    
    if(seatNumber.innerText == 4){
        apply_input.removeAttribute("disabled");
        apply_btn.removeAttribute("disabled");
    }
    })

    seat.addEventListener("click", function(){
        counting++;
        if(counting == 2){
            alert('This button is taken');
            counting = 0;
        }
    })
}

apply_btn.addEventListener('click', function(){
    let applyValue = apply_input.value;
    if(applyValue === "wisdom"){
     resultGrand = sum - sum * 0.20;
     grandTotal.innerText = resultGrand.toFixed(2);
    }
})