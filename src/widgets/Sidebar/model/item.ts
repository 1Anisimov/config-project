import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
// Icons
import AboutIcon from 'shared/assets/icons/about_icon.svg';
import MainIcon from 'shared/assets/icons/home_icon.svg';
import ProfileIcon from 'shared/assets/icons/profile_icon.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
    },
];
