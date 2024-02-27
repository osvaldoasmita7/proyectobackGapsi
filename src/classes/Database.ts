import { readFile, writeFile } from 'fs/promises';

export class Database {
  providers = [];
  constructor() {
    this.readDatabase();
  }
  readDatabase = async () => {
    const file = await readFile('./src/database/db.json', 'utf-8');
    this.providers = JSON.parse(file);
    return this.providers;
  };
  writeDatabase = async (jsonData) => {
    const file = await writeFile(
      './src/database/db.json',
      JSON.stringify(jsonData),
    );
    return file;
  };
  getById = (id: number) => {
    const find = this.providers.find((provider) => provider.id === id);

    return find || null;
  };
  getByName = (name: string) => {
    const find = this.providers.find((provider) => provider.name === name);

    return find || null;
  };

  deletedById = async (id: number) => {
    await this.readDatabase();

    const index = this.providers.findIndex((provider) => provider.id == id);
    if (index === -1)
      throw new Error(
        JSON.stringify({
          ok: false,
          message: 'No se encontró el proveedor',
          status: 400,
        }),
      );
    this.providers.splice(index, 1);
    await this.writeDatabase(this.providers);
    return { ok: true, message: 'Registro eliminado con éxito' };
  };
}
