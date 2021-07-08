
Vue.config.devtools = true;


/*
Descrizione:
Attraverso l’apposita API di Boolean 
https://flynn.boolean.careers/exercises/api/random/mail 
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

new Vue(
    {
        el: '#app',
        data: {
            eMails: [],
            eMailsQty: 10,
        },
        created() {

            this.getRandomEmail()
            
        },
        methods: {

            getRandomEmail: function () {
                for(var i = 0; i < this.eMailsQty; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {  
                        this.eMails.push(response.data.response);
                    });
                }   
            },

        }
    });