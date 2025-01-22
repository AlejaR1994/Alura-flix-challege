const baseURL = "https://aluraflix-api-theta.vercel.app/data-carrusel";

export const listDataCarrusel = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};

export const createNuevoVideo = async (category) => {
  try {
    const response = await fetch(`${baseURL}/${category.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const createNuevaCategoria = async (datosAEnviar) => {
  try {
    const response = await fetch(`${baseURL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosAEnviar),
    });
    const data = await response.json();
    return data; 
  } catch (err) {
    console.error(err);
  }
};

// export const editarVideo = async (video) => {
//   try {
//     const response = await fetch(`${baseURL}/${category.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(category),
//     });
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };


