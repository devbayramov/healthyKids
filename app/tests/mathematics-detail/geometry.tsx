import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const geometryTest: ExaminationTest = {
  title: "Həndəsə",
  icon: "shape",
  steps: [
    {
      id: "1",
      question: "Kvadratın tərəfi 5 sm-dirsə, sahəsi neçə sm²-dir?",
      content: "Kvadrat sahəsi",
      answers: [
        { text: "20", correct: false },
        { text: "25", correct: true },
        { text: "30", correct: false },
      ],
    },
    {
      id: "2",
      question: "Üçbucağın daxili bucaqlarının cəmi neçə dərəcədir?",
      content: "Üçbucaq bucaqları",
      answers: [
        { text: "90°", correct: false },
        { text: "180°", correct: true },
        { text: "360°", correct: false },
      ],
    },
    {
      id: "3",
      question: "Dairənin radiusu 7 sm-dirsə, diametri neçə sm-dir?",
      content: "Dairə diametri",
      answers: [
        { text: "12", correct: false },
        { text: "14", correct: true },
        { text: "21", correct: false },
      ],
    },
    {
      id: "4",
      question: "Düzbucaqlının uzunluğu 8, eni 5 sm-dirsə, perimetri neçədir?",
      content: "Düzbucaqlı perimetri",
      answers: [
        { text: "24", correct: false },
        { text: "26", correct: true },
        { text: "40", correct: false },
      ],
    },
    {
      id: "5",
      question: "Altıbucaqlının neçə tərəfi var?",
      content: "Altıbucaqlı",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: true },
        { text: "8", correct: false },
      ],
    },
  ],
};

export default function GeometryTest() {
  return <ExaminationDetailComponent test={geometryTest} />;
}
