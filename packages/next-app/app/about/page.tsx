'use client';

import { useState, useEffect } from 'react';
import axios from "axios";
import Link from 'next/link'

function useAbout() {
  const [clientData, setClientData] = useState('');
  const getClientData = async () => {
    try {
      const res = await axios.get('https://suggest.taobao.com/sug?code=utf-8&q=汽车&callback=cb');
      debugger
      setClientData(res.data)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    // getClientData()
  }, [])

  return {
    clientData
  }
}

export default async function About() {
  const { clientData } = useAbout();
  console.log('About 执行', clientData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <span> about </span>
        </p>
        <div> <Link href='/'> 回到首页 </Link> </div>

        <div>客户端获取数据</div>
        <div>{ clientData }</div>
      </div>
    </main>
  )
}
