import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
<<<<<<< HEAD
import Billboard from '../components/billboard';
=======
>>>>>>> 9fe2a714906a74f0eafcc22592c4dffe7435383d
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import Nav from '../components/nav';
import {navLinks} from '../lib/constants';
<<<<<<< HEAD
import avatar from '../public/assets/avatar.png';
import Image from 'next/image';

=======
>>>>>>> 9fe2a714906a74f0eafcc22592c4dffe7435383d

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
//   const heroPost = allPosts[0]
//   const morePosts = allPosts.slice(1);
const posts = allPosts;
  return (
    <>
<<<<<<< HEAD
    <div>
      <Image src={avatar}/>
    </div>
      <section style={{background: "#000",height:"100vh",width:"100vw", position:"relative",zIndex:"1",color:"#fff",display:"flex",paddingTop: "12.9166666667vw",paddingLeft: "17.2395833333vw"}}>
        <Billboard
          primaryTitle='Hi, my name is Jonny'
          stringTitle='front-end developer / interaction designer'
          description='I enjoy building products that are simple to use, fusing the best of design principles and the least lines of code. Currently managing a skilled mobile engineering team at MultiChoice.'
          url="https://www.multichoice.com"
      />
      </section>
      </>
    // <> 
=======
      <h1> Hi, I’m Jonny. </h1>
      <h2> Almost before we knew it , we had already left the ground</h2>
      <h3> Almost before we knew it , we had already left the ground</h3>
      <h4> Almost before we knew it , we had already left the ground</h4>
    </>
    // <>
>>>>>>> 9fe2a714906a74f0eafcc22592c4dffe7435383d
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
