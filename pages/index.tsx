import type { GetStaticPropsContext } from 'next';
import { allPosts } from '.contentlayer/data';

import Layout from '@components/Layout';
import { css } from 'stitches.config';
import { sortPosts } from '@lib/helpers';
import FeaturedPosts from '@components/FeaturedPosts';
import HomeEntry from '@components/HomeEntry';
import data from '../content/data/home';
import FeaturedWorks from '@components/FeaturedWorks';
import FreelanceCTA from '@components/FreelanceCTA';
import Head from '@components/Head';
import { NAME } from '@lib/constants';

const Home = ({ featuredPosts, about, socials, work }) => {
  return (
    <div>
      <Head
        title={NAME}
        description="Hi, I'm Idir Hamouch. I’m a self-taught full-stack javaScript developer, I am passionate about building things for the web using newest technologies."
      />
      <Layout>
        <HomeEntry about={about} socials={socials} />
        <FeaturedPosts posts={featuredPosts} />
        <FeaturedWorks work={work} />
        <FreelanceCTA />
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const filtered = allPosts.sort(sortPosts).slice(0, 3);

  return {
    props: {
      featuredPosts: filtered,
      about: data.about,
      socials: data.socials,
      work: data.work,
    },
  };
};
// 2017-07-15
// 2017-07-15
// 2021-09-06

export default Home;
