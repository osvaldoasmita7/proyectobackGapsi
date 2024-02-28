import { Customers } from './../classes/Customers';
const database = new Customers();

/**
 * Función que permite leer el número de cliente consecutivo de la base de datos
 */
export const getCustomerNumber = async () => {
  try {
    return database.readDatabase();
  } catch (error) {
    throw error;
  }
};
/**
 * Función que permite actualizar el número de cliente consecutivo de la base de datos
 */
export const putCustomerNumber = async (id: string) => {
  try {
    return database.writeDatabase(id);
  } catch (error) {
    throw error;
  }
};
