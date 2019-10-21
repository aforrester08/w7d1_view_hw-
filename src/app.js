import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({

    el: "#app",

    data: {
      tasks: [
        {name: "Hover the Lounge", isDone: false},
        {name: "Do Ironing", isDone: true},
        {name: "Walk the dog", isDone: false},
      ],
      newTask: ""
    },

    methods: {
      saveNewTask: function () {
        this.tasks.push({
          name: this.newTask,
          isDone: false,
        });
        this.newTask = ""
      },

      addTask: function(index) {
				this.tasks[index].isDone = true;
			}

    }

  });
});
