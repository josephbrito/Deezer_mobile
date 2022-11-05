import { ImageBackground, StatusBar, View } from "react-native";
import Bg from "./assets/bg.webp";
import Layout from "./src/components/Layout";
import { TextProvider } from "./src/context";
import { DataProvider } from "./src/context/datas";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://deezer-heroku-deployment.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <DataProvider>
        <TextProvider>
          <View style={{ flex: 1 }}>
            <StatusBar animated={true} />
            <ImageBackground source={Bg} resizeMode="cover" style={{ flex: 1 }}>
              <Layout />
            </ImageBackground>
          </View>
        </TextProvider>
      </DataProvider>
    </ApolloProvider>
  );
}
