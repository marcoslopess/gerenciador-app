import {
  ANDROID_LINK_STORE_FIND_DEVICE,
  IOS_LINK_STORE_FIND_DEVICE
} from '@constants/link';
import { Linking, Platform } from 'react-native';

export function handlerClickOpenBrowser(url: string) {
  return Linking.openURL(url).catch((err) =>
    console.error('Error Open Link', err)
  );
}

export function handlerClickOpenStoreThief() {
  const url =
    Platform.OS === 'ios'
      ? IOS_LINK_STORE_FIND_DEVICE
      : ANDROID_LINK_STORE_FIND_DEVICE;

  return Linking.openURL(url).catch((err) =>
    console.error('Error Open Link', err)
  );
}

export const ON_LINK_TERMS_PDF = {
  uri: 'https://celularseguro.blob.core.windows.net/termo/termos.pdf',
  cached: true
};
