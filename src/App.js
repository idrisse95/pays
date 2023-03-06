import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Acceuil } from './components/acceuil/Acceuil';
import { Choix } from './components/acceuil/choix/Choix';

function App() {
  const [img, setImg] = useState('')
  const [nom, setNom] = useState('')
  const [native, setNative] = useState('')
  const [population, setPopulation] = useState(0)
  const [regionc, setRegionc] = useState('')
  const [sub, setSub] = useState('')
  const [capital, setCapital] = useState('')
  const [limitrophe, setLimitrophe] = useState('')
  const [domain, setDomain] = useState('')
  const [currencies, setCurrencies] = useState('')
  const [Languages, setLanguages] = useState('')

  const [charge, setCharge] = useState("hidden")
  
  const choisi = (donnee) => {
    setImg(donnee.flags.png)
    setNom(donnee.name.common)
    setNative(donnee.name.official)
    setPopulation(donnee.population)
    setRegionc(donnee.region)
    setSub(donnee.subregion)
    setCapital(donnee.capital)
    setLimitrophe(donnee.borders)
    setDomain(donnee.tld)
    setCurrencies(donnee.name.common)

    setLanguages(donnee.name.common)
    setCharge('block')
    window.scrollTo(0, 0);
    setTimeout(() => {
      setCharge('hidden')
    }, 400);

    // donnee.forEach(objet => {
    //   console.log(objet[currencies].name);
    // });



  }

  const [dark, setDark] = useState('Dark Mode')
  const [un, setUn] = useState('bg-gray-300/60')
  const [deux, setDeux] = useState('bg-white')
  const [trois, setTrois] = useState('bg-black text-white')

  const mode = () => {
    un === "bg-gray-300/60" ? setUn('bg-gray-900 text-white') : setUn('bg-gray-300/60')
    deux === "bg-white" ? setDeux('bg-black text-white') : setDeux('bg-white')
    trois === "bg-black text-white" ? setTrois('bg-white text-black') : setTrois('bg-black text-white')
    dark === "Dark Mode" ? setDark('Light Mode') : setDark('Dark Mode')
  }
  return (
    <div className="App relative">
      
        <div type="button" className={`bg-indigo-500 absolute flex justify-center pt-[300px] w-full h-full ${charge}`} disabled>
          <svg width="150" height="150" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite" />
                </path>
              </g>
            </g>
          </svg>

          
        </div>

        <div className={` flex py-4  ${deux}`}>
          <div className='flex w-full px-[10%] justify-between '>
            <p className='text-3xl font-bold'>Where Is the Wold ?</p>
            <button onClick={mode} className={`px-4 py-3 text-sm font-semibold ${trois} border shadow-md`}>
              {dark}
            </button>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Acceuil choisi={choisi} un={un} deux={deux} />} />
          <Route path='/acceuil/choix/:id' element={<Choix deux={deux} img={img} nom={nom} un={un} native={native} population={population} regionc={regionc} sub={sub} capital={capital} domain={domain} currencies={currencies} limitrophe={limitrophe} Languages={Languages} />} />
        </Routes>
      </div>

  
  );
}

export default App;
