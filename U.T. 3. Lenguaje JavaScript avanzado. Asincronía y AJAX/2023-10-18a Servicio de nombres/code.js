document.addEventListener('DOMContentLoaded', setup);


function setup(e) {
    const nButton = document.getElementById('tButAskfor');
    nButton.addEventListener('click', retrieveAndShowNames);
}


function retrieveAndShowNames(_) {

    const nNumber = document.getElementById('tNmbQuantity');
    const quantity = nNumber.value;

    // const nRadioMale = document.getElementById('tRadMale');
    // const nRadioFemale = document.getElementById('tRadFemale');
    // const nRadioBoth = document.getElementById('tRadBoth');

    // let gender;
    // if (nRadioMale.checked) {
    //     gender = nRadioMale.value;
    // } else if (nRadioFemale.checked) {
    //     gender = nRadioFemale.value;
    // } else {
    //     gender = nRadioBoth.value;
    // }

    const gender = document.querySelector('input[type = "radio"][name ="gender"]:checked').value;

    const url = `https://namey.muffinlabs.com/name.json?count=${quantity}&type=${gender}`;
    fetch(url)
        .then(response => response.json())
        .then(fillTable)
        .catch(console.error)
}


function fillTable(names) {
    const nTbody = document.getElementById('tTdbNames');
    // nTbody.innerHTML = '';
    while (nTbody.hasChildNodes()) {
        nTbody.removeChild(nTbody.firstChild);
    }

    names.forEach(name => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTd = document.createElement('td');
        nTr.appendChild(nTd);

        nTd.textContent = name;
    });

}