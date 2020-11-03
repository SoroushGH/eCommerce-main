import React from 'react'
import '../styles/searchBox.css'

const SearchBox = () => {

    return (
        <div className='container'>
            <div className="row searchBox">
                <form className="form-inline">
                    <input className="form-control form-control-lg" type="search" placeholder="Search Your Items ..." aria-label="Search" />
                </form>
            </div>
        </div>
    )
}

export default SearchBox;