import mysql from "mysql2/promise";
import { PUBLIC_DATABASE_HOST, PUBLIC_DATABASE_PASSWORD, PUBLIC_DATABASE, PUBLIC_DATABASE_USER } from '$env/static/public';
let mysqlconn = null;

export function mysqlconnFn() {
  if (!mysqlconn) {
    // used for development with MAMP
    // mysqlconn = mysql.createConnection({
    //   host: "127.0.0.1",
    //   user: "root",
    //   password: "",
    //   database: "statedata",
    // });
    mysqlconn = mysql.createConnection({
      host: PUBLIC_DATABASE_HOST,
      user: PUBLIC_DATABASE_USER,
      password: PUBLIC_DATABASE_PASSWORD,
      database: PUBLIC_DATABASE,
    });
  }

  return mysqlconn;
}