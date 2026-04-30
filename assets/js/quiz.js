function fetchAnswers() {
    return fetch('../assets/data/quiz.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data.answers);
}

function checkAnswers(){
    //* 
    // USER INPUTS ANSWERS USING BUTTONS
    // SCRIPT CHECKS USERS ANSWERS AGAISNT ANSWERS IN JSON FILE
    // IF USERS ANSWER MATCHES JSON THEN THEY SCORE A POINT
    // AT END CALCULATE POINTS OUT OF NUMBER OF QUESTIONS (10)
    // GIVE SCORE AT END
    // THATS IT
    // *//
}