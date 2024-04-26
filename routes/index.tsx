import { useEffect, useState } from 'preact/hooks';
import CountdownTimer from '../islands/CountdownTimer.tsx';
import { Head } from '$fresh/runtime.ts';

export default function Home() {

 return (
  <>
    <Head>
      <title>End of School Counter</title>
    </Head>
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="h-screen max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="pb-3 text-4xl font-bold">End of School Timer</h1>
        <CountdownTimer />
        <code>until June 7th, 2024, 1:20 PM</code>
      </div>
    </div>
  </>
 );
}
