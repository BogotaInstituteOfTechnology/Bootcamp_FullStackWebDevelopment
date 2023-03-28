import multer from 'multer';

// Configuración de multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    // Generación de un nombre de archivo aleatorio usando Math.random()
    const randomName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const extension = file.mimetype.split('/')[1];
    cb(null, `${randomName}.${extension}`);
  }
});

// Verificación del tipo de archivo
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png'];
  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error('Tipo de archivo no admitido');
    error.code = 'LIMIT_FILE_TYPES';
    return cb(error, false);
  }
  cb(null, true);
};

// Configuración de multer
const upload = multer({ storage, fileFilter });

export default upload;
