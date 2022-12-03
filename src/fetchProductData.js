export default async function getProductData() {
  const fetchedData = await fetch("https://fakestoreapi.com/products");
  const productArray = await fetchedData.json();
  return productArray;
}
