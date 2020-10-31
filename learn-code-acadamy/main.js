const app = new Vue({
    el: '#app',
    data: {
        friends: [
            {
                first:'bobby',
                last:"lasley",
                age:12
            },
            {
                first:'john',
                last:'carter',
                age:20
            }
        ],
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
    methods:{
        incrementAge(friend)
        {
            friend.age +=1;
        },

        decrementAge(friend)
        {
            friend.age -=1;
        }
    },
    template: `
    <div>
        <h2>For Loop</h2>
        <h2 v-for="friend in friends">{{friend | fullName}}
        <h5>age{{friend.age}}</h5>
        <button v-on:click="incrementAge(friend)">+</button>
        <button v-on:click="decrementAge(friend)">-</button>

        <input v-model="friend.first"/>
        </h2>

    </div>
    `

});