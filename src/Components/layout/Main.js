import React, { useEffect, useState } from "react";
import Data from "../Data/data.json";
import LoadingBar from "../ApexCharts/LoadingBar";

const Main = () => {
  const [currentArea, setCurrentArea] = useState("Area1");
  const [currentLevel, setCurrentLevel] = useState("Level1");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [userAnswers, setUserAnswers] = useState([]);
  let currentLevelIndex; 
  const currentQuestions = Data[currentArea][currentLevel];
  const knowledgeAreas = Object.keys(Data); //list of knowledge areas
  const levels = Object.keys(Data[currentArea]); //levels for the current area

  const [answeredCount, setAnsweredCount] = useState(0);
  const [isAssessmentCompleted, setIsAssessmentCompleted] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const [loadingBarData, setLoadingBarData] = useState(0.0);
  const [totalQuestions, setTotalQuestions] = useState(1);

  useEffect(() => {
    setTotalQuestions(getTotalQuestions());
    updateProgress();
  }, [currentQuestionIndex, userAnswers]);
  
  const updateProgress = () => {
    const totalQuestionsAcrossLevelsAndAreas = getTotalQuestions();
  
    const overallProgress = (answeredCount / totalQuestionsAcrossLevelsAndAreas) * 100;
  
    setLoadingBarData(overallProgress);
  };

  console.log(answeredCount);
  
  const getTotalQuestions = () => {
    let total = 0;
    for (const area of knowledgeAreas) {
      for (const level of Object.keys(Data[area])) {
        total += Data[area][level].length;
      }
    }
    return total || 1; // Ensure total is at least 1 to avoid division by zero
  };


  const handleOptionChange = (e) => {
    setAnsweredCount(answeredCount + 1);
    const selectedOption = e.target.value;
  
    setUserAnswers([
      ...userAnswers.slice(0, currentQuestionIndex),
      selectedOption,
    ]);
  
    setIsOptionSelected(true);
  
    // Check if the selected option is for the last question in the current level
    if (currentQuestionIndex === currentQuestions.length - 1) {
      setUserAnswers((prevAnswers) => [
        ...prevAnswers,
        undefined, // Mark that the user has answered the last question in the level
      ]);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      const levels = Object.keys(Data[currentArea]);
      const currentLevelIndex = levels.indexOf(currentLevel);
  
      if (currentLevelIndex > 0) {
        setCurrentLevel(levels[currentLevelIndex - 1]);
        setCurrentQuestionIndex(
          Data[currentArea][levels[currentLevelIndex - 1]].length - 1
        );
      } else {
        // If it's the first question in the first level of the current area, go to the last question of the last level of the previous area
        const areas = Object.keys(Data);
        const currentAreaIndex = areas.indexOf(currentArea);
  
        if (currentAreaIndex > 0) {
          const previousArea = areas[currentAreaIndex - 1];
          const previousAreaLevels = Object.keys(Data[previousArea]);
          const previousAreaLastLevel = previousAreaLevels[previousAreaLevels.length - 1];
  
          setCurrentArea(previousArea);
          setCurrentLevel(previousAreaLastLevel);
          setCurrentQuestionIndex(Data[previousArea][previousAreaLastLevel].length - 1);
        }
      }
    }
  };   

  const handleNextQuestion = () => {
    // Check if an option is selected for the current question
    if (isOptionSelected) {
      // If an option is selected, proceed to the next question
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsOptionSelected(false); // Reset the option selection state
      } else {
        // If all questions in the current level are answered, move to the next level
        const levels = Object.keys(Data[currentArea]);
        let currentLevelIndex = levels.indexOf(currentLevel);
  
        if (currentLevelIndex < levels.length - 1) {
          setCurrentLevel(levels[currentLevelIndex + 1]);
          setCurrentQuestionIndex(0);
        } else {
          // If all levels in the current area are completed, move to the next area
          const areas = Object.keys(Data);
          const currentAreaIndex = areas.indexOf(currentArea);
  
          if (currentAreaIndex < areas.length - 1) {
            // Check if it's the last question in the last level of Area2
            const isLastQuestionInArea2Level2 =
              currentArea === "Area2" &&
              currentLevel === "Level2" &&
              currentQuestionIndex ===
                Data[currentArea][currentLevel].length - 1;
  
            if (isLastQuestionInArea2Level2) {
              // Render the Finish button
              setIsAssessmentCompleted(true);
              updateProgress(); // Update progress here
            } else {
              // Move to the next area and reset to Level1
              setCurrentArea(areas[currentAreaIndex + 1]);
              setCurrentLevel("Level1");
              setCurrentQuestionIndex(0);
              // Update currentLevelIndex here
            }
          } else {
            // Assessment completed
            setIsAssessmentCompleted(true);
            updateProgress(); // Update progress here
          }
        }
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#222747" }}>
      <div className="main-content">
        <div className="section-body">
          <div className="container light-style flex-grow-1 container py-5">
            <div className="card overflow-hidden">
              <div className="row no-gutters row-bordered row-border-light d-flex justify-content-center rounded-top">
                <h4 className="pt-3 pb-2 text-black">{isAssessmentCompleted ? '' : currentArea}</h4>
              </div>
  
              {/* Card Content with Fixed Height */}
              <div style={{ height: "450px" }}>
                {/* Display Knowledge Areas */}
                {!isAssessmentCompleted && (
                  <div className="d-flex justify-content-center p-2">
                    <LoadingBar data={loadingBarData} title="Completed" />
                  </div>
                )}

                {/* Conditional rendering based on assessment completion */}
                {isAssessmentCompleted ? (
                  <div>
                    <h2 className="m-3 text-white text-center">Assessment Completed ;)</h2>
                    <p className="m-3 text-white text-center">
                      Thank you for taking the Assessment!
                    </p>
                  </div>
                ) : (
                  currentQuestions && currentQuestions.length > 0 && (
                    <>
                      <h5 className="mb-3 ml-5 text-white">
                        {currentQuestions[currentQuestionIndex].question}
                      </h5>
                      <div style={{ marginLeft: "108px" }}>
                      <div className="d-block mb-3">
                        {currentQuestions[currentQuestionIndex].options.map(
                          (option, index) => (
                            <div
                              className="d-block custom-control custom-radio p-2"
                              key={index}
                            >
                              <input
                                type="radio"
                                id={`option${index}`}
                                value={option}
                                name={`customRadio-${currentArea}-${currentLevel}-${index}`}
                                onChange={handleOptionChange}
                                className="custom-control-input"
                                checked={
                                  userAnswers[currentQuestionIndex] === option
                                }
                              />
                              <label
                                className="custom-control-label text-white-50"
                                htmlFor={`option${index}`}
                              >
                                {option}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                      <div
                        className="p-3 float-left"
                        style={{ marginLeft: "-75px" }}
                      >
                        <button
                          className={`btn btn-lg btn-primary cursor-pointer ${
                            currentQuestionIndex === 0 &&
                            currentArea === "Area1" &&
                            currentLevel === "Level1"
                              ? "disabled" // Add a class for disabled state
                              : ""
                          }`}
                          onClick={handlePreviousQuestion}
                          disabled={
                            currentQuestionIndex === 0 &&
                            currentArea === "Area1" &&
                            currentLevel === "Level1"
                          }
                        >
                          <i
                            className="fa fa-angle-left pr-2"
                            aria-hidden="true"
                          />{" "}
                          Previous
                        </button>
                      </div>
                      <div
                        className="p-3 float-right"
                        style={{ marginRight: "28px" }}
                      >
                        {currentQuestionIndex === currentQuestions.length - 1 &&
                        currentLevelIndex === levels.length - 1 ? (
                          // If it's the last question in the last level, display Finish button
                          <button
                            className={`btn btn-lg btn-primary ${
                              isAssessmentCompleted ? "d-none" : ""
                            }`}
                            // Handle the finish action here
                          >
                            Finish
                          </button>
                        ) : (
                          // Otherwise, display Next button
                          <button
                            className={`btn btn-lg btn-primary ${
                              isAssessmentCompleted ? "d-none" : ""
                            }`}
                            onClick={handleNextQuestion}
                            disabled={userAnswers[currentQuestionIndex] === undefined}
                          >
                            Next{" "}
                            <i
                              className="fa fa-angle-right pl-2"
                              aria-hidden="true"
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Main;
