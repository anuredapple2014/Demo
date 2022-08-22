import { StyleSheet, Text, View,TouchableOpacity, Pressable,FlatList, SafeAreaView } from 'react-native';
import React,{useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import actions from '../Redux/actions';

const Home = (props) => {
   
    //console.log("Aa gayi value",store.getState());
   
    //const number =5
    const [data,setData] = useState([])
    //const number = useSelector((state) => state.counterReducer.num)
    useEffect(()=>{
      (async()=>{
       try {
        let res = await actions.getPosts()
        setData(res.data)
        console.log("all posts anurag", res)
       } catch (error) {
        console.log("error raised",error)
       }
        //  actions.getPosts().then((res)=>{
        //   console.log("My all data",res)
        //  })
      })();
    
    },[])
    //console.log('reducervalue',number)
    // const dispatch = useDispatch()
    //console.log("number selector",number)
    // const[number,setNumber] = useState(5);
        // useEffect(()=>{
        //     const unsubscribe = subscribe(()=>{
        //         let value = getState().num
        //         setNumber(value)
        //     })
        //     return () => {
        //         unsubscribe()
        //     }
        // },[])

  const deletePost = async(id) =>{
  try {
    const res = await actions.deletePost(id)
    console.group('res+++++',res)
    let arr = [...data]
    let modifyArray = arr.filter((val,i) =>{
      if(val.id !== id){
        return val
      }
    })
    setData(modifyArray)
  } catch (error) {
    console.log('error occured'.error)
  }
    }
    // const onAdd = () =>{
    //   actions.increment(number)
    // }

    // const onDelete = () =>{
    //    actions.decrement(number)
    // }

    const renderItem = ({item,index}) =>{
      return(
        <View style={styles.card}>
          <Text style={styles.t1}>{item.id} {item.title}</Text>
          <Text>{item.body}</Text>
          <Pressable style={styles.btn2} onPress={()=> deletePost(item.id)}>
            <Text>Delete Post</Text>
          </Pressable>
        </View>
      )
    }
  return (
    <View style={styles.container}>
        {/* <Text>{number}</Text>
      <Text>Hello Home Page</Text>
      <Pressable style={styles.btn1} onPress={onAdd}>
  <Text>Increment</Text>
</Pressable> */}
{/* <Pressable style={[styles.btn1,{backgroundColor:'green',marginTop:hp('2%')}]} onPress={onDelete}>
  <Text>Decrement</Text>
</Pressable> */}
{/* <Pressable style={[styles.btn1,{backgroundColor:'green',marginTop:hp('2%')}]} onPress={deletePost}>
  <Text>Delete</Text>
</Pressable> */}
<SafeAreaView>
<FlatList
  data = {data}
  renderItem={renderItem}
  keyExtractor={item => item.id.toString()}
  contentContainerStyle={{paddingVertical:20}}
  ItemSeparatorComponent={()=>
         <View style={{marginTop:hp('2%')}}/>

  }
/>
</SafeAreaView>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container:{
      width:wp('100%'),
      height:hp('100%'),
      alignItems:'center',
      justifyContent:'center'
    },
    btn1:{
        width:wp('40%'),
        height:hp('5%'),
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent:'center'
    },
    card:{
      width:wp('90%'),
      height:hp('30%'),
      marginTop:hp('1%'),
      backgroundColor:'pink',
      padding:wp('2%'),
      borderRadius:hp('1%')
    },
    t1:{
      fontWeight:'bold',
      fontSize:hp('2%')
    },
    btn2:{
      width:wp('50%'),
      height:hp('5%'),
      backgroundColor:'skyblue',
      alignItems:'center',
      justifyContent:'center',
      marginTop:hp('2%'),
      alignSelf:'flex-end',
      borderRadius:hp('1%')
    }
})