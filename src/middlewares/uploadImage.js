const multer = require("multer");
// const path = require('path');

module.exports.uploadImage = (type) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./src/uploads/images/${type}s`);
    },
    filename: function (req, file, cb) {

      let mustMatchs = ["image/png", "image/jpeg", "image/gif"];
      if (mustMatchs.indexOf(file.mimetype) === -1) {

        let errorMess = `File type does not support !`;
        return cb(errorMess, null);
      }
      let filename = `${Date.now()}-${file.originalname}`;
      return cb(null, filename);
    }
  })

  const upload = multer({ storage: storage });
  return upload.single(type);
}