import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import LikeImage from './assets/images/like.png';

const post = {
  id: 'p1',
  createdAt: '19 m',
  User: {
    id: 'u1',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
    name: 'Matheus Felipe',
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  numberOfLikes: 11,
  numberOfShares: 2,
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>19 m</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="gray"
            style={styles.icon}
          />
        </View>
        <Text style={styles.description}>{post.description}</Text>
        {post.image && (
          <Image
            style={styles.image}
            source={{ uri: post.image }}
            resizeMode="cover"
          />
        )}
        <View style={styles.footer}>
          {/* Status Row */}
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likedIcon} />
            <Text style={styles.likedBy}>
              Elon Musk and {post.numberOfShares} others
            </Text>
            <Text style={styles.numberOfShares}>
              {post.numberOfShares} shares
            </Text>
          </View>

          {/* Buttons Row */}
          <View style={styles.buttonsRow}>
            <View style={styles.iconButton}>
              <AntDesign name="like2" size={18} color="gray" />
              <Text style={styles.iconButtonText}>Like</Text>
            </View>

            {/* Comment button */}
            <View style={styles.iconButton}>
              <FontAwesome5 name="comment-alt" size={16} color="gray" />
              <Text style={styles.iconButtonText}>Comment</Text>
            </View>

            {/* Share button */}
            <View style={styles.iconButton}>
              <MaterialCommunityIcons
                name="share-outline"
                size={18}
                color="gray"
              />
              <Text style={styles.iconButtonText}>Share</Text>
            </View>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  post: {
    width: '100%',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
  subtitle: {
    color: 'gray',
  },
  icon: {
    marginLeft: 'auto',
  },

  // Body
  description: {
    lineHeight: 20,
    padding: 10,
    letterSpacing: 0.3,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginTop: 10,
  },

  // Footer
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  likedIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },

  likedBy: {
    color: 'gray',
  },

  numberOfLikes: {
    color: 'gray',
  },
  numberOfShares: {
    marginLeft: 'auto',
    color: 'gray',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },

  iconButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  iconButtonText: {
    color: 'gray',
    marginLeft: 5,
    fontWeight: '500',
  },
});
