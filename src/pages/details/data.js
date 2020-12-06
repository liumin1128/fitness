const list = [
  {
    id: "hllt1",
    title: "25 MIN FULL BODYWEIGHT WORKOUT",
    iframe: "https://www.youtube.com/embed/Mvo2snJGhtM",
    content: [
      `Get ready for this at home no repeat full body workout! 25 min
    full bodyweight workout to blast fat and tighten up! Burn fat
    with this intense full body hiit workout.`,
      `For more total body no equipment at home workouts check out my
    channel.`,
    ],
  },
  {
    id: "hllt2",
    title: "30-Minute No-Equipment Cardio & HIIT Workout",
    iframe: "https://www.youtube.com/embed/CBWQGb4LyAM",
    content: [
      `Get ready to torch calories with Le Sweat founder Charlee Atkins! This no-equipment workout includes three circuits that are going to get your heart rate up and have you feeling the burn. If you love this workout, you can find more than 40 workouts from Charlee on Le Sweat TV: https://bit.ly/tvlesweat. From HIIT to strength training to stretching, the library of exercises on Le Sweat TV are organized by body part (abs, booty, arms, legs, etc.) and duration (5-30 minutes) so you can pick the workout that best suits your mood. You'll also get access to challenges and a weekly workout schedule curated by Charlee to make sure you feel "le burn.`,
    ],
  },

  {
    id: "strethcing1",
    title: "Full Body Stretching Routine (15 min. Follow Along)",
    iframe: "https://www.youtube.com/embed/E2SOrScNbww",
    content: [
      `Welcome to your 15 Minutes Full Body Stretching Routine! This short and well balanced sequence provides you with everything you need to get your daily dose of flexibility, mobility & relaxation. Feel free to implement this routine in your daily workout schedule to get the best results. Physically and mentally.`,
    ],
  },

  {
    id: "yoga1",
    title: "Total Body Yoga - Deep Stretch | Yoga With Adriene",
    iframe: "https://www.youtube.com/embed/GLy2rYHwUqY",
    content: [
      `A no equipment, no noise, no impact 20 minute fat burning HIIT workout you can do anywhere and follow easily! `,
      ` My new HOME. programme with 50 unique workouts + nutrition approved by a world-leading expert behind British Olympic athletes is now LIVE at www.natachaoceane.com `,
      `The 20 minute HIIT workout: each exercise is performed for 30s and followed by 30s rest. It's a circuit of 5 exercises, repeated 4 times!`,
      `1. Prisoner side to side squats`,
      `2. Explosive halo slam`,
      `3. Single leg body saw crunch`,
      `4. Alternating knee strikes`,
      `5. Lateral bears + kneel-to-squat`,
    ],
  },
];

export function getData(id) {
  return list.find((i) => i.id === id) || {};
}
