module.exports = function() {
        {
        this.name = "Allan";
        this.id = 43;
        this.email = "allan@gmail.com";
        }
        getName = function() {
            return `${this.name}`;
        }
        getId = function() {
            return this.id
        }
        getEmail = function() {
            return `${this.email}`;
        }
        getRole = function() {
            return `Employee`
        }
    }