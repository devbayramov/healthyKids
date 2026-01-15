import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const speedTest: ExaminationTest = {
  title: "Sürət Testi",
  icon: "speedometer",
  steps: [
    {
      id: "1",
      question: "3 × 4 = ?",
      content: "Sürətli cavab",
      answers: [
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "14", correct: false },
      ],
    },
    {
      id: "2",
      question: "20 ÷ 4 = ?",
      content: "Sürətli cavab",
      answers: [
        { text: "4", correct: false },
        { text: "5", correct: true },
        { text: "6", correct: false },
      ],
    },
    {
      id: "3",
      question: "Həftənin 5-ci günü hansıdır?",
      content: "Sürətli cavab",
      answers: [
        { text: "Çərşənbə axşamı", correct: false },
        { text: "Cümə", correct: true },
        { text: "Şənbə", correct: false },
      ],
    },
    {
      id: "4",
      question: "100 - 37 = ?",
      content: "Sürətli cavab",
      answers: [
        { text: "63", correct: true },
        { text: "67", correct: false },
        { text: "73", correct: false },
      ],
    },
    {
      id: "5",
      question: "İlin 6-cı ayı hansıdır?",
      content: "Sürətli cavab",
      answers: [
        { text: "May", correct: false },
        { text: "İyun", correct: true },
        { text: "İyul", correct: false },
      ],
    },
  ],
};

export default function SpeedTest() {
  return <ExaminationDetailComponent test={speedTest} />;
}
