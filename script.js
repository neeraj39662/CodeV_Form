function submitForm() {

    if (validateForm()) {
        
        displayPopup();
    } 
    else {
        alert("Please fill in all required fields.");
    }
}




function validateForm() {

    let form = document.getElementById('surveyForm');
    return form.checkValidity();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function displayPopup() {
    let popup = document.getElementById('popup');
    let popupResult = document.getElementById('popupResult');


    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let country = document.getElementById('country').value;
    let gender = document.getElementById('male').checked ? 'Male' : 'Female';
    let profession = document.getElementById('profession').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;


    popupResult.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

 
    popup.style.display = 'flex';
}

function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';


    resetForm();
}


function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function resetAndClose() {
    resetForm();
    closePopup();
}
