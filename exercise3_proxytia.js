var name = 'ganang';
var role = 'Tabib';

var roleDescription = '';

if (role==='Ksatria'){
  roleDescription = 'kamu dapat menyerang dengan senjatamu!';
} else if (role==='Tabib'){
  roleDescription = 'kamu akan membantu temanmu yang terluka.';
} else if (role==='Penyihir') {
  roleDescription = 'ciptakan keajaiban yang membantu kemenanganmu!';
}
if (name ==='' && role ===''){
  console.log('Nama harus diisi!');
} else if (role===''){
  console.log('Halo '+name +', Pilih peranmu untuk memulai game!');
} else if (name !== ''){
    console.log("Selamat datang di Dunia Proxytia, "+name +'');
    console.log('Halo '+role +' '+name +', '+roleDescription +'');
}