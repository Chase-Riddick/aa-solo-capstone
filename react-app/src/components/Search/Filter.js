import './filter.css'

export default function Filter ({
    fishQuery,
    setFishQuery,
    minWeight,
    setWeightMin,
    maxWeight,
    setWeightMax,
    minLength,
    setLengthMin,
    maxLength,
    setLengthMax }) {

        const updateFishQuery = (e) => setFishQuery(e.target.value);

    return (
        <div className="filter-bar">
        <div className="filters-heading">Filters</div>
        <div className="wrap">
        <input className="filter-search-bar" value={fishQuery} onChange={updateFishQuery} placeholder={"Text"}></input>
        </div>
        <div className="filter-param-container">
            <div className='filter-container-heading'>Weight</div>
            <div className='min-max-container'>
            <div className="filterbar-label">
                <div>Min</div>
                <select
                    value={minWeight}
                    onChange={(e) => setWeightMin(parseInt(e.target.value, 10))}
                >
                    <option value="0">0+</option>
                    <option value="5">5+</option>
                    <option value="10">10+</option>
                    <option value="15">15+</option>
                    <option value="25">25+</option>
                    <option value="30">30+</option>
                    <option value="50">50+</option>
                    <option value="100">100+</option>
                    <option value="150">150+</option>
                    <option value="200">200+</option>
                </select>
            </div>
            <div className="filterbar-label">
                <div>Max</div>
                <select
                    value={maxWeight}
                    onChange={(e) => setWeightMax(parseInt(e.target.value, 10))}
                >

                    <option value="15">15+</option>
                    <option value="25">25+</option>
                    <option value="30">30+</option>
                    <option value="50">50+</option>
                    <option value="100">100+</option>
                    <option value="150">150+</option>
                    <option value="200">200+</option>
                    <option value="200">300+</option>
                    <option value="200">400+</option>
                    <option value="200">500</option>
                    <option value="99999999999">Any Weight</option>
                </select>
            </div>
            </div>
        </div>
        <div className="filter-param-container">
            <div className='filter-container-heading'>Length</div>
            <div className='min-max-container'>
            <div className="filterbar-label">
               <div> Min</div>
                <select
                    value={minLength}
                    onChange={(e) => setLengthMin(parseInt(e.target.value, 10))}
                >
                    <option value="0">0+</option>
                    <option value="12">12+</option>
                    <option value="18">18+</option>
                    <option value="24">24+</option>
                    <option value="900000">36+</option>
                    <option value="1000000">48+</option>
                    <option value="1250000">96+</option>
                    <option value="1500000">150+</option>

                </select>
            </div>
            <div className="filterbar-label">
                <div>Max</div>
                <select
                    value={maxLength}
                    onChange={(e) => setLengthMax(parseInt(e.target.value, 10))}
                >
                    <option value="700000">18+</option>
                    <option value="800000">24+</option>
                    <option value="900000">36+</option>
                    <option value="1000000">48+</option>
                    <option value="1250000">96+</option>
                    <option value="1500000">150+</option>
                    <option value="1500000">200</option>
                    <option value="99999999999">Any Length</option>
                </select>
            </div>
            </div>
        </div>
    </div>

    )
}