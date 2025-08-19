import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ShowData = ({ skills }) => {
    return React.createElement(
        "table", 
        { className: "table table-striped table-bordered mt-3" }, 
        React.createElement(
            "tbody",
            null,
        skills.map((skill, ) =>
            React.createElement("tr", 
                {key: skill.id },
                React.createElement("td", null, skill.title),
            )
        )
    )
    );
};
const Form = ({ onAdd}) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const newSkill = {
            id: crypto.randomUUID(),
            title: data.title,
        };
        onAdd(newSkill);
        reset();
    };
    return React.createElement(
        "form",
        { onSubmit: handleSubmit(onSubmit), className: "mt-3" },
        React.createElement("input",{
            ...register("title", { required: true }),
            className: "form-control mb-2",
            placeholder: "Enter skill title"
        }),
        React.createElement("button",
            { type: "submit", className: "btn btn-primary" },
            "Add Skill"
        )
    );
}
const Skill = () => {
    const [skills, setSkills] = useState([
        {id : crypto.randomUUID(), title: "React"},
        {id : crypto.randomUUID(), title: "JavaScript"},
        {id : crypto.randomUUID(), title: "CSS"},
        {id : crypto.randomUUID(), title: "HTML"},
        {id : crypto.randomUUID(), title: "Node.js"},
        
    ]);
    


const addSkill = (skill) => {
    setSkills((prevSkills) => [...prevSkills, skill]);
}
    return React.createElement(
        "div",
        { className: "container mt-5" },
        React.createElement("h2" , null, "Skills App"),
        React.createElement(Form, { onAdd: addSkill }),
        React.createElement(ShowData, { skills: skills })
    );
};

export default Skill;

            