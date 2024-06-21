// Marks:
const  assignObtd = document.getElementById('assignObtd');
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
// Buttons and Result:
const calcBtn = document.getElementById('calculate');
const result = document.getElementById('result');
const clearBtn = document.getElementById('clear');
//Subject Type:
const radioButtons = document.querySelectorAll('input[name="subjType"]');
let subjType = document.querySelector('input[name="subjType"]:checked').value;
let checkedRadioButton = document.querySelector('input[name="subjType"]:checked');
// Credit Hours:
const creditRadio = document.querySelectorAll('input[name="creditHrs"]');




function parseOrZero(value) {
    return parseFloat(value) || 2;
}
function calcMarks(){
    let creditChecked = document.querySelector('input[name="creditHrs"]:checked');
    let credHrs = creditChecked.value;
    let assignmentObtained = parseOrZero(assignObtd.value);
    let assignmentTotal = parseOrZero(assignTotal.value);
    let quizObtained = parseOrZero(quizObtd.value);
    let quzTotal = parseOrZero(quizTotal.value);
    let midTermObtained = parseOrZero(midObtd.value);
    let midTermTotal = parseOrZero(midTotal.value);
    let finalObtained = parseOrZero(finalObtd.value);
    let finTotal = parseOrZero(finalTotal.value);

    let labAssignmentObtained = 0;
    let labAssignmentTotal = 0;
    let labMidTermObtained = 0;
    let labMidTermTotal = 0;
console.log(credHrs);
    if (credHrs == 2 || credHrs == 3) {
        labAssignmentObtained = parseOrZero(labAssignObtd.value);
        labAssignmentTotal = parseOrZero(labAssignTotal.value);
        labMidTermObtained = parseOrZero(labMidObtd.value);
        labMidTermTotal = parseOrZero(labMidTotal.value);
    }

    
    let assignLost = 0;
    let quizLost = 0;
    let midTermLost = 0;
    let finalTermLost = 0;
    let labAssignLost = 0;
    let labMidLost = 0;
    let totalMarks = 0;
    if (credHrs == 1) {
        assignLost = 100 - ((assignmentObtained / assignmentTotal) * 100);
        assignLost = ((assignLost / 100) * 10);
        quizLost = 100 - ((quizObtained / quzTotal) * 100);
        quizLost = ((quizLost / 100) * 15);
        midTermLost = 100 - ((midTermObtained / midTermTotal) * 100);
        midTermLost = ((midTermLost / 100) * 25);
        finalTermLost = 100 - ((finalObtained / finTotal) * 100);
        finalTermLost = ((finalTermLost / 100) * 50);
        totalMarks = assignLost + quizLost + midTermLost + finalTermLost;
    }else if (credHrs == 2) {
        assignLost = 100 - ((assignmentObtained / assignmentTotal) * 100);
        assignLost = ((assignLost / 100) * 10) * 0.666666;
        quizLost = 100 - ((quizObtained / quzTotal) * 100);
        quizLost = ((quizLost / 100) * 15) * 0.6666666;
        midTermLost = 100 - ((midTermObtained / midTermTotal) * 100);
        midTermLost = ((midTermLost / 100) * 25) * 0.6666666;
        finalTermLost = 100 - ((finalObtained / finTotal) * 100);
        finalTermLost = ((finalTermLost / 100) * 50) * 0.6666666;
        labAssignLost = 100 - ((labAssignmentObtained / labAssignmentTotal) * 100);
        labAssignLost = ((labAssignLost / 100) * 25) * 0.33333333;
        labMidLost = 100 - ((labMidTermObtained / labMidTermTotal) * 100);
        labMidLost = ((labMidLost / 100) * 25) * 0.333333333;
        totalMarks = assignLost + quizLost + midTermLost + finalTermLost + labMidLost + labAssignLost;
    }else if (credHrs == 3) {
        assignLost = 100 - ((assignmentObtained / assignmentTotal) * 100);
        assignLost = ((assignLost / 100) * 10) * 0.75;
        quizLost = 100 - ((quizObtained / quzTotal) * 100);
        quizLost = ((quizLost / 100) * 15) * 0.75;
        midTermLost = 100 - ((midTermObtained / midTermTotal) * 100);
        midTermLost = ((midTermLost / 100) * 25) * 0.75;
        finalTermLost = 100 - ((finalObtained / finTotal) * 100);
        finalTermLost = ((finalTermLost / 100) * 50) * 0.75;
        labAssignLost = 100 - ((labAssignmentObtained / labAssignmentTotal) * 100);
        labAssignLost = ((labAssignLost / 100) * 25) * 0.25;
        labMidLost = 100 - ((labMidTermObtained / labMidTermTotal) * 100);
        labMidLost = ((labMidLost / 100) * 25) * 0.25;
        totalMarks = assignLost + quizLost + midTermLost + finalTermLost + labMidLost + labAssignLost;
    }

    let marksLost = totalMarks;
    result.innerHTML = marksLost;
}


//Clear Fields Button
function clearFields(){
    assignObtd.value = ""; 
    assignTotal.value = ""
    quizObtd.value = "";
    quizTotal.value = "";
    midObtd.value = ""; 
    midTotal.value = ""; 
    finalObtd.value = "";
    finalTotal.value ="";
    labAssignObtd.value ="";
    labAssignTotal.value = "";
    labMidObtd.value = ""; 
    labMidTotal.value = "";
    calcBtn.value = "";
    result.value = "";
}

//Setting initial states
if (checkedRadioButton.value === 'theory') {
    labAssignObtd.disabled= true;
    labAssignTotal.disabled = true;
    labMidObtd.disabled = true;
    labMidTotal.disabled = true;
    creditRadio[0].checked = true;
    creditRadio[1].checked = false;
    creditRadio[2].checked = false;
    creditRadio[0].disabled = false;
    creditRadio[1].disabled = true;
    creditRadio[2].disabled = true;
        
} else if (checkedRadioButton.value === 'lab') {
    labAssignObtd.disabled= false;
    labAssignTotal.disabled = false;
    labMidObtd.disabled = false;
    labMidTotal.disabled = false;
    creditRadio[0].checked = false;
    creditRadio[1].checked = true;
    creditRadio[2].checked = false;
    creditRadio[0].disabled = true;
    creditRadio[1].disabled = false;
    creditRadio[2].disabled = false;
}
//Enable / Disable fields with option selection
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        if (this.value === 'theory') {
            labAssignObtd.disabled= true;
            labAssignTotal.disabled = true;
            labMidObtd.disabled = true;
            labMidTotal.disabled = true;
            creditRadio[0].checked = true;
            creditRadio[1].checked = false;
            creditRadio[2].checked = false;
            creditRadio[0].disabled = false;
            creditRadio[1].disabled = true;
            creditRadio[2].disabled = true;
        } else if (this.value === 'lab') {
            labAssignObtd.disabled= false;
            labAssignTotal.disabled = false;
            labMidObtd.disabled = false;
            labMidTotal.disabled = false;
            creditRadio[0].checked = false;
            creditRadio[1].checked = true;
            creditRadio[2].checked = false;
            creditRadio[0].disabled = true;
            creditRadio[1].disabled = false;
            creditRadio[2].disabled = false;
            
        }
    });
});
calcBtn.addEventListener('click', calcMarks);
clearBtn.addEventListener('click', clearFields);
