import { header } from "./header.js";
import { footer } from "./footer.js";

const layout = (content) => {
  const layout = `${header()} <div style="padding-top: 152px"> ${content}</div> ${footer()}`;
  return layout;
};

export { layout };
