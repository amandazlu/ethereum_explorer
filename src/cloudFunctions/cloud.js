
//comment this out when saving changes
//import Moralis from "moralis";


Moralis.Cloud.define("getEthTransactions", async (request) => {
  const query1 = new Moralis.Query("EthTransactions");
  //request.params.address holds the address we want to search for
  query1.equalTo("from_address", request.params.address);
  const query2 = new Moralis.Query("EthTransactions");
  query2.equalTo("to_address", request.params.address);
  const combinedQuery = Moralis.Query.or(query1, query2);
  combinedQuery.descending("block_number");
  combinedQuery.withCount();
  const results = await combinedQuery.find();
  return results;
  
});