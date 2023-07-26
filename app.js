const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('mydatabase.db')

db.serialize(() => {
    // Create a table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL
        )
    `)

    //Insert data into the table
    db.run(`
        INSERT INTO users (name, email)
        VALUES ('Jane Doe', 'jane@example.com')
    `)

    // retrieve data from the table
    db.all('SELECT * FROM users', (err, rows) => {
        if(err) {
            throw err;
        }
        console.log(rows)
    })
})