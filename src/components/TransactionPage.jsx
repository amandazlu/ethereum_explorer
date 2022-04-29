import { useEffect, useState } from "react";
import { useMoralis, useMoralisCloudFunction, useMoralisQuery } from "react-moralis";
import SearchBar from "./SearchBar";
import TransactionTable from "./TransactionTable";

const TransactionPage = (props) => {
    const [watchAddress, setWatchAddress] = useState("0x3057471208FEe8D6a079ae7664B89211497A4883");
    
    const { fetch, data, isLoading, isFetching} = useMoralisCloudFunction("getEthTransactions", {address: watchAddress});


    //PLACEHOLDER: call the 'getEthTransactions' cloud function

    //PLACEHOLDER: setup subscription to track sync status of current address

    //PLACEHOLDER: refetch data when data is synced


    //helper function to extract the boolean indicating whether watchAddress is still syncing or not from isSyncing
    const syncingToSynced = (arg) => {
        if (arg?.at(0)?.attributes?.is_syncing === false){
            return false;
        }
        return true;
    }

    //helper function to extract array of transactions from the object that 'getEthTransactions' returns
    const postProcess = (raw) => {
        const transArray = raw?.results?.results;
        if(!transArray) {
            return [];
        }
        else {
            return (transArray.map((res) => {
                return res.attributes;
            }));
        }
    }

    return (
        <div>
            <SearchBar setAddress={/*Placeholder*/() => {}}/>
            <TransactionTable loading={isLoading} transactions={postProcess(data)}/>
        </div>
    )  
};

export default TransactionPage;