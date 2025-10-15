import React, { useEffect, useState } from 'react'
import { Product } from './Product';

export const Pagination = () => {

    const [pageData, setPageData] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    const [totalPage, setTotalPage] = useState(0);



    useEffect(()=> {
        loadData(10, pageNo*10);
     
    }, [pageNo])

     async function loadData(limit, skip) {
        const rawdata = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail,discountPercentage`);
        const data = await rawdata.json();
        console.log(data);
        setPageData(data.products);
        setTotalPage(Math.floor(data.total/limit));
        // return data
    }
  return (
    <div>
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {
             pageData.map((prod)=> (
                    <Product key={prod.id} productData={prod} />
                ))
            }
        </div>
        <div style={{
            padding:'5rem'
        }}>
            <span>Prev</span>
            {
                [...Array(totalPage)].keys().map(np => <span style={{padding:'1rem', margin:'20px', cursor: 'pointer', textDecoration: np === pageNo ? 'underline' : 'none' }} key={np} onClick={()=> setPageNo(np)}>{np+1}</span>)
            }
            <span>Next</span>
        </div>
    </div>
  )
}
