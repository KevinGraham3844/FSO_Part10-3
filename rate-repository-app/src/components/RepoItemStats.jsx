import { View, StyleSheet } from 'react-native'
import Text from './Text';


const styles = StyleSheet.create({
    flexProfileStats: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        paddingBottom: 15
        
    },
    flexProfileStatItems: {
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center'
        
    }
})

const RepoItemStats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
    return (
        <View style={styles.flexProfileStats}>
            <View style={styles.flexProfileStatItems}>
                <Text fontWeight='bold' textAlign='alignStats'>{(stargazersCount/1000).toFixed(1)}k</Text>
                <Text textAlign='alignStats'>Stars</Text>
            </View>
            <View style={styles.flexProfileStatItems}>
                <Text fontWeight='bold' textAlign='alignStats'>{(forksCount/1000).toFixed(1)}k</Text>
                <Text textAlign='alignStats'>Forks</Text>
            </View>
            <View style={styles.flexProfileStatItems}>
                <Text fontWeight='bold' textAlign='alignStats'>{reviewCount}</Text>
                <Text textAlign='alignStats'>Reviews</Text>
            </View>
            <View style={styles.flexProfileStatItems}>
                <Text fontWeight='bold' textAlign='alignStats'>{ratingAverage}</Text>
                <Text textAlign='alignStats'>Rating</Text>
            </View>
        </View>
    )
}

export default RepoItemStats;