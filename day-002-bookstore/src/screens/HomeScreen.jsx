import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { BOOKS } from '../data/book';

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Tech', 'Self-Help', 'Business'];

  const filteredBooks =
    selectedCategory === 'All'
      ? BOOKS
      : BOOKS.filter((book) => book.category === selectedCategory);

  const renderBookItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('BookDetail', { book: item })}
    >
      <Image source={{ uri: item.cover }} style={styles.coverImage} resizeMode="cover" />
      <View style={styles.cardInfo}>
        <Text style={styles.bookTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* App Header */}
      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>Discover your next read</Text>
        <Text style={styles.headerTitle}>Online Bookstore 📚</Text>
      </View>

      {/* Category Filter Chips */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.chip,
              selectedCategory === category && styles.chipActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.chipText,
                selectedCategory === category && styles.chipTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Books Grid */}
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={renderBookItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#F8FAFC',
    marginTop: 4,
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 12,
    gap: 8,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#1E293B',
  },
  chipActive: {
    backgroundColor: '#38BDF8',
  },
  chipText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#0F172A',
  },
  listContent: {
    paddingHorizontal: 14,
    paddingBottom: 24,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    marginBottom: 16,
    width: '48%',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#334155',
  },
  coverImage: {
    width: '100%',
    height: 190,
    backgroundColor: '#334155',
  },
  cardInfo: {
    padding: 10,
  },
  bookTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  bookAuthor: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  rating: {
    fontSize: 12,
    color: '#FBBF24',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#38BDF8',
  },
});