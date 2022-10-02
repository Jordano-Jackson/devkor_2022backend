//import {getUser, getUserByName, getUserList, postUser} from 'user'
import router from '../router/main.js'
import express from 'express'


const app = express();
const port = 3000;
const myRouter = router;

//app.set('views', __dirname + '/views');

app.get('/', (req,res) => {
    res.send('Main Page');
})

app.listen(port, function() {
    console.log("server has started on port " + port);
});

app.use('/', myRouter);

export default router;
