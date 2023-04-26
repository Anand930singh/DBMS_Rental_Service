const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20270508",
    database: "dream_home"
});
const GetBranch = (req, res) => {

    // console.log('hii');
    const sql =`Select * from branch_details`;

    con.query(sql, function (err, result) {
        if (err) {
            res.json({
                status:'400'
            })
        };
        // console.log(result);
        res.send(result);
    });
};

module.exports = {GetBranch };
