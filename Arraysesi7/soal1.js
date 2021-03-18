//-->soal1
//Buatlah data array yang berisi minimal 5 pekerjaan dibidang IT (Ex. Front end developer). 
//Tampilkan panjang data Array .Tampilkan seluruh item pada array. Gunakan Console.log
//Tampilkan data tersebut pada Halaman HTML menggunakan list tag

let jobIt = ['Mobile Developer', 'Web Developer', 'IT Support', 'System analyst', 'Quality Assurance'];

document.write('5 Pekerjaan Di Bidang IT : <br> ');
document.write('<ol>');
jobIt.forEach(jobIt => {
    document.write(`<li> ${jobIt} </li>`);
});
document.write('</ol>');
document.write(`panjang Data : ${jobIt.length}`)
console.log(jobIt);
//output : 'Mobile Developer', 'Web Developer', 'IT Support', 'System analyst', 'Quality Assurance'

console.log(jobIt.length);
//output : 5