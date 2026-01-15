import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const creativityTest: ExaminationTest = {
  title: "Yaradıcılıq Testi",
  icon: "lightbulb-on",
  steps: [
    {
      id: "1",
      question: "Bir kağız parçası ilə nə qədər şey etmək olar?",
      content: "Yaradıcı düşüncə",
      answers: [
        { text: "Yalnız yazmaq", correct: false },
        { text: "Saysız imkanlar var", correct: true },
        { text: "Yalnız qatlamaq", correct: false },
      ],
    },
    {
      id: "2",
      question: "Yaradıcılıq üçün ən vacib nədir?",
      content: "Yaradıcılıq əsasları",
      answers: [
        { text: "Bahalı alətlər", correct: false },
        { text: "Təxəyyül və cəsarət", correct: true },
        { text: "Çox pul", correct: false },
      ],
    },
    {
      id: "3",
      question: "Yeni ideya necə yaranır?",
      content: "İdeya yaratma",
      answers: [
        { text: "Yalnız gözləməklə", correct: false },
        { text: "Araşdırma və sınaqla", correct: true },
        { text: "Təsadüfən", correct: false },
      ],
    },
    {
      id: "4",
      question: "Yaradıcılıqda səhv etmək pisdir?",
      content: "Yaradıcı proses",
      answers: [
        { text: "Bəli, həmişə", correct: false },
        { text: "Xeyr, öyrənmə fürsətidir", correct: true },
        { text: "Bəzən", correct: false },
      ],
    },
    {
      id: "5",
      question: "Yaradıcı olmaq üçün nə lazımdır?",
      content: "Yaradıcılıq inkişafı",
      answers: [
        { text: "Xüsusi istedad", correct: false },
        { text: "Məşq və açıq düşüncə", correct: true },
        { text: "Yalnız şans", correct: false },
      ],
    },
  ],
};

export default function CreativityTest() {
  return <ExaminationDetailComponent test={creativityTest} />;
}
