import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

interface CardProps {
  img: string;
  title: string;
  price: string;
  discountPrice?: string;
  isDiscount: boolean;
  isNew: boolean;
  background: string
}

const Card = (props: CardProps) => {
  return (
    <div className={`relative ${props.background} pb-5 pt-7 shadow-lg flex flex-col justify-between`} style={{ width: '300px', height: '350px' }}>
      <div>
        <div>
          {props.isDiscount && (
            <span className="absolute top-0 left-0 bg-pink-600 text-white px-2 py-1 text-xs font-bold">SALE</span>
          )}
          {props.isNew && (
            <span className="absolute top-0 right-0 bg-black text-white px-2 py-1 text-xs font-bold">NEW</span>
          )}
          <div className="h-40 flex items-center justify-center px-4">
            <img src={props.img} className="h-full object-contain" alt={props.title} />
          </div>
          <h1 className="text-center font-bold px-4">{props.title}</h1>
          <div className="px-4">
            {props.isDiscount ? (
              <div className="flex items-center justify-center space-x-3">
                <h3 className="text-gray-400 line-through font-bold">{Number(props.price).toFixed(2)}</h3>
                <h3 className="text-pink-700 font-bold">{Number(props.discountPrice).toFixed(2)} PLN</h3>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <h3 className="text-pink-700 font-bold">{Number(props.price).toFixed(2)} PLN</h3>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 pt-4">
          <button className="w-12 h-12 bg-pink-700 text-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button className="w-12 h-12 bg-pink-700 text-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
