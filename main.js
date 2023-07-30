Vue.createapp({

    data() {

        return {

            url : "https://flynn.boolean.careers/exercises/api/random/mail",

        }
    },

    methods: {

    },

    beforemount() {
        
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then( function (response) {

            console.log(response);

        } )

    },


}).mount("#app");