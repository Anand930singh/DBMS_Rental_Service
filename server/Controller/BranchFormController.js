const con = require('../config/Connect');

const BranchForm = (req, res) => {
    console.log(req.body);
    const { street, city, postcode, contact,Mid } = req.body;
    // const branchCode = "B" + Math.floor(Math.random() * 9000 + 1000)+postcode; // Generate a random 10-digit number
    // const branchCode = "S" + Math.floor(Math.random() * 900000000 + 100000000); // Generate a random 10-digit number
    
    console.log(branchCode,'hii');
    const sql = `INSERT INTO branch_details (Branch_no, Street, City, Postcode, Branch_Contact, Mid) 
                VALUES (?,?,?,?,?,?)`;

    // con.query(sql,[branchCode,street,city,postcode,contact,Mid] ,function (err, result) {
    //     if (err) throw err;
    //     console.log(`Inserted ${result.affectedRows} row(s)`);
    //     res.send(result);
    // });
};

module.exports = { BranchForm };
