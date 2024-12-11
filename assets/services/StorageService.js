import AsyncStorage from "@react-native-async-storage/async-storage";

const StorageService = {


    async clearAllStorage () {
        try {
            await AsyncStorage.clear();
            console.log("AsyncStorage cleared!");
        } catch (e) {
            console.log("Failed to clear AsyncStorage:", e);
        }
    },

    async saveWorkoutProgress(key, value) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        }catch (error) {
            console.log('Failed to save WorkoutProgress ', key);
        }
    },

    async loadWorkoutProgress(key){
        
        try {
           const currentProgress = await AsyncStorage.getItem(key);
           console.log("progress for ", key, " is ", currentProgress);

           return currentProgress ? parseInt(currentProgress, 10) : 0;
        }catch (error){
        console.log('Failed to load WorkoutProgress ', key), error;
        }

    },

    async saveStreak(){
        try {

            const currentdate = new Date();
            console.log("date captured : ", currentdate);
            const lastWorkoutDateData = await AsyncStorage.getItem("lastWorkoutDate");
            const lastWorkoutDate = lastWorkoutDateData ? new Date(JSON.parse(lastWorkoutDateData)) : null;
            const previousStreakData = await AsyncStorage.getItem("currentStreak");
            const previousStreak = previousStreakData ? parseInt(previousStreakData, 10) : 0;
            console.log("last Workout date from storage", lastWorkoutDate);
            console.log("Previous streak :  ", previousStreak);
            let currentStreak = 1;

            /*
            if(lastWorkoutDate){
                const timeDiff = currentdate - lastWorkoutDate;
                const dateDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
           
                if(dateDiff > 1){
                    // set new streak to 1
                    currentStreak = 1;
                }else if(dateDiff === 1){
                    // increase streak by 1
                    currentStreak = previousStreak + 1;
                }else if(dateDiff < 1){
                    currentStreak = previousStreak;
                }

            }

            */

            currentStreak = previousStreak + 1;
            console.log("new streak :  ", currentStreak);


            await AsyncStorage.setItem("lastWorkoutDate", JSON.stringify(currentdate));
            await AsyncStorage.setItem("currentStreak", JSON.stringify(currentStreak));

            return currentStreak;

        }catch (error){
            console.log('Failed to save streak ', error);
        }
    }, 

    async loadStreak(){


        try {

            const currentDate = new Date();

            const lastWorkoutDateData = await AsyncStorage.getItem("lastWorkoutDate");
            const lastWorkoutDate = lastWorkoutDateData ? new Date(JSON.parse(lastWorkoutDateData)) : null;
            const previousStreakData = await AsyncStorage.getItem("currentStreak");
            const previousStreak = previousStreakData ? parseInt(previousStreakData, 10) : 0;

            let currentStreak = previousStreak;

            if(lastWorkoutDate){
                const timeDiff = currentDate - lastWorkoutDate;
                const dateDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
           
                if(dateDiff > 1){
                    // reset streak to 0
                    currentStreak = 0;
                }else if(dateDiff <= 1){
                    // retrieve the streak
                    currentStreak = previousStreak;
                }

            }

           
            await AsyncStorage.setItem("currentStreak", JSON.stringify(currentStreak));

            // uncomment and visit progress page to clear progress history.
            //this.clearAllStorage();

            return currentStreak;

        } catch (error) {
            console.log('Failed to load streak ', error);
        }

    }
    
}

export default StorageService;