

function convert (percentage) {
  if (percentage >= 90 && percentage <= 100) return "A";
  else if (percentage >= 80) return "B";
  else if (percentage >= 70) return "C";
  else if (percentage >= 60) return "D";
  else if (percentage >= 50) return "E";
  else if (percentage >= 0 &&  percentage < 50) return "F";
  else return "error, the value should be between 0 and 100"
}

console.log(convert(65));