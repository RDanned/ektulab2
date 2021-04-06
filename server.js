var express = require('express');
var app = express();
const morgan = require('morgan');
const http = require('http');
const auth = require('./auth');

//app.use(auth);
app.use(morgan('dev'));
app.get('/skills/', function(req, res){
    let skills = {data: [
        {
            name: "PHP",
            value: "4",
        },
        {
            name: "CSS",
            value: "5",
        },
        {
            name: "HTML",
            value: "5",
        },
        {
            name: "JS",
            value: "4"
        },
        {
            name: "React",
            value: "2"
        },
        {
            name: "Laravel",
            value: "3"
        }
    ]};
    res.json(skills);
});

app.get('/description/', function (req, res){
    res.json({data: 
        /*html*/
        `
        <h2 id="profile">Profile(from server)</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        autem recusandae cumque cupiditate doloribus similique totam id
        accusantium placeat, consequuntur praesentium fugit voluptatem
        expedita, corporis laudantium ullam nulla dolore beatae cum? Iure
        magni dolore ipsum veniam nobis sequi ullam optio porro atque
        repudiandae nulla dignissimos minima, tempora accusamus maiores,
        totam numquam?
        </p>
        <h2 id="experience">Experience</h2>
        <span>One c rating</span><br />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
        ipsum repellendus ullam sed obcaecati magnam rem modi veritatis
        placeat earum?
        </p>
        <ul>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae?</li>
        </ul>
    `});
});

app.get('/', function (req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/hidden', auth, function (req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname + '/hidden.html'));
});


app.use(express.static(__dirname + '/'));

var server = app.listen(8081, '127.0.0.1', function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at //%s:%s", host, port)
})