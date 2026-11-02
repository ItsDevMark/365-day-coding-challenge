import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function BookDetailScreen({ route, navigation }) {
  const { book } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cover Artwork */}
        <View style={styles.imageWrapper}>
          <Image source={{ uri: book.cover }} style={styles.cover} resizeMode="contain" />
        </View>

        {/* Info Container */}
        <View style={styles.infoWrapper}>
          <Text style={styles.categoryBadge}>{book.category}</Text>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>by {book.author}</Text>

          <View style={styles.statsRow}>
            <Text style={styles.stat}>⭐ {book.rating} / 5.0</Text>
            <Text style={styles.price}>${book.price.toFixed(2)}</Text>
          </View>

          <Text style={styles.sectionHeader}>Overview</Text>
          <Text style={styles.description}>{book.description}</Text>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.8}
          onPress={() => alert(`Added "${book.title}" to cart!`)}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageWrapper: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#1E293B',
  },
  cover: {
    width: 170,
    height: 250,
    borderRadius: 8,
  },
  infoWrapper: {
    padding: 20,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    color: '#38BDF8',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  author: {
    fontSize: 15,
    color: '#94A3B8',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 18,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#334155',
  },
  stat: {
    fontSize: 14,
    color: '#FBBF24',
    fontWeight: '600',
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#38BDF8',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#CBD5E1',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1E293B',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#334155',
  },
  addButton: {
    backgroundColor: '#38BDF8',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '700',
  },
});