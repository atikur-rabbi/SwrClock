import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

function fetcher(url) {
  return fetch(url, {
  mode: 'cors',
  header: {
    'Access-Control-Allow-Origin':'*',
  }}).then(r => r.json());
}

export default function Index() {
  const { data, error } = useSWR( "/api", fetcher ,{ refreshInterval: 1000 });

  if(!data){  return <h1>Loading</h1>  }
  if(error){ return <h1>Error</h1> }

  return <div> <h1>{data.hours} : {data.minutes} : {data.seconds}</h1></div>
}