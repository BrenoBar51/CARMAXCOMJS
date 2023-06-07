const linkDropdown = document.getElementById('more')
const locationDropdown = document.querySelector('#location')
const cardDropdown = document.querySelector('#link-dropdown')
function openLinkDropdown(){
    cardDropdown.style.display = 'flex'
}
function closeLinkDropdown(){
    cardDropdown.style.display = 'none'
}
function openLocationDropdown(){
    console.log('abriu')
}

linkDropdown.addEventListener('mouseover', openLinkDropdown)
linkDropdown.addEventListener('mouseout', closeLinkDropdown)
cardDropdown.addEventListener('mouseover', openLinkDropdown)
cardDropdown.addEventListener('mouseout', closeLinkDropdown)
locationDropdown.addEventListener('mouseover', openLocationDropdown)

// Formulario kkkkkk

const formulario = document.getElementById('form');
const license = document.getElementById('license');
const invalidLicense = document.getElementById('invalid-license');
const invalidState = document.getElementById('invalid-state');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const btn = document.getElementById('btn-send');
const btns = document.getElementById('btn')
let formLicenseValid = false
let formStateValid = false

function validLicenseInput() {
    const numberPattern = /^[0-9]/;
    if (license.value.match(numberPattern)) {
        license.style.border = '2px solid green'
        invalidLicense.style.display = 'none';
        formLicenseValid = true
        validBtnSubmit()
    } else {
        license.style.border = '2px solid red'
        invalidLicense.style.display = 'flex'
    }
}

function validStateInput() {
    if (state.value === 'ma') {
        alert('Estado indisponível')
    } else if (state.value) {
        state.style.border = '2px solid green'
        invalidState.style.display = 'none'
        formStateValid = true
        validBtnSubmit()
    } else {
        state.style.border = '2px solid red'
        invalidState.style.display = 'flex'
    }
}

function validBtnSubmit() {
    if (formLicenseValid && formStateValid) {
        btn.removeAttribute('disabled')
    }
}

function OnClickBtn(){
    console.log('clicou')
    btns.style.color = '#1773cf'
}

license.addEventListener('change', validLicenseInput)
state.addEventListener('change', validStateInput)
btns.addEventListener('click', OnClickBtn)