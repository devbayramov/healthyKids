import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

interface IQQuestion {
  id: string;
  type: 'pattern' | 'math' | 'logic' | 'visual';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

const iqQuestions: IQQuestion[] = [
  {
    id: '1',
    type: 'pattern',
    question: 'What comes next? 🟦 🟨 🟦 🟨 🟦 ?',
    options: ['🟦', '🟨', '🟩', '🟥'],
    correctAnswer: 1,
    explanation: 'The pattern alternates between blue and yellow!',
  },
  {
    id: '2',
    type: 'math',
    question: 'If you have 5 apples and eat 2, how many are left?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: '5 - 2 = 3 apples!',
  },
  {
    id: '3',
    type: 'logic',
    question: 'All cats are animals. Fluffy is a cat. So Fluffy is...?',
    options: ['A dog', 'An animal', 'A bird', 'A fish'],
    correctAnswer: 1,
    explanation: 'If all cats are animals, and Fluffy is a cat, then Fluffy is an animal!',
  },
  {
    id: '4',
    type: 'visual',
    question: 'Which shape is different?',
    options: ['🔴', '🔵', '🟡', '🔴'],
    correctAnswer: 2,
    explanation: 'The yellow circle is different from the red and blue ones!',
  },
  {
    id: '5',
    type: 'pattern',
    question: 'Complete the pattern: 2, 4, 6, ?',
    options: ['7', '8', '9', '10'],
    correctAnswer: 1,
    explanation: 'The pattern increases by 2 each time: 2, 4, 6, 8!',
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const currentQuestion = iqQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === iqQuestions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setTestStarted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / iqQuestions.length) * 100;
    if (percentage >= 80) return { emoji: '🌟', text: 'Excellent! You are very smart!', color: '#4CAF50' };
    if (percentage >= 60) return { emoji: '⭐', text: 'Great job! Keep learning!', color: '#FF9800' };
    if (percentage >= 40) return { emoji: '👍', text: 'Good try! Practice makes perfect!', color: '#2196F3' };
    return { emoji: '💪', text: 'Keep practicing! You can do it!', color: '#9C27B0' };
  };

  if (!testStarted) {
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
        <View style={[styles.header, { backgroundColor: isDark ? '#1a1a1a' : '#f8f9fa' }]}>
          <View style={styles.welcomeIcon}>
            <IconSymbol name="brain.head.profile" size={64} color="#0a7ea4" />
          </View>
          <ThemedText type="title" style={[styles.title, { fontFamily: Fonts.rounded }]}>
            Kids IQ Test 🧠
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Test your brain power with fun questions!
          </ThemedText>
        </View>

        <View style={styles.startSection}>
          <View style={[styles.infoCard, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}>
            <IconSymbol name="star.fill" size={32} color="#FFD700" />
            <ThemedText type="defaultSemiBold" style={styles.infoTitle}>
              {iqQuestions.length} Fun Questions
            </ThemedText>
            <ThemedText style={styles.infoText}>
              Test your pattern recognition, math skills, logic, and visual thinking!
            </ThemedText>
          </View>

          <TouchableOpacity
            style={[styles.startButton, { backgroundColor: '#0a7ea4' }]}
            onPress={() => setTestStarted(true)}
            activeOpacity={0.8}>
            <IconSymbol name="play.fill" size={24} color="#ffffff" />
            <Text style={styles.startButtonText}>Start Test</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  if (showResult) {
    const scoreMessage = getScoreMessage();
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
        <View style={styles.resultContainer}>
          <View style={[styles.resultIcon, { backgroundColor: scoreMessage.color + '20' }]}>
            <Text style={styles.resultEmoji}>{scoreMessage.emoji}</Text>
          </View>
          <ThemedText type="title" style={styles.resultTitle}>
            Test Complete!
          </ThemedText>
          <View style={[styles.scoreBadge, { backgroundColor: scoreMessage.color }]}>
            <Text style={styles.scoreText}>
              {score} / {iqQuestions.length}
            </Text>
          </View>
          <ThemedText type="defaultSemiBold" style={[styles.scoreMessage, { color: scoreMessage.color }]}>
            {scoreMessage.text}
          </ThemedText>
          <TouchableOpacity
            style={[styles.restartButton, { backgroundColor: '#0a7ea4' }]}
            onPress={handleRestart}
            activeOpacity={0.8}>
            <IconSymbol name="arrow.clockwise" size={20} color="#ffffff" />
            <Text style={styles.restartButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${((currentQuestionIndex + 1) / iqQuestions.length) * 100}%` }]} />
        <ThemedText style={styles.progressText}>
          Question {currentQuestionIndex + 1} of {iqQuestions.length}
        </ThemedText>
      </View>

      {/* Question Card */}
      <View style={styles.questionContainer}>
        <View style={[styles.questionCard, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}>
          <View style={[styles.questionTypeBadge, { backgroundColor: '#0a7ea4' }]}>
            <Text style={styles.questionTypeText}>
              {currentQuestion.type === 'pattern' && '🔍 Pattern'}
              {currentQuestion.type === 'math' && '➕ Math'}
              {currentQuestion.type === 'logic' && '🧩 Logic'}
              {currentQuestion.type === 'visual' && '👁️ Visual'}
            </Text>
          </View>
          <ThemedText type="defaultSemiBold" style={styles.questionText}>
            {currentQuestion.question}
          </ThemedText>

          {/* Answer Options */}
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showCorrect = selectedAnswer !== null && isCorrect;
              const showIncorrect = selectedAnswer === index && !isCorrect;

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    {
                      backgroundColor: showCorrect
                        ? '#4CAF50'
                        : showIncorrect
                          ? '#F44336'
                          : isSelected
                            ? '#0a7ea4'
                            : isDark
                              ? '#2a2a2a'
                              : '#f5f5f5',
                    },
                  ]}
                  onPress={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  activeOpacity={0.7}>
                  <Text style={[styles.optionText, { color: isSelected || showCorrect ? '#ffffff' : isDark ? Colors.dark.text : Colors.light.text }]}>
                    {option}
                  </Text>
                  {showCorrect && <IconSymbol name="checkmark.circle.fill" size={20} color="#ffffff" />}
                  {showIncorrect && <IconSymbol name="xmark.circle.fill" size={20} color="#ffffff" />}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Explanation */}
          {selectedAnswer !== null && currentQuestion.explanation && (
            <View style={[styles.explanationBox, { backgroundColor: isDark ? '#2a2a2a' : '#e3f2fd' }]}>
              <IconSymbol name="lightbulb.fill" size={20} color="#FFA726" />
              <ThemedText style={styles.explanationText}>{currentQuestion.explanation}</ThemedText>
            </View>
          )}

          {/* Next Button */}
          {selectedAnswer !== null && (
            <TouchableOpacity
              style={[styles.nextButton, { backgroundColor: '#0a7ea4' }]}
              onPress={handleNext}
              activeOpacity={0.8}>
              <Text style={styles.nextButtonText}>
                {isLastQuestion ? 'See Results' : 'Next Question'}
              </Text>
              <IconSymbol name="arrow.right" size={20} color="#ffffff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  welcomeIcon: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
  },
  startSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  infoCard: {
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  infoTitle: {
    fontSize: 18,
    marginTop: 12,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 16,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  progressContainer: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#0a7ea4',
    borderRadius: 4,
    marginBottom: 12,
  },
  progressText: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
  },
  questionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  questionCard: {
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  questionTypeBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 16,
  },
  questionTypeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  questionText: {
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 24,
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    minHeight: 56,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  explanationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 12,
    marginBottom: 20,
  },
  explanationText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  resultContainer: {
    paddingTop: 80,
    paddingHorizontal: 24,
    paddingBottom: 32,
    alignItems: 'center',
  },
  resultIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  resultEmoji: {
    fontSize: 64,
  },
  resultTitle: {
    marginBottom: 24,
    textAlign: 'center',
  },
  scoreBadge: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 20,
    marginBottom: 24,
  },
  scoreText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '800',
  },
  scoreMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
  },
  restartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    gap: 8,
  },
  restartButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
