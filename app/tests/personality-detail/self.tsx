import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const selfTest: ExaminationTest = {
  title: "Özünü Tanıma",
  icon: "account-heart",
  steps: [
    {
      id: "1",
      question: "Güclü tərəflərinizi bilirsiniz?",
      content: "Özünü tanıma",
      answers: [
        { text: "Bəli, yaxşı bilirəm", correct: true },
        { text: "Qismən", correct: true },
        { text: "Hələ öyrənirəm", correct: true },
      ],
    },
    {
      id: "2",
      question: "Zəif tərəflərinizi qəbul edirsiniz?",
      content: "Özünü qəbul",
      answers: [
        { text: "Bəli, işləyirəm üzərində", correct: true },
        { text: "Qəbul edirəm", correct: true },
        { text: "Çətin gəlir", correct: true },
      ],
    },
    {
      id: "3",
      question: "Hədəfləriniz nə qədər aydındır?",
      content: "Hədəf müəyyənliyi",
      answers: [
        { text: "Çox aydındır", correct: true },
        { text: "Qismən aydındır", correct: true },
        { text: "Hələ formalaşır", correct: true },
      ],
    },
    {
      id: "4",
      question: "Dəyərlərinizi bilirsiniz?",
      content: "Dəyərlər",
      answers: [
        { text: "Bəli, prioritetlərim var", correct: true },
        { text: "Əksər hallarda", correct: true },
        { text: "Hələ araşdırıram", correct: true },
      ],
    },
    {
      id: "5",
      question: "Özünüzlə nə qədər rahatdır?",
      content: "Özünə güvən",
      answers: [
        { text: "Çox rahatam", correct: true },
        { text: "Əksər hallarda", correct: true },
        { text: "İnkişaf edirəm", correct: true },
      ],
    },
  ],
};

export default function SelfTest() {
  return <ExaminationDetailComponent test={selfTest} />;
}
