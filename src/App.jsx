import { useState  } from "react"
import {BsChevronCompactLeft, BsChevronCompactRight,} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"

function App() {

  const slides = [
    {
      url : 'https://images.unsplash.com/photo-1612731427528-9980b4af1b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      url : 'https://images.unsplash.com/photo-1615526675651-91bdbee68170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      url : 'https://images.unsplash.com/photo-1591091160199-13ba471d8198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbXB1dGVyJTIwa2V5Ym9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      url : 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxDcFZvcEk3VHJYOHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      url : 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDh8Q3BWb3BJN1RyWDh8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      url : 'https://images.unsplash.com/photo-1495521939206-a217db9df264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDl8Q3BWb3BJN1RyWDh8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === -1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }


  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
     <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover object-contain duration-500"></div>
      {/* left arrow */}
      <div  className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
      <BsChevronCompactLeft onClick={() => prevSlide()} size={30}/>
      </div>
      {/* right arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
      <BsChevronCompactRight onClick={() => nextSlide()} size={30}/>
      </div>
      <div className="flex top-4 justify-center py-2">
      {
        slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => setCurrentIndex(slideIndex)} className="text-2xl  cursor-pointer">
        <RxDotFilled/>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default App
