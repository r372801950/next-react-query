import ClientTimer from "@/app/setInterval/client-timer";

export default function Page() {
  // 创建一个日期对象，在服务端渲染时使用
  const timer = new Date();

  console.log("服务端页面服务端渲染时间:", timer.getTime().toString());

  return (
    <div>
      <h1>水合不匹配(Hydration Mismatch)演示</h1>

      {/*
        当这个组件在客户端水合时，ClientTimer会收到一个新的Date对象
        它的值会与服务端渲染时的不同，导致水合不匹配
      */}
      <ClientTimer timer={timer} />

      {/* 这也会导致水合不匹配 */}
      {/*<p>页面随机数: {Math.random()}</p>*/}
    </div>
  );
}