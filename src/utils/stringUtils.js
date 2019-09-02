import React from "react";

export function formatTextWithNewLines(text) {
  return text.split("\n").map((item, i) => {
    return <p>{item}</p>;
  });
}
