const mongoose = require("mongoose");
const uuid = require("uuid");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  enterpriseId: {
    type: String
  },
  employeeUserId: {
    type: String,
    default: uuid.v4
  },
  employeeName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  role: {
    type: String,
    enum: ["Director", "Employee", "Manager"]
  }
});

employeeSchema.set("timestamps", true);
const employeeModel = mongoose.model("employee", employeeSchema);
module.exports = { employeeModel };
