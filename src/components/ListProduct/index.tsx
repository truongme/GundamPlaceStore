import React from "react";
import Card from "../Card";

const ListProduct = () => {
    const arr = ["Gumdam", "Place", "Store"]
    return(
        <div>
            {arr.map((item: string) => (
                <>
                    <div>{item}</div>
                    <Card/>
                </>
            ))}
        </div>
    )
}

export default ListProduct