export const path = "/users/download/index.html";

const isHtml = (path) => {
  const ext = path.slice(-5);
  return ext === ".html";
};

export const result = isHtml(path);

console.log(result);
