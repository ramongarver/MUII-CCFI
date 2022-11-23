import { useState } from 'react';

const Content = () => {
  const [title, setTitle] = useState('Sweet Tooth: El niño ciervo');
  const [type, setType] = useState('Film');
  const [genre, setGenre] = useState(['drama', 'sci-fi']);
  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );
  const [director, setDirector] = useState('Jim Mickle');
  const [year, setYear] = useState('2019');
  const [rating, setRating] = useState('7.2');

  return (
    <div className="flex-auto py-3 sm:mx-auto sm:max-w-xl">
      <div className="flex max-h-80 space-x-8 border  border-gray-100 bg-white p-8 shadow-lg sm:rounded-3xl">
        <div className="h-48 w-1/2 overflow-visible">
          <img
            className="rounded-3xl shadow-lg"
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            alt=""
          />
        </div>
        <div className="flex w-1/2 flex-col space-y-4">
          <div className="flex items-start justify-between">
            <h2 className="text-3xl font-bold">{title}</h2>
            <div className="rounded-xl bg-yellow-400 p-2 font-bold">
              {rating}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400">{type}</div>
            <div className="text-lg text-gray-800">{year}</div>
          </div>
          <p className=" max-h-40 overflow-y-hidden text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
