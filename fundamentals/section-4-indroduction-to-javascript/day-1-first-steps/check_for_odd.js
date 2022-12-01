// check for at least one odd number

const c1 = 6;
const c2 = 9;
const c3 = 2;

function check_for_odd() {

  if (c1 % 2 != 0 || c2 % 2 != 0 || c3 % 2 != 0) {
    return true;
  }
  return false;

}

console.log(check_for_odd())