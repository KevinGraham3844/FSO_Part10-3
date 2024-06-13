import { View, StyleSheet } from 'react-native'
import RepoItemDetails from './RepoItemDetails';
import RepoItemStats from './RepoItemStats';

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: 'white'
    }
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.mainCard}>
            <RepoItemDetails 
                fullName={item.fullName}
                language={item.language}
                description={item.description}
                ownerAvatarUrl={item.ownerAvatarUrl} 
            />
            <RepoItemStats
                stargazersCount={item.stargazersCount}
                forksCount={item.forksCount}
                reviewCount={item.reviewCount}
                ratingAverage={item.ratingAverage}
            />
        </View>
    );
};

export default RepositoryItem;