import { articleDetailsReducer } from './articleDetailsSlice';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article, ArticleBlockType, ArticleType } from '../types/article';

const data: Article = {
    id: '1',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://i.pinimg.com/736x/a6/07/ed/a607ed16ab5479d95c7df913be51dde8.jpg',
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
        {
            id: '4',
            type: ArticleBlockType.IMAGE,
            title: 'Рисунок 1',
            src: 'https://habrastorage.org/r/w1560/getpro/habr/post_images/757/2da/ce9/7572dace9bf67861dcdc2f9539c0810d.png',

        },
        {
            id: '5',
            type: ArticleBlockType.CODE,
            code:
            "<!DOCTYPE html>\n  <html>\n   <body>\n     <p id='hello'></p>      \n     <script>\n       document.getElementById('hello').\n       innerHTML = 'Hello, world!';\n     </script>\n   </body>\n</html>",
        },
        {
            id: '6',
            type: ArticleBlockType.TEXT,
            title: 'JavaScript - это:',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о    браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',

                'Для того чтобы её написать, если вы пользуетесь Google Chrome, откройте меню браузера и выберите в нём команду Дополнительные инструменты > Инструменты разработчика. Окно браузера окажется разделённым на две части. В одной из них будет видна страница, в другой откроется панель с инструментами разработчика, содержащая несколько закладок. Нас интересует закладка Console (Консоль). Щёлкните по ней.',
            ],
        },
        {
            id: '7',
            type: ArticleBlockType.IMAGE,
            title: 'Рисунок 2',
            src: 'https://habrastorage.org/r/w1560/getpro/habr/post_images/757/2da/ce9/7572dace9bf67861dcdc2f9539c0810d.png',

        },
        {
            id: '8',
            type: ArticleBlockType.TEXT,
            title: 'Вывод сообщения в окне',
            paragraphs: [
                'Обратите внимание на то, что панель инструментов разработчика расположена теперь в нижней части экрана. Менять её расположение можно, воспользовавшись меню с тремя точками в её заголовке и выбирая соответствующую пиктограмму. Там же можно найти и кнопку для закрытия этой панели.',

                'Инструменты разработчика, и, в том числе, консоль, имеются и в других браузерах. Консоль хороша тем, что она, когда вы пользуетесь браузером, всегда под рукой.',
            ],
        },
    ],
};

describe('profileSlice.test', () => {
    test('set isLoading artical service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toEqual({
            isLoading: true,
        });
    });

    test('set isLoading profile service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: undefined,
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(data, '', ''))).toEqual({
            isLoading: false,
            data,
        });
    });

    test('set isLoading profile service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: undefined,
            error: undefined,
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.rejected)).toEqual({
            isLoading: false,
            data: undefined,
        });
    });
});