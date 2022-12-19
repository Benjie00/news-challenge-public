import './Headline.css'
import { NavLink } from 'react-router-dom';

const Headline = ({ articles }) => {
  
    return (
        <>
            {articles.map(article => (
                <NavLink to={`/moreinfo/${article.id.replaceAll("/", "-")}`} key={article.id}>
                    <img className='Headline.css' alt="Cover" src={article.fields.thumbnail} width="400"/>
                    <h2>{article.webTitle}</h2>
                </NavLink>
            ))}
        </>
    );
}

export default Headline;

