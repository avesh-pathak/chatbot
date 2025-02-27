import google.generativeai as genai
from config import API_KEY

# Configure Gemini API
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

def get_gemini_prediction(student_data):
    prompt = f"""
    Analyze the student's performance based on the following scores:
    {student_data}
    
    1. Predict if the student will pass or fail (threshold: 250 marks).
    2. Assign a grade between 1 (lowest) to 5 (highest) based on total marks.
    3. Provide a brief explanation for the grading.
    """

    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Error: {e}"
