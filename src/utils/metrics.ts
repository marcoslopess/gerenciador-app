import { Platform, StatusBar } from 'react-native';

type PropsMetrics = {
  insets: {
    bottom: number;
  };
};

export const heightModal = ({ insets }: PropsMetrics) => {
  if (insets.bottom === 0 && Platform.OS === 'ios') {
    return 34.2;
  }
  if (Platform.OS === 'ios' && insets.bottom > 0) {
    return 30;
  }
  return 35;
};

export const heightSafeArea = ({ insets }: PropsMetrics) => {
  if (Platform.OS === 'ios') {
    if (insets.bottom === 0) {
      return 65;
    }
    return 65 + insets.bottom;
  }
  return 60;
};

export const heightLoginWebview = ({ insets }: PropsMetrics) => {
  if (insets.bottom === 0 && Platform.OS === 'ios') {
    return 55;
  }
  if (Platform.OS === 'ios' && insets.bottom > 0) {
    return 70;
  }
  if (StatusBar.currentHeight !== undefined) {
    return StatusBar.currentHeight + 15;
  }
  return 45;
};

export const heightTabTutorial = ({ insets }: PropsMetrics) => {
  if (Platform.OS === 'ios' && insets.bottom > 0) {
    return 80;
  }
  return 71;
};

export const heightModalCancel = ({ insets }: PropsMetrics) => {
  if (insets.bottom === 0 && Platform.OS === 'ios') {
    return 39;
  }
  if (Platform.OS === 'ios' && insets.bottom > 0) {
    return 33;
  }
  return 39;
};

export const heightModalCancelAcessibility = ({ insets }: PropsMetrics) => {
  if (insets.bottom === 0 && Platform.OS === 'ios') {
    return 55;
  }
  if (Platform.OS === 'ios' && insets.bottom > 0) {
    return 40;
  }
  return 55;
};

export const heightModalSuccess = ({ insets }: PropsMetrics) => {
  if (insets.bottom === 0 && Platform.OS === 'ios') {
    return 25;
  }
  if (Platform.OS === 'ios' && insets.bottom > 0) {
    return 21;
  }
  if (Platform.OS === 'android' && insets.bottom > 0) {
    return 21;
  }
  return 25;
};

export const heightModalAlertSuccess = ({ insets }: PropsMetrics) => {
  if (insets.bottom === 0 && Platform.OS === 'ios') {
    return 33;
  }
  if (Platform.OS === 'ios' && insets.bottom > 0) {
    return 28;
  }
  if (Platform.OS === 'android' && insets.bottom > 0) {
    return 28;
  }
  return 34;
};

export const heightModalDelete = ({ insets }: PropsMetrics) => {
  if (insets.bottom === 0 && Platform.OS === 'ios') {
    return 21;
  }
  if (Platform.OS === 'ios' && insets.bottom > 0) {
    return 19.5;
  }
  if (Platform.OS === 'android' && insets.bottom > 0) {
    return 19.5;
  }
  return 21;
};

export const heightModalAlertCheck = ({ insets }: PropsMetrics) => {
  if (insets.bottom === 0 && Platform.OS === 'ios') {
    return 45;
  }
  if (Platform.OS === 'ios' && insets.bottom > 0) {
    return 40;
  }
  if (Platform.OS === 'android' && insets.bottom > 0) {
    return 40;
  }
  return 49;
};

export const heightModalOptionsAlert = ({ insets }: PropsMetrics) => {
  if (insets.bottom === 0 && Platform.OS === 'ios') {
    return 40;
  }
  if (Platform.OS === 'ios' && insets.bottom > 0) {
    return 34;
  }
  if (Platform.OS === 'android' && insets.bottom > 0) {
    return 34;
  }
  return 40;
};
