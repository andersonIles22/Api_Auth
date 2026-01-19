const {Pool}=require('pg');
require('dotenv').config();

const pool =new Pool({
    connectionString:process.env.DATABASE_URL_AUTH_DB,
    ssl:process.env.NODE_ENV==='production'?{nojectUnauthorized:true}:false
//    connectionString:process.env.DATABASE_URL_AUTH_DB
});

module.exports=pool;