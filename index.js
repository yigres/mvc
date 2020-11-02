// import onChange from 'on-change';
// // const onChange = require('on-change');

// const app = () => {
 
//   const state = {
//     value: 0,
//   }

//   const result = document.getElementById('result');
  
//   const watchedState = onChange(
//     state,
//     (path, value) => {
//       result.textContent = value;
//     },
//   );
  
//   const incHandler = () => {
//     watchedState.value += 1
//   };
  
//   const decHandler = () => {
//     watchedState.value -= 1
//   };

//   const inc = document.getElementById('increment');
//   inc.addEventListener('click', incHandler);

//   const dec = document.getElementById('decrement');
//   dec.addEventListener('click', decHandler);
// };

// app();
function get (arr, indx, def=null) {
  console.log(def);
  console.log(arr.length);
  if (indx<0) {
    return def
  }
  else if(indx>arr.length){
    return def
  }
  else  if (indx<arr.length)
    return arr[indx]
 
}

const cities = ['moscow', 'london', 'berlin', 'porto', ''];
console.log(get(cities, 5, false)); 