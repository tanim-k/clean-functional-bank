// make common work function 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;    
}
function updateAmount(id, amount) {
    // console.log(id,amount);  --- VHUL KHUJTE ETA KHUBBI HELP KORE: 
    const totalTag = document.getElementById(id);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = '';
}
// HANDLE DEPOSIT
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    updateAmount('deposit-total', amount);
})
// HANDLE WITHDRAW
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    updateAmount('withdraw-total', amount);
})