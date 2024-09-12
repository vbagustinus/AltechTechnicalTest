/**
 *
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Animated, {
  BounceIn,
  FadeIn,
  FadeInLeft,
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {getListTask} from '../redux/actions/task';
import {colors} from '../constants/colors';

const ListItem = React.memo(({item, viewableItems, nav, index}) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(item => item.isViewable)
        .find(viewableItem => viewableItem.item.id === item.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);
  return (
    <Animated.View
      style={[
        styles.homeListContainer,
        rStyle,
        styles.homeListItemContainer,
        ,
      ]}>
      <TouchableOpacity
        style={[
          styles.homeListItemContainer,
          {
            marginLeft: -10,
          },
        ]}
        onPress={() => nav.push('DetailTaskScreen', {item})}>
        <Text style={styles.homeTextItemContainer}>
          {item.title.length > 30
            ? `${item.title.substring(0, 30)} ...`
            : item.title}
        </Text>
      </TouchableOpacity>
      <View
        style={[
          styles.homeLabelStatusView,
          {
            backgroundColor: item.completed ? colors.brown : colors.sage,
          },
        ]}>
        <Text
          style={[
            styles.homeLabelStatusText,
            {
              color: item.completed ? colors.primary : colors.brown,
            },
          ]}>
          {item.completed ? 'Done' : 'Todo'}
        </Text>
      </View>
    </Animated.View>
  );
});

const CheckBox = ({checked, title, onPress}) => {
  return (
    <Animated.View style={styles.checkboxView}>
      <Icon
        name={checked ? 'checkbox' : 'checkbox-outline'}
        color={colors.brown}
        size={30}
        onPress={onPress}
      />
      <Text style={styles.checkboxText}>{title}</Text>
    </Animated.View>
  );
};

const Home = ({navigation}) => {
  const viewableItems = useSharedValue([]);
  const dispatch = useDispatch();
  const task = useSelector(state => state.Task.list);
  const [active, setActive] = React.useState(false);
  const [tmpListTask, setTmpListTask] = React.useState(task);
  const [listTask, setListTask] = React.useState(task);
  const [filterTodo, setFilterTodo] = React.useState(false);
  const [filterDone, setFilterDone] = React.useState(false);
  const [findWord, setFindWord] = React.useState('');

  React.useEffect(() => {
    dispatch(getListTask());
  }, []);

  React.useEffect(() => {
    setListTask(task);
    setTmpListTask(task);
  }, [task]);

  const doFilter = ({todo = false, done = false}) => {
    if ((todo && done) || (!todo && !done)) {
      setTmpListTask(task);
      return setListTask(task);
    }
    if (todo && !done) {
      let result = task.filter(item => item.completed === false);
      setTmpListTask(result);
      return setListTask(result);
    }
    if (!todo && done) {
      let result = task.filter(item => item.completed === true);
      setTmpListTask(result);
      return setListTask(result);
    }
  };

  const doFilterWord = title => {
    setFindWord(title);
    if (!title) {
      return setListTask(tmpListTask);
    }
    if (title) {
      let result = tmpListTask.filter(item =>
        item.title.toLowerCase().includes(title.toLowerCase()),
      );
      return setListTask(result);
    }
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} translucent />
      <View style={styles.viewTitleContainer}>
        <Animated.View
          entering={FadeInLeft.duration(200).springify()}
          style={{
            flex: 1,
          }}>
          <Text style={styles.textTitleContainer}>Altech Task</Text>
        </Animated.View>
        <Animated.View entering={FadeInRight.duration(400).springify()}>
          <TouchableOpacity
            testID="addTaskButton"
            style={styles.iconAddTaskContainer}
            onPress={() => navigation.push('TaskScreen')}>
            <Icon name="add-circle-outline" color={colors.primary} size={40} />
          </TouchableOpacity>
        </Animated.View>
      </View>
      <Animated.View entering={BounceIn} style={styles.searchContainer}>
        <Icon name="search-circle-outline" color={colors.brown} size={30} />
        <View
          style={{
            flex: 1,
          }}>
          <TextInput
            style={styles.searchTextInput}
            maxLength={20}
            placeholderTextColor={colors.sage}
            placeholder="Find Task"
            onChangeText={text => doFilterWord(text)}
            value={findWord}
          />
        </View>
        {findWord.length > 1 && (
          <Animated.View
            style={{
              marginRight: 10,
            }}
            entering={BounceIn}>
            <Icon
              name="close-circle-outline"
              color={colors.brown}
              size={30}
              onPress={() => {
                setFindWord('');
                doFilterWord('');
              }}
            />
          </Animated.View>
        )}
        <Animated.View entering={FadeIn}>
          <Icon
            name="filter-circle-outline"
            color={colors.brown}
            size={30}
            onPress={() => setActive(!active)}
          />
        </Animated.View>
      </Animated.View>
      <FlatList
        data={listTask}
        keyExtractor={item => item.id}
        numColumns={2}
        onViewableItemsChanged={({viewableItems: vItems}) => {
          viewableItems.value = vItems;
        }}
        renderItem={({item, index}) => {
          return (
            <ListItem
              item={item}
              index={index}
              viewableItems={viewableItems}
              nav={navigation}
            />
          );
        }}
        ListEmptyComponent={
          <Animated.View style={styles.listEmptyContainer} entering={FadeIn}>
            <Icon
              name="file-tray-outline"
              color={colors.brown}
              size={50}
              onPress={() => setActive(!active)}
            />
            <Text style={styles.textNoData}>No Data</Text>
          </Animated.View>
        }
        ListHeaderComponent={<></>}
        ListFooterComponent={<></>}
      />
      <Modal animationType="fade" transparent={true} visible={active}>
        <View style={styles.homeModalContainer}>
          <View style={styles.homeModalSecondContainer}>
            <TouchableOpacity
              onPress={() => setActive(!active)}
              style={styles.homeModalCloseContainer}>
              <Icon
                name="close-circle-outline"
                color={colors.brown}
                size={30}
              />
            </TouchableOpacity>
            <CheckBox
              checked={filterTodo}
              title={'Todo'}
              onPress={() => setFilterTodo(!filterTodo)}
            />
            <CheckBox
              checked={filterDone}
              title={'Done'}
              onPress={() => setFilterDone(!filterDone)}
            />
            <View
              style={{
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setActive(!active);
                  setFindWord('');
                  doFilter({
                    todo: filterTodo,
                    done: filterDone,
                  });
                }}
                style={styles.homeModalButtonView}>
                <Text style={styles.homeModalButtonText}>Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
