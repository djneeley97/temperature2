function convertTemperature() {
    // input
    let temperature = (document.getElementById('inputTemperature').value);
    let scale = document.getElementById('scale').value;

    // equasion 
    let result;
    if (scale === 'celsius') {
        result = (temperature - 32) * (5/9);
    } else {
        result = (temperature * 9/5) + 32;
    }

    // answer
    document.getElementById('result').innerHTML = result.toFixed(2) + '° ' + (scale === 'celsius' ? 'Celsius' : 'Fahrenheit');
}
