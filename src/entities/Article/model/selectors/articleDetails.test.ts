import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';
import { ArticleBlockType, ArticleType } from '../../model/consts/articleConsts';

describe('articleDetails.test', () => {
    test('should work with data', async () => {
        const articles = {
            id: '1',
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
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: articles,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(articles);
    });

    test('should work with data: undefined', async () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    // ERROR

    test('should work with data: error', async () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('Error undefined', async () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });

    // LOADING

    test('should work with data: loading', async () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('IsLoading undefined', async () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});
