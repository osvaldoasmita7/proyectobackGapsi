import { BadRequestException, HttpStatus } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { iProvider } from 'src/interfaces';

export class Database {
  providers: iProvider[] = [];
  nameDB: string = '';
  constructor(name: string) {
    // Lee la base de datos
    this.nameDB = name;
    this.readDatabase();
  }
  /**
   * Función que lee la base de datos
   */
  readDatabase = async () => {
    const file = await readFile('./src/database/' + this.nameDB, 'utf-8');
    this.providers = JSON.parse(file);
    return this.providers;
  };
  /**
   * Función que escribe en la base de datos
   */
  writeDatabase = async (jsonData) => {
    const file = await writeFile(
      './src/database/' + this.nameDB,
      JSON.stringify(jsonData),
    );
    return file;
  };
  /**
   * Función que obtiene un registro por id de la en la base de datos
   */
  getById = (id: number) => {
    const find = this.providers.find((provider) => provider.id === id);

    return find || null;
  };
  /**
   * Función que obtiene un registro por nombre de la en la base de datos
   */
  getByName = (name: string) => {
    const find = this.providers.find((provider) => provider.name === name);
    return find || null;
  };
  /**
   * Función que elimina un registro por id de la en la base de datos
   */
  deletedById = async (id: number) => {
    // Obtenemos el proveedor
    const index = this.providers.findIndex((provider) => provider.id == id);
    // Si no se encuentra se regresa un error
    if (index === -1)
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        message: 'No se encontró el proveedor',
        ok: false,
      });
    // Si se encuentra se quita del arreglo
    this.providers.splice(index, 1);
    // Se actualizan los proveedores en el archivo
    await this.writeDatabase(this.providers);
    // Regresamos respuesta correcta
    return { ok: true, message: 'Registro eliminado con éxito' };
  };
}
