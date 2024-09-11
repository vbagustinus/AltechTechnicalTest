const mockReanimated = jest.requireMock("react-native-reanimated");
jest.mock('react-native-reanimated', () => {
  return {
    ...mockReanimated,
  useSharedValue: jest.fn,
  useAnimatedStyle: jest.fn,
  FadeInLeft: {
    duration: jest.fn(() => {
      return {
        springify: jest.fn()
      }
    })
  },
  FadeInRight: {
    duration: jest.fn(() => {
      return {
        springify: jest.fn()
      }
    })
  }
  }
});
const mockReactRedux = jest.requireMock("react-redux");
jest.mock('react-redux', () => {
  return {
    ...mockReactRedux,
  useDispatch: jest.fn,
  useSelector: jest.fn().mockImplementationOnce(() => {
    return {
      Task: {
      list: [],
    }
    }})
}});
// jest.mock('uuid', () => {
//   return {
//     v4: jest.fn(() => 1)
//   }
// })
jest.mock('react-native-vector-icons/Ionicons', () => {})
jest.mock('@react-native-async-storage/async-storage', () => {})

jest.mock('react-native-safe-area-context', () => ({
  useSafeArea: () => ({ insets: null }),
}))

jest.mock('react-native', () => ({
  SafeAreaView: jest.fn().mockImplementation((f) => []),
  Dimensions: {
    get: jest.fn().mockReturnValue({width: 100, height:100}),
    set: jest.fn().mockReturnValue({width: 100, height:100}),
  },
  StyleSheet: {
    create: jest.fn().mockReturnValue({}),
  }
}));

jest.mock('@react-navigation/native-stack', () => {
  return {
    navigation: {
      addListener: jest.fn(),
    },
  }
})

// jest.mock('react-native/Libraries/Utilities/Dimensions', () => {
//   return {
    
//   };
// });
