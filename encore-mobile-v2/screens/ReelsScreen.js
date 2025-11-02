import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function ReelsScreen() {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReels();
  }, []);

  const loadReels = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockReels = [
        {
          id: 1,
          title: 'Studio Session Vibes',
          artist: 'music_producer',
          likes: 1234,
          comments: 89,
          shares: 45,
          duration: '0:30',
          genre: 'Electronic',
          isLiked: false,
        },
        {
          id: 2,
          title: 'Acoustic Cover',
          artist: 'indie_vibes',
          likes: 2567,
          comments: 156,
          shares: 78,
          duration: '1:15',
          genre: 'Acoustic',
          isLiked: true,
        },
        {
          id: 3,
          title: 'Beat Making Process',
          artist: 'beat_master',
          likes: 3421,
          comments: 234,
          shares: 123,
          duration: '2:00',
          genre: 'Hip Hop',
          isLiked: false,
        },
        {
          id: 4,
          title: 'Live Performance',
          artist: 'rock_band',
          likes: 5678,
          comments: 345,
          shares: 189,
          duration: '3:45',
          genre: 'Rock',
          isLiked: true,
        },
        {
          id: 5,
          title: 'Piano Improvisation',
          artist: 'classical_keys',
          likes: 1890,
          comments: 67,
          shares: 34,
          duration: '1:30',
          genre: 'Classical',
          isLiked: false,
        },
      ];
      setReels(mockReels);
    } catch (error) {
      console.error('Error loading reels:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = (reelId) => {
    setReels(prevReels => 
      prevReels.map(reel => 
        reel.id === reelId 
          ? { 
              ...reel, 
              isLiked: !reel.isLiked,
              likes: reel.isLiked ? reel.likes - 1 : reel.likes + 1
            }
          : reel
      )
    );
  };

  const handleComment = (reelId) => {
    Alert.alert('💬 Comments', 'Comment feature coming soon!');
  };

  const handleShare = (reelId) => {
    Alert.alert('📤 Share', 'Reel shared successfully!');
  };

  const handleCreateReel = () => {
    Alert.alert('🎬 Create Reel', 'Reel creation feature coming soon!');
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerTitle}>Reels</Text>
        <TouchableOpacity style={styles.cameraButton} onPress={handleCreateReel}>
          <Ionicons name="camera-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading reels...</Text>
          </View>
        ) : (
          reels.map((reel) => (
            <View key={reel.id} style={styles.reelContainer}>
              <LinearGradient
                colors={['#111', '#000']}
                style={styles.reelPlaceholder}
              >
                <TouchableOpacity style={styles.playButton}>
                  <LinearGradient
                    colors={['#10b981', '#059669']}
                    style={styles.playButtonGradient}
                  >
                    <Ionicons name="play" size={40} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
                
                {/* Reel Info Overlay */}
                <View style={styles.reelInfo}>
                  <Text style={styles.reelTitle}>{reel.title}</Text>
                  <Text style={styles.reelArtist}>@{reel.artist}</Text>
                  <View style={styles.reelMeta}>
                    <Text style={styles.reelGenre}>{reel.genre}</Text>
                    <Text style={styles.reelDuration}>{reel.duration}</Text>
                  </View>
                </View>
              </LinearGradient>
              
              {/* Reel Actions */}
              <View style={styles.reelActions}>
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => handleLike(reel.id)}
                >
                  <Ionicons 
                    name={reel.isLiked ? "heart" : "heart-outline"} 
                    size={28} 
                    color={reel.isLiked ? "#ef4444" : "#fff"} 
                  />
                  <Text style={styles.actionCount}>{reel.likes}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => handleComment(reel.id)}
              >
                <Ionicons name="chatbubble-outline" size={28} color="#fff" />
                <Text style={styles.actionCount}>{reel.comments}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => handleShare(reel.id)}
              >
                <Ionicons name="share-outline" size={28} color="#fff" />
                <Text style={styles.actionCount}>{reel.shares}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="bookmark-outline" size={28} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))
        )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  cameraButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  loadingText: {
    color: '#666',
    fontSize: 16,
  },
  reelContainer: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 16,
  },
  reelPlaceholder: {
    width: width - 16,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 8,
    position: 'relative',
  },
  playButton: {
    marginBottom: 16,
  },
  playButtonGradient: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reelInfo: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  reelTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  reelArtist: {
    color: '#10b981',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  reelMeta: {
    flexDirection: 'row',
    gap: 12,
  },
  reelGenre: {
    color: '#666',
    fontSize: 12,
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  reelDuration: {
    color: '#666',
    fontSize: 12,
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  reelActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 24,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionCount: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});