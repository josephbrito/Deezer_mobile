import React from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";

import { GET_DATA } from "../../services";

import { useData } from "../../context/datas";
import { useQuery } from "@apollo/client";

import Loading from "../Loading";
import { IData } from "../../services/types";
import Card from "../Card";
import { ScrollView } from "react-native-virtualized-view";

const Main: React.FC = () => {
  const { datas } = useData();

  const { data, loading, error } = useQuery(GET_DATA, {
    variables: {
      param: datas,
    },
  });
  if (!datas) {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }

  if (error)
    return (
      <View>
        <Text>Something wrong :(, please try again later</Text>
      </View>
    );

  if (loading) return <Loading />;

  const data_query: IData[] = data.data;

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={data_query}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              album={item.album}
              artist={item.artist}
              duration={item.duration}
              link={item.link}
              preview={item.preview}
              title={item.title}
              key={item.id}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Main;
