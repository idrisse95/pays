import React from 'react'
import { Link } from 'react-router-dom'

export const Choix = (props) => {



    return (
        <div className={`${props.un} h-screen flex py-4 justify-center`}>
            <div className='flex flex-col w-[80%]'>
                <span className='mb-7'>
                    <Link className={`px-4 py-3 text-sm font-semibold ${props.deux}  shadow-md`} to="/">Back</Link>
                </span>
                <div className='flex w-full h-[500px] '>
                    <div className='w-[50%] h-full'><img src={props.img} className="w-full h-full " alt="" /></div>
                    <div className='w-[50%] ml-[5%] '>
                        <p className='font-bold text-2xl mb-4'>{props.nom}</p>
                        <div className='flex justify-between'>
                            <div>
                                <p className='mb-3'><span className='font-bold'>Native Name:</span>  {props.native}</p>
                                <p className='mb-3'><span className='font-bold'>Population: </span> {props.population}</p>
                                <p className='mb-3'><span className='font-bold'>Region: </span> {props.regionc}</p>
                                <p className='mb-3'><span className='font-bold'>Sub Region:</span>  {props.sub}</p>
                                <p className='mb-3'><span className='font-bold'>Capital: </span> {props.capital}</p>
                            </div>
                            <div>
                                <p className='mb-3'><span className='font-bold'>Top Level Domain:</span>  {props.domain}</p>
                                <p className='mb-3'><span className='font-bold'>Currencies:</span>  {props.currencies}</p>
                                <p className='mb-3'><span className='font-bold'>Languages:</span>  {props.Languages}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
