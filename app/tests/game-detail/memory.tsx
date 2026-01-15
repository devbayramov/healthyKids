import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const memoryTest: ExaminationTest = {
  title: "Yaddaş Oyunu",
  icon: "brain",
  steps: [
    {
      id: "1",
      question: "Bu ardıcıllığı yadda saxlayın: 3, 7, 2. Orta rəqəm hansıdır?",
      content: "3, 7, 2",
      answers: [
        { text: "3", correct: false },
        { text: "7", correct: true },
        { text: "2", correct: false },
      ],
    },
    {
      id: "2",
      question: "Rənglər: Qırmızı, Yaşıl, Mavi. İkinci rəng hansıdır?",
      content: "Rəng ardıcıllığı",
      answers: [
        { text: "Qırmızı", correct: false },
        { text: "Yaşıl", correct: true },
        { text: "Mavi", correct: false },
      ],
    },
    {
      id: "3",
      question: "Sözlər: Alma, Kitab, Qələm, Stol. Neçə söz var idi?",
      content: "Söz sayı",
      answers: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
      ],
    },
    {
      id: "4",
      question: "Ədədlər: 15, 22, 8, 31. Ən böyük ədəd hansıdır?",
      content: "Ən böyük ədəd",
      answers: [
        { text: "22", correct: false },
        { text: "31", correct: true },
        { text: "15", correct: false },
      ],
    },
    {
      id: "5",
      question: "Hərflər: A, K, M, Z. Sonuncu hərf hansıdır?",
      content: "Sonuncu hərf",
      answers: [
        { text: "M", correct: false },
        { text: "Z", correct: true },
        { text: "K", correct: false },
      ],
    },
  ],
};

export default function MemoryTest() {
  return <ExaminationDetailComponent test={memoryTest} />;
}
