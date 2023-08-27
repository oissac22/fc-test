import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HeadHTML } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeadHTML title='' />
      <div>
        Hello world
      </div>
    </>
  )
}
