// для отдачи статики
const express = require('express');
// создаем экземпляр объекта
const app = express();

const port = 80;

app.use(express.static('public'));
app.listen(port);

app.get('*', function (req, res) {
   // res.redirect('/html/main.html');
   res.sendFile(__dirname + '/public/html/main.html');
});

console.log("Server started at " + port);