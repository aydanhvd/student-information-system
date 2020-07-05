import React from 'react'
import { StyleSheet, FlatList} from 'react-native';
import { selectHomeworks } from '../../redux/materials';
import { connect } from 'react-redux';
import { ClassField } from '../ClassField';

const mapStateToProps = (state) => ({
	homeworks: selectHomeworks(state)
});

export const HomeWorksList=connect(mapStateToProps)(({homeworks})=>{
   return(
      <FlatList
         style={styles.container}
         data={homeworks}
         renderItem={({item})=>{
            return(
            <ClassField
               heading={item.title}
               topic={item.link}
            />)
         }}
      />
   )
})
const styles = StyleSheet.create({
   container:{
      flex: 1,
      paddingHorizontal:18,
      paddingTop:30,
      marginBottom:50
   }
})