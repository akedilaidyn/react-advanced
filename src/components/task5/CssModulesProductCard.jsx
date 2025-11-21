import styles from "./CssModulesProductCard.module.css";

export default function CssModulesProductCard() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src="https://placehold.co/400x200"
        alt="Product"
      />
      <div className={styles.content}>
        <h3 className={styles.title}>Sample Product</h3>
        <p className={styles.description}>
          This is a brief description of the sample product. It highlights key
          features and benefits to attract potential customers.
        </p>
      </div>
      <div className={styles.content}>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}
