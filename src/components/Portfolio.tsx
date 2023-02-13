import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { colors, commanyStyles, typography } from "../styles";
import projects from "../assets/projects.json";
import { Project } from "../types";
import { TechStackIcon } from "../assets/assets";
import StoresButton from "./StoresButton";
import CodeBlock from "./CodeBlock";

export default function Portfolio() {
  const { fontScale } = useWindowDimensions();

  const RenderProject = ({ item }: { item: Project }) => {
    return (
      <View style={styles.project}>
        <Text style={typography(fontScale).h3}>
          {"* "}
          {item.title}
        </Text>
        <Image source={{ uri: item.image }} style={styles.projectImg} />
        <Text style={typography(fontScale).p}>{item.description}</Text>
        <View>
          <Text style={[typography(fontScale).p, { marginBottom: 12 }]}>
            Technologies:
          </Text>
          <View style={styles.technologies}>
            {item.technologies.map((tech) => {
              const imgSource = TechStackIcon.GetImage(tech);
              return (
                <View style={commanyStyles.row} key={tech}>
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
          <Text style={[typography(fontScale).p, { marginBottom: 12 }]}>
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
      <CodeBlock name="Portfolio">
        <View style={{ flex: 1, marginVertical: 60, gap: 60 }}>
          {projects.map((project) => (
            <RenderProject key={project.id} item={project} />
          ))}
        </View>
      </CodeBlock>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 550,
    paddingHorizontal: 16,
  },
  project: {
    width: "100%",
    gap: 24,
  },
  projectImg: {
    width: "100%",
    flex: 1,
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    backgroundColor: colors.lightDark,
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
    gap: 12,
  },
});
