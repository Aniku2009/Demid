
//Create function with two atrray arguments, elements of array is the objects, structure of the elemets is the same, with unique Id and value.
// Merge array, if the id is the same


import {current} from "../../../$RECYCLE.BIN/S-1-5-21-593699164-1228343305-1847928074-3136289/$RJ9BZLH/codelyzer/util/syntaxKind";
// https://learn.javascript.ru/array-iteration
// https://stackoverflow.com/questions/39885893/how-to-find-duplicate-values-in-a-javascript-array-of-objects-and-output-only-u
//     https://learn.javascript.ru/array-methods

const arr1 = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {
        id:6,
        third: "value"
    }
]

const arr2 = [
    {
        id:6,
        second:"value"
    },
    {id:7},
    {id:8},
    {id:9}
]
const result = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {
        id:6,
        third: "value",
        second:"value"
    },
    {id:7},
    {id:8},
    {id:9}
]

function margeArrays (arr1, arr2){
    let first = arr1.length;
    let second = arr2.length;
    let n=first;
    // let arrayPropNames1=[];
    // let arrayPropNames2=[];

    if (first<second){
        n = second;
    }
    //console.log('n value - '+n);


    // let joingArr1 = arr1.join(';');
    // let joingArr2 = arr2.join(';');
    //
    // let keys1 = Object.keys(arr1);
    // let keys2 = Object.keys(arr2);
    //
    // console.log(keys1);
    // console.log(keys2);

     let arr = [...arr1, ...arr2];
     let arrForindex = [];
   arr.reduce(function(sum, current) {
        if (sum.id==current.id){
          arrForindex.push(arr.indexOf(current));
        }
   },arr[0].id);

//arr.reduce((x, y) => x.includes(y) ? x : [...x, y], [])



    // var obj = {};
    //
    // for (let i = 0; i < arr.length; i++) {
    //     var str = arr[i];
    //     obj[str] = true; // запомнить строку в виде свойства объекта
    // }
    // let keys1 = Object.keys(obj);
    // console.log(keys1);



     // for (let i=0; i<n; i++) {
     //    if (arr1[i].id !== arr2[i].id) {
     //         arr1.id = arr2[i].id;
     //     }
     // }
    // let keys1 = Object.keys(arr);
    //      for (let d = 0; d <= 10; d++) {
    //          console.log(arr[d]);
    //      }
    // console.log(keys1);
         // for (let i=0; i<first; i++){
         //     arrayPropNames1.push(Object.keys(arr1[i]));
         // }
         //
         // for (let i=0; i<second; i++){
         //     arrayPropNames2.push(Object.keys(arr2[i]));
         // }
         //
         //
         // let arrConcat = arrayPropNames1.concat(arrayPropNames2);
         //
         //
         // for (let d=0;d<=n;d++){
         //     console.log(arrayPropNames1[d]);
         // }


         // for (let i=0;i<=n;i++){
         //        if (joingArr1[i]==joingArr2){
         //         console.log('2');
         //         for (let prop in arr1) {
         //             console.log('3');
         //             arr1[i].id=prop;
         //         }
         //     }
         // }

         // for(let propertyName in arr1) {
         //     if(arr1[propertyName] !== arr2[propertyName]) {
         //         console.log(propertyName);
         //     }
         // }


         // for (let i=0;i<=n;i++){
         //     console.log('1');
         //     if (arr1[i]!==arr2[i]){
         //         console.log('2');
         //         for (let prop in arr1) {
         //             console.log('3');
         //             arr1[i].id=prop;
         //         }
         //     }
         // }

         for (let d=0;d<arr.length;d++){
             console.log(arrForindex[d]);
         }

};

margeArrays(arr1,arr2);

// const obj = {first: 'Asim', last: 'Hussain', age: 39 };
//
// const {first: first, last: last} = obj;
// console.log(first); // Asim
// console.log(last); // Hussain
//
//
// const {first, last} = obj;
// console.log(first); // Asim
//  console.log(last); // Hussain