import { Link } from "react-router-dom";
import "./CategoryCard.scss";
import { motion } from "framer-motion";

const CategoryCard = ({category}) => {
    return (
        <Link to={`/category/${category}`}>
            <motion.div className="category-card"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition= {{ duration: 1.5 }} // 1s
            >
                <h4 className="category-name">{category}</h4>
            </motion.div>
        </Link>
    )
}

export default CategoryCard