const { findByIdAndDelete } = require("../models/Products");
const productServices = require("../services/productServices");
const { describe, expect, it } = require("@jest/globals");

describe("testando productsController", () => {
  it("create: deve criar um produto válido", async () => {
    const productData = {
      name: "chevette",
      price: 5000,
      brand: "chevrolet",
      version: "1.6 1992",
    };
    const ProductModel = {
      create: () => ({
        name: "chevette",
        price: 5000,
        brand: "chevrolet",
        version: "1.6 1992",
      }),
    };
    const result = await productServices(ProductModel).create(productData);

    expect(result).toStrictEqual(productData);
  });

  it("create: ao criar sem os campos deve dar um erro", async () => {
    const productData = {};
    const ProductModel = {};

    expect(async () => {
      await productServices(ProductModel).create(productData);
    }).rejects.toThrow("preencha todos os campos");
  });

  it("getAll: deve buscar todos os produtos", async () => {
    const productData = [
      {
        name: "chevette",
        price: 5000,
        brand: "chevrolet",
        version: "1.6 1992",
      },
      {
        name: "uno",
        price: 15000,
        brand: "fiat",
        version: "1.0 2010",
      },
    ];
    const ProductModel = {
      find: () => productData,
    };
    const result = await productServices(ProductModel).getAll(productData);

    expect(result).toStrictEqual(productData);
  });

  it("update: deve atualizar um produto", async () => {
    const id = "6822aa5cb19398751d8512bb";

    const productData = {
      _id: id,
      name: "chevette",
      price: 5000,
      brand: "chevrolet",
      version: "1.6 1992",
    };
    const ProductModel = {
      findByIdAndUpdate: () => productData,
      findById: () => id,
    };

    const result = await productServices(ProductModel).update(productData, id);

    expect(result).toStrictEqual(productData);
  });

  it("update: ao atualizar sem os campos deve dar um erro", async () => {
    const id = "6822aa5cb19398751d8512bb";
    const productData = {};
    const ProductModel = {};

    expect(async () => {
      await productServices(ProductModel).update(productData, id);
    }).rejects.toThrow("preencha todos os campos");
  });

  it("update: ao atualizar sem o id deve dar erro", async () => {
    const id = "";
    const productData = {
      name: "chevette",
      price: 5000,
      brand: "chevrolet",
      version: "1.6 1992",
    };
    const ProductModel = { findById: () => id };

    expect(async () => {
      await productServices(ProductModel).update(productData, id);
    }).rejects.toThrow("produto não encontrado");
  });

  it("destroy: deve deletar um produto", async () => {
    const id = "6822aa5cb19398751d8512bb";

    const ProductModel = {
      findByIdAndDelete: () => true,
      findById: () => id,
    };

    const result = await productServices(ProductModel).destroy(id);

    expect(result).toStrictEqual(true);
  });

  it("destroy: ao deletar sem o id deve dar erro", async () => {
    const id = "";
   
    const ProductModel = { findById: () => id };

    expect(async () => {
      await productServices(ProductModel).destroy(id);
    }).rejects.toThrow("produto não encontrado");
  });

});
