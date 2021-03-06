import "reflect-metadata";
import {createConnection} from "typeorm";
import { Tedis } from "tedis";
import logger from '../utils/logger';
 
export async function initializeDB(): Promise<void> {
  await createConnection()
  logger.info('Database successfuly')
}

export function initializeCache(port: number | undefined) : unknown {
 const tedis = new Tedis({
   port: port,
   host: "127.0.0.1"
 });
 return tedis;
}