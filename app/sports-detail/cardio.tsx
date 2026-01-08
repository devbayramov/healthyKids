import SportsDetailComponent, {
    SportsTest,
} from "@/components/SportsDetailComponent";

const cardioWorkout: SportsTest = {
  title: "Kardiyovaskulyar Məşqləri",
  icon: "heart-pulse",
  steps: [
    {
      id: "1",
      name: "Jogging",
      description: "Yavaş koşu",
      duration: 60,
      reps: "1 dəqiqə",
      icon: "heart-pulse",
    },
    {
      id: "2",
      name: "Jumping Jacks",
      description: "Sıçrayış hərəkətləri",
      duration: 45,
      reps: "45 saniyə",
      icon: "heart-pulse",
    },
    {
      id: "3",
      name: "Burpees",
      description: "Tam bədən məşqi",
      duration: 30,
      reps: "10 döngü",
      icon: "heart-pulse",
    },
    {
      id: "4",
      name: "High Knees",
      description: "Diz qaldırma",
      duration: 40,
      reps: "40 saniyə",
      icon: "heart-pulse",
    },
  ],
};

export default function CardioExercise() {
  return <SportsDetailComponent workout={cardioWorkout} />;
}
