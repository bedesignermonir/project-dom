document.getElementById('barishal-flood-btn').addEventListener('click', function () {
    const donationTaka = document.getElementById('barishal-flood-tk').value;
    const numberOfTaka = parseFloat(donationTaka);
    if (!isNaN(numberOfTaka)) {
        console.log('The value is correct');
    }
    else {
        alert("Please write a number only");
    }

});