import type { GetStaticProps, NextPage } from "next";
import { Api, Article, Category } from "../../typings/api";
import Head from "next/head";

const client = new Api();

const ArticlePage: NextPage<{ article: Article; categories: Category}> = ({
    article, categories
}) => {
    return(
        <><Head></Head></>
    )
}

export async function GetStaticPaths() {
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