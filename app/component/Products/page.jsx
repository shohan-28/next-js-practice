import React from 'react'

export default function 
Products() {
  let products =[];
  try{
    const res = await fetch('${process.env.API_URL}/products', {
      cache: "no-store",
    });
    if (!res.ok){
      throw new Error("faield to fetch products");
    }
    const data = await res.json();
    products = Array.isArray(data)
    ? data : data.products ?? data.data ?? [];

  }  catch(error) {
    console.error("Products Error:", error);
  }
  return (
    <div>

    </div>
  )
}
