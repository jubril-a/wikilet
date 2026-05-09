import {
    ArrowLeftIcon,
    ArrowRightIcon
} from "@heroicons/react/24/outline"
import { RefObject } from "react"

const ScrollBtns = ({scroller} : {scroller: RefObject<HTMLDivElement | null>}) => {


  const scroll = (direction: "forward" | "backward") => {
    if (scroller?.current) {

      const multiplier = direction == "forward" ? 1 : -1
      scroller.current.scrollBy({ left: multiplier * scroller.current.clientWidth, behavior: "smooth" });
    }
  }

  return (
    <div className="max-[660px]:hidden min-w-fit">
        <button onClick={() => scroll("backward")} className="bg-[#F5F5F5] hover:bg-primary-2 cursor-pointer rounded-full p-2.5 md:p-3.5 mr-4">
            <ArrowLeftIcon className="size-6" />
        </button>
        <button onClick={() => scroll("forward")} className="bg-[#F5F5F5] hover:bg-primary-2 cursor-pointer rounded-full p-2.5 md:p-3.5">
            <ArrowRightIcon className="size-6" />
        </button>
    </div>
  )
}

export default ScrollBtns