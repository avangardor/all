//   function square ( x ){
//     let z = x * x ; 
//     document.write(  x + 'კვადრატში ტოლია ' + z + '</br>' )
// } // გააცემული პარამეტრის კვადრატი

// square(10)

// function time( min ){
//     let num = 60 ; 
//     let sec = min * num
//     document.write( min + ' წუთი წამებში ტოლია ' + sec + '</br>' ) 
// } // წუთები გადაყავს წამებში 

// time(5)

// function permieter ( a ,  b , c  ){
//     let le = a + b + c ;
//     document.write( ' a b და c  სამხუთხედის პარამეტრია' + le + '<br>' )
// } // სამკუთხედის პერიმეტრი 

// permieter( 4 , 5 , 6)


// function age (  w ){
//     let dge = 365 ; 
//     let dge2 = w * dge ; 
//     console.log( dge2 )
// } // წელი გადაყავს დღეებში 

// age(2)

// function verification ( c ){
//     console.log( c <= 0 )
// }// ამოწმებს c ნაკლები ან ტოლი ხომ არ არის ნოლზე 

// verification(0)
 
//   function people ( a , b ){
//     let el = a ; 
//     let le = b ; 
//     if( el > le )
//     console.log(el)
//     if ( le > el )
//     console.log(le)
//     if ( le == el )
//     console.log(0)
//   }// ამოწმებს  a და b სტრინგის სიგრძეს და გამოაქ რომელიც გრძელია თუ ერთ სიგრძისაა გამოაქ 0 
//   people( 'dato' , 'dato')



//  let masivi = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
//  for( let i = 0 ; i < masivi.length ; i++){
//     if ( masivi[i] == 1 || masivi[i] == 3 || masivi[i] == 5 || masivi[i] == 7 || masivi[i] == 9 )
//     continue ;
//    console.log(masivi[i])
//   } // წერს 1 დან 10 მდე მხოლოდ ლუწ რიცხვებს 
 
// function cxrili ( a, ){
//   for( let i = 1 ; 1 <= 10 ; i++ )
//   console.log()
// }

// cxrili(2)

// let nums = ''
// if(nums < 10 ){
//   return 'less then 10'
// }else{
//   return 'more than 10'
// }






function reverseString(s)
{
    let toNumber = Number(s);
    console.log(toNumber);
}

reverseString("1234")
