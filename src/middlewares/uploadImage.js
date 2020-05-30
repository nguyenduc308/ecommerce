const multer = require("multer");
// const path = require('path');

module.exports.uploadImage = (type, req, res, next) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./src/uploads/images/${type}s`);
    },
    filename: function (req, file, cb) {

      let math = ["image/png", "image/jpeg", "image/gif"];
      if (math.indexOf(file.mimetype) === -1) {

        let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png or gif`;
        return cb(errorMess, null);
      }
      let filename = `${Date.now()}-${file.originalname}`;
      return cb(null, filename);
    }
  })

  const upload = multer({ storage: storage });
  return upload.single(type);
}