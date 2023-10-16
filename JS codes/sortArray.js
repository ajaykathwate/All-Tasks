// sort array in descending order
const arr1 = [54, 23, 12, 97, 100];

function arrSort(arr) {
  // for ascending order => arr.sort((a,b)=>(a-b));
  // for descending order => arr.sort((a,b)=>-(a-b));
  arr.sort((a, b) => a - b);
  arr.reverse();
  return arr;
}

console.log(arrSort(arr1));
