import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export interface TestStep {
  id: string;
  question: string;
  image?: string;
  content?: string;
  answers: {
    text: string;
    correct: boolean;
  }[];
}

export interface ExaminationTest {
  title: string;
  icon: string;
  steps: TestStep[];
}

interface ExaminationDetailComponentProps {
  test: ExaminationTest;
}

export default function ExaminationDetailComponent({
  test,
}: ExaminationDetailComponentProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: boolean }>({});
  const [showResult, setShowResult] = useState(false);

  const step = test.steps[currentStep];
  const correctAnswersCount = Object.values(answers).filter(
    (answer) => answer === true
  ).length;
  const totalSteps = test.steps.length;
  const percentage = Math.round((correctAnswersCount / totalSteps) * 100);

  const handleAnswer = (isCorrect: boolean, stepId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [stepId]: isCorrect,
    }));

    // Move to next step or show result
    if (currentStep < totalSteps - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 500);
    }
  };

  const resetTest = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialCommunityIcons name="arrow-left" size={28} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{test.title}</Text>
          <View style={{ width: 28 }} />
        </View>

        {/* Result Box */}
        <View style={styles.resultContainer}>
          <MaterialCommunityIcons
            name="trophy"
            size={80}
            color="#A3C9A8"
          />
          <Text style={styles.resultTitle}>Test Tamamlandı</Text>
          <View style={styles.scoreBox}>
            <Text style={styles.scorePercentage}>{percentage}%</Text>
            <Text style={styles.scoreText}>
              {correctAnswersCount} / {totalSteps} doğru cavab
            </Text>
          </View>

          {percentage >= 70 ? (
            <Text style={styles.successMessage}>
              Uğurlu! Siz testdən keçdiniz.
            </Text>
          ) : (
            <Text style={styles.failMessage}>
              Daha çox çalış!
            </Text>
          )}

          <View style={styles.resultButtonContainer}>
            <TouchableOpacity
              style={styles.retakeButton}
              onPress={resetTest}
            >
              <MaterialCommunityIcons
                name="refresh"
                size={24}
                color="#FFF"
              />
              <Text style={styles.buttonText}>Yenidən cəhd et</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.retakeButton, styles.backButton]}
              onPress={() => router.back()}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={24}
                color="#FFF"
              />
              <Text style={styles.buttonText}>Geri qayıt</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{test.title}</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${((currentStep + 1) / totalSteps) * 100}%`,
              },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          Sual {currentStep + 1} / {totalSteps}
        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Test Content Box */}
        <View style={styles.contentBox}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={test.icon as any}
              size={50}
              color="#A3C9A8"
            />
          </View>

          <View style={styles.divider} />

          {/* Image or Content Display */}
          {step.image && (
            <Image
              source={{ uri: step.image }}
              style={styles.stepImage}
            />
          )}

          {step.content && (
            <View style={styles.contentDisplayBox}>
              <Text style={styles.contentText}>{step.content}</Text>
            </View>
          )}

          {/* Question */}
          <Text style={styles.question}>{step.question}</Text>

          {/* Answer Options */}
          <View style={styles.answersContainer}>
            {step.answers.map((answer, index) => (
              <TouchableOpacity
                key={index}
                style={styles.answerButton}
                onPress={() =>
                  handleAnswer(answer.correct, step.id)
                }
              >
                <View style={styles.answerContent}>
                  <MaterialCommunityIcons
                    name="circle-medium"
                    size={20}
                    color="#A3C9A8"
                  />
                  <Text style={styles.answerText}>{answer.text}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D1DEBE",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  progressContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#A3C9A8",
  },
  progressText: {
    fontSize: 12,
    color: "#333",
    marginTop: 8,
    textAlign: "center",
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  contentBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 12,
  },
  divider: {
    height: 2,
    backgroundColor: "#A3C9A8",
    width: "80%",
    alignSelf: "center",
    marginVertical: 12,
  },
  stepImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 15,
  },
  contentDisplayBox: {
    backgroundColor: "rgba(163, 201, 168, 0.1)",
    borderRadius: 10,
    padding: 15,
    marginVertical: 15,
  },
  contentText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginVertical: 20,
    textAlign: "center",
  },
  answersContainer: {
    gap: 10,
  },
  answerButton: {
    backgroundColor: "rgba(163, 201, 168, 0.1)",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  answerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  answerText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    flex: 1,
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
  scoreBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    padding: 30,
    marginVertical: 30,
    alignItems: "center",
    width: "100%",
  },
  scorePercentage: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#A3C9A8",
  },
  scoreText: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  successMessage: {
    fontSize: 16,
    color: "#A3C9A8",
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  failMessage: {
    fontSize: 16,
    color: "#E8956E",
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  resultButtonContainer: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  retakeButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#A3C9A8",
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  backButton: {
    backgroundColor: "#6BA582",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 14,
  },
});
