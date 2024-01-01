// let first = document.querySelectorAll('.first .item');
// let second = document.querySelectorAll('.second .item');
// let third = document.querySelectorAll('.third .item');
// let four = document.querySelectorAll('.four .item');
// let five = document.querySelectorAll('.five .item');
// let six = document.querySelectorAll('.six .item');
// let seven = document.querySelectorAll('.seven .item');
// let eight = document.querySelectorAll('.eight .item');

// let btn = document.querySelector('button');
// const stopBtn = document.querySelector('.stop-btn');

// let timer;
// timer = setInterval(sort, 150);


// document.body.addEventListener('dblclick', () => {
//     timer = setInterval(sort, 150);
// })
// document.body.addEventListener('click', () => {
//     stopTimer(timer)
// })

// function stopTimer (timerId) {
//     return clearInterval(timerId);
// }

// function sort() {
//   let nums = [
//     [null, null, null, null, null, null, 1, null, null, null, null, null, null],
//         [null, null, null, null, null, 0, 1, 0, null, null, null, null, null],
//             [null, null, null, null, 1, 0, 1, 0, 1, null, null, null, null],
//                [null, null, null, 0, 1, 0, 1, 0, 1, 0, null, null, null],
//                    [null, null, 1, 0, 1, 0, 1, 0, 1, 0, 1, null, null],
//                          [null, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, null],
//             [null, null, null, null, 1, 0, 1, 0, 1, 0, null, null, null, null],
//             [null, null, null, null, null, '#', null, null, null, null, null],
//   ];
//   // let firstE = nums[0].sort(() => Math.random() - 0.5);
//   // let secondE = nums[1].sort(() => Math.random() - 0.5);
//   // let thirdE = nums[2].sort(() => Math.random() - 0.5);

//   for (let i = 0; i < nums[0].length; i++) {
//     first[i].textContent = nums[i];
//     if (nums[i] !== null) {
//       first[i].style.background = 'black';
//       first[i].style.color = 'white';
//     } else {
//       first[i].style.background = '';
//       first[i].style.color = '';
//     }
//   }

//   // for (let i = 0; i < nums[1].length; i++) {
//   //   second[i].textContent = nums[i];
//   //   if (second[i] !== null) {
//   //     second[i].style.background = 'black';
//   //     second[i].style.color = 'white';
//   //   } else {
//   //     second[i].style.background = '';
//   //     second[i].style.color = '';
//   //   }
//   // }

  
//   // for (let i = 0; i < nums[3].length; i++) {
//   //   third[i].textContent = nums[i];
//   //   if (nums[i] !== null) {
//   //     third[i].style.background = 'black';
//   //     third[i].style.color = 'white';
//   //   } else {
//   //     third[i].style.background = '';
//   //     third[i].style.color = '';
//   //   }
//   // }
// }
const start = document.querySelector('.btn-start')
const stop = document.querySelector('.stop-btn')
 
 let first = document.querySelectorAll('.first .item');
 let second = document.querySelectorAll('.second .item');
 let third = document.querySelectorAll('.third .item');
 let four = document.querySelectorAll('.four .item');
 let five = document.querySelectorAll('.five .item');
 let six = document.querySelectorAll('.six .item');
 let seven = document.querySelectorAll('.seven .item');
 let eight = document.querySelectorAll('.eight .item');

 let allItems = [
   first,
   second,
   third,
   four,
   five,
   six,
   seven,
   eight,
 ];
 
 let timer = null;
//  timer = setInterval(sort, 150);

//  start.addEventListener('click', () => {
//   stopTimer(timer)
//    timer = setInterval(generate, 200);
//  });

//  stop.addEventListener('click', () => {
//    stopTimer(timer);
//    timer = null
//  });

 document.getElementById('switcher').addEventListener('change', function () {
   if (this.checked) {
     // Start the timer
     timer = setInterval(generate, 200);
   } else {
     // Stop the timer
     stopTimer(timer);
     timer = null;
   }
 });

 function stopTimer(timerId) {
   return clearInterval(timerId);
 }

 function sort(numOfArra) {
  let arr = []
  let forSort = []
  let s = Array.from(numOfArra);
  
   for (let i = 0; i < numOfArra.length; i++) {
     if (numOfArra[i].textContent !== '') {
       arr.push(i);
       forSort.push(numOfArra[i].textContent);
     }
     if(numOfArra[i].textContent == '/' || numOfArra[i].textContent == '\\' || numOfArra[i].textContent == '|'){
      continue
     }
   }
   let len = arr.length - 1
   let riz1 = s.slice(0,arr[0]) 
   let ff = Object.assign(riz1)
   let f = ff.fill('') 
   let riz2 = s.slice(arr[len] + 1) 
   let f2 = riz2.fill('', 0, riz2.length + 1)
  
   let sort = forSort.sort((a,b) => 0.5 - Math.random())
 
    return [...f, ...sort, ...f2]
 }

 function generate () {
 let tempArr;
 let currItem
  allItems.forEach(item => {
     tempArr = sort(item);
      for(let i = 0; i<item.length; i++){
        item[i].textContent = tempArr[i]
        if(item[i].textContent == 1 ){
          item[i].style.background = '#a3a3a3';
          item[i].style.color = 'white' 
        }else{
          item[i].style.background = '';
          item[i].style.color = 'black';
        }
      }
  })
 }
 

 function textToBinary(text) {
   let binaryString = '';
   for (let i = 0; i < text.length; i++) {
     // Get the ASCII code for each character
     const charCode = text.charCodeAt(i);
     // Convert the ASCII code to binary
     const binaryValue = charCode.toString(2).padStart(8, '0');
     // Concatenate the binary values
     binaryString += binaryValue;
   }
   return binaryString;
 }

 // Example usage:
 const inputText = 'Hello';
 const binaryResult = textToBinary(inputText);