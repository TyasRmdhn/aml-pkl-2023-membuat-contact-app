// const yargs = require('yargs');
// const contacts = require('./contacts');

// yargs.command({
//     command: 'add',
//     describe: 'Menambahkan contact baru',
//     builder: {
//       nama: {
//         describe: 'Nama Lengkap',
//         demandOption: true,
//         type: 'string',
//       },
//       alamat: {
//         describe: 'Alamat',
//         demandOption: true,
//         type: 'string',
//       },
//       nohp: {
//         describe: 'nohp',
//         demandOption: true,
//         type: 'string',
//       },
//     },
//     handler(argv) {
//         contacts.simpanContact(argv.nama, argv.alamat, argv.nohp);
//     },
// });

// yargs.parse();

// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('Masukan alamat anda: ', (alamat)=> {
//       resolve(alamat);
//     });
//   });
// };

const contacts = require ('./contacts')
const main = async () => {
  const nama = await contacts.tulisPertanyaan('Masukan Nama Anda : ');
  const alamat = await contacts.tulisPertanyaan('Masukan Alamat Anda : ');
  const nohp = await contacts.tulisPertanyaan('Masukan noHp Anda : ');

  contacts.simpanContact(nama, alamat, nohp);
};

main();