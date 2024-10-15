import { ArticleDetailsPageAsync } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export {
    ArticleDetailsPageAsync as ArticleDetailsPage,
};
export type { ArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentsSchema';

export type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsPageRecommendationsSchema';

export type { ArticleDetailsPageSchema } from './model/types/index';

export { articleDetailsPageReducer } from './model/slice/index';
