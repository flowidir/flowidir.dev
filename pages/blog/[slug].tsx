import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { components } from 'Components/MDXComponents';
import { allPosts } from '.contentlayer/data';
import type { NextPage } from 'next';
import { ISinglePostProps } from 'global';
import { IParams } from 'global';
import Layout from 'Components/Layout';
import { blogWrapper, wrapper } from '@styles/common';
import ArticleHeader from 'Components/ArticleHeader';
import Head from 'Components/Head';
import { NAME } from '@lib/constants';

const PostBySlug: NextPage<ISinglePostProps> = ({ post: { body, ...frontMatter } }) => {
  const Component = useMemo(() => getMDXComponent(body.code), [body.code]);

  return (
    <Layout>
      <article className={blogWrapper({})}>
        <ArticleHeader post={frontMatter} />
        <Component components={components as any} />
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params: { slug } }: IParams) {
  const post = allPosts.find((post) => post.slug === slug);
  return { props: { post } };
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export default PostBySlug;
