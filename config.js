//* Setting dotenv
require('dotenv').config;

//* Defining global configs
const config = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: process.env.DEV_DB_PASS,
            database: 'products-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            }
        },
        test: {

        },
        production: {

        }
    }
};

module.exports = config;