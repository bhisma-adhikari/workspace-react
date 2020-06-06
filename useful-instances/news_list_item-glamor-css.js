import React from 'react'; 
import { css } from 'glamor'; 

const NewsItem = (props) => {
    
    let news_item = css({
        padding: '20px',
        boxSizing: 'border-box', 
        borderBottom: '1px solid gray',
        ':hover': {
            color: 'red',
        },
        '@media(max-width: 500px)': {
            color: 'blue', 
        }
    });

    let item_grey = css({
        background: 'lightgray',
    });

    return (
        // <div {...news_item} {...item_grey}>
        <div className={`${news_item} ${item_grey}`}>
            <h3>{props.item.title}</h3>
            <div>
                {props.item.feed}
            </div>
        </div>
    ); 
}

export default NewsItem;  