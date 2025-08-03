// function debounce(func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// function search(query) {
//   console.log(`Searching for ${query}`);
// }

// let searchWithDebounce = debounce(search, 2000);
// searchWithDebounce("vikas");
// searchWithDebounce("vikas kumar");
// searchWithDebounce("vikas kumar singh");

// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     let currentCall = Date.now();
//     if (currentCall - lastCall >= delay) {
//       func(...args);
//       lastCall = currentCall;
//     }
//   };
// }

// function search(query) {
//   console.log(`Searching for ${query}`);
// }

// let searchWiththrottle = throttle(search, 2000);
// searchWiththrottle("vikas");
// searchWiththrottle("vikas kumar");
// searchWiththrottle("vikas kumar singh");
