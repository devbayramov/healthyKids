import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const managementTest: ExaminationTest = {
  title: "Emosiya İdarəetməsi",
  icon: "emoticon-outline",
  steps: [
    {
      id: "1",
      question: "Qəzəbli olduğunuzda nə edirsiniz?",
      content: "Qəzəb idarəetməsi",
      answers: [
        { text: "Dərin nəfəs alıb sakitləşirəm", correct: true },
        { text: "Hisslərimi ifadə edirəm", correct: true },
        { text: "Bağırıram və ya əsəbləşirəm", correct: false },
      ],
    },
    {
      id: "2",
      question: "Kədərli olduğunuzda necə başa çıxırsınız?",
      content: "Kədər idarəetməsi",
      answers: [
        { text: "Vaxt ayırıb hissləri yaşayıram", correct: true },
        { text: "Kimləsə danışıram", correct: true },
        { text: "Gizlədirəm", correct: false },
      ],
    },
    {
      id: "3",
      question: "Qorxduğunuzda necə reaksiya verirsiniz?",
      content: "Qorxu idarəetməsi",
      answers: [
        { text: "Rasional düşünürəm", correct: true },
        { text: "Dəstək axtarıram", correct: true },
        { text: "Qaçıram", correct: false },
      ],
    },
    {
      id: "4",
      question: "Həyəcanlı olduğunuzda özünüzü necə idarə edirsiniz?",
      content: "Həyəcan idarəetməsi",
      answers: [
        { text: "Enerjini müsbət yönəldirəm", correct: true },
        { text: "Paylaşıram", correct: true },
        { text: "Çətin olur", correct: false },
      ],
    },
    {
      id: "5",
      question: "Məyus olduğunuzda nə edirsiniz?",
      content: "Məyusluq idarəetməsi",
      answers: [
        { text: "Yeni perspektiv axtarıram", correct: true },
        { text: "Vaxt ayırıram", correct: true },
        { text: "Tamamilə ümidsizləşirəm", correct: false },
      ],
    },
  ],
};

export default function ManagementTest() {
  return <ExaminationDetailComponent test={managementTest} />;
}
