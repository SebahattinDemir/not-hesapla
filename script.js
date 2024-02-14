const txtScore1 = document.querySelector("#score1");
const txtScore2 = document.querySelector("#score2");
const txtScore3 = document.querySelector("#score3");
const btnGAP = document.querySelector("#btnGAP");
const txtResult = document.querySelector("#txtResult");

btnGAP.addEventListener("click", () => {
    const score1 = parseFloat(txtScore1.value);
    const score2 = parseFloat(txtScore2.value);
    const score3 = parseFloat(txtScore3.value);

    if (!isScoreValid(score1)) {
        alert("Please enter a valid 1st Score");
        return;
    }
    
    if (!isScoreValid(score2)) {
        alert("Please enter a valid 2nd Score");
        return;
    }
    
    if (!isScoreValid(score3)) {
        alert("Please enter a valid 3rd Score");
        return;
    }

    const average = getAverage(score1, score2, score3);
    const letterGrade = convertScoreToLetter(average);
    txtResult.textContent = `Ortalamanız: "${average.toFixed(0)}" ve harf notunuz: "${letterGrade}"`;
});

const isScoreValid = (score) => {
    return score >= 0 && score <= 100 && !isNaN(score) && (score || score === 0);
}

const getAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const convertScoreToLetter = (score) => {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 50 && score < 70) {
        return "D";
    } else if(score >= 0 && score < 50) {
        return "F";
    }
}