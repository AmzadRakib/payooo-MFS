// get the button which you clicked for work
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()

    // get the amount which you add
    const getAddAmount = document.getElementById('input-add-money').value;

    // get the pin Number of your id for confirmation
    const getAddAmountPin = document.getElementById('input-pin-number').value;

    // Get the main balance of your account 
    const mainBalance = document.getElementById('main-balance').innerText;

    if (getAddAmountPin === '1234') {
        const newBalance = parseFloat(getAddAmount) + parseFloat(mainBalance);
        document.getElementById('main-balance').innerText = newBalance;
    }
    else {
        alert("You Made Some Mistake , please try again");
    }
});