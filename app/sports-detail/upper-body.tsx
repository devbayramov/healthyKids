import SportsDetailComponent, {
    SportsTest,
} from "@/components/SportsDetailComponent";

const upperBodyWorkout: SportsTest = {
  title: "Üst Bədən Məşqləri",
  icon: "arm-flex",
  steps: [
    {
      id: "1",
      name: "Push-up",
      description: "Təkan hərəkətləri (Döş, çiyin)",
      duration: 30,
      reps: "15 döngü",
      icon: "arm-flex",
    },
    {
      id: "2",
      name: "Shoulder Press",
      description: "Çiyin seçiciləri",
      duration: 30,
      reps: "12 döngü",
      icon: "dumbbell",
    },
    {
      id: "3",
      name: "Bicep Curl",
      description: "Qolun əzələsi",
      duration: 25,
      reps: "10 döngü",
      icon: "arm-flex",
    },
    {
      id: "4",
      name: "Tricep Dips",
      description: "Qolun arxa əzələsi",
      duration: 25,
      reps: "8 döngü",
      icon: "arm-flex",
    },
  ],
};

export default function UpperBodyExercise() {
  return <SportsDetailComponent workout={upperBodyWorkout} />;
}
