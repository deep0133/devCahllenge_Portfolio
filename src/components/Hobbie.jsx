import Image from "./Image";
export default function Hobbie() {
  return (
    <section className='hobbies font-lato bg-card rounded-xl  p-5 space-y-5 mt-10 min-[500px]:max-w-[31%] min-[500px]:float-right'>
      <h1 className='text-lg font-franklin'>Hobbies</h1>
      <div className='hobbie-1'>
        <div className='w-full'>
          <Image
            imgUrl={"https://i.ytimg.com/vi/yUJFqlRn4ls/maxresdefault.jpg"}
          />
        </div>
        <div className='content text-lightGray pt-2'>
          <h1 className='title text-darkGray font-medium text-lg'>
            Web Serires
          </h1>
        </div>
      </div>
      <div className='hobbie-2'>
        <div className='w-full'>
          <Image
            imgUrl={
              "https://otakukart.com/wp-content/uploads/2023/06/throne-of-seal-.jpg"
            }
          />
        </div>
        <div className='content text-lightGray pt-2'>
          <h1 className='title text-darkGray font-medium text-lg'>
            Chinese Anime
          </h1>
        </div>
      </div>
      <div className='hobbie-3'>
        <div className='w-full'>
          <Image
            imgUrl={
              "https://th.bing.com/th/id/OIP.Chuz5v36AGMgP3M6jt04ugHaFE?pid=ImgDet&w=700&h=479&rs=1"
            }
          />
        </div>
        <div className='content text-lightGray pt-2'>
          <h1 className='title text-darkGray font-medium text-lg'>Cycling</h1>
        </div>
      </div>
    </section>
  );
}
