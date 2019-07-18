const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

//WORKING
function find() {
    return db('schemes')
}

//WORKING
function findById(id) {
    return db('schemes')
        .where({ id })
        .first()
        .then(scheme => {
            if(scheme) {
                return scheme;
            } else {
                return null;
            }
        })
}

//WORKING
function add(scheme) {
    return db('schemes')
        .insert(scheme)
}

//WORKING
function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes)
}

//WORKING
function remove(id) {
    return db('schemes')
        .where({ id })
        .del()
}