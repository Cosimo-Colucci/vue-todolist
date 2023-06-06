const { createApp } = Vue;

createApp({
    data() {
        return{
            todoList : [
                {
                    text: "Rifare il letto",
                    done: "false"
                }, {
                    text: "Andare a fare la spesa",
                    done: "false"
                }, {
                    text: "Pagare la bolletta della luce",
                    done: "true"
                }, {
                    text: "Ricondarsi della torta per Giuseppe",
                    done: "false"
                }, {
                    text: "Esercizi Boolean",
                    done: "false"
                }
            ],

        }  
    },
     methods: { 

        itemCheck (){
            if (this.todoList.done === true){
                this.todoList.text = this.todoList.done.UpperCase
            }
        }
     }
}).mount("#app")