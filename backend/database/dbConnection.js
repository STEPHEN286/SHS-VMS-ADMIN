const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vms'
})

db.connect ((err) => {
    if (err) {
        console.error('error connecting:', err);
        return;
        }
        console.log('connected as id ' + db.threadId);
        })


module.exports = db;
