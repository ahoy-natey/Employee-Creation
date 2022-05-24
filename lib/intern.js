// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`



const Employee = require('./Employee')

class Intern extends Employee {



    constructor(name, id, email, school) {

        super(name, id, email)

        this.school = school;
    }

    

    getSchool() {
        return this.School;
    }

    getRole () {
        return "Intern";
    }


}