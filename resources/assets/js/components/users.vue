<template>
    <div>
        
        <h1>{{ title }}</h1>

        <p>{{ msg }}</p>
        
        <button>Sort (ASC)</button>
        <button>Sort (DESC)</button>
        
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.username }} ({{ user.name }})
            </li>
        </ul>
    </div>
</template>

<script>

    require('../app/app.store.js');

    export default{
    	data: function () {
    	    return {
                title: 'Users page',
                users: [
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "address": {
                            "street": "Kulas Light",
                            "suite": "Apt. 556",
                            "city": "Gwenborough",
                            "zipcode": "92998-3874",
                            "geo": {
                                "lat": "-37.3159",
                                "lng": "81.1496"
                            }
                        },
                        "phone": "1-770-736-8031 x56442",
                        "website": "hildegard.org",
                        "company": {
                            "name": "Romaguera-Crona",
                            "catchPhrase": "Multi-layered client-server neural-net",
                            "bs": "harness real-time e-markets"
                        }
                    }
                ]
            }
    	},
    	computed: {
            msg: function () {
                return this.$store.state.users_msg;
            }
    	},
    	mounted: function () {
    	},
        methods: {
        }
    }
</script>