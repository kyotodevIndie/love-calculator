import React from 'react'
import './App.css';
import heart from './assets/heart.svg'
import shine from './assets/shine.gif'
import Footer from './components/Footer';
import Loading from './components/Loading';
import Header from './components/Header';

function App() {
  const [firstName, setFirstName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [data, setData] = 
  React.useState([{ 
    "fname":"",
    "sname":"",
    "percentage":"",
    "result":""
  }]);
  const [visible, setVisible] = React.useState(true)
  const [loading, setLoading] = React.useState(false)



  async function handleCalculate(){
    setLoading(true)
    const response = await 
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "f5e0ea2d1emsh5db54cb9658ec00p169f1djsn7dff9f1d8427",
      "x-rapidapi-host": "love-calculator.p.rapidapi.com"
    }
    })
    const apiData = await response.json()
    if((firstName === 'thallys' ||firstName === 'kezia') && (secondName === 'thallys' ||secondName === 'kezia')){
      console.log('é infinito garai')
      setData({ 
        "fname":"a",
        "sname":"a",
        "percentage":"Infinite",
        "result":"is more than infinite"
      })
      setLoading(false)
      setVisible(false)
    }else{
      setData(apiData)
      setLoading(false)
      setVisible(false)
    }
  }
  
  function handleCalculateAgain(){
    setVisible(true)
  }

  return (
    <div className="App">

      <Header />
      {console.log(data)}

      { loading ? 
        <Loading />
        :
       visible ?
      <>
        <div className="container">
          <div className="nes-field">
            <label htmlFor="name_field">Your Name</label>
            <input type="text" id="name_field" className="nes-input" value={firstName} onChange={e => setFirstName(e.target.value)}/>
          </div>
          <img src={heart} alt='heart' className="img"/>
          <div className="nes-field">
            <label htmlFor="name_field">Crush Name</label>
            <input type="text" id="name_field" className="nes-input" value={secondName} onChange={e => setSecondName(e.target.value)}/>
          </div>
        </div>
        <button onClick={handleCalculate} className="nes-btn btn" type="button">Calculate</button>
      </>
      :
      <>
      <img src={shine} alt="shining" className="shine1" />
      <img src={shine} alt="shining" className="shine2" />
      <img src={shine} alt="shining" className="shine3" />
      <img src={shine} alt="shining" className="shine4" />

        <div className="result">
        <h1>Result</h1>
        <p>{data.percentage} %</p>
        <p>{data.result}</p>
        <button onClick={handleCalculateAgain} className="nes-btn btn" type="button">Calculate Again</button>
        </div>
      </>
      
      }
    
    <Footer />

    </div>
  );
}

export default App;
