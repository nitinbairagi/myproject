import {useState} from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dataaction} from '../Redux/Redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {useValidation} from 'react-native-form-validator';
function Home() {
  const [state, setstate] = useState({
    value: '',
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [secure, setsecure] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const listdata = useSelector(state => state.list.data);
  const dispatch = useDispatch();
  const AddHandler = () => {
    console.log(state);
    dispatch(dataaction.addData(state));
  };
  //   console.log(data);
  const DeleteHandler = () => {
    dispatch(dataaction.deleData(state));
  };

  const {validate, isFieldInError, getErrorsInField, getErrorMessages} =
    useValidation({
      state: {name, email, confirmPassword},
    });
  const _onPressButton = () => {
    validate({
      name: {minlength: 5, maxlength: 7, required: true},
      email: {email: true, required: true},
      confirmPassword: {minlength: 5, maxlength: 7, required: true},
    });
  };
  function dataHandler(data) {
    return (
      <View style={{borderWidth: 0.7, margin: 10, borderRadius: 10}}>
        <TextInput
          style={styles.textinput}
          onChangeText={setName}
          value={name}
        />

        {isFieldInError('name') &&
          getErrorsInField('name').map(errorMessage => {
            if (errorMessage.search('name')) {
              <Text>{errorMessage}</Text>;
            }
          })}
        <TextInput
          style={styles.textinput}
          onChangeText={setEmail}
          value={email}
        />
        {isFieldInError('email') &&
          getErrorsInField('email').map(errorMessage => {
            if (errorMessage.search('email')) {
              <Text>{errorMessage}</Text>;
            }
          })}
        <TextInput
          style={styles.textinput}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={secure}
        />
        <Icon
          onPress={() => {
            setTimeout(() => {
              setsecure(true);
            }, 2000);
            setsecure(false);
          }}
          style={{position: 'absolute', left: 280, top: 137}}
          size={25}
          name="eye"
        />
        <Text
          style={{
            marginBottom: 5,
            marginLeft: 10,
          }}>
          {getErrorMessages()}
        </Text>

        {isFieldInError('confirmPassword') &&
          getErrorsInField('confirmPassword').map(errorMessage => {
            <Text>{errorMessage}</Text>;
          })}

        <TouchableHighlight onPress={_onPressButton}>
          <Text style={styles.Button}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
  return (
    <>
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Pressable onPress={DeleteHandler}>
          <Text
            style={{
              elevation: 4,
              fontSize: 30,
              width: 50,
              textAlign: 'center',
              borderRadius: 15,
              backgroundColor: '#cccccc',
              borderColor: 'white',
              // height: 50,
            }}>
            -
          </Text>
        </Pressable>
        <Pressable onPress={AddHandler}>
          <Text
            style={{
              elevation: 4,
              fontSize: 30,
              // marginTop: 20,

              width: 50,
              // justifyContent: 'center',
              // alignItems: 'center',
              textAlign: 'center',
              borderRadius: 15,
              backgroundColor: '#cccccc',
              borderColor: 'white',
              // height: 50,
            }}>
            +
          </Text>
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        <FlatList data={listdata} renderItem={dataHandler}></FlatList>
      </View>
    </>
  );
}
export default Home;

const styles = StyleSheet.create({
  textinput: {
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'white',
    elevation: 4,
  },
  Button: {
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    height: 30,
    top: 5,
    borderWidth: 2,
    marginBottom: 10,
    backgroundColor: 'grey',
    borderRadius: 15,
    borderColor: 'grey',
    elevation: 4,
  },
});
