import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PostCard from '../components/PostCard';

export default function HomeScreen() {
  const posts = [
    {
      username: "encore_music",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop",
      description: "Vibe check 🎶✨",
      hashtags: ["music", "encore", "vibes"],
      userType: "artist" as const,
      postedTime: "2h",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      username: "dj_wave",
      imageUrl: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=600&h=600&fit=crop",
      description: "Night at the decks 🔥",
      hashtags: ["dj", "party", "live"],
      userType: "fan" as const,
      postedTime: "5h",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      username: "overflow.std",
      imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop",
      description: "Lorem ipsum dolor sit amet",
      hashtags: ["music", "studio", "production"],
      userType: "artist" as const,
      postedTime: "1d",
    },
    {
      username: "the_vortex",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
      description: "Live performance tonight! 🎤",
      hashtags: ["live", "concert", "music"],
      userType: "fan" as const,
      postedTime: "3h",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView style={styles.header}>
        <LinearGradient
          colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.7)']}
          style={styles.headerGradient}
        >
          <Text style={styles.headerTitle}>Encore</Text>
        </LinearGradient>
      </SafeAreaView>

      {/* Feed */}
      <ScrollView
        style={styles.feed}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feedContent}
      >
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  headerGradient: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  feed: {
    flex: 1,
    marginTop: 100, // Account for header
  },
  feedContent: {
    paddingBottom: 100, // Account for tab bar
  },
});