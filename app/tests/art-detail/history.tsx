import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const historyTest: ExaminationTest = {
  title: "Sənət Tarixi",
  icon: "image-frame",
  steps: [
    {
      id: "1",
      question: "Mona Lisa rəsminin müəllifi kimdir?",
      content: "Məşhur əsərlər",
      answers: [
        { text: "Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Van Gogh", correct: false },
      ],
    },
    {
      id: "2",
      question: "\"Ulduzlu Gecə\" rəsmi hansı rəssama aiddir?",
      content: "Məşhur əsərlər",
      answers: [
        { text: "Claude Monet", correct: false },
        { text: "Vincent van Gogh", correct: true },
        { text: "Salvador Dali", correct: false },
      ],
    },
    {
      id: "3",
      question: "İmpressionism hərəkatı hansı ölkədə başladı?",
      content: "Sənət hərəkatları",
      answers: [
        { text: "İtaliya", correct: false },
        { text: "Fransa", correct: true },
        { text: "İspaniya", correct: false },
      ],
    },
    {
      id: "4",
      question: "\"Düşüncə\" heykəlinin müəllifi kimdir?",
      content: "Heykəltəraşlıq",
      answers: [
        { text: "Michelangelo", correct: false },
        { text: "Auguste Rodin", correct: true },
        { text: "Donatello", correct: false },
      ],
    },
    {
      id: "5",
      question: "Picasso hansı sənət üslubunun banilərindəndir?",
      content: "Sənət üslubları",
      answers: [
        { text: "İmpressionism", correct: false },
        { text: "Kubizm", correct: true },
        { text: "Surrealizm", correct: false },
      ],
    },
  ],
};

export default function HistoryTest() {
  return <ExaminationDetailComponent test={historyTest} />;
}
