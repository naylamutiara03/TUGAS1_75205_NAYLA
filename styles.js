import { StyleSheet } from "react-native";

// Styles untuk komponen email & floating button
const styles = StyleSheet.create({
    emailItem: {
      flexDirection: 'row',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#333',
    },
    leftContainer: {
      marginRight: 10,
    },
    middleContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    rightContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    emailSender: {
      color: 'black', 
      fontWeight: 'bold',
    },
    emailSubject: {
      color: 'black', 
      fontSize: 16,
    },
    emailSnippet: {
      color: 'black', 
      marginTop: 5,
    },
    emailTime: {
      color: '#999',
    },
    attachmentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    attachmentText: {
      color: 'black', 
      marginLeft: 5,
    },
    floatingButton: {
      position: 'absolute',
      right: 20,
      bottom: 80, 
      backgroundColor: 'white',
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    floatingButtonText: {
      color: 'red',
      marginLeft: 5,
    },
  });

export default styles;