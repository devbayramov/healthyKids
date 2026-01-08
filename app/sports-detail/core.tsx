import SportsDetailComponent, {
    SportsTest,
} from "@/components/SportsDetailComponent";

const coreWorkout: SportsTest = {
  title: "Kərə Əzələsi Məşqləri",
  icon: "dumbbell",
  steps: [
    {
      id: "1",
      name: "Plank",
      description: "Düz gövdə tutma",
      duration: 40,
      reps: "40 saniyə",
      icon: "dumbbell",
    },
    {
      id: "2",
      name: "Crunches",
      description: "Qarın əzələsi",
      duration: 30,
      reps: "20 döngü",
      icon: "dumbbell",
    },
    {
      id: "3",
      name: "Russian Twists",
      description: "Kəskin fırlanmalar",
      duration: 30,
      reps: "15 döngü",
      icon: "dumbbell",
    },
    {
      id: "4",
      name: "Leg Raises",
      description: "Ayaq qaldırma (kərə)",
      duration: 25,
      reps: "12 döngü",
      icon: "dumbbell",
    },
  ],
};

export default function CoreExercise() {
  return <SportsDetailComponent workout={coreWorkout} />;
}
