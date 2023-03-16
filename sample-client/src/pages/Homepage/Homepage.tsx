import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { Product } from '../../interfaces';
import RadioGroups, { createRadioButtons } from '../../components/RadioGroups/RadioGroups';
import CheckBoxes from '../../components/CheckBoxes/CheckBoxes';
import DropDown from '../../components/DropDown/DropDown';
import AlertBox from '../../components/AlertBox/AlertBox';
import AnchorTag from '../../components/AnchorTags/AnchorTag';
import IFrame from '../../components/IFrame/IFrame';
import ProductTable from '../../components/ProductTable/ProductTable';

export default function Homepage() {
  const [productList, setProductList]= useState<Product[]>([]);

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const rgbColors = ['red', 'green', 'blue']
  const columns = ['id', 'title', 'category', 'price', 'rating', 'stock']
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
      console.log([...productList, ...data.products]);
      const products: Product[] = data.products;
      setProductList([...productList, ...products]);
    })
  }, [])

  return (
    <main style={{ minHeight: "1000px" }}>
      <RadioGroups radioVals={createRadioButtons(days)} label="Favorite Day" />
      <RadioGroups radioVals={createRadioButtons(rgbColors)} label="Favorite Color" />
      <CheckBoxes />
      {/* <ProductList products={productList} /> */}
      <DropDown />
      <AlertBox />
      <AnchorTag />
      <IFrame />
      <ProductTable products={productList} columns={columns}/>
    </main>
  )
}