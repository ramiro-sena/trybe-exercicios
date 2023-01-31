const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

evaluator = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    let score = 0;

    RIGHT_ANSWERS.forEach((right_answer, index) => {
        answer = STUDENT_ANSWERS[index];
        if (answer === right_answer) {
            score += 1;
        } else if(answer !== 'N.A') {
            score -= 0.5;
        }
    });
    
    return score;
};

const examCurrector = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => callback(RIGHT_ANSWERS, STUDENT_ANSWERS);

console.log(examCurrector(RIGHT_ANSWERS, STUDENT_ANSWERS, evaluator));