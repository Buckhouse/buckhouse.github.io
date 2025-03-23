import React from 'react';
import '../styles/Film.css';

const films = [
  {
    title: 'Carmen',
    imdb: 'https://www.imdb.com/title/tt6875952/',
    trailer: 'https://imdb-video.media-imdb.com/vi53789721/1434659607842-pgv4ql-1678392983044.mp4?Expires=1742793390&Signature=F4A3gDG3upgahx995azdE9UBfCQuTFs7yj6diE8yEfjtLa5ac26Qq7NvVtZ0SNojasZgdyKFJPleu3M~g2QcxBsM-l25TQ0BRBFeHK9JfydzKzuWPyVd7I5PKdDGdU1HnYKRm9fUhV59gjW481K~JlwhUvGhsdSHGIl7Himg9ZYg8~--oJx-2rY4Lrr8NxDoTzvFfmmTOhgiHXo6~7Isn~W0oPonaKYBMLT4bpied7RjUjXLv-K7JBVEBzGGyHspz~XQ0fhyxBGTaD0fRLOrabSCeW91UjwsaUJbp91jgKcXpg3Xwe3w-1m91oYRsS1Ev-GYl7XueSlfdv0tXEIMAA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: 'Matrix Revolutions',
    imdb: 'https://www.imdb.com/title/tt0242653/',
    trailer: 'https://imdb-video.media-imdb.com/vi2885026073/1434659607842-pgv4ql-1564581861778.mp4?Expires=1742794244&Signature=lcfYeQfi2DRJcpiQadoludnLy543GHYFZVGLhb3QDO9Nbu9GnAq~ew6mwulVL7-VHDAku~70rjIpXeuVaon3wnO-POd00noZiwguQ7mfZh3~4rAj98FlhQ3I-3LIvE95Etdq8~K8HThljba1ytQaWN-ae6EZeHy6QQen2nLLT8rHCR~q5Y5fB98euZNkS-4tWzstxVKb-~zzyqN6c7M8xoHD0VMI3n2usfaf5CnND2EdT74dGAcF51sxD55tFHcRJvGJzTuhLjiu~66HddcNkbQn4aY4bXav3cDpM17NCChDXhG89sAyvbXlQgA4CyMybAkHAs4cG1mCI7WAuEfjGg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
  },
  {
    title: 'Monsters vs. Aliens',
    imdb: 'https://www.imdb.com/title/tt0892782/',
    trailer: 'https://imdb-video.media-imdb.com/vi2117665561/1434659607842-pgv4ql-1616199555404.mp4?Expires=1742793377&Signature=WAPjtVkEIFbyR8ThxZouAvwMTd-LW5XBvbOygfU~uUlcNXPLV-Ymls1W9pdQqIoJqsiRYInY2o7yGc2QqeeYIVSaQUQWVj7SFAgfvqsk5119051c2mb3wax-uxrk889GJZoN5YnKcLTRAF6On~UMcfXr3bH7nv1w7-CcWH67W8550zME1jeIcJFEJVVItD9UHpPNxLcZVHxxgxel2OnBaNG6QCPh8YEDDhDbyVxFpYrkK-7fBynVFQ150Sn~vAnThWm3Wm~w3TkB2XrDBi3ZAM2XrN~D7lDrLWeHf5vrQ6gnx6uy0W9BRKqh0Nxunh~nRLfX0gi8ZwBPYyZV2It7ng__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
  },
  {
    title: 'Madagascar Escape 2 Africa',
    imdb: 'https://www.imdb.com/title/tt0479952',
    trailer: 'https://imdb-video.media-imdb.com/vi2831286553/1434659607842-pgv4ql-1616199343450.mp4?Expires=1742794381&Signature=Gdi-5BS3GEZ2T55Qf4RN2-v9IMYLi7YotxdWMPLP~t861~fV6D7SE0Ys~dGw9I-TOJ03fkA5fJtOWjgVSJFx2h6B9KTEkibdlW5G2uJdpIvPomTk-4XUJum98q5XOTAgBATsoWVoTPCEUZgrssQNO~doO5aBhXnBk2fPysM1CZLaC6wf-e97PIDnPMg9vBG8KrPZKL0F3KAEKdjiJDENDxx0eaGTftXjxKVtWrhnjl7cvrT8VZRGMjmP378Pb0BobisK5HjxDXCeok1179Z99xX3fU~DojLCReLCPZG9jwjj0Ei8RfNyGzqE~fyW8rVS9ItyOQTGwCbELgmlJpyBOg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
  },
  {
    title: 'Madagascar',
    imdb: 'https://www.imdb.com/title/tt0351283',
    trailer: "https://imdb-video.media-imdb.com/vi1602270745/1434659607842-pgv4ql-1475262094500.mp4?Expires=1742793971&Signature=cFlHCgi6cgBiElpaLBl4cGxs-d6CJXUJFoMGofv27yTCgOR-MDuMY-ae9gv781WNzMBmsAkD0KVONJy07pkCipJI-iQOVkO5J8FTZsKgG0jgKdyvQpfj-s1TvfIZ5Be2Gc2Ts-HQtSnpIP97~~dag5GogJ54DoKYYN5zgw7MxCZbluNWSElzFDdfIecC2EjrRWluMOIxQiFxvhJtUDle~rEhL1wTx2JCxiUxoOOPJg1fIL7gaypdDcdC7dv4ENJdXZqfTk3mykG-d3btp1IM1ctHFXFakqBL0QAC32Zw7HlEx0OGHfX8R~6cSmqm6W2KaRnZMuOBbOHG0ujKLSZZ2A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  {
    title: 'Penguins Christmas Caper',
    imdb: 'https://www.imdb.com/title/tt0484439',
    poster: 'src={${import.meta.env.BASE_URL}images/photo.jpg}/film-posters/caper.jpg',
  },
  {
    title: 'Shrek the Halls',
    imdb: 'https://www.imdb.com/title/tt0897387',
    trailer: 'https://imdb-video.media-imdb.com/vi3006179353/1434659607842-pgv4ql-1564582941720.mp4?Expires=1742794557&Signature=aW6xMdRMN5VTlXKa5v9-IoCQtsJfuGiwrKAcRZNVSDxzjrQi1iJYwC94jWiiHSRQZx3UaoDrdSwNg-l4RBW8KLHolrL1bakdKshMIuLlQtiUepBn-k79dZVadj9IZsuqIDRMT3wYoZ69Ose9TdvP5fntD9O4ydJ06WofJ8Ewy~580EPG3Nnbk1jBbrBRVrlpTecouelMk8efQBSlG3BqC0cUN71J~Oe4zVD9zh1nULBCdk3j1PhgkIViXCv877s8HBhMUFMhOkSwT8kiQc-PISmTbFJUUCSiMRNMLvtH~jc2vuc0hFLRWN1BIhP-spb4FWRBfjX9~mTRCiVCG7edMw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
  },
  {
    title: 'Shrek the Third',
    imdb: 'https://www.imdb.com/title/tt0413267',
    trailer: 'https://imdb-video.media-imdb.com/vi1484980505/1434659607842-pgv4ql-1564582977872.mp4?Expires=1742794595&Signature=SZ4Sg32uWyGT4mVONLEZfK2vF4I9imCJIMqRJcNksHMJYeB5Va7~UHmJvWtjrVYgMqWoM0xXUS0EenmXN5mugPDd~Zlk0VcgAslrAvd9tagpYAKxTLwcaYqqnDo1kizYMXsUL-MIcdfVm9gLtjKlk0Kw7EM0GrMOfIBy192yiV0kVYOmOrlFWmaUIu7cYeOrT~XNcnduGXCoGhver4NPK6ND3JiXJNLPxkAkASZ~7Kz7aDZlz4NsHtysyl1Y-uO0nXfwzMAVM6iDLVMhWUP~QozkKJMjkYzEHZt7sUjXYbFBedTHTwted4MCxqrn7ID~HqsYk6HzMG79BUlxwkMrUA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
  },
  {
    title: 'Shrek 2',
    imdb: 'https://www.imdb.com/title/tt0298148',
    trailer: "https://imdb-video.media-imdb.com/vi1447231513/1434659607842-pgv4ql-1564600822507.mp4?Expires=1742794015&Signature=hNyOgR51Zy~FTatXTiP49soxWXtFpRXkMY786VHuRB8B0fQy643lJDi3NCXLsUD3Nt5kic2spb~Ku~vFLtP2p-6eE0IK-k23WjziLdkZmhGXUIOJ~o-USWBPUNqc6EyCTdWXQK23dHdqY1BbY6zCjcadi-ILJSjyDGojFDEItqzu9ynxxijcLoIdgSkBs5vXCBD-yY9hWPTL1omanjhsdrkJZRo-b6~uakBvX17LUA9D-L3nqbGvOPNfwBCgiClwQj2fx1ZU2U2FgZbVPdlyQKzDiT-wNvQEdc-E1TE3vyIZwf6qQPwaYxvElNjdWBu2pk0Pc6LOd~604E~qPKIO9w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  {
    title: 'Shrek',
    imdb: 'https://www.imdb.com/title/tt0126029',
    trailer: "https://imdb-video.media-imdb.com/vi4085711129/1434659607842-pgv4ql-1563994020407.mp4?Expires=1742793947&Signature=PA2r230uDX0pF12wTUAQrzS73Zl254RhFNWaj-MVK2kEIWIqTHADe3UuFlFvkCQbEkkcce9SAFkJgEw5OwKM2w55G6BfVo9efQ-UVwv4vej2YWm0VzAKo6ffhGeKvnMqvOCGJwlgR-p9NMI8M6CVxIEOhjNg6mcaZyR~eG7Slx7trRuD7T1AYl2la2wVMFdWPyMT2qJ86NhCRRtT-ty370thQMmNCdIFJoVsmeEwsp7-~B4Az0RqxKC5iZSHFixdypojHlS0hSC8S5y3IxWjR-R9hQvyoIJx7qFQmtwYDqvyrsaB-S7svRSYSwNCkh7XsjAIyPnHVPn61hyYcwrNag__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  {
    title: 'Antz',
    imdb: 'https://www.imdb.com/title/tt0120587',
    trailer: "https://imdb-video.media-imdb.com/vi548864281/1434659607842-pgv4ql-1563455961297.mp4?Expires=1742794620&Signature=W8f4VDVzimRXien1QwdLmVxrJTljtkMYFIT7h8o9OkmoTxTM5OrPzeT0R9rLF1BMTc4q~lVu6c6lKHYkEuhNLcLzuaefBdQ~ng8tCHQM61goDOn9JbscGABjx5RS~3oRgQcBH2nftFETk1558ajHh5zOikD6iNrjjYj13UDvzoDxm-FJbXjiPQIh2j49hFoqHXHF1e8F79wLRBTTsl4xJKjVc9Ls08~sOniWhxpZHpr1y2XPVM78t0iVGjAq0GW7k6auqBR8ziACJwdnH5wAMlT53wM1YDAOWC5ayWeMhTUByVPJmuVtmuFt5TcFfjFyctxZpO1r4deFfnrTOcv1jQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  },
  {
    title: 'The Peacemaker',
    imdb: 'https://www.imdb.com/title/tt0119874',
    poster: 'src={${import.meta.env.BASE_URL}images/film-posters/peacemaker.jpg',
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
          <div className="film-item" key={film.title}>
            <a href={film.imdb} target="_blank" rel="noreferrer">
              <h3>{film.title}</h3>
            </a>
            {film.trailer ? (
                <video
                controls
                className="film-video"
                src={film.trailer}
                preload="metadata"
                poster={film.poster} 
              >
                Sorry, your browser doesn’t support embedded videos.
              </video>
                ) : film.poster ? (
                <img
                    src={film.poster}
                    alt={`${film.title} poster`}
                    className="film-still"
                />
                ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Film;