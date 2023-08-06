export const getting = async () => {
  const key = import.meta.env.VITE_KEY;
  const url = import.meta.env.VITE_URL_API;
  const uri = url + key;

  try {
    let consult = await (
      await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    return consult;

  } catch (err) {throw Error(err);}
};    
