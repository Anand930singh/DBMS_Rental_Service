const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql@2002",
    database: "dream_home"
});

const AddBranch = async (req, res) => {
    console.log(req.body);
    const {BranchNo,Street,City,PostCode,BranchContact,Mid}=req.body;

    const sql = 'INSERT INTO branch_details (Branch_no,Street,City,Postcode,Branch_contact,Mid) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [BranchNo,Street,City,PostCode,BranchContact,Mid];
    con.connect(function(err) {
        if (err) throw err;
        con.query(sql,values, function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
};

module.exports = { AddBranch };