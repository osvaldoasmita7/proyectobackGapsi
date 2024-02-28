import { readFile, writeFile } from 'fs/promises';

export class Customers {
  /**
   * Lee el archivo json que lee el consecutivo de los clientes
   */
  readDatabase = async () => {
    try {
      // Lee un archivo
      const file = await readFile('./src/database/customers.json', 'utf-8');
      // Convierte en json
      const resp = JSON.parse(file);
      // retorna el json
      return resp.customers;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Lee el archivo json que escribe el consecutivo de los clientes
   */
  writeDatabase = async (customers: string) => {
    // Escribe archivo el consecutivo de los clientes
    await writeFile(
      './src/database/customers.json',
      JSON.stringify({ customers }),
    );
    // Retorna el consecutivo de clientes
    return await this.readDatabase();
  };
}
