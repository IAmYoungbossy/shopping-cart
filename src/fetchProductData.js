export default async function getProductData() {
  const fetchedData = await fetch("https://dummyjson.com/products?limit=100");
  const productArray = await fetchedData.json();
  return productArray;
}
