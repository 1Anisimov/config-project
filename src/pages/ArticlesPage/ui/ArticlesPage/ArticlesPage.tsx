import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');

    return (
        <div className={classNames('', {}, [className])}>
            {t('Article page')}

        </div>
    );
};

export default memo(ArticlesPage);
