import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Account, Contract, RpcProvider } from 'starknet'
import { ABI } from './assets/ABI.js'

function App() {
  const [count, setCount] = useState(0)

  const CONTRACT_ADDRESS ="0x5b85395ebb0cd9781d4fbadf13af1afdb7d23c5f75f4ecc33d1514a21a91f30"
  const ACCOUNT_ADDRESS ="0x6befc92979e660834d0644e1b5c39a2bb612e64a8aff89e00a670c387fbc0e0"
  const PRIVATE_KEY = " 0xdb78b238cd09dbf19250dbf70b17cd55"
  
  const PROVIDER = new RpcProvider({
    nodeUrl: "http://localhost:5050/rpc"
  })

const getbalance = () =>{
  const contract = new Contract (ABI, CONTRACT_ADDRESS, PROVIDER)

  contract.get_balance().then(res => {
    console.log("The contract call is : ", res)
  }).catch(err => {
    console.error("The contract call is:", err)
  })
 
}
const IncreaseBalance = () =>{
  const ACCOUNT = new Account(PROVIDER, ACCOUNT_ADDRESS, PRIVATE_KEY)
  const contract = new Contract (ABI, CONTRACT_ADDRESS, ACCOUNT)

  contract.increase_balance(3).then(res => {
    console.log("The contract call is : ", res)
  }).catch(err => {
    console.error("The contract call is:", err)
  })
 
}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello Starknet Smart Contract (Devnet)</h1>
      <div className="card">
        <button  onClick={getbalance}>
          Get Balance
        </button>
        <button onClick={IncreaseBalance} >
          Increase Balance
        </button>
        </div>
    </>
  )
}

export default App
