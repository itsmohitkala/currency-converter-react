import React, { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
  let url=`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
  const [data,setData]=useState({})

  useEffect(()=>{
fetch(url)
.then((res)=>(res.json()))
.then((data)=>{
        console.log("API DATA:", data);
      console.log("CURRENCY DATA:", data[currency]);
  setData(data[currency || {}])})
  },[currency,url])

  return data
}

export default useCurrencyInfo
