const jose = require("jose");

module.exports = async function (jwt) {
  const secret = jose.base64url.decode(
    "zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02alfL1lvI"
  );
  try {
    const { payload, protectedHeader } = await jose.jwtDecrypt(jwt, secret, {
      issuer: "urn:example:issuer",
      audience: "urn:example:audience",
    });
    return true;
  } catch (e) {
    return false;
  }
};
