const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;


const bmi = (weight / (height * height)).toFixed(2);

const value = document.getElementById('value');

let descripition = '';
value.classList.add('attention');

document.getElementById('infos').classList.remove('hidden');

if (bmi <18.5){
    descripition = 'Você está abaixo do peso'
} else if (bmi >= 18.5 && bmi <= 25){
    descripition = "Você está com o peso ideal!";
    value.classList.remove('attention');
    value.classList.add('normal');
}else if (bmi >= 25 && bmi <= 30){
    descripition="Cuidado! Você está com sobrepeso!"; 
}
else if (bmi >= 30 && bmi <= 35){
    descripition="Cuidado! Você está com obesidade moderada!"; 
}
else if (bmi >= 35 && bmi <= 40){
    descripition="Cuidado! Você está com obesidade severa!"; 
}
else  {
    descripition="Cuidado! Você está com obesidade morbida!"; 
}




value.textContent = bmi
document.getElementById('description').textContent = descripition
 


})

