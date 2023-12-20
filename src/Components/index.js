// ... (previous code remains unchanged)

const handlePreviousQuestion = () => {
  if (currentQuestionIndex > 0) {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  } else {
    // If it's the first question, move to the previous level
    const levels = Object.keys(Data[currentArea]);
    const currentLevelIndex = levels.indexOf(currentLevel);

    if (currentLevelIndex > 0) {
      setCurrentLevel(levels[currentLevelIndex - 1]);
      setCurrentQuestionIndex(Data[currentArea][levels[currentLevelIndex - 1]].length - 1);
    }
  }
};

// ...

return (
  <div style={{ backgroundColor: "#222747" }}>
    {/* ... (rest of the code remains unchanged) */}
    <div className="p-3 float-right mr-5">
      {currentQuestionIndex > 0 || Object.keys(Data[currentArea])[Object.keys(Data[currentArea]).indexOf(currentLevel)] !== 'level1' && (
        <button className="btn btn-lg btn-secondary mr-2" onClick={handlePreviousQuestion}>
          <i className="fa fa-angle-left pr-2" aria-hidden="true" /> Previous
        </button>
      )}
      <button className="btn btn-lg btn-primary" onClick={handleNextQuestion}>
        Next <i className="fa fa-angle-right pl-2" aria-hidden="true" />
      </button>
    </div>
    {/* ... (rest of the code remains unchanged) */}
  </div>
);
