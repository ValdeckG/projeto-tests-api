const productServices = require("../services/productServices");
const { describe, expect, it } = require("@jest/globals");

describe("testando productsController", () => {
  it("deve criar um produto válido", async () => {
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

  it("ao criar sem os campos deve dar um erro", async () => {
    const productData = {};
    const ProductModel = {};

    expect(async () => {
      await productServices(ProductModel).create(productData);
    }).rejects.toThrow("preencha todos os campos");
  });

  it("deve buscar todos os produtos", async () => {
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
});
