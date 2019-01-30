
//Create function with two atrray arguments, elements of array is the objects, structure of the elemets is the same, with unique Id and value.
// Merge array, if the id is the same


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
    console.log('n value - '+n);


    // let joingArr1 = arr1.join(';');
    // let joingArr2 = arr2.join(';');
    //
    // let keys1 = Object.keys(arr1);
    // let keys2 = Object.keys(arr2);
    //
    // console.log(keys1);
    // console.log(keys2);

    // let arr = [arr1, ...arr2];

     // for (let i=0; i<n; i++) {
     //     if (arr1[i].id !== arr2[i].id) {
     //         arr1.id = arr2[i].id;
     //     }
     // }

         for (let d = 0; d <= 10; d++) {
             console.log(arr1[d]);
         }
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

         // for (let d=0;d<=n;d++){
         //     console.log(arr1[d]);
         // }

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