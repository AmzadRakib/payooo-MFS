// get the button which you clicked for work
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()

    // get the amount which you add
    const getAddAmount = document.getElementById('input-add-money').value;

    // get the pin Number of your id for confirmation
    const getAddAmountPin = document.getElementById('input-pin-number').value;
    console.log(getAddAmount, getAddAmountPin);
});