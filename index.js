const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());


// Creating Patients
let patients = new Object();
patients["123457890"] = ["Fred", "Hampton", "111-321-6789"]
patients["123457891"] = ["George", "Carver", "111-123-9876"]

// Creating Patient Records
let records = new Object();
records["123457890"] = "Status: Healthy"
records["123457891"] = "Status: Fever"


// Get patient Medical Records
app.get("/records", (req, res) => {
    
    // Verify Patient exists
    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found"})
        return;
    }

    // Verify SSN Matches First and Last name
    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        // first name last name and ssn match
        if (req.body.reasonforvisit === "medicalrecords") {
            // return medical records
            res.status(200).send(records[req.headers.ssn]);
            return;
        }
        else {
            //return error
            res.status(501).send({"msg":"Unable to complete request at this time: " + req.body.reasonforvisit})
            return;
        }
    }
    else {
        res.status(401).send({"msg":"First and Last name did not match ssn!"})
        return;
    }

    // Return Appropriate Record
    res.status(200).send({"msg": "HTTP GET - SUCCESS!"});
});


// Create a New Patient
app.post("/", (req, res) => {
    
    //Create patient in DB
    patients[req.headers.ssn] = [req.headers.firstname, req.headers.lastname, req.headers.phone]
    res.status(200).send(patients)
});


//Update existing patient phone number
app.put("/", (req, res) => {

    // Make sure Patient exists
    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found"})
        return;
    }

    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        // Update Phone number, return patient info
        patients[req.headers.ssn] = [req.headers.firstname, req.headers.lastname, req.body.phone];
        res.status(200).send(patients[req.headers.ssn]);
        return;
    }
    else {
        res.status(401).send({"msg":"First and Last name did not match ssn! (Attempting to update phone number)"})
        return;
    }


    res.status(200).send({"msg": "HTTP PUT - SUCCESS!"})
});

//Delete Patient records
app.delete("/", (req, res) => {

    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found"})
        return;
    }

    // Verify SSN Matches First and Last name
    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        // Delete patient and medical records from DB
        delete patients[req.headers.ssn]
        delete records[req.headers.ssn]

        res.status(200).send(patients);
        return;
    }
    else {
        res.status(401).send({"msg":"First and Last name did not match ssn! (Attempting to delete records)"})
        return;
    }
});


app.listen(3000);