const path = require('path');

const mimeTypes = {
  'css': 'text/css',
  'gif': 'image/gif',
  'htm': 'test/html',
  'html': 'test/html',
  'ico': 'image/x-icon',
  'jpeg':	'image/jpeg',
  'jpg':	'image/jpeg',
  'js':	'application/javascript',
  'json':	'application/json',
  'pdf': 'application/pdf',
  'png': 'image/png',
  'svg': 'image/svg+xml',
  'swf': 'application/x-shockwave-flash',
  'tif': 'image/tiff',
  'tiff': 'image/tiff',
  'txt': 'text/plain',
  'wav': 'audio/x-wav',
  'wma': 'audio/x-ms-wma',
  'wmv': 'video/x-ms-wmv',
  'xml': 'text/xml'
}

module.exports = (filePath) => {
  let ext = path.extname(filePath)
    .split('.')
    .pop()
    .toLowerCase();

  if(!ext) {
    ext = filePath;
  }

  return mimeTypes[ext] || mimeTypes['txt'];
}