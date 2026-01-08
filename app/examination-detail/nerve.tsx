import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const nerveTest: ExaminationTest = {
  title: "Sinir yoxlanışı",
  icon: "brain",
  steps: [
    {
      id: "1",
      question: "Düz ayaqda dayanan halda tarazlığı saxlaya biləsiniz?",
      content: "Tarazlıq testi",
      answers: [
        { text: "Bəli, rahatca", correct: true },
        { text: "Xeyr, çətin", correct: false },
      ],
    },
    {
      id: "2",
      question: "Gerginlik hiss etdiniz mi?",
      content: "Dərin refleks testi",
      answers: [
        { text: "Bəli", correct: true },
        { text: "Xeyr", correct: false },
      ],
    },
    {
      id: "3",
      question: "Həssaslıq normal görünür?",
      content: "Duyarlılıq testi",
      answers: [
        { text: "Bəli, normal", correct: true },
        { text: "Xeyr, azaldılmış", correct: false },
      ],
    },
  ],
};

export default function NerveExamination() {
  return <ExaminationDetailComponent test={nerveTest} />;
}
