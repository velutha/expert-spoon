const { validationResult } = require("express-validator/check");
const _ = require("underscore");

const User = require("../models/user.model");
const logger = require("../config/logger");

const get = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send(errors.mapped());
  }

  const userId = req.query.user_id;

};


module.exports = {
  getChannels: getChannels,
  updateTokens: updateTokens
};
