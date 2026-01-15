import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const logicTest: ExaminationTest = {
  title: "Məntiq Sualları",
  icon: "head-cog",
  steps: [
    {
      id: "1",
      question: "Bütün pişiklər heyvandır. Bəzi heyvanlar qara rəngdədir. Nəticə?",
      content: "Məntiq tapşırığı",
      answers: [
        { text: "Bütün pişiklər qaradır", correct: false },
        { text: "Bəzi pişiklər qara ola bilər", correct: true },
        { text: "Heç bir pişik qara deyil", correct: false },
      ],
    },
    {
      id: "2",
      question: "A, B-dən böyükdür. C, B-dən kiçikdir. Hansı doğrudur?",
      content: "A > B, C < B",
      answers: [
        { text: "C, A-dan böyükdür", correct: false },
        { text: "A, C-dən böyükdür", correct: true },
        { text: "B, A-dan böyükdür", correct: false },
      ],
    },
    {
      id: "3",
      question: "Əgər yağış yağırsa, küçə islanır. Küçə islaqdır. Nəticə?",
      content: "Şərti məntiq",
      answers: [
        { text: "Mütləq yağış yağıb", correct: false },
        { text: "Yağış yağmış ola bilər", correct: true },
        { text: "Yağış yağmayıb", correct: false },
      ],
    },
    {
      id: "4",
      question: "5 alma var. 2 alma yedim. Sonra 3 alma aldım. Neçə alma var?",
      content: "Riyazi məntiq",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: true },
        { text: "8", correct: false },
      ],
    },
    {
      id: "5",
      question: "Həftənin 3-cü günündən 2 gün sonra hansı gündür?",
      content: "Zaman məntiqi",
      answers: [
        { text: "Çərşənbə", correct: false },
        { text: "Cümə", correct: true },
        { text: "Şənbə", correct: false },
      ],
    },
  ],
};

export default function LogicTest() {
  return <ExaminationDetailComponent test={logicTest} />;
}
