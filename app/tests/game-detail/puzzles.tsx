import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const puzzlesTest: ExaminationTest = {
  title: "Tapmacalar",
  icon: "puzzle",
  steps: [
    {
      id: "1",
      question: "Günəş doğanda görünür, batanda yox olur. Nədir?",
      content: "Tapmaca 1",
      answers: [
        { text: "Ay", correct: false },
        { text: "Kölgə", correct: true },
        { text: "Ulduz", correct: false },
      ],
    },
    {
      id: "2",
      question: "Nə qədər çox götürərsən, o qədər çox qalar. Nədir?",
      content: "Tapmaca 2",
      answers: [
        { text: "Pul", correct: false },
        { text: "Addım", correct: true },
        { text: "Yemək", correct: false },
      ],
    },
    {
      id: "3",
      question: "Dili var, danışa bilmir. Ayağı var, yeriməz. Nədir?",
      content: "Tapmaca 3",
      answers: [
        { text: "Stol", correct: false },
        { text: "Ayaqqabı", correct: true },
        { text: "Robot", correct: false },
      ],
    },
    {
      id: "4",
      question: "Ağzı var, yemir. Gözü var, görmür. Nədir?",
      content: "Tapmaca 4",
      answers: [
        { text: "Kukla", correct: false },
        { text: "İynə", correct: true },
        { text: "Şəkil", correct: false },
      ],
    },
    {
      id: "5",
      question: "Bir otaq dolu adam, heç kim çıxa bilmir. Nədir?",
      content: "Tapmaca 5",
      answers: [
        { text: "Məktəb", correct: false },
        { text: "Balqabaq", correct: true },
        { text: "Avtobus", correct: false },
      ],
    },
  ],
};

export default function PuzzlesTest() {
  return <ExaminationDetailComponent test={puzzlesTest} />;
}
