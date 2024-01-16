import { FaHeartbeat } from "react-icons/fa";
import { IoShieldHalf } from "react-icons/io5";
import { GiPointySword } from "react-icons/gi";
// Destructure the props object to access individual props
export default function PokeCard({ url, name, stats }) {

  const filteredStats = stats.slice(0, 3);
  return (
    <>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-center hover:shadow-lg  duration-100">
          <img src={url} alt={name} className="h-[150px] w-[150px] object-contain hover:scale-125 duration-200"/>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">{name}</h5>
          {/* Access and display stats */}
          <div>
            <div className='flex flex-row justify-center items-center'>
              {filteredStats.map((stat, index) => (
                <div key={index} className="flex flex-row gap-1 justify-center items-center">
                  {stat.stat.name === 'hp'? <FaHeartbeat className="text-red-500"/> : <></>}
                  {stat.stat.name === 'defense'? <IoShieldHalf className="ms-4 text-yellow-600" /> : <></>}
                  {stat.stat.name === 'attack'? <GiPointySword  className="ms-4 text-blue-600"/> : <></>}
                   {stat.base_stat}
                </div>
              ))}
            </div>
          </div>
          <a href={`pokemon/${name}`} className="inline-flex items-center justify-center mt-5">
            <button className='bg-slate-200 px-4 py-1 rounded-md hover:bg-blue-200 duration-200'>
              Explore ➟
            </button>
          </a>
        </div>
    </>
  );
}
