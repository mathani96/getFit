const WorkoutImages = {
  
  rest: require('./assets/rest.mp4'),
  ready: require('./assets/ready.mp4'),
  finish: require('./assets/done.mp4'),

  workoutCategories: {
      abs: require('./assets/muscleGroups/core.png'),
      legs: require('./assets/muscleGroups/legs.png'),
      chest: require('./assets/muscleGroups/chest.png'),
      back: require('./assets/muscleGroups/full-body.png'),
    },

    previews: {
      chest: [
        require('./assets/previewImages/chestPreview/regular_pushup_1.png'),
        require('./assets/previewImages/chestPreview/wide_pushup_1.png'),
        require('./assets/previewImages/chestPreview/diamond_pushup_1.png'),
        require('./assets/previewImages/chestPreview/tricep_dips_1.png'),
        require('./assets/previewImages/chestPreview/decline_pushup.png'),
        require('./assets/previewImages/chestPreview/incline_pushup_1.png'),
        require('./assets/previewImages/chestPreview/shoulder_press.png'),
      ],
      legs: [
        require('./assets/previewImages/legsPreview/regular_squat.png'),
        require('./assets/previewImages/legsPreview/quad_squat.png'),
      ],
      core: [
        require('./assets/previewImages/corePreview/situps_1.png'),
        require('./assets/previewImages/corePreview/leg_raises_1.png'),
        
      ],
      cardio: [
        require('./assets/previewImages/fullBodyPreview/jumping_jack_2.png'),
        require('./assets/previewImages/fullBodyPreview/high_knees_2.png'),
      ],
    },
    
    exercises: {
      chest: [
        require('./assets/workouts/chest/push-up-regular.mp4'),
        require('./assets/workouts/chest/push-up-wide.mp4'),
        require('./assets/workouts/chest/push-up-narrow.mp4')
      ],
      legs: [
        require('./assets/workouts/legs/squat-glutes-hamstrings.mp4'),
        require('./assets/workouts/legs/squat-quads.mp4'),
      ],
      core: [
        require('./assets/workouts/core/sit_ups.mp4'),
        require('./assets/workouts/core/leg_raises.mp4'),
        
      ],
      cardio: [
        require('./assets/workouts/full-body/jumping-jacks.mp4'),
        require('./assets/workouts/full-body/high-knees.mp4'),
      ],
    },


    
    exerciseNames: {

      chest: ['Push-up Regular', 'Push-up Wide', 'Push-up Narrow',
              'Dips', 'Push-up Decline', 'Push-up Incline',
              'Shoulder Press',
      ],

      legs: ['Regular Squat', 'Quad Squat', 'Glute Bridge',
            'Lunges Left', 'Lunges Right', 'Calf Raise',
            'Single Leg Deadlift Right', 'Single Leg Deadlift Left',
      ],
      core: ['Sit-ups', 'Leg Raises', 'Knee Pull Ins',
              'Cross Legs', 'Oblique Side Leg Raise',
              'Russian Twist',
      ],
      cardio: ['Jumping Jacks', 'High-knees', 'Jabs',
                'Butt-kicks', 'Burpees', 'Criss-cross',
                'Push-up Regular', 'Mountain Climbers',
                'Jumping Squat'
      ],
    },

    exerciseInstructions: {
      chest: [
        'Start in a plank position with your hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up to the starting position.',
        'Begin in a plank position with your hands placed wider than shoulder-width. Lower your body until your chest is close to the ground, then press back up.',
        'Start in a plank position with your hands placed closer than shoulder-width. Lower yourself while keeping your elbows close to your torso, then push back up.',
        'Using parallel bars or a sturdy surface, support yourself with straight arms. Lower your body by bending your elbows until your upper arms are parallel to the floor, then press back up.',
        'Place your feet on an elevated surface and your hands on the ground in a plank position. Lower your chest toward the floor, then push back up.',
        'Place your hands on an elevated surface and your feet on the ground. Lower your chest toward the surface, then push back up.',
        'Position yourself in a downward dog position with your hips raised high. Lower your head toward the floor, bending your elbows, then press back up.',
      ],
    
      legs:[
        'Stand with your feet shoulder-width apart. Push your hips back and bend your knees to lower into a squat, keeping your back straight. Return to standing.',
        'Stand with feet narrower shoulder-width apart whilst lifting your heel off the ground. Focus on engaging your quadriceps as you squat down and return to standing.',
        'Place your back on an elevated surface with knees bent and feet flat on the floor. Lift your hips toward the ceiling, squeezing your glutes, then lower back down.',
        'Step your left leg forward, lowering your body until your front thigh is parallel to the ground. Push back to the starting position.',
        'Step your right leg forward, lowering your body until your front thigh is parallel to the ground. Push back to the starting position.',
        'Stand with your feet shoulder-width apart. Lift your heels off the ground as high as possible, then lower back down.',
        'Stand on your right leg and hinge at your hips while extending your left leg back. Lower your torso until it is parallel to the ground, then return to standing.',
        'Stand on your left leg and hinge at your hips while extending your right leg back. Lower your torso until it s parallel to the ground, then return to standing.',
      ],
    
      core: [
        'Lie on your back with knees bent and feet flat on the floor. Lift your upper body toward your knees, then lower back down.',
        'Lie on your back with your legs straight. Lift your legs toward the ceiling, then lower them without touching the ground.',
        'Sit on the floor with your hands behind you for support. Pull your knees toward your chest, then extend them back out.',
        'Sit on the floor with your legs extended. Cross one leg over the other and alternate while engaging your core.',
        'Lie on your right side with your legs straight. Lift your top leg toward the ceiling, then lower it back down, repeat repeat on other side.',
        'Sit on the floor with your knees bent and feet lifted. Twist your torso from side to side while holding your hands together.',
      ],
    
      cardio: [
         'Start standing with your arms at your sides. Jump while spreading your legs and raising your arms overhead, then return to the starting position.',
         'Run in place while lifting your knees as high as possible with each step.',
         'Stand in a fighting stance and throw quick punches alternately with each hand.',
         'Run in place while kicking your heels toward your glutes.',
         'From a standing position, squat down and place your hands on the floor. Jump back into a plank, squat down again and place your hands on the floor then jump forward, and leap upward.',
         'Jump while crossing your legs and arms, then jump again to return to the starting position.',
         'Start in a plank position with your hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up to the starting position.',
         'Start in a plank position and alternate driving your knees toward your chest at a running pace.',
         'Start standing then jump upwards then landing in a squat position.'
      ],
    },
    

};
export default WorkoutImages;