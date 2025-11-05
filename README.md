# 🚢 Titanic Survival Predictor

A machine learning web application that predicts the survival chances of Titanic passengers based on their characteristics using Logistic Regression.

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Flask](https://img.shields.io/badge/Flask-3.0.0-green)
![scikit--learn](https://img.shields.io/badge/scikit--learn-1.3.2-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Model Details](#model-details)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Author](#author)

## 🎯 Overview

This project uses machine learning to predict whether a passenger would survive the Titanic disaster. The model is trained on the famous Titanic dataset and deployed as a web application using Flask.

**Key Highlights:**

- ✅ Interactive web interface
- ✅ Real-time predictions
- ✅ Probability scores for survival
- ✅ Clean and responsive design
- ✅ Easy to use and deploy

## ✨ Features

- **Web Interface**: Simple and intuitive form-based interface
- **Real-time Prediction**: Get instant survival predictions
- **Probability Analysis**: View survival and death probabilities
- **Data Validation**: Input validation for accurate predictions
- **Responsive Design**: Works on desktop and mobile devices

## 🖼️ Demo

The web interface allows you to input passenger details:

- Gender (Male/Female)
- Age
- Number of Siblings/Spouses aboard
- Number of Parents/Children aboard
- Ticket Fare
- Port of Embarkation (Cherbourg, Queenstown, Southampton)

The model then predicts survival with probability scores!

## 🚀 Installation

### Prerequisites

- Python 3.8 or higher
- pip package manager

### Step 1: Clone the Repository

```bash
git clone https://github.com/itsluckysharma01/Titanic_Survival_Predictor_SmartED.git
cd Titanic_Survival_Predictor_SmartED
```

### Step 2: Create Virtual Environment (Optional but Recommended)

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 4: Train the Model

Before running the web app, you need to train the model first:

1. Open `Titanic_Survival_Predictor.ipynb` in Jupyter Notebook or VS Code
2. Run all cells to train the model
3. This will create `titanic_survival_model.pkl` file

Alternatively, run the notebook from command line:

```bash
jupyter notebook Titanic_Survival_Predictor.ipynb
```

## 💻 Usage

### Running the Web Application

1. Make sure the model file `titanic_survival_model.pkl` exists (created in Step 4 above)

2. Start the Flask server:

```bash
python app.py
```

3. Open your browser and navigate to:

```
http://localhost:5000
```

4. Fill in the passenger details and click "Predict Survival"

5. View the prediction results with probability scores!

### Running the Jupyter Notebook

To explore the data analysis and model training:

```bash
jupyter notebook Titanic_Survival_Predictor.ipynb
```

## 📁 Project Structure

```
Titanic_Survival_Predictor_Project/
│
├── app.py                              # Flask application
├── Titanic_Survival_Predictor.ipynb    # Jupyter notebook with ML pipeline
├── Titanic_Dataset_SmartED.csv         # Dataset
├── titanic_survival_model.pkl          # Trained model (created after training)
├── requirements.txt                    # Python dependencies
├── README.md                           # Project documentation
│
├── templates/
│   └── index.html                      # Web interface HTML
│
└── static/
    ├── style.css                       # Stylesheet
    └── script.js                       # JavaScript for interactivity
```

## 🧠 Model Details

### Algorithm

- **Model**: Logistic Regression
- **Max Iterations**: 200
- **Features Used**: 8 features
  - PassengerId
  - Sex (0: Male, 1: Female)
  - Age
  - SibSp (Siblings/Spouses)
  - Parch (Parents/Children)
  - Fare
  - Embarked_Q (Port: Queenstown)
  - Embarked_S (Port: Southampton)

### Data Preprocessing

1. **Missing Values**:

   - Age: Filled with median
   - Embarked: Filled with mode
   - Cabin: Dropped (too many missing values)

2. **Feature Engineering**:

   - Dropped unnecessary columns: Name, Ticket
   - Converted categorical variables:
     - Sex: Male=0, Female=1
     - Embarked: One-hot encoding

3. **Train-Test Split**: 80-20 split

### Model Performance

The model's performance metrics are displayed in the Jupyter notebook, including:

- Accuracy Score
- Confusion Matrix
- Classification Report (Precision, Recall, F1-Score)

## 🛠️ Technologies Used

### Backend

- **Flask**: Web framework
- **scikit-learn**: Machine learning library
- **pandas**: Data manipulation
- **numpy**: Numerical computing
- **joblib**: Model serialization

### Frontend

- **HTML5**: Structure
- **CSS3**: Styling with gradients and animations
- **JavaScript (Vanilla)**: Interactivity and AJAX requests

### Data Science

- **Jupyter Notebook**: Interactive development
- **matplotlib**: Data visualization
- **seaborn**: Statistical visualizations

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Lucky Sharma**

- GitHub: [@itsluckysharma01](https://github.com/itsluckysharma01)
- Project Link: [Titanic Survival Predictor](https://github.com/itsluckysharma01/Titanic_Survival_Predictor_SmartED)

## 🙏 Acknowledgments

- Dataset source: [Kaggle Titanic Dataset](https://www.kaggle.com/c/titanic)
- Inspired by the classic Titanic ML problem
- Built as part of SmartED Projects

## 📧 Contact

For questions or suggestions, feel free to reach out or open an issue!

---

⭐ **If you found this project helpful, please give it a star!** ⭐
