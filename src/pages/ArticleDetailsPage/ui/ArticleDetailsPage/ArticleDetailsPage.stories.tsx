import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';

import { Article, ArticleBlockType, ArticleType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

const articleData: Article = {
    id: '1',
    user: {
        id: '1',
        username: 'admin',
    },
    title: 'JavaScript news',
    subtitle: 'Что нового в JavaScript в 2022 году?',
    img: 'https://i.pinimg.com/originals/2a/e1/8a/2ae18a66f89f1dc3fff96203288fcb64.png',
    views: 1022,
    createdAt: '04.09.2024',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'JavaScript - это:',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о    браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',

                'Для того чтобы её написать, если вы пользуетесь Google Chrome, откройте меню браузера и выберите в нём команду Дополнительные инструменты > Инструменты разработчика. Окно браузера окажется разделённым на две части. В одной из них будет видна страница, в другой откроется панель с инструментами разработчика, содержащая несколько закладок. Нас интересует закладка Console (Консоль). Щёлкните по ней.',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.CODE,
            code:
            "<!DOCTYPE html>\n  <html>\n   <body>\n     <p id='hello'></p>      \n     <script>\n       document.getElementById('hello').\n       innerHTML = 'Hello, world!';\n     </script>\n   </body>\n</html>",
        },
        {
            id: '3',
            type: ArticleBlockType.TEXT,
            title: 'Вывод сообщения в окне',
            paragraphs: [
                'Обратите внимание на то, что панель инструментов разработчика расположена теперь в нижней части экрана. Менять её расположение можно, воспользовавшись меню с тремя точками в её заголовке и выбирая соответствующую пиктограмму. Там же можно найти и кнопку для закрытия этой панели.',

                'Инструменты разработчика, и, в том числе, консоль, имеются и в других браузерах. Консоль хороша тем, что она, когда вы пользуетесь браузером, всегда под рукой.',
            ],
        },
    ],
};

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [StoreDecorator({
    articleDetailsPage: {

    },
    articleDetails: {
        data: articleData,
    },
    scrollSave: {
        scroll: {},
    },
})];

export const LightIsLoading = Template.bind({});
LightIsLoading.args = {
};
LightIsLoading.decorators = [StoreDecorator({

    articleDetails: {
        isLoading: true,
        data: articleData,
    },
    scrollSave: {
        scroll: {},
    },
})];

export const LightIsError = Template.bind({});
LightIsError.args = {};
LightIsError.decorators = [StoreDecorator({
    articleDetails: {
        error: 'error',
        data: articleData,
    },
    scrollSave: {
        scroll: {},
    },
})];
