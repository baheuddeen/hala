import client from '../../database.js';

export default class InitSource {
  async create(newInitSourceType: InitSourceType): Promise<InitSourceType> {
    try {
      for (let key  of Object.keys(newInitSourceType)){
          if (!newInitSourceType[key]) {
            newInitSourceType[key] = null;
          }
          if(newInitSourceType[key] && typeof(newInitSourceType[key]) == "string" && newInitSourceType[key].includes("\'")) {
            newInitSourceType[key] = newInitSourceType[key].replace(/\'/g, "''");
          }
      }
      const conn = await client.connect();
      const sql = `INSERT INTO init_source(ip, init_source, country, city)
      VALUES ($1, $2, $3, $4) RETURNING *`;   
      console.log('sql', sql);
         
      const assets = await conn.query(sql, [newInitSourceType.ip, newInitSourceType.init_source, newInitSourceType.country, newInitSourceType.city]);
      conn.release();
      return assets.rows[0];
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }

  async show(): Promise<InitSourceType[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * from init_source`;   
      console.log('sql', sql)
      const assets = await conn.query(sql);
      conn.release();      
      return assets.rows;
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }
}



export type InitSourceType = {
  id: number,
  init_source: string,
  created_at: string,
  ip: string,
  country: string,
  city: string,
}