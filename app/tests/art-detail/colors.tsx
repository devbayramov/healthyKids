import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const colorsTest: ExaminationTest = {
  title: "Rəng Bilikləri",
  icon: "palette",
  steps: [
    {
      id: "1",
      question: "Əsas rənglər hansılardır?",
      content: "Rəng nəzəriyyəsi",
      answers: [
        { text: "Qırmızı, Sarı, Mavi", correct: true },
        { text: "Yaşıl, Narıncı, Bənövşəyi", correct: false },
        { text: "Qara, Ağ, Boz", correct: false },
      ],
    },
    {
      id: "2",
      question: "Qırmızı və Sarı qarışdırılanda hansı rəng alınır?",
      content: "Rəng qarışığı",
      answers: [
        { text: "Yaşıl", correct: false },
        { text: "Narıncı", correct: true },
        { text: "Bənövşəyi", correct: false },
      ],
    },
    {
      id: "3",
      question: "Mavi və Sarı qarışdırılanda hansı rəng alınır?",
      content: "Rəng qarışığı",
      answers: [
        { text: "Yaşıl", correct: true },
        { text: "Narıncı", correct: false },
        { text: "Qəhvəyi", correct: false },
      ],
    },
    {
      id: "4",
      question: "Hansı rəng 'isti' rəng sayılır?",
      content: "Rəng temperaturu",
      answers: [
        { text: "Mavi", correct: false },
        { text: "Qırmızı", correct: true },
        { text: "Yaşıl", correct: false },
      ],
    },
    {
      id: "5",
      question: "Hansı rəng 'soyuq' rəng sayılır?",
      content: "Rəng temperaturu",
      answers: [
        { text: "Sarı", correct: false },
        { text: "Mavi", correct: true },
        { text: "Narıncı", correct: false },
      ],
    },
  ],
};

export default function ColorsTest() {
  return <ExaminationDetailComponent test={colorsTest} />;
}
