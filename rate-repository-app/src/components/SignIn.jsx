import Text from './Text'
import { useNavigate } from 'react-router-native';
import { TextInput, Pressable, View, StyleSheet } from 'react-native'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import { LOGIN } from '../../mutations';
import useAuthStorage from '../hooks/useAuthStorage';



const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username must be at least 5 characters')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Password must be at least 5 characters')
        .required('Password is required')
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
        
    },
    inputError: {
        borderColor: 'red'
    },
    button: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#0366d6'
    },
    signInText: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ErrorMessage: {
        color: 'red'
    }
})


const SigninForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });
    
   
    return (
        <View style={styles.container}>
            <TextInput
                style={formik.touched.username && formik.errors.username ? {...styles.input, borderColor: 'red'} : styles.input}
                placeholder='username'
                value={formik.values.username}
                onChangeText={formik.handleChange('username')}
            />
            {formik.touched.username && formik.errors.username && (
                <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
            )}
            <TextInput
                style={formik.touched.username && formik.errors.username ? {...styles.input, borderColor: 'red'} : styles.input}
                placeholder='password'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
            />
            {formik.touched.password && formik.errors.password && (
                <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
            )}
            <Pressable 
                style={styles.button}
                onPress={formik.handleSubmit}>
                <Text color='language' style={styles.signInText}>Sign in</Text>
            </Pressable>    
        </View>
    )
}

const useSignIn = () => {
    
    const [mutate, result] = useMutation(LOGIN);

    const signIn = async ({ username, password }) => {
        
        try {
            const { data } = await mutate({
                variables: {
                    credentials: {
                        username: username,
                        password: password
                    }
                }
            });
            return data;
        } catch (error) {
            console.error('Error signing in:', error)
        }
    }

    return [signIn, result];
}


const SignIn = ({ refetch }) => {
    const navigate = useNavigate();
    const authStorage = useAuthStorage();
    const [signIn, { data }] = useSignIn();
    const apolloClient = useApolloClient();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            await signIn({ username, password });
            if (data) {
                console.log(data.authenticate.accessToken)
                await authStorage.setAccessToken(data.authenticate.accessToken);
                apolloClient.resetStore();
                refetch();
                navigate('/');
            }
        } catch (error) {
            console.log('the error is here', error)
        }
    }

    return (
        <View>
            <SigninForm onSubmit={onSubmit}/>
        </View>
    ); 
};

export default SignIn;