import React from "react";
import "./index.css";

export default function Overview() {
  return (
    <div className="container">
      <h4>Course Description</h4>
      <div>
        <input type="checkbox" class="read-more-state" id="post-1" />

        <p className="read-more-wrap grey">
          Do you want to become a UI/UX designer but you don't know where to
          start? This course will allow you to develop your user interface
          design skills and you can add UI designer to your CV and start getting
          clients for your skills. <br />
          <br />
          Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I
          will help you learn and master Figma app comprehensively from scratch.
          Figma is an innovative and brilliant tool for User Interface design.
          It's used by everyone from entrepreneurs and start-ups to Apple,
          Airbnb, Facebook, etc.{" "}
          <span class="read-more-target">
            Libero fuga facilis vel consectetur quos sapiente deleniti eveniet
            dolores tempore eos deserunt officia quis ab? Excepturi vero tempore
            minus beatae voluptatem!
          </span>
        </p>

        <label for="post-1" class="read-more-trigger"></label>
      </div>

      <div>
        <input type="checkbox" class="read-more-state" id="post-2" />
      </div>

      <section className="what-learn mt-5">
        <h4>What you'll learn</h4>
        <div className="two-list">
          <div>
            <ul className="grey mb-0">
              <li>Become a UI/UX designer.</li>
              <li>You will be able to start earning money Figma skills.</li>
              <li>Build a UI project from beginning to end.</li>
              <li>Work with colors & fonts.</li>
              <li>You will create your own UI Kit.</li>
            </ul>
          </div>
          <div>
            <ul className="grey mb-0">
              <li>Build & test a complete mobile app.</li>
              <li>Learn to design mobile apps & websites.</li>
              <li>Design 3 different logos.</li>
              <li>Create low-fidelity wireframe.</li>
              <li>Downloadable exercise files.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="requirements mt-5">
        <h4>Requirements</h4>
        <ul className="grey">
          <li>
            We do not require any previous experience or pre-defined skills to
            take this course. A great orientation would be enough to master
            UI/UX design.
          </li>
          <li>A computer with a good internet connection.</li>
          <li>Adobe Photoshop (OPTIONAL)</li>
        </ul>
      </section>
    </div>
  );
}
