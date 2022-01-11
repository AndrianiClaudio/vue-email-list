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
        mailLoad:false,
    },
    methods: {
        // funzione per ricevere una mail tramite API
        getNewMail() {
            let newMail;
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    newMail = response.data.response;
                })
                .catch((error) => {
                    return error;
                })
                .then(()=> {
                    this.mails.push(newMail);
                    if(this.mails.length == this.mailsNumShow) {
                        this.mailLoad = true;
                    }
                    return true;
                })
        }
    },
    created () {
        this.mailsNumShow = 10;
        for (let i = 0; i < this.mailsNumShow; i++) {
            this.getNewMail();
        }

    },
});