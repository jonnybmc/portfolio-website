import Avatar from './avatar'
import DateFormatter from './data-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
<<<<<<< HEAD
// import Author from '../types/author'
=======
import Author from '../types/author'
>>>>>>> 9fe2a714906a74f0eafcc22592c4dffe7435383d

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
<<<<<<< HEAD
  author: any
=======
  author: Author
>>>>>>> 9fe2a714906a74f0eafcc22592c4dffe7435383d
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      {/* <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div> */}
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
    </section>
  )
}

export default HeroPost
