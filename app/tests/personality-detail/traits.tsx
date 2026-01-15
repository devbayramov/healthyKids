import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const traitsTest: ExaminationTest = {
  title: "Xarakter Xüsusiyyətləri",
  icon: "account-star",
  steps: [
    {
      id: "1",
      question: "Özünüzü necə xarakterizə edərdiniz?",
      content: "Özünü qiymətləndirmə",
      answers: [
        { text: "Açıq və ünsiyyətcil", correct: true },
        { text: "Sakit və düşüncəli", correct: true },
        { text: "Enerjili və aktiv", correct: true },
      ],
    },
    {
      id: "2",
      question: "Yeni təcrübələrə necə yanaşırsınız?",
      content: "Açıqlıq",
      answers: [
        { text: "Həvəslə qarşılayıram", correct: true },
        { text: "Ehtiyatla yanaşıram", correct: true },
        { text: "Vəziyyətə görə dəyişir", correct: true },
      ],
    },
    {
      id: "3",
      question: "Başqalarına kömək etməyi sevirsiniz?",
      content: "Xeyirxahlıq",
      answers: [
        { text: "Bəli, həmişə", correct: true },
        { text: "İmkan olduqda", correct: true },
        { text: "Yalnız yaxınlarıma", correct: true },
      ],
    },
    {
      id: "4",
      question: "İşlərinizi nə qədər nizamlı görürsünüz?",
      content: "Nizamlılıq",
      answers: [
        { text: "Çox nizamlıyam", correct: true },
        { text: "Orta səviyyədə", correct: true },
        { text: "Xaotik işləyirəm", correct: true },
      ],
    },
    {
      id: "5",
      question: "Emosional stabilliyinizi necə qiymətləndirirsiniz?",
      content: "Emosional stabillik",
      answers: [
        { text: "Çox stabiləm", correct: true },
        { text: "Bəzən dalğalanır", correct: true },
        { text: "Tez-tez dəyişir", correct: true },
      ],
    },
  ],
};

export default function TraitsTest() {
  return <ExaminationDetailComponent test={traitsTest} />;
}
