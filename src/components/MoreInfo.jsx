import { useParams } from "react-router-dom";

const MoreInfo = ({ articles }) => {

    const { id } = useParams();

    const summary = articles.map(article => {
        if (article.id.replaceAll('/', '-') === id) {
            return (
                <>
                    <div key={article.id}>
                         <img className='Headline.css' alt="Cover" src={article.fields.thumbnail} width="400" /> 
                        <h2>{article.webTitle}</h2>
                        <p>{article.fields.bodyText}</p>
                    </div>
                </>
            );
         } 
         return <></>
        })
 
    return (
        <>
       { summary }
        </>
    );
}

export default MoreInfo;

       