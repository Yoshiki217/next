import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

export default function FirstPost() {
  const image = {
    src: '/images/IMG_0374.jpg',
    width: 144,
    height: 144,
  }

  return (
    <>
    <Head>
      <title>First Post</title>
    </Head>
    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <Image src={image.src} width={image.width} height={image.height} />
      <Link href="/">
        <>Back to home</>
        a
      </Link>
    </>
  )
}