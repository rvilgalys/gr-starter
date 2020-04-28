import fetch from "isomorphic-unfetch";

const subscribeEmail = async ({ email }) => {
  try {
    const url = `https://api.convertkit.com/v3/forms/1338750/subscribe`;
    const body = JSON.stringify({
      api_key: process.env.CONVERTKIT_API_KEY,
      email,
      tags: [1441795],
    });
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body,
    });
    return await result.json();
  } catch (error) {
    throw error;
  }
};

export { subscribeEmail };
