//Diberikan 1 data array [3, 5, 7, 9, 11]
//Buat sebuah program untuk membuat Array baru dari hasil perkalian array sebelumnya dengan perkalian 5.
//Tampilkan pada console.log


let arr = [3,5,7,9,11];
let newArr = arr.map(num => {
    return num * 5;
});

console.log(`newArr * 5 : ${newArr}`);
