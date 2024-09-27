import express, { Router } from 'express';



const app = express();
app.use(express.json());
const router = Router();

const taskArr: any[] = [];

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

router.get('/bye', (req, res) => {
    res.send('See you later!');
})

const taskRouter = Router();

taskRouter.get('/', (req, res) => {
    res.send(taskArr).status(200);
});

taskRouter.post('/', (req, res) => {
    const { task } = req.body;
    taskArr.push(task);
    res.send('task created!').status(200);
})

app.use(router);

app.use('/task', taskRouter);

app.listen(3000, () => {

    console.log('Server is running on http://localhost:3000');
});

console.log('Hello, world!');

