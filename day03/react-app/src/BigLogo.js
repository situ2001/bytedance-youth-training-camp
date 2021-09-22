import bigLogo from "./AntDesign.svg";
import {
  UpCircleOutlined,
  RightCircleOutlined,
  DownCircleOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

const icons = [
  <UpCircleOutlined />,
  <RightCircleOutlined />,
  <DownCircleOutlined />,
  <LeftCircleOutlined />,
];

const roll = (elements) => {
  const arr = Array.from(elements);
  return () => {
    const tmp = arr.shift();
    arr.push(tmp);
    return tmp;
  };
};

let flag = false;
let timer;
const useHover = () => {
  const roller = roll(icons);
  const [current, setCurrent] = useState(roller());
  const ref = useRef(null);
  useEffect(() => {
    const mouseHover = () => {
      if (!flag) {
        timer = setInterval(() => setCurrent(roller()));
        flag = true;
      }
    };
    const mouseOut = () => {
      if (flag) {
        clearInterval(timer);
        flag = false;
      }
    };
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", mouseHover);
      node.addEventListener("mouseout", mouseOut);
      return () => {
        node.removeEventListener("mouseover", mouseHover);
        node.removeEventListener("mouseout", mouseOut);
      };
    }
  }, [ref, roller]);
  return [ref, current];
};

export default function BigLogo() {
  const [ref, current] = useHover();
  return (
    <div
      style={{ position: "relative", marginLeft: "auto", marginRight: "auto" }}
    >
      <img ref={ref} src={bigLogo} alt="big logo" style={{ width: "500px" }} />
      <div style={{ position: "absolute", top: "-14px", left: "364px" }}>
        {current}
      </div>
    </div>
  );
}
