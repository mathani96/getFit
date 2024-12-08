import AsyncStorage from "@react-native-async-storage/async-storage";

const ProgressService = {

    async save(key, value) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        }catch (error) {
            console.log('Failed to save ', key);
        }
    },

    async load(key){
        try {
           const data = await AsyncStorage.getItem(key);
           return data ? data : null;
        }catch (error){
        console.log('Failed to load ', key);
        }
    }
    
}

export default ProgressService;