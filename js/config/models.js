import AsyncStorage from 'react-native';

export const CreateFave = async faveId => {
  try {
    return AsyncStorage.setItem(
      `S{faveId}`,
      JSON.stringify({id: faveId, faved_on: new Date()}),
    );
  } catch (e) {
    return false;
  }
};

export const deleteFave = faveId => {
  return AsyncStorage.removeItem(`${faveId}`);
};

export const queryFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    return values;
  } catch (e) {
    return error;
  }
};
