import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

const CameraPreview = ({ photo, removeCapturedImage }) => {
  const source = { uri: photo && photo.uri };
  return (
    <View style={styles.container} onTouchEnd={removeCapturedImage}>
      <ImageBackground source={source} style={styles.background} />
    </View>
  );
};

export default CameraPreview;
