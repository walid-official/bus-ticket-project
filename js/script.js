const seatBook = document.querySelectorAll('.seat-selection button');
let apply_input = document.getElementById('applyInput');
let apply_btn = document.getElementById('applyBtn');
let grandTotal = document.getElementById('grand-total');
let totalPrice = document.getElementById('total-price');
let selectedSeat = document.getElementById('selected-option');
const nextBtn = document.getElementById('next-btn');
const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input')
const phoneInput = document.getElementById('phone-input')
let sum = 0;


for(const seat of seatBook){
   let clickOne = false;
    // Step-1
    seat.addEventListener('click', function(event){
   
    let option = `
         <div class="flex justify-between py-2">
            <h2 class="">${event.target.innerText}</h2>
            <h2>Economy</h2>
            <h2 id="main-price">550</h2>
        </div>
    `
        if(!clickOne){
            clickOne = true;
        }else{
            alert('Do not do this');
            return;
            
        }
        if(selectedSeat.childElementCount < 4){
            selectedSeat.innerHTML += option;
        }else{
            alert('Maximum seat is selected');
            return;
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
    // // Step-5
   

    })

}

apply_btn.addEventListener('click', function(){
    let applyValue = apply_input.value;
    if(applyValue === "wisdom"){
     resultGrand = sum - sum * 0.20;
     grandTotal.innerText = resultGrand.toFixed(2);
    }
})





phoneInput.addEventListener('keyup', function(event){
    if(event.target.value.length !== 11){
        nextBtn.setAttribute("disabled", true);
    }else{
        nextBtn.removeAttribute("disabled");
    }
});





























































// let optionContainer = document.getElementsByClassName('ticketValue');
// //    console.log(optionContainer);
//    let optionArray = []
//    for(let i =0; i < optionContainer.length; i++){
//     optionArray.push(optionContainer[i].innerText);
//    }
//    console.log(optionArray);
//     if(selectedSeat.childElementCount < 4 && !optionArray.includes(event.target.innerText)){
//         selectedSeat.innerHTML += option;
//     }else{
//         alert('Maximum seat is selected')
//     }