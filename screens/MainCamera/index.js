import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { CameraPreview } from '../../components';

import { styles } from './styles';
import useMainCamera from './useMainCamera';

const MainCamera = () => {
  const {
    isRecording,
    hasPermission,
    type,
    setRef,
    capturedImage,
    changeCameraType,
    toggleRecordingStatus,
    removeCapturedImage,
    takePicture,
  } = useMainCamera();

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      {capturedImage ? (
        <CameraPreview photo={capturedImage} removeCapturedImage={removeCapturedImage} />
      ) : (
        <Camera style={styles.camera} type={type} ratio="1:1" ref={setRef}>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnWrapper} onPress={changeCameraType}>
              <FontAwesome5 name="exchange-alt" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnWrapper} onPress={takePicture}>
              <MaterialIcons name="enhance-photo-translate" color="white" size={32} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.btnWrapper,
                backgroundColor: isRecording ? 'red' : 'black',
              }}
              onPress={toggleRecordingStatus}
            >
              <Ionicons name="md-videocam-outline" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </>
  );
};

export default MainCamera;
