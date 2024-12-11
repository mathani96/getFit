const WorkoutImages = {
  rest: require('./assets/workouts/rest.png'),
  ready: require('./assets/workouts/ready.png'),
  finish: require('./assets/workouts/finish.png'),

  workoutCategories: {
      abs: require('./assets/muscleGroups/abs.png'),
      legs: require('./assets/muscleGroups/quads.png'),
      chest: require('./assets/muscleGroups/chest.png'),
      back: require('./assets/muscleGroups/back.png'),
    },
    
    exercises: {
      chest: [
        require('./assets/workouts/chest-tri/lower-chest-push-up.png')
      ]
    }, 
    exercisetNames:{
      chest: [
        'Regular Push ups',
        'wide push ups',
      ]
    },
    exerciseInstructions:{
      chest: [
        'keep your back straight, hands shoulder width apart',
        'keep your back straight, hands wider than shoulder width apart',
      ]
    }
  };
  
  export default WorkoutImages;