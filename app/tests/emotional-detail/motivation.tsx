import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const motivationTest: ExaminationTest = {
  title: "Motivasiya Testi",
  icon: "fire",
  steps: [
    {
      id: "1",
      question: "Hədəflərinizə çatmaq üçün nə qədər əzmkarsınız?",
      content: "Əzmkarlıq",
      answers: [
        { text: "Çox əzmkaram", correct: true },
        { text: "Orta səviyyədə", correct: true },
        { text: "Tez-tez təslim oluram", correct: false },
      ],
    },
    {
      id: "2",
      question: "Uğursuzluqdan sonra necə reaksiya verirsiniz?",
      content: "Davamlılıq",
      answers: [
        { text: "Yenidən cəhd edirəm", correct: true },
        { text: "Analiz edib öyrənirəm", correct: true },
        { text: "Tamamilə əlimi çəkirəm", correct: false },
      ],
    },
    {
      id: "3",
      question: "Sizi nə motivasiya edir?",
      content: "Motivasiya mənbəyi",
      answers: [
        { text: "Daxili məmnuniyyət", correct: true },
        { text: "Xarici mükafatlar", correct: true },
        { text: "Heç nə", correct: false },
      ],
    },
    {
      id: "4",
      question: "Çətin tapşırıqlara necə yanaşırsınız?",
      content: "Çətinliklərə yanaşma",
      answers: [
        { text: "Həvəslə qarşılayıram", correct: true },
        { text: "Ehtiyatla başlayıram", correct: true },
        { text: "Qaçıram", correct: false },
      ],
    },
    {
      id: "5",
      question: "Özünüzü inkişaf etdirmək üçün vaxt ayırırsınız?",
      content: "Şəxsi inkişaf",
      answers: [
        { text: "Bəli, mütəmadi", correct: true },
        { text: "İmkan olduqda", correct: true },
        { text: "Xeyr", correct: false },
      ],
    },
  ],
};

export default function MotivationTest() {
  return <ExaminationDetailComponent test={motivationTest} />;
}
