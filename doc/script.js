<ul class="categories">
      <li>
        Животные
        <ul>
          <li>Кот</li>
          <li>Хомяк</li>
          <li>Лошадь</li>
          <li>Попугай</li>
        </ul>
      </li>
    </ul>
    <ul class="size-filter">
      <li>
        <label>
          <input type="checkbox" name="size" value="xs" />
          Extra Small
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" name="size" value="s" checked />
          Small
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" name="size" value="m" />
          Medium
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" name="size" value="l" checked />
          Large
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" name="size" value="xl" checked />
          Extra Large
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" name="size" value="xxl" />
          Extra Extra Large
        </label>
      </li>
    </ul>
    <div class="container">
      <div class="expression">
        <input type="text" placeholder="0" />
        <span>+</span>
        <input type="text" placeholder="0" />
        <span>=</span>
        <span class="result">0</span>
      </div>

      <button data-action="add">Сложить</button>
    </div>
    <button class="btn" data-action="sub">-1</button>
    <span class="value">0</span>
    <button class="btn" data-action="add">+1</button>
    <form class="question-form">
      <div class="options">
        <label>
          <input type="radio" name="option" value="html" />
          HTML
        </label>
        <label>
          <input type="radio" name="option" value="css" />
          CSS
        </label>
        <label>
          <input type="radio" name="option" value="js" />
          JavaScript
        </label>
        <label>
          <input type="radio" name="option" value="php" />
          PHP
        </label>
      </div>

      <button class="btn-submit" type="submit">Submit</button>
    </form>
    <p class="message"></p>
    <input class="input" type="text" />
    <p class="input-value">Current input value:</p>
    <p class="result-form">Result:</p>
    <div class="input-list">
      <input
        type="text"
        class="input"
        data-length="2"
        placeholder="2 символа"
      />
      <input
        type="text"
        class="input"
        data-length="4"
        placeholder="4 символа"
      />
      <input
        type="text"
        class="input"
        data-length="8"
        placeholder="8 символов"
      />
      <input
        type="text"
        class="input"
        data-length="16"
        placeholder="16 символов"
      />
    </div>
    <button class="button">0</button>
    <ul class="gallery"></ul>
    <ul class="list"></ul>
    <ul class="images">
      <li>
        <img src="https://placeimg.com/320/240/animals" alt="animals" />
      </li>
      <li>
        <img src="https://placeimg.com/320/240/arch" alt="arch" />
      </li>
      <li>
        <img src="https://placeimg.com/320/240/nature" alt="nature" />
      </li>
      <li>
        <img src="https://placeimg.com/320/240/tech" alt="tech" />
      </li>
    </ul>
    <ul class="button-list">
      <li>
        <button data-action="delete">Delete</button>
        <span>HTML</span>
      </li>
      <li>
        <button data-action="delete">Delete</button>
        <span>CSS</span>
      </li>
      <li>
        <button data-action="delete">Delete</button>
        <span>JS</span>
      </li>
      <li>
        <button data-action="delete">Delete</button>
        <span>React</span>
      </li>
      <li>
        <button data-action="delete">Delete</button>
        <span>NodeJS</span>
      </li>
      <li>
        <button data-action="delete">Delete</button>
        <span>PHP</span>
      </li>
    </ul>