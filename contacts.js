const fs =  require('fs');

const dirPath = './data';
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const simpanContact = (nama, alamat, nohp) => {
    const contact = { nama, alamat, nohp};
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
  const contacts = JSON.parse(fileBuffer);

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

module.exports = {simpanContact};