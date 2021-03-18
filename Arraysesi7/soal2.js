//--> SOAL 2
//Buatlah sebuah data array yang berisi nama pada tim teman-teman.
//Bagi tim menjadi 2 tim dan terdiri dari 1 orang leader
//Console.log data array tersebut dengan memisahkan setiap data menggunakan  koma (,)
//Tampilkan list data tersebut ke halaman HTML

//hidden:
//Cek built-in method Array
//Bisa pakai slice() atau splice()

const team = ['Dwi', 'Danu', 'Thoriq', 'Luthfi'];
const newTeam = team.splice(1,2);
team[1] = 'Danu (Leader)';
newTeam[2] = 'Thoriq (Leader)';

document.write('team 1 :');
document.write('<ol>');
team.forEach(team1 => {
    document.write(`<l
i> ${team1} </li>`);
});
document.write('</ol>');
document.write('team 2 :');
document.write('<ol>');
newTeam.forEach(team2 => {
    document.write(`<li> ${team2} </li>`);
});
document.write('</ol>');

   console.log(team1);
   console.log(team2);


