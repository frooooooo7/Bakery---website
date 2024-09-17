import { useEffect, useState } from "react";
import error_img from "../../../assets/no_image.jpg"

interface ImageGalleryProps {
    img: string[];
}

const ImageGallery = ({ img }: ImageGalleryProps) => {
    const [mainImage, setMainImage] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);


    // Ensure that the main image is displayed correctly when the component mounts.
    useEffect(() => {
        if (img.length > 0) {
            setMainImage(img[0]);
        }
    }, [img]);

    const handleImageClick = (index: number) => {
        setMainImage(img[index]);
        setActiveIndex(index);
    };

    return (
        <div className="flex flex-col items-center max-w-2xl w-full">
            <div className="w-[300px] h-[350px] mb-5">
                <img src={mainImage || error_img} className="w-full h-full object-contain rounded-lg transition duration-500 ease-in-out" alt="Main" />
            </div>
            <div className="flex justify-between mt-4 w-full gap-x-3">
                    <div className={`w-1/3 ${activeIndex === 0 ? 'shadow-xl' : ''}`}>
                        <img
                            src={img[0] || error_img}
                            className="w-full h-full bg-slate-50 p-3 cursor-pointer rounded-md transition-transform transform hover:scale-105 object-contain"
                            onClick={() => handleImageClick(0)}
                        />
                    </div>
                    <div className={`w-1/3 ${activeIndex === 1 ? 'shadow-xl' : ''}`}>
                        <img
                            src={img[1] || error_img}
                            className="w-full h-full bg-slate-50 p-3 cursor-pointer rounded-md transition-transform transform hover:scale-105 object-contain"
                            onClick={() => handleImageClick(1)}
                        />
                    </div>
                    <div className={`w-1/3 ${activeIndex === 2 ? 'shadow-xl' : ''}`}>
                        <img
                            src={img[2] || error_img}
                            className="w-full h-full bg-slate-50 p-3 cursor-pointer rounded-md transition-transform transform hover:scale-105 object-contain"
                            onClick={() => handleImageClick(2)}
                        />
                    </div>
            </div>
        </div>
    );
};

export default ImageGallery;