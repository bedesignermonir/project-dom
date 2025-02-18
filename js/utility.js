document.getElementById('barishal-flood-btn').addEventListener('click', function () {
    const donationInput = document.getElementById('barishal-flood-tk');
    const donationTaka = donationInput.value;
    const numberOfTaka = parseFloat(donationTaka);
    if (!isNaN(numberOfTaka)) {
        let displayTakaElement = document.getElementById('barishal-flood-tk-display');
        let displayTkNumber = parseFloat(displayTakaElement.innerText);
        const newDonation = displayTkNumber + numberOfTaka;
        displayTakaElement.innerText = newDonation;


        let mainBalanceDisplay = document.getElementById('main-balance');
        let mainBalanceNumber = parseFloat(mainBalanceDisplay.innerText);
        const newMainBalance = mainBalanceNumber - numberOfTaka;
        mainBalanceDisplay.innerText = newMainBalance;

        donationInput.value = "";
    }
    else {
        alert("Please write a number only");
    }

});