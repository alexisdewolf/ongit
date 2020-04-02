let Notes = require('../models/notesModel');

let noteslist = [];

exports.noteslist = function (req, res) {
    res.render('noteslist.ejs', {notess:noteslist});
}

exports.notesNew =  function(req, res) {
    let idNotes = req.body.idNotes
    let note = req.body.note;
    if ( idNotes == -1)
    {
        let notes = new Notes(note);
        noteslist.push(notes);
    }
    else if( idNotes >=0 )
    {
        let notes = new Notes(note);
        noteslist[idNotes] = notes;
    }
    console.log(noteslist);
    
    res.redirect('/notes');
}

exports.notesFormAdd = function(req, res) {
    res.render('notesAdd.ejs', {idNotes:'-1', note:""});
}

exports.notesFormUpdate =function (req, res) {
    let idNotes = req.params.idNotes;
    res.render('notesAdd.ejs', {idNotes:idNotes, note:noteslist[idNotes].note});
}

exports.notesRemove = function (req, res) {
    noteslist.splice(req.params.idNotes,1);
    res.redirect('/notes');
 };