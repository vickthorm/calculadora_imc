const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const name = document.getElementById('name').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    const description = document.getElementById('description');

    let descripition = '';
    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        descripition = `${name}, você está abaixo do peso. Consuma alimentos ricos em nutrientes, como proteínas, carboidratos e gorduras saudáveis. Aumente a frequência e o tamanho das refeições e considere consultar um nutricionista.`;
    } else if (bmi >= 18.5 && bmi <= 25) {
        descripition = `${name}, você está com o peso ideal. Mantenha uma dieta equilibrada, faça exercícios regularmente e mantenha um bom equilíbrio entre descanso e atividade para preservar seu peso e bem-estar.`;
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        descripition = `${name}, você está com sobrepeso. Adote uma dieta balanceada e exercícios regulares. Consulte um profissional de saúde para um plano personalizado e seguro.`;
    } else if (bmi > 30 && bmi <= 35) {
        descripition = `${name}, você está com obesidade moderada. Busque orientação profissional para um plano seguro de perda de peso. Foque em uma dieta balanceada, controle de calorias e exercícios regulares, com acompanhamento de um nutricionista e médico.`;
    } else if (bmi > 35 && bmi <= 40) {
        descripition = `${name}, você está com obesidade severa. Busque ajuda médica imediatamente. Um profissional pode criar um plano personalizado com dieta, exercícios e tratamentos. O acompanhamento regular é essencial para garantir uma abordagem segura e eficaz.`;
    } else {
        descripition = `${name}, você está com obesidade mórbida. Procure um médico imediatamente para um plano de tratamento que pode incluir dieta, exercícios e intervenções médicas. O acompanhamento profissional é essencial para garantir segurança e eficácia.`;
    }

    value.textContent = bmi;
    description.textContent = descripition;
});
