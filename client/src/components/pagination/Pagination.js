import "./Pagination.css"

function Pagination( {goToPrevPage, goToNextPage} ) {

    return (
        <div className={"pagination-container"}>
            <button className={"pagination-button  prev"} onClick={goToPrevPage}> Prev </button>
            <button className={"pagination-button  next"} onClick={goToNextPage}> Next </button>
        </div>
    );
}

export default Pagination;