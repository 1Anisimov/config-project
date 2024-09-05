import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.image} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
};
