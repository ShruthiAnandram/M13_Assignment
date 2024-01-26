const $ = (id) => document.getElementById(id)

const createBank = function () {
    // PRIVATE VARIABLES AND FUNCTIONS
    let name
    let balance = 0
    let depositAmount
    let withdrawAmount

    return {
        // PUBLIC FUNCTIONS
        getName : function() {
                let me = this;
                name = prompt("Enter the name of the customer")
        },
    
        getDepositAmount : function() {
                let me = this;
                depositAmount = Number(prompt("Enter the amount to deposit"));
                balance += depositAmount
                $("output").innerHTML = "The customer is : " + name + "<br>" + " The balance is : " + balance
        },
        
        getWithdrawAmount : function() {
                let me = this;
                withdrawAmount = Number(prompt("Enter the amount to withdaw"))
                if (balance <= 0) {
                    alert("You have zero balance. Please deposit some amount! ")
                }
                else {
                    balance -= withdrawAmount
                }
                $("output").innerHTML = "The customer is : " + name + "<br>" + "The balance is : " + balance
                
        }
    }

}

// CREATE THE BANK OBJECT
const bankObj = createBank()

window.addEventListener('load', () => {
    $("name").addEventListener("click", bankObj.getName);
    $("deposit").addEventListener("click", bankObj.getDepositAmount);
    $("withdraw").addEventListener("click", bankObj.getWithdrawAmount);
});