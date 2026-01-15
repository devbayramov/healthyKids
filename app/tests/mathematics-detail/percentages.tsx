import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const percentagesTest: ExaminationTest = {
  title: "Faizlər",
  icon: "percent",
  steps: [
    {
      id: "1",
      question: "200-ün 25%-i neçədir?",
      content: "25% of 200",
      answers: [
        { text: "40", correct: false },
        { text: "50", correct: true },
        { text: "60", correct: false },
      ],
    },
    {
      id: "2",
      question: "80-in 10%-i neçədir?",
      content: "10% of 80",
      answers: [
        { text: "8", correct: true },
        { text: "10", correct: false },
        { text: "12", correct: false },
      ],
    },
    {
      id: "3",
      question: "500-ün 20%-i neçədir?",
      content: "20% of 500",
      answers: [
        { text: "90", correct: false },
        { text: "100", correct: true },
        { text: "110", correct: false },
      ],
    },
    {
      id: "4",
      question: "150-nin 50%-i neçədir?",
      content: "50% of 150",
      answers: [
        { text: "65", correct: false },
        { text: "75", correct: true },
        { text: "85", correct: false },
      ],
    },
    {
      id: "5",
      question: "1000-in 15%-i neçədir?",
      content: "15% of 1000",
      answers: [
        { text: "140", correct: false },
        { text: "150", correct: true },
        { text: "160", correct: false },
      ],
    },
  ],
};

export default function PercentagesTest() {
  return <ExaminationDetailComponent test={percentagesTest} />;
}
