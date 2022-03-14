const app = new Vue ({
    el: '#root',
    data: {
        arrToDo: [
            
        ],
    },
    methods: {

        pushObj() {
            let text = document.querySelector('input').value;
            const todo = {
                text : text,
                done: false
            }
            this.arrToDo.push(todo);
            console.log(todo);
        },

        removeObj() {
            this.arrToDo.splice(this.index, 1);
        }

    }
});