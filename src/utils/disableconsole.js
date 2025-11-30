if (process.env.NODE_ENV === "production") {
  console.log = function () {};
  console.warn = function () {};
  console.error = function () {};
}
