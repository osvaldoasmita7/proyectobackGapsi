import { Customers } from './../classes/Customers';

export const getCustomerNumber = async () => {
  const database = new Customers();
  try {
    return database.readDatabase();
  } catch (error) {
    throw error;
  }
};
export const putCustomerNumber = async (id: string) => {
  const database = new Customers();
  try {
    return database.writeDatabase(id);
  } catch (error) {
    throw error;
  }
};
