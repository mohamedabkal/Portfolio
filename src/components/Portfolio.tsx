import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { commanyStyles, typography } from "../styles";
import projects from "../assets/projects.json";
import { Project } from "../types";
import { TechStackIcon } from "../assets/assets";
import StoresButton from "./StoresButton";

export default function Portfolio() {
  const { fontScale } = useWindowDimensions();

  const titleStyle = [typography(fontScale).h1, { marginBottom: 80 }];
  const projectDescriptionStyle = [
    typography(fontScale).p,
    // { marginBottom: 16 },
  ];

  const renderProject = (item: Project) => {
    return (
      <View key={item.id} style={styles.project}>
        <Text style={typography(fontScale).h3}>{item.title}</Text>
        <Image source={{ uri: item.image }} style={styles.projectImg} />
        <Text style={projectDescriptionStyle}>{item.description}</Text>
        <View>
          <Text style={[projectDescriptionStyle, { marginBottom: 12 }]}>
            Technologies:
          </Text>
          <View style={styles.technologies}>
            {item.technologies.map((tech) => {
              const imgSource = TechStackIcon.GetImage(tech);
              return (
                <View style={commanyStyles.row}>
                  {imgSource && (
                    <Image source={imgSource} style={styles.techImage} />
                  )}
                  <Text style={typography(fontScale).p}>{tech}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={[projectDescriptionStyle, { marginBottom: 12 }]}>
            View the app on:
          </Text>
          <View style={[commanyStyles.row, { gap: 16 }]}>
            {item.app_store_link && (
              <StoresButton platform="ios" link={item.app_store_link} />
            )}
            {item.play_store_link && (
              <StoresButton platform="android" link={item.play_store_link} />
            )}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={titleStyle}>Portfolio</Text>
      {projects.map((project) => renderProject(project))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 500,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  project: {
    width: "100%",
    marginBottom: 60,
    gap: 20,
  },
  projectImg: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
  },
  techImage: {
    height: 18,
    width: 18,
    borderRadius: 30,
    marginRight: 5,
  },
  technologies: {
    ...commanyStyles.row,
    width: "100%",
    flexWrap: "wrap",
    gap: 16,
  },
});
