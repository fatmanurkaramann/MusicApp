import React ,{useState} from "react"
import { View, FlatList, StyleSheet } from "react-native"
import music_data from "./music-data.json"
import MusicCard from "./components/MusicCard"
import SearchBar from "./components/SearchBar"

const App = () => {
  const [list,setList]=useState(music_data)

  const renderMusic = ({ item }) => <MusicCard musicData={item} />

  const renderSeparator = () => <View style={styles.separator} />

  const handleSearch= text=>{

    const filteredList=music_data.filter(musicData=>{
      const searchedText=text.toLowerCase();
      const currentTitle=musicData.title.toLowerCase();
      const currentArtist=musicData.artist.toLocaleLowerCase();

      return currentTitle.indexOf(searchedText)>-1 || currentArtist.indexOf(searchedText)>-1
    });

    setList(filteredList);
  }
  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch}></SearchBar>
      <FlatList
        keyExtractor={item => item.id}
        data={list}
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
    backgroundColor:"#1B2430"

  },
  separator: {
    borderWidth: 0.7,
    borderColor:"#27496D"
  }
})
