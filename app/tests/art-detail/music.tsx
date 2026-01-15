import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const musicTest: ExaminationTest = {
  title: "Musiqi Bilikləri",
  icon: "music",
  steps: [
    {
      id: "1",
      question: "Musiqi notları neçə dənədir?",
      content: "Musiqi əsasları",
      answers: [
        { text: "5", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
      ],
    },
    {
      id: "2",
      question: "\"Ay Işığı Sonatası\" kimin əsəridir?",
      content: "Klassik musiqi",
      answers: [
        { text: "Mozart", correct: false },
        { text: "Beethoven", correct: true },
        { text: "Bach", correct: false },
      ],
    },
    {
      id: "3",
      question: "Gitarada neçə sim var?",
      content: "Musiqi alətləri",
      answers: [
        { text: "4", correct: false },
        { text: "6", correct: true },
        { text: "8", correct: false },
      ],
    },
    {
      id: "4",
      question: "Pianoda neçə düymə var?",
      content: "Musiqi alətləri",
      answers: [
        { text: "76", correct: false },
        { text: "88", correct: true },
        { text: "100", correct: false },
      ],
    },
    {
      id: "5",
      question: "Hansı not \"Do\" notundan sonra gəlir?",
      content: "Not ardıcıllığı",
      answers: [
        { text: "Mi", correct: false },
        { text: "Re", correct: true },
        { text: "Fa", correct: false },
      ],
    },
  ],
};

export default function MusicTest() {
  return <ExaminationDetailComponent test={musicTest} />;
}
