import SportsDetailComponent, {
    SportsTest,
} from "@/components/SportsDetailComponent";

const lowerBodyWorkout: SportsTest = {
  title: "Alt Bədən Məşqləri",
  icon: "run",
  steps: [
    {
      id: "1",
      name: "Squats",
      description: "Araq hərəkətləri (Ayaq əzələsi)",
      duration: 30,
      reps: "15 döngü",
      icon: "run",
    },
    {
      id: "2",
      name: "Lunges",
      description: "Geniş addımlar",
      duration: 30,
      reps: "12 döngü",
      icon: "walk",
    },
    {
      id: "3",
      name: "Leg Raises",
      description: "Ayaq qaldırma",
      duration: 25,
      reps: "10 döngü",
      icon: "run",
    },
    {
      id: "4",
      name: "Calf Raises",
      description: "Baldır əzələsi",
      duration: 20,
      reps: "20 döngü",
      icon: "walk",
    },
  ],
};

export default function LowerBodyExercise() {
  return <SportsDetailComponent workout={lowerBodyWorkout} />;
}
