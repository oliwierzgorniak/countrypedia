import swaggerJsdoc from "swagger-jsdoc";

export default function getSwaggerDocumentation() {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Countrypedia API",
        version: "1.0.0",
      },
    },
    apis: ["./src/index.ts"],
  };

  return swaggerJsdoc(options);
}
