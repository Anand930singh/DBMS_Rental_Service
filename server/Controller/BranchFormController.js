const con = require('../config/Connect');

const BranchForm = (req, res) => {
    console.log(req.body);
    const { street, city, postcode, contact } = req.body;
    const cont_dec=parseFloat(contact);

    const sql = `INSERT INTO branch_details (Branch_no, Street, City, Postcode, Branch_Contact, Mid) 
                VALUES ('BOO2', '${street}', '${city}', '${postcode}', '${cont_dec}', NULL)`;

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`Inserted ${result.affectedRows} row(s)`);
        res.send(result);
    });
};

module.exports = { BranchForm };
