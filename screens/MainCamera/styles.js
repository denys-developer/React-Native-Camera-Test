import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: '100%',
  },
  view: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  btnWrapper: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
    borderRadius: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
