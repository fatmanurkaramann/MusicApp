import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import music_data from "./music-data.json"
import MusicCard from "./components/MusicCard"
const App = () => {
  const renderMusic = ({ item }) => <MusicCard musicData={item} />
  const renderSeparator = () => <View style={styles.separator} />
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={music_data}
        renderItem={renderMusic}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 0.7
  }
})
