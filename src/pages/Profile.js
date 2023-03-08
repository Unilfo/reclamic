import {Image, SafeAreaView, ScrollView, Text, View, StyleSheet} from "react-native";
import {useState} from "react";

export const Profile = () => {

  const [images, setImages] = useState([
    'https://www.bootdey.com/image/280x280/FF00FF/000000',
    'https://www.bootdey.com/image/280x280/00FFFF/000000',
    'https://www.bootdey.com/image/280x280/FF7F50/000000',
    'https://www.bootdey.com/image/280x280/6495ED/000000',
    'https://www.bootdey.com/image/280x280/DC143C/000000',
    'https://www.bootdey.com/image/280x280/008B8B/000000',
  ]);

  const [postCount, setPostCount] = useState(10);
  const [followingCount, setFollowingCount] = useState(20);
  const [followerCount, setFollowerCount] = useState(30);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }}/>
          <Text style={styles.name}>STASON</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={styles.statsCount}>{postCount}</Text>
              <Text style={styles.statsLabel}>Posts</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={styles.statsCount}>{followingCount}</Text>
              <Text style={styles.statsLabel}>Following</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={styles.statsCount}>{followerCount}</Text>
              <Text style={styles.statsLabel}>Followers</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: image }}/>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
    marginTop:20,
  },
  headerContent: {
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  statsBox: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  statsCount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  statsLabel: {
    fontSize: 14,
    color: '#999999',
  },
  body: {
    alignItems: 'center',
    padding: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    width: '33%',
    padding: 5,
  },
  image: {
    width: '100%',
    height: 120,
  },
});



// export const Profile = () => {
//   return (
//     <SafeAreaView>
//       <Text>
//         Profile
//       </Text>
//     </SafeAreaView>)
// }

// const styles = StyleSheet.create({});