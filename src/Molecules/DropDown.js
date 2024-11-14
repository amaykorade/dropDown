import React, { useState } from 'react'

const DropDown = ({ items = ['Option 1', 'Option 2', 'Option 3'] }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div>
            <button onMouseEnter={() => setIsOpen(true)} > {selectedItem || "Select Options"} </button>
            {isOpen && (
                <div onMouseLeave={() => isOpen(false)} >
                    <ul>
                        {items.map((item, index) => (
                            <li onClick={() => handleItemClick(item)} > {item} </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DropDown
