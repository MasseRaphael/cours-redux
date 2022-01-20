import type { GetStaticProps, NextPage } from "next";
import { Api, Article, Category } from "../../typings/api";
import Head from "next/head";
import ArticleRenderer from "../../components/articleRenderer";

const client = new Api();

const ArticlePage: NextPage<{ article: Article; categories: Category}> = ({
    article, categories
}) => {
    return(
        <>
            <Head>
                <title>{article.seo.metaTitle}</title>
                <meta name='title' content={article.seo?.metaTitle} />
            </Head>
            <ArticleRenderer article={article} />
        </>
    )
}

export async function getStaticPaths() {
    const { data: pages } = await client.articles.articlesList();

    const paths = pages.map((article) => ({
        params: {
            slug: article.slug,
        },
    }));
    return {
        paths,
        fallback: "blocking",
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params!.slug! as string;

    try {
        const { data: article } = await client.articles.articlesDetail(slug);
        const { data: categories } = await client.categories.categoriesList();
        return {
            props: {
                article, categories
            },
            revalidate: 60,
        };
    }catch (e){
        return {
            notFound: true,
        };
    }
};

export default ArticlePage;