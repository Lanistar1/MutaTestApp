import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const leaderboardData = [
  {
    id: "1",
    name: "Tino Vinus",
    country: "United States",
    points: "15,832",
    position: 1,
  },
  {
    id: "2",
    name: "Tino Vinus",
    country: "United States",
    points: "15,832",
    position: 2,
  },
  {
    id: "3",
    name: "Tino Vinus",
    country: "United States",
    points: "15,832",
    position: 3,
  },
  {
    id: "4",
    name: "Me",
    country: "United States",
    points: "15,832",
    position: 607,
  },
];

const HomePage = () => {
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.leaderboardItem,
        item.position === 607 && styles.userPosition,
      ]}
    >
      <Text style={styles.positionText}>{item.position}.</Text>
      <Image
        source={require("../../assets/images/ProfilePic.png")}
        style={styles.avatar}
      />
      <View style={styles.userInfo}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.countryText}>{item.country} 🇺🇸</Text>
      </View>
      <Text style={styles.pointsText}>{item.points}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Yoruba Lessons</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="person-circle-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lessonContainer}>
        <View style={styles.lessonDetails}>
          <View style={styles.lessonInfo}>
            <Ionicons
              name="layers-outline"
              size={20}
              color="#FFA726"
              style={styles.icon}
            />
            <Text style={styles.levelText}>Intermediate</Text>
          </View>
          <View style={styles.lessonInfo}>
            <Image
              source={require("../../assets/icons/lesson.png")}
              style={styles.lessonicon}
            />

            <Text style={styles.lessonText}>Lesson 2</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.progressText}>52%</Text>
          </View>
        </View>
        <Image
          source={require("../../assets/images/Windmill.png")}
          style={styles.lessonImage}
        />
      </View>

      <TouchableOpacity style={styles.reviewLesson}>
        <View style={styles.reviewLessonContainer}>
          <Image
            source={require("../../assets/images/recentlesson.png")}
            style={styles.upgradeicon}
          />
          <Text style={styles.reviewLessonText}>
            Review your most recent lesson
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.leaderboardContainer}>
        <Text style={styles.leaderboardTitle}>Leaderboard</Text>
        <Ionicons name="chevron-forward" size={24} color="#fff" />
      </View>

      <FlatList
        data={leaderboardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.upgradeContainer}>
        <Image
          source={require("../../assets/icons/upgradeIcon.png")}
          style={styles.upgradeicon}
        />
        <Text style={styles.upgradeText}>
          Upgrade now to unlock all lessons
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1C24",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Axiforma-Black",
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 20,
  },
  lessonContainer: {
    backgroundColor: "#282A36",
    borderRadius: 12,
    paddingLeft: 20,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  lessonDetails: {
    flex: 1,
  },
  lessonInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  lessonDetails: {
    flex: 1,
  },
  levelText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Axiforma-Regular",
    marginLeft: 10,
  },
  lessonText: {
    color: "#ffffff",
    fontSize: 14,
    marginLeft: 10,
    fontFamily: "Axiforma-Regular",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressBar: {
    backgroundColor: "#ffffff",
    height: 5,
    width: 100,
    borderRadius: 4,
  },
  progressFill: {
    backgroundColor: "#FFA726",
    height: 5,
    width: 52,
    borderRadius: 4,
  },
  progressText: {
    color: "#ffffff",
    marginLeft: 10,
  },
  lessonImage: {
    width: 70,
    height: 70,
  },
  upgradeicon: {
    width: 30,
    height: 30,
  },
  reviewLesson: {
    backgroundColor: "#FFF4DB",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 20,
  },
  reviewLessonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewLessonText: {
    color: "#000",
    fontSize: 14,
    marginLeft: 10,
    fontFamily: "Axiforma-Medium",
  },
  leaderboardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leaderboardTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  leaderboardItem: {
    backgroundColor: "#282A36",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    position: "relative",
  },
  userPosition: {
    backgroundColor: "#EDE2BB",
  },
  positionText: {
    color: "#fff",
    fontSize: 12,
    marginRight: 10,
    position: "absolute",
    top: 0,
    backgroundColor: "#000",
    padding: 5,
    borderBottomRightRadius: 8
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 7,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  nameText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  countryText: {
    color: "#fff",
    fontSize: 14,
  },
  pointsText: {
    color: "#FFA726",
    fontSize: 16,
    fontWeight: "bold",
  },
  upgradeContainer: {
    flexDirection: "row",
    backgroundColor: "#BBECED",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
  },
  upgradeText: {
    color: "#000",
    fontSize: 16,
    marginLeft: 15,
    fontFamily: "Axiforma-Regular",
  },
  lessonicon: {
    width: 20,
    height: 20,
  }
});

export default HomePage;
