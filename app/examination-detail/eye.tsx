import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const eyeTest: ExaminationTest = {
  title: "Göz yoxlanışı",
  icon: "eye",
  steps: [
    {
      id: "1",
      question: "Bu rəqəm nədir?",
      content: "12",
      answers: [
        { text: "10", correct: false },
        { text: "12", correct: true },
        { text: "13", correct: false },
      ],
    },
    {
      id: "2",
      question: "Bu rəqəm neçədir?",
      content: "8",
      answers: [
        { text: "6", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false },
      ],
    },
    {
      id: "3",
      question: "Bu iki rəqəmin cəmi neçədir?",
      content: "5 + 3 = ?",
      answers: [
        { text: "7", correct: false },
        { text: "9", correct: false },
        { text: "8", correct: true },
      ],
    },
  ],
};

export default function EyeExamination() {
  return <ExaminationDetailComponent test={eyeTest} />;
}
