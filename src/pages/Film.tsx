import React from 'react';
import '../styles/Film.css';

const films = [
  {
    title: 'Carmen',
    imdb: 'https://www.imdb.com/title/tt6875952/',
    poster: `${import.meta.env.BASE_URL}images/film-posters/carmen.jpg`,
  },
  {
    title: 'Matrix Revolutions',
    imdb: 'https://www.imdb.com/title/tt0242653/',
    poster: `${import.meta.env.BASE_URL}images/film-posters/matrix.jpg`,
  },
  {
    title: 'Monsters vs. Aliens',
    imdb: 'https://www.imdb.com/title/tt0892782/',
    poster: `${import.meta.env.BASE_URL}images/film-posters/mva.jpg`,  
  },
  {
    title: 'Madagascar Escape 2 Africa',
    imdb: 'https://www.imdb.com/title/tt0479952',
    poster: `${import.meta.env.BASE_URL}images/film-posters/mad2.jpg`,
  },
  {
    title: 'Madagascar',
    imdb: 'https://www.imdb.com/title/tt0351283',
    poster: `${import.meta.env.BASE_URL}images/film-posters/mad.jpg`,
  },
  {
    title: 'Penguins Christmas Caper',
    imdb: 'https://www.imdb.com/title/tt0484439',
    poster: `${import.meta.env.BASE_URL}images/film-posters/caper.jpg`,
  },
  {
    title: 'Shrek the Halls',
    imdb: 'https://www.imdb.com/title/tt0897387',
    poster: `${import.meta.env.BASE_URL}images/film-posters/halls.jpg`,
  },
  {
    title: 'Shrek the Third',
    imdb: 'https://www.imdb.com/title/tt0413267',
    poster: `${import.meta.env.BASE_URL}images/film-posters/shrek3.jpg`,
  },
  {
    title: 'Shrek 2',
    imdb: 'https://www.imdb.com/title/tt0298148',
    poster: `${import.meta.env.BASE_URL}images/film-posters/shrek2.jpg`,
   },
  {
    title: 'Shrek',
    imdb: 'https://www.imdb.com/title/tt0126029',
    poster: `${import.meta.env.BASE_URL}images/film-posters/shrek.jpg`,
  },
  {
    title: 'Antz',
    imdb: 'https://www.imdb.com/title/tt0120587',
    poster: `${import.meta.env.BASE_URL}images/film-posters/antz.jpg`,
  },
  {
    title: 'The Peacemaker',
    imdb: 'https://www.imdb.com/title/tt0119874',
    poster: `${import.meta.env.BASE_URL}images/film-posters/peacemaker.jpg`,
  },
];


const Film: React.FC = () => {
  return (
    <div className="film-container">
      <p className="film-intro">
        I got my start lensing shots, crafting character arcs, and punching up story for some of the biggest franchises in popular entertainment, including <strong>Shrek</strong>, <strong>Madagascar</strong>, and <strong>The Matrix</strong> trilogies. Today I collaborate with some of Hollywood's best directors, producers, writers, and showrunners to create new stories and new experiences for stage, screen, and stream.
      </p>

      <div className="film-list">
        {films.map((film) => (
          <a
            key={film.title}
            href={film.imdb}
            target="_blank"
            rel="noreferrer"
            className="film-item-link"
          >
            <div className="film-item">
              {film.poster && (
                <img
                  src={film.poster}
                  alt={`${film.title} poster`}
                  className="film-still"
                />
              )}
              <h3>{film.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Film;