const multer = require("multer");
// const path = require('path');

module.exports.uploadImage = (type) => {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, `./src/uploads/images/${type}s`);
    },
    filename(req, file, cb)  {

      let filename = `${Date.now()}-${file.originalname}`;
      return cb(null, filename);
    }
  })

  const upload = multer({ storage: storage });
  return upload.single(type);
}