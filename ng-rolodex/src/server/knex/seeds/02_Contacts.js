exports.seed = function(knex, Promise) {
    return knex('contacts').del()
        .then(function() {
            return knex('contacts').insert([
                {name: 'Doodlebob', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}
            ])
        })
}