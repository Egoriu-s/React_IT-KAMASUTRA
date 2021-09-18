import React, {useState} from "react";
import style_paginator from './Paginator.module.css'

const Paginator = (props) => {

    let pagesAll = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesAll; i++) {
        pages.push(i);
    }

    let portionSize = 10;
    let portionAll = Math.ceil(pagesAll / portionSize);
    
    let [portionNumber, setPortionNumber] = useState(Math.ceil(props.currentPage / portionSize));

    let leftOFF = (portionNumber - 1) * portionSize + 1;
    let rightOFF = portionNumber * portionSize;

    return (

        <div className={style_paginator.page_number}>

            {portionNumber > 1 &&
            <div>
                <button onClick={() => {
                    props.buttonPrevChanged(leftOFF - 1);
                    debugger
                    setPortionNumber(portionNumber - 1);
                    debugger
                }}>{"<"} </button>
            </div>
            }

            {
                pages
                    .filter((el) => el >= leftOFF && el <= rightOFF)
                    .map((el) =>
                        <div key={el}>
                            <button className={props.currentPage === el ? style_paginator.selected_page : ''}
                                    onClick={() => {
                                        props.numberPageChanged(el);
                                    }}>{el}</button>
                        </div>
                    )
            }

            {portionNumber < portionAll &&
            <div>
                <button onClick={() => {
                    props.buttonNextChanged(rightOFF + 1);
                    setPortionNumber(portionNumber + 1);
                }}>{">"}</button>
            </div>
            }

        </div>

    )

};

export default Paginator;
