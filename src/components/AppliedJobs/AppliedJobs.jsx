import React, { useEffect, useState } from 'react';



const AppliedJobs = () => {

    const [localData, setLocalData] = useState([])
    useEffect(() => {
        const previousBookmark = JSON.parse(localStorage.getItem("jobDetails"));
        if(!previousBookmark){
            window.location.href = "/";
        }
        setLocalData(previousBookmark)
    }, [])
    console.log(localData);

    return (
        <div>

            <h1 className='my-5 text-2xl font-bold text-center'> Applied jobs </h1>
            <div className='ms-56'>
                <select name="" id="" className='bg-slate-500 py-2 px-5 rounded text-white border-white'>
                    <option selected value="" className='rounded'>Filter By</option>
                    <option value=""> Remote </option>
                    <option value=""> Full Time</option>
                </select>
            </div>
            <div className='mt-10 border mx-40'>
                {/* <div className='grid grid-cols-3'>
                     <div><img src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt="image" /></div>
                    <div>
                        <h1 className='font-bold my-2'>Technical Database Engineer</h1>
                        <h3 className='text-gray-400 my-2'>Microsoft Corporation </h3>
                        <div className='flex'>
                            <p className='px-2 me-4 py-1 border rounded bg-white-300 text-blue-300'> part time </p>
                            <p className='px-2 py-1 border rounded bg-white-300 text-blue-300'> remote</p>
                        </div>
                        <div className='flex my-2 items-center'>
                            <span> </span><p className='me-4'> location : </p>
                            <span> </span><h3 className=''>Salary : </h3>
                        </div>
                    </div>
                    <div className='my-2'>
                        <button className='bg-gradient-to-r from-slate-400 to-indigo-400 px-3 py-2 mt-10 text-white rounded-md'>View Details</button>
                    </div> 
                </div> */}


                {
                    localData.map(data => 
                        <div className='grid grid-cols-3'>
                     <div><img src={data.company_logo} alt="image" /></div>
                    <div>
                        <h1 className='font-bold my-2'>{data.job_title}</h1>
                        <h3 className='text-gray-400 my-2'> {data.company_name}</h3>
                        <div className='flex'>
                            <p className='px-2 me-4 py-1 border rounded bg-white-300 text-blue-300'> part time </p>
                            <p className='px-2 py-1 border rounded bg-white-300 text-blue-300'> remote</p>
                        </div>
                        <div className='flex my-2 items-center'>
                            <span> </span><p className='me-4'> location : {data.location}</p>
                            <span> </span><h3 className=''>Salary : {data.salary}</h3>
                        </div>
                    </div>
                    <div className='my-2'>
                        <button className='bg-gradient-to-r from-slate-400 to-indigo-400 px-3 py-2 mt-10 text-white rounded-md'>View Details</button>
                    </div> 
                </div>    
                    )
                }





            </div>
        </div>
    );
};

export default AppliedJobs;