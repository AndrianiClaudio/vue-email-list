// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// =====
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.
const app = new Vue({
    el: '#app',
    data: {
        mails: [],
        mailsNumShow:null,
        mailLoad: false,
    },
    created () {
        // attraevrso API genera email 10 volte
        this.mailsNumShow = 10;
        for (let i = 0; i < this.mailsNumShow; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.mails.push(response.data.response);
                })
                // errore
                .catch((error) => {
                    console.log(error);
                })
        }
        this.mailLoad = true;
    },
    methods: {
    },
});