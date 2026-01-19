const express =require('express');
const router = require('./routes/authRoutes');
const { error,errorsHandlers } = require('./middlewares/erroHandlers');



const app= express();
const PORT= process.env.PORT || 3000;

app.use(express.json());
app.get('/',(req,res)=>{
    res.json({message:'API Auth is running'});
});

app.use('/api/auth',router);

app.use((req,res,next)=>{
    error(404,`${req.urlOriginal} not Found`,next)
});

app.use(errorsHandlers);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
