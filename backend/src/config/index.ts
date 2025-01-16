import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || 'your_db_user',
        password: process.env.DB_PASSWORD || 'your_db_password',
        name: process.env.DB_NAME || 'your_db_name',
    },
};
