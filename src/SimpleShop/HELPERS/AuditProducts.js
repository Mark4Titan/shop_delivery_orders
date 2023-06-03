


  // перевіряємо store //
  const AuditProduct = (idProd, products) => {
    const audit =
      products.filter((item) => item === idProd).length > 0 ? idProd : -1;
    return audit;
};
  export default AuditProduct