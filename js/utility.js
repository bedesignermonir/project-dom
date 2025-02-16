document.getElementById('barishal-flood-btn').addEventListener('click', function () {
    const donationTaka = document.getElementById('barishal-flood-tk').value;
    const numberOfTaka = parseFloat(donationTaka);
    if (!isNaN(numberOfTaka)) {
        let displayTakaElement = document.getElementById('barishal-flood-tk-display');
        let displayTkNumber = parseFloat(displayTakaElement.innerText);
        const newDonation = displayTkNumber + numberOfTaka;
        displayTakaElement.innerText = newDonation;
    }
    else {
        alert("Please write a number only");
    }

});