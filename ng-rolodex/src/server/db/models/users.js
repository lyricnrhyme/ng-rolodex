const bookshelf = require('./bookshelf');
const Contact = require('./contacts');

const User = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'user_id',
    hasTimestamps: true,
    card: function() {
        return this.hasMany(Contact);
    }
})

module.exports = User;