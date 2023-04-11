// ---------------1--------

// function addNumberClosure(number) {
//     return function (n) {
//         return n + number;
//     }
// }
// const addFive = addNumberClosure(5);
// console.log(addFive(10));
// console.log(addFive(20));


// -------------2------------

// function searchArray(array, value) {
//     if (array.length === 0) {
//         return false;
//     }

//     if (array[0] === value) {
//         return true;
//     }

//     return searchArray(array.slice(1), value);
// }

// const myArray = [1, 2, 3, 4, 5];
// console.log(searchArray(myArray, 3));
// console.log(searchArray(myArray, 6));

// ----------3--------------

// function addParagraph(text) {
//     const newParagraph = document.createElement('p');
//     const content = document.createTextNode(text);
//     newParagraph.appendChild(content);
//     document.body.appendChild(newParagraph);
// }

// addParagraph('This is a new paragraph!');

// // -----------4----------

// function addListItem(text) {
//     const list = document.getElementById('my-list');
//     const newListItem = document.createElement('li');
//     const content = document.createTextNode(text);
//     newListItem.appendChild(content);
//     list.appendChild(newListItem);
// }

// addListItem('New List Item');

// -----------5------------

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
// }
// changeBackgroundColor(document.body, 'red');

// -------------6-----------

// function saveToLocalStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
//   }

//   -------------7---------------

// function getObjectFromLocalStorage(key) {
//     const item = localStorage.getItem(key);
//     return JSON.parse(item);
//   }

//   -------8----------

// function saveObjectToLocalStorage(obj) {
//     for (let prop in obj) {
//       localStorage.setItem(prop, obj[prop]);
//     }
    
//     let newObj = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       let key = localStorage.key(i);
//       newObj[key] = localStorage.getItem(key);
//     }
//     return newObj;
//   }
  
