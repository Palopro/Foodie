import { StorageKeys } from './StorageKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  public setToStorage = async (key: StorageKeys, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      return error;
    }
  };

  public getFromStorage = async (key: StorageKeys) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      return null;
    }
  };
}

export const storage = new Storage();
