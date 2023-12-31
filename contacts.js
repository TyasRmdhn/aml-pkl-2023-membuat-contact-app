const fs =  require('fs');
const { listenerCount } = require('process');

const dirPath = './data';
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const loadContact = () => {
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
  const contacts = JSON.parse(fileBuffer);
  return contacts;
}

const simpanContact = (nama, alamat, nohp) => {
    const contact = { nama, alamat, nohp};
  // const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
  // const contacts = JSON.parse(fileBuffer);
    const contacts = loadContact();


//cek duplikat
const duplikat = contacts.find((contact) => contact.nama === nama);
if(duplikat) {
  console.log('Contact tersebut sudah terdaftar');
  return false;
}

  contacts.push(contact);

 fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

  console.log('Terimakasih sudah memasukan data.');

  // rl.close();
}

const listContact = () => {
    const contacts = loadContact();
    console.log('Daftar nama kontak: ');
    contacts.forEach((contact, i) => {
      console.log(`${i + 1}. ${contact.nama} - ${contact.nohp}`);
    })
}

const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase()
    );

    if(!contact) {
      console.log(`${nama} tidak ditemukan!!`);
      return false;
    }

    if(contact.nama) {
      console.log(contact.nama);
    }
    if(contact.alamat) {
      console.log(contact.alamat);
    }
    if(contact.nohp) {
      console.log(contact.nohp);
    }
};

const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if(contacts.length === newContacts.length) {
    console.log(`${nama} tidak ditemukan!!`);
    return false;
  }

  fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));

  console.log(`data  ${nama}  berhasil dihapus!!`);
  
}; 

module.exports = {simpanContact, listContact, detailContact, deleteContact};