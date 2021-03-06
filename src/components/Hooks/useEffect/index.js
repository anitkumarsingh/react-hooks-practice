import { useEffect,useState } from 'react';

const UseEffectTutorial = () => {
  const [data,setData] = useState([])

	const fetchData = async () => {
		const req = await fetch('https://jsonplaceholder.typicode.com/comments');
		const result = await req.json();
    setData(result);
    console.log('API called')
	};
	useEffect(() => {
		fetchData();
	},[]);
	return (
		<>
			<p>Comments</p>
      {data.slice(0,2).map(i=>{
        return(
          <div key={i.id}>
            <h3>{i.name}</h3>
            <p>{i.body}</p>
          </div>
        )
      })}
		</>
	);
};

export default UseEffectTutorial;
