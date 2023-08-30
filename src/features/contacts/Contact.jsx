import React from "react";

export const Contact = ({ name, description}) => {
    return (
        <div className="contact-container">
            <p className="contact-title contact">{name}</p>
            {Object.values(description).map((value, index) => (
                <p key={index} className="contact">
                    {value}
                </p>
            ))}
        </div>
    )
}