import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterAndSort from "./FilterAndSort";
import AddHogForm from "./AddHogForm";
import hogs from "../porkers_data";


function App() {
	const [pigs, setPigs] = useState(hogs)
	const [filters, setFilters] = useState({greased: false});
	const [sortOption, setSortOption] = useState("name");
	const [hiddenHogs, setHiddenHogs] = useState([]);

	const handleFilterChange = (filterType) => setFilters({...filters,[filterType] : !filters[filterType]});

	const handleSortChange = (option) => setSortOption(option);

	const handleHiddenHog = (hog) => setHiddenHogs([...hiddenHogs,hog])

	const filteredAndSortedHogs = hogs
		.filter((hog)=>!filters.greased || hog.greased)
		.filter((hog)=>!hiddenHogs.includes(hog.name))
		.sort((a,b)=>{
			if(sortOption === "name") {
				return a.name.localeCompare(b.name);
			}else if (sortOption === "weight") {
				return a.weight - b.weight;
			}
			return 0;
	});

	const handleAddHog = (newHog) => setPigs([...pigs,newHog]);

	return (
		<div className="App">
			<Nav />
			<FilterAndSort
				filters={filters}
				sortOption={sortOption}
				onFilterChange={handleFilterChange}
				onSortChange={handleSortChange}
			/>
			<AddHogForm onAddHog={handleAddHog}/>
			<HogList hogs={filteredAndSortedHogs} onHideHogs={handleHiddenHog}/>
		</div>
	);
}

export default App;
