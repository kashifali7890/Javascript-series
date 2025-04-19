
const form = document.querySelector('form')

//this use case will give you empty value.
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const weightGuide = document.querySelector('#weightGuide')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`

    }else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `plese give a valid weight ${weight}`
    }else {
       const bmi = (weight / ((height * height) / 10000)).toFixed(2) 
        // show the results
        //results.innerHTML = `<span><h3>Your BMI is</h3> ${bmi}</span>`;
        let message = '';

        if(bmi < 18.5){
            message = 'According to BMI You are underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            message = 'According to BMI You are normal weight';
        }else if (bmi >= 25 && bmi <30){
            message = 'According to BMI You are overweight';
        }else {
            message = 'According to BMI You are obese';
        }

        results.innerHTML = `<span>Your BMI is ${bmi}</span><br>
        <strong>${message}</strong>`;

        weightGuide.innerHTML = `
        <h2>BMI Guide:</h2>
        <ul>
        <li>Underweight: Less than 18.5 </li>
        <li>Normal: 18.5 - 24.9 </li>
        <li>Overweight: 25 - 29.9 </li>
        <li>Obese: 30 or more </li>
        </ul> 
        `;
    }
    
        
    
});