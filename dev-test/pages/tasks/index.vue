<template>
    <div>
        <h1>Tasks</h1>
        <ul>
        <li v-for="task in tasks" :key="task.id">
            {{ task.title }}
        </li>
        </ul>
        <button @click="addTask">Add Task</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: [
                
            ]
        }
    },
    methods:{
        addTask(){
            this.tasks.push({
                id: this.tasks.length + 1,
                title: 'Task ' + (this.tasks.length + 1)
            })
        }
    }
}
</script>