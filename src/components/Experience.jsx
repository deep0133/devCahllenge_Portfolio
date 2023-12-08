import Image from "./Image";

export default function Experience() {
  return (
    <section className='experience font-poppin bg-card rounded-xl p-5 float-left space-y-5 mt-10 w-auto min-[500px]:max-w-[65%]'>
      <h1 className='text-xl text-darkGray'>Experience</h1>
      <div className='experience-1 flex gap-5 md:gap-8 py-8 border-b'>
        <div className='w-1/3 md:w-1/4 lg:pr-6'>
          <Image
            imgUrl={
              "https://yt3.ggpht.com/ytc/AKedOLSYvq4suQgrDjPUnSsQTLpdUzVFI7fgr1RALRHj=s900-c-k-c0x00ffffff-no-rj"
            }
          />
        </div>
        <div className='content w-2/3'>
          <p className='date text-sm text-lightGray'> Jun 2023 - jul 2023 </p>
          <h1 className='title text-darkGray font-medium text-lg py-1'>
            Web Design - HTML , CSS , Bootstrap , Javascript
          </h1>
          <p className='py-3 text-lightGray text-sm min-[500px]:hidden sm:block'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            autem earum dolore! Officiis impedit!
          </p>
        </div>
      </div>
      <div className='experience-2 flex gap-6 md:gap-8 py-8'>
        <div className='w-1/3 md:w-1/4 lg:pr-6'>
          <Image
            imgUrl={
              "https://yt3.ggpht.com/ytc/AKedOLSYvq4suQgrDjPUnSsQTLpdUzVFI7fgr1RALRHj=s900-c-k-c0x00ffffff-no-rj"
            }
          />
        </div>
        <div className='content  w-2/3'>
          <p className='date text-sm text-lightGray'> Jun 2023 - jul 2023 </p>
          <h1 className='title text-darkGray font-medium text-lg py-1'>
            Backend - Nodejs , Express , mongodb
          </h1>
          <p className='py-3 text-lightGray text-sm min-[500px]:hidden sm:block'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            autem earum dolore! Officiis impedit!
          </p>
        </div>
      </div>
    </section>
  );
}
