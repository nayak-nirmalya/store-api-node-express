const getAllProductsStatic = async (req, res) => {
  res.status(200).json({
    msg: "Products Testing Route!"
  });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({
    msg: "Products Route!"
  });
};

export { getAllProductsStatic, getAllProducts };
