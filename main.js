'use strict';

const STORE = [
  {
    id: 0,
    question: 'What is the name of this iconic cactus?',
    answer: 'Saguaro',
    opt1: 'Cholla',
    opt2: 'Saguaro',
    opt3: 'Ocotillo',
    opt4: 'Barrel cactus',
    imgQuest: 'https://static2.bigstockphoto.com/5/4/1/large1500/145717364.jpg',
    imgQuestAlt: 'Iconic cactus',
    imgAns: 'https://static2.bigstockphoto.com/5/4/1/large1500/145717364.jpg',
    imgAnsAlt: 'Iconic cactus'
  },
  {
    id: 1,
    question: 'In order to bring about the monsoon season, the Tohono O\'odham native people tradionally harvest and use the saguaro cactus fruit for what ceremonial consumable?',
    answer: 'Wine',
    opt1: 'Jam',
    opt2: 'Pie',
    opt3: 'Wine',
    opt4: 'Candy',
    imgQuest: 'https://i.pinimg.com/originals/c5/bc/e9/c5bce925c07d9c6e8affac874ce07d03.jpg',
    imgQuestAlt: 'Harvesting saguaro fruit',
    imgAns: 'https://i.pinimg.com/originals/c5/bc/e9/c5bce925c07d9c6e8affac874ce07d03.jpg',
    imgAnsAlt: 'Harvesting saguaro fruit'
  },
  {
    id: 2,
    question: 'At what age does a saguaro reach full maturity and height?',
    answer: '150-200 years old',
    opt1: '3-5 years old',
    opt2: '10-20 years old',
    opt3: '80-100 years old',
    opt4: '150-200 years old',
    imgQuest: 'https://c8.alamy.com/comp/PYPE84/an-old-saguaro-carnegiea-gigantea-in-the-sonoran-desert-with-many-large-arms-and-nest-holes-tucson-PYPE84.jpg',
    imgQuestAlt: 'Old saguaro',
    imgAns: 'https://c8.alamy.com/comp/PYPE84/an-old-saguaro-carnegiea-gigantea-in-the-sonoran-desert-with-many-large-arms-and-nest-holes-tucson-PYPE84.jpg',
    imgAnsAlt: 'Old saguaro'
  },
  {
    id: 3,
    question: 'How tall does a saguaro typically grow?',
    answer: '40-60ft',
    opt1: '8-10ft',
    opt2: '20-30ft',
    opt3: '40-60ft',
    opt4: '60-80ft',
    imgQuest: 'https://www.featurepics.com/StockImage/20080317/saguaro-cactus-stock-image-655120.jpg',
    imgQuestAlt: 'Tall saguaro',
    imgAns: 'https://www.featurepics.com/StockImage/20080317/saguaro-cactus-stock-image-655120.jpg',
    imgAnsAlt: 'Tall saguaro'
  },
  {
    id: 4,
    question: 'Needles (spines) are useful to a cactus plant for:',
    answer: 'All of the above',
    opt1: 'Protection from critters',
    opt2: 'Shade from the sun',
    opt3: 'A means of propagation in certain species',
    opt4: 'All of the above',
    imgQuest: 'https://image.shutterstock.com/image-photo/saguaro-cactus-needles-450w-597428216.jpg',
    imgQuestAlt: 'Cactus needles',
    imgAns: 'https://image.shutterstock.com/image-photo/saguaro-cactus-needles-450w-597428216.jpg',
    imgAnsAlt: 'Cactus needles'
  },
  {
    id: 5,
    question: 'When a baby saguaro grows beneath a tree, that tree is called a:',
    answer: 'Nurse tree',
    opt1: 'Nurse tree',
    opt2: 'Shelter tree',
    opt3: 'Parent tree',
    opt4: 'Shade tree',
    imgQuest: 'https://c8.alamy.com/comp/F6K4MW/an-excellent-example-of-a-nurse-tree-this-saguaro-cactus-survived-F6K4MW.jpg',
    imgQuestAlt: 'Baby saguaro under a tree',
    imgAns: 'https://c8.alamy.com/comp/F6K4MW/an-excellent-example-of-a-nurse-tree-this-saguaro-cactus-survived-F6K4MW.jpg',
    imgAnsAlt: 'Baby saguaro under a tree'
  },
  {
    id: 6,
    question: 'What is a saguaro "boot"?',
    answer: 'Previous nest of a burrowing bird',
    opt1: 'The base of the saguaro',
    opt2: 'Previous nest of a burrowing bird',
    opt3: 'Another name for a saguaro arm/branch',
    opt4: 'When the crown of an arm grows horizontally',
    imgQuest: 'https://static2.bigstockphoto.com/5/4/1/large1500/145717364.jpg',
    imgQuestAlt: 'Iconic cactus',
    imgAns: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/DBG_SaguaroBoot.jpg/240px-DBG_SaguaroBoot.jpg',
    imgAnsAlt: 'Saguaro boot'
  },
  {
    id: 7,
    question: 'Cutting down a saguaro without a special permit is a class four felony with what maximum prison sentence?',
    answer: '3 years, 9 months',
    opt1: '1 year, 5 months',
    opt2: '3 years, 9 months',
    opt3: '8 years, 3 months',
    opt4: '25 years, 0 months',
    imgQuest: 'https://3.bp.blogspot.com/-EKkbmXOR_5s/Ux5Zc3mFBbI/AAAAAAAABSE/I2MXCBILvTE/s1600/P1220020.JPG',
    imgQuestAlt: 'Fallen saguaro',
    imgAns: 'https://3.bp.blogspot.com/-EKkbmXOR_5s/Ux5Zc3mFBbI/AAAAAAAABSE/I2MXCBILvTE/s1600/P1220020.JPG',
    imgAnsAlt: 'Fallen saguaro'
  },
  {
    id: 8,
    question: 'When a saguaro dies, what is left behind?',
    answer: 'Vertical wooden ribs',
    opt1: 'Dense tree-like logs',
    opt2: 'Nothing; the entire plant disintegrates',
    opt3: 'Vertical wooden ribs',
    opt4: 'A dried-up, mummified version of itself',
    imgQuest: 'https://static2.bigstockphoto.com/5/4/1/large1500/145717364.jpg',
    imgQuestAlt: 'Iconic cactus',
    imgAns: 'https://www.outdoorphotographer.com/images/gallery/full/701/2191701.jpg',
    imgAnsAlt: 'Dead saguaro with only ribs rejsMaining'
  },
  {
    id: 9,
    question: 'Which is the only U.S. state where saguaros naturally grow?',
    answer: 'Arizona',
    opt1: 'Texas',
    opt2: 'California',
    opt3: 'New Mexico',
    opt4: 'Arizona',
    imgQuest: 'https://media.gettyimages.com/photos/arizona-tucson-saguaro-national-park-picture-id171855308?b=1&k=6&m=171855308&s=612x612&w=0&h=E1roVKn7qHC_jM9-92-Cor5npT9HsfctwmB7ScdqKSw=',
    imgQuestAlt: 'Arizona saguaros',
    imgAns: 'https://media.gettyimages.com/photos/arizona-tucson-saguaro-national-park-picture-id171855308?b=1&k=6&m=171855308&s=612x612&w=0&h=E1roVKn7qHC_jM9-92-Cor5npT9HsfctwmB7ScdqKSw=',
    imgAnsAlt: 'Arizona saguaros'
  }
];

const ANSWERS = [
  'Saguaro',
  'Wine',
  '150-200 years old',
  '40-60ft',
  'All of the above',
  'Nurse tree',
  'Previous nest of a burrowing bird',
  '3 years, 9 months',
  'Vertical wooden ribs',
  'Arizona'
];

(function($){

  let htmlClone = $('#jsMain').clone(true);
  let questIndex = 0;
  let optNum = 0;
  let questNum = questIndex + 1;
  let currentScore = 0;

  function handleRender() {
    console.log(`Ran 'handleRender'`);
    handleStartQuiz();
    handleSubmit();
    handleNextQuestion();
    questionFontSize();
    optionFontSize();
  };

  function questionFontSize() {
    console.log(`Ran 'questionFontSize'`);
    let currentFontSize = $('.questionH1').css('font-size');
    console.log('Variable currentFontSize: ' + currentFontSize);
    if (currentFontSize === '20px') {
      return `70%`;
    } else if (currentFontSize === '27px') {
      return `90%`;
    } else if (currentFontSize === '52px') {
      return `150%`;
    } else if (currentFontSize === '40px') {
      return `160%`;
    };
  };

  function optionFontSize() {
    console.log(`Ran 'optionFontSize'`);
    let currentOptionSize = $('.option').css('font-size');
    console.log('Variable currentOptionSize: ' + currentOptionSize);
    if (currentOptionSize === '15px') {
      return `70%`;
    } else if (currentOptionSize === '18px') {
      return `75%`;
    } else if (currentOptionSize === '36px') {
      return `130%`;
    };
  };

  function handleQuestionSize() {
    console.log(`Ran 'handleQuestionSize'`);
    $('#jsResizeQuestion').each(function() {
      let questionLength = $('#jsResizeQuestion').text().length;
      let fontSize = questionFontSize();
      //let fontSize = $('.questionH1').css('font-size');
      console.log('Variable questionLength: ' + questionLength);
      //console.log('Variable fontSize: ' + fontSize)
      if (questionLength > 65) {
        $('#jsResizeQuestion').css('font-size', `${fontSize}`);
        console.log(`Font size changed to: ${fontSize}`);
        // if ($('.questionH1').css('font-size') === '20px') {
        //   $('#jsResizeQuestion').css('font-size', '70%');
        //   console.log('Changed to 70%');
        // };
        // if ($('.questionH1').css('font-size') === '27px') {
        //   $('#jsResizeQuestion').css('font-size', '100%');
        //   console.log('Changed to 100%');
        // };
      };
    });
  };

  function handleOptionSize() {
    console.log(`Ran 'handleOptionSize'`);
    let optionLength = $('.jsResizeOption').text().length;
      let fontSize = optionFontSize();
      console.log('Variable optionLength: ' + optionLength);
    $('.jsResizeOption').each(function() {
      if (optionLength > 190) {
        $('.jsResizeOption').css('font-size', `${fontSize}`);
        console.log(`Option font size changed to: ${fontSize}`);
      };
    });
  };

  function handleStartQuiz() {
    console.log(`Ran 'handleStartQuiz'`);
    $('#jsStartQuiz').submit(function(event) {
      console.log(`User clicked 'Start Quiz!'`);
      $('#jsMain').html(questionPage(STORE));
      //questionFontSize();
      handleQuestionSize();
      handleOptionSize();
      return false;
    });
  };

  function questionPage(questionGroup) {
    console.log(`Rendered 'questionPage'`);
    let renderedQuestIndex = questionGroup[questIndex];
    let questNum = questIndex + 1;
    return `
    <header role="banner" class="header">
      <h1 id="jsResizeQuestion" class="questionH1">${renderedQuestIndex.question}</h1>
    </header>

    <section role="section" class="imgSection">
      <img class="quizImg" src="${renderedQuestIndex.imgQuest}" alt="${renderedQuestIndex.imgQuestAlt}"/>
    </section>

    <form id="jsOptionBox" class="questionForm">
      <fieldset class="questionFieldSet">

        <label class="jsResizeOption option">
          <input type="radio" name="option" value="${renderedQuestIndex.opt1}"/>
          ${renderedQuestIndex.opt1}
        </label>
        <br>

        <label class="jsResizeOption option">
          <input type="radio" name="option" value="${renderedQuestIndex.opt2}"/>
          ${renderedQuestIndex.opt2}
        </label>
        <br>

        <label class="jsResizeOption option">
          <input type="radio" name="option" value="${renderedQuestIndex.opt3}"/>
          ${renderedQuestIndex.opt3}
        </label>
        <br>

        <label class="jsResizeOption option">
          <input type="radio" name="option" value="${renderedQuestIndex.opt4}"/>
          ${renderedQuestIndex.opt4}
        </label>

      </fieldset>
    </form>

    <form id="jsSubmitForm" class="submitForm">
      <button type="submit" class="submitButton">Submit Answer</button>
    </form>

    <footer role="contentinfo" class="footer">

      <p class="questionCountP">Question ${questNum} of 10</p>
      <p class="currentScoreP">Current score: ${currentScore}/10</p>

    </footer>
    `;
  };

  function handleSubmit() {
    console.log(`Ran 'handleSubmit'`);
    $('#jsMain').on('click', '#jsSubmitForm', function(event) {
      console.log(`User clicked 'Submit Answer'`);
      handleAnswer(ANSWERS);
      return false;
    });
  };

  function handleAnswer(storedAnswers) {
    console.log(`Ran 'handleAnswer'`);
    let selectedAnswer = ($('input[name="option"]:checked', '#jsOptionBox').val());
    let answerIndex = storedAnswers.indexOf(selectedAnswer);
    console.log(answerIndex);
    if (answerIndex > -1) {
      console.log(`User answered correctly!`);
      handleCorrect();
    } else {
      console.log(`User answered incorrectly...`);
      handleIncorrect();
    };
  };

  function handleCorrect() {
    console.log(`Ran 'handleCorrectAnswer'`);
    $('#jsMain').html(correctAnswerPage(STORE));
    increaseScore();
  };

  function handleIncorrect() {
    console.log(`Ran 'handleIncorrectAnswer'`);
    $('#jsMain').html(incorrectAnswerPage(STORE));
  };

  function correctAnswerPage(questionGroup) {
    console.log(`Rendered 'correctAnswerPage'`);
    let renderedQuestIndex = questionGroup[questIndex];
    let questNum = questIndex + 1;
    return `
    <header role="banner" class="header">
      <h1 class="correctAnswerH1">Congrats! You got the right answer!</h1>
    </header>

    <section role="section" class="imgSection">
      <img class="quizImgAnswerPage" src="${renderedQuestIndex.imgAns}" alt="${renderedQuestIndex.imgAnsAlt}"/>
    </section>

    <form id="jsNextQuestion" class="submitForm">
      <button type="submit" class="submitButton">Next Question</button>
    </form>

    <footer role="contentinfo" class="footer">

      <p class="questionCountP">Question ${questNum} of 10</p>
      <p class="currentScoreP">Current score: ${currentScore}/10</p>

    </footer>
    `;
  };

  function incorrectAnswerPage(questionGroup) { 
    console.log(`Rendered 'incorrectAnswerPage'`);
    let renderedQuestIndex = questionGroup[questIndex];
    let questNum = questIndex + 1;
    return `
    <header role="banner" class="header">

      <h1 class="incorrectAnswerH1">Whoops!</h1>
      <h2 class="incorrectAnswerH2">The correct answer was:</h2>
      <p class="incorrectAnswerP">${ANSWERS[questIndex]}</p>

    </header>

    <section role="section" class="imgSection">
      <img class="quizImgAnswerPage" src="${renderedQuestIndex.imgAns}" alt="${renderedQuestIndex.imgAnsAlt}"/>
    </section>

    <form id="jsNextQuestion" class="submitForm">
      <button type="submit" class="submitButton">Next Question</button>
    </form>
    
    <footer role="contentinfo" class="footer">

      <p class="questionCountP">Question ${questNum} of 10</p>
      <p class="currentScoreP">Current score: ${currentScore}/10</p>

    </footer>
    `;
  };

  function handleNextQuestion() {
    console.log(`Ran 'handleNextQuestion'`);
    $('#jsMain').on('click', '#jsNextQuestion', function(event) {
      console.log(`User clicked 'Next Question'`);
      cycleNextQuestionGroup();
      if (questIndex <= 9) {
        $('#jsMain').html(questionPage(STORE));
      } else {
        $('#jsMain').html(quizEndPage());
      };
      //questionFontSize();
      handleQuestionSize();
      handleOptionSize();
      return false;
    });
  };

  function cycleNextQuestionGroup() {
    console.log(`Ran 'cycleNextQuestionGroup'`);
    questIndex++;
    optNum++;
  };

  function increaseScore() {
    console.log(`Ran 'increaseScore'`);
    currentScore++;
  };

  function quizEndPage() {
    console.log(`Rendered 'quizEndPage'`);
    return `
    <header role="header" class="header">
    
      <h1 class="finalPageH1">You made it to the end of the quiz!</h1>
      <h2 class="finalPageH2">Your final results:</h2>
      <p class="finalPageP">${currentScore} out of 10</p>

    </header>

    <form id="jsRestartQuiz" class="submitForm">
      <button type="submit" class="submitButton">Restart Quiz</button>
    </form>`;
  };

  function handleRestartQuiz() {
    console.log(`Ran 'handleRestartQuiz'`);
    $('#jsMain').on('click', '#jsRestartQuiz', function(event) {
      console.log(`User clicked 'Restart Quiz'`);
      $('#jsMain').replaceWith(htmlClone.clone(true));
      console.clear();
      return false;
    });
  };
  
  $(handleRender);
	
}(jQuery));