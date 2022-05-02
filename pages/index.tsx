import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import Nav from '../components/nav';
import {navLinks} from '../lib/constants';

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
//   const heroPost = allPosts[0]
//   const morePosts = allPosts.slice(1);
const posts = allPosts;
  return (
    <>
      <h1> Hi, I’m Jonny. </h1>
      <h2> Almost before we knew it , we had already left the ground</h2>
      <h3> Almost before we knew it , we had already left the ground</h3>
      <h4> Almost before we knew it , we had already left the ground</h4>
    </>
    // <>
    //   <Layout>
    //     <Head>
    //       <title>Next.js Blog Example with {CMS_NAME}</title>
    //     </Head>
    //     <Container>
    //       <Intro /> 
    //       {/* {heroPost && (
    //         <HeroPost
    //           title={heroPost.title}
    //           coverImage={heroPost.coverImage}
    //           date={heroPost.date}
    //           author={heroPost.author}
    //           slug={heroPost.slug}
    //           excerpt={heroPost.excerpt}
    //         />
    //       )} */}
    //       {posts.length > 0 && <MoreStories posts={posts} />}
    //     </Container>
    //   </Layout>
    // </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
