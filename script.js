const txtScore1 = document.querySelector("#score1");
const txtScore2 = document.querySelector("#score2");
const txtScore3 = document.querySelector("#score3");
const btnGAP = document.querySelector("#btnGAP");
const txtResult = document.querySelector("#txtResult");

btnGAP.addEventListener("click", () => {
    const score1 = txtScore1.value;
    const score2 = txtScore2.value;
    const score3 = txtScore3.value;

    isScoreValid(score1) ?? alert("Please enter a valid 1st Score");
    isScoreValid(score2) ?? alert("Please enter a valid 2nd Score");
    isScoreValid(score3) ?? alert("Please enter a valid 3rd Score");

    const average = getAverage(score1, score2, score3);

    alert(average);
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