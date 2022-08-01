import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Newtron</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-4 flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="">
            Newtron
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Stay productive by using chrome new tab
        </p>
        <div className='mx-5'>
          <a href='https://github.com/abura1han/Newtron-extension' className='inline-block px-4 py-3 bg-[#0D1117] text-white font-bold rounded mt-6 mr-5'>Github</a>
          <a href='https://github.com/abura1han/Newtron-extension/releases/download/LTS/Newtron1.0.zip' className='inline-block px-4 py-3 bg-blue-600 text-white font-bold rounded mt-6'>Download</a>
        </div>
        <div className='mt-10'>
          <img src={'./screenshot1.png'} alt='newtron' className='block mx-auto max-w-[800px] rounded' />
        </div>
        <div className='mt-10'>
          <img src={'./screenshot1.png'} alt='newtron' className='block mx-auto max-w-[800px] rounded' />
        </div>

        
      </main>

      <footer className="mt-8 flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2 mx-8"
          href="https://planetscale.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PlanetScale{' '}
          <img src="./planetscale.svg" alt="Planetscale Logo" width={40} height={40} className='rounded-full' />
        </a>
        <a
          className="flex items-center justify-center gap-2 mx-8"
          href="https://hashnode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hashnode{' '}
          <img src="./hashnode.svg" alt="Hashnode Logo" width={40} height={40} className='rounded-full' />
        </a>
        <a
          className="flex items-center justify-center gap-2 mx-8"
          href="https://github.com/abura1han"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <Image src="https://avatars.githubusercontent.com/u/74248037?v=4" alt="Vercel Logo" width={40} height={40} className='rounded-full' />
        </a>
      </footer>
    </div>
  )
}

export default Home
