
import React from 'react';

const exercisesList = ({ data }) => {
  return (
    <>
    { data.map((data) => {
      console.log(exercises)
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default CountryList
