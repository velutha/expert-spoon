const path = require("path");
const xlsx = require("xlsx");
const bodyParser = require("body-parser");
const fs = require("fs");

const employeeModel = require("../models/employee.model");

const uploadEmployees = (req, res) => {
  if (req.body.data) {
    let employees = [];
    const enterpriseId = req.body.enterpriseId;
    //the excel file is converted in to base64 string and being sent
    const data = req.body.data;
    //Checking for directory existence, if not , creating the directory
    const fileLocation = path.join(
      __dirname,
      `../Employees/${req.body.fileName}`
    );
    const dirname = path.dirname(fileLocation);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }
    //Decoding the base64 string directly using writeFile into a csv file
    const filePromise = new Promise((resolve, reject) => {
      fs.writeFile(fileLocation, data, { encoding: "base64" }, err => {
        if (err) {
          reject(err);
        }
        //data in object form through xlsx add-on
        let fileData = xlsx.readFile(fileLocation);
        resolve(fileData);
      });
    }).then(data => {
      try {
        let sheet = data.Sheets.Sheet1;
        let i = 2;
        while (sheet) {
          let employeeName = sheet[`A${i}`].v;
          let email = sheet[`B${i}`].v;
          let role = sheet[`C${i}`].v;

          let newEmployee = {
            employeeName,
            email,
            role
          };
          employees.push(newEmployee);
          i++;
          //end condition for the loop
          if (!sheet[`B${i}`]) {
            sheet = "";
          }
        }
        console.log(employees);
        employeeModel.create(employees, (err, employeeArray) => {
          if (err) throw err;
          res.status(201).json({ message: "Employees created" });
        });
      } catch (err) {
        if (err) throw err;
      }
    });
  }
};

module.exports = { uploadEmployees };
