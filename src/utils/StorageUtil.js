import { AsyncStorage } from 'react-native';
// import {AsyncStorage} from '@react-native-community/async-storage'

export default class StorageUtil {
    static setData(keyName, keyData) {
        return new Promise((reslove, reject) => {
            AsyncStorage.setItem(keyName, keyData, (error) => {
                if (error) {
                    return reslove('存储失败');
                } else {
                    return reslove('存储成功');
                }
            });
        })
    }

    static deleteData(keyName) {
        return new Promise((reslove, reject) => {
            AsyncStorage.removeItem(keyName, (error) => {
                if (!error) {
                    return reslove('数据已经删除');
                } else {
                    return reslove('数据删除失败');
                }
            });
        })
    }

    static getData(keyName) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(keyName, (error, result) => {
                if (!error) {
                    return resolve(result);
                } else {
                    return resolve('获取数据失败')
                }
            })
        });
    }
}