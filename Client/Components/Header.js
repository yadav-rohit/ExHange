import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ethlogo from '../assets/eth.png'
import applogo from '../assets/applogo.png'
import ethcrncy from '../assets/ethCurrency.png'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const style = {
  wrapper: `p-4 w-screen flex justify-between items-center`,
  headlogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center `,
  navItemContainers: `flex p-1 bg-[#3D0000] rounded-3xl`,
  navItem: `px-5 py-2 flex items-center font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activenavItem: `bg-[#950101]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center text-[0.9rem] font-semibold rounded-2xl mx-2 bg-[#3D0000] cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex justify-center items-center w-8`,
  buttonAccent: `bg-[#370665] border border-[#370665] hover:border-[#D77FA1] h-full rounded-2xl flex items-center justify-center text-[#ebbfff]`,
}
function Header() {
  const [activenav, setActive] = useState('pool')
  return (
    <div className={style.wrapper}>
      <div className={style.headlogo}>
        <Image src={applogo} alt="Exhange Logo" height={60} width={60}></Image>
      </div>
      <div className={style.nav}>
        <div className={style.navItemContainers}>
          <div
            onClick={() => setActive('swap')}
            className={`${style.navItem} ${
              activenav === 'swap' && style.activenavItem
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setActive('swap')}
            className={`${style.navItem} ${
              activenav === 'pool' && style.activenavItem
            }`}
          >
            Pool
          </div>
          <div
            onClick={() => setActive('swap')}
            className={`${style.navItem} ${
              activenav === 'vote' && style.activenavItem
            }`}
          >
            Vote
          </div>
          <a href="https://info.uniswap.org/#/" target="_blank" rel="noreffer">
            <div className={style.navItem}>
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image
              src={ethlogo}
              alt="etereum png"
              height={20}
              width={20}
            ></Image>
          </div>
          <p>Ethereum</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
        <div
          onClick={() => connectWallet()}
          className={`${style.button} ${style.buttonPadding}`}
        >
          <div className={`${style.buttonAccent}  ${style.buttonPadding}`}>
            Connect Wallet
          </div>
        </div>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
