const jose = require("jose");

module.exports = async function () {
  const secret = jose.base64url.decode(
    "zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02alfL1lvI"
  );
  const jwt = await new jose.EncryptJWT({ "urn:example:claim": true })
    .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("10s")
    .encrypt(secret);

  return jwt;
};
