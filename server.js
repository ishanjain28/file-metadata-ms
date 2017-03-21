const express = require('express'),
    path = require('path'),
    multer = require('multer'),
    fs = require('fs'),
    app = express(),
    upload = multer({ dest: 'uploads/' }),
    PORT = process.env.PORT || 5000;

app.disable('x-powered-by');

app.post('/upload', upload.single('uploadedFile'), (req, res, next) => {
    if (req.file) {

        res.send({ "size": req.file.size });
    } else {
        res.send({ "error": "No File Selected" })
    }
    console.log(req.file);
});

app.get('/', express.static(path.join('./dist')));


app.listen(PORT, (err) => {
    if (err) throw err;

    console.log(`Server started on PORT ${PORT}`);
});

// setInterval(function() {
//     fs.exists(path.join('./uploads'), (exists) => {
//         if (exists) {
//             fs.rmdir(path.join('./uploads'), (err) => {
//                 if (err) throw err;
//                 console.log('uploads folder erased successfully!');
//             });
//         }
//     })

// }, 60 * 60)