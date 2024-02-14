import mysql from 'mysql2/promise';
import { PUBLIC_DATABASE_HOST, PUBLIC_DATABASE_PASSWORD, PUBLIC_DATABASE, PUBLIC_DATABASE_USER } from '$env/static/public';

// @ts-ignore
export const mysqlconn = await mysql.createConnection({ 
	waitForConnections: true,
    host: PUBLIC_DATABASE_HOST,
    user: PUBLIC_DATABASE_USER,
    password: PUBLIC_DATABASE_PASSWORD,
    database: PUBLIC_DATABASE,
	multipleStatements: true,
	connectionLimit: 1,
	enableKeepAlive: true
});