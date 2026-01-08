import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const footTest: ExaminationTest = {
  title: "Ayaq düzlüyü",
  icon: "foot-print",
  steps: [
    {
      id: "1",
      question: "Ayaq düz görünür?",
      content: "Ayağı yoxlayın",
      answers: [
        { text: "Bəli, düzdür", correct: true },
        { text: "Xeyr, eğimli", correct: false },
      ],
    },
    {
      id: "2",
      question: "Ayağın qövs hissəsi normal görünür?",
      content: "Qövs strukturunu yoxlayın",
      answers: [
        { text: "Bəli", correct: true },
        { text: "Xeyr", correct: false },
      ],
    },
    {
      id: "3",
      question: "Ayaq tabanında ağrı hiss etdiniz mi?",
      content: "Ağrı testi",
      answers: [
        { text: "Bəli", correct: false },
        { text: "Xeyr, ağrı yoxdur", correct: true },
      ],
    },
  ],
};

export default function FootExamination() {
  return <ExaminationDetailComponent test={footTest} />;
}
