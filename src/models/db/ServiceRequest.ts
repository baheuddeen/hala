import client from '../../database.js';

export default class ServiceRequest {
  async create(newServiceRequest: ServiceRequestType): Promise<ServiceRequestType> {
    try {
      for (let key  of Object.keys(newServiceRequest)){
          if (!newServiceRequest[key]) {
            newServiceRequest[key] = null;
          }
          if(newServiceRequest[key] && typeof(newServiceRequest[key]) == "string" && newServiceRequest[key].includes("\'")) {
            newServiceRequest[key] = newServiceRequest[key].replace(/\'/g, "''");
          }
      }
      const conn = await client.connect();
      const sql = `INSERT INTO service_requests(ip, user_name, service_type, phone, car_type, car_model)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;   
      console.log('sql', sql);
         
      const assets = await conn.query(sql, [newServiceRequest.ip, newServiceRequest.user_name, newServiceRequest.service_type, newServiceRequest.phone, newServiceRequest.car_type, newServiceRequest.car_model]);
      conn.release();      
      return assets.rows[0];
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }

  async show(): Promise<ServiceRequestType[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * from service_requests`;   
      console.log('sql', sql)
      const assets = await conn.query(sql);
      conn.release();      
      return assets.rows;
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }
}



export type ServiceRequestType = {
  id: number,
  user_name: string,
  service_type: string,
  phone: string,
  car_type: string,
  car_model: string,
  ip: string,
}