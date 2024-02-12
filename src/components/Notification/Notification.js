import { useEffect } from 'react';
import { toast } from 'react-toastify';

const showToastMessage = () => {
  toast.success("Your Zoom Activity starts in 10 minutes. Please Join Now.", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const Notification = ({ startTime }) => {
  useEffect(() => {
    const timeUntilActivityStarts = startTime - Date.now(); // Calculate time until activity starts
    const tenMinutesInMillis = 10 * 60 * 1000; // 10 minutes in milliseconds

    if (timeUntilActivityStarts > tenMinutesInMillis) {
      // If there's more than 10 minutes until the activity starts, schedule the notification
      const notificationTimeout = setTimeout(showToastMessage, timeUntilActivityStarts - tenMinutesInMillis);
      
      // Cleanup function to clear the timeout if component unmounts or the activity starts before 10 minutes
      return () => clearTimeout(notificationTimeout);
    }
  }, [startTime]);

  return null; // No need to render anything in this component
};

export default Notification;