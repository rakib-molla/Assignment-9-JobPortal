import React, { createContext } from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

export const RingContext = createContext('rakib');

const FeaturedJobs = ({ featureJob }) => {
    const { id,company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary } = featureJob;

    const handleViewDetails = (featureJob)=>{
        // console.log(featureJob);
    }
    
    

    return (
            <div className='border p-5 rounded-md m-3'>
                <img className='h-14 w-28' src={company_logo} alt="image" />
                <h1 className='text-xl font-bold'>{job_title}</h1>
                <p className='my-2'>{company_name}</p>
                <div className='flex gap-3'>
                    <p className='px-2 py-1 border rounded bg-white-300 text-blue-300'>{remote_or_onsite} </p>
                    <p className='px-2 py-1 border rounded bg-white-300 text-blue-300'>{fulltime_or_parttime} </p>
                </div>

                <div className='flex my-2 items-center'>
                    <span><MapPinIcon className="h-5 w-5 text-gray-500 " /></span><p className='me-4'> {location}</p>
                    <span><CurrencyDollarIcon className="h-5 w-5 text-gray-500 " /></span><h3 className=''>Salary: {salary} </h3>
                </div>

                {/* <Link to={`jobdetails/${id}`} ><button className='bg-gradient-to-r from-slate-400 to-indigo-400 px-3 py-2  text-white rounded-md '>View Details</button></Link> */}

                <Link to= {`./jobdetails/${id}`} ><button onClick={()=>handleViewDetails(featureJob)} className='bg-gradient-to-r from-slate-400 to-indigo-400 px-3 py-2  text-white rounded-md'>View Details</button></Link>

                
            </div>
                

    );
};

export default FeaturedJobs;

