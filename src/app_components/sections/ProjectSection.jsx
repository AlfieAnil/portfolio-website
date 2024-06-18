import PortfolioItem from "../items/PortfolioItem";
import portfolio from "../../portfolio/portfolio";
import { useState } from "react";
import { Button } from "../../components/ui/button";

function ProjectSection() {
    const [visibleCount, setVisibleCount] = useState(4);

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    }

    return (
        <div className="mb-4">
            <h2 className="text-center text-3xl font-bold mb-4">Previous Projects</h2>
            <div className="flex flex-wrap content-start md:items-start justify-center md:items-stretch">
                {portfolio.slice(0, visibleCount).map((item, index) => {
                    return (
                        <PortfolioItem title={item.title} description={item.description} stack={item.stack} github={item.github} link={item.link} img={item.img}/>
                    )
                })}
            </div>

            {visibleCount < portfolio.length && (
                <Button className="flex mx-auto" onClick={loadMore}>Load More</Button>
            )}
        </div>
    )
}

export default ProjectSection;