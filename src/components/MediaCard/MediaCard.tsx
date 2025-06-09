
const MediaCard = ({imageUrl,title}:any) => {
  return (
      <div style={{ backgroundImage: `url(${imageUrl})` }} className={`rounded-[22px] bg-cover bg-center  w-full h-full flex items-center`}>
        <div className="w-full">
          <div className="w-full text-center  text-lg 2xl:text-[28px] text-white font-bold">
            {/* Future Built on Stability and Growth */}
            {title}
          </div>
          {/* <div className="w-full flex justify-center ">
            <div className="mt-[27px] text-xs 2xl:text-[16px] w-[60%] text-center">
              {description}
            </div>
          </div> */}
        </div>
      </div>
  );
};

export default MediaCard;
