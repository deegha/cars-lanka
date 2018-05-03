
import Alert from 'react-s-alert';

export const Notifications = (type, message) => {
   
    switch (type) {
        case 'info':
            Alert.info(message, {
                position: 'top-right',
                effect: 'scale',
                beep: false,
                offset: 100
            });
          break;
        case 'success':
            Alert.success(message, {
                position: 'top-right',
                effect: 'scale',
                beep: false,
                offset: 100
            });
          break;
        case 'warning':
            Alert.warning(message, {
                position: 'top-right',
                effect: 'scale',
                beep: false,
                offset: 100
            });
          break;
        case 'error':
            Alert.error(message, {
                position: 'top-right',
                effect: 'scale',
                beep: false,
                offset: 100
            });
          break;
      }
}