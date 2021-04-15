import getOptimizedUrl from '../../../utils/images'
import './card.css'

const ProductCard = ({ items }) => 
items[0].map(product => (
  <div key={product.id}>
  <div className="card-product">
		<div className="card-image">
		  <img
        src={getOptimizedUrl(product.images[0], {
        height: 180,
        width: 230,
        })}
        alt="none"
      />
		</div>
	  <div className="card-info">       
			<h3>{product.displayName}</h3>
		</div>
  </div>
  </div>
))

export default ProductCard
