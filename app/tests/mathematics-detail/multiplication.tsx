import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const multiplicationTest: ExaminationTest = {
  title: "Vurma və Bölmə",
  icon: "multiplication",
  steps: [
    {
      id: "1",
      question: "7 × 8 = ?",
      content: "7 × 8",
      answers: [
        { text: "54", correct: false },
        { text: "56", correct: true },
        { text: "58", correct: false },
      ],
    },
    {
      id: "2",
      question: "144 ÷ 12 = ?",
      content: "144 ÷ 12",
      answers: [
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "13", correct: false },
      ],
    },
    {
      id: "3",
      question: "15 × 15 = ?",
      content: "15 × 15",
      answers: [
        { text: "215", correct: false },
        { text: "225", correct: true },
        { text: "235", correct: false },
      ],
    },
    {
      id: "4",
      question: "256 ÷ 16 = ?",
      content: "256 ÷ 16",
      answers: [
        { text: "14", correct: false },
        { text: "16", correct: true },
        { text: "18", correct: false },
      ],
    },
    {
      id: "5",
      question: "25 × 4 = ?",
      content: "25 × 4",
      answers: [
        { text: "90", correct: false },
        { text: "100", correct: true },
        { text: "110", correct: false },
      ],
    },
  ],
};

export default function MultiplicationTest() {
  return <ExaminationDetailComponent test={multiplicationTest} />;
}
