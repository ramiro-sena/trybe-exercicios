const a1 = 30;
const a2 = 60;
const a3 = 90;

function check_triangle(){
  sum = (a1 + a2 + a3)
  if (a1 < 0 || a2 < 0 || a3 < 00){
    return "error";
  } else if (sum == 180){
    return "true"; 
  } else if (sum != 180) {
    return "false";
  }
}

console.log(check_triangle())