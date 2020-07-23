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
                title: 'Users page'
            }
    	},
    	computed: {
            msg: function () {
                return this.$store.state.users_msg;
            },
            users: function () {
                return this.$store.state.users;
            }
    	},
    	mounted: function () {
    	},
        methods: {
        }
    }
</script>