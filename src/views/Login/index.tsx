import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import styles from './styles.module.scss'
import ButtonCustom from '../../components/Button';

interface ILoginForm {
    username: string;
    password: string;
}

const Login = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<ILoginForm>();

    const onSubmit: SubmitHandler<ILoginForm> = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
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
                        />
                    )}
                />
            </div>
            <div>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Password is required',
                        minLength: { value: 6, message: 'Password must be at least 6 characters' },
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                            message: 'Password must contain both letters and numbers'
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Password"
                            type="password"
                            variant="outlined"
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : ''}
                        />
                    )}
                />
            </div>
            <ButtonCustom label='Login'/>
        </form>
    );
};

export default Login;
