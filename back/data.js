const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "1234",
    database: "mydb",
});
app.use(cors());

app.use(express.json());

app.post("/register", (req, res) => {
    const {
        firstName,
        lastName,
        addressLine1,
        addressLine2,
        city,
        country,
        department,
        email,
        email1,
        facebook,
        fax,
        firstName1,
        lastName1,
        linkedIn,
        other,
        phone,
        preferredName,
        pronouns,
        province,
        zipCode,
    } = req.body;
    console.log(firstName, firstName1, zipCode);
    res.status(200).json({ message: "Data received successfully" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
