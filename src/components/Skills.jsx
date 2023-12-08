function Skills() {
  return (
    <section className='skills gap-10 flex md:flex-row flex-col w-full md:w-[65%] md:float-left'>
      <div className='frontend bg-card md:w-1/2 mt-10 p-5 rounded-xl font-franklin'>
        <div className='left '>
          <h1 className='title pb-3'>FRONT END</h1>
          <div className='naming-progress space-y-2 text-lightGray text-sm'>
            <div className='skill-1 flex items-center justify-center'>
              <p className='name pr-3 w-full'>REACT</p>
              <div className='h-2 w-full bg-gray-300 rounded-full overflow-hidden'>
                <p className='h-2 w-[70%] bg-blue-500'></p>
              </div>
            </div>
            <div className='skill-2 flex items-center justify-center'>
              <p className='name pr-3 w-full'>JAVASCRIPT</p>
              <div className='h-2 w-full bg-gray-300 rounded-full overflow-hidden'>
                <p className='h-2 w-[80%] bg-blue-500'></p>
              </div>
            </div>
            <div className='skill-3 flex items-center justify-center'>
              <p className='name pr-3 w-full'>CSS</p>
              <div className='h-2 w-full bg-gray-300 rounded-full overflow-hidden'>
                <p className='h-2 w-[70%] bg-blue-500'></p>
              </div>
            </div>
            <div className='skill-3 flex items-center justify-center'>
              <p className='name pr-3 w-full'>TAILWIND</p>
              <div className='h-2 w-full bg-gray-300 rounded-full overflow-hidden'>
                <p className='h-2 w-[75%] bg-blue-500'></p>
              </div>
            </div>
            <div className='skill-4 flex items-center justify-center'>
              <p className='name pr-3 w-full'>REDUX</p>
              <div className='h-2 w-full bg-gray-300 rounded-full overflow-hidden'>
                <p className='h-2 w-1/2 bg-blue-500'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='backend bg-card md:w-1/2 md:mt-10 p-5 rounded-xl font-franklin'>
        <div className='left '>
          <h1 className='title pb-3'>BACK END</h1>
          <div className='naming-progress space-y-2 text-lightGray text-sm'>
            <div className='skill-1 flex items-center justify-center'>
              <p className='name pr-3 w-full'>NODE</p>
              <div className='h-2 w-full bg-gray-300 rounded-full overflow-hidden'>
                <p className='h-2 w-[70%] bg-blue-500'></p>
              </div>
            </div>
            <div className='skill-2 flex items-center justify-center'>
              <p className='name pr-3 w-full'>EXPRESS</p>
              <div className='h-2 w-full bg-gray-300 rounded-full overflow-hidden'>
                <p className='h-2 w-[80%] bg-blue-500'></p>
              </div>
            </div>
            <div className='skill-3 flex items-center justify-center'>
              <p className='name pr-3 w-full'>MONGODB</p>
              <div className='h-2 w-full bg-gray-300 rounded-full overflow-hidden'>
                <p className='h-2 w-[70%] bg-blue-500'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
