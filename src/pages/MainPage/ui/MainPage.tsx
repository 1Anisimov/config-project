import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
