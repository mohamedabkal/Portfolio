interface Image {
  name: string;
  image: any;
}

export class TechStackIcon {
  private static images: Array<Image> = [
    {
      name: "React Native",
      image: require("../assets/react-native.jpeg"),
    },
    {
      name: "JavaScript",
      image: require("../assets/javascript.jpeg"),
    },
    {
      name: "TypeScript",
      image: require("../assets/typescript.jpg"),
    },
    {
      name: "Redux",
      image: require("../assets/redux.png"),
    },
    {
      name: "Firebase",
      image: require("../assets/firebase.jpeg"),
    },
  ];

  static GetImage = (name: string) => {
    const found = TechStackIcon.images.find((e) => e.name === name);
    return found ? found.image : null;
  };
}
