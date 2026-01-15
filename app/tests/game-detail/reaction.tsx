import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const reactionTest: ExaminationTest = {
  title: "Reaksiya Testi",
  icon: "flash",
  steps: [
    {
      id: "1",
      question: "Bu rəqəmləri sırala: 5, 2, 8, 1",
      content: "Kiçikdən böyüyə",
      answers: [
        { text: "1, 2, 5, 8", correct: true },
        { text: "2, 1, 5, 8", correct: false },
        { text: "1, 5, 2, 8", correct: false },
      ],
    },
    {
      id: "2",
      question: "Hansı rəqəm tək ədəddir?",
      content: "4, 6, 7, 8",
      answers: [
        { text: "4", correct: false },
        { text: "7", correct: true },
        { text: "6", correct: false },
      ],
    },
    {
      id: "3",
      question: "Əksi nədir: SAĞ",
      content: "Əks istiqamət",
      answers: [
        { text: "YUXARI", correct: false },
        { text: "SOL", correct: true },
        { text: "AŞAĞI", correct: false },
      ],
    },
    {
      id: "4",
      question: "10 + 5 - 3 = ?",
      content: "Sürətli hesablama",
      answers: [
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "13", correct: false },
      ],
    },
    {
      id: "5",
      question: "Hansı hərf 'M' hərfindən sonra gəlir?",
      content: "Əlifba",
      answers: [
        { text: "L", correct: false },
        { text: "N", correct: true },
        { text: "O", correct: false },
      ],
    },
  ],
};

export default function ReactionTest() {
  return <ExaminationDetailComponent test={reactionTest} />;
}
