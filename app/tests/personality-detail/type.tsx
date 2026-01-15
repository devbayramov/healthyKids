import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const typeTest: ExaminationTest = {
  title: "Şəxsiyyət Tipi",
  icon: "account-question",
  steps: [
    {
      id: "1",
      question: "Yeni insanlarla tanış olmağı sevirsiniz?",
      content: "Ekstraversiya",
      answers: [
        { text: "Bəli, çox sevirəm", correct: true },
        { text: "Bəzən", correct: true },
        { text: "Xeyr, çəkinirəm", correct: true },
      ],
    },
    {
      id: "2",
      question: "Qərarları necə qəbul edirsiniz?",
      content: "Düşüncə tərzi",
      answers: [
        { text: "Məntiqlə", correct: true },
        { text: "Hisslərlə", correct: true },
        { text: "Həm məntiqlə, həm hisslərlə", correct: true },
      ],
    },
    {
      id: "3",
      question: "Gündəlik işlərinizi necə planlaşdırırsınız?",
      content: "Planlama",
      answers: [
        { text: "Əvvəlcədən dəqiq planlaşdırıram", correct: true },
        { text: "Spontan hərəkət edirəm", correct: true },
        { text: "Vəziyyətə görə dəyişir", correct: true },
      ],
    },
    {
      id: "4",
      question: "Detallara yoxsa böyük mənzərəyə diqqət edirsiniz?",
      content: "Fokus",
      answers: [
        { text: "Detallara", correct: true },
        { text: "Böyük mənzərəyə", correct: true },
        { text: "Hər ikisinə", correct: true },
      ],
    },
    {
      id: "5",
      question: "Stress altında necə davranırsınız?",
      content: "Stress reaksiyası",
      answers: [
        { text: "Sakit qalıram", correct: true },
        { text: "Narahat oluram", correct: true },
        { text: "Həll yolu axtarıram", correct: true },
      ],
    },
  ],
};

export default function TypeTest() {
  return <ExaminationDetailComponent test={typeTest} />;
}
