import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('loginError')} theme={TextTheme.ERROR} />}
            <Input
                onChange={onChangeUserName}
                autoFocus
                placeholder={t('Login')}
                className={cls.input}
                type="text"
                value={username}
            />
            <Input
                onChange={onChangePassword}
                placeholder={t('Password')}
                className={cls.input}
                type="text"
                value={password}
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                theme={ButtonTheme.OUTLINE}
                className={cls.button}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
