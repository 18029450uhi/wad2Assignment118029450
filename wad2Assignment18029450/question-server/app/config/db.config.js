module.exports = {
    HOST: process.env.MONGODB_HOST,
    USER: process.env.MONDODB_USER,
    PASSWORD: process.env.MONDODB_PASSWORD,
    DB: process.env.MONDODB_DB,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};