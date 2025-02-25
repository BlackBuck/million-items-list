import Image from "next/image";
import {VirtualScroll} from "./components/virtual-scroll";

export default function Home() {
  return (
    <div className="dark align-center min-w-full justify-center p-auto min-h-full">
      <VirtualScroll numberOfItems={1000000}/>
    </div>
  );
}
