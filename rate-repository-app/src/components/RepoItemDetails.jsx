import { View, Image, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        margin: 10
    },
    flexProfile: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexProfileItems: {
        flexDirection: 'column',
    },
    languageBackground: {
        backgroundColor: '#0366d6',
        width: 75,
        borderRadius: 3,
        textAlign: 'center'
    },
});


const RepoItemDetails = ({ fullName, language, description, ownerAvatarUrl }) => {
    return (
        <View style={styles.flexProfile}>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: ownerAvatarUrl
                        }} 
                    />
                </View>
                <View style={styles.flexProfileItems}>
                    <Text fontWeight='bold' >{fullName}</Text>
                    <Text>{description}</Text>
                    <Text color='language' style={styles.languageBackground}>{language}</Text>
                </View>
            </View>
    )
}

export default RepoItemDetails