const { createApp } = Vue

  createApp({
    data() {
      return {
        todos:[{
            text:"fare la lavatrice",
            done:false
        },
        {
            text:"finire esercizio",
            done:false
        },
        {
            text:"bagnare piante",
            done:false
        },
        {
            text:"ordinare la casa",
            done:false
        }
        ],
        textDecor:"text-decoration-line: line-through",
        newOb: {
          text:' ',
          done: false
        }
      }
    },

    methods:{
        cancellaItem(index){
            this.todos.splice(index, 1);
        },

        addTodo() {
            this.todos.push(this.newOb);
            this.newOb={
              text:' ',
              done: false
            }
        },
    }

  }).mount('#app')