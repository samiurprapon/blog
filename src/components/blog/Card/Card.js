import React, { useState, useEffect } from "react";
import readingTime from "reading-time";
import { useHistory } from "react-router-dom";

import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardCategory from "./CardCategory";
import CardReadingTime from "./CardReadingTime";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";

const Card = ({ blog }) => {
  const [labels, setLabels] = useState([]);
  const history = useHistory();

  const openBlog = (title, number) => {
    history.push(`/${title}/${number}`);
  };

  useEffect(() => {
    const labels = blog.labels.nodes.filter((value) => {
      return value.name !== "blog";
    });

    setLabels(labels);
  }, [blog.labels.nodes]);

  return (
    <CardContainer>
      <CardHeader>
        <>
          {labels.map((value, i) => {
            return <CardCategory value={value} key={i} />;
          })}
        </>
        <CardReadingTime time={readingTime(blog.body).minutes} />
      </CardHeader>
      <div onClick={() => openBlog(blog.title, blog.number)}>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>{blog.bodyText}</CardDescription>
      </div>
    </CardContainer>
  );
};
export default Card;