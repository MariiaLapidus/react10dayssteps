import React from 'react';

const MovieTabs = (props) => {
    const {sort_by, updateSortBy} = props;

    const handleClick = (value) => {
        return () => {
            updateSortBy(value);
        }
    }

    const getClassLink = (value) => {
        return `nav-link
                    ${sort_by=== value ? "active" : "" } `

    }

        return (
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div
                    //     className={`nav-link
                    // ${sort_by=== "popularity.desc" ? "active" : "" } `}
                    className={getClassLink("popularity.desc")}
                    onClick={handleClick ("popularity.desc")}
                    >
                        Popularity desc
                    </div>
                </li>
                <li className="nav-item">
                    <div
                    //     className={`nav-link
                    // ${sort_by=== "revenue.desc" ? "active" : "" } `}
                        className={getClassLink("revenue.desc")}
                         onClick={handleClick ("revenue.desc")}
                    >
                        Revenue desc
                    </div>
                </li>
                <li className="nav-item">
                    <div
                        // className={`nav-link
                        //  ${sort_by=== "vote_average.desc" ? "active" : "" }`}
                        className={getClassLink("vote_average.desc")}
                         onClick={handleClick ("vote_average.desc")}
                    >
                        Vote average desc
                    </div>
                </li>
            </ul>
        );
    }


export default MovieTabs;