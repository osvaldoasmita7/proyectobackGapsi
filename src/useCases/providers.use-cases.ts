import { Database } from '../classes/Database';
import { BadRequestException, HttpStatus } from '@nestjs/common';
import { ProvidersDto } from 'src/providers/dto/providers.dto';
/**
 * Patrón utilizado: Singleton
 * Se utilizó una instancia generica para la lectura de la base de datos
 */
// Abrimos conexión con la base de datos
const database = new Database('db.json');

/**
 * Función que manda a traer todos los proveedores de la base de datos
 */
export const getAllProviders = async () => {
  try {
    const resp = database.readDatabase();
    return resp;
  } catch (error) {
    throw error;
  }
};

/**
 * Función que manda a guardar un proveedor de la base de datos
 */
export const writeProvider = async (jsonData: ProvidersDto) => {
  // Busca el proveedor por nombre
  const provider = database.getByName(jsonData.name);
  //Si el proveedor existe regresa un error
  if (provider)
    throw new BadRequestException({
      status: HttpStatus.BAD_REQUEST,
      message: 'Ya existe el proveedor',
      ok: false,
    });
  // Obtiene los proveedores
  const providers = await database.readDatabase();
  // Añadimos el proveedor a la lista
  providers.push({ id: providers.length + 1, ...jsonData });
  try {
    // Escribimos los proveedores en la base
    await database.writeDatabase(providers);
    // Regresamos la respuesta
    return { ok: true, message: 'Proveedor creado con éxito' };
  } catch (error) {
    throw error;
  }
};

/**
 * Función que manda a guardar muchos proveedores
 */
export const writeProviders = async (jsonData: ProvidersDto[]) => {
  try {
    // Mandamos a guardar todos los proveedores recibidos
    await database.writeDatabase(jsonData);
    // Regresamos respuesta
    return { ok: true, message: 'Proveedores actualizados con éxito' };
  } catch (error) {
    throw error;
  }
};

/**
 * Función que elimina un proveedor por ID
 */
export const deleteProviderById = async (id: number) => {
  try {
    try {
      // Mandamos a eliminar el proveedor
      return database.deletedById(id);
    } catch (error) {}
    return { ok: true, message: 'Proveedores actualizados con éxito' };
  } catch (error) {
    throw error;
  }
};
