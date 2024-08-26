// There are two categories of datatypes

// 1. Primitive Datatypes
// 2. Non Primitive Datatypes

/*Primitive: 

1> number
2> string
3> boolean
4> undefined
5> null
6> bigint
7> symbol
*/

//typeof operator: using this operator we can check datatype of any value or variable

console.log(typeof(7)); 
console.log(typeof("Manas"));
console.log(typeof(5n)); //For representing number in bigint append n at the last of number

//strings should be written inside single quote or double qoutes

//single qoutes and double quotes string does not support new line strings 

//but back ticks support new line strings.

console.log(`kljdfskjdfskjdfs
    kjlfdsjdfsjk
    kjldfsklfdskj`); //back ticks does not gives error for new line strings

//we can convert any string to number by appending + or - at the start of that string
console.log(typeof(+`Manas`));

//On concatinating string and number in js always results in string

console.log(typeof('39'+40)); // string

//null when converted to number gives 0 and undefined gives NaN

console.log(+null,typeof(+null));
console.log(+undefined,typeof(+undefined));

// typeof null will give object but this was a bug in early days and many websites has been made with
//this bug only thats why fixing this would break those websites and thats why it remained same.

console.log(typeof null); //object