import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Music Festival 2024',
    date: 'June 15, 2024',
    location: 'Istanbul, Turkey',
    category: 'Music',
    description: 'Grand music festival featuring famous artists and an exciting atmosphere.',
  },
  {
    id: '2',
    title: 'Tech Conference',
    date: 'June 22, 2024',
    location: 'Ankara, Turkey',
    category: 'Technology',
    description: 'Talks about artificial intelligence, blockchain, and future technologies.',
  },
  {
    id: '3',
    title: 'Art Exhibition',
    date: 'June 30, 2024',
    location: 'Izmir, Turkey',
    category: 'Art',
    description: 'Modern art pieces and works by local artists.',
  },
  {
    id: '4',
    title: 'Sports Tournament',
    date: 'July 5, 2024',
    location: 'Bursa, Turkey',
    category: 'Sports',
    description: 'Football tournament with exciting matches and prizes.',
  },
  {
    id: '5',
    title: 'Food Festival',
    date: 'July 12, 2024',
    location: 'Antalya, Turkey',
    category: 'Food',
    description: 'Traditional and modern flavors, chefs, and cooking workshops.',
  },
  {
    id: '6',
    title: 'Theater Show',
    date: 'July 20, 2024',
    location: 'Istanbul, Turkey',
    category: 'Theater',
    description: 'Classic and modern theater plays featuring famous actors.',
  },
];

export default function TabTwoScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const filteredEvents = mockEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: isDark ? '#1a1a1a' : '#f8f9fa' }]}>
        <ThemedText
          type="title"
          style={[styles.title, { fontFamily: Fonts.rounded }]}>
          Explore Events
        </ThemedText>

        {/* Search Input */}
        <View style={[styles.searchContainer, { backgroundColor: isDark ? '#2a2a2a' : '#ffffff' }]}>
          <IconSymbol
            name="magnifyingglass"
            size={20}
            color={isDark ? Colors.dark.icon : Colors.light.icon}
            style={styles.searchIcon}
          />
          <TextInput
            style={[styles.searchInput, { color: isDark ? Colors.dark.text : Colors.light.text }]}
            placeholder="Search events..."
            placeholderTextColor={isDark ? Colors.dark.icon : Colors.light.icon}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
              <IconSymbol
                name="xmark.circle.fill"
                size={20}
                color={isDark ? Colors.dark.icon : Colors.light.icon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Event Cards */}
      <View style={styles.eventsContainer}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <TouchableOpacity
              key={event.id}
              activeOpacity={0.8}
              style={[styles.eventCard, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}>
              {/* Event Image Placeholder */}
              <View style={[styles.eventImage, { backgroundColor: isDark ? '#2a2a2a' : '#e5e5e5' }]}>
                <IconSymbol
                  name="photo.fill"
                  size={64}
                  color={isDark ? Colors.dark.icon : Colors.light.icon}
                />
              </View>

              {/* Event Content */}
              <View style={styles.eventContent}>
                <View style={styles.eventHeader}>
                  <ThemedText type="defaultSemiBold" style={styles.eventTitle}>
                    {event.title}
                  </ThemedText>
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>{event.category}</Text>
                  </View>
                </View>

                <ThemedText style={styles.eventDescription}>{event.description}</ThemedText>

                <View style={[styles.eventFooter, { borderTopColor: isDark ? '#2a2a2a' : '#e5e5e5' }]}>
                  <View style={styles.eventInfoRow}>
                    <View style={[styles.iconContainer, { backgroundColor: isDark ? '#2a2a2a' : '#f0f0f0' }]}>
                      <IconSymbol
                        name="calendar"
                        size={16}
                        color={isDark ? Colors.dark.icon : Colors.light.icon}
                      />
                    </View>
                    <ThemedText type="defaultSemiBold" style={styles.eventInfoText}>
                      {event.date}
                    </ThemedText>
                  </View>
                  <View style={styles.eventInfoRow}>
                    <View style={[styles.iconContainer, { backgroundColor: isDark ? '#2a2a2a' : '#f0f0f0' }]}>
                      <IconSymbol
                        name="location.fill"
                        size={16}
                        color={isDark ? Colors.dark.icon : Colors.light.icon}
                      />
                    </View>
                    <ThemedText type="defaultSemiBold" style={styles.eventInfoText}>
                      {event.location}
                    </ThemedText>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.noResultsContainer}>
            <View style={[styles.noResultsIcon, { backgroundColor: isDark ? '#2a2a2a' : '#f0f0f0' }]}>
              <IconSymbol
                name="magnifyingglass"
                size={40}
                color={isDark ? Colors.dark.icon : Colors.light.icon}
              />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.noResultsText}>
              No events found
            </ThemedText>
            <ThemedText style={styles.noResultsSubtext}>
              Try a different search term
            </ThemedText>
          </View>
        )}
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
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  clearButton: {
    marginLeft: 8,
    padding: 4,
  },
  eventsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  eventCard: {
    marginBottom: 16,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  eventImage: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventContent: {
    padding: 20,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  eventTitle: {
    flex: 1,
    fontSize: 20,
    marginRight: 12,
  },
  categoryBadge: {
    backgroundColor: '#0a7ea4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  eventDescription: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
    opacity: 0.8,
  },
  eventFooter: {
    borderTopWidth: 1,
    paddingTop: 16,
  },
  eventInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  eventInfoText: {
    fontSize: 14,
  },
  noResultsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  noResultsIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  noResultsText: {
    fontSize: 18,
    marginBottom: 8,
  },
  noResultsSubtext: {
    fontSize: 14,
    opacity: 0.6,
    textAlign: 'center',
  },
});

