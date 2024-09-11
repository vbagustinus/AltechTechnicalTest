/**
 *
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {getListTask, setListTask} from '../redux/actions/task';
import {useDispatch} from 'react-redux';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fonts';
import {showToastMessage} from '../utils/snackbar';
import styles from './styles';

function AddTask({navigation}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const setTask = param => dispatch(setListTask(param));
  const [loading, setLoading] = React.useState(false);
  const [title, onChangeTitleText] = React.useState('');
  const [subtitle, onChangeSubtitleText] = React.useState('');

  const saveToLocalStorage = async () => {
    setLoading(true);
    const objTask = {
      id: uuidv4(),
      title: title,
      subtitle: subtitle,
      createAt: new Date(),
      completed: false,
    };
    setTask(objTask)
      .then(() => {
        showToastMessage({
          type: '',
          description: 'The task has been successfully created.',
        });
        dispatch(getListTask());
        navigation.pop();
      })
      .catch(err => {
        showToastMessage({
          type: 'error',
          description: 'Something wrong, Try again later',
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} translucent />
      {loading && <ActivityIndicator />}
      <View style={styles.containerTask}>
        <Animated.View
          entering={FadeInLeft.duration(300).springify()}
          style={styles.viewIconBack}>
          <Icon
            name="chevron-back-circle-outline"
            color={colors.brown}
            size={50}
            onPress={() => navigation.pop()}
          />
        </Animated.View>
        <Animated.View
          entering={FadeInUp.duration(300).springify()}
          style={styles.viewIconTrash}>
          <Text
            style={{
              color: colors.brown,
              fontSize: 40,
              fontFamily: fontFamilies.medium,
            }}>
            Add Task
          </Text>
        </Animated.View>
        <View
          style={{
            merginRight: 30,
            width: 100,
          }}
        />
      </View>
      <Animated.View
        entering={FadeInRight.duration(500).springify()}
        style={{
          paddingTop: 20,
          width: '100%',
        }}>
        <TextInput
          maxLength={50}
          style={styles.textInputTitle}
          placeholderTextColor={'grey'}
          placeholder="Insert Title"
          onChangeText={onChangeTitleText}
          value={title}
        />
      </Animated.View>
      <Animated.View
        entering={FadeInLeft.duration(700).springify()}
        style={{
          width: '100%',
        }}>
        <TextInput
          multiline
          numberOfLines={4}
          maxLength={150}
          onChangeText={text => onChangeSubtitleText(text)}
          value={subtitle}
          style={styles.textInputSubtitle}
          placeholderTextColor={'grey'}
          placeholder="Insert Description"
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        style={styles.viewBtnTaskView}>
        <TouchableOpacity
          disabled={!title || !subtitle}
          style={[
            styles.btnAddTask,
            {
              backgroundColor: title && subtitle ? colors.brown : colors.sage,
            },
          ]}
          onPress={() => saveToLocalStorage()}>
          <Animated.Text style={styles.btnTextAddTask}>Save</Animated.Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

export default AddTask;
