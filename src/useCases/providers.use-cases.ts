import { iProvider } from '../interfaces/Providers';
import { Database } from '../classes/Database';

export const getAllProviders = async () => {
  const database = new Database();
  try {
    const resp = database.readDatabase();
    return resp;
  } catch (error) {
    throw error;
  }
};

export const writeProvider = async (jsonData: iProvider) => {
  const database = new Database();
  const providers = await database.readDatabase();
  const provider = await database.getByName(jsonData.name);

  if (provider)
    throw Error(
      JSON.stringify({
        status: 400,
        message: 'Ya existe el proveedor',
        ok: false,
      }),
    );
  providers.push({ id: providers.length + 1, ...jsonData });
  try {
    await database.writeDatabase(providers);
    return { ok: true, message: 'Proveedor creado con éxito' };
  } catch (error) {
    throw error;
  }
};
export const writeProviders = async (jsonData: iProvider[]) => {
  const database = new Database();
  try {
    await database.writeDatabase(jsonData);
    return { ok: true, message: 'Proveedores actualizados con éxito' };
  } catch (error) {
    throw error;
  }
};
export const deleteProviderById = async (id: number) => {
  const database = new Database();
  try {
    try {
      return database.deletedById(id);
    } catch (error) {}
    return { ok: true, message: 'Proveedores actualizados con éxito' };
  } catch (error) {
    throw error;
  }
};
