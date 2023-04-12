import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { RingContext } from '../FeaturedJobs/FeaturedJobs';

const JobDetails = () => {

    const receivedContext = useContext(RingContext);
    // console.log(receivedContext);

    const id = useParams();
    
    

    const jobsDetail = useLoaderData();
    
    // console.log(jobsDetail);
    const [singleJob, setSingleJob] = useState([])

    useEffect(()=>{
        let setId = jobsDetail.find(item => item.id = id )
         setSingleJob(setId);
    },[])
 const { job_description,company_name, fulltime_or_parttime, job_responsibility, educational_requirements, experiences, salary, job_title, contact_number, location, email, company_logo} = singleJob;

    const  [bo, setBo] = useState([])
    const handleApplyButton = (singleJob)=>{
        console.log(singleJob.id);
        const previousBookmark = JSON.parse(localStorage.getItem("jobDetails"))
        let bookmark = [];
        const jobName = {job_title, id, company_logo, salary, location,  company_name, fulltime_or_parttime, jobsDetail:true}

        if(previousBookmark){
            const isBookmarked = previousBookmark.find(data=> data.id === id);
            if(isBookmarked){
                
            }else{
                bookmark.push(...previousBookmark , jobName);
                localStorage.setItem("jobDetails", JSON.stringify(bookmark));
            }
        }else{
            bookmark.push(jobName);
            localStorage.setItem("jobDetails", JSON.stringify(bookmark));
        }setBo(previousBookmark);
        
    }
console.log(bo);

    return (
        <div>
            <h1 className='my-5 text-2xl font-bold text-center'>Job Details </h1>
            <div className='grid grid-cols-2 mx-40 mt-10  gap-10'>
                <div>
                    <p className='my-2'><strong> Job Description: </strong> {job_description} </p>

                    <p className='my-2'><strong> Job Responsibility: </strong> {job_responsibility} </p>

                    <p className='my-2'><strong>Educational Requirements: </strong> {educational_requirements} </p>

                    <p className='my-2'><strong>Experiences: </strong> {experiences} </p>
                </div>
                <div className='bg-slate-100 '> 
                    <div className='p-10'>
                        <h1 className='font-bold text-xl my-2'>Job Details</h1> <hr/>
                        <span> <CurrencyDollarIcon className="h-5 w-5 text-gray-500 my-1 inline-flex" /> Salary : {salary}  </span>
                        <span></span><h3 className='my-1'> Job Title : {job_title}  </h3>
                        <h1 className='font-bold text-xl my-2'>Contact Information </h1> <hr/>
                        <span> <PhoneIcon className="h-4 w-4 text-gray-500 my-1 inline-flex" /> Phone : {contact_number}  </span>
                        <span></span><h3 className='my-1'> Email : {email} </h3>
                        
                        <span><MapPinIcon className="h-5 w-5 text-gray-500 my-1 inline-flex" /> Address : {location} </span>
                        
                    </div>
                    <button onClick={()=> handleApplyButton(singleJob)} className='bg-gradient-to-r from-slate-400 to-indigo-400 px-3 py-2  text-white rounded-md w-full'>Apply Now </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;