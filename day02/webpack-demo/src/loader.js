// webpack loader
import { remark } from "remark";
import remarkHtml from "remark-html"; // should be converted => cjs by using rollup
export default async function (src) {
  // MD => html string
  const result = await remark().use(remarkHtml).process(src);
  const export_ = "export default `" + result.toString() + "`";
  return export_;
}
