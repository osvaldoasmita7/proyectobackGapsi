import { readFile, writeFile } from 'fs/promises';

export class Customers {
  readDatabase = async () => {
    try {
      const file = await readFile('./src/database/customers.json', 'utf-8');
      const resp = JSON.parse(file);
      return resp.customers;
    } catch (error) {
      throw error;
    }
  };
  writeDatabase = async (customers: string) => {
    await writeFile(
      './src/database/customers.json',
      JSON.stringify({ customers }),
    );
    return await this.readDatabase();
  };
}
