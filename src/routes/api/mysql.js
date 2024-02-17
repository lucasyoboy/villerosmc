import mysql from 'mysql2/promise';
import { PUBLIC_DATABASE_HOST, PUBLIC_DATABASE_PASSWORD, PUBLIC_DATABASE, PUBLIC_DATABASE_USER } from '$env/static/public';

// @ts-ignore
export const mysqlconn = await mysql.createConnection({ 
    host: PUBLIC_DATABASE_HOST,
    user: PUBLIC_DATABASE_USER,
    password: PUBLIC_DATABASE_PASSWORD,
    database: PUBLIC_DATABASE,
	multipleStatements: true,
	connectionLimit: 1,
	keepAliveInitialDelay: 1000000000,
    enableKeepAlive: true,
});