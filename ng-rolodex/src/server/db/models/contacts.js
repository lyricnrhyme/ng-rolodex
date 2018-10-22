const bookshelf = require('./bookshelf');
const User = require('./users');

const Contact = bookshelf.Model.extend({
    tableName: 'contacts',
    idAttribute: 'contact_id',
    hasTimestamps: true,
    card: function() {
        return this.belongsTo(User);
    }
})

module.exports = Contact;