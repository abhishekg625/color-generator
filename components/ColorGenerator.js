import { View, Text , StyleSheet} from 'react-native'
import React  from 'react'
import { TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { FlatList } from 'react-native';

const ColorGenerator = () => {
  const [newColor, setNewColor] = useState([]);

    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
    
        return `rgb(${red},${green},${blue})`;
      };
      console.log(newColor);
  return (
    <View style= {styles.mainContainer}>
     <TouchableOpacity
    style= {styles.buttonStyle}
     onPress ={()=>{
       //alert(randomColor())

       setNewColor([...newColor, randomColor() ]);

       //"..."-> spread operator it stores the previous values
       
       }}>
         <Text style= {styles.textStyle}> Generate Random Colors</Text>

     </TouchableOpacity>

     <FlatList  
     keyExtractor={(key)=>{ key}}
     data={newColor}
     renderItem ={({ item})=>{
       return(
        <View style= {styles.imageContainer}>
          <View style={{
            backgroundColor: item,
            height: 100,
            borderRadius: 5,
            margintop: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}>  
        <Text style={styles.textStyle}
        // style={{

        //    backgroundColor: item,
        //    width: 100,
        //    height: 100,
        //    borderRadius: 5
        // }}
        > {item}</Text>
        </View>

    </View>


       )
     }}
     />
     
    </View>
  )
}
const styles= StyleSheet.create({
    mainContainer: {
        marginTop: 60,
      },
      buttonStyle: {
        backgroundColor: "#00b0ff",
        position: "relative",
        overflow: "hidden",
        color: "#eee",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
       display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft: 40,
        marginRight: 40
      },
      textStyle: {
        color: "white",
        fontSize: 20,
      },
      imageContainer: {
        marginVertical: 10,
        paddingHorizontal: 30,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
      },
    

})
export default ColorGenerator;