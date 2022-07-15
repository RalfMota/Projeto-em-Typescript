import express from 'express';

//routes
import home from '../routes/home';
import home from '../routes/user';

const app = express();

app.use('/', home);
app.use('/user', user);

app.listen(3000, function(){
    console.log('servidor rodando');
});