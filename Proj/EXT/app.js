
// let date = new Date();
// let time = date.getTime();
// let day = date.getDay();
// let hour = date.getHours();
// let minute = date.getHours();
// let seconds = date.getSeconds();
// let dayList = ['კვირა','ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთსაბათი', 'პარასკევი', 'შაბათი', ];

//  document.write('დღეს არის : ' + dayList[day] + '</br>' + 'დრო : ' + hour + ':' + minute + ':' + seconds + ' .')

// function array (array){
//     let result = '';
//     for( let i = 0 ; i < array.length ; i++){
//         if( array[i].length < result.length ){
//             result = array[i];
//             console.log(result)
//         }
//     }
// }
// array('apple', 'bannanas')



// function getPositives(ar)
// {
//     var ar2 = [];
    
//     for(var el of ar)
//     {
//         if (el >= 0)
//         {
//             ar2.push(el);
//         }
//     }
    
//     return ar2;
// }

// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var ar2 = getPositives(ar);

// println(ar2);

//...........................................................


// 
// const array = [1,2,3,4,5];
// const resultArray = array.map( n => n + 2);
// console.log(resultArray);

// var MAX = 100;
// var first = 1;
// var second = 1;

// function fibonacci(){
//     while( first <= MAX){
//         var third = first + second;
//         console.log(first);
//         first = second;
//         second = third;
//     }
// }

// fibonacci();



// var array = [1,2,3];

// function reverseArray(){
//     for(let i = 2; i >= 0; i-- ){
//         console.log(array[i])
//     }
// }

// reverseArray();

// var array = 'David';
// var length = array.length

// function reverseArray(){
//     for( let i = length; i >= 0; i--){
//         console.log(length[i])
//     }
// }

// reverseArray();


// var array = [1,2,3,4,5,6,];


// function sumArray(){
//     var sum = 0;
//     for( var i = 0; i <= 5; i++){
//         sum += array[i]
//     }
//     console.log(sum);
// }

// sumArray();


// var average = [1,2,3,4,5]

// function sumAverages(){
//     var sum = 0;
//     for(  var i = 0; i <= average.length - 1; i++){
//         sum += average[i];
//         var result = sum / average.length
//     }
//     console.log(result);
// }

// sumAverages();


// var maxNum = [1, 2, 4, 100, 7, 8];
// const maximum = Math.max(...maxNum);
// const maximum = Math.max.apply(null, maxNum)
// console.log(maximum);

// let findLargestString = ['apple' , 'onanimationcancel', 'AudioDestinationNode'];
// function findLargest(){
//     const lenghts = [findLargestString[0].length, findLargestString[1].length, findLargestString[2].length];
//     var result = Math.max(...lenghts);
//     console.log(result);
// }

// findLargest();

// const object = { 
//     david:{
//         age: 16,
//         surname: 'lekveishvili'
//     }
// }

// const {david:{age,surname }} = object;
// const {david:{ age: userAge, surname: userSurname}} = object;
// console.log(userAge);


//---------------------------------------------------------------------

// let string = 'Regular expresions javascript';
// let regex = /javascript/;
// const result =  regex.test(string);
// console.log(result);


// let diagDiff = [
//     [11, 2, 4,],
//     [4, 5, 6,],
//     [10, 8, -12]

// ];

// function diagonalDifference(arr){
//     let x;
//     let y; 
//     let sum = 0;
//     let sumTwo = 0;
    
//     for( x = 0; x < arr.length; x++){
//         sum += arr[x][x]
//     }
//     let reversedArray = arr.reverse(); 
//     for( y = 0; y < reversedArray.length; y++){
//         sumTwo += reversedArray[y][y];
//     }
//     let result = sumTwo - sum
//     console.log(result)
    
// }

// diagonalDifference(diagDiff);

// let string  = ['hello']

// function reverseString(arr){
//     console.log(string.reverse());
// }

// reverseString(string)



// const tekkenCharacter = {
//     player: 'Hwoarang',
//     fightingStyle: 'Tae Kwon Doe',
//     human: true
//   };

//   tekkenCharacter.origin = 



// let users = {
//     Alan : {
//         online : false
//     },
//     Jeff : {
//         online : true
//     },
//     Sarah : {
//         online : false 
//     }
// }

// function forIn(user){
//     let sum = 0;
//     for( let el in user){
//         if(
//             Alan.hasOwnProperty('online') && 'online' == true 
//         ){
//             console.log()
//         }
//     }
// }

// forIn(users)

// let text = 'hello my name is davidov';
// let resultString = text.split(' ');
// let stringLenghts = [ ];
// for( let i = 0; i < resultString.length; i++)
// stringLenghts.push( resultString[i].length);
// let maximum = Math.max(...stringLenghts);
// console.log(maximum);           


// let array = [
//     [100,20,30,40],
//     [400,100,200,23],
//     [700,23,423,54]
// ];

// function largestOfFour(arr){
//     let resultArray = [];
//     resultArray.push(Math.max.apply( null, arr[0]))
//     resultArray.push(Math.max.apply( null, arr[1]));
    
//     console.log(resultArray);
// }

// largestOfFour(array);


// function repeatStringNumTimes(str, num) {
//     for(let i = 0; i < num; i++){
//     let resultString = str.split(' ');
//     console.log(resultString);
//     }
    
//   }
  
//   repeatStringNumTimes("abc", 3);

// function lowerCase(arr){
//   // console.log(arr.toLowerCase)
// }

// lowerCase('HELLO WORLD')

// let text = 'HELLO '
// console.log(text.toLowerCase);


// let arrayNums = [12, 1012];

// function findDigits(arr)
// {
//     if( arr[0] % )
// }


// let array = ['a', 'b', 1, 3, true];

// if( array.includes( types))
// {
//     console.log(array)
// }
// else
// {
//     console.log('There is not boolean type')
// }
// let types = typeof array == 'boolean';







