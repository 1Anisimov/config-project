import { DropdownDirection } from '../../../types/ui';

import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    top_left: cls.optionsTopLeft,
    bottom_left: cls.optionsBottomLeft,
    top_right: cls.optionsTopRight,
    bottom_right: cls.optionsBottomRight,
};
