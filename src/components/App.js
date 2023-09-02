import React, { useState } from "react";
import Nav from "./Nav";
import Lists from "./Lists";
import Filter from "./Filter";
import hogs from "../porkers_data";

function App() {
	const [porkersData, setPorkersData] = useState(hogs);
	const [isGreased, setIsGreased] = useState(false);
	const [sortOption, setSortOption] = useState("name");

	const filteredAndSortHogs = porkersData
		.filter((porker)=> (isGreased ? porker.greased : true))
		.sort((a, b) => {
      if (sortOption === "weight") {
        return a.weight - b.weight;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

	const handleNewHogFormSubmit = (newHog) => setPorkersData([...porkersData, newHog])

	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav />
			</div>
			<div className="sixteen wide column centered">
				<Filter
					isGreased={isGreased}
					setIsGreased={setIsGreased}
					sortOption={sortOption}
					setSortOption={setSortOption}
					onSubmitChange={handleNewHogFormSubmit}
				 />
			</div>
			<div className="sixteen wide column centered">
				<Lists hogs={filteredAndSortHogs} />
			</div>
		</div>
	);
}

export default App;