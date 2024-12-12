const COOKING_TIME = 40;

document.getElementById('calculateBtn').addEventListener('click', function() {
    const layers = parseInt(document.getElementById('layers').value);
    const timeInOven = parseInt(document.getElementById('timeInOven').value);

    if (isNaN(layers) || layers < 1) {
        alert("Por favor, ingresa un número válido de capas (mínimo 1).");
        return;
    }
    if (isNaN(timeInOven) || timeInOven < 0) {
        alert("Por favor, ingresa un tiempo válido en el horno (0 o más).");
        return;
    }

    const preparationTime = layers * 2;
    const remainingTime = COOKING_TIME - timeInOven;
    const totalTime = preparationTime + timeInOven;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Tiempo restante en el horno: ${remainingTime > 0 ? remainingTime : 0} minutos</p>
        <p>Tiempo total de preparación: ${preparationTime} minutos</p>
        <p>Tiempo total de trabajo: ${totalTime} minutos</p>
    `;
});