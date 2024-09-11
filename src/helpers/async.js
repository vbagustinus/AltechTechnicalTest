import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (err) {
    throw err;
  }
};

const getItems = async keys => {
  try {
    return await AsyncStorage.multiGet(keys);
  } catch (err) {
    throw err;
  }
};

const setItem = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (err) {
    throw err;
  }
};

const getAllKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (err) {
    throw err;
  }
};

export {getItem, getItems, setItem, getAllKeys};
