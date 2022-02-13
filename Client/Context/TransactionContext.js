import React , {useState , useEffect } from 'react'

export const TransactionContext = React.createContext()

let eth 

if(typeof window !== 'undefined'){
    eth = window.ethereum
}

const connectWallet = async (metamask = eth) => {
    try {
        if(!metamask) return alert('please install metamask');
        const accounts = await metamask.request({method: 'ethereum'})
    } catch (error) {
        
    }
}