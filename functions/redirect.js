exports.handler = async (event) => {
  const redirectUrl = "https://www.google.com";

  return {
    statusCode: 301,
    headers: {
      Location: redirectUrl,
      "Cache-Control": "no-cache",
    },
  };
};
