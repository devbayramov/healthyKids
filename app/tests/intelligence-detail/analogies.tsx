import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const analogiesTest: ExaminationTest = {
  title: "Analogiyalar",
  icon: "link-variant",
  steps: [
    {
      id: "1",
      question: "Kitab : Oxumaq = Mahnı : ?",
      content: "Analogiya tapın",
      answers: [
        { text: "Yazmaq", correct: false },
        { text: "Dinləmək", correct: true },
        { text: "Danışmaq", correct: false },
      ],
    },
    {
      id: "2",
      question: "Həkim : Xəstəxana = Müəllim : ?",
      content: "Analogiya tapın",
      answers: [
        { text: "Ev", correct: false },
        { text: "Məktəb", correct: true },
        { text: "Mağaza", correct: false },
      ],
    },
    {
      id: "3",
      question: "Günəş : Gündüz = Ay : ?",
      content: "Analogiya tapın",
      answers: [
        { text: "Səhər", correct: false },
        { text: "Gecə", correct: true },
        { text: "Axşam", correct: false },
      ],
    },
    {
      id: "4",
      question: "Quş : Qanad = Balıq : ?",
      content: "Analogiya tapın",
      answers: [
        { text: "Su", correct: false },
        { text: "Üzgəc", correct: true },
        { text: "Ayaq", correct: false },
      ],
    },
    {
      id: "5",
      question: "Qələm : Yazmaq = Bıçaq : ?",
      content: "Analogiya tapın",
      answers: [
        { text: "Yemək", correct: false },
        { text: "Kəsmək", correct: true },
        { text: "Oynamaq", correct: false },
      ],
    },
  ],
};

export default function AnalogiesTest() {
  return <ExaminationDetailComponent test={analogiesTest} />;
}
