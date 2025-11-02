import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const genres = [
    { name: 'Pop', icon: '🎵' },
    { name: 'Rock', icon: '🎸' },
    { name: 'Hip Hop', icon: '🎤' },
    { name: 'Electronic', icon: '🎧' },
    { name: 'Jazz', icon: '🎷' },
    { name: 'Classical', icon: '🎼' },
  ];

  const trendingTracks = [
    { id: 1, title: 'Midnight Vibes', artist: 'Luna', icon: '🌙' },
    { id: 2, title: 'Electric Dreams', artist: 'Neon', icon: '⚡' },
    { id: 3, title: 'Ocean Waves', artist: 'Aqua', icon: '🌊' },
    { id: 4, title: 'Forest Path', artist: 'Nature', icon: '🌲' },
  ];

  const newReleases = [
    { id: 1, title: 'Rocket', icon: '🚀' },
    { id: 2, title: 'Blossom', icon: '🌸' },
    { id: 3, title: 'Crown', icon: '👑' },
    { id: 4, title: 'Wave', icon: '🌊' },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </SafeAreaView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#666"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Genres */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Genres</Text>
          <View style={styles.genreList}>
            {genres.map((genre, index) => (
              <TouchableOpacity key={index} style={styles.genreItem}>
                <Text style={styles.genreIcon}>{genre.icon}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Trending */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.trendingList}>
            {trendingTracks.map((track) => (
              <TouchableOpacity key={track.id} style={styles.trendingItem}>
                <Text style={styles.trendingIcon}>{track.icon}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* New Releases */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>New Releases</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.releasesList}>
            {newReleases.map((release) => (
              <TouchableOpacity key={release.id} style={styles.releaseItem}>
                <Text style={styles.releaseIcon}>{release.icon}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Artists */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Artists</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#10b981',
    fontSize: 16,
    fontWeight: '500',
  },
  genreList: {
    flexDirection: 'column',
    gap: 16,
  },
  genreItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  genreIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  trendingList: {
    flexDirection: 'column',
    gap: 16,
  },
  trendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  trendingIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  releasesList: {
    flexDirection: 'row',
    gap: 16,
  },
  releaseItem: {
    width: 60,
    height: 60,
    backgroundColor: '#111',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  releaseIcon: {
    fontSize: 24,
  },
});