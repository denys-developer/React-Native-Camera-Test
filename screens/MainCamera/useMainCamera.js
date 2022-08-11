import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';

const useMainCamera = () => {
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [isRecording, setRecording] = useState(false);
  const [record, setRecord] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const changeCameraType = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  };

  const toggleRecordingStatus = async () => {
    if (!isRecording) {
      setRecording(true);
      const data = await cameraRef.recordAsync({
        maxDuration: 10,
      });
      setRecord(data.uri);
    } else {
      setRecording(false);
      cameraRef.stopRecording();
    }
  };

  const takePicture = async () => {
    if (!cameraRef) return;
    if (isRecording) {
      setRecording(false);
    }
    const photo = await cameraRef.takePictureAsync();
    setCapturedImage(photo);
  };

  const removeCapturedImage = () => {
    setCapturedImage(null);
  };

  const setRef = (ref) => {
    setCameraRef(ref);
  };

  return {
    record,
    isRecording,
    hasPermission,
    type,
    setRef,
    capturedImage,
    changeCameraType,
    toggleRecordingStatus,
    removeCapturedImage,
    takePicture,
  };
};

export default useMainCamera;
