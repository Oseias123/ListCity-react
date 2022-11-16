import './App.css';
import Autocompleted from './components/Autocompleted'

const App = () => {
  const cityNames =[
  
    "Birmingham",
      "aGlasgow ",
      "Liverpool ",
      "Edimburgo ",
       "Leeds ",
      "Sheffield ",
      "Manchester",
      "Bristol ",
       "País de Gales Cardiff ",
      "Leicester ",
      "Bradford ",
     "Coventry ",
      "Kingston ",
     "Norte Belfast",
     "Plymouth ",
      "Stoke-on-Trent",
     "Derby ",
      "Wolverhampton ",
    "Nottingham ",
      "Southampton ",
      "Portsmouth",
      "Londres",
     ];
  	
   return (
    <div className="container">
      <Autocompleted options={cityNames} />
    </div>
  );
}

export default App; 

 