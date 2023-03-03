import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';


export const Acceuil = (props) => {

    const [pays, setPays] = useState([]);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/all`)
            .then(response => {
                setPays(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [setPays]);

    //odre alphabet

    pays.sort((a, b) => a.name.common.localeCompare(b.name.common));


    //filtrage

    // const [txt, setTxt] = useState('');
    // const [filtrer, setFiltrer] = useState([]);


    // useEffect(() => {
    //     const filtrer = paysFiltrer.filter((donnee) => donnee.name.common.toLowerCase().includes(txt.toLowerCase()));
    //     setFiltrer(filtrer);
    // }, [txt, paysFiltrer])


    // const recherche = (e) => {
    //     setTxt(e.target.value)
    // }


    // //regions
    // const [region, setRegion] = useState('')
    // const paysFiltrer = choix(() => {
    //     if (region === "All") {
    //       return pays;
    //     } else {
    //       return pays.filter(donnee => donnee.region.includes(region));
    //     }
    //   }, [pays, region]);

    //  paysFiltrer = region ? pays.filter(donnee => donnee.region.includes(region)) : (txt ? filtrer : pays);


    // //

    const [txt, setTxt] = useState('');
    const [filtrer, setFiltrer] = useState([]);
    const [region, setRegion] = useState('');

    const paysFiltrer = useMemo(() => {
        if (region === "All") {
            return pays;
        } else {
            return region ? pays.filter(donnee => donnee.region.includes(region)) : pays;
        }
    }, [region, pays]);




    useEffect(() => {
        const filtrer = pays.filter((donnee) => donnee.name.common.toLowerCase().includes(txt.toLowerCase()));
        setFiltrer(filtrer);
    }, [txt, pays])


    const recherche = (e) => {
        setTxt(e.target.value);
    };

    const choix = (e) => {
        const region = e.target.value;
        console.log(region);
        setRegion(region);

        if (region === "All") {
            setTxt('');
        }
    };




    return (
        <div className={`${props.un} flex py-4 justify-center`}>
            <div className='flex flex-col w-[80%]'>
                <div className='flex justify-between my-4'>
                    <div className='bg-white py-3 px-5 flex w-[40%]'>
                        <label className='mr-2' htmlFor=""><i className="fa-solid fa-magnifying-glass"></i></label>
                        <input className='bg-tranparent border-0 focus:border-blue-500 h-full w-full pl-2' type="text" value={txt} onChange={recherche} placeholder="Shearch for a Country" />
                    </div>
                    <div><select className='px-4 py-3 text-sm font-semibold bg-white border shadow-md' onClick={choix} name="" id="">
                        <option value="All">All regions</option>
                        <option value="Africa">Afrique</option>
                        <option value="Americas">Amériques</option>
                        <option value="Asia">Asie</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Océanie</option>
                    </select></div>
                </div>
                <div className='flex justify-center'>
                    <div className='grid gap-x-4 gap-y-4 grid-cols-5'>
                        {paysFiltrer.map((donnee) => (
                            <Link onClick={() => props.choisi(donnee)} to={`/acceuil/choix/:${donnee.name.common}`} className={` border rounded-md hover:scale-[1.06] transition duration-150 ease-in-out shadow-gray shadow-md cursor-pointer ${props.deux}`} key={donnee.cca2}>
                                <div ><img src={donnee.flags.png} className="w-full h-[150px] rounded-t-md" alt="" /></div>
                                <div className='pt-2 pl-3 pb-10'>
                                    <div className='my-3 font-bold'>{donnee.name.common}</div>
                                    <div><span className='font-bold'>Population: </span>{donnee.population}</div>
                                    <div><span className='font-bold'>Region: </span>{donnee.region}</div>
                                    <div><span className='font-bold'>Region: </span>{donnee.capital}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}
