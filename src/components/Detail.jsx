import ProfilePic from "../assets/pic.jpg";
function Detail() {
  return (
    <div
      className={`rounded-xl basis-full bg-card p-5 flex flex-col min-[500px]:flex-row justify-center items-center min-[500px]:items-start gap-3 sm:gap-4 md:gap-8 w-full`}>
      <div className='left sm:w-28 md:w-1/3 flex-shrink-0 lg:h-44 overflow-hidden'>
        <img
          src={ProfilePic}
          alt='online-pic'
          className='rounded-full w-28 object-cover md:rounded-lg h-28 md:w-auto md:h-auto origin-center'
        />
      </div>
      <div className='right-content name-contact-detail w-full'>
        <div className='name-contact flex flex-col sm:flex-row min-[500px]:items-start justify-center items-center min-[500px]:justify-between'>
          <div className='name-profession'>
            <h1 className='font-semibold pb-1 min-[500px]:text-left text-center text-2xl text-darkGray'>
              Deepanshu Heer
            </h1>
            <p className='text-lightGray mx-auto min-[500px]:text-start text-center'>
              MERN Stack Dev
            </p>
          </div>
          <div className='contact  flex flex-col items-center min-[500px]:items-start text-darkGray'>
            <a href='mailto:deepanshuheer27@gmail.com'>
              deepanshuheer27@gmail.com
            </a>
            <a href='tel:8196972171'>8196972171</a>
          </div>
        </div>
        <div className='content text-lightGray'>
          <p className='py-3 min-[500px]:text-left text-center '>
            Highly motivated MERN stack developer with two years of experience
            and a strong understanding of Java and DSA. Successfully solved over
            250 problems on LeetCode. I have built numerous applications using
            the MERN stack.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
