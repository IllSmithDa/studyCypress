import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { Product } from '../../interfaces';
import RadioGroups, { createRadioButtons } from '../../components/RadioGroups/RadioGroups';
import CheckBoxes from '../../components/CheckBoxes/CheckBoxes';

export default function Homepage() {
  const [productList, setProductList]= useState<Product[]>([]);

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const rgbColors = ['red', 'green', 'blue']

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
      // console.log([...productList, ...data.products]);
      const products: Product[] = data.products;
      setProductList([...productList, ...products]);
    })
  }, [])

  return (
    <main>
      <Navbar />
      <RadioGroups radioVals={createRadioButtons(days)} label="Favorite Day" />
      <RadioGroups radioVals={createRadioButtons(rgbColors)} label="Favorite Color" />
      <CheckBoxes />
      {/* <ProductList products={productList} /> */}
      <Footer />
    </main>
  )
}