exports.seed = function(knex, Promise) {
    return knex('contacts').del()
        .then(function() {
            return knex('contacts').insert([
                {name: 'Doodlebob', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Jyama', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Sarah', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, 
                {name: 'Jamie', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Wymin', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, 
                {name: 'Nick', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Doug', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Abby', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, 
                {name: 'Carl', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, 
                {name: 'Jason', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, 
                {name: 'Romeo', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Jeff', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, 
                {name: 'May', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, 
                {name: 'Harsh', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Chaz', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, 
                {name: 'Raymond', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Baseem', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Ed', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Kenny', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Jesus', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Bronson', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'George', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'McKarl', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'}, {name: 'Isaiah', created_by: 1, address: 'Bikini Bottom', mobile:'808-575-5757'} 
            ])
        })
}