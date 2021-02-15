import React from 'react'

function Index ({ apidata }) {
  
  return (
    <>
      {'Helo Worldo'}
      {console.log(apidata)}
    </>
  )
};

export async function getServerSideProps () {
  const response = await 
  fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=thallys&sname=kezia", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f5e0ea2d1emsh5db54cb9658ec00p169f1djsn7dff9f1d8427",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
	}
})
  const apidata = await response.json()
  return {
    props: {
      apidata
    }
  }
}
export default Index;