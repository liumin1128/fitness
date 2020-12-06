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
];

export function getData(id) {
  return list.find((i) => i.id === id) || {};
}
