function addPatient() {
    // get table
    let tableBody = document.getElementById('patientsList');

    // get input
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let condition = document.getElementById('condition').value;
    let date = document.getElementById('date').value;
    let doctor = document.getElementById('doctor').value;
    
    // create a td for name, age, condition, date, doctor
    let newRow = tableBody.insertRow();
    let nameCell = newRow.insertCell();
    let ageCell = newRow.insertCell();
    let conditionCell = newRow.insertCell();
    let dateCell = newRow.insertCell();
    let doctorCell = newRow.insertCell();

    console.log('Patient added succesfully.');

    nameCell.innerHTML = name;
    ageCell.innerHTML = age;
    conditionCell.innerHTML = condition;
    dateCell.innerHTML = date;
    doctorCell.innerHTML = doctor;

    // Form reset 
    let form = document.getElementById('patientForm');
    form.reset();
}

