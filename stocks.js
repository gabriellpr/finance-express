
async function getData(){
  const simbolos = ["AAPL","TSLA", "Dow", "AMZN", "MSFT", "JPM"];
  //console.log(symbol[0]);

  for(i=0; i<simbolos.length; i++){
    if(simbolos[i] == "AAPL"){
      const api_url = `https://cloud.iexapis.com/stable/stock/${simbolos[i]}/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19`;
      const response = await fetch(api_url);
      const data = await response.json();

      const { companyName, latestPrice, symbol, changePercent } = data;
      document.getElementById('apple').textContent = symbol;
      document.getElementById('companyNameApple').textContent = companyName;

      if(changePercent > 0){
        document.getElementById('percentChangeApple').textContent = `+${changePercent}`;
        document.getElementById('percentChangeApple').style.color = "green";
      } else if (changePercent < 0){
        document.getElementById('percentChangeApple').textContent = `${changePercent}`;
        document.getElementById('percentChangeApple').style.color = "red";
      }

      console.log(latestPrice);
      console.log(symbol);
    }
    else if(simbolos[i] == "TSLA"){
      const api_url = `https://cloud.iexapis.com/stable/stock/${simbolos[i]}/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19`;
      const response = await fetch(api_url);
      const data = await response.json();

      const { companyName, latestPrice, symbol, changePercent } = data;

      document.getElementById('tesla').textContent = symbol;
      document.getElementById('companyNameTesla').textContent = companyName;

      if(changePercent > 0){
        document.getElementById('percentChangeTesla').textContent = `+${changePercent}`;
        document.getElementById('percentChangeTesla').style.color = "green";
      } else if (changePercent < 0){
        document.getElementById('percentChangeTesla').textContent = `${changePercent}`;
        document.getElementById('percentChangeTesla').style.color = "red";
      }
      console.log(latestPrice);
      console.log(symbol);
    }
    else if(simbolos[i] == "Dow"){
      const api_url = `https://cloud.iexapis.com/stable/stock/${simbolos[i]}/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19`;
      const response = await fetch(api_url);
      const data = await response.json();

      const { companyName, latestPrice, symbol, changePercent } = data;

      document.getElementById('dow').textContent = symbol;
      document.getElementById('companyNameDow').textContent = companyName;

      if(changePercent > 0){
        document.getElementById('percentChangeDow').textContent = `+${changePercent}`;
        document.getElementById('percentChangeDow').style.color = "green";
      } else if (changePercent < 0){
        document.getElementById('percentChangeDow').textContent = `${changePercent}`;
        document.getElementById('percentChangeDow').style.color = "red";
      }
      console.log(latestPrice);
      console.log(symbol);
    }
    else if(simbolos[i] == "AMZN"){
      const api_url = `https://cloud.iexapis.com/stable/stock/${simbolos[i]}/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19`;
      const response = await fetch(api_url);
      const data = await response.json();

      const { companyName, latestPrice, symbol, changePercent } = data;

      document.getElementById('amazon').textContent = symbol;
      document.getElementById('companyNameAmazon').textContent = companyName;

      if(changePercent > 0){
        document.getElementById('percentChangeAmazon').textContent = `+${changePercent}`;
        document.getElementById('percentChangeAmazon').style.color = "green";
      } else if (changePercent < 0){
        document.getElementById('percentChangeAmazon').textContent = `${changePercent}`;
        document.getElementById('percentChangeAmazon').style.color = "red";
      }
      console.log(latestPrice);
      console.log(symbol);
    }
    else if(simbolos[i] == "MSFT"){
      const api_url = `https://cloud.iexapis.com/stable/stock/${simbolos[i]}/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19`;
      const response = await fetch(api_url);
      const data = await response.json();

      const { companyName, latestPrice, symbol, changePercent } = data;

      document.getElementById('microsoft').textContent = symbol;
      document.getElementById('companyNameMicrosoft').textContent = companyName;

      if(changePercent > 0){
        document.getElementById('percentChangeMicrosoft').textContent = `+${changePercent}`;
        document.getElementById('percentChangeMicrosoft').style.color = "green";
      } else if (changePercent < 0){
        document.getElementById('percentChangeMicrosoft').textContent = `${changePercent}`;
        document.getElementById('percentChangeMicrosoft').style.color = "red";
      }
      console.log(latestPrice);
      console.log(symbol);
    }
    else if(simbolos[i] == "JPM"){
      const api_url = `https://cloud.iexapis.com/stable/stock/${simbolos[i]}/quote?token=pk_7ec8cc46fb254d279f290b162ae23a19`;
      const response = await fetch(api_url);
      const data = await response.json();

      const { companyName, latestPrice, symbol, changePercent } = data;

      document.getElementById('jpmorgan').textContent = symbol;
      document.getElementById('companyNameJPMorgan').textContent = companyName;

      if(changePercent > 0){
        document.getElementById('percentChangeJPMorgan').textContent = `+${changePercent}`;
        document.getElementById('percentChangeJPMorgan').style.color = "green";
      } else if (changePercent < 0){
        document.getElementById('percentChangeJPMorgan').textContent = `${changePercent}`;
        document.getElementById('percentChangeJPMorgan').style.color = "red";
      }
      console.log(latestPrice);
      console.log(symbol);
    }
  }
}

getData();


//setInterval(getData, 1000);
//console.log(symbol.apple);