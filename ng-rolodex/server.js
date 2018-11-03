const express = require('express');
const app = express();
const bp = require('body-parser');
const cors = require('cors');
const PORT = process.env.EXPRESS_CONTAINER_PORT;
const Contacts = require('./src/server/db/models/contacts');
const Users = require('./src/server/db/models/users');

app.use(cors());
app.use(bp.urlencoded({extended: true}))
app.use(bp.json());

app.get('/', (req, res) => {
    console.log('hi');
    res.json('Welcome to Ng-Rolodex');
})

app.get('/search', (req, res) => {
    console.log('search section');
    Contacts
    .fetchAll()
    .then( result => {
        console.log('search?');
        res.json(result.serialize());
    })
    .catch(err => {
        console.log('search err', err);
        res.json('search err');
    })
})

app.get('/contacts', (req, res) => {
    console.log('all contacts');
    Contacts
    .fetchAll()
    .then( result => {
        console.log('all contacts?');
        res.json(result.serialize());
    })
    .catch( err => {
        console.log('all contacts err', err);
        res.json('all contacts err');
    })
})

app.get('/profile', (req, res) => {
    console.log('profile section');
    Users
    .fetchAll()
    .then( result => {
        console.log('profile');
        res.json(result.serialize());
    })
    .catch( err => {
        console.log('profile err', err);
        res.json('profile err');
    })
})

app.post('/addForm', (req, res) => {
    console.log('pls', req.body)
    const payload = {
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile,
        work: req.body.work,
        home: req.body.home,
        email: req.body.email,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        github: req.body.github
    }
    console.log('payload', payload);
    Contacts
    .forge(payload)
    .save()
    .then( result => {
        Contact
        .fetchAll()
        .then( result => {
            console.log('pls', result);
            res.json(result.serialize())
        })
    })
    .catch( err => {
        console.log('err', err);
        res.json(err);
    })
})

app.listen(PORT, () => {
    console.log(`Started app on port ${PORT}`)
})