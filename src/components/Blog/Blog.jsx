import React from 'react';

const Blog = () => {
    
    return (
        <div>
            <div>
                <h1 className='font-bold text-xl mx-5'> 1. when should use context api ?</h1>
                <article className='mx-5'>
                    context api is an react feature. it's store object and accessible by many component at different nesting levels. context api pass the data one component to many components.if you only want to avoid passing some props through many level component composition is often a simple solution than context.
                </article>

                <h1 className='font-bold text-xl mx-5'> 2. what is custom hook ?</h1>
                <article className='mx-5'>
                Custom React JS hooks are reusable functions that a React JS .React comes with several built-in Hooks like useState, useContext, and useEffect. Sometimes, you’ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room.
                </article>

                <h1 className='font-bold text-xl mx-5'> 3. what is UseRef ?</h1>
                <article className='mx-5'>
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                </article>

                <h1 className='font-bold text-xl mx-5'> 4. what is useMemo ?</h1>
                <article className='mx-5'>
                useMemo invokes compute , memoizes the calculation result, and returns it to the component. If the dependencies don't change during the next renderings, then useMemo() doesn't invoke compute , but returns the memoized value
                </article>
            </div>
        </div>
    );
};

export default Blog;