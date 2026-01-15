import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const empathyTest: ExaminationTest = {
  title: "Empatiya Testi",
  icon: "heart-multiple",
  steps: [
    {
      id: "1",
      question: "Kimsə üzgün olanda nə edirsiniz?",
      content: "Empatiya",
      answers: [
        { text: "Onu dinləyirəm və dəstək oluram", correct: true },
        { text: "Məsləhət verirəm", correct: true },
        { text: "Tək buraxıram", correct: false },
      ],
    },
    {
      id: "2",
      question: "Başqalarının hisslərini anlaya bilirsiniz?",
      content: "Emosional anlayış",
      answers: [
        { text: "Bəli, asanlıqla", correct: true },
        { text: "Bəzən çətinlik çəkirəm", correct: true },
        { text: "Xeyr, çətindir", correct: false },
      ],
    },
    {
      id: "3",
      question: "Yaxın birinin sevinci sizi də sevindirir?",
      content: "Emosional paylaşım",
      answers: [
        { text: "Bəli, həmişə", correct: true },
        { text: "Əksər hallarda", correct: true },
        { text: "Nadir hallarda", correct: false },
      ],
    },
    {
      id: "4",
      question: "Birinin ağrısını hiss edə bilirsiniz?",
      content: "Emosional həssaslıq",
      answers: [
        { text: "Bəli, dərindən hiss edirəm", correct: true },
        { text: "Qismən", correct: true },
        { text: "Xeyr", correct: false },
      ],
    },
    {
      id: "5",
      question: "Kömək istəməyənlərə belə kömək etmək istəyirsiniz?",
      content: "Proaktiv empatiya",
      answers: [
        { text: "Bəli, həmişə", correct: true },
        { text: "Lazım olduqda", correct: true },
        { text: "Yalnız istəsələr", correct: true },
      ],
    },
  ],
};

export default function EmpathyTest() {
  return <ExaminationDetailComponent test={empathyTest} />;
}
