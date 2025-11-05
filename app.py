from flask import Flask, render_template, request, jsonify
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)

# Load the trained model
try:
    model = joblib.load('titanic_survival_model.pkl')
    print("Model loaded successfully!")
except:
    print("Warning: Model not found. Please run the notebook first to train and save the model.")
    model = None

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded. Please train the model first.'})
    
    try:
        # Get form data
        data = request.get_json()
        
        # Create DataFrame with the input
        passenger_data = pd.DataFrame({
            'PassengerId': [int(data.get('passenger_id', 1))],
            'Sex': [int(data['sex'])],
            'Age': [float(data['age'])],
            'SibSp': [int(data['sibsp'])],
            'Parch': [int(data['parch'])],
            'Fare': [float(data['fare'])],
            'Embarked_Q': [int(data['embarked'] == 'Q')],
            'Embarked_S': [int(data['embarked'] == 'S')]
        })
        
        # Make prediction
        prediction = model.predict(passenger_data)
        probability = model.predict_proba(passenger_data)
        
        result = {
            'prediction': 'Survived' if prediction[0] == 1 else 'Did not survive',
            'survival_probability': f"{probability[0][1] * 100:.2f}%",
            'death_probability': f"{probability[0][0] * 100:.2f}%"
        }
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Render provides a dynamic port
    app.run(host="0.0.0.0", port=port, debug=True)
