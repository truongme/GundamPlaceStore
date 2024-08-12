import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'; 
import ButtonCustom from '../../components/Button';
import { List_User } from '../../data';
import { useNavigate } from 'react-router-dom';

interface ILoginForm {
    username: string;
    password: string;
}

const Login = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<ILoginForm>();
    const [loginError, setLoginError] = useState<string | null>(null);
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<ILoginForm> = data => {
        const user = List_User.find(user => user.username === data.username && user.password === data.password);
        if (user) {
            navigate('/')
        } else {
            setLoginError('Invalid username or password'); 
        }
    };

    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            height="100vh" 
            sx={{ 
                backgroundColor: '#f5f5f5' 
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Box mb={2}>
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Username is required' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Username"
                                variant="outlined"
                                error={!!errors.username}
                                helperText={errors.username ? errors.username.message : ''}
                                fullWidth
                            />
                        )}
                    />
                </Box>
                <Box mb={2}>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Password is required' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Password"
                                type="password"
                                variant="outlined"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ''}
                                fullWidth
                            />
                        )}
                    />
                </Box>
                {loginError && (
                    <Box mb={2}>
                        <TextField
                            value={loginError}
                            error
                            fullWidth
                            variant="outlined"
                            InputProps={{ readOnly: true }}
                            sx={{ bgcolor: '#fdd', border: '1px solid #f00' }}
                        />
                    </Box>
                )}
                <ButtonCustom label='Login'/>
            </form>
        </Box>
    );
};

export default Login;
