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
function findSteps(id) {
    return db('schemes')
        .innerJoin('steps', 'schemes.id', 'steps.scheme_id')
        .where({ scheme_id: id })
        .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
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