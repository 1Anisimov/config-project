import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input autoFocus placeholder={t('Login')} className={cls.input} type="text" />
            <Input placeholder={t('Password')} className={cls.input} type="text" />
            <Button className={cls.button}>
                {t('Войти')}
            </Button>
        </div>
    );
};
