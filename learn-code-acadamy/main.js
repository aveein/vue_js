const app = new Vue({
    el: '#app',
    data: {
        bobby:{
            'first':'bobby',
            'last':"lasley",
            'age':12
        },
        john:{
            'first':'john',
            'last':'carter',
            'age':20
        }
    },
    computed: {   //drivitive , 
        bobbyFullName()
        {
            return  `${this.bobby.first} ${this.bobby.last}`//template string
        },
        johnLastName()
        {
            return `${this.john.first} ${this.john.last}`
        },
        johnAgeInOneyear()
        {
            return this.john.age +1;
        }

    },

    filters: {
        fullName(name)
        {
            return `${name.first} ${name.last}`
        }, 
        ageInOneYear(age)
        {
            return age+1;
        }
    },
    template: `
    <div>
        <h2>Name: {{john | fullName}}</h2>
        <h2>age: {{john.age | ageInOneYear}}</h2>
        <h2>Name: {{bobby | fullName}}</h2>
        <h2>age: {{bobby.age | ageInOneYear}}</h2>
 
    </div>
    `

});