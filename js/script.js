const seatBook = document.querySelectorAll('.seat-selection button');
let apply_input = document.getElementById('applyInput');
let apply_btn = document.getElementById('applyBtn');
let sum = 0;
for(const seat of seatBook){
   
    // Step-1
    seat.addEventListener('click', function(event){
    let selectedSeat =   document.getElementById('selected-option');
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
    
    // console.log(selectedSeat.childElementCount);
    // step-2
    let mainPrice = document.getElementById('main-price');
    let totalPrice = document.getElementById('total-price');
    let mainPriceNumber = Number(mainPrice.innerText);
    sum += mainPriceNumber
    totalPrice.innerText = sum;
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
    // Step-5
    });

}

let grandTotal = document.getElementById('grand-total');
apply_btn.addEventListener('click', function(){
    if(apply_input.value === "Wisdom"){
       console.log('hello world');
    }
})