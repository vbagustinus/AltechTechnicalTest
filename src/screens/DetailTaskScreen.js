/**
 *
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  View,
  ScrollView,
} from 'react-native';
import {colors} from '../constants/colors';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {
  getListTask,
  removeItemTaskById,
  setTaskDoneById,
} from '../redux/actions/task';
import {showToastMessage} from '../utils/snackbar';
import styles from './styles';

function DetailTask({navigation, route}): React.JSX.Element {
  const dispatch = useDispatch();
  const item = route.params.item;
  const deleteItemTaskById = id => dispatch(removeItemTaskById(id));
  const doSetTaskDoneById = id => dispatch(setTaskDoneById(id));
  const [loading, setLoading] = React.useState(false);
  const [task, setTask] = React.useState(item);

  const removeFromLocalStorage = async () => {
    setLoading(true);
    deleteItemTaskById(task.id)
      .then(async () => {
        showToastMessage({
          type: '',
          description: 'The task has been successfully deleted.',
        });
        dispatch(getListTask());
        navigation.pop();
      })
      .catch(() =>
        showToastMessage({
          type: 'error',
          description: 'Something wrong, Try again later',
        }),
      )
      .finally(() => setLoading(false));
  };

  const setTaskDone = () => {
    setLoading(true);
    doSetTaskDoneById(task.id)
      .then(async data => {
        showToastMessage({
          type: '',
          description: 'The task has been successfully changed.',
        });
        dispatch(getListTask());
        setTask(data);
      })
      .catch(() =>
        showToastMessage({
          type: 'error',
          description: 'Something wrong, Try again later',
        }),
      )
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} translucent />
      {loading && <ActivityIndicator />}
      <View style={styles.viewContainerDetailTask}>
        <Animated.View
          entering={FadeInLeft.duration(300)}
          style={[styles.viewIconBack, {flex: 1}]}>
          <Icon
            name="chevron-back-circle-outline"
            color={colors.brown}
            size={50}
            onPress={() => navigation.pop()}
          />
        </Animated.View>
        <Animated.View
          entering={FadeInRight.duration(300)}
          style={styles.viewIconTrash}>
          <Icon
            name="trash-bin-outline"
            color={colors.brown}
            size={40}
            onPress={() => removeFromLocalStorage()}
          />
        </Animated.View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        <View style={styles.viewContainerContentDetailTask}>
          <Animated.Text
            entering={FadeInLeft.duration(400)}
            style={styles.textIdDetail}>
            #{task.id}
          </Animated.Text>
          <Animated.Text
            entering={FadeInLeft.duration(600)}
            style={styles.textTitleTitle}>
            {task.title}
          </Animated.Text>
          <Animated.Text
            entering={FadeInLeft.duration(800)}
            style={styles.textSubtitleDetail}>
            {task.subtitle}
          </Animated.Text>
        </View>
        <Animated.View
          entering={FadeInDown.duration(1000)}
          style={styles.viewBtnContainer}>
          <TouchableOpacity
            disabled={task.completed}
            style={[
              styles.btnCompleted,
              {
                backgroundColor: task.completed ? colors.brown : colors.primary,
              },
            ]}
            onPress={() => setTaskDone()}>
            <Animated.Text
              style={[
                styles.textCompleted,
                {
                  color: !task.completed ? colors.brown : colors.primary,
                },
              ]}>
              {task.completed ? 'Done' : 'Set to Complete'}
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailTask;
