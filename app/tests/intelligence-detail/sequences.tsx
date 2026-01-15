import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const sequencesTest: ExaminationTest = {
  title: "Ardıcıllıq Tapşırıqları",
  icon: "format-list-numbered",
  steps: [
    {
      id: "1",
      question: "Ardıcıllığı tamamlayın: 2, 4, 8, 16, ?",
      content: "2, 4, 8, 16, ?",
      answers: [
        { text: "24", correct: false },
        { text: "32", correct: true },
        { text: "30", correct: false },
      ],
    },
    {
      id: "2",
      question: "Ardıcıllığı tamamlayın: 1, 1, 2, 3, 5, ?",
      content: "Fibonaççi ardıcıllığı",
      answers: [
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "6", correct: false },
      ],
    },
    {
      id: "3",
      question: "Ardıcıllığı tamamlayın: 3, 6, 9, 12, ?",
      content: "3, 6, 9, 12, ?",
      answers: [
        { text: "14", correct: false },
        { text: "15", correct: true },
        { text: "16", correct: false },
      ],
    },
    {
      id: "4",
      question: "Ardıcıllığı tamamlayın: 100, 90, 81, 73, ?",
      content: "Azalan ardıcıllıq",
      answers: [
        { text: "64", correct: false },
        { text: "66", correct: true },
        { text: "65", correct: false },
      ],
    },
    {
      id: "5",
      question: "Ardıcıllığı tamamlayın: 1, 4, 9, 16, ?",
      content: "Kvadrat ədədlər",
      answers: [
        { text: "20", correct: false },
        { text: "25", correct: true },
        { text: "24", correct: false },
      ],
    },
  ],
};

export default function SequencesTest() {
  return <ExaminationDetailComponent test={sequencesTest} />;
}
