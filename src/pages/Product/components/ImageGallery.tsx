import { useState } from "react";

interface ImageGalleryProps {
    img: string[];
}

const ImageGallery = ({ img }: ImageGalleryProps) => {
    const [mainImage, setMainImage] = useState(img[0]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setMainImage(img[index]);
        setActiveIndex(index);
    };

    return (
        <div className="flex flex-col items-center max-w-2xl w-full">
            <div className="w-[415px] h-[375px] mb-5">
                <img src={mainImage} className="w-full max-h-96 object-contain rounded-lg transition duration-500 ease-in-out" alt="Main" />
            </div>
            <div className="flex justify-between mt-4 w-full gap-x-3">
                {img.map((image, index) => (
                    <div className={`w-1/3 ${activeIndex === index ? 'shadow-xl' : ''}`}>
                        <img
                            key={index}
                            src={image}
                            className="w-full h-full bg-slate-50 p-3 cursor-pointer rounded-md transition-transform transform hover:scale-105 object-contain "
                            onClick={() => handleImageClick(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;