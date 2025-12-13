let grades = []; 
let rowCount = 0; 

function updateColumnAverages() {
    const totalRows = grades.length;

    if (totalRows === 0) {
        document.getElementById('mathAvg').textContent = '0.00';
        document.getElementById('englishAvg').textContent = '0.00';
        document.getElementById('overallAvg').textContent = '0.00';
        return;
    }

    let mathSum = 0;
    let englishSum = 0;

    for (const gradeEntry of grades) {
        mathSum += gradeEntry.math;
        englishSum += gradeEntry.english;
    }

    const mathAvg = mathSum / totalRows;
    const englishAvg = englishSum / totalRows;
    
    const overallAvg = (mathSum + englishSum) / (totalRows * 2);

    document.getElementById('mathAvg').textContent = mathAvg.toFixed(2);
    document.getElementById('englishAvg').textContent = englishAvg.toFixed(2);
    document.getElementById('overallAvg').textContent = overallAvg.toFixed(2);
}

function start() {
    const mathInput = document.getElementById('mathGrade');
    const englishInput = document.getElementById('englishGrade');
    const submitBtn = document.getElementById('submitButton');
    const gradeBody = document.getElementById('gradeBody');

    submitButton.addEventListener('click', function() {
        const mathGrade = parseFloat(mathInput.value);
        const englishGrade = parseFloat(englishInput.value);

        if (isNaN(mathGrade) || isNaN(englishGrade) || mathGrade < 0 || mathGrade > 100 || englishGrade < 0 || englishGrade > 100) {
            alert('Please enter valid grades between 0 and 100 for both Math and English.');
            return;
        }

        const rowAverage = (mathGrade + englishGrade) / 2;

        rowCount++;

        const newRow = gradeBody.insertRow();
    
        newRow.insertCell().textContent = rowCount;
        newRow.insertCell().textContent = mathGrade.toFixed(0);
        newRow.insertCell().textContent = englishGrade.toFixed(0);
        newRow.insertCell().textContent = rowAverage.toFixed(2);

        grades.push({ math: mathGrade, english: englishGrade });
        updateColumnAverages(); 

        mathInput.value = '';
        englishInput.value = '';

    });

    updateColumnAverages();
}

window.addEventListener('load', start, false);