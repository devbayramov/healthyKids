import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const visualTest: ExaminationTest = {
  title: "Vizual Düşüncə",
  icon: "eye",
  steps: [
    {
      id: "1",
      question: "Hansı fərqlidir? Alma, Armud, Portağal, Kartof",
      content: "Fərqli olanı tapın",
      answers: [
        { text: "Alma", correct: false },
        { text: "Kartof", correct: true },
        { text: "Portağal", correct: false },
      ],
    },
    {
      id: "2",
      question: "Hansı fərqlidir? Dairə, Kvadrat, Üçbucaq, Xətt",
      content: "Fərqli olanı tapın",
      answers: [
        { text: "Dairə", correct: false },
        { text: "Xətt", correct: true },
        { text: "Kvadrat", correct: false },
      ],
    },
    {
      id: "3",
      question: "Bir kub neçə üzdən ibarətdir?",
      content: "Həndəsi cisim",
      answers: [
        { text: "4", correct: false },
        { text: "6", correct: true },
        { text: "8", correct: false },
      ],
    },
    {
      id: "4",
      question: "Güzgüdə sağ əl necə görünür?",
      content: "Güzgü əksi",
      answers: [
        { text: "Sağ əl kimi", correct: false },
        { text: "Sol əl kimi", correct: true },
        { text: "Eyni", correct: false },
      ],
    },
    {
      id: "5",
      question: "Hansı rəng qırmızı və mavi qarışığıdır?",
      content: "Rəng qarışığı",
      answers: [
        { text: "Yaşıl", correct: false },
        { text: "Bənövşəyi", correct: true },
        { text: "Narıncı", correct: false },
      ],
    },
  ],
};

export default function VisualTest() {
  return <ExaminationDetailComponent test={visualTest} />;
}
