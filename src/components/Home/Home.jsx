import React, { useEffect, useState } from 'react';
import manPic from '../../assets/P3OLGJ1.png';
import './Home.css';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const object = useLoaderData();
    
    const [fold, setFold] = useState(true);

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobcategory.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const [featureJobs, SetFeatureJobs] = useState([]);
    useEffect(() => {
        fetch('job.json')
            .then(res => res.json())
            .then(data => SetFeatureJobs(data.jobs))
    }, [])

    return (
        <div>
            <div className='bg-slate-50 '>
                <div className='flex flex-wrap justify-between items-center  mx-20 '>
                    <div className='mt-20 ms-5'>
                        <h1 className='font-bold text-6xl '> One Step <br /> Closer To Your <br /> <span className='text-blue-300'>Dream Job</span> </h1>
                        <p className='mt-5'>
                            Explore thousands of job opportunities with all the  <br /> information you need. its your future.Come find it. Manage all <br /> your job application from start to finish.
                        </p>
                        <button className='px-4 text-white py-2 mt-5 bg-blue-400 rounded'>Get Started</button>
                    </div>
                    <div>
                        <img src={manPic} alt="image file" className='man-pic' />
                    </div>
                </div>
            </div>

            <div className='my-20 '>
                <h1 className='text-4xl font-bold text-center '>Job Category List</h1>
                <p className='text-center my-5'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
                <div className='grid  md:grid-cols-3 lg:grid-cols-4 gap-2 mx-20 '>
                    {
                        jobs.map(job =>
                            <div className='bg-slate-100 rounded py-5 ms-5 ps-3'>
                                <div className=' h-16 w-16 bg-slate-100 shadow-md relative  rounded'><img src={job.category_image} alt="" className='absolute bottom-5 left-3 top-3 category-job-image ' /></div>
                                <h1 className='font-bold my-2 text-gray-500'>{job.category_name}</h1>
                                <p className='text-gray-500'> {job.jobs_available}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='my-20'>
                <h1 className='text-4xl font-bold text-center '>Featured Jobs</h1>
                <p className='text-center my-5'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
                <div className='grid md:grid-cols-2 mx-36'>

                
                { fold ?  
                    featureJobs.slice(0, 4).map(featureJob => <FeaturedJobs
                        key={featureJob.id}
                        featureJob={featureJob}
                    ></FeaturedJobs>) 
                    : 
                    featureJobs.map(featureJob => <FeaturedJobs
                        key={featureJob.id}
                        featureJob={featureJob}
                    ></FeaturedJobs>)
                    
                }
                </div>


                {/* <button onClick={()=> setFold(!fold)} className='bg-gradient-to-r from-slate-400 to-indigo-400 px-3 py-2 text-white rounded-md seemore'>See All Jobs</button> */}

                <button onClick={()=> setFold(!fold)}  className={ !fold ?  'hidden' :  'block bg-gradient-to-r from-slate-400 to-indigo-400 px-3 py-2 text-white rounded-md seemore' }>See All Jobs</button>

                <button onClick={()=> setFold(!fold)}  className={ !fold ?  'block bg-gradient-to-r from-slate-400 to-indigo-400 px-3 py-2 text-white rounded-md seemore' :  'hidden ' }>Less Jobs</button>
            </div>


        </div>
    );
};

export default Home;