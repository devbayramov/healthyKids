import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const socialTest: ExaminationTest = {
  title: "Sosial Davranış",
  icon: "account-group",
  steps: [
    {
      id: "1",
      question: "Qrup işləməyi yoxsa tək işləməyi üstün tutursunuz?",
      content: "İş tərzi",
      answers: [
        { text: "Qrup işləməyi", correct: true },
        { text: "Tək işləməyi", correct: true },
        { text: "Hər ikisi də yaxşıdır", correct: true },
      ],
    },
    {
      id: "2",
      question: "Yeni məkanlarda necə hiss edirsiniz?",
      content: "Adaptasiya",
      answers: [
        { text: "Rahat və açıq", correct: true },
        { text: "Bir az narahat", correct: true },
        { text: "Vaxt lazımdır", correct: true },
      ],
    },
    {
      id: "3",
      question: "Konfliktləri necə həll edirsiniz?",
      content: "Konflikt həlli",
      answers: [
        { text: "Birbaşa danışıram", correct: true },
        { text: "Qaçıram", correct: true },
        { text: "Kompromis axtarıram", correct: true },
      ],
    },
    {
      id: "4",
      question: "Liderlık etməyi sevirsiniz?",
      content: "Liderlik",
      answers: [
        { text: "Bəli, həmişə", correct: true },
        { text: "Lazım olanda", correct: true },
        { text: "Xeyr, üstün tutmuram", correct: true },
      ],
    },
    {
      id: "5",
      question: "Sosial tədbirlərdə necə davranırsınız?",
      content: "Sosial davranış",
      answers: [
        { text: "Aktiv iştirak edirəm", correct: true },
        { text: "Kənarda qalıram", correct: true },
        { text: "Yaxın insanlarla oluram", correct: true },
      ],
    },
  ],
};

export default function SocialTest() {
  return <ExaminationDetailComponent test={socialTest} />;
}
