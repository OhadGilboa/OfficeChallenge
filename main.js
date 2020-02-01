//write your code here to make the tests pass

class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName
    }
}

class Employee {
    constructor(name) {
        this.name = name
    }

    work(Office) {
        for (let i = 0; i < 10; i++) {
            Office.documents.push(new Document(this.name))
        }
    }
}


class Manager {
    constructor(name) {
       this.name = name
       this.employees = []
    }

    hireEmployee(name) {
        const newEmployee = new Employee(name)
        this.employees.push(newEmployee)
    }

    askEmployeesToWork(Office) {
        for (let employee of this.employees)
            employee.work(Office)
    }
}

class Cleaner {
    constructor(name) {
        this.name = name
    }

    clean() {
        console.log(`Clean`);
    }
}

class Office {
    constructor() {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireCleaner(name) {
        this.cleaners.push(new Cleaner(name))
    }

    hireManager(name) {
        this.managers.push(new Manager(name))
    }

    startWorkDay() {
        for (let manager of this.managers) {
            manager.askEmployeesToWork(this) //why Office didn't work for me?
        }
        for (let cleaner of this.cleaners)
        cleaner.clean()
    }
}


