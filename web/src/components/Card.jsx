import { useState } from 'react';

const Card = () => {
  const [title, setTitle] = useState('Sweet Tooth: El niño ciervo');
  const [type, setType] = useState('Film');
  const [genre, setGenre] = useState(['drama', 'sci-fi']);
  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );
  const [director, setDirector] = useState('Jim Mickle');
  const [year, setYear] = useState('2019');
  const [punctuation, setPunctuation] = useState('7.2');

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            alt="Poster of Sweet Tooth: El niño ciervo"
          />
        </div>
        <div className="p-8">
          <div className="flex">
            <div className="flex-auto text-sm font-semibold uppercase tracking-wide text-indigo-500">
              {type}
            </div>
            <span className="flex-none rounded-xl bg-yellow-400 p-2 font-bold">
              {punctuation}
            </span>
          </div>
          <a
            href="#"
            className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
          >
            {title}
          </a>
          <p className="my-2 text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
