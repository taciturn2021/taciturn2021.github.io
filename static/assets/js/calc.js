const assignObtd = document.getElementById('assignObtd');
const assignTotal = document.getElementById('assignTotal');
const quizObtd = document.getElementById('quizObtd');
const quizTotal = document.getElementById('quizTotal');
const midObtd = document.getElementById('midObtd');
const midTotal = document.getElementById('midTotal');
const finalObtd = document.getElementById('finalObtd');
const finalTotal = document.getElementById('finalTotal');
const labAssignObtd = document.getElementById('labAssignObtd');
const labAssignTotal = document.getElementById('labAssignTotal');
const labMidObtd = document.getElementById('labMidObtd');
const labMidTotal = document.getElementById('labMidTotal');
const result = document.getElementById('result');


let currentSubjectType = 'theory';
let currentCreditHours = '1';


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('[data-type="theory"]').classList.add('active');
    document.querySelector('[data-credit="1"]').classList.add('active');
    handleSubjectTypeChange();
});


document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const parent = this.parentNode;
        Array.from(parent.children).forEach(sibling => sibling.classList.remove('active'));
        this.classList.add('active');

        if (this.dataset.type) {
            currentSubjectType = this.dataset.type;
            handleSubjectTypeChange();
        }
        if (this.dataset.credit) {
            currentCreditHours = this.dataset.credit;
        }
    });
});


function handleSubjectTypeChange() {
    const isLab = currentSubjectType === 'lab';


    [labAssignObtd, labAssignTotal, labMidObtd, labMidTotal].forEach(input => {
        input.disabled = !isLab;
    });


    document.querySelectorAll('[data-credit]').forEach(button => {
        if (button.dataset.credit === '1') {
            button.disabled = isLab;
            if (isLab) button.classList.remove('active');
        } else {
            button.disabled = !isLab;
            if (!isLab) button.classList.remove('active');
        }
    });


    if (!isLab) {
        currentCreditHours = '1';
        document.querySelector('[data-credit="1"]').classList.add('active');
    } else {
        currentCreditHours = '2';
        document.querySelector('[data-credit="2"]').classList.add('active');
    }
}


function calcMarks() {
    const assignmentObtained = parseOrZero(assignObtd.value);
    const assignmentTotal = parseOrZero(assignTotal.value);
    const quizObtained = parseOrZero(quizObtd.value);
    const quizTotalVal = parseOrZero(quizTotal.value);
    const midTermObtained = parseOrZero(midObtd.value);
    const midTermTotalVal = parseOrZero(midTotal.value);
    const finalObtained = parseOrZero(finalObtd.value);
    const finalTotalVal = parseOrZero(finalTotal.value);

    let labAssignmentObtained = 0;
    let labAssignmentTotal = 0;
    let labMidTermObtained = 0;
    let labMidTermTotal = 0;

    if (currentCreditHours === '2' || currentCreditHours === '3') {
        labAssignmentObtained = parseOrZero(labAssignObtd.value);
        labAssignmentTotal = parseOrZero(labAssignTotal.value);
        labMidTermObtained = parseOrZero(labMidObtd.value);
        labMidTermTotal = parseOrZero(labMidTotal.value);
    }

    let assignLost = 0, quizLost = 0, midTermLost = 0, finalTermLost = 0;
    let labAssignLost = 0, labMidLost = 0;

    switch(currentCreditHours) {
        case '1':
            assignLost = ((100 - ((assignmentObtained / assignmentTotal) * 100)) / 100) * 10;
            quizLost = ((100 - ((quizObtained / quizTotalVal) * 100)) / 100) * 15;
            midTermLost = ((100 - ((midTermObtained / midTermTotalVal) * 100)) / 100) * 25;
            finalTermLost = ((100 - ((finalObtained / finalTotalVal) * 100)) / 100) * 50;
            break;

        case '2':
            assignLost = ((100 - ((assignmentObtained / assignmentTotal) * 100)) / 100) * 10 * 0.666666;
            quizLost = ((100 - ((quizObtained / quizTotalVal) * 100)) / 100) * 15 * 0.666666;
            midTermLost = ((100 - ((midTermObtained / midTermTotalVal) * 100)) / 100) * 25 * 0.666666;
            finalTermLost = ((100 - ((finalObtained / finalTotalVal) * 100)) / 100) * 50 * 0.666666;
            labAssignLost = ((100 - ((labAssignmentObtained / labAssignmentTotal) * 100)) / 100) * 25 * 0.333333;
            labMidLost = ((100 - ((labMidTermObtained / labMidTermTotal) * 100)) / 100) * 25 * 0.333333;
            break;

        case '3':
            assignLost = ((100 - ((assignmentObtained / assignmentTotal) * 100)) / 100) * 10 * 0.75;
            quizLost = ((100 - ((quizObtained / quizTotalVal) * 100)) / 100) * 15 * 0.75;
            midTermLost = ((100 - ((midTermObtained / midTermTotalVal) * 100)) / 100) * 25 * 0.75;
            finalTermLost = ((100 - ((finalObtained / finalTotalVal) * 100)) / 100) * 50 * 0.75;
            labAssignLost = ((100 - ((labAssignmentObtained / labAssignmentTotal) * 100)) / 100) * 25 * 0.25;
            labMidLost = ((100 - ((labMidTermObtained / labMidTermTotal) * 100)) / 100) * 25 * 0.25;
            break;
    }

    const totalMarks = assignLost + quizLost + midTermLost + finalTermLost + labAssignLost + labMidLost;
    result.textContent = totalMarks.toFixed(2);
}

// Utility
function parseOrZero(value) {
    return parseFloat(value) || 2;
}

function clearFields() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    result.textContent = '0';
}

//lisetners
document.getElementById('calculate').addEventListener('click', () => {
    document.querySelectorAll('input').forEach(input => input.classList.remove('input-error'));
    calcMarks();
});

document.getElementById('clear').addEventListener('click', () => {
    clearFields();
    document.querySelectorAll('input').forEach(input => input.classList.remove('input-error'));
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        const value = parseFloat(this.value);
        this.classList.toggle('input-error', value < 0 || isNaN(value));
    });
});