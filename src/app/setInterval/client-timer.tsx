'use client';


interface ClientTimerProps{
  timer:Date
}

export default function ClientTimer ({timer}:ClientTimerProps) {

  return (
    // 水合不一致
    // <div>{new Date().getTime().toString()}</div>
    <div>{timer.getTime().toString()}</div>
  )
}