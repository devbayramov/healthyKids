import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const additionTest: ExaminationTest = {
  title: "Toplama və Çıxma",
  icon: "plus-minus",
  steps: [
    {
      id: "1",
      question: "15 + 27 = ?",
      content: "15 + 27",
      answers: [
        { text: "41", correct: false },
        { text: "42", correct: true },
        { text: "43", correct: false },
      ],
    },
    {
      id: "2",
      question: "89 - 34 = ?",
      content: "89 - 34",
      answers: [
        { text: "55", correct: true },
        { text: "54", correct: false },
        { text: "56", correct: false },
      ],
    },
    {
      id: "3",
      question: "156 + 244 = ?",
      content: "156 + 244",
      answers: [
        { text: "390", correct: false },
        { text: "400", correct: true },
        { text: "410", correct: false },
      ],
    },
    {
      id: "4",
      question: "500 - 178 = ?",
      content: "500 - 178",
      answers: [
        { text: "322", correct: true },
        { text: "332", correct: false },
        { text: "312", correct: false },
      ],
    },
    {
      id: "5",
      question: "999 + 111 = ?",
      content: "999 + 111",
      answers: [
        { text: "1100", correct: false },
        { text: "1110", correct: true },
        { text: "1010", correct: false },
      ],
    },
  ],
};

export default function AdditionTest() {
  return <ExaminationDetailComponent test={additionTest} />;
}
