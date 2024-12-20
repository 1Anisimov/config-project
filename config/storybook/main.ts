import path from 'path';

import { Configuration, DefinePlugin } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config: Configuration) => {
        const paths: BuildPaths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };

        if (config.resolve?.modules) {
            config.resolve?.modules.push(paths.src);
        }
        if (config.resolve?.extensions) {
            config.resolve?.extensions.push('.ts', '.tsx');
        }
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };
        // config.resolve.modules = [
        //     path.resolve(__dirname, '../../src'),
        //     'node_modules',
        // ];

        // eslint-disable-next-line no-param-reassign
        if (config.module?.rules) {
            // @ts-ignore
            config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            });

            config.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            });
            config.module.rules.push(buildCssLoader(true));

            config.plugins?.push(new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('https://testapi.ru'),
                __PROJECT__: JSON.stringify('storybook'),
            }));
        }

        return config;
    },
};
