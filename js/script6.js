6.

let arr = ["молоток", "гвозди", "веник", "лопата", "ведро", "лестница", "веник"];

function hasTwins(array){
  return array.length !== new Set(array).size;
}
