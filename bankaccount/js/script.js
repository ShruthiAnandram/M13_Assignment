const $ = (id) => document.getElementById(id)

const createBank = function () {
    // PRIVATE VARIABLES AND FUNCTIONS
    let name
    let balance = 0
    let depositAmount
    let withdrawAmount

    const displayNameAndDetails =  function () {
        $('output').innerHTML = name +" "+ balance
    };
    return displayNameAndDetails;


   const getName = function () {
            let me = this;
            name = prompt("Enter the name of the customer")
            console.log("the name is " + name)
    };
    return getName;

    const getDepositAmount = function () {
            let me = this;
            depositAmount = prompt("Enter the amount to deposit");
            balance += depositAmount
            console.log("the balance is " + balance)
    };
    return getDepositAmount;

    const getWithdrawAmount = function () {
            let me = this;
            withdrawAmount = prompt("Enter the amount to withdaw")
            if (balance <= 0) {
                alert("You have zero balance. Please deposit some amount! ")
            }
            balance -= withdrawAmount
            console.log("the balance is " + balance)
    };
    return getWithdrawAmount;

}

// CREATE THE BANK OBJECT
const bankObj = createBank()

window.addEventListener('load', () => {
    $("name").addEventListener("click", bankObj.getName);
    $("deposit").addEventListener("click", bankObj.getDepositAmount);
    $("withdraw").addEventListener("click", bankObj.getWithdrawAmount);
});