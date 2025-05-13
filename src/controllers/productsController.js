const ProductModel = require("../models/Products");

const productServices = require("../services/productServices")(ProductModel);

async function create(req, res) {
  try {
    const create = await productServices.create(req.body);

    res.status(201).json({
      message: "produto criado",
      data: create,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
}

async function getAll(req, res) {
  try {
    const getAll = await productServices.getAll();

    res.status(200).json(getAll);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
}
async function update(req, res) {
  try {
    const update = await productServices.update(req.body, req.params);

    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
}
async function destroy(req, res) {
  try {
    await productServices.destroy(req.params);

    res.status(200).json({
      message: "produto deletado com sucesso",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
}

exports.default = {
  getAll,
  create,
  update,
  destroy,
};
