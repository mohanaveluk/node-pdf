var express = require('express');
const pdfkit = require('pdfkit');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/pdf', function(req, res, next) {
  res.render('pdf', { title: 'Create Pdf' });
});

router.get('/createPdf', (req, res, next) => {
  const doc = new pdfkit;
  console.log(`Create pdf clicked`);
  doc.pipe(fs.createWriteStream('file.pdf')); // write to PDF
  doc.font('Times-Roman').fontSize(48).text('Node js to create pdf files');
  doc.pipe(res); 
  doc.end();
});

module.exports = router;
