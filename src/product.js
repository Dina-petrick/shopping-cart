export const PRODUCTS = [
  {
    id: 1,
    productName: "iPhone Case - blue",
    price: 99.0,
    productImage:
      "data:image/jpeg;base64,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",
  },

  {
    id: 2,
    productName: "iPhone Case - Orange",
    price: 149.0,
    productImage:
      "data:image/jpeg;base64,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",
  },

  {
    id: 3,
    productName: "iPhone Case - grey",
    price: 149.0,
    productImage:
      "data:image/jpeg;base64,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",
  },

  {
    id: 4,
    productName: "iPhone Case - pink",
    price: 149.0,
    productImage:
      "data:image/jpeg;base64,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",
  },

  {
    id: 5,
    productName: "iPhone Case - brown",
    price: 199.0,
    productImage:
      "data:image/jpeg;base64,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",
  },

  {
    id: 6,
    productName: "iPhone Case - apple green ",
    price: 199.0,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEGX9jpfTeCmQOvLO2uu8siXAk3eDUjG0pw&usqp=CAU",
  },

  {
    id: 7,
    productName: "iPhone Case - red ",
    price: 199.0,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYhYPAaWWiqzvxqLKkc-hqRReuw3qfC5uiQ&usqp=CAU",
  },

  {
    id: 8,
    productName: "iPhone Case - black",
    price: 299.0,
    productImage:
      "data:image/jpeg;base64,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",
  },

  {
    id: 9,
    productName: "iPhone Case - lemonade",
    price: 299.0,
    productImage:
      "data:image/jpeg;base64,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",
  },

  {
    id: 10,
    productName: "iPhone Case - transparent",
    price: 299.0,
    productImage:
      "data:image/jpeg;base64,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",
  },

  {
    id: 11,
    productName: "iPhone Case - purple",
    price: 399.0,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8Y9TtCY3MhHhHrjHT7fIkiXOCQANgkwfMFic8r07-WEV_pu5cpoBByDnOlbv4VdH7gU&usqp=CAU",
  },

  {
    id: 12,
    productName: "iPhone Case - orange",
    price: 399.0,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawusf60IisozSl2YwlPjajA8t8rjnNV87dw&usqp=CAU",
  },
];