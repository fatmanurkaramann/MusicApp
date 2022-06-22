import React from "react";
import {View, TextInput} from "react-native"
import styles from "./SearchBar.style"

const SearchBar=(musicData)=>{
    return(
        <View style={styles.container}>
            <TextInput  placeholder=" Ara..." onChangeText={musicData.onSearch}/>
        </View>
    )
}

export default SearchBar;