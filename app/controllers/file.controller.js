const uploadFile = (req, res) => {
  return res.status(200).json({"message": "file_upload"});
};

module.exports = { uploadFile };
