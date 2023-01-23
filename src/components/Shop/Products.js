import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ARRAY = [
  {
    id: 'a1',
    title: 'My First Book',
    price: 20,
    description: 'My first book, i ever wrote'
  },
  {
    id: 'a2',
    title: 'My Second Book',
    price: 200,
    description: 'My second book, i ever wrote'
  }, 
  {
    id: 'a3',
    title: 'My Third Book',
    price: 250,
    description: 'My third book, i ever wrote'
  },
  {
    id: 'a4',
    title: 'My Fourth Book',
    price: 270,
    description: 'My fourth book, i ever wrote'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ARRAY.map((item) => (
          <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
      />
      ))}
      </ul>
    </section>
  );
};

export default Products;
