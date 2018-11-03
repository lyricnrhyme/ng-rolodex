exports.seed = function(knex, Promise) {
    return knex('users').del()
        .then(function() {
            return knex('users').insert([
                {username: 'lyricnrhyme', name: 'Jyama', email: 'provolonebandit@somerandomemail.com',  address: '1234 Five St.'},
                {username: 'inkspiriment', email: 'inkspiriment@hello.com', address: '2345 Six St.'}
            ])
        })
}