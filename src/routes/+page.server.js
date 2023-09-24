import { mysqlconnFn } from "$lib/mysql";

export async function load() {
  let mysqlconn = await mysqlconnFn();
  try {
    let results = await mysqlconn
      .query("SELECT * FROM `ls_players`")
      .then(function ([rows, fields]) {
        console.log(rows);
        return rows;
      });

    return {
      data: results,
    };
  } catch (error) {
    console.error("Got an error!!!");
    console.log(error);
    return error;
  }
}