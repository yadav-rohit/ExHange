import Head from 'next/head';
import Header from '../Components/Header';
import Main from '../Components/Main';
const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#1c0000] text-[#FF0000] select-none flex flex-col justify-between content-center`,
}
export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header/>
      <Main />
      <h1>ExHange</h1>
    </div>
  )
}
