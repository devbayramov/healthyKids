import ExaminationDetailComponent, {
    ExaminationTest,
} from "@/components/ExaminationDetailComponent";

const stressTest: ExaminationTest = {
  title: "Stress İdarəetməsi",
  icon: "head-flash",
  steps: [
    {
      id: "1",
      question: "Stresli vəziyyətlərdə necə davranırsınız?",
      content: "Stress reaksiyası",
      answers: [
        { text: "Sakit qalıb həll yolu tapıram", correct: true },
        { text: "Narahat oluram amma başa çıxıram", correct: true },
        { text: "Panikaya düşürəm", correct: false },
      ],
    },
    {
      id: "2",
      question: "Gərgin müddətlərdə yuxunuz necə olur?",
      content: "Yuxu keyfiyyəti",
      answers: [
        { text: "Normal yatıram", correct: true },
        { text: "Bir az pozulur", correct: true },
        { text: "Heç yata bilmirəm", correct: false },
      ],
    },
    {
      id: "3",
      question: "Stressi azaltmaq üçün nə edirsiniz?",
      content: "Stress azaltma",
      answers: [
        { text: "İdman və ya meditasiya", correct: true },
        { text: "Hobbi ilə məşğul oluram", correct: true },
        { text: "Heç nə etmirəm", correct: false },
      ],
    },
    {
      id: "4",
      question: "İş yükü artanda necə hiss edirsiniz?",
      content: "İş stressi",
      answers: [
        { text: "Prioritet qoyuram və idarə edirəm", correct: true },
        { text: "Bir az narahat oluram", correct: true },
        { text: "Tamamilə bunalıram", correct: false },
      ],
    },
    {
      id: "5",
      question: "Stress fiziki sağlamlığınıza təsir edir?",
      content: "Fiziki təsir",
      answers: [
        { text: "Xeyr, idarə edirəm", correct: true },
        { text: "Bəzən", correct: true },
        { text: "Bəli, çox təsir edir", correct: false },
      ],
    },
  ],
};

export default function StressTest() {
  return <ExaminationDetailComponent test={stressTest} />;
}
