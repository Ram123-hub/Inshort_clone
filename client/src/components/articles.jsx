
import {Box} from '@mui/material';
import { useEffect ,useState } from 'react';
import { getNews } from '../service/api';

import Article from './article';

const Articles = () =>{

const [news , setNews] = useState([]);


    useEffect(()=>{
 dailyNews()
    },[]);

    const dailyNews = async () =>{
        let response =  await getNews()
       
        setNews(response.data);
    }
return (
    <Box>
{
   <Box>
   {news.map((data) => (
     <Article key={data._id} data={data} />
   ))}
 </Box>
}
    </Box>
)
}

export default Articles;