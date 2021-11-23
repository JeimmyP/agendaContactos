// import connection
import db from "../config/database.js";
  
// Get All Contacts
export const getContacts = (result) => {
    db.query("SELECT * FROM contact", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Contact
export const getContactById = (id, result) => {
    db.query("SELECT * FROM contact WHERE contact_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Contact to Database
export const insertContact = (data, result) => {
    db.query("INSERT INTO contact SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Contact to Database
export const updateContactById = (data, id, result) => {
    db.query("UPDATE contact SET contact_name = ?, contact_phone = ?, contact_address = ?, contact_email = ? WHERE contact_id = ?", [data.contact_name, data.contact_phone, data.contact_address, data.contact_email, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Contact to Database
export const deleteContactById = (id, result) => {
    db.query("DELETE FROM contact WHERE contact_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}