import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '../../assets/icons/star.svg';
import { Icon } from '../Icon/Icon';
import { HStack } from '../Stack';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        onSelect,
        size = 30,
        selectedStars = 0,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <HStack gap="4" className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((star) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        { [cls.isSelected]: isSelected },
                        [currentStarsCount >= star ? cls.hovered : cls.normal],
                    )}
                    Svg={StarIcon}
                    key={star}
                    width={size}
                    height={size}
                    onMouseEnter={onHover(star)}
                    onMouseLeave={onLeave}
                    onClick={onClick(star)}
                />
            ))}
        </HStack>
    );
});
