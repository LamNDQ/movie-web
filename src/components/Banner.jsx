import ImgTemp from "../assets/temp-1.jpeg";

function Banner() {
    return (
        <div className="w-full h-[700px] bg-[url(./banner.png)] bg-center bg-no-repeat relative">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
            <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
                <div className="flex flex-col space-y-5 items-baseline w-[50%]">
                    <p className="text-white text-md bg-gradient-to-r from-red-600 to-white py-1 px-3 ">TV Show</p>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-white text-3xl">Nghe nói em thích tôi</h2>
                        <div className="flex items-center space-x-3"></div>
                    </div>
                    <p className="text-white">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Commodi, quidem natus fugit consequuntur expedita rerum, officia ab magnam non nisi vitae,
                        aperiam impedit consequatur tenetur quibusdam nesciunt dolore unde aspernatur!
                    </p>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-white bg-black font-bold text-lg">Chi tiết</button>
                        <button className="p-2 text-white bg-red-500 font-bold text-lg">Xem phim</button>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="w-[300px] h-[500px] relative">
                        <img
                            src={ImgTemp}
                            alt="temp"
                            className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner