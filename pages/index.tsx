import React from "react";
import * as resumeData from "../resume.json";

export default function Home() {
  const { fullname, role, socials, biodata } = resumeData;

  const { email, education, experiences, extras } = biodata;

  const { institutions } = education;
  const { items } = experiences;

  const details = items.map((i) => i.details);
  const workSections = details.map((i) => i.sections);

  const { section } = extras;

  return (
    <div style={{ padding: 30 }}>
      <div>{fullname}</div>
      <div>{role}</div>
      <h1>Socials</h1>
      {socials.map((social: any, key: any) => {
        return (
          <div key={key} style={{ marginTop: "5px", display: "flex" }}>
            <div style={{ marginRight: "5px" }}>{social.title}</div>
            <a href={social.url} target="_blank">
              {social.url}
            </a>
          </div>
        );
      })}
      <div style={{ marginTop: "5px", display: "flex" }}>
        Email:
        <a href={email} target="_blank">
          {email}
        </a>
      </div>
      <h1>Education</h1>
      {institutions.map((key, i) => {
        return (
          <div key={i} style={{ marginTop: "10px", display: "flex" }}>
            <div>{institutions[i].title}</div>
            <div>{institutions[i].institution}</div>
            <div>{institutions[i].duration}</div>
          </div>
        );
      })}
      <h1>Work Experience</h1>
      {items.map((key, i) => {
        return (
          <div key={i}>
            <div>{items[i].title}</div>
            <div>{items[i].duration}</div>
            <div>{items[i].organisation}</div>
            <div>{items[i].location}</div>
            <a href={items[i].url}>{items[i].url}</a>
            {workSections.map((sec, key) =>
              sec.map(({ title, section }, key2) => (
                <div>
                  <h3>{title}</h3>
                  {section?.map((s) => (
                    <p>{s}</p>
                  ))}
                </div>
              ))
            )}
          </div>
        );
      })}
      <div>
        <h1>Extra</h1>
      </div>
      {section.map(({ title, sections }, key2) => (
        <div>
          <h3>{title}</h3>
          {sections?.map((s) => (
            <p>{s}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
