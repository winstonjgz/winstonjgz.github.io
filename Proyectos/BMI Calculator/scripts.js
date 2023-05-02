let button= document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = (document.getElementById('output'));
    let height_status = false, weight_status=false;

    if(height === '' || isNaN(height) || (height<=0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height / Por favor indique un valor de altura correcto'
    }else{
        document.getElementById('height_error').innerHTML= '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight<=0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight / Por favor indique un valor de peso correcto'
    }else{
        document.getElementById('weight_error').innerHTML= '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.style.display = "flex";
            result.innerHTML = 'Under weight: ' + bmi;

        }else if(bmi >= 18.6 && bmi < 24.9){
            result.style.display = "flex";
            result.innerHTML = 'Normal: ' + bmi;
        }else{
            result.style.display = "flex";
           result.innerHTML = 'Over weight: ' + bmi;
        }
    }else{
        alert('The form has error / El formulario tiene errores');
        result.innerHTML="";
    }

})