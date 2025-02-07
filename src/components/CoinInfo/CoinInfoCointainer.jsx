import CoinInfo from "./CoinInfo";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";

function CoinInfoCointainer({coinId}) {
 
  const {historicData, isError, isLoading, currency, days, setDays, setCoinInterval}= useFetchCoinHistory(coinId);

  if (isLoading) {
    return <PageLoader/>
  }


  if (isError){
    return <Alert message= "Error fetching data" type= "error" />
  }

  return (
    <>
      <CoinInfo 
            historicData={historicData} 
            setDays={setDays} 
            setCoinInterval={setInterval}
            days={days} 
            currency={currency}
            />
    </>
  )
}

export default  CoinInfoCointainer;