import React from "react";

export default async function Products() {
  let products = [];
  try {
    const res = await fetch(`${process.env.API_URL}/products`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("faield to fetch products");
    }
    const data = await res.json();
    products = Array.isArray(data) ? data : (data.products ?? data.data ?? []);
  } catch (error) {
    console.error("Products Error:", error);

    return (
      <div>
        <p className="text-center text-red-500">Products load failed!</p>
      </div>
    );
  }
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <p className="py-10 text-center text-gray-500"> no products found.</p>
    );
  }

  return (
    <section className="">
      <h2>our products</h2>
      <div>
        {products.map((product) => {
          const image = product.image || product.images?.[0];
          return (
            <div key={product.productId}>
              {image && (
                <img
                  src={image}
                  alt={product.name || "product image"}
                  width={200}
                />
              )}
              <h1>{product.name}</h1>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
