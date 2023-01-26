let passValue = document.querySelector('.password-box input');
let copyBtn = document.querySelector('.password-box #copy-btn');
let passIndicator = document.querySelector('.indicator-box .indicator');
let passLength = document.querySelector('.password-length-box input');
let passLengthText = document.querySelector('.password-length-box .pass-length-value');

let options = document.querySelectorAll('.settings div input');
let generateBtn = document.querySelector('.generate-btn');

const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+=-}{[];:/.>?>,"

};

let generatePassword = ()=>{
    let strongPassword ="";
    let randomPassword ="";
    let length = passLength.value;
    options.forEach((option)=>{
        if(option.checked){
            strongPassword += characters[option.id]
        }
    
    })

    for(let i=0; i<length; i++){
        randomPassword += strongPassword[Math.floor(Math.random() *
            strongPassword.length)];
    }
    passValue.value = randomPassword;


}  

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(passValue.value);
})

let updateIndicator = ()=>{
    passIndicator.id = passLength.value <= 8 ? 'weak' : passLength.value <= 16 ? 'medium' : 'strong';
}

passLength.addEventListener('input', () => {
    generatePassword();
    updateIndicator();
    passLengthText.innerHTML = passLength.value
})


generateBtn.addEventListener('click', generatePassword);



