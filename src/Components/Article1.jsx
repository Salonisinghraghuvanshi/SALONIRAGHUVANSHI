import React from "react";

const ArticleContent = ({ text, text1 }) => (
  <div>
    <h2>Introduction</h2>
    <p>
      HTML (HyperText Markup Language) is the foundation of web development.
      It’s the standard language used to create web pages, and understanding it
      is essential for anyone looking to build websites or engage in web design.
      Whether you’re a beginner or someone looking to brush up on your skills,
      this guide will provide a comprehensive roadmap to mastering HTML.
    </p>

    <h2>1. Understanding the Basics</h2>

    <h3>1.1. What is HTML?</h3>
    <p>
      HTML is a markup language used to structure content on the web. It uses a
      system of tags to define elements such as headings, paragraphs, links,
      images, and more.
    </p>

    <h3>1.2. Why Learn HTML?</h3>
    <ul>
      <li>
        <strong>Foundational Skill:</strong>
        <p>
          HTML is the backbone of any website. Learning it is the first step
          towards becoming a web developer or designer.
        </p>
      </li>
      <li>
        <strong>Career Opportunities:</strong>
        <p>
          Proficiency in HTML opens up numerous career paths, including web
          development, design, and digital marketing.
        </p>
      </li>
      <li>
        <strong>Empowerment:</strong>
        <p>
          Knowing HTML allows you to create and edit web pages, making you more
          self-sufficient in managing online content.
        </p>
      </li>
    </ul>

    <h2>2. Getting Started with HTML</h2>

    <h3>2.1. Setting Up Your Environment</h3>
    <ul>
      <li>
        <strong>Text Editors:</strong> Choose a text editor like Visual Studio
        Code, Sublime Text, or Atom to write your HTML code.
      </li>
      <li>
        <strong>Web Browsers:</strong> Use browsers like Google Chrome, Firefox,
        or Edge to preview your HTML files.
      </li>
    </ul>

    <h3>2.2. The Basic Structure of an HTML Document</h3>
    <p>Here’s a simple example to get you started:</p>
    <pre>
      <code>
        &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;My First
        Web Page&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;Welcome to
        My Web Page&lt;/h1&gt; &lt;p&gt;This is a paragraph of text on my
        page.&lt;/p&gt; &lt;/body&gt; &lt;/html&gt;
      </code>
    </pre>
    <div class="highlight">
      <p>
        <strong class="text-dark">Explanation:</strong>
      </p>
      <ul>
        <li>
          <code>&lt;!DOCTYPE html&gt;</code>: Declares the document type.
        </li>
        <li>
          <code>&lt;html&gt;</code>: The root element of the page.
        </li>
        <li>
          <code>&lt;head&gt;</code>: Contains meta-information about the
          document, such as the title.
        </li>
        <li>
          <code>&lt;title&gt;</code>: The title of the web page, displayed on
          the browser tab.
        </li>
        <li>
          <code>&lt;body&gt;</code>: Contains the content that is displayed on
          the web page.
        </li>
        <li>
          <code>&lt;h1&gt;</code>: Represents a heading.
        </li>
        <li>
          <code>&lt;p&gt;</code>: Represents a paragraph.
        </li>
      </ul>
    </div>

    <h2>3. Diving Deeper: Essential HTML Tags</h2>

    <h3>3.1. Headings and Paragraphs</h3>
    <ul>
      <li>
        <strong>
          Headings (<code>&lt;h1&gt;</code> to
          <code>&lt;h6&gt;</code>):
        </strong>
        Used to define headings, with <code>&lt;h1&gt;</code> being the highest
        level.
      </li>
      <li>
        <strong>
          Paragraphs (<code>&lt;p&gt;</code>):
        </strong>{" "}
        Used to define blocks of text.
      </li>
    </ul>

    <h3>3.2. Links and Images</h3>
    <ul>
      <li>
        <strong>
          Links (<code>&lt;a&gt;</code>):
        </strong>{" "}
        Used to create hyperlinks. Example:
      </li>
      <pre>
        <code>
          &lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;
        </code>
      </pre>
      <li>
        <strong>
          Images (<code>&lt;img&gt;</code>):
        </strong>{" "}
        Used to embed images. Example:
      </li>
      <pre>
        <code>&lt;img src="image.jpg" alt="Description of Image"&gt;</code>
      </pre>
    </ul>

    <h3>3.3. Lists</h3>
    <ul>
      <li>
        <strong>
          Unordered Lists (<code>&lt;ul&gt;</code>):
        </strong>
        Creates a bullet-point list.
      </li>
      <pre>
        <code>
          &lt;ul&gt; &lt;li&gt;Item 1&lt;/li&gt; &lt;li&gt;Item 2&lt;/li&gt;
          &lt;/ul&gt;
        </code>
      </pre>
      <li>
        <strong>
          Ordered Lists (<code>&lt;ol&gt;</code>):
        </strong>
        Creates a numbered list.
      </li>
      <pre>
        <code>
          &lt;ol&gt; &lt;li&gt;First item&lt;/li&gt; &lt;li&gt;Second
          item&lt;/li&gt; &lt;/ol&gt;
        </code>
      </pre>
    </ul>

    <h3>3.4. Forms</h3>
    <p>
      <strong>
        Forms (<code>&lt;form&gt;</code>):
      </strong>{" "}
      Used to collect user input. Forms are crucial for creating interactive
      websites.
    </p>
    <p>Example of a simple form:</p>
    <pre>
      <code>
        &lt;form action="/submit-form" method="post"&gt; &lt;label
        for="name"&gt;Name:&lt;/label&gt; &lt;input type="text" id="name"
        name="name"&gt; &lt;input type="submit" value="Submit"&gt; &lt;/form&gt;
      </code>
    </pre>

    <h2>4. Best Practices for Writing HTML</h2>

    <h3>4.1. Clean and Readable Code</h3>
    <ul>
      <li>
        <strong>Indentation:</strong> Use consistent indentation to make your
        code readable.
      </li>
      <li>
        <strong>Commenting:</strong> Use comments (
        <code>&lt;!-- comment --&gt;</code>) to explain sections of your code.
      </li>
    </ul>

    <h3>4.2. Semantic HTML</h3>
    <ul>
      <li>
        <strong>Use Semantic Tags:</strong> Tags like
        <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>,
        <code>&lt;article&gt;</code>, and
        <code>&lt;section&gt;</code> add meaning to your content, improving
        accessibility and SEO.
      </li>
    </ul>

    <h3>4.3. Accessibility</h3>
    <ul>
      <li>
        <strong>Alt Text for Images:</strong> Always provide descriptive alt
        text for images to improve accessibility for users with screen readers.
      </li>
      <li>
        <strong>Form Labels:</strong> Ensure that all form inputs have
        corresponding labels.
      </li>
    </ul>

    <h2>5. Practice, Practice, Practice!</h2>

    <h3>5.1. Build Simple Projects</h3>
    <p>
      Start with a simple personal webpage, then gradually add more complexity
      as you become comfortable with HTML.
    </p>

    <h3>5.2. Online Coding Platforms</h3>
    <ul>
      <li>
        <strong>FreeCodeCamp:</strong> Offers interactive tutorials for learning
        HTML.
      </li>
      <li>
        <strong>Codecademy:</strong> Provides a hands-on approach with
        interactive lessons.
      </li>
      <li>
        <strong>W3Schools:</strong> A great reference for learning HTML with
        examples and exercises.
      </li>
    </ul>

    <h3>5.3. Participate in Challenges</h3>
    <ul>
      <li>
        <strong>100 Days of Code:</strong> A challenge where you code every day
        for 100 days.
      </li>
      <li>
        <strong>Frontend Mentor:</strong> Provides real-world projects to
        improve your skills.
      </li>
    </ul>

    <h2>6. Resources for Further Learning</h2>

    <h3>6.1. Books</h3>
    <ul>
      <li>
        <strong>
          "HTML and CSS: Design and Build Websites" by Jon Duckett:
        </strong>
        A visually engaging book for beginners.
      </li>
      <li>
        <strong>"Learning Web Design" by Jennifer Robbins:</strong>
        Covers HTML, CSS, and more.
      </li>
    </ul>

    <h3>6.2. Online Tutorials</h3>
    <ul>
      <li>
        <strong>MDN Web Docs:</strong> Comprehensive documentation and tutorials
        on HTML and web development.
      </li>
      <li>
        <strong>YouTube Channels:</strong> Channels like "Traversy Media" and
        "The Net Ninja" offer excellent video tutorials.
      </li>
    </ul>

    <h2>7. Conclusion</h2>
    <p>
      Learning HTML is your first step towards mastering web development. By
      understanding the basics, practicing regularly, and using the resources
      available, you can build a solid foundation that will serve you well in
      your web development journey. HTML may be just the beginning, but it's a
      powerful tool that opens up endless possibilities in the digital world.
    </p>

    <p>
      <strong>Happy coding!</strong>
    </p>
  </div>
);

const Article1 = () => (
  <div>
    <ArticleContent />
  </div>
);

export default Article1;
