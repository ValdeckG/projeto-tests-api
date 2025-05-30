module.exports = function (Product) {
  async function create(data) {
    const { name, price, brand, version } = data;
    if (!name || !price || !brand || !version)
      throw new Error("preencha todos os campos");

    const create = await Product.create({
      name,
      price,
      brand,
      version,
    });

    return create;
  }

  async function getAll() {
    const getAll = await Product.find();

    return getAll;
  }
  async function update(data, filter) {
    const { name, price, brand, version } = data;
    const { id } = filter;

    if (!name || !price || !brand || !version)
      throw new Error("preencha todos os campos");

    const product = await Product.findById(id);
    if (!product)
      throw new Error("produto não encontrado");

    const update = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        brand,
        version,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return update;
  }
  async function destroy(filter) {
    const { id } = filter;

    const product = await Product.findById(id);
    if (!product)
      throw new Error("produto não encontrado");

    await Product.findByIdAndDelete(id);

    return true;
  }

  return {
    getAll,
    create,
    update,
    destroy,
  };
};
