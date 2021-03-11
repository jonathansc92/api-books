const db = require('../../utils/database');

module.exports = class Products {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static fetchAll() {
        return db.query('SELECT * FROM products', (err,rows) => {
            if(err) throw err;
          
            console.log('Data received from Db:');
            console.log(rows);
          })
    }
};