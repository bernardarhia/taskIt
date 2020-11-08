import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import Button from "./Button";

const ProjectPortal = () => {
  const [closePortal, setClosePortal] = useState(false);

  const handleClosePortal = () => {
    setClosePortal(true);
  };

  // input counters
  let [titleCount, seTitleCount] = useState(250);

  // inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  // handling of inputs

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  // Working on the tags
  const [tags, setTags] = useState([]);
  const [disableTagsInput, setDisableTagsInput] = useState(false);

  // remove tags
  const removeTags = (index) => {
    setTags(
      tags.filter((tag, tagIndex) => {
        setDisableTagsInput(false);
        return index !== tagIndex;
      })
    );
  };

  // add tags
  const addTags = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === " ".trim()) return;
      setTags([...tags, e.target.value]);
      e.target.value = "";
      return;
    }
    if (tags.length === 3) {
      setDisableTagsInput(true);
      e.target.value = "";
      return true;
    }
  };

  const addProject = () => {
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      content.trim() === "" ||
      tags.length === 0
    ) {
     alert('Fill all form')
    }
    
  };

  return (
    <div className={closePortal ? "close__portal" : "project__portal"}>
      <div className="project__portal-container">
        <div className="head">
          <p className="content">Add project details</p>
          <FiX className="close" onClick={handleClosePortal} />
        </div>

        {/* inputs */}

        <div className="inputs__container">
          <div className="title">
            <label htmlFor="">Title</label>
            <input type="text" value={title} onChange={handleTitle} />
            <span
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: ".5rem 0 0 0",
                color: titleCount <= 0 ? "red" : "#777",
                fontWeight: "600",
              }}
            >
              {titleCount}
            </span>
          </div>
          <div className="description">
            <label htmlFor="">Description</label>
            <input
              type="text"
              value={description}
              onChange={handleDescription}
            />
          </div>
          <div className="content">
            <label htmlFor="">Content</label>
            <textarea
              name=""
              id=""
              value={content}
              onChange={handleContent}
            ></textarea>
          </div>
          <label
            htmlFor=""
            style={{ display: "block", margin: ".5rem 0", color: "#777" }}
          >
            Tags
          </label>
          <div className="tags">
            {tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag.toUppercase()}
                <FiX onClick={() => removeTags(index)} />
              </span>
            ))}

            <input
              type="text"
              onKeyUp={addTags}
              style={{ display: disableTagsInput ? "none" : "inline-block" }}
              placeholder="Add tags"
            />
          </div>

          <div className="btns">
            <Button attr="close" onclick={handleClosePortal}>
              Close
            </Button>
            <Button attr="add" onclick={addProject}>
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPortal;
