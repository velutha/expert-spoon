dbConfig = {
  dbConnection: process.env.DB_CONNECTION || "mongodb://localhost:27017/surveyApp"
};

module.exports = {dbConfig};
