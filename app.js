const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
      nama: {
        describe: 'Nama Lengkap',
        demandOption: true,
        type: 'string',
      },
      alamat: {
        describe: 'Alamat',
        demandOption: true,
        type: 'string',
      },
      nohp: {
        describe: 'nohp',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.alamat, argv.nohp);
    },
});

yargs.parse();