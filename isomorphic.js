if (typeof module === 'object') {
    Author = require('./author');
}

const isomorphic = {
    parse: function(authors) {
        return authors.map((author) => {
            return new Author(author.name.first, author.name.last, author.picture.medium);
        });
    },
    template: function (name, image) {
        return `<li><img src="${image}"><span>${name}</span></li>`;
    },
    getUrl: function() {
        return 'https://randomuser.me/api/?results=10';
    }
};

if (typeof module === 'object') {
    module.exports = isomorphic;
}