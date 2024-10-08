import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fonts';
const {height, width} = Dimensions.get('screen');

export default StyleSheet.create({
  backgroundStyle: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  homeListContainer: {
    marginTop: 5,
    marginLeft: 20,
    backgroundColor: colors.secondary,
    marginBottom: 23,
    borderRadius: 20,
    padding: 10,
  },
  homeListItemContainer: {
    width: width / 2 - 30,
    height: width / 2 - 30,
    justifyContent: 'center',
  },
  homeTextItemContainer: {
    color: colors.brown,
    fontFamily: fontFamilies.bold,
    fontSize: 20,
    textAlign: 'center',
  },
  homeLabelStatusView: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 10,
  },
  homeLabelStatusText: {
    fontSize: 10,
    fontFamily: fontFamilies.normal,
  },
  listEmptyContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textNoData: {
    color: colors.brown,
    fontSize: 20,
    fontFamily: fontFamilies.medium,
    textAlign: 'center',
  },
  checkboxView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  checkboxText: {
    color: colors.brown,
    fontFamily: fontFamilies.medium,
    fontSize: 20,
    marginLeft: 10,
  },
  viewTitleContainer: {
    paddingTop: 60,
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 20,
    backgroundColor: colors.primary,
  },
  textTitleContainer: {
    color: colors.brown,
    fontSize: 40,
    fontFamily: fontFamilies.bold,
  },
  iconAddTaskContainer: {
    padding: 0,
    width: 40,
    height: 40,
    backgroundColor: colors.brown,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  searchContainer: {
    margin: 20,
    marginTop: 0,
    marginBottom: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.brown,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignContent: 'center',
  },
  searchTextInput: {
    height: 30,
    color: colors.brown,
    fontFamily: fontFamilies.bold,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    width: 'auto',
  },
  homeModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    backgroundColor: 'transparent',
  },
  homeModalSecondContainer: {
    width: width - 150,
    height: width - 150,
    borderWidth: 3,
    borderColor: colors.sage,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: 10,
  },
  homeModalCloseContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 100,
  },
  homeModalButtonView: {
    backgroundColor: colors.brown,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  homeModalButtonText: {
    color: colors.primary,
    fontFamily: fontFamilies.medium,
    fontSize: 20,
  },
  viewContainerDetailTask: {
    alignItems: 'center',
    paddingTop: 60,
    height: 150,
    width: '100%',
    flexDirection: 'row',
  },
  viewIconBack: {
    justifyContent: 'center',
    marginLeft: 30,
    height: 100,
    width: 100,
  },
  viewIconTrash: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: 100,
    marginRight: 30,
  },
  viewContainerContentDetailTask: {
    marginLeft: 10,
    padding: 20,
    width: '100%',
  },
  textIdDetail: {
    color: 'black',
    fontSize: 12,
  },
  textTitleTitle: {
    color: colors.brown,
    fontSize: 40,
    fontFamily: fontFamilies.bold,
  },
  textSubtitleDetail: {
    color: colors.brown,
    fontSize: 30,
    fontFamily: fontFamilies.medium,
  },
  viewBtnContainer: {
    marginHorizontal: 30,
    marginTop: 50,
  },
  btnCompleted: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: colors.brown,
    borderWidth: 2,
  },
  textCompleted: {
    fontSize: 20,
    fontFamily: fontFamilies.medium,
  },
  containerTask: {
    alignItems: 'center',
    paddingTop: 60,
    height: 100,
    width: '100%',
    flexDirection: 'row',
  },
  viewContainerAddTask: {
    paddingTop: 20,
    width: '100%',
  },
  textInputTitle: {
    height: 50,
    margin: 12,
    marginHorizontal: 30,
    borderWidth: 1,
    padding: 10,
    color: colors.brown,
    borderRadius: 10,
    borderColor: colors.brown,
    backgroundColor: colors.primary,
    color: colors.brown,
    fontFamily: fontFamilies.bold,
  },
  textInputSubtitle: {
    margin: 12,
    marginHorizontal: 30,
    borderWidth: 1,
    padding: 10,
    color: colors.brown,
    borderRadius: 10,
    borderColor: colors.brown,
    backgroundColor: colors.primary,
    color: colors.brown,
    fontFamily: fontFamilies.bold,
  },
  viewBtnTaskView: {
    marginHorizontal: 30,
    marginTop: 50,
  },
  btnAddTask: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: colors.brown,
  },
  btnTextAddTask: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: fontFamilies.medium,
  },
});
