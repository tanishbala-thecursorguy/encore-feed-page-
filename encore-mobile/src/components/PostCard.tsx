import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

interface PostProps {
  username: string;
  imageUrl: string;
  description: string;
  hashtags: string[];
  userType?: 'artist' | 'fan';
  postedTime?: string;
  audioSrc?: string;
}

export default function PostCard({
  username,
  imageUrl,
  description,
  hashtags,
  userType = 'artist',
  postedTime = '2h',
  audioSrc,
}: PostProps) {
  const [playing, setPlaying] = useState(false);
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  
  const scale = useSharedValue(1);
  const heartScale = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const heartAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: heartScale.value }],
    opacity: heartScale.value,
  }));

  const handleDoublePress = () => {
    setLiked(true);
    scale.value = withSpring(0.95, {}, () => {
      scale.value = withSpring(1);
    });
    
    heartScale.value = withSpring(1.2, {}, () => {
      heartScale.value = withTiming(0, { duration: 800 });
    });
  };

  const handleShare = () => {
    Alert.alert('Share', 'Post shared!');
  };

  const handleComment = () => {
    Alert.alert('Comments', 'Comments feature coming soon!');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <LinearGradient
          colors={['#10b981', '#059669']}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <View style={styles.userRow}>
            <Text style={styles.username}>{username}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{userType}</Text>
            </View>
            <Text style={styles.time}>{postedTime}</Text>
          </View>
        </View>
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.hashtagContainer}>
          {hashtags.map((tag, index) => (
            <Text key={index} style={styles.hashtag}>
              #{tag}
            </Text>
          ))}
        </View>
      </View>

      {/* Image */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleDoublePress}
        style={styles.imageContainer}
      >
        <Animated.View style={[styles.imageWrapper, animatedStyle]}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          
          {/* Heart animation overlay */}
          <Animated.View style={[styles.heartOverlay, heartAnimatedStyle]}>
            <Ionicons name="heart" size={80} color="#10b981" />
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>

      {/* Audio Player Placeholder */}
      {audioSrc && (
        <View style={styles.audioPlayer}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => setPlaying(!playing)}
          >
            <Ionicons
              name={playing ? 'pause' : 'play'}
              size={20}
              color="#10b981"
            />
          </TouchableOpacity>
          <View style={styles.waveform}>
            <Text style={styles.audioText}>Audio Waveform</Text>
          </View>
        </View>
      )}

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setLiked(!liked)}
        >
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={28}
            color={liked ? '#10b981' : '#fff'}
          />
          <Text style={styles.actionText}>49.3K</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleComment}>
          <Ionicons name="chatbubble-outline" size={28} color="#fff" />
          <Text style={styles.actionText}>234</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={28} color="#fff" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, { marginLeft: 'auto' }]}
          onPress={() => setSaved(!saved)}
        >
          <Ionicons
            name={saved ? 'bookmark' : 'bookmark-outline'}
            size={28}
            color={saved ? '#10b981' : '#fff'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#111',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  badge: {
    backgroundColor: '#01302e',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 8,
  },
  badgeText: {
    color: '#10b981',
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  time: {
    color: '#666',
    fontSize: 12,
    marginLeft: 8,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
  },
  hashtagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  hashtag: {
    color: '#10b981',
    fontSize: 12,
    marginRight: 8,
  },
  imageContainer: {
    paddingHorizontal: 8,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: width - 16,
    height: 400,
    borderRadius: 12,
  },
  heartOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -40,
    marginLeft: -40,
  },
  audioPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#01302e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveform: {
    flex: 1,
    marginLeft: 12,
    height: 40,
    backgroundColor: '#111',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  audioText: {
    color: '#666',
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 4,
  },
});