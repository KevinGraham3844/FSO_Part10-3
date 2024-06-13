import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import { Link, useNavigate } from 'react-router-native';
//import useMeQuery from '../hooks/useMeQuery';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';



const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    paddingBottom: 20,
    marginBottom: 12,
    paddingLeft: 6
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    rowGap: 10
  }
});

const AppBar = ({ user, refetch }) => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  
  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/')
    refetch();
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
        <Text fontWeight="bold" fontSize="subheading" color="appHeader">
            Repositories
        </Text>
        {user.me === null && (
          <Link to="/signin">
            <Text fontSize="subheading" color="appHeader">Sign-in</Text>
          </Link>
        )}
        {user.me !== null && (
          <Pressable onPress={signOut}>
            <Text fontSize="subheading" color="appHeader">Sign-out</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  )
};

export default AppBar;