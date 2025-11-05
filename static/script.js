document
  .getElementById("predictionForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      passenger_id: document.getElementById("passenger_id").value,
      sex: document.getElementById("sex").value,
      age: document.getElementById("age").value,
      sibsp: document.getElementById("sibsp").value,
      parch: document.getElementById("parch").value,
      fare: document.getElementById("fare").value,
      embarked: document.getElementById("embarked").value,
    };

    try {
      // Show loading state
      const resultDiv = document.getElementById("result");
      const resultContent = document.getElementById("resultContent");
      resultDiv.classList.remove("hidden");
      resultContent.innerHTML = "<p>Predicting... ⏳</p>";

      // Make prediction request
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // Display result
      if (result.error) {
        resultContent.innerHTML = `
                <div class="error">
                    <strong>Error:</strong> ${result.error}
                </div>
            `;
      } else {
        const survived = result.prediction === "Survived";
        resultContent.innerHTML = `
                <div class="prediction-box ${
                  survived ? "survived" : "not-survived"
                }">
                    <div class="prediction-text" style="color: ${
                      survived ? "#28a745" : "#dc3545"
                    }">
                        ${result.prediction} ${survived ? "✅" : "❌"}
                    </div>
                    <div class="probability">
                        <p><strong>Survival Probability:</strong> ${
                          result.survival_probability
                        }</p>
                        <p><strong>Death Probability:</strong> ${
                          result.death_probability
                        }</p>
                    </div>
                </div>
            `;
      }

      // Scroll to result
      resultDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } catch (error) {
      const resultContent = document.getElementById("resultContent");
      resultContent.innerHTML = `
            <div class="error">
                <strong>Error:</strong> Failed to make prediction. Please try again.
            </div>
        `;
    }
  });
