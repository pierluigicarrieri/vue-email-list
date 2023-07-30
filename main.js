"use strict";

const {createApp} = Vue;

const app = createApp({

    data() {

        return {

            emailAddresses: [],

        }
    },

    methods: {

        getDataFromApi () {

            for(let i = 0; i < 10; i++) {

                axios.get(
                    "https://flynn.boolean.careers/exercises/api/random/mail"
                ).then( (axiosResponse) => {
    
                this.emailAddresses.push(axiosResponse.data.response);
    
                console.log(this.emailAddresses);
    
                });

            }

        }

    },

    mounted() {
        
        this.getDataFromApi();

        }


}).mount("#app");
