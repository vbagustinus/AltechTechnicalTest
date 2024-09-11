import Snackbar from 'react-native-snackbar';
import {fontFamilies} from '../constants/fonts';

export const showToastMessage = ({type, description}) => {
  let color = '#29ADB2';
  if (type == 'info') {
    color = '#93ABD3';
  }
  if (type == 'error') {
    color = '#EC5858';
  }
  if (type == 'warning') {
    color = '#FD8C04';
  }
  return Snackbar.show({
    text: description,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: color,
    fontFamily: fontFamilies.medium,
  });
};
