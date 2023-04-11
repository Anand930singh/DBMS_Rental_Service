// const con = require('../config/Connect');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql@2002",
    database: "dream_home"
});

const AddEmployee = async (req, res) => {
    console.log(req.body);

    const { staffNumber, Name, LastName, SEX, dob, Position, BranchId, Supervisior, salary, start_Date } = req.body;
    const sql = 'INSERT INTO staffs (Eid,Lname,Fname,Branch_id,Sex,DOB,Position,Salary,Ssid,Start_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [staffNumber, LastName, Name, BranchId, SEX, dob, Position, salary, Supervisior, start_Date];
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql,values, function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
};

module.exports = { AddEmployee };
