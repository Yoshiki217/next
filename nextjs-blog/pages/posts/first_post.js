import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
  const image = {
    src: '/images/IMG_0374.jpg',
    width: 144,
    height: 144,
  }

  return (
    <>
      <h1>First Post</h1>
      <Image src={image.src} width={image.width} height={image.height} />
      <Link href="/">
        <>Back to home</>
      </Link>
    </>
  )
}