import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "taskmanager",
    port: 3306
});

con.connect((error) => {
    if (error) {
        console.error("CONNECTION ERROR:", error);
    } else {
        console.log("CONNECTED");
    }
});

export default con;