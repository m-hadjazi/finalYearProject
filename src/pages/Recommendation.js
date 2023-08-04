import React from 'react'

function Recommendation() {
  return (
    <div class="question" >
      <h1>Recomendation Question</h1>
      <form id="quizform">
        <div>
          <div class="container">
                    <div class="questionContainer">
                        <div class="actualQuestion">
                            <b>Which category of anime do you prefer most?</b>
                        </div>
                        <div class="optionAsAWhole" id="options">
                            <label class="options">Action <input type="checkbox" name="checkbox" value="Action"/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="options">Adventure <input type="checkbox" name="checkbox" value="Adventure"/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="options">Comedy <input type="checkbox" name="checkbox" value="Comedy"/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="options">Drama <input type="checkbox" name="checkbox" value="Drama"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <input type="email" class="textinp" name="email" id="email" placeholder="email" hidden/>
                <input class="submit_btn" type="submit" name="" id=""value="Submit"/>
                <br/>
        </div>
      </form>
    </div>
  )
}

export default Recommendation