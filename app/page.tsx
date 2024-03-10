import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Jenvyxu
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/jenvyxu"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/github.svg"
              alt="Github"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
            Github
          </a>
        </div>
      </div>

      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="font-lg font-bold text-6xl mb-8 ">I &apos; m Jenvyxu</h1>
        <div className="flex flex-col items-center">
          <p className="mb-2">一名全栈开发工程师</p>
          <p className="mb-2">擅长 JS / TS 全栈开发</p>
          <p className="mb-2">熟练使用 React 和 Vue 技术栈</p>
          <p className="mb-2">有丰富的页面性能优化经验</p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:cursor-pointer"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            前端开发
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <ul>
              <li>React 技术栈</li>
              <li>Vue 技术栈</li>
              <li>前端工程化</li>
            </ul>
          </div>
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:cursor-pointer"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Nodejs后端开发
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <ul>
              <li>Eggjs</li>
              <li>Express</li>
              <li>Koa</li>
            </ul>
          </div>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:cursor-pointer"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            前端工程化
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <ul>
              <li>Webpack</li>
              <li>Vite</li>
              <li>Rollup</li>
            </ul>
          </div>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:cursor-pointer"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            React 和 Vue
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <div className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            <ul>
              <li>React、Redux、React-router</li>
              <li>Vue、Vuex、Vue-router、Pinia</li>
              <li>Element ui、Ant Design</li>
            </ul>
          </div>
        </a>
      </div>
    </main>
  );
}
