import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import imageAsset from './/public/me.jpg'

export default function Page() {
  return (
    <section>
      <section className="flex flex-row space-x-5">
        <div className="group w-60 h-60 rounded-full overflow-hidden flex justify-center items-center border-5 border-rose-200">
          <Image src={imageAsset} alt={"Me"} className="shrink-0 min-w-full min-h-full object-cover group-hover:opacity-45"/>
          <div className="invisible absolute font-semibold group-hover:visible">i take photos! :D</div>
        </div>
        <h1>HELLO</h1>
          <h1 className="self-end mb-8 text-2xl font-semibold tracking-tighter">
          Hello World,
          <br></br>
          it's <a className="inline-flex text-rose-300 hover:underline-offset-8 hover:text-rose-200" href='/'>Jewel</a> here! (:
          </h1>
      </section>
      <br></br>
      <p className="mb-4">
        {`dedicated to finding solutions to systemic problems in our society, and to create an impact greater than myself.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
