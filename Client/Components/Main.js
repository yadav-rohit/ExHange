import React from 'react'
import Image from 'next/image'
import ethlogo from '../assets/eth.png'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import Modal from 'react-modal'
import { useRouter } from 'next/router'

Modal.setAppElement('#__next')

const style = {
  wrapper: `w-screen flex items-center justify-center mt-14`,
  content: `bg-[#3D0000] w-[40rem] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
  transferPropContainer: `bg-[#950101] my-3 rounded-2xl p-6 text-3xl  border border-[#950101] hover:border-[#950101] text-[
    #FF0000] flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
  currencySelector: `flex w-1/4`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#3D0000] hover:bg-[#FF0000] text-[#B2B9D2] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `bg-[#370665] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#370665] shadow-xl text-[#ebbfff]`,
}

function Main() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>Swap</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0.0"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={() => handdleChange(e, 'amount')}
          />
          <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <Image
                  src={ethlogo}
                  alt="eth logo"
                  height={20}
                  width={20}
                ></Image>
              </div>
              <div className={style.currencySelectorTicker}>ETH</div>
              <AiOutlineDown className={style.currencySelectorArrow} />
            </div>
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0x...'
            onChange={e => handleChange(e, 'addressTo')}
          />
          <div className={style.currencySelector}></div>
        </div>
        <div onClick={e => handleSubmit(e)} className={style.confirmButton}>
          Confirm
        </div>
      </div>

      {/* <Modal isOpen={!!router.query.loading} style={customStyles}>
        <TransactionLoader />
      </Modal> */}
      </div>
  )
}

export default Main
