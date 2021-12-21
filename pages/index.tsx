import type { GetStaticPropsContext } from 'next';
import { allPosts } from '.contentlayer/data';
import Layout from '@components/Layout';
import { sizeLogger, sortPosts } from '@lib/helpers';
import FeaturedPosts from '@components/FeaturedPosts';
import HomeEntry from '@components/HomeEntry';
import data from '../content/data/home';
import FeaturedWorks from '@components/FeaturedWorks';
import FreelanceCTA from '@components/FreelanceCTA';
import Head from '@components/Head';
import { NAME } from '@lib/constants';

const Home = ({ featuredPosts, about, socials, work, open }) => {
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
        {open && <FreelanceCTA />}
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const filter = ({ title, slug, publishedAt }) => {
    return { title, slug, publishedAt };
  };
  const posts = allPosts.sort(sortPosts).slice(0, 3).map(filter);

  //sizeLogger(posts);

  return {
    props: {
      featuredPosts: posts,
      about: data.about,
      socials: data.socials,
      work: data.work,
      open: data.open,
    },
  };
};

export default Home;
