document.addEventListener("DOMContentLoaded", function () {
  // HTML Interview Questions Data
  const questions = [
    {
      id: 1,
      category: "basic",
      question: "What is HTML?",
      code: null,
      answer: "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It uses a series of elements and tags to define the structure and presentation of text, images, and other multimedia."
    },
    {
      id: 2,
      category: "basic",
      question: "What are HTML tags?",
      code: null,
      answer: "HTML tags are used to create elements on a web page. Tags usually come in pairs, with an opening tag (e.g., <p>) and a closing tag (e.g., </p>), and they enclose content to define its structure or behavior."
    },
    {
      id: 3,
      category: "basic",
      question: "What is the purpose of the <head> and <body> tags in HTML?",
      code: null,
      answer: "The <head> tag contains metadata and links to resources like stylesheets and scripts, which are essential for the page but not displayed directly. The <body> tag contains the actual content that appears on the webpage."
    },
    {
      id: 4,
      category: "basic",
      question: "What is the difference between an element and a tag in HTML?",
      code: null,
      answer: "A tag is the markup used to define the start or end of an HTML element (e.g., <div>). An element includes the tags and the content between them (e.g., <div>Content</div>)."
    },
    {
      id: 5,
      category: "basic",
      question: "What is the purpose of the <doctype> declaration in HTML?",
      code: null,
      answer: "The <!DOCTYPE> declaration specifies the HTML version being used and ensures that the browser renders the page in standards-compliant mode, preventing it from entering \"quirks mode.\""
    },
    {
      id: 6,
      category: "basic",
      question: "How do you create a hyperlink in HTML?",
      code: null,
      answer: "<a href=\"https://example.com\">Click here</a>  You can create a hyperlink using the <a> tag with the href attribute specifying the URL."
    },
    {
      id: 7,
      category: "basic",
      question: "What are the differences between block-level and inline elements in HTML?",
      code: null,
      answer: "Block-level elements (e.g., <div>, <p>) take up the full width of their container and start on a new line. Inline elements (e.g., <span>, <a>) take up only as much width as needed and do not start on a new line."
    },
    {
      id: 8,
      category: "basic",
      question: "What are semantic HTML elements? Give examples.",
      code: null,
      answer: "Semantic HTML elements clearly describe their meaning in a human- and machine-readable way. Examples include <header>, <footer>, <article>, <section>, <nav>, <aside>, <figure>, <main>, and <time>."
    },
    {
      id: 9,
      category: "basic",
      question: "How do you create a table in HTML?",
      code: "<table>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>",
      answer: "A table is created using the <table> tag, with rows defined by <tr>, and cells within rows by <td> for data and <th> for headers."
    },
    {
      id: 10,
      category: "basic",
      question: "What is the purpose of the <meta> tag in HTML?",
      code: null,
      answer: "The <meta> tag provides metadata about the HTML document, such as character set, author, and viewport settings, which are used by browsers and search engines."
    },
    {
      id: 11,
      category: "intermediate",
      question: "How do you include an image in an HTML document?",
      code: null,
      answer:"<img src=\"image.jpg\" alt=\"Description of the image\"> You can include an image using the <img> tag, specifying the src attribute with the image URL and the alt attribute for alternative text."
    },
    {
      id: 12,
      category: "intermediate",
      question: "What is the purpose of the <form> tag in HTML?",
      code: null,
      answer: "The <form> tag is used to create a form for collecting user input. It can contain input elements like text fields, checkboxes, radio buttons, and submit buttons."
    },
    {
      id: 13,
      category: "intermediate",
      question: "How do you create a dropdown list in HTML?",
      code: null,
      answer: "<select>\n  <option value=\"1\">Option 1</option>\n  <option value=\"2\">Option 2</option>\n</select> A dropdown list is created using the <select> tag, with each option defined by an <option> tag."
    },
    {
      id: 14,
      category: "intermediate",
      question: "What is the difference between <div> and <span> tags?",
      code: null,
      answer: "<div> is a block-level element used for grouping content, while <span> is an inline element used for styling a portion of text or content within a block-level element."
    },
    {
      id: 15,
      category: "intermediate",
      question: "How can you create a responsive layout in HTML?",
      code: null,
      answer: "A responsive layout can be created using CSS media queries, flexible grid systems (like CSS Grid or Flexbox), and setting the viewport meta tag for scaling on different devices."
    },
    {
      id: 16,
      category: "intermediate",
      question: "What is the purpose of the <iframe> tag in HTML?",
      code: null,
      answer: "The <iframe> tag is used to embed another HTML document within the current document. It is often used to embed videos, maps, or other content from different sources."
    },
    {
      id: 17,
      category: "intermediate",
      question: "How do you embed multimedia (audio and video) in an HTML document?",
      code: null,
      answer:"<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n</audio>\n\n<video controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n</video> Multimedia can be embedded using the <audio> and <video> tags with the <source> tag specifying the media file and its type."
    },
    {
      id: 18,
      category: "intermediate",
      question: "What are the different types of lists available in HTML?",
      code: null,
      answer: "HTML supports ordered lists (<ol>), unordered lists (<ul>), and definition lists (<dl>). Each list type uses corresponding child elements like <li> for items and <dt>/<dd> for definitions."
    },
    {
      id: 19,
      category: "intermediate",
      question: "How do you create a favicon for a website?",
      code: null,
      answer:"<link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\"> A favicon is created by linking an icon file (usually .ico, .png, or .svg) using the <link> tag in the <head> section."
    },
    {
      id: 20,
      category: "intermediate",
      question: "How can you add comments in an HTML document?",
      code: null,
      answer:"<!-- This is a comment --> Comments in HTML are added using the <!-- Comment --> syntax. These comments are not rendered by the browser."
    },
    {
      id: 21,
      category: "advanced",
      question: "What is the role of the <canvas> tag in HTML?",
      code: null,
      answer: "The <canvas> tag is used for drawing graphics, animations, or other visual content via JavaScript. It provides a space for dynamic, scriptable rendering of 2D shapes and images."
    },
    {
      id: 22,
      category: "advanced",
      question: "How do you optimize HTML for SEO?",
      code: null,
      answer: "HTML can be optimized for SEO by using semantic tags, descriptive alt attributes for images, meaningful URLs, proper heading hierarchy, meta tags for keywords and descriptions, and structured data like schema.org."
    },
    {
      id: 23,
      category: "advanced",
      question: "What is the difference between <script>, <noscript>, and <template> tags in HTML?",
      code: null,
      answer: "<script> is used to include or reference JavaScript. <noscript> is used to provide content for users who have JavaScript disabled. <template> is used to define HTML fragments that can be cloned and used later by JavaScript, but are not rendered when the page initially loads."
    },
    {
      id: 24,
      category: "advanced",
      question: "How do you implement accessibility features in HTML?",
      code: null,
      answer: "Accessibility in HTML is implemented by using semantic tags, aria-* attributes for assistive technologies, meaningful alt text for images, keyboard navigability, and ensuring proper contrast ratios and focus management."
    },
    {
      id: 25,
      category: "advanced",
      question: "What is the use of the data- attribute in HTML?",
      code: null,
      answer: "<div data-user-id=\"123\" data-role=\"admin\">User Info</div> The data- attribute is used to store custom data directly on HTML elements. This data can be accessed via JavaScript to create dynamic, interactive content without affecting the element's structure."
    },
    {
      id: 26,
      category: "advanced",
      question: "Explain the difference between localStorage, sessionStorage, and cookies in HTML5.",
      code: null,
      answer: "localStorage stores data with no expiration date, sessionStorage stores data for the duration of the page session, and cookies store small pieces of data with a specified expiration time and are sent with every HTTP request."
    },
    {
      id: 27,
      category: "advanced",
      question: "How do you handle forms with multiple inputs and file uploads in HTML?",
      code: null,
      answer: "<form method=\"post\" enctype=\"multipart/form-data\">\n  <input type=\"text\" name=\"username\">\n  <input type=\"file\" name=\"document\">\n  <button type=\"submit\">Submit</button>\n</form> Forms with multiple inputs can be managed using the <form> tag with various input elements. File uploads are handled using <input type=\"file\">, and the form must include enctype=\"multipart/form-data\" attribute for file uploads."
    },
    {
      id: 28,
      category: "advanced",
      question: "What is the purpose of the <picture> tag in HTML?",
      code: null,
      answer:  "<picture>\n  <source media=\"(min-width: 800px)\" srcset=\"large.jpg\">\n  <source media=\"(min-width: 450px)\" srcset=\"medium.jpg\">\n  <img src=\"small.jpg\" alt=\"Image description\">\n</picture> The <picture> tag is used to provide multiple versions of an image for different display conditions, like screen sizes or resolutions. It allows for responsive image loading using <source> elements inside it."
    },
    {
      id: 29,
      category: "advanced",
      question: "How does the <progress> tag differ from the <meter> tag in HTML?",
      code: null,
      answer: "The <progress> tag represents the completion progress of a task (like a download), showing a range from 0 to 1. The <meter> tag represents a scalar measurement within a known range, such as disk usage."
    },
    {
      id: 30,
      category: "advanced",
      question: "What are the new form elements introduced in HTML5?",
      code: null,
      answer: "HTML5 introduced new form elements like <input type=\"email\">, <input type=\"date\">, <input type=\"number\">, <input type=\"range\">, and <input type=\"color\">, along with new attributes like placeholder, autofocus, and required."
    },
    {
      id: 31,
      category: "advanced",
      question: "How do you use the <link> tag for preloading and prefetching resources in HTML?",
      code: null,
      answer:  "<link rel=\"preload\" href=\"style.css\" as=\"style\">\n<link rel=\"prefetch\" href=\"page2.html\"> The <link> tag can use rel=\"preload\" to preload critical resources and rel=\"prefetch\" to load resources that might be needed soon, improving page performance."
    }
  ];

  // DOM Elements
  const questionCard = document.getElementById("question-card");
  const questionList = document.getElementById("question-list");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const showAnswerBtn = document.getElementById("show-answer-btn");
  const progressBar = document.getElementById("progress-bar");
  const currentQuestionSpan = document.getElementById("current-question");
  const totalQuestionsSpan = document.getElementById("total-questions");
  const themeSwitch = document.getElementById("theme-switch");
  const filterCheckboxes = document.querySelectorAll(".filter-options input");

  // State
  let currentQuestionIndex = 0;
  let filteredQuestions = [...questions];

  // Initialize
  totalQuestionsSpan.textContent = questions.length;
  updateQuestionList();
  displayQuestion(currentQuestionIndex);

  // Event Listeners
  prevBtn.addEventListener("click", showPreviousQuestion);
  nextBtn.addEventListener("click", showNextQuestion);
  showAnswerBtn.addEventListener("click", toggleAnswer);

  themeSwitch.addEventListener("change", function () {
    document.documentElement.setAttribute(
      "data-theme",
      this.checked ? "dark" : "light"
    );
  });

  filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterQuestions);
  });

  // Functions
  function displayQuestion(index) {
    const question = filteredQuestions[index];

    if (!question) {
      questionCard.innerHTML = `<div class="no-questions">No questions match your filter criteria.</div>`;
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      showAnswerBtn.disabled = true;
      return;
    }

    let html = `
      <div class="question-number">Question ${question.id}</div>
      <h2 class="question-title">${escapeHtml(question.question)}</h2>
    `;

    if (question.code) {
      html += `
        <div class="code-block">
          <code>${formatCode(question.code)}</code>
        </div>
      `;
    }

    html += `
      <div class="answer-container" id="answer-container">
        <h3>Answer:</h3>
        <div class="answer-content">${escapeHtml(question.answer)}</div>
      </div>
    `;

    questionCard.innerHTML = html;

    // Update UI state
    currentQuestionSpan.textContent = index + 1;
    progressBar.style.width = `${((index + 1) / filteredQuestions.length) * 100}%`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === filteredQuestions.length - 1;

    // Update active question in list
    const questionItems = document.querySelectorAll(".question-item");
    questionItems.forEach((item) => item.classList.remove("active"));

    const activeItem = document.querySelector(
      `.question-item[data-id="${question.id}"]`
    );
    if (activeItem) {
      activeItem.classList.add("active");
      // Scroll to active item
      activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function escapeHtml(text) {
    // Escape HTML tags to prevent XSS
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatCode(code) {
    if (!code) return "";
    
    // Simple code syntax highlighting
    return escapeHtml(code)
      .replace(
        /\b(html|head|body|div|span|p|a|img|form|input|button|select|option|table|tr|th|td|ul|ol|li|audio|video|source|canvas|script|link|meta|style)\b/g,
        (match) => `<span class="keyword">${match}</span>`
      )
      .replace(/\n/g, "<br>");
  }

  function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      displayQuestion(currentQuestionIndex);
    }
  }

  function showNextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      currentQuestionIndex++;
      displayQuestion(currentQuestionIndex);
    }
  }

  function toggleAnswer() {
    const answerContainer = document.getElementById("answer-container");
    if (answerContainer) {
      answerContainer.classList.toggle("visible");

      if (answerContainer.classList.contains("visible")) {
        showAnswerBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Answer';
      } else {
        showAnswerBtn.innerHTML = '<i class="fas fa-eye"></i> Show Answer';
      }
    }
  }

  function updateQuestionList() {
    questionList.innerHTML = "";

    filteredQuestions.forEach((question, index) => {
      const listItem = document.createElement("div");
      listItem.className = "question-item";
      listItem.dataset.id = question.id;
      
      // Truncate long question titles
      const shortTitle = question.question.length > 30 
        ? question.question.substring(0, 30) + "..." 
        : question.question;
      
      listItem.textContent = `Q${question.id}: ${shortTitle}`;

      if (index === currentQuestionIndex) {
        listItem.classList.add("active");
      }

      listItem.addEventListener("click", () => {
        currentQuestionIndex = index;
        displayQuestion(currentQuestionIndex);
      });

      questionList.appendChild(listItem);
    });
  }

  function filterQuestions() {
    const selectedCategories = Array.from(filterCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    if (selectedCategories.length === 0) {
      filteredQuestions = [...questions];
    } else {
      filteredQuestions = questions.filter((question) =>
        selectedCategories.includes(question.category)
      );
    }

    // Reset to first question if current is out of bounds
    currentQuestionIndex = 0;

    updateQuestionList();
    displayQuestion(currentQuestionIndex);
    totalQuestionsSpan.textContent = filteredQuestions.length;
  }
});